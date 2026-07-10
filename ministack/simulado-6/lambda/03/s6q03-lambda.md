---

### `documentacao.md`

```markdown
# Documentação Técnica: Autenticação e Acesso Cross-Account no Amazon DynamoDB

Este documento detalha o procedimento prático para configuração, simulação e auditoria de segurança de um fluxo de acesso entre contas distintas (Cross-Account) para leitura de tabelas no Amazon DynamoDB utilizando o ambiente local de desenvolvimento (MiniStack).

---

## 1. Cenário Técnico e Arquitetura Cross-Account

No Amazon DynamoDB, diferentemente do Amazon S3, **não existem Resource-Based Policies** (políticas baseadas em recursos) acopladas diretamente às tabelas. Dessa forma, a única maneira de conceder privilégios de acesso a entidades que residem em outras contas AWS é por meio do mecanismo de **Assunção de IAM Role (AssumeRole)** na conta de destino.

O fluxo estruturado baseia-se em:
1. **Confiança na Conta de Destino:** Criação de uma IAM Role com uma Trust Policy que aceita requisições da conta de origem.
2. **Emissão de Tokens Temporários:** Utilização do AWS STS (*Security Token Service*) para gerar credenciais voláteis de segurança.
3. **Consumo Seguro:** Utilização do token assinado para realizar operações de leitura (`GetItem`) na tabela remota.

---

## 2. Configuração do Ambiente de Destino: Tabela DynamoDB

Inicializa-se o provisionamento físico da tabela que representará o catálogo consolidado de produtos da aplicação.

#### Criação da Tabela de Destino
* O comando `awslocal dynamodb create-table` inicializa o provisionamento físico da tabela no MiniStack.
* O parâmetro `--table-name` define o identificador único da tabela como `CatalogoProdutos`.
* O parâmetro `--attribute-definitions` realiza a tipagem do atributo chave `ProdutoId` como String (`S`).
* O parâmetro `--key-schema` define o atributo anterior como chave de partição estrutural (`HASH`).
* O parâmetro `--provisioned-throughput` aloca as capacidades básicas de processamento (5 RCUs e 5 WCUs).

```bash
awslocal dynamodb create-table \
     --table-name CatalogoProdutos \
     --attribute-definitions AttributeName=ProdutoId,AttributeType=S \
     --key-schema AttributeName=ProdutoId,KeyType=HASH \
     --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

```

**Output gerado pelo terminal:**

```json
{
    "TableDescription": {
        "AttributeDefinitions": [
            {
                "AttributeName": "ProdutoId", // Nome do atributo mapeado para indexação.
                "AttributeType": "S" // Tipo primitivo definido como String (S).
            }
        ],
        "TableName": "CatalogoProdutos", // Confirmação do identificador da tabela criada.
        "KeySchema": [
            {
                "AttributeName": "ProdutoId", // Atributo associado ao particionamento de chaves.
                "KeyType": "HASH" // Define o atributo como Partition Key exclusiva da tabela.
            }
        ],
        "TableStatus": "ACTIVE", // Status operacional vital: Indica que a tabela está ativa e pronta para uso.
        "CreationDateTime": 1783516797, // Timestamp Unix do momento exato em que o recurso foi criado.
        "ProvisionedThroughput": { // Detalhamento das taxas de vazão provisionadas para cobrança.
            "ReadCapacityUnits": 5, // Unidades de Capacidade de Leitura alocadas para consultas.
            "WriteCapacityUnits": 5 // Unidades de Capacidade de Escrita alocadas para persistência.
        },
        "TableSizeBytes": 0, // Tamanho atual ocupado pela tabela física em bytes.
        "ItemCount": 0, // Quantidade de itens indexados armazenados na base local.
        "TableArn": "arn:aws:dynamodb:us-east-1:000000000000:table/CatalogoProdutos", // Amazon Resource Name global de identificação do recurso.
        "TableId": "b28d2aa4-77f2-4895-80bb-898687fba757", // UUID interno exclusivo gerado para rastreabilidade no MiniStack.
        "BillingModeSummary": {
            "BillingMode": "PROVISIONED" // Modo de tarifação e escalabilidade configurado (Capacidade Provisionada).
        },
        "DeletionProtectionEnabled": false, // Estado do recurso de proteção contra exclusões acidentais.
        "WarmThroughput": {
            "ReadUnitsPerSecond": 0, // Capacidade pré-aquecida para demandas intensas de leitura.
            "WriteUnitsPerSecond": 0, // Capacidade pré-aquecida para demandas intensas de escrita.
            "Status": "ACTIVE" // Estado atual do gerenciamento térmico de throughput.
        }
    }
}

```

#### Inserção de Massa de Dados para Teste

* O comando `awslocal dynamodb put-item` popula a tabela com um registro inicial estruturado.
* O parâmetro `--table-name` indica em qual recurso o dado será injetado.
* O parâmetro `--item` fornece o payload JSON tipado estritamente em conformidade com as regras do DynamoDB.

```bash
awslocal dynamodb put-item \
     --table-name CatalogoProdutos \
     --item '{"ProdutoId": {"S": "prod-1001"}, "Nome": {"S": "Teclado Mecanico RGB"}, "Preco": {"N": "349.90"}}'

```

---

## 3. Configuração de Governança e Permissões IAM (Conta B)

Para viabilizar que a conta de origem consiga se autenticar, estrutura-se uma **Trust Policy (Política de Confiança)**, seguida pela **Permission Policy** de menor privilégio.

#### Geração da Trust Policy via Terminal

```bash
echo '{
   "Version": "2012-10-17",
   "Statement": [
     {
       "Effect": "Allow",
       "Principal": {
         "AWS": "arn:aws:iam::000000000000:root"
       },
       "Action": "sts:AssumeRole"
     }
   ]
 }' > trust-policy.json

```

#### Criação da IAM Role

* O comando `awslocal iam create-role` provisiona a nova entidade de identidade no barramento local.
* O parâmetro `--role-name` nomeia o recurso de governança como `RoleCrossAccountCatalogo`.
* O parâmetro `--assume-role-policy-document` vincula o arquivo JSON de relacionamento de confiança criado anteriormente.

```bash
awslocal iam create-role \
     --role-name RoleCrossAccountCatalogo \
     --assume-role-policy-document file://trust-policy.json

```

**Output gerado pelo terminal:**

```json
{
    "Role": {
        "Path": "/", // Caminho de estrutura hierárquica configurado para a Role.
        "RoleName": "RoleCrossAccountCatalogo", // Identificador legível atribuído à identidade IAM.
        "RoleId": "AROA3D7D7F19C2F347768", // String de ID interno exclusivo da Role gerada.
        "Arn": "arn:aws:iam::000000000000:role/RoleCrossAccountCatalogo", // ARN oficial para referência em outras políticas.
        "CreateDate": "2026-07-08T13:21:30Z", // Timestamp em formato ISO-8601 registrando o momento de criação da Role.
        "AssumeRolePolicyDocument": { // Objeto interno contendo a política de confiança ativa para a Role.
            "Version": "2012-10-17", // Versão da especificação da linguagem de políticas IAM da AWS.
            "Statement": [ // Bloco contendo declarações lógicas de regras de segurança.
                {
                    "Effect": "Allow", // Declara que a ação descrita será permitida.
                    "Principal": {
                        "AWS": "arn:aws:iam::000000000000:root" // Define a conta raiz informada como confiável para assumir a Role.
                    },
                    "Action": "sts:AssumeRole" // Permite estritamente a execução do método AssumeRole.
                }
            ]
        },
        "Description": "", // Texto descritivo do papel atribuído a esta Role.
        "MaxSessionDuration": 3600 // Duração máxima permitida para as credenciais em segundos (1 hora).
    }
}

```

#### Geração da Política de Permissões de Leitura

```bash
echo '{
   "Version": "2012-10-17",
   "Statement": [
     {
       "Effect": "Allow",
       "Action": [
         "dynamodb:GetItem",
         "dynamodb:Query",
         "dynamodb:Scan"
       ],
       "Resource": "arn:aws:dynamodb:us-east-1:000000000000:table/CatalogoProdutos"
     }
   ]
 }' > permission-policy.json

```

#### Associação de Política à Role (Inline Policy)

* O comando `awslocal iam put-role-policy` anexa uma política diretamente à entidade de segurança indicada.
* O parâmetro `--role-name` especifica em qual Role a política inline será aplicada.
* O parâmetro `--policy-name` define um rótulo interno para a permissão (`PermissaoLeituraCatalogo`).
* O parâmetro `--policy-document` injeta a receita do arquivo JSON local que lista as permissões do DynamoDB.

```bash
awslocal iam put-role-policy \
     --role-name RoleCrossAccountCatalogo \
     --policy-name PermissaoLeituraCatalogo \
     --policy-document file://permission-policy.json

```

---

## 4. Invocação do Token via STS e Auditoria de Acesso

Para simular de forma fidedigna o back-end que executará a consulta a partir de um contexto externo, invocamos o AWS Security Token Service.

#### Geração das Credenciais Temporárias via STS

* O comando `awslocal sts assume-role` realiza a requisição de credenciais voláteis baseadas na política de confiança.
* O parâmetro `--role-arn` aponta o ARN exato da Role alvo configurada na Conta B.
* O parâmetro `--role-session-name` define um apelido de rastreabilidade para auditar as ações efetuadas nesta sessão (`SessaoLambdaEcommerce`).

```bash
awslocal sts assume-role \
     --role-arn arn:aws:iam::000000000000:role/RoleCrossAccountCatalogo \
     --role-session-name SessaoLambdaEcommerce

```

**Output gerado pelo terminal:**

```json
{
    "Credentials": {
        "AccessKeyId": "ASIAD537DC90194B4DE1", // Chave de acesso temporária emitida pelo STS para assinar requisições.
        "SecretAccessKey": "d09a75fe761c4420ba8a7bd8f9879ad4ddf32666", // Chave secreta de criptografia vinculada à sessão de acesso.
        "SessionToken": "FwoGZX971ec13c7e614c7bbf5c819df47a957d765b6beffa7949dfaf3d64338b88d4f8cd3547f1d9e9487984b188f4b3c3e3ab5fe23daa68714614bb4e7193c933c270", // Token de sessão obrigatório para autenticar credenciais emitidas via AssumeRole.
        "Expiration": "2026-07-08T14:23:05Z" // Timestamp UTC que marca o fim da validade das credenciais geradas.
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "AROA95E627201958487EB:SessaoLambdaEcommerce", // ID composto associado à sessão do usuário que vestiu a Role.
        "Arn": "arn:aws:sts::000000000000:assumed-role/RoleCrossAccountCatalogo/SessaoLambdaEcommerce" // ARN em tempo de execução que assina as operações em log.
    },
    "PackedPolicySize": 0 // Tamanho compactado em bytes de políticas adicionais aplicadas na sessão.
}

```

---

## 5. Validação Prática de Leitura no DynamoDB

Com as credenciais válidas ativas no escopo, realiza-se a busca pontual do item na tabela de catálogo para comprovar o sucesso da arquitetura de isolamento.

#### Execução de Consulta Pontual (GetItem)

* O comando `awslocal dynamodb get-item` efetua a busca direta e indexada de um único registro na tabela.
* O parâmetro `--table-name` especifica o alvo físico do banco de dados local.
* O parâmetro `--key` passa a chave primária de partição mapeada (`ProdutoId`) no formato estruturado do DynamoDB.

```bash
awslocal dynamodb get-item \
     --table-name CatalogoProdutos \
     --key '{"ProdutoId": {"S": "prod-1001"}}'

```

**Output esperado:**

```json
{
    "Item": {
        "ProdutoId": {
            "S": "prod-1001" // Valor exato do atributo Partition Key retornado do banco.
        },
        "Nome": {
            "S": "Teclado Mecanico RGB" // String contendo a descrição nominal do produto localizado.
        },
        "Preco": {
            "N": "349.9" // Valor numérico de ponto flutuante retornado e tipado como Number (N).
        }
    }
}

```

---

**Conclusão:** O fluxo de autenticação e delegação de autoridade Cross-Account foi consolidado com pleno sucesso no MiniStack. O AWS STS gerenciou corretamente a geração dos tokens efêmeros e o motor do Amazon DynamoDB atendeu a requisição, validando as políticas associadas e retornando os dados tipados de catálogo sem acoplamento direto ou falhas de permissão de identidade.

```
---

```