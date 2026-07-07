---

### `documentacao.md`

```markdown
# Documentação Técnica: Infraestrutura como Código e Armazenamento Local

Este documento detalha o procedimento prático para o cálculo de capacidade, provisionamento e validação de tabelas no Amazon DynamoDB utilizando o ambiente local de desenvolvimento (MiniStack).

---

## 1. Cenário Técnico e Dimensionamento de Capacidade (RCUs)

Para suportar a camada de visualização de dados do dashboard interno, foi realizado o cálculo de Unidades de Capacidade de Leitura (RCUs) com base nos seguintes requisitos estritos:

* **Volume de Leituras:** 10 leituras por segundo.
* **Tamanho do Item:** 4 KB (limite exato de um bloco padrão de leitura do DynamoDB).
* **Modelo de Consistência:** Leitura Fortemente Consistente (*Strongly Consistent Reads*).

#### Cálculo Aplicado:
$$\text{Item de 4 KB} \div 4 \text{ KB} = 1 \text{ Bloco de Leitura por Item}$$
$$1 \text{ Bloco} \times 10 \text{ leituras/segundo} \times 1.0 \text{ (Fator de Consistência Forte)} = 10 \text{ RCUs}$$

Portanto, o valor exato a ser provisionado para atender a demanda é de **10 RCUs**.

---

## 2. Criação da Tabela (DashboardDados)

A tabela utiliza uma estrutura de chave composta eficiente para cenários de séries temporais ou agrupamentos de métricas, definindo `DashboardId` como Partition Key (HASH) e `Timestamp` como Sort Key (RANGE).

#### O comando 'awslocal dynamodb create-table' inicializa o provisionamento físico da tabela no MiniStack.
#### O parâmetro '--table-name' define o identificador único da tabela como 'DashboardDados'.
#### O parâmetro '--attribute-definitions' mapeia o nome e os tipos primitivos dos atributos que compõem as chaves (S = String).
#### O parâmetro '--key-schema' dita o design da chave primária composta (HASH e RANGE).
#### O parâmetro '--provisioned-throughput' aloca explicitamente as 10 RCUs calculadas no passo anterior.

```bash
awslocal dynamodb create-table \
     --table-name DashboardDados \
     --attribute-definitions \
         AttributeName=DashboardId,AttributeType=S \
         AttributeName=Timestamp,AttributeType=S \
     --key-schema \
         AttributeName=DashboardId,KeyType=HASH \
         AttributeName=Timestamp,KeyType=RANGE \
     --provisioned-throughput ReadCapacityUnits=10,WriteCapacityUnits=5

```

**Output esperado:**

```json
{
    "TableDescription": {
        "AttributeDefinitions": [
            {
                "AttributeName": "DashboardId", // Nome do atributo de partição configurado.
                "AttributeType": "S" // Tipo de dado String.
            },
            {
                "AttributeName": "Timestamp", // Nome do atributo de ordenação configurado.
                "AttributeType": "S" // Tipo de dado String.
            }
        ],
        "TableName": "DashboardDados", // Confirmação do nome da tabela criada.
        "KeySchema": [
            {
                "AttributeName": "DashboardId", // Atributo associado à chave primária de distribuição.
                "KeyType": "HASH" // Indica que este atributo opera como Partition Key.
            },
            {
                "AttributeName": "Timestamp", // Atributo associado à chave primária de ordenação.
                "KeyType": "RANGE" // Indica que este atributo opera como Sort Key.
            }
        ],
        "TableStatus": "ACTIVE", // Status operacional vital: Indica que a tabela está pronta para receber operações de leitura/escrita.
        "CreationDateTime": 1783432915, // Timestamp Unix representando a data/hora exata da criação.
        "ProvisionedThroughput": { // Capacidade reservada de leitura/escrita que você paga antecipadamente no DynamoDB.
            "ReadCapacityUnits": 10, // Confirmação de que as 10 RCUs calculadas foram aplicadas com sucesso.
            "WriteCapacityUnits": 5 // Unidades de escrita provisionadas para a tabela.
        },
        "TableSizeBytes": 0, // Tamanho total atual da tabela em bytes (inicialmente vazia).
        "ItemCount": 0, // Quantidade total de registros indexados na tabela.
        "TableArn": "arn:aws:dynamodb:us-east-1:000000000000:table/DashboardDados", // Identificador único global (Amazon Resource Name) gerado pelo MiniStack.
        "TableId": "37957680-92a6-4656-96e2-19cb2738fb79", // UUID interno identificador exclusivo desta instância da tabela.
        "BillingModeSummary": {
            "BillingMode": "PROVISIONED" // Modo de tarifação/alocação configurado explicitamente para capacidade provisionada.
        },
        "DeletionProtectionEnabled": false, // Indica que a proteção contra deleção acidental está desativada no ambiente local.
        "WarmThroughput": {
            "ReadUnitsPerSecond": 0, // Capacidade pré-aquecida para picos de leitura (padrão zerado em emulação).
            "WriteUnitsPerSecond": 0, // Capacidade pré-aquecida para picos de escrita.
            "Status": "ACTIVE" // Estado atual do ciclo de gerenciamento térmico de throughput.
        }
    }
}

```

---

## 3. Inserção de Item de Teste (Massa de Dados)

Para validar o fluxo de ingestão e posterior consulta, popula-se a tabela com uma estrutura simulando uma métrica real agregada de vendas.

#### O comando 'awslocal dynamodb put-item' realiza a escrita estruturada de um novo registro.

#### O parâmetro '--item' recebe o documento em formato JSON utilizando a notação estrita de tipos do DynamoDB (S = String, N = Number, BOOL = Boolean).

```bash
awslocal dynamodb put-item \
     --table-name DashboardDados \
     --item '{
         "DashboardId": {"S": "vendas-mensais-2026"},
         "Timestamp": {"S": "2026-07-07T10:43:17Z"},
         "TotalVendas": {"N": "450500.75"},
         "Regiao": {"S": "SUL"},
         "MetricasAtivas": {"BOOL": true}
     }'

```

---

## 4. Validação com Leitura Fortemente Consistente

Este passo realiza a auditoria do comportamento do motor local, forçando a API a retornar o dado mais recente diretamente do nó de escrita primário sem o delay eventual da replicação.

#### O comando 'awslocal dynamodb get-item' executa uma busca pontual baseada na chave primária exata.

#### O parâmetro '--key' especifica os valores exatos de HASH e RANGE para localização do registro.

#### O parâmetro '--consistent-read' força a aplicação da consistência forte (Strongly Consistent Read), consumindo as RCUs dimensionadas no passo 1.

```bash
awslocal dynamodb get-item \
     --table-name DashboardDados \
     --key '{
         "DashboardId": {"S": "vendas-mensais-2026"},
         "Timestamp": {"S": "2026-07-07T10:43:17Z"}
     }' \
     --consistent-read

```

**Output esperado:**

```json
{
    "Item": {
        "DashboardId": {
            "S": "vendas-mensais-2026" // Valor retornado do atributo Partition Key.
        },
        "Timestamp": {
            "S": "2026-07-07T10:43:17Z" // Valor retornado da Sort Key no formato ISO-8601.
        },
        "TotalVendas": {
            "N": "450500.75" // Métrica de vendas encapsulada tipada estritamente como Number (N).
        },
        "Regiao": {
            "S": "SUL" // String de metadado regional do dashboard.
        },
        "MetricasAtivas": {
            "BOOL": true // Flag booleana indicando o estado ativo da métrica consultada.
        }
    }
}

```

---

**Conclusão:** O ciclo de vida da infraestrutura da tabela `DashboardDados` foi verificado com sucesso no ambiente MiniStack. A tabela respondeu em conformidade com o throughput provisionado de **10 RCUs** em modo de consistência forte, garantindo a integridade dos dados para os payloads analíticos de 4 KB.

```

```