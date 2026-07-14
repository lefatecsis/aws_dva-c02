# Documentação Técnica: Arquitetura Orientada a Eventos com Amazon EventBridge e SNS

Este documento detalha o procedimento prático para simular o comportamento orientado a eventos do AWS CodeCommit no ambiente local de desenvolvimento (MiniStack), utilizando o Amazon EventBridge para filtrar atualizações de branch e direcionar o tráfego para um tópico do Amazon SNS.


## 1. Explicação Arquitetural e Estrutura do Event Pattern

Para simular as notificações de ciclo de vida de um repositório, o ecossistema utiliza uma regra lógica no EventBridge que escuta eventos provenientes do CodeCommit. 

O padrão de filtragem (**Event Pattern**) garante que a automação seja disparada única e exclusivamente quando houver uma modificação de referência bem-sucedida (`referenceUpdated`) realizada estritamente na branch principal (`main`) do repositório alvo.

```json
{
  "source": ["aws.codecommit"],
  "detail-type": ["CodeCommit Repository State Change"],
  "resources": ["arn:aws:codecommit:us-east-1:000000000000:RepositorioVarejo"],
  "detail": {
    "event": ["referenceUpdated"],
    "referenceName": ["main"]
  }
}

```

---

## 2. Configuração da Regra no EventBridge com Filtro de Branch

Estando na pasta `/04`, salve o arquivo de padronização do evento estruturado em JSON:

```bash
echo '{
  "source": ["aws.codecommit"],
  "detail-type": ["CodeCommit Repository State Change"],
  "resources": ["arn:aws:codecommit:us-east-1:000000000000:RepositorioVarejo"],
  "detail": {
    "event": ["referenceUpdated"],
    "referenceName": ["main"]
  }
}' > event-pattern.json

```

Com o arquivo pronto, cria-se a regra de barramento responsável por interceptar e avaliar a estrutura do payload gerado.

#### Criação da Regra de Evento

* O comando `awslocal events put-rule` registra ou atualiza uma regra de filtragem lógica no Amazon EventBridge.
* O parâmetro `--name` define o identificador legível da regra como `GatilhoPipeline`.
* O parâmetro `--event-pattern` aponta para o arquivo JSON contendo a máscara de filtro estrutural.
* O parâmetro `--state` força a ativação imediata do monitoramento com o estado `ENABLED`.

```bash
awslocal events put-rule \
    --name GatilhoPipeline \
    --event-pattern file://event-pattern.json \
    --state ENABLED

```

**Output gerado pelo terminal:**

```json
{
    "RuleArn": "arn:aws:events:us-east-1:000000000000:rule/GatilhoPipeline" // Identificador global (ARN) da regra de evento registrada com sucesso.
}

```

---

## 3. Associação de Target e Criação do Tópico de Destino (SNS)

Para propagar a notificação para as esteiras de CI/CD subsequentes, provisiona-se um tópico Pub/Sub no Amazon SNS que atuará como destino direto da regra.

#### Criação do Tópico de Mensageria

* O comando `awslocal sns create-topic` inicializa o provisionamento de um barramento de tópicos do SNS.
* O parâmetro `--name` determina a nomenclatura de identificação do tópico como `TopicoPipelineGatilhado`.

```bash
awslocal sns create-topic --name TopicoPipelineGatilhado

```

**Output gerado pelo terminal:**

```json
{
    "TopicArn": "arn:aws:sns:us-east-1:000000000000:TopicoPipelineGatilhado" // ARN exclusivo gerado para subscrição e publicação de mensagens.
}

```

#### Vinculação do Alvo (Target) na Regra

* O comando `awslocal events put-targets` atrela um ou mais destinos finais a uma regra previamente configurada no EventBridge.
* O parâmetro `--rule` referencia qual regra de captura de eventos receberá o roteamento do alvo (`GatilhoPipeline`).
* O parâmetro `--targets` configura a lista de destinos injetando um ID arbitrário de controle e o ARN do tópico SNS de entrega.

```bash
awslocal events put-targets \
    --rule GatilhoPipeline \
    --targets "Id=1,Arn=arn:aws:sns:us-east-1:000000000000:TopicoPipelineGatilhado"

```

**Output gerado pelo terminal:**

```json
{
    "FailedEntryCount": 0, // Contador de falhas: Indica a quantidade de alvos que falharam no registro (zero indica sucesso total).
    "FailedEntries": [] // Lista detalhada com as justificativas técnicas e códigos de erro de registros malsucedidos.
}

```

---

## 4. Automatização via Git Hook Local

Utilizaremos o arquivo oculto `.git/hooks/` do próprio repositório clonado localmente para injetar o comportamento automatizado transparente toda vez que um commit for gerado na branch `main`.

Crie o arquivo de hook diretamente no diretório correspondente da pasta raiz do seu projeto local:

```bash
echo '#!/bin/bash
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" = "main" ]; then
    COMMIT_ID=$(git rev-parse HEAD)
    awslocal events put-events --entries "[
      {
        \"Source\": \"aws.codecommit\",
        \"DetailType\": \"CodeCommit Repository State Change\",
        \"Resources\": [\"arn:aws:codecommit:us-east-1:000000000000:RepositorioVarejo\"],
        \"Detail\": \"{\\\"event\\\":\\\"referenceUpdated\\\",\\\"repositoryName\\\":\\\"RepositorioVarejo\\\",\\\"referenceType\\\":\\\"branch\\\",\\\"referenceName\\\":\\\"main\\\",\\\"commitId\\\":\\\"'$COMMIT_ID'\\\"}\"
      }
    ]"
fi' > ../../../../.git/hooks/post-commit

chmod +x ../../../../.git/hooks/post-commit

```

---

## 5. Validação Prática e Inspeção dos Logs em Tempo Real

Para validar e disparar o fluxo de forma síncrona dentro da sua pasta `04`, gere uma alteração ou modifique um arquivo e realize o commit local:

```bash
echo "// Update Pipeline Log" >> alteracao.js
git add alteracao.js
git commit -m "chore: atualizando gatilho de eventos"

```

#### Monitoramento e Validação Interna do Fluxo de Dados

Com o commit efetuado, o hook rodará automaticamente. Você pode checar o tráfego do evento e o recebimento de mensagens no SNS via logs do container do LocalStack rodando o seguinte comando no terminal:

```bash
docker logs $(docker ps -q --filter ancestor=localstack/localstack) | grep -E "events|sns"

```

**Output esperado nos logs do MiniStack:**

```text
2026-07-10 10:04:12 INFO [events] EventBridge received custom event from source: aws.codecommit
2026-07-10 10:04:12 INFO [events] Rule 'GatilhoPipeline' matched event payload successfully.
2026-07-10 10:04:12 INFO [sns] SNS Publish operation invoked for topic: arn:aws:sns:us-east-1:000000000000:TopicoPipelineGatilhado
2026-07-10 10:04:12 INFO [sns] Message Delivered successfully to subscriber endpoints.

```

---

**Conclusão:** O ciclo de integração orientada a eventos foi consolidado com sucesso. O barramento do Amazon EventBridge interpretou e filtrou nativamente o payload enviado via Git Hook, encaminhando-o sem perdas para o Amazon SNS para notificar os assinantes da esteira de automação.

```
---

```