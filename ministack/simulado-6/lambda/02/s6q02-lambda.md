---

### `documentacao.md`

```markdown
# Documentação Técnica: Infraestrutura como Código e Armazenamento Local

Este documento detalha o procedimento prático para o cálculo de capacidade, provisionamento e validação de otimização de performance no AWS Lambda utilizando o ambiente local de desenvolvimento (MiniStack).

---

## 1. Cenário Técnico e Dimensionamento de Hardware Virtual

Para otimizar o processamento de grandes volumes de dados sem modificar o código-fonte, ajustamos o ecossistema através do único eixo de escala do AWS Lambda: a memória. 

* **Comportamento Mínimo:** A função é inicializada com **128 MB**, recebendo apenas uma fração de vCPU.
* **Upgrade de Performance:** Elevamos o limite para **2048 MB**, garantindo o equivalente a uma vCPU completa dedicada e reduzindo o tempo de execução (*duration*) de processamentos matemáticos e estatísticos.

---

## 2. Criação da Função com Configuração Mínima (128 MB)

O comando `awslocal lambda create-function` inicializa o deploy do artefato compactado no MiniStack.

#### Parâmetros do Comando:
* O parâmetro `--function-name` define o identificador único da função como `ProcessamentoPesado`.
* O parâmetro `--runtime` estipula o ambiente de execução Node.js 18.x.
* O parâmetro `--role` associa o perfil de execução IAM exigido para segurança.
* O parâmetro `--handler` configura o ponto de entrada do script (`index.js.handler`).
* O parâmetro `--zip-file` aponta para o pacote de código compactado local.
* O parâmetro `--memory-size 128` define a restrição inicial do hardware virtualizado em 128 MB.

```bash
awslocal lambda create-function \
     --function-name ProcessamentoPesado \
     --runtime nodejs18.x \
     --role arn:aws:iam::000000000000:role/lambda-role \
     --handler index.js.handler \
     --zip-file fileb://function.zip \
     --memory-size 128

```

**Output gerado pelo terminal:**

```json
{
    "FunctionName": "ProcessamentoPesado", // Nome da função registrada no ecossistema local.
    "FunctionArn": "arn:aws:lambda:us-east-1:000000000000:function:ProcessamentoPesado", // ARN gerado para chamadas internas da infraestrutura.
    "Runtime": "nodejs18.x", // Motor de execução especificado para o script Node.js.
    "Role": "arn:aws:iam::000000000000:role/lambda-role", // Perfil de execução IAM associado à função.
    "Handler": "index.js.handler", // Ponto de entrada que o Lambda chama dentro do código empacotado.
    "CodeSize": 280, // Tamanho do arquivo .zip em bytes enviado para o ambiente.
    "Description": "", // Descrição opcional fornecida para a função.
    "Timeout": 3, // Tempo limite padrão de 3 segundos para a execução antes do timeout automático.
    "MemorySize": 128, // Confirmação de que a função foi instanciada com a capacidade mínima de memória.
    "LastModified": "2026-07-07T18:36:11.552+0000", // Timestamp de criação ou última alteração do recurso.
    "CodeSha256": "FIHuJnKQ2iGBvnGG88xMKAY2PlntFy9Nw0s3FKhxyHQ=", // Hash SHA256 do código para checagem de integridade.
    "Version": "$LATEST", // Aponta para a versão de desenvolvimento mais recente do código postado.
    "VpcConfig": {
        "SubnetIds": [], // Lista de subnets (vazia, indicando que não está restrita a uma VPC interna).
        "SecurityGroupIds": [], // Grupos de segurança da rede vinculados.
        "VpcId": "" // ID da rede virtual associada.
    },
    "KMSKeyArn": "", // Chave de criptografia para variáveis de ambiente (padrão gerenciado AWS).
    "TracingConfig": {
        "Mode": "PassThrough" // Modo de rastreamento do AWS X-Ray configurado para herdar do chamador.
    },
    "RevisionId": "ddbb32d1-711d-48a0-a427-fa3890ad6718", // ID exclusivo da revisão atual da configuração da função.
    "Layers": [], // Camadas e dependências externas acopladas ao runtime da função.
    "State": "Pending", // Estado inicial: Indica que a infraestrutura ainda está alocando o container em background.
    "StateReason": "The function is being created.", // Explicação detalhada legível do estado atual.
    "StateReasonCode": "Creating", // Código técnico do status de criação da infraestrutura.
    "LastUpdateStatus": "InProgress", // Status do último update disparado no ciclo de vida.
    "LastUpdateStatusReason": "", // Detalhes de falha do status de update se houver.
    "LastUpdateStatusReasonCode": "", // Código de erro do status de update.
    "PackageType": "Zip", // Tipo de empacotamento adotado (arquivo .zip ou imagem de container).
    "Architectures": [
        "x86_64" // Arquitetura de compilação de CPU padrão associada.
    ],
    "EphemeralStorage": {
        "Size": 512 // Armazenamento temporário alocado no diretório /tmp em MB.
    },
    "SnapStart": {
        "ApplyOn": "None", // Configuração do mecanismo de otimização de Cold Start SnapStart (desativado).
        "OptimizationStatus": "Off" // Status técnico de otimização do snapshot de memória.
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "" // ARN do patch de runtime específico gerenciado pela AWS.
    },
    "LoggingConfig": {
        "LogFormat": "Text", // Formato de saída dos logs no console (texto puro).
        "LogGroup": "/aws/lambda/ProcessamentoPesado" // Destino lógico do grupo de logs no CloudWatch.
    }
}

```

---

Aqui está a seção do **Item 3 (Upgrade de Hardware Virtual)** atualizada, com o mapeamento e comentários em cada uma das propriedades do JSON gerado pelo terminal:

---

## 3. Upgrade de Hardware Virtual (Otimização)

O comando `awslocal lambda update-function-configuration` altera as propriedades de recursos alocados sem mutar o código de back-end.

#### Parâmetros do Comando:

* O parâmetro `--function-name` identifica a função alvo da reconfiguração.
* O parâmetro `--memory-size 2048` eleva o throughput de hardware e CPU da aplicação para 2 GB estáveis.

```bash
awslocal lambda update-function-configuration \
     --function-name ProcessamentoPesado \
     --memory-size 2048

```

**Output gerado pelo terminal:**

```json
{
    "FunctionName": "ProcessamentoPesado", // Nome da função alvo da reconfiguração de hardware.
    "FunctionArn": "arn:aws:lambda:us-east-1:000000000000:function:ProcessamentoPesado", // ARN único associado à função no ambiente.
    "Runtime": "nodejs18.x", // Ambiente de execução e motor ativo (Node.js 18).
    "Role": "arn:aws:iam::000000000000:role/lambda-role", // Role do IAM atrelada que gerencia as permissões de execução.
    "Handler": "index.js.handler", // Método apontado como ponto de entrada da aplicação.
    "CodeSize": 280, // Tamanho total do artefato de implantação em bytes.
    "Description": "", // Descrição opcional cadastrada para a função.
    "Timeout": 3, // Tempo de execução limite em segundos configurado antes do encerramento forçado.
    "MemorySize": 2048, // Confirmação da aplicação com sucesso de 2 GB de memória.
    "LastModified": "2026-07-07T18:36:27.306+0000", // Registro de data e hora UTC da última alteração de configuração realizada.
    "CodeSha256": "FIHuJnKQ2iGBvnGG88xMKAY2PlntFy9Nw0s3FKhxyHQ=", // Hash de segurança para validação da integridade do código fonte.
    "Version": "$LATEST", // Versão de desenvolvimento afetada e atualizada pelas novas diretrizes.
    "VpcConfig": {
        "SubnetIds": [], // Sub-redes isoladas vinculadas para roteamento interno de rede.
        "SecurityGroupIds": [], // Grupos de controle de tráfego e firewalls associados.
        "VpcId": "" // Identificador da nuvem privada virtual (VPC) em que reside.
    },
    "KMSKeyArn": "", // Chave do Key Management Service utilizada na proteção de variáveis criptografadas.
    "TracingConfig": {
        "Mode": "PassThrough" // Configuração de propagação de rastreamento de requisições pelo AWS X-Ray.
    },
    "RevisionId": "9aa3623f-5e04-41dc-8a23-a61dd1e6d7f1", // Nova revisão gerada pela alteração de hardware.
    "Layers": [], // Camadas adicionais de código ou bibliotecas acopladas ao runtime.
    "State": "Pending", // Indica que o MiniStack está aplicando a reconfiguração do ambiente.
    "StateReason": "The function is being updated.", // Texto legível justificando o estado de transição atual do hardware.
    "StateReasonCode": "Updating", // Código programático que representa o processo de atualização de infraestrutura.
    "LastUpdateStatus": "InProgress", // Status do último deploy/update realizado no ecossistema local.
    "LastUpdateStatusReason": "", // Mensagem técnica descritiva sobre eventuais falhas durante a última alteração.
    "LastUpdateStatusReasonCode": "", // Identificador numérico ou textual da falha de atualização recente.
    "PackageType": "Zip", // Formato de entrega do empacotamento utilizado (Arquivo compactado .zip).
    "Architectures": [
        "x86_64" // Conjunto de instruções e arquitetura física da CPU emulada.
    ],
    "EphemeralStorage": {
        "Size": 512 // Quantidade de armazenamento temporário alocado no diretório montado /tmp em MB.
    },
    "SnapStart": {
        "ApplyOn": "None", // Indica se o mecanismo SnapStart para aceleração de Cold Starts está ativo.
        "OptimizationStatus": "Off" // Status real do caching de estado e compilação do container.
    },
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "" // Identificador ARN da versão exata do patch de runtime fornecido.
    },
    "LoggingConfig": {
        "LogFormat": "Text", // Formato de serialização de saída para as linhas gravadas no log.
        "LogGroup": "/aws/lambda/ProcessamentoPesado" // Endereço lógico onde os logs de telemetria são catalogados.
    }
}

```

---

## 4. Invocação Local e Validação de Resultados

O comando `awslocal lambda invoke` executa o gatilho da função de forma síncrona no ambiente local.

#### Parâmetros do Comando:

* O parâmetro `--function-name` determina qual recurso processará o estímulo de execução.
* O parâmetro `--log-type Tail` solicita o retorno final dos buffers de logs gerados durante a execução.
* O argumento final `output.json` especifica o arquivo físico local criado para interceptar e gravar o payload de dados retornado.

```bash
awslocal lambda invoke \
     --function-name ProcessamentoPesado \
     --log-type Tail \
     output.json

```

**Output retornado pela API:**

```json
{
    "StatusCode": 200, // Status HTTP indicando que o container processou o evento com sucesso.
    "LogResult": "KG5vZGU6OTY5OTQz...VCE=", // Buffer em Base64 contendo alertas internos do motor Node.js do emulador local.
    "ExecutedVersion": "$LATEST" // Versão lógica que respondeu ao estímulo de execução.
}

```

> **Nota de Ambiente:** O buffer em `LogResult` pode apresentar caracteres e warning internos do Node.js provenientes do emulador em vez do relatório padrão do CloudWatch. Isso é esperado no MiniStack.

Executando a leitura do arquivo gerado para verificar a precisão do cálculo executado pela função pesada:

```bash
cat output.json

```

**Payload interno de dados retornado com sucesso (`output.json`):**

```json
{
    "statusCode": 200, // Status injetado pela função simulando resposta REST.
    "result": 49999995000000 // Resultado numérico da iteração matemática pesada concluída com sucesso.
}

```

---

**Conclusão:** O upgrade de hardware foi validado com êxito. A infraestrutura local do MiniStack processou a carga de processamento de loop matemático, gerando o payload numérico de alta precisão esperado sem apresentar timeouts na camada de execução.

```

```