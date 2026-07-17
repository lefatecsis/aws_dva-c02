# Documentação Técnica: Multi-estágios no API Gateway e Roteamento Dinâmico com Aliases do Lambda

Este documento detalha o procedimento prático para configurar, implantar e homologar uma arquitetura de múltiplos estágios (dev, test e prod) no Amazon API Gateway integrada a diferentes variantes (Aliases) de uma função AWS Lambda no ambiente local (MiniStack). O roteamento é realizado de forma dinâmica por meio de variáveis de estágio (*Stage Variables*).

---

## 1. Explicação Arquitetural: Variáveis de Estágio e Aliases do Lambda

A promoção de código entre ambientes tradicionais muitas vezes exige a duplicação de infraestrutura física ou a reconfiguração manual de endpoints. Ao combinar **Stage Variables** no API Gateway com **Aliases** do AWS Lambda, criamos um desacoplamento completo entre a camada de exposição de API e a lógica de computação serverless.

#### Variáveis de Estágio (Stage Variables)
As variáveis de estágio atuam como um mapa de chaves e valores dinâmicos associados a um estágio específico da API (ex: `dev`, `test`, `prod`). Na URI de integração do API Gateway com o Lambda, em vez de apontar para um recurso estático, configuramos uma expressão dinâmica:

`arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:${stageVariables.lambdaAlias}/invocations`

#### Aliases e Versões Imutáveis do Lambda
Uma versão do AWS Lambda é um snapshot imutável do código e da configuração (ex: `1`, `2`, `3`). Um Alias é um ponteiro móvel (ex: `prod`) que aponta para uma versão específica. 

#### Dinâmica de Promoção de Código
Quando um novo código é desenvolvido, publicamos a Versão 3. Para promover essa alteração sem alterar uma única linha de configuração no API Gateway:
1. Atualizamos o alias `dev` para apontar para a Versão 3.
2. O estágio `dev` da API, que injeta `lambdaAlias = dev` na chamada de integração, passa a executar automaticamente a Versão 3.
3. Após a homologação, movemos o alias `test` para apontar para a Versão 2 (ou 3), realizando a promoção de forma limpa, segura e instantânea.

---

## 2. Criação da Função, Publicação de Versões e Aliases do Lambda

Como a função `MinhaFuncaoExemplo` não existe inicialmente no ambiente, primeiro criamos a função base e depois publicamos as suas respectivas versões imutáveis.

#### Criação da Função Lambda Inicial (Versão 1)

```bash
echo "exports.handler = async (event) => { return { statusCode: 200, body: 'Versao 1 - Producao' }; };" > index.js
zip funcao.zip index.js

awslocal lambda create-function \
    --function-name MinhaFuncaoExemplo \
    --runtime nodejs18.x \
    --role arn:aws:iam::000000000000:role/lambda-execution-role \
    --handler index.handler \
    --zip-file fileb://funcao.zip

awslocal lambda publish-version --function-name MinhaFuncaoExemplo

```

#### Atualização e Publicação da Versão 2

```bash
echo "exports.handler = async (event) => { return { statusCode: 200, body: 'Versao 2 - Homologacao' }; };" > index.js
zip funcao.zip index.js

awslocal lambda update-function-code --function-name MinhaFuncaoExemplo --zip-file fileb://funcao.zip
awslocal lambda publish-version --function-name MinhaFuncaoExemplo

```

#### Atualização e Publicação da Versão 3

```bash
echo "exports.handler = async (event) => { return { statusCode: 200, body: 'Versao 3 - Desenvolvimento' }; };" > index.js
zip funcao.zip index.js

awslocal lambda update-function-code --function-name MinhaFuncaoExemplo --zip-file fileb://funcao.zip
awslocal lambda publish-version --function-name MinhaFuncaoExemplo

```

#### Criação dos Aliases correspondentes

```bash
awslocal lambda create-alias \
    --function-name MinhaFuncaoExemplo \
    --name prod \
    --function-version 1

awslocal lambda create-alias \
    --function-name MinhaFuncaoExemplo \
    --name test \
    --function-version 2

awslocal lambda create-alias \
    --function-name MinhaFuncaoExemplo \
    --name dev \
    --function-version 3

```

---

## 3. Provisionamento e Criação da API REST e Integração Dinâmica

Para o cenário onde a API REST ainda não foi inicializada no MiniStack, executamos o setup completo da API, do recurso `/recurso` e do mapeamento dinâmico.

#### Criação da API REST

```bash
awslocal apigateway create-rest-api --name "MinhaAPIExemplo"

```

#### Descoberta do ID do Recurso Raiz (/)

```bash
awslocal apigateway get-resources --rest-api-id ID_DA_API_CRIADA

```

#### Criação do Recurso /recurso

```bash
awslocal apigateway create-resource \
    --rest-api-id 8a70150e \
    --parent-id 3bedc50f \
    --path-part recurso

```

#### Configuração do Método ANY

```bash
awslocal apigateway put-method \
    --rest-api-id ID_DA_API_CRIADA \
    --resource-id ID_DO_RECURSO_RECURSO \
    --http-method ANY \
    --authorization-type NONE

```

#### Configuração da Integração Proxy com Variável de Estágio

```bash
awslocal apigateway put-integration \
    --rest-api-id ID_DA_API_CRIADA \
    --resource-id ID_DO_RECURSO_RECURSO \
    --http-method ANY \
    --type AWS_PROXY \
    --integration-http-method POST \
    --uri "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:\${stageVariables.lambdaAlias}/invocations"

```

---

## 4. Implantação de Estágios do API Gateway com Stage Variables

Após a estrutura da API criada, realizamos a implantação dela nos estágios correspondentes.

#### Geração de um novo Deployment de infraestrutura

```bash
awslocal apigateway create-deployment \
    --rest-api-id ID_DA_API_CRIADA \
    --stage-name temp-deploy

```

#### Criação do Estágio dev

```bash
awslocal apigateway create-stage \
    --rest-api-id ID_DA_API_CRIADA \
    --stage-name dev \
    --deployment-id $(awslocal apigateway get-deployments --rest-api-id ID_DA_API_CRIADA --query "items[-1].id" --output text) \
    --variables lambdaAlias=dev

```

#### Criação do Estágio test

```bash
awslocal apigateway create-stage \
    --rest-api-id ID_DA_API_CRIADA \
    --stage-name test \
    --deployment-id $(awslocal apigateway get-deployments --rest-api-id ID_DA_API_CRIADA --query "items[-1].id" --output text) \
    --variables lambdaAlias=test

```

#### Criação do Estágio prod

```bash
awslocal apigateway create-stage \
    --rest-api-id ID_DA_API_CRIADA \
    --stage-name prod \
    --deployment-id $(awslocal apigateway get-deployments --rest-api-id ID_DA_API_CRIADA --query "items[-1].id" --output text) \
    --variables lambdaAlias=prod

```

---

## 5. Concessão de Permissões e Validação Prática

Como a URI de integração utiliza uma variável de estágio dinâmica, o API Gateway precisa de permissões explícitas de recursos para invocar de forma isolada cada um dos aliases qualificados.

#### Permissão para o Alias dev

```bash
awslocal lambda add-permission \
    --function-name arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:dev \
    --statement-id AllowApiGatewayInvokeDev \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:us-east-1:000000000000:ID_DA_API_CRIADA/dev/*"

```

#### Permissão para o Alias test

```bash
awslocal lambda add-permission \
    --function-name arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:test \
    --statement-id AllowApiGatewayInvokeTest \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:us-east-1:000000000000:ID_DA_API_CRIADA/test/*"

```

#### Permissão para o Alias prod

```bash
awslocal lambda add-permission \
    --function-name arn:aws:lambda:us-east-1:000000000000:function:MinhaFuncaoExemplo:prod \
    --statement-id AllowApiGatewayInvokeProd \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:us-east-1:000000000000:ID_DA_API_CRIADA/prod/*"

```

#### Validação Prática do Estágio de Produção (prod)

```bash
curl -i http://localhost:4566/restapis/ID_DA_API_CRIADA/prod/_user_request_/recurso

```

**Retorno HTTP esperado:**

```text
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 20
Connection: keep-alive

Versao 1 - Producao

```

```

```