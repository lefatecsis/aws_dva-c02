---

### `documentacao.md`

```markdown
# Documentação Técnica: Infraestrutura como Código Parametrizada

Este documento detalha o procedimento prático para o armazenamento de templates reaproveitáveis do AWS CloudFormation utilizando o Amazon S3, seguido pelo deploy automatizado e parametrizado de recursos dinâmicos associados a clientes específicos no ambiente local de desenvolvimento (MiniStack).

---

## 1. Configuração do Armazenamento de Templates (Amazon S3)

O primeiro passo consiste em inicializar um repositório centralizado para salvaguardar os arquivos de configuração da infraestrutura (arquivos YAML ou JSON).

#### Criação do Bucket de Armazenamento
* O comando `aws s3 mb` (make bucket) inicializa o provisionamento de um novo bucket no S3.
* O URI `s3://templates-cloudformation-bucket-exemplo` define o nome globalmente exclusivo que identificará o bucket na nuvem.

```bash
aws s3 mb s3://templates-cloudformation-bucket-exemplo

```

---

## 2. Publicação e Resolução de Compatibilidade do Template

Durante o envio do artefato local para o bucket S3, a AWS CLI adota nativamente o algoritmo de verificação de integridade avançado `CRC64NVME`, gerando uma incompatibilidade direta (`InvalidRequest`) com o motor simplificado do MiniStack devido à falta de dependências nativas empacotadas.

> **Cenário de Erro Identificado:**
> `An error occurred (InvalidRequest) when calling the PutObject operation: Checksum algorithm not supported in this ministack build: CRC64NVME.`

Para contornar o comportamento e forçar o envio seguro, deve-se explicitar o uso de um algoritmo de checksum amplamente compatível (`SHA256`).

#### Envio do Arquivo de Configuração

* O comando `aws s3 cp` realiza a operação de cópia e upload de um arquivo local para o S3.
* O primeiro argumento (`template.yaml`) indica o caminho de origem do template no sistema local.
* O segundo argumento (`s3://templates-cloudformation-bucket-exemplo/...`) determina o bucket e a chave do objeto de destino.
* O parâmetro `--checksum-algorithm SHA256` resolve o conflito forçando o uso do algoritmo SHA256, substituindo o padrão não suportado CRC64NVME.

```bash
aws s3 cp template.yaml s3://templates-cloudformation-bucket-exemplo/infra-exemplo-param.yaml --checksum-algorithm SHA256

```

---

## 3. Provisionamento Dinâmico via AWS CloudFormation

Com o arquivo unificado exposto através de uma URL estática do S3, inicializa-se a compilação da Stack injetando os parâmetros que definirão a nomenclatura final dos serviços baseados no identificador único do cliente.

#### Criação da Stack Parametrizada

* O comando `aws cloudformation create-stack` dispara o provisionamento de recursos automatizados na AWS.
* O parâmetro `--stack-name` especifica o nome identificador exclusivo deste agrupamento de recursos (`infra-cliente-xpto`).
* O parâmetro `--template-url` aponta para o endereço HTTP local onde o CloudFormation lerá as instruções do template hospedado no S3.
* O parâmetro `--parameters` realiza a injeção dinâmica de variáveis, associando a chave `NomeCliente` ao valor customizado do cliente atual (`xpto`).

```bash
aws cloudformation create-stack \
    --stack-name infra-cliente-xpto \
    --template-url http://localhost:4566/templates-cloudformation-bucket-exemplo/infra-exemplo-param.yaml \
    --parameters ParameterKey=NomeCliente,ParameterValue=xpto

```

---

## 4. Validação do Estado da Stack e Auditoria de Recursos

Para verificar se a infraestrutura descrita foi consolidada com sucesso e sem falhas de rollback, analisa-se o estado final da receita lógica através do nome definido para a Stack.

#### Consulta de Status da Infraestrutura

* O comando `aws cloudformation describe-stacks` retorna os metadados atuais e o ciclo de vida das pilhas de infraestrutura.
* O parâmetro `--stack-name` restringe a busca e isola os detalhes especificamente para a stack `infra-cliente-xpto`.

```bash
aws cloudformation describe-stacks --stack-name infra-cliente-xpto

```

**Output esperado:**

```json
{
    "Stacks": [
        {
            "StackId": "arn:aws:cloudformation:us-east-1:000000000000:stack/infra-cliente-xpto/99a8a401-820c-46bf-aa28-4b9ddc94c500", // Identificador único global (ARN) da Stack na AWS.
            "StackName": "infra-cliente-xpto", // Nome lógico que você definiu para identificar esta Stack no comando.
            "Description": "Template basico para criar um bucket S3 usando o nome do cliente.", // Descrição textual extraída diretamente do campo 'Description' do seu arquivo YAML.
            "Parameters": [
                {
                    "ParameterKey": "NomeCliente", // Nome da variável (chave) definida na seção 'Parameters' do seu arquivo YAML.
                    "ParameterValue": "xpto" // Valor dinâmico que você passou no terminal ('xpto') para substituir a variável.
                }
            ],
            "CreationTime": "2026-07-06T19:05:37.383000+00:00", // Data e horário exatos em formato ISO-8601 em que a Stack começou a ser criada.
            "LastUpdatedTime": "2026-07-06T19:05:37.383000+00:00", // Data e horário da última modificação ou atualização aplicada a esta Stack.
            "StackStatus": "CREATE_COMPLETE", // Status vital: Indica que a infraestrutura foi mapeada, processada e criada com total sucesso.
            "StackStatusReason": "", // Motivo do status atual (geralmente preenchido com detalhes técnicos apenas quando ocorre alguma falha ou rollback).
            "DisableRollback": false, // Indica se o comportamento de desfazer as alterações (rollback) em caso de erro está desativado (falso significa que ele vai desfazer se falhar).
            "Outputs": [], // Lista de saídas (exportações de dados) configuradas no template (vazia porque não definimos a seção 'Outputs' no YAML).
            "Tags": [] // Par de chaves e valores (etiquetas) opcionais usados para organizar, filtrar ou categorizar custos da Stack na AWS.
        }
    ]
}

```

Por fim, ao mapear o provisionamento físico dos recursos, o isolamento lógico do bucket dinâmico é verificado em conjunto com o repositório original de receitas.

#### Listagem e Comprovação de Criação Física

* O comando `aws s3 ls` lista os buckets existentes ou objetos contidos neles para auditoria rápida.

```bash
aws s3 ls

```

**Output esperado:**

```text
2026-07-06 14:53:46 bucket-infra-xpto
2026-07-06 14:28:12 templates-cloudformation-bucket-exemplo

```

---

**Conclusão:** A Stack foi devidamente estabilizada. O isolamento lógico baseado no parâmetro `NomeCliente="xpto"` valida o comportamento de reuso do template, reduzindo o tempo de provisionamento manual e mantendo a governança ideal sobre os recursos gerados de forma programática através do **Amazon S3** como repositório de templates.

```

```