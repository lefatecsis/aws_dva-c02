# Documentação Técnica: Integração API Gateway e AWS Lambda com Roteamento por Variáveis de Estágio

Este documento detalha o procedimento prático para o provisionamento, publicação de versões e integração de uma API RESTful utilizando o Amazon API Gateway e o AWS Lambda com variáveis de estágio no ambiente local de desenvolvimento (MiniStack).


## 1. Cenário Técnico e Arquitetura de Versões

Para suportar diferentes versões da API para fins de teste sem a necessidade de duplicar a infraestrutura de integração, a arquitetura utiliza **Variáveis de Estágio (Stage Variables)** no API Gateway combinadas com **Aliases** do AWS Lambda. 

Este design permite que um único endpoint aponte dinamicamente para diferentes versões lógicas da função Lambda (`MinhaFuncaoExemplo`) dependendo do estágio em que a requisição é processada.

---

## 2. Implementação do Componente Compute (AWS Lambda)

O primeiro passo consiste em inicializar a função Lambda, publicar uma versão imutável e associar um alias que servirá de ponte para o ambiente.

#### Criação da Função Lambda
* O parâmetro `--function-name` define o identificador exclusivo da função como `MinhaFuncaoExemplo`.
* O parâmetro `--runtime` estipula o ambiente de execução `nodejs18.x`.
* O parâmetro `--role` associa o ARN da Role do IAM necessária para a execução.
* O parâmetro `--handler` aponta para o arquivo e o método de entrada (`index.js.handler`).
* O parâmetro `--zip-file` indica o caminho do pacote de implantação local compactado.

```bash
awslocal lambda create-function \
     --function-name MinhaFuncaoExemplo \
     --runtime nodejs18.x \
     --role arn:aws:iam::000000000000:role/lambda-role \
     --handler index.js.handler \
     --zip-file fileb://function.zip

```

#### Publicação de Versão

* O parâmetro `--function-name` especifica em qual função Lambda a nova versão imutável será gerada.

```bash
awslocal lambda publish-version --function-name MinhaFuncaoExemplo

```

#### Criação do Alias

* O parâmetro `--function-name` identifica a função alvo.
* O parâmetro `--name` define o nome do alias/ponte lógica como `v1`.
* O parâmetro `--function-version` aponta o alias rigidamente para a versão numérica `1` criada no passo anterior.

```bash
awslocal lambda create-alias \
     --function-name MinhaFuncaoExemplo \
     --name v1 \
     --function-version 1

```

---

## 3. Provisionamento e Configuração do API Gateway

Com a camada de processamento isolada, a API RESTful é estruturada para rotear o tráfego de entrada.

#### Criação da API REST

* O parâmetro `--name` define o nome de exibição e controle do recurso como `ExemploAPI`.

```bash
awslocal apigateway create-rest-api --name ExemploAPI

```

> **Nota:** O ID da API gerado para este cenário é `da5945dc` e o ID do recurso raiz (`/`) é `5e1eb14d`.

#### Criação do Método HTTP

* O parâmetro `--rest-api-id` vincula o método ao identificador da API criada (`da5945dc`).
* O parâmetro `--resource-id` atrela o método ao endpoint raiz (`5e1eb14d`).
* O parâmetro `--http-method` especifica o verbo HTTP de entrada como `GET`.
* O parâmetro `--authorization-type` desativa a necessidade de autorizadores iniciais com `NONE`.

```bash
awslocal apigateway put-method \
     --rest-api-id da5945dc \
     --resource-id 5e1eb14d \
     --http-method GET \
     --authorization-type NONE

```

#### Configuração da Integração Dinâmica (AWS_PROXY)

* O parâmetro `--rest-api-id` vincula a integração à API específica.
* O parâmetro `--resource-id` define o caminho do recurso alvo da integração.
* O parâmetro `--http-method` associa o gatilho ao método HTTP `GET`.
* O parâmetro `--type` define o tipo de integração integrada como `AWS_PROXY` (Lambda Proxy Integration).
* O parâmetro `--integration-http-method` define que o API Gateway chamará o back-end utilizando o verbo `POST`.
* O parâmetro `--uri` utiliza a expressão `${stageVariables.lambdaAlias}` no ARN de invocação. Isso parametriza o destino, permitindo que o API Gateway resolva o alias em tempo de execução.

```bash
awslocal apigateway put-integration \
     --rest-api-id da5945dc \
     --resource-id 5e1eb14d \
     --http-method GET \
     --type AWS_PROXY \
     --integration-http-method POST \
     --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:\${stageVariables.lambdaAlias}/invocations

```

---

## 4. Implantação e Permissões de Acesso

O estágio de implantação injeta a variável que amarra o ciclo de vida do endpoint ao alias do Lambda correspondente.

#### Criação do Deployment com Variável de Estágio

* O parâmetro `--rest-api-id` indica a API que sofrerá o deploy.
* O parâmetro `--stage-name` cria e nomeia o ambiente de execução público como `v1`.
* O parâmetro `--variables` injeta um mapa de chaves/valores (`lambdaAlias=v1`) que alimenta a URI dinâmica configurada na integração.

```bash
awslocal apigateway create-deployment \
     --rest-api-id da5945dc \
     --stage-name v1 \
     --variables lambdaAlias=v1

```

#### Concessão de Permissão de Invocação (Lambda Permission)

* O parâmetro `--function-name` especifica o ARN exato do recurso Lambda qualificado pelo alias `v1`.
* O parâmetro `--statement-id` define o identificador único da regra de política (`apigateway-v1-access`).
* O parâmetro `--action` libera o privilégio de execução por meio do `lambda:InvokeFunction`.
* O parâmetro `--principal` concede a permissão especificamente para o serviço gerenciado `apigateway.amazonaws.com`.
* O parâmetro `--source-arn` restringe a segurança delimitando o ARN exato do estágio da API que possui o direito de disparar o gatilho.

```bash
awslocal lambda add-permission \
     --function-name arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:v1 \
     --statement-id apigateway-v1-access \
     --action lambda:InvokeFunction \
     --principal apigateway.amazonaws.com \
     --source-arn arn:aws:execute-api:us-east-1:000000000000:da5945dc/v1/GET/

```

### 5. Chamada de Validação

Com a estrutura montada, você pode disparar a requisição HTTP via `curl` contra o endpoint padrão do MiniStack/LocalStack para validar o roteamento dinâmico.

```bash
curl -X GET http://localhost:4566/restapis/da5945dc/v1/_user_request_/

```

**Output esperado:**

```json
"Resposta da API v1"

```

---

**Conclusão:** A infraestrutura para a API RESTful mutável foi validada com sucesso. Ao implantar a API como estágios únicos com endpoints exclusivos e utilizar variáveis de estágio (`lambdaAlias`), conseguimos fornecer o contexto isolado e rotear requisições transparentemente para versões específicas do back-end sem acoplamento rígido de código.

```

```

---

