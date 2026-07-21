# Documentação Técnica: Resolução de Concorrência e Isolamento de Recursos com AWS Lambda

Este documento detalha o procedimento prático para solucionar problemas de contenção de recursos computacionais ("vizinho barulhento") entre funções AWS Lambda na mesma conta, configurando limites de concorrência no ambiente local de desenvolvimento (MiniStack) para garantir a integridade do Application Load Balancer (ALB).


## 1. Explicação Arquitetural: Concorrência Reservada vs. Provisionada

Em um ecossistema AWS, todas as funções Lambda de uma mesma conta em uma determinada região compartilham um pool comum de concorrência (por padrão, 1.000 execuções simultâneas). Quando uma função de alta intensidade computacional (`FuncaoB`) consome toda essa cota regional, as demais funções (como a `FuncaoA`, integrada ao ALB) sofrem estrangulamento (*throttling*), resultando em falhas HTTP 502/503 no balanceador.

#### Concorrência Reservada (Reserved Concurrency)
A Concorrência Reservada garante que uma função Lambda tenha uma quantidade dedicada de execuções simultâneas. Ao associar este limite a uma função, duas ações ocorrem simultaneamente:
1. **Garantia de Capacidade (Piso):** Esse número de execuções é retirado do pool geral da conta e reservado exclusivamente para a função. Nenhuma outra função pode utilizar essa cota.
2. **Limite Máximo (Teto):** A função é impedida de exceder o limite estabelecido, agindo como um mecanismo de controle contra surtos de tráfego.

Aplicar Concorrência Reservada na `FuncaoA` garante que ela sempre tenha capacidade operacional para responder às requisições repassadas pelo ALB. Aplicá-la na `FuncaoB` limita o consumo descontrolado dela, mantendo o restante do pool da conta livre para outros serviços.

#### Concorrência Provisionada (Provisioned Concurrency)
Diferente da reservada, a Concorrência Provisionada pré-inicializa ambientes de execução (microVMs) para manter instâncias quentes e prontas para responder instantaneamente, eliminando a latência de inicialização (*cold start*). Ela não reserva cota do pool regional para isolamento de surtos de concorrência geral da conta, apenas otimiza o tempo de resposta da própria função.

---

## 2. Criação das Funções Lambda de Simulação

Para criar as funções no MiniStack, geramos previamente um arquivo ZIP contendo um código JavaScript mínimo de execução.

```bash
echo "exports.handler = async (event) => { return { statusCode: 200, body: 'Funcao A' }; };" > index-a.js
zip funcao-a.zip index-a.js

echo "exports.handler = async (event) => { return { statusCode: 200, body: 'Funcao B' }; };" > index-b.js
zip funcao-b.zip index-b.js

```

Em seguida, inicializamos o provisionamento das duas funções Lambda para simular o estado do ecossistema.

#### Implantação da FuncaoA

* O comando `awslocal lambda create-function` cria o recurso de computação na infraestrutura local.
* O parâmetro `--function-name` define o nome exclusivo do recurso como `FuncaoA`.
* O parâmetro `--runtime` estipula o motor de execução `nodejs18.x`.
* O parâmetro `--role` atrela o ARN do perfil de execução IAM exigido para segurança.
* O parâmetro `--handler` configura o ponto de entrada lido pelo container (`index-a.handler`).
* O parâmetro `--zip-file` repassa o binário do pacote local compactado.

```bash
awslocal lambda create-function \
     --function-name FuncaoA \
     --runtime nodejs18.x \
     --role arn:aws:iam::000000000000:role/lambda-execution-role \
     --handler index-a.handler \
     --zip-file fileb://funcao-a.zip

```

**Output gerado pelo terminal (FuncaoA):**

```json
{
    "FunctionName": "FuncaoA", // Nome atribuído à função no MiniStack.
    "FunctionArn": "arn:aws:lambda:us-east-1:000000000000:function:FuncaoA", // ARN global para identificação inequívoca do recurso.
    "Runtime": "nodejs18.x", // Ambiente computacional e linguagem interpretada ativa.
    "Role": "arn:aws:iam::000000000000:role/lambda-execution-role", // Perfil IAM de privilégios vinculado.
    "Handler": "index-a.handler", // Arquivo e método disparados na execução.
    "CodeSize": 255, // Tamanho em bytes do artefato .zip implantado.
    "Description": "", // Descrição opcional da função Lambda.
    "Timeout": 3, // Tempo limite máximo de execução de 3 segundos padrão.
    "MemorySize": 128, // Capacidade inicial de hardware alocada em MB.
    "LastModified": "2026-07-14T12:39:06.695+0000", // Registro de data e hora UTC do deploy.
    "CodeSha256": "D132u6CfYTRkfblO97qUoUzvY9IMLNCPs9BPW5mrlPQ=", // Hash SHA256 do arquivo zip para verificação de integridade.
    "Version": "$LATEST", // Aponta para o estágio de desenvolvimento ativo do código.
    "VpcConfig": {
        "SubnetIds": [], // Sub-redes associadas para tráfego interno (vazio indica internet padrão).
        "SecurityGroupIds": [], // Grupos de segurança atrelados à interface de rede.
        "VpcId": "" // ID da nuvem virtual privada vinculada.
    },
    "KMSKeyArn": "", // ARN da chave criptográfica para proteção de dados sensíveis.
    "TracingConfig": {
        "Mode": "PassThrough" // Modo de rastreabilidade de telemetria do AWS X-Ray.
    },
    "RevisionId": "8106fdac-8530-4762-9470-c2cc99f738b0", // Código interno de revisão do estado da configuração.
    "Layers": [], // Módulos ou dependências compartilhadas via camadas adicionais.
    "State": "Pending", // Estado operacional momentâneo da alocação de hardware.
    "StateReason": "The function is being created.", // Detalhamento textual informativo sobre o estado de criação.
    "StateReasonCode": "Creating", // Código pragmático do status de alocação de infraestrutura.
    "LastUpdateStatus": "InProgress", // Status dinâmico da última atualização de infraestrutura.
    "LastUpdateStatusReason": "", // Mensagem explicativa em caso de erro na atualização.
    "LastUpdateStatusReasonCode": "", // Código técnico da falha de modificação recente.
    "PackageType": "Zip", // Método de empacotamento do código-fonte adotado.
    "Architectures": [
        "x86_64" // Conjunto de instruções do processador emulado.
    ],
    "EphemeralStorage": {
        "Size": 512 // Tamanho padrão do disco volátil temporário montado em /tmp em MB.
    },
    "SnapStart": {
        "ApplyOn": "None", // Mecanismo de aceleração via Snapshot de memória desativado.
        "OptimizationStatus": "Off" // Status técnico da otimização de inicialização da microVM.
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "" // ARN do patch de runtime fornecido pela AWS.
    },
    "LoggingConfig": {
        "LogFormat": "Text", // Formato de gravação de saída do console do sistema.
        "LogGroup": "/aws/lambda/FuncaoA" // Destino lógico de armazenamento do stream de logs.
    }
}

```

#### Implantação da FuncaoB

* O comando `awslocal lambda create-function` repete o provisionamento para o segundo recurso computacional.
* O parâmetro `--function-name` define o nome exclusivo do recurso como `FuncaoB`.
* Os demais parâmetros replicam a anatomia técnica do runtime anterior, apontando para o seu respectivo arquivo zip (`funcao-b.zip`) e handler correspondente.

```bash
awslocal lambda create-function \
     --function-name FuncaoB \
     --runtime nodejs18.x \
     --role arn:aws:iam::000000000000:role/lambda-execution-role \
     --handler index-b.handler \
     --zip-file fileb://funcao-b.zip

```

**Output gerado pelo terminal (FuncaoB):**

```json
{
    "FunctionName": "FuncaoB", // Identificador nominal do segundo recurso Lambda.
    "FunctionArn": "arn:aws:lambda:us-east-1:000000000000:function:FuncaoB", // ARN exclusivo gerado para a FuncaoB.
    "Runtime": "nodejs18.x", // Ambiente de execução configurado para a aplicação.
    "Role": "arn:aws:iam::000000000000:role/lambda-execution-role", // Função de privilégios IAM associada.
    "Handler": "index-b.handler", // Método e script de entrada mapeados para execução.
    "CodeSize": 255, // Tamanho físico do artefato em bytes enviado para a plataforma.
    "Description": "", // Comentário opcional da função.
    "Timeout": 3, // Tempo regulamentar máximo de execução da rotina.
    "MemorySize": 128, // Memória padrão atribuída para o ambiente virtualizado.
    "LastModified": "2026-07-14T12:39:20.212+0000", // Timestamp UTC do deploy da FuncaoB.
    "CodeSha256": "/kjpQg9+1JGY1TuPbHdEKH55Tb7JgdXWU8G2Pf3bjHY=", // Checksum SHA256 para checagem de adulteração do código.
    "Version": "$LATEST", // Versão mutável atual do deploy.
    "VpcConfig": {
        "SubnetIds": [], // Lista de identificadores de sub-redes isoladas.
        "SecurityGroupIds": [], // Lista de identificadores de grupos de segurança da rede.
        "VpcId": "" // ID da VPC do ambiente local.
    },
    "KMSKeyArn": "", // ARN da chave de criptografia.
    "TracingConfig": {
        "Mode": "PassThrough" // Modo de propagação de trace do X-Ray.
    },
    "RevisionId": "f5af9c42-f2b6-4165-81c4-0c03d8383f48", // Identificador alfanumérico da revisão de configuração.
    "Layers": [], // Camadas utilitárias injetadas no ambiente.
    "State": "Pending", // Estado momentâneo do container durante a alocação física inicial.
    "StateReason": "The function is being created.", // Justificativa de legibilidade do estado de pendência.
    "StateReasonCode": "Creating", // Código técnico correspondente ao processo de criação.
    "LastUpdateStatus": "InProgress", // Status lido da atualização em background.
    "LastUpdateStatusReason": "", // Detalhes textuais de inconformidade caso existam.
    "LastUpdateStatusReasonCode": "", // Código de erro do andamento do deploy.
    "PackageType": "Zip", // Arquitetura de empacotamento baseada em compactação .zip.
    "Architectures": [
        "x86_64" // Arquitetura padrão de processador.
    ],
    "EphemeralStorage": {
        "Size": 512 // Capacidade do armazenamento efêmero local.
    },
    "SnapStart": {
        "ApplyOn": "None", // Estado do recurso SnapStart para a função.
        "OptimizationStatus": "Off" // Status de otimização de cache.
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "" // ARN do patch de runtime.
    },
    "LoggingConfig": {
        "LogFormat": "Text", // Formato de estruturação textual do console.
        "LogGroup": "/aws/lambda/FuncaoB" // Caminho de destino lógico do CloudWatch.
    }
}

```

---

## 3. Configuração de Concorrência Reservada

Configuramos o isolamento de recursos aplicando a concorrência reservada para sanar o problema de contenção. Atribuiremos uma reserva garantida de 100 execuções para a `FuncaoA` (garantindo o processamento das requisições do ALB) e limitaremos a `FuncaoB` a um teto máximo de 10 execuções simultâneas.

#### Aplicação de Concorrência na FuncaoA (Piso/Garantia de Pool)

* O comando `awslocal lambda put-function-concurrency` configura os limites de concorrência dedicada da conta para um recurso específico.
* O parâmetro `--function-name` determina qual recurso sofrerá a alteração (`FuncaoA`).
* O parâmetro `--reserved-concurrent-executions 100` retira 100 execuções simultâneas do pool total da conta e as blinda exclusivamente para este recurso.

```bash
awslocal lambda put-function-concurrency \
     --function-name FuncaoA \
     --reserved-concurrent-executions 100

```

**Output gerado pelo terminal:**

```json
{
    "ReservedConcurrentExecutions": 100 // Confirmação imediata do teto e piso de concorrência isolada para 100 execuções síncronas.
}

```

#### Aplicação de Concorrência na FuncaoB (Teto/Mecanismo de Contenção)

* O comando `awslocal lambda put-function-concurrency` altera as propriedades do segundo recurso.
* O parâmetro `--function-name` aponta para a função responsável pelo estrangulamento (`FuncaoB`).
* O parâmetro `--reserved-concurrent-executions 10` impõe um limite máximo inabalável de 10 execuções simultâneas, impedindo que ela consuma a cota comum regional.

```bash
awslocal lambda put-function-concurrency \
     --function-name FuncaoB \
     --reserved-concurrent-executions 10

```

**Output gerado pelo terminal:**

```json
{
    "ReservedConcurrentExecutions": 10 // Confirmação de que a contenção da cota máxima foi gravada para 10 execuções.
}

```

---

## 4. Validação e Auditoria das Configurações Ativas

Para auditar e validar se as políticas de contenção e reserva foram consolidadas com perfeição pelo MiniStack, consultamos a configuração de concorrência diretamente na API de cada recurso.

#### Verificação da FuncaoA (Capacidade Garantida)

* O comando `awslocal lambda get-function-concurrency` recupera as informações detalhadas sobre as cotas reservadas ativas do recurso.
* O parâmetro `--function-name` indica qual função está sob auditoria (`FuncaoA`).

```bash
awslocal lambda get-function-concurrency --function-name FuncaoA

```

**Output gerado pelo terminal:**

```json
{
    "ReservedConcurrentExecutions": 100 // Retorno de auditoria que valida a existência estável de 100 execuções blindadas para o ALB.
}

```

#### Verificação da FuncaoB (Limite Teto)

* O comando `awslocal lambda get-function-concurrency` executa a consulta de checagem.
* O parâmetro `--function-name` indica o alvo sob verificação (`FuncaoB`).

```bash
awslocal lambda get-function-concurrency --function-name FuncaoB

```

**Output gerado pelo terminal:**

```json
{
    "ReservedConcurrentExecutions": 10 // Retorno de auditoria que valida a restrição da cota máxima ativa de 10 execuções para a função vizinha.
}

```

---

**Conclusão:** Através da aplicação de Concorrência Reservada, o problema de concorrência desregulada foi resolvido. A `FuncaoA` possui agora 100 execuções simultâneas blindadas e exclusivas para atender de forma previsível as requisições roteadas pelo Application Load Balancer, enquanto a `FuncaoB` foi contida sob uma cota máxima de 10 execuções simultâneas, impedindo novas ocorrências de *throttling* no ecossistema local.

```
---

```