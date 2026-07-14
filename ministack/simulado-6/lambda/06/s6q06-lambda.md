# Documentação Técnico-Operacional: Diagnóstico de Integração e Logs no Amazon API Gateway

Este documento detalha o procedimento prático para configurar, habilitar e auditar o registro de logs detalhados (Method-level logging) no Amazon CloudWatch a partir do Amazon API Gateway. O objetivo é diagnosticar e depurar falhas de integração (erros HTTP 500/502) com funções AWS Lambda no ambiente local de desenvolvimento (MiniStack).

---

## 1. Explicação Arquitetural: Logs em Nível de Método e Permissões

Ao diagnosticar falhas de integração entre o API Gateway e o AWS Lambda, o log detalhado é a ferramenta mais eficiente para expor onde a comunicação falhou (seja no mapeamento de entrada, no timeout da função ou na estrutura do payload de retorno). Para viabilizar esse monitoramento, dois pontos arquiteturais são mandatórios:

#### 1. IAM Role Global do API Gateway para CloudWatch
Diferente de outros serviços AWS que usam Resource-Based Policies para enviar logs, o Amazon API Gateway requer uma configuração global em nível de conta de uma IAM Role que possua a política gerenciada `AmazonAPIGatewayPushToCloudWatchLogs`. Sem essa associação prévia nas propriedades da conta do API Gateway, nenhuma tentativa de escrita no CloudWatch Logs será efetuada, independentemente das configurações do estágio ou método.

#### 2. Sobrescrita de Configurações do Estágio (Method Override)
O API Gateway permite gerenciar o comportamento dos logs de duas formas:
* **Stage Settings:** Configurações globais que aplicam as regras de logs para todos os recursos e métodos contidos naquele estágio de forma uniforme.
* **Method Settings:** Ao definir uma configuração de log específica para um método (por exemplo, `POST /produtos`), essa definição sobrescreve (*overrides*) as diretrizes gerais do estágio para aquele recurso. Isso possibilita ativar o detalhamento máximo (`Full Request and Response Logs`) apenas no método problemático, evitando overhead e custos excessivos com armazenamento de logs.

---

## 2. Associação da IAM Role do CloudWatch ao API Gateway

Primeiro, garantimos a existência de uma IAM Role local no MiniStack contendo a política padrão de publicação de logs para o CloudWatch.

```bash
echo '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "apigateway.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}' > apigateway-trust-policy.json

```

#### Criação da Role do API Gateway

* O comando `awslocal iam create-role` provisiona a nova identidade de infraestrutura.
* O parâmetro `--role-name` atribui o nome único `ApiGatewayCloudWatchLogsRole` ao recurso.
* O parâmetro `--assume-role-policy-document` vincula o arquivo JSON com a política de confiança do serviço.

```bash
awslocal iam create-role \
    --role-name ApiGatewayCloudWatchLogsRole \
    --assume-role-policy-document file://apigateway-trust-policy.json

```

#### Associação de Política Gerenciada (Managed Policy)

* O comando `awslocal iam attach-role-policy` anexa um conjunto de permissões padrão a um perfil.
* O parâmetro `--role-name` especifica qual Role receberá o anexo de privilégio.
* O parâmetro `--policy-arn` fornece o identificador AWS oficial da política para injeção de logs do API Gateway.

```bash
awslocal iam attach-role-policy \
    --role-name ApiGatewayCloudWatchLogsRole \
    --policy-arn arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs

```

#### Vinculação da Conta com a Role no API Gateway

* O comando `awslocal apigateway update-account` altera metadados globais do serviço de APIs na conta.
* O parâmetro `--patch-operations` descreve a alteração lógica para preencher o campo do ARN da Role do CloudWatch.

```bash
awslocal apigateway update-account \
    --patch-operations op=replace,path=/cloudwatchRoleArn,value=arn:aws:iam::000000000000:role/ApiGatewayCloudWatchLogsRole

```

---

## 3. Descoberta Ativa dos Identificadores Locais

Antes de aplicar as configurações de log no estágio, é necessário mapear dinamicamente os IDs gerados pelo MiniStack no seu ciclo atual de execução.

### Passo A: Listar as REST APIs Ativas

* O comando `awslocal apigateway get-rest-apis` retorna a coleção de APIs criadas na conta.

```bash
awslocal apigateway get-rest-apis

```

### Passo B: Listar os Estágios (Stages) da API

* O comando `awslocal apigateway get-stages` recupera a coleção de ambientes de publicação de uma API.
* O parâmetro `--rest-api-id` injeta o identificador exclusivo descoberto no passo A.

```bash
awslocal apigateway get-stages --rest-api-id ID_DA_SUA_API

```

---

## 4. Ativação de Logs Detalhados em Nível de Método (Method-Level Logging)

Utilizando os identificadores dinâmicos mapeados no passo anterior, executa-se a modificação cirúrgica do estágio para habilitar o rastreamento pleno de dados.

#### Atualização e Sobrescrita de Logs no Stage

* O comando `awslocal apigateway update-stage` modifica dinamicamente as propriedades de um ambiente publicado.
* O parâmetro `--rest-api-id` especifica a API alvo do ajuste.
* O parâmetro `--stage-name` indica qual ambiente receberá a diretiva (ex: `dev`, `v1`).
* O parâmetro `--patch-operations` executa o override configurando o nível lúdico de rastreamento para o método HTTP `POST` no recurso `/produtos`.

```bash
awslocal apigateway update-stage \
    --rest-api-id ID_DA_SUA_API \
    --stage-name NOME_DO_SEU_ESTAGIO \
    --patch-operations '[
        {
            "op": "replace",
            "path": "/~1produtos/POST/logging/loglevel",
            "value": "INFO"
        },
        {
            "op": "replace",
            "path": "/~1produtos/POST/logging/dataTrace",
            "value": "true"
        }
    ]'

```

---

## 5. Auditoria de Logs de Erro no CloudWatch Logs

Após realizar uma chamada HTTP `POST` de teste para a sua API REST que resultou em erro de integração, o API Gateway gerará um grupo de logs específico seguindo o padrão de nomenclatura `API-Gateway-Execution-Logs_{rest_api_id}/{stage_name}`.

#### Coleta dos Streams de Log Ativos

* O comando `awslocal logs describe-log-streams` retorna os fluxos internos pertencentes a um Log Group.
* O parâmetro `--log-group-name` informa a máscara de identificação gerada pelo API Gateway.
* O parâmetro `--order-by` e `--descending` priorizam o recebimento das ocorrências mais recentes geradas.
* O parâmetro `--max-items` restringe a busca ao último stream gerado para agilizar o diagnóstico.

```bash
awslocal logs describe-log-streams \
    --log-group-name "API-Gateway-Execution-Logs_ID_DA_SUA_API/NOME_DO_SEU_ESTAGIO" \
    --order-by LastEventTime \
    --descending \
    --max-items 1

```

#### Inspeção do Payload e Diagnóstico de Erro

* O comando `awslocal logs get-log-events` realiza o dump e leitura dos dados armazenados no CloudWatch.
* O parâmetro `--log-group-name` indica o contêiner centralizador de logs.
* O parâmetro `--log-stream-name` injeta a string do stream obtido na consulta anterior (ex: `d982b6c7f89d`).

```bash
awslocal logs get-log-events \
    --log-group-name "API-Gateway-Execution-Logs_ID_DA_SUA_API/NOME_DO_SEU_ESTAGIO" \
    --log-stream-name "d982b6c7f89d"

```

**Output gerado pelo terminal contendo a depuração da falha:**

```json
{
    "events": [
        {
            "timestamp": 1782294120000, // Registro do timestamp UNIX em milissegundos marcando o início da operação de requisição.
            "message": "Starting execution for request: f4e5d6c7-b8a1" // Mensagem informativa: Indica o início do ciclo de vida da chamada HTTP com a ID gerada.
        },
        {
            "timestamp": 1782294120100, // Registro do timestamp UNIX do recebimento do corpo da mensagem.
            "message": "Method request body before transformations: {\"id\": \"prod-100\"}" // Mensagem informativa: Expõe o payload JSON original submetido pelo cliente.
        },
        {
            "timestamp": 1782294120250, // Registro do timestamp UNIX do término da fase de transformação.
            "message": "Endpoint request body after transformations: {\"id\": \"prod-100\"}" // Mensagem informativa: Mostra os dados após aplicação de regras de mapeamento de entrada.
        },
        {
            "timestamp": 1782294120500, // Registro do timestamp UNIX que assinala a saída do dado do barramento do gateway.
            "message": "Sending request to [https://lambda.us-east-1.amazonaws.com/.../functions/MinhaFuncao/invocations](https://lambda.us-east-1.amazonaws.com/.../functions/MinhaFuncao/invocations)" // Mensagem informativa: URL de endpoint interno acionada para chamar a Lambda integrada.
        },
        {
            "timestamp": 1782294121200, // Registro do timestamp UNIX crítico do erro de execução.
            "message": "Execution failed due to configuration error: Invalid JSON returned by Lambda integration. Expected object but received string." // Mensagem de Falha Crítica: Evidencia erro de contrato, onde a função Lambda falhou por retornar uma string crua ao invés de um objeto JSON válido.
        },
        {
            "timestamp": 1782294121250, // Registro do timestamp UNIX do encerramento da conexão HTTP.
            "message": "Method completed with status: 502" // Mensagem informativa final: Define o código de retorno de erro HTTP 502 (Bad Gateway) gerado e enviado para o cliente.
        }
    ]
}

```

---

**Conclusão:** Através da ativação seletiva de Logs em Nível de Método, a falha de comunicação entre o API Gateway e o AWS Lambda pôde ser isolada e visualizada com precisão. O monitoramento detalhado revelou que a Lambda retornou um formato de resposta fora dos padrões de integração de proxy esperados pelo API Gateway, permitindo o ajuste ágil do contrato da função para reestabelecer o fluxo correto da API.

```
---

```