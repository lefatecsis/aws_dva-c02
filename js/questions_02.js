const originalQuestions = [
  {
    "question": "A equipe de desenvolvimento de uma empresa de análise de dados está utilizando filas SQS para desacoplar os diversos componentes da arquitetura da aplicação. Como os consumidores precisam de tempo adicional para processar as mensagens do SQS, a equipe deseja adiar a entrega de novas mensagens na fila por alguns segundos. Como um Associate Developer, qual das seguintes soluções você recomendaria para a equipe de desenvolvimento?",
    "options": [
      "Usar filas FIFO para adiar a entrega de novas mensagens na fila por alguns segundos",
      "Usar filas com atraso (delay queues) para adiar a entrega de novas mensagens na fila por alguns segundos",
      "Usar o tempo de visibilidade (visibility timeout) para adiar a entrega de novas mensagens na fila por alguns segundos",
      "Usar filas de dead-letter para adiar a entrega de novas mensagens na fila por alguns segundos"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Filas FIFO garantem que as mensagens sejam processadas exatamente uma vez e na ordem exata em que foram enviadas, mas não oferecem funcionalidade para adiar a entrega de mensagens. Portanto, não podem ser usadas para postergar a entrega de novas mensagens.",
      "Correta. Filas com atraso permitem postergar a entrega de novas mensagens para a fila por um período configurável, que pode variar de 0 segundos até 15 minutos. Durante esse tempo, as mensagens permanecem invisíveis para os consumidores, permitindo que o processamento seja adiado conforme necessário.",
      "Incorreta. O tempo de visibilidade é um período durante o qual o Amazon SQS impede que outros consumidores recebam e processem uma determinada mensagem já entregue. Ele não adia a entrega de novas mensagens na fila, mas sim oculta temporariamente mensagens já recebidas para evitar processamento duplicado.",
      "Incorreta. Filas de dead-letter são usadas para armazenar mensagens que não puderam ser processadas com sucesso, auxiliando na depuração e isolamento de mensagens problemáticas. Elas não servem para adiar a entrega de mensagens na fila principal."
    ]
  },
  {
    "question": "Uma empresa possui seu ambiente de teste construído em instâncias Amazon EC2 configuradas com volumes SSD de uso geral (gp2). Qual o tamanho do volume gp2 em que o ambiente de teste atingirá o máximo de IOPS?",
    "options": [
      "5,3 TiB",
      "16 TiB",
      "10,6 TiB",
      "2,7 TiB"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Volumes SSD de uso geral (gp2) têm desempenho atrelado ao tamanho do volume, que determina o nível de desempenho base e a velocidade de acúmulo de créditos de I/O. O desempenho base escala linearmente a 3 IOPS por GiB, com um mínimo de 100 IOPS e um máximo de 16.000 IOPS a partir de 5.334 GiB (~5,3 TiB). Portanto, o volume atinge o máximo de IOPS em 5,3 TiB.",
      "Incorreta. O tamanho máximo suportado para volumes gp2 é 16 TiB, porém o máximo de IOPS é atingido antes, em 5,3 TiB. Volumes maiores que isso não aumentam o IOPS máximo para gp2.",
      "Incorreta. Embora 10,6 TiB seja maior que 5,3 TiB, o limite máximo de IOPS para gp2 já é atingido em 5,3 TiB, então aumentar o volume além disso não aumenta o desempenho máximo.",
      "Incorreta. Embora o desempenho base aumente com o tamanho do volume, 2,7 TiB ainda não é suficiente para atingir o máximo de 16.000 IOPS, pois o limite máximo ocorre a partir de aproximadamente 5,3 TiB."
    ]
  },
  {
    "question": "Quais passos um desenvolvedor pode tomar para otimizar o desempenho de uma função AWS Lambda limitada por CPU e garantir um tempo de resposta rápido?",
    "options": [
      "Aumentar a CPU da função",
      "Aumentar a concorrência provisionada da função",
      "Aumentar o tempo limite da função",
      "Aumentar a memória da função"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Não é possível aumentar diretamente a CPU disponível para uma função Lambda. A CPU é alocada proporcionalmente à memória configurada, portanto, a CPU não pode ser ajustada isoladamente.",
      "Incorreta. A concorrência provisionada prepara ambientes de execução para reduzir a latência de inicialização, mas não aumenta a capacidade de CPU ou o desempenho computacional da função.",
      "Incorreta. Aumentar o tempo limite não melhora o desempenho da função nem reduz o tempo de resposta; apenas permite que a função execute por mais tempo antes de ser interrompida.",
      "Correta. A memória configurada para uma função Lambda determina proporcionalmente a quantidade de CPU virtual disponível. Ao aumentar a memória, a função recebe mais CPU, o que melhora significativamente o desempenho em funções limitadas por CPU."
    ]
  },
  {
    "question": "Uma empresa possui um sistema na nuvem AWS com componentes que enviam e recebem mensagens utilizando filas SQS. Ao revisar o sistema, você percebe que ele processa uma grande quantidade de informações e deseja entender os limites do sistema. Qual das alternativas abaixo representa o número máximo de mensagens que podem ser armazenadas em uma fila SQS?",
    "options": [
      "100.000",
      "Sem limite",
      "10.000",
      "10.000.000"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora 100 mil seja um número elevado, não representa o limite máximo de mensagens que uma fila SQS pode armazenar, pois o serviço suporta armazenamento praticamente ilimitado.",
      "Correta. O Amazon SQS não impõe um limite máximo para o número total de mensagens armazenadas em uma fila. Porém, existe um limite para mensagens 'in-flight' (mensagens recebidas por consumidores, mas ainda não deletadas). É importante deletar as mensagens após o processamento para evitar atingir esse limite.",
      "Incorreta. O limite de 10 mil mensagens não se aplica ao armazenamento total em uma fila SQS. Esse número é muito inferior à capacidade real do serviço.",
      "Incorreta. Não existe um limite fixo de 10 milhões de mensagens para armazenamento em uma fila SQS. O serviço é projetado para escalar praticamente sem limites no número de mensagens armazenadas."
    ]
  },
  {
    "question": "Uma empresa executa sua aplicação principal em uma frota de instâncias Amazon EC2. Após perder algumas chaves privadas dos pares de chaves SSH, decidiram reutilizar seus pares de chaves SSH para diferentes instâncias em várias Regiões AWS. Como um profissional com certificação Developer Associate, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Não é possível reutilizar pares de chaves SSH entre Regiões AWS.",
      "Gerar uma chave pública SSH a partir da chave privada e importar essa chave pública em cada uma das Regiões AWS onde será usada.",
      "Criptografar a chave privada SSH e armazená-la em um bucket S3 para ser acessada de qualquer Região AWS.",
      "Armazenar o par de chaves SSH (pública e privada) no AWS Trusted Advisor e acessá-lo entre as Regiões AWS."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. É possível reutilizar pares de chaves SSH entre Regiões AWS, desde que a chave pública seja importada manualmente para cada Região onde será utilizada.",
      "Correta. O procedimento recomendado para reutilizar pares de chaves SSH entre Regiões é gerar a chave pública a partir da chave privada existente e importar essa chave pública em cada Região AWS desejada, permitindo o acesso consistente às instâncias EC2.",
      "Incorreta. Embora seja possível armazenar a chave privada no Amazon S3, isso não garante que a chave será automaticamente acessível ou reutilizável em diferentes Regiões AWS, além de apresentar riscos de segurança se não for gerenciado corretamente.",
      "Incorreta. O AWS Trusted Advisor é uma ferramenta de recomendações para otimização, segurança e custos, e não armazena ou gerencia credenciais ou pares de chaves SSH."
    ]
  },
  {
    "question": "Um desenvolvedor está criando uma aplicação serverless na AWS e deseja estabelecer um fluxo de trabalho acelerado para desenvolvimento. O fluxo deve permitir que o desenvolvedor faça deploy de mudanças incrementais para testes, sem precisar implantar toda a aplicação a cada commit de código. O desenvolvedor quer otimizar o processo, minimizando o tempo de implantação. O que o desenvolvedor deve fazer para atender a esses requisitos?",
    "options": [
      "Usar o comando cdk diff do AWS Cloud Development Kit (AWS CDK) para implantar mudanças incrementais na AWS para testes",
      "Usar o comando sam deploy do AWS Serverless Application Model (AWS SAM) para implantar mudanças incrementais",
      "Usar o comando sam sync do AWS Serverless Application Model (AWS SAM) para implantar mudanças incrementais",
      "Usar o comando cdk deploy do AWS Cloud Development Kit (AWS CDK) para implantar mudanças incrementais na AWS para testes",
      "Usar o AWS CodeDeploy para gerenciar implantações incrementais da aplicação serverless"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O comando cdk diff não realiza implantações; ele apenas gera um relatório de diferenças entre a stack local e a implantada. Portanto, não sincroniza nem implanta mudanças incrementais, não atendendo ao requisito.",
      "Incorreta. Embora o comando sam deploy utilize o AWS CloudFormation para aplicar apenas as mudanças necessárias, ele não é tão rápido quanto o sam sync para iterações locais, pois envolve etapas de empacotamento e atualização da stack, resultando em um tempo de implantação maior para testes rápidos.",
      "Correta. O comando sam sync foi projetado especificamente para permitir iterações rápidas, sincronizando as mudanças locais com a aplicação serverless implantada na AWS. Isso permite testar mudanças incrementais rapidamente, sem a necessidade de redeploy completo, atendendo exatamente aos requisitos do desenvolvedor.",
      "Incorreta. O comando cdk deploy é uma ferramenta de implantação geral para stacks do AWS CDK. Embora possa implantar mudanças, ele não é otimizado para implantações incrementais rápidas em aplicações serverless, sendo mais adequado para projetos CDK tradicionais.",
      "Incorreta. Embora o AWS CodeDeploy suporte implantações incrementais para aplicações tradicionais, ele não é a ferramenta mais indicada para acelerar o desenvolvimento e deploys rápidos em aplicações serverless, especialmente para testes locais e iterações rápidas."
    ]
  },
  {
    "question": "Ao definir um fluxo de trabalho empresarial como uma máquina de estados no AWS Step Functions, um desenvolvedor configurou vários estados. Qual dos seguintes você identificaria como o estado que representa uma única unidade de trabalho executada por uma máquina de estados?",
    "options": [
      "\"HelloWorld\": {\n  \"Type\": \"Task\",\n  \"Resource\": \"arn:aws:lambda:us-east-1:123456789012:function:HelloFunction\",\n  \"Next\": \"AfterHelloWorldState\",\n  \"Comment\": \"Executa a função Lambda HelloWorld\"\n}",
      "\"FailState\": {\n  \"Type\": \"Fail\",\n  \"Cause\": \"Invalid response.\",\n  \"Error\": \"ErrorA\"\n}",
      "\"wait_until\" : {\n  \"Type\": \"Wait\",\n  \"Timestamp\": \"2016-03-14T01:59:00Z\",\n  \"Next\": \"NextState\"\n}",
      "\"No-op\": {\n  \"Type\": \"Task\",\n  \"Result\": {\n    \"x-datum\": 0.381018,\n    \"y-datum\": 622.2269926397355\n  },\n  \"ResultPath\": \"$.coords\",\n  \"Next\": \"End\"\n}"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Um estado Task (\"Type\": \"Task\") representa uma única unidade de trabalho executada pela máquina de estados. Ele realiza trabalho invocando uma atividade, uma função AWS Lambda ou ações de API de outros serviços. No exemplo, o estado invoca diretamente uma função Lambda, que é uma tarefa nativa na nuvem executada no AWS Lambda.",
      "Incorreta. Um estado Fail interrompe a execução da máquina de estados e a marca como falha, a menos que seja capturado por um bloco Catch. Estados Fail não executam trabalho e não possuem campo Next nem End.",
      "Incorreta. Um estado Wait apenas atrasa a continuação da máquina de estados por um tempo especificado, não executa trabalho propriamente dito.",
      "Incorreta. O campo Resource é obrigatório para um estado do tipo Task. Esta definição não representa um estado Task válido, mas sim um estado do tipo Pass que apenas passa dados adiante sem executar trabalho."
    ]
  },
  {
    "question": "A equipe de tecnologia de um banco de investimentos utiliza o DynamoDB para facilitar negociações de alta frequência, onde múltiplas operações podem tentar atualizar um mesmo item simultaneamente. Qual das seguintes ações garantiria que apenas o valor mais recentemente atualizado de qualquer item seja utilizado na aplicação?",
    "options": [
      "Utilizar ConsistentRead = false durante a operação PutItem para qualquer item",
      "Utilizar ConsistentRead = true durante a operação UpdateItem para qualquer item",
      "Utilizar ConsistentRead = true durante a operação PutItem para qualquer item",
      "Utilizar ConsistentRead = true durante a operação GetItem para qualquer item"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Assim como na opção 1, o parâmetro ConsistentRead não se aplica a operações de escrita como PutItem. Além disso, ConsistentRead = false indica leitura eventualmente consistente, que não garante a leitura do valor mais recente.",
      "Incorreta. O parâmetro ConsistentRead não é válido para operações de escrita como UpdateItem. Ele é exclusivo para operações de leitura, portanto não garante a consistência da escrita ou atualização.",
      "Incorreta. O parâmetro ConsistentRead é aplicável apenas a operações de leitura (GetItem, Query, Scan). Ele não influencia operações de escrita como PutItem, portanto não garante a consistência da escrita.",
      "Correta. O DynamoDB suporta leituras eventualmente consistentes (padrão) e leituras fortemente consistentes. Ao definir ConsistentRead = true em uma operação GetItem, a leitura retorna o dado mais atualizado, refletindo todas as escritas bem-sucedidas anteriores, garantindo que a aplicação utilize o valor mais recente."
    ]
  },
  {
    "question": "Uma empresa utiliza o Amazon Simple Email Service (SES) para enviar e-mails de assinatura aos clientes de forma econômica. Intermitentemente, o serviço SES retorna o erro: Throttling – Maximum sending rate exceeded. Como um desenvolvedor associado, qual das seguintes opções você recomendaria para resolver esse problema? (Selecione três.)",
    "options": [
      "Dividir os e-mails em lotes menores e enviá-los em paralelo para aumentar a taxa de entrega.",
      "Monitorar e ajustar a frequência de envio de e-mails para evitar picos que causem throttling",
      "Configurar um mecanismo de timeout para cada requisição feita ao serviço SES",
      "Utilizar a técnica de Exponential Backoff para introduzir um atraso antes de tentar executar a operação novamente",
      "Abrir uma solicitação de suporte junto à Amazon para aumentar o limite de taxa de envio do SES",
      "Implementar um mecanismo de retry para todos os erros 4xx para evitar o erro de throttling"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Enviar e-mails em paralelo pode, na verdade, aumentar a probabilidade de throttling ao exceder ainda mais o limite de taxa de envio do SES. A abordagem correta seria limitar ou distribuir o envio ao longo do tempo (rate limiting), e não aumentar a concorrência.",
      "Correta. Controlar a frequência das requisições ajuda a evitar picos que ultrapassem o limite de taxa, reduzindo a ocorrência do erro de throttling e melhorando a estabilidade do envio de e-mails.",
      "Incorreta. Configurar timeout ajuda a liberar recursos quando uma requisição demora demais, mas não resolve problemas de throttling causados por alta carga. O erro de throttling indica que o limite de taxa de envio foi excedido, e simplesmente configurar timeout não reduz a frequência das requisições nem evita o erro.",
      "Correta. O erro 'Throttling – Maximum sending rate exceeded' é um erro transitório que pode ser tratado com retries usando Exponential Backoff. Essa técnica aumenta o tempo de espera entre as tentativas de forma exponencial, reduzindo a sobrecarga no serviço e aumentando as chances de sucesso nas próximas tentativas.",
      "Correta. Aumentar o limite de taxa é uma solução válida e recomendada quando o limite atual é insuficiente, mesmo que o erro de throttling ocorra de forma intermitente. Essa ação deve ser considerada especialmente se o padrão de uso justificar a necessidade de maior capacidade.",
      "Incorreta. O erro de throttling no SES é um erro 4xx (geralmente 429 Too Many Requests), indicando que o cliente excedeu o limite de taxa. Retries devem ser aplicados especificamente para erros transitórios como throttling, e não para todos os erros 4xx indiscriminadamente, pois muitos erros 4xx indicam problemas que precisam ser corrigidos antes de tentar novamente."
    ]
  },
  {
    "question": "Considere uma aplicação que permite aos usuários armazenar imagens de seus celulares na nuvem e suporta dezenas de milhares de usuários. A aplicação deve utilizar uma API REST do Amazon API Gateway que aproveite funções AWS Lambda para o processamento das fotos, enquanto armazena os detalhes das fotos no Amazon DynamoDB. A aplicação deve permitir que os usuários criem uma conta, façam upload de imagens e recuperem imagens previamente enviadas, com imagens variando de 500 KB a 5 MB. Como você projetaria essa aplicação com o menor overhead operacional possível?",
    "options": [
      "Utilize pools de usuários do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito user pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3.",
      "Utilize pools de usuários do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito user pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens, bem como os metadados das imagens, em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas diretamente do DynamoDB.",
      "Use pools de identidades do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito identity pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3.",
      "Use pools de identidades do Cognito para criar um usuário IAM para cada usuário da aplicação durante o processo de cadastro. Utilize autenticação IAM no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Pools de usuários do Cognito fornecem um diretório completo para gerenciamento de usuários, incluindo autenticação, registro e integração com provedores sociais. O API Gateway pode usar um autorizador baseado em user pool para controlar o acesso à API. Armazenar as imagens no S3 e os metadados no DynamoDB é uma arquitetura recomendada para lidar com arquivos grandes e dados estruturados, garantindo escalabilidade e baixo overhead operacional.",
      "Incorreta. O DynamoDB tem um tamanho máximo de item de 400 KB, e as imagens variam de 500 KB a 5 MB, portanto, não é possível armazenar as imagens diretamente no DynamoDB. Além disso, armazenar arquivos binários grandes no DynamoDB é considerado uma má prática. O correto é armazenar as imagens no S3 e usar o DynamoDB para os metadados.",
      "Incorreta. Pools de identidades do Cognito são usados para fornecer credenciais temporárias e federar identidades, mas não para gerenciar contas de usuários diretamente. Além disso, o API Gateway não suporta autorizadores baseados em identity pools, apenas em user pools. Portanto, essa abordagem não é adequada para controle de acesso da API.",
      "Incorreta. Pools de identidades do Cognito (identity pools) não são usados para criar usuários IAM individuais durante o cadastro. Eles fornecem credenciais temporárias para acessar serviços AWS, mas não gerenciam usuários nem criam usuários IAM. Além disso, usar autenticação IAM diretamente no API Gateway para cada usuário não é escalável nem recomendado para esse caso."
    ]
  },
  {
    "question": "Uma startup tem experimentado o DynamoDB em seu novo ambiente de testes. A equipe de desenvolvimento descobriu que algumas operações de gravação estão sobrescrevendo itens existentes que possuem a mesma chave primária. Isso causou inconsistências nos dados, gerando discrepâncias. Qual opção de gravação do DynamoDB deve ser escolhida para evitar esse tipo de sobrescrição?",
    "options": [
      "Contadores atômicos (Atomic Counters)",
      "Gravações em lote (Batch writes)",
      "Gravações condicionais",
      "Operação Scan"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Contadores atômicos são atributos numéricos que podem ser incrementados ou decrementados de forma segura e sem interferência de outras operações concorrentes. São úteis para rastrear contagens, como número de visitantes, mas não previnem a sobrescrição de itens existentes, não sendo adequados para o cenário apresentado.",
      "Incorreta. As gravações em lote permitem que múltiplas operações de leitura ou escrita sejam enviadas em uma única requisição, reduzindo o número de chamadas de rede e aumentando a eficiência. No entanto, elas não oferecem controle sobre sobrescrições ou condições para evitar a modificação de itens existentes, portanto não resolvem o problema de sobrescrever dados.",
      "Correta. As gravações condicionais no DynamoDB permitem que operações de escrita (PutItem, UpdateItem, DeleteItem) sejam executadas somente se certas condições pré-definidas forem atendidas. Por exemplo, é possível garantir que um PutItem só seja bem-sucedido se não existir um item com a mesma chave primária, evitando assim a sobrescrição. Essa funcionalidade é ideal para evitar conflitos e inconsistências quando múltiplos usuários ou processos tentam modificar o mesmo item simultaneamente.",
      "Incorreta. A operação Scan lê todos os itens de uma tabela ou índice secundário, retornando todos os atributos por padrão. Essa operação é usada para consultas e não tem relação com operações de escrita ou prevenção de sobrescrita de dados."
    ]
  },
  {
    "question": "Como Desenvolvedor Sênior, você foi designado para criar várias APIs utilizando o API Gateway junto com sua equipe de desenvolvedores. Os desenvolvedores estão trabalhando na API no ambiente de desenvolvimento, mas percebem que as alterações feitas nas APIs não são refletidas quando a API é chamada. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para esse caso de uso?",
    "options": [
      "Os desenvolvedores precisam de permissões IAM no componente de execução do API Gateway",
      "Habilitar um Lambda authorizer para acessar a API",
      "Usar variáveis de estágio para o estado de desenvolvimento da API",
      "Reimplantar a API em um estágio existente ou em um novo estágio"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O controle de acesso para chamadas à API é feito via permissões IAM no componente de execução do API Gateway. Porém, neste caso, o problema está relacionado à implantação e atualização da API, que requer permissões no componente de gerenciamento do API Gateway, não no de execução.",
      "Incorreta. Um Lambda authorizer (anteriormente conhecido como custom authorizer) é um recurso do API Gateway que utiliza uma função Lambda para controlar o acesso à API. Embora seja útil para controle de acesso, neste cenário o problema está relacionado à atualização das APIs durante o desenvolvimento, não ao controle de acesso dos usuários.",
      "Incorreta. Variáveis de estágio são pares nome-valor que funcionam como variáveis de ambiente associadas a um estágio de implantação da API. Elas são usadas para configurar a API e templates de mapeamento, mas não resolvem o problema de alterações não refletidas após modificações na API.",
      "Correta. Após criar ou modificar uma API, é necessário reimplantá-la em um estágio existente ou novo para que as alterações sejam refletidas e a API possa ser chamada com as atualizações. Modificações em rotas, métodos, integrações ou autorizadores exigem essa reimplantação para entrar em vigor."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando um grupo de Auto Scaling do Amazon EC2 para escalonamento dinâmico. Qual das métricas abaixo NÃO faz parte da Política de Escalonamento por Rastreamento de Alvo (Target Tracking Scaling Policy)?",
    "options": [
      "ApproximateNumberOfMessagesVisible",
      "ASGAverageNetworkOut",
      "ASGAverageCPUUtilization",
      "ALBRequestCountPerTarget"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. ApproximateNumberOfMessagesVisible é uma métrica do Amazon SQS que indica o número aproximado de mensagens visíveis na fila. Essa métrica não é adequada para políticas de escalonamento por rastreamento de alvo do Auto Scaling, pois a quantidade de mensagens na fila pode não variar proporcionalmente ao tamanho do grupo de Auto Scaling que processa essas mensagens.",
      "Incorreta. ASGAverageNetworkOut é uma métrica pré-definida para políticas de escalonamento por rastreamento de alvo. Representa a média de bytes enviados por todas as interfaces de rede do grupo de Auto Scaling, refletindo a atividade de saída de rede do grupo.",
      "Incorreta. ASGAverageCPUUtilization é uma métrica pré-definida para políticas de escalonamento por rastreamento de alvo. Representa a média da utilização da CPU do grupo de Auto Scaling, sendo uma métrica comum para escalonamento baseado em carga computacional.",
      "Incorreta. ALBRequestCountPerTarget é uma métrica pré-definida para políticas de escalonamento por rastreamento de alvo. Ela representa o número de requisições concluídas por alvo em um grupo de destino do Application Load Balancer, sendo adequada para escalonamento baseado na carga do balanceador."
    ]
  },
  {
    "question": "Como um desenvolvedor certificado AWS, você está trabalhando em um template AWS CloudFormation que criará recursos para a infraestrutura em nuvem de uma empresa. Seu template é composto por três stacks: Stack-A, Stack-B e Stack-C. A Stack-A irá provisionar uma VPC, um grupo de segurança e subnets para aplicações web públicas que serão referenciadas na Stack-B e na Stack-C. Após executar as stacks, você decide deletá-las. Em qual ordem você deve realizar essa exclusão?",
    "options": [
      "Stack A, Stack C, depois Stack B",
      "Stack B, depois Stack C, depois Stack A",
      "Stack C, depois Stack A, depois Stack B",
      "Stack A, depois Stack B, depois Stack C"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A Stack A é a stack exportadora dos recursos referenciados pelas outras stacks. Não é possível deletá-la antes de remover todas as importações, ou seja, antes de deletar a Stack B e Stack C que a referenciam.",
      "Correta. A Stack A exporta recursos que são importados pelas Stacks B e C. Para deletar a Stack A, todas as importações devem ser removidas primeiro, o que significa deletar as Stacks B e C antes. Portanto, a ordem correta é deletar primeiro a Stack B, depois a Stack C, e por último a Stack A.",
      "Incorreta. Embora seja correto deletar a Stack C antes da Stack A, a Stack B também referencia a Stack A e deve ser deletada antes dela para remover todas as importações. Portanto, essa ordem não é válida.",
      "Incorreta. Deletar a Stack A primeiro não é possível porque ela é referenciada pelas Stacks B e C. Todas as importações devem ser removidas antes de deletar a stack exportadora, o que não ocorre nessa ordem."
    ]
  },
  {
    "question": "Como desenvolvedor, você recebeu um documento escrito em YAML que representa a arquitetura de uma aplicação serverless. A primeira linha do documento contém Transform: 'AWS::Serverless-2016-10-31'. O que a seção Transform no documento representa?",
    "options": [
      "Ela representa a definição de uma função Lambda",
      "A presença da seção Transform indica que é um template do Serverless Application Model (SAM)",
      "Ela representa uma função intrínseca",
      "A presença da seção Transform indica que é um parâmetro do CloudFormation"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A definição de uma função Lambda é feita através do recurso AWS::Lambda::Function na seção Resources, e não pela seção Transform.",
      "Correta. A seção Transform especifica que o template utiliza a macro AWS::Serverless, que processa templates escritos na sintaxe do AWS SAM, expandindo-os em um template CloudFormation padrão.",
      "Incorreta. Funções intrínsecas são usadas para atribuir valores dinâmicos e geralmente começam com Fn:: ou !, como !Sub ou Fn::Sub, e não são definidas na seção Transform.",
      "Incorreta. Parâmetros no CloudFormation são definidos na seção Parameters do template, não na seção Transform. A seção Transform não está relacionada à definição de parâmetros."
    ]
  },
  {
    "question": "Um desenvolvedor está definindo os signatários que podem criar URLs assinadas para suas distribuições Amazon CloudFront. Quais das seguintes afirmações o desenvolvedor deve considerar ao definir os signatários? (Selecione três.)",
    "options": [
      "Quando você usa o usuário root para gerenciar as chaves do CloudFront, pode ter no máximo duas chaves ativas por conta AWS",
      "As chaves de assinatura para URLs do CloudFront podem ser gerenciadas por usuários IAM dentro de grupos de chaves confiáveis, não sendo necessário usar o usuário root para essa finalidade.",
      "Você pode usar funções Lambda@Edge para validar a assinatura e os parâmetros da URL antes de entregar o conteúdo ao usuário final.",
      "Quando você cria um signatário, a chave pública fica com o CloudFront e a chave privada é usada para assinar uma parte da URL",
      "Você também pode usar políticas de permissões do AWS Identity and Access Management (IAM) para restringir o que o usuário root pode fazer com as chaves do CloudFront",
      "Grupos de chaves confiáveis podem ser gerenciados usando as APIs do CloudFront, permitindo automação no gerenciamento das chaves públicas associadas aos signatários."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Esse limite de duas chaves ativas aplica-se ao uso de trusted key groups e usuários IAM, não exclusivamente ao usuário root. Além disso, o uso do usuário root para esse tipo de operação não é recomendado pela AWS.",
      "Correta. A AWS recomenda o uso de usuários IAM e grupos de chaves confiáveis para gerenciar as chaves usadas na assinatura de URLs do CloudFront, evitando o uso do usuário root para operações diárias.",
      "Incorreta. Embora o Lambda@Edge permita personalizar o comportamento do CloudFront, a validação de assinaturas de URLs assinadas é feita automaticamente pelo próprio CloudFront com base nas chaves públicas, não sendo necessário (nem indicado) usar Lambda para esse propósito.",
      "Correta. Cada signatário deve possuir um par de chaves pública e privada. A chave privada é usada para assinar a URL ou cookie, enquanto o CloudFront usa a chave pública para verificar a assinatura e garantir a integridade e validade da URL assinada.",
      "Incorreta. Não é possível aplicar políticas IAM para restringir ações do usuário root, incluindo o gerenciamento das chaves do CloudFront. Por isso, a AWS recomenda evitar o uso do usuário root para operações diárias.",
      "Correta. Os grupos de chaves confiáveis podem ser gerenciados via API do CloudFront, o que facilita a automação, diferentemente das chaves do usuário root que são gerenciadas apenas pelo console."
    ]
  },
  {
    "question": "Você lançou várias funções AWS Lambda escritas em Java. Um novo requisito foi definido: mais de 1 MB de dados devem ser passados para as funções e precisam ser criptografados e descriptografados em tempo de execução. Qual dos seguintes métodos é adequado para atender a esse caso de uso?",
    "options": [
      "Usar Criptografia KMS e armazenar como variável de ambiente",
      "Usar Criptografia Envelope (Envelope Encryption) e referenciar os dados como arquivo dentro do código",
      "Usar Criptografia Envelope (Envelope Encryption) e armazenar como variável de ambiente",
      "Usar criptografia direta do KMS e armazenar como arquivo"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS KMS permite criptografar diretamente apenas até 4 KB de dados, e as variáveis de ambiente do Lambda também têm limite de 4 KB. Assim, essa opção não é viável para dados superiores a 1 MB.",
      "Correta. A criptografia envelope é a abordagem recomendada para grandes volumes de dados, pois utiliza uma chave de dados gerada localmente para criptografar o conteúdo, enquanto a chave de dados é protegida pela AWS KMS. Isso reduz a sobrecarga de rede e permite trabalhar com arquivos maiores que o limite de 4 KB do KMS. Referenciar os dados como arquivo dentro do código permite manipular e descriptografar os dados em tempo de execução de forma eficiente.",
      "Incorreta. Variáveis de ambiente no AWS Lambda têm um limite máximo de 4 KB, o que é insuficiente para armazenar mais de 1 MB de dados criptografados. Portanto, essa abordagem não atende ao requisito de tamanho e não é adequada.",
      "Incorreta. O AWS KMS suporta criptografia direta apenas para até 4 KB de dados. Para arquivos maiores, como 1 MB, essa abordagem não é adequada, pois excede o limite de tamanho da criptografia direta do KMS."
    ]
  },
  {
    "question": "Sua empresa adotou arquiteturas de microsserviços nativas da nuvem. Novas aplicações devem ser dockerizadas e armazenadas em um serviço de registro oferecido pela AWS. A arquitetura deve suportar mapeamento dinâmico de portas e permitir múltiplas tarefas de um único serviço na mesma instância de contêiner. Todos os serviços devem rodar na mesma instância EC2. Qual das seguintes opções oferece a solução mais adequada para esse caso de uso?",
    "options": [
      "Classic Load Balancer + Amazon ECS",
      "Application Load Balancer + Elastic Beanstalk",
      "Application Load Balancer + Amazon ECS",
      "Classic Load Balancer + Elastic Beanstalk"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O Classic Load Balancer não suporta mapeamento dinâmico de portas, o que impede a execução de múltiplas tarefas do mesmo serviço na mesma instância ECS. Portanto, essa combinação não atende aos requisitos do cenário.",
      "Incorreta. Embora seja possível criar ambientes Docker que suportem múltiplos contêineres por instância EC2 usando a plataforma multi-contêiner do Elastic Beanstalk, essa solução não oferece o controle granular e a flexibilidade necessários para mapeamento dinâmico de portas e múltiplas tarefas por instância como o ECS oferece.",
      "Correta. O Amazon ECS é um serviço gerenciado para executar e gerenciar contêineres Docker em clusters, permitindo o uso de mapeamento dinâmico de portas para suportar múltiplas tarefas do mesmo serviço na mesma instância EC2. O Application Load Balancer distribui o tráfego de forma eficiente entre as tarefas, usando listeners e regras para roteamento baseado em porta e protocolo, atendendo perfeitamente ao requisito do cenário.",
      "Incorreta. O Classic Load Balancer não suporta múltiplas cópias de uma tarefa na mesma instância, pois exige mapeamento estático de portas nos contêineres. Além disso, o Elastic Beanstalk não é ideal para cenários que requerem esse nível de controle sobre contêineres e portas dinâmicas."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de um aplicativo móvel de jogos sociais deseja simplificar o processo de cadastro de usuários no app. A equipe busca uma solução totalmente gerenciada e escalável para o gerenciamento de usuários, antecipando o rápido crescimento previsto para o aplicativo. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para que exija o MENOR esforço de desenvolvimento?",
    "options": [
      "Usar pools de usuários do Cognito para facilitar o cadastro e gerenciamento de usuários no aplicativo móvel",
      "Usar pools de identidade do Cognito para facilitar o cadastro e gerenciamento de usuários no aplicativo móvel",
      "Criar uma solução personalizada usando Lambda e DynamoDB para facilitar o cadastro e gerenciamento de usuários no aplicativo móvel",
      "Criar uma solução personalizada usando EC2 e DynamoDB para facilitar o cadastro e gerenciamento de usuários no aplicativo móvel"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Amazon Cognito User Pools oferece um serviço totalmente gerenciado para autenticação, autorização e gerenciamento de usuários. Ele permite que os usuários façam login diretamente com nome de usuário e senha ou via provedores de identidade terceiros, como Facebook, Google e Apple. É escalável, seguro e reduz drasticamente o esforço de desenvolvimento.",
      "Incorreta. Cognito Identity Pools são usados para conceder credenciais temporárias para acessar serviços AWS, não para o gerenciamento direto de usuários ou cadastro. Eles suportam usuários anônimos e federados, mas não gerenciam o ciclo de vida do usuário, o que não atende ao requisito principal da questão.",
      "Incorreta. Embora seja possível criar uma solução personalizada com Lambda e DynamoDB, isso exige um esforço significativo de desenvolvimento e manutenção. Além disso, não é uma solução totalmente gerenciada, o que contraria o requisito de menor esforço e escalabilidade automática.",
      "Incorreta. Criar uma solução personalizada com EC2 e DynamoDB implica maior esforço de desenvolvimento, manutenção e escalabilidade manual. Além disso, não é uma solução totalmente gerenciada, o que vai contra o requisito de menor esforço e escalabilidade automática."
    ]
  },
  {
    "question": "Uma aplicação CRM está hospedada em instâncias Amazon EC2 com a camada de banco de dados utilizando DynamoDB. Os clientes levantaram preocupações relacionadas à privacidade e segurança ao enviar e receber dados pela internet pública. Como um desenvolvedor associado, qual das seguintes opções você sugeriria como solução ideal para fornecer comunicação entre as instâncias EC2 e o DynamoDB sem utilizar a internet pública?",
    "options": [
      "A empresa pode usar uma rede privada virtual (VPN) para rotear todo o tráfego de rede do DynamoDB através da infraestrutura de rede corporativa.",
      "Criar um NAT Gateway para fornecer o canal de comunicação necessário entre as instâncias EC2 e o DynamoDB.",
      "Configurar endpoints de VPC para DynamoDB que forneçam o acesso interno necessário sem usar a internet pública.",
      "Criar um Internet Gateway para fornecer o canal de comunicação necessário entre as instâncias EC2 e o DynamoDB."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora seja possível usar VPN para rotear o tráfego do DynamoDB pela rede corporativa, essa abordagem pode gerar desafios de largura de banda e disponibilidade, tornando-a uma solução menos eficiente e não ideal para este caso.",
      "Incorreta. O NAT Gateway permite que instâncias em sub-redes privadas acessem a internet ou outros serviços AWS, mas impede conexões iniciadas da internet. No entanto, como tanto as instâncias EC2 quanto o DynamoDB estão na rede AWS, o NAT Gateway não é necessário para essa comunicação.",
      "Correta. Ao configurar endpoints de VPC para DynamoDB, todas as requisições para o endpoint do DynamoDB dentro da região são roteadas para um endpoint privado dentro da rede da AWS. Isso mantém o tráfego totalmente dentro da rede da AWS, eliminando a exposição à internet pública, além de permitir o controle de acesso via políticas de endpoint.",
      "Incorreta. O Internet Gateway permite comunicação entre a VPC e a internet pública. Usar um Internet Gateway implicaria que as instâncias EC2 acessariam o DynamoDB pela internet pública, o que contraria a necessidade de evitar exposição pública e, portanto, não é adequado."
    ]
  },
  {
    "question": "Considere uma aplicação que permite aos usuários armazenar imagens de seus celulares na nuvem e suporta dezenas de milhares de usuários. A aplicação deve utilizar uma API REST do Amazon API Gateway que aproveite funções AWS Lambda para o processamento das fotos, enquanto armazena os detalhes das fotos no Amazon DynamoDB. A aplicação deve permitir que os usuários criem uma conta, façam upload de imagens e recuperem imagens previamente enviadas, com imagens variando de 500 KB a 5 MB. Como você projetaria essa aplicação com o menor overhead operacional possível?",
    "options": [
      "Utilize pools de usuários do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito user pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3.",
      "Utilize pools de usuários do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito user pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens, bem como os metadados das imagens, em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas diretamente do DynamoDB.",
      "Use pools de identidades do Cognito para gerenciar contas de usuários e configure um autorizador do Amazon Cognito identity pool no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3.",
      "Use pools de identidades do Cognito para criar um usuário IAM para cada usuário da aplicação durante o processo de cadastro. Utilize autenticação IAM no API Gateway para controlar o acesso à API. Configure uma função Lambda para armazenar as imagens no Amazon S3 e salvar a chave do objeto S3 como parte dos detalhes da foto em uma tabela DynamoDB. Faça a função Lambda recuperar imagens previamente enviadas consultando o DynamoDB pela chave S3."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Pools de usuários do Cognito fornecem um diretório completo para gerenciamento de usuários, incluindo autenticação, registro e integração com provedores sociais. O API Gateway pode usar um autorizador baseado em user pool para controlar o acesso à API. Armazenar as imagens no S3 e os metadados no DynamoDB é uma arquitetura recomendada para lidar com arquivos grandes e dados estruturados, garantindo escalabilidade e baixo overhead operacional.",
      "Incorreta. O DynamoDB tem um tamanho máximo de item de 400 KB, e as imagens variam de 500 KB a 5 MB, portanto, não é possível armazenar as imagens diretamente no DynamoDB. Além disso, armazenar arquivos binários grandes no DynamoDB é considerado uma má prática. O correto é armazenar as imagens no S3 e usar o DynamoDB para os metadados.",
      "Incorreta. Pools de identidades do Cognito são usados para fornecer credenciais temporárias e federar identidades, mas não para gerenciar contas de usuários diretamente. Além disso, o API Gateway não suporta autorizadores baseados em identity pools, apenas em user pools. Portanto, essa abordagem não é adequada para controle de acesso da API.",
      "Incorreta. Pools de identidades do Cognito (identity pools) não são usados para criar usuários IAM individuais durante o cadastro. Eles fornecem credenciais temporárias para acessar serviços AWS, mas não gerenciam usuários nem criam usuários IAM. Além disso, usar autenticação IAM diretamente no API Gateway para cada usuário não é escalável nem recomendado para esse caso."
    ]
  },
  {
    "question": "Um desenvolvedor com acesso ao AWS Management Console encerrou uma instância na zona de disponibilidade us-east-1a. O volume EBS anexado permaneceu e agora está disponível para ser conectado a outras instâncias. Seu colega lança uma nova instância Linux EC2 na zona de disponibilidade us-east-1e e está tentando anexar o volume EBS. Seu colega informa que não é possível e pede sua ajuda. Qual das seguintes explicações você forneceria para ele?",
    "options": [
      "Volumes EBS são restritos à zona de disponibilidade (AZ locked)",
      "As permissões IAM necessárias estão ausentes",
      "Volumes EBS são restritos à região (region locked)",
      "O volume EBS está criptografado"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Volumes EBS são vinculados à zona de disponibilidade em que foram criados e só podem ser anexados a instâncias dentro da mesma AZ. Por isso, um volume criado em us-east-1a não pode ser anexado a uma instância em us-east-1e.",
      "Incorreta. Embora a falta de permissões IAM possa impedir a anexação do volume, se as permissões não forem o problema, o volume EBS ainda estará restrito à zona de disponibilidade original, o que é o verdadeiro motivo da falha.",
      "Incorreta. Volumes EBS não são restritos à região, mas sim à zona de disponibilidade dentro da região. Portanto, eles podem ser usados em qualquer instância dentro da mesma AZ, mas não em diferentes AZs, mesmo que estejam na mesma região.",
      "Incorreta. A criptografia do volume EBS não impede que ele seja anexado a uma instância; ela apenas garante a segurança dos dados em repouso, sem afetar a capacidade de anexação entre instâncias na mesma zona de disponibilidade."
    ]
  },
  {
    "question": "Uma empresa criou um bucket Amazon S3 que armazena dados de clientes. O líder da equipe acabou de habilitar o registro de acesso (access logging) para esse bucket. O tamanho do bucket cresceu substancialmente após a ativação do registro de acesso. Como nenhum novo arquivo foi adicionado ao bucket, o líder da equipe está perplexo e busca uma explicação. Qual das seguintes razões explica esse comportamento?",
    "options": [
      "A criptografia de objetos foi habilitada e cada objeto é armazenado duas vezes como parte dessa configuração.",
      "Um ataque DDoS ao seu bucket S3 pode potencialmente aumentar o tamanho dos dados no bucket se a segurança do bucket for comprometida durante o ataque.",
      "Políticas de bucket incorretas para uploads em lote podem, às vezes, ser responsáveis pelo crescimento exponencial do tamanho do bucket S3.",
      "O registro de acesso do S3 está configurado para apontar para o mesmo bucket, o que é responsável pelo crescimento substancial do tamanho do bucket."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A criptografia de objetos no S3 não faz com que cada objeto seja armazenado duas vezes. A criptografia protege os dados, mas não duplica o armazenamento dos objetos, portanto não explica o crescimento substancial do bucket.",
      "Incorreta. Embora ataques DDoS possam afetar a disponibilidade do serviço, a AWS gerencia a mitigação desses ataques. Um ataque DDoS não causa aumento no tamanho dos dados armazenados no bucket.",
      "Incorreta. Políticas de bucket são políticas baseadas em recursos que controlam permissões de acesso. Elas não causam aumento no tamanho dos dados armazenados no bucket, independentemente do tipo de upload.",
      "Correta. Quando o bucket de origem e o bucket de destino dos logs são o mesmo, os logs gerados para os próprios arquivos de log criam um ciclo que gera mais logs, causando um crescimento exponencial do tamanho do bucket."
    ]
  },
  {
    "question": "Você é o líder da equipe de desenvolvimento e está configurando permissões para outros usuários IAM com permissões limitadas. No Console de Gerenciamento da AWS, você criou um grupo de desenvolvedores onde novos membros serão adicionados, e em sua estação de trabalho, configurou um perfil de desenvolvedor. Você gostaria de testar se esse usuário não tem permissão para encerrar instâncias EC2. Qual das opções abaixo você executaria para realizar esse teste?",
    "options": [
      "Utilizar a opção --dry-run do AWS CLI",
      "Recuperar a política usando o serviço de metadados do EC2 e usar o simulador de políticas IAM",
      "Utilizar a opção --test do AWS CLI",
      "Criar uma instância EC2 fictícia usando o CLI e tentar encerrá-la com outro comando CLI"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A opção --dry-run verifica se o usuário possui as permissões necessárias para executar a ação, sem realmente executar a operação. Se o usuário tiver permissão, a resposta será DryRunOperation; caso contrário, UnauthorizedOperation. Essa é a forma recomendada para testar permissões.",
      "Incorreta. O serviço de metadados do EC2 é usado para obter informações dinâmicas da instância, como instance-id e hostname, e não para recuperar políticas IAM. Portanto, essa abordagem não é válida para verificar permissões.",
      "Incorreta. A opção --test não existe no AWS CLI; trata-se de uma opção fictícia criada apenas para confundir.",
      "Incorreta. Embora pareça uma abordagem prática, essa opção não é confiável porque a instância EC2 criada pode ter permissões diferentes das do usuário testado. Além disso, não é uma forma elegante nem recomendada para verificar permissões."
    ]
  },
  {
    "question": "Você criou um grupo de Auto Scaling para trabalhar com um Application Load Balancer. O grupo de escalabilidade está configurado com um tamanho mínimo de 5 instâncias, um tamanho máximo de 20 e uma capacidade desejada de 10. Uma das 10 instâncias EC2 foi reportada como não saudável. Qual das seguintes ações ocorrerá?",
    "options": [
      "O grupo de Auto Scaling manterá a instância em execução e reiniciará a aplicação.",
      "O grupo de Auto Scaling encerrará a instância EC2.",
      "O grupo de Auto Scaling destacará a instância EC2 do grupo e a deixará em execução.",
      "O grupo de Auto Scaling formatará o disco EBS raiz da instância EC2 e executará novamente o User Data."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Auto Scaling não gerencia diretamente o estado das aplicações dentro das instâncias; sua função é gerenciar o ciclo de vida das instâncias, não reiniciar aplicações.",
      "Correta. Para manter o número desejado de instâncias, o Auto Scaling realiza verificações periódicas de integridade nas instâncias em execução. Quando identifica uma instância como não saudável, ele a encerra e lança uma nova para substituí-la, garantindo a capacidade desejada do grupo.",
      "Incorreta. O objetivo do Auto Scaling é substituir instâncias não saudáveis para manter a capacidade desejada, não apenas removê-las do grupo e deixá-las rodando.",
      "Incorreta. O Auto Scaling não tem controle para formatar volumes EBS ou executar novamente o User Data, que é executado apenas na primeira inicialização da instância."
    ]
  },
  {
    "question": "Uma empresa está utilizando uma conexão VPN baseada em Border Gateway Protocol (BGP) para conectar seu data center on-premises às instâncias Amazon EC2 na conta da empresa. A equipe de desenvolvimento consegue acessar uma instância EC2 na sub-rede A, mas não consegue acessar uma instância EC2 na sub-rede B dentro da mesma VPC. Quais logs podem ser utilizados para verificar se o tráfego está chegando à sub-rede B?",
    "options": [
      "VPC Flow Logs",
      "Logs da Sub-rede",
      "Logs do BGP",
      "Logs da VPN"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O VPC Flow Logs é um recurso que permite capturar informações sobre o tráfego IP que entra e sai das interfaces de rede dentro da VPC. Ele pode ser configurado para monitorar uma VPC inteira, uma sub-rede específica ou uma interface de rede individual, registrando dados detalhados sobre o fluxo de tráfego, o que possibilita verificar se o tráfego está alcançando a sub-rede B.",
      "Incorreta. Não existe um recurso nativo chamado 'logs da sub-rede' na AWS. Embora seja possível criar logs para recursos específicos, como interfaces de rede ou VPCs, não há logs específicos para sub-redes que capturem diretamente o tráfego de rede.",
      "Incorreta. Os logs do BGP registram informações sobre o protocolo de roteamento Border Gateway Protocol, como troca de rotas e status das sessões BGP, mas não capturam o tráfego IP real que chega às sub-redes da VPC.",
      "Incorreta. Os logs da VPN geralmente registram eventos relacionados à conexão VPN, como estabelecimento, falhas ou status da conexão, mas não fornecem detalhes granulares sobre o tráfego IP que chega a sub-redes específicas dentro da VPC."
    ]
  },
  {
    "question": "Durante a resolução de problemas, um desenvolvedor percebeu que a instância Amazon EC2 não consegue se conectar à Internet usando o Internet Gateway. Quais condições devem ser atendidas para que a conectividade com a Internet seja estabelecida? (Selecione duas.)",
    "options": [
      "As ACLs de rede associadas à sub-rede devem possuir regras que permitam o tráfego de entrada e saída",
      "A sub-rede foi configurada como pública, mas não possui acesso à Internet",
      "A sub-rede da instância não está associada a nenhuma tabela de rotas",
      "A sub-rede da instância está associada a múltiplas tabelas de rotas com configurações conflitantes",
      "A tabela de rotas da sub-rede da instância deve ter uma rota para um Internet Gateway"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. As listas de controle de acesso de rede (Network ACLs) associadas à sub-rede devem conter regras que permitam o tráfego de entrada e saída, especialmente para as portas usadas pelo tráfego HTTP (porta 80) e HTTPS (porta 443). Sem essas permissões, a conectividade com a Internet não será possível.",
      "Incorreta. Sub-redes públicas são configuradas para ter acesso à Internet por meio do Internet Gateway. Se a sub-rede é pública, ela deve ter conectividade com a Internet, desde que as outras configurações estejam corretas.",
      "Incorreta. Toda sub-rede está associada a uma tabela de rotas, seja explicitamente ou implicitamente à tabela de rotas principal da VPC. Portanto, essa afirmação está incorreta.",
      "Incorreta. Uma sub-rede só pode estar associada a uma única tabela de rotas por vez. Portanto, não é possível que haja múltiplas tabelas de rotas associadas simultaneamente com configurações conflitantes.",
      "Correta. A tabela de rotas contém um conjunto de regras que determinam para onde o tráfego de rede da sub-rede é direcionado. Para que a instância tenha acesso à Internet, a tabela de rotas associada à sub-rede deve incluir uma rota que direcione o tráfego para o Internet Gateway."
    ]
  },
  {
    "question": "Um desenvolvedor precisa automatizar a implantação de pacotes de software tanto em instâncias Amazon EC2 quanto em servidores virtuais on-premises, como parte de um processo de integração e entrega contínua adotado pela empresa. Qual serviço da AWS ele deve usar para realizar essa tarefa?",
    "options": [
      "AWS CodePipeline",
      "AWS Elastic Beanstalk",
      "AWS CodeDeploy",
      "AWS CodeBuild"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua que automatiza os pipelines de release para atualizações rápidas e confiáveis de aplicações e infraestrutura. Ele orquestra as fases de build, teste e deploy, mas não realiza diretamente a implantação do software nos servidores.",
      "Incorreta. O AWS Elastic Beanstalk é um serviço que facilita o deploy e o dimensionamento de aplicações web desenvolvidas em várias linguagens e frameworks, gerenciando automaticamente recursos como balanceamento de carga e auto scaling. Porém, ele não é indicado para implantar pacotes de software diretamente em instâncias EC2 e servidores on-premises como parte de um pipeline de CI/CD.",
      "Correta. O AWS CodeDeploy é um serviço totalmente gerenciado de implantação que automatiza a distribuição de software para diversos ambientes de computação, incluindo instâncias Amazon EC2 e servidores on-premises. Ele facilita o lançamento rápido de novas funcionalidades, evita downtime durante a implantação e gerencia a complexidade das atualizações, sendo a escolha ideal para este cenário.",
      "Incorreta. O AWS CodeBuild é um serviço totalmente gerenciado de integração contínua que compila o código-fonte, executa testes e gera pacotes de software prontos para implantação. Ele não realiza a implantação em si, apenas prepara o software para ser implantado."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de comércio eletrônico realizou a última implantação da aplicação com capacidade reduzida devido à política de implantação adotada. A aplicação sofreu uma queda de desempenho causada por um pico de tráfego devido a uma promoção em andamento. Qual das seguintes opções representa a MELHOR política de implantação para a próxima versão da aplicação, de modo que mantenha pelo menos a capacidade TOTAL da aplicação e cause o MÍNIMO impacto em caso de falha na implantação?",
    "options": [
      "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling' (Implantação contínua)",
      "Implantar a nova versão da aplicação utilizando a política de implantação 'Immutable' (Imutável)",
      "Implantar a nova versão da aplicação utilizando a política de implantação 'All at once' (Tudo de uma vez)",
      "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling with additional batch' (Implantação contínua com lote adicional)"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A política Rolling evita downtime e reduz a indisponibilidade, mas o rollback em caso de falha requer uma nova implantação manual, o que torna o processo menos ágil e seguro em comparação com a política Immutable.",
      "Correta. A política Immutable garante que a nova versão da aplicação seja implantada em novas instâncias, sem alterar as instâncias existentes. Isso mantém a capacidade total durante a implantação e permite um rollback rápido e seguro em caso de falha, pois as novas instâncias são simplesmente terminadas, minimizando o impacto na aplicação.",
      "Incorreta. Embora a política 'All at once' seja o método de implantação mais rápido, ela pode causar indisponibilidade temporária da aplicação para os usuários ou baixa disponibilidade durante o processo. Além disso, em caso de falha na implantação, a aplicação pode ficar fora do ar, o que não atende ao requisito de manter a capacidade total e minimizar o impacto.",
      "Incorreta. Essa política evita qualquer redução na disponibilidade ao adicionar um lote extra de instâncias durante a implantação, garantindo que a capacidade total seja mantida. No entanto, em caso de falha na implantação, o rollback exige uma nova implantação manual, o que não é tão rápido nem seguro quanto a política Immutable."
    ]
  },
  {
    "question": "Após uma revisão de código, um desenvolvedor foi solicitado a tornar seus buckets S3 públicos privados e permitir o acesso aos objetos com uma restrição de tempo limitada. Qual das seguintes opções atenderá a esse caso de uso?",
    "options": [
      "Não é possível implementar restrições de tempo no acesso ao bucket Amazon S3",
      "Compartilhar URLs pré-assinadas com os recursos que precisam de acesso",
      "Usar políticas de roteamento para redirecionar acessos não intencionais",
      "Usar política de bucket para bloquear o acesso não intencional"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Essa afirmação está errada. É possível implementar restrições de acesso baseadas em tempo no Amazon S3, por exemplo, utilizando URLs pré-assinadas que expiram após um período definido.",
      "Correta. Por padrão, todos os objetos no S3 são privados, e o proprietário do objeto tem permissão para acessá-los. No entanto, o proprietário pode compartilhar objetos com terceiros criando URLs pré-assinadas, que concedem permissão temporária para acessar os objetos. Ao criar uma URL pré-assinada, é necessário fornecer as credenciais de segurança, o nome do bucket, a chave do objeto, o método HTTP (geralmente GET para download) e o tempo de expiração. Essas URLs são válidas apenas pelo período especificado, atendendo assim ao requisito de acesso com restrição de tempo.",
      "Incorreta. O Amazon S3 não oferece suporte a políticas de roteamento para redirecionar acessos. Essa funcionalidade não existe diretamente no serviço.",
      "Incorreta. A política de bucket é uma política baseada em recursos do AWS Identity and Access Management (IAM) que pode ser usada para conceder ou negar permissões a outros usuários ou contas AWS. Embora possa bloquear acessos não autorizados, ela não suporta restrições de acesso baseadas em tempo, que são necessárias neste caso."
    ]
  },
  {
    "question": "Como arquiteto sênior, você é responsável pelo desenvolvimento, suporte, manutenção e implementação de todas as aplicações de banco de dados escritas utilizando tecnologia NoSQL. Um novo projeto exige uma taxa de transferência de 10 leituras fortemente consistentes por segundo, com tamanho de 6 KB cada. Quantas unidades de capacidade de leitura (RCUs) você precisará configurar na sua tabela DynamoDB?",
    "options": [
      "20",
      "30",
      "10",
      "60"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Cada unidade de capacidade de leitura (RCU) permite uma leitura fortemente consistente por segundo para um item de até 4 KB. Como o item tem 6 KB, ele consome 2 RCUs por leitura (6 KB / 4 KB = 1,5, arredondado para 2). Multiplicando pelas 10 leituras por segundo, temos 2 x 10 = 20 RCUs necessárias.",
      "Incorreta. Esta quantidade não considera corretamente o cálculo baseado no tamanho do item e na consistência da leitura, resultando em um valor superestimado.",
      "Incorreta. Este valor considera apenas o número de leituras por segundo, ignorando o tamanho do item que impacta diretamente no consumo de unidades de capacidade.",
      "Incorreta. Este valor é excessivamente alto e não está alinhado com a fórmula oficial para cálculo de unidades de capacidade de leitura em leituras fortemente consistentes."
    ]
  },
  {
    "question": "Como um AWS Certified Developer Associate, você foi contratado para trabalhar com a equipe de desenvolvimento de uma empresa para criar uma API REST utilizando arquitetura serverless. Qual das seguintes soluções você escolheria para migrar a empresa para o paradigma de arquitetura serverless?",
    "options": [
      "API Gateway expondo funcionalidades Lambda",
      "Application Load Balancer público com ECS em Amazon EC2",
      "Route 53 com backend em EC2",
      "Fargate com Lambda na frente"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon API Gateway é um serviço totalmente gerenciado que facilita a criação, publicação, manutenção, monitoramento e segurança de APIs RESTful em qualquer escala. Integrado com AWS Lambda, que executa código sem necessidade de provisionar ou gerenciar servidores, essa combinação oferece uma arquitetura completamente serverless ideal para APIs REST.",
      "Incorreta. O ECS executado em instâncias Amazon EC2 não é uma solução serverless, pois requer gerenciamento e provisionamento de servidores subjacentes, o que não atende ao paradigma serverless.",
      "Incorreta. Embora o Amazon Route 53 seja um serviço gerenciado de DNS, o uso de instâncias EC2 como backend não é serverless, pois requer gerenciamento de servidores, o que contraria o objetivo da arquitetura serverless.",
      "Incorreta. Embora tanto AWS Fargate quanto Lambda sejam serviços serverless, o AWS Lambda não pode receber diretamente requisições RESTful sem um serviço intermediário como o API Gateway. Portanto, usar Fargate com Lambda como front-end não é uma combinação adequada para expor uma API REST."
    ]
  },
  {
    "question": "Um desenvolvedor deseja empacotar o código e as dependências das funções Lambda específicas da aplicação como imagens de contêiner para serem hospedadas no Amazon Elastic Container Registry (ECR). Quais das opções a seguir estão corretas para o requisito apresentado? (Selecione duas.)",
    "options": [
      "Você pode implantar uma função Lambda como imagem de contêiner com tamanho máximo de 15 GB",
      "Você pode testar os contêineres localmente usando a Lambda Runtime API",
      "O AWS Lambda suporta imagens de contêiner baseadas em Windows e Linux",
      "O AWS Lambda suporta imagens de contêiner multi-arquitetura, permitindo que uma única imagem contenha suporte para múltiplas arquiteturas de CPU",
      "Para implantar uma imagem de contêiner no Lambda, a imagem deve implementar a Lambda Runtime API"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O tamanho máximo permitido para uma imagem de contêiner implantada no Lambda é de 10 GB, não 15 GB.",
      "Incorreta. Para testar contêineres localmente, deve-se usar o Lambda Runtime Interface Emulator, que simula o ambiente de execução do Lambda, e não diretamente a Lambda Runtime API.",
      "Incorreta. Atualmente, o Lambda suporta apenas imagens de contêiner baseadas em Linux. Imagens baseadas em Windows não são suportadas.",
      "Correta. O AWS Lambda suporta imagens de contêiner multi-arquitetura (multi-arch), o que permite que uma única imagem contenha suporte para múltiplas arquiteturas de CPU, facilitando a implantação em diferentes ambientes.",
      "Correta. Para implantar uma imagem de contêiner no Lambda, a imagem deve implementar a Lambda Runtime API. Os clientes de interface de runtime open-source da AWS implementam essa API. Você pode adicionar um cliente de interface de runtime à sua imagem base preferida para torná-la compatível com o Lambda."
    ]
  },
  {
    "question": "Além da seção Resources, qual das seguintes seções em um template do Serverless Application Model (SAM) é obrigatória?",
    "options": [
      "Transform",
      "Mappings",
      "Globals",
      "Parameters"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A seção Transform é obrigatória em um template SAM, pois indica que o template utiliza a especificação do AWS Serverless Application Model, permitindo que o AWS CloudFormation interprete os recursos SAM.",
      "Incorreta. A seção Mappings é opcional e usada para definir valores estáticos que podem ser referenciados em outras partes do template, mas não é obrigatória em templates SAM.",
      "Incorreta. A seção Globals é usada para definir propriedades padrão para recursos SAM, facilitando a reutilização, mas não é mandatória no template.",
      "Incorreta. A seção Parameters permite a passagem de valores dinâmicos para o template, porém não é um requisito obrigatório para um template SAM funcionar."
    ]
  },
  {
    "question": "Uma empresa de mídia está utilizando instâncias Amazon EC2 para executar suas aplicações críticas para o negócio. A equipe de TI deseja reservar capacidade, além dos Savings Plans, para as instâncias críticas. Como um Associate Developer, qual tipo de instância reservada você selecionaria para garantir reservas de capacidade?",
    "options": [
      "Instâncias Reservadas Regionais",
      "Tanto Instâncias Reservadas Regionais quanto Instâncias Reservadas Zonais",
      "Instâncias Reservadas Zonais",
      "Nem Instâncias Reservadas Regionais nem Instâncias Reservadas Zonais"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Instâncias Reservadas Regionais oferecem descontos financeiros, mas não garantem reserva de capacidade em nenhuma Zona de Disponibilidade específica.",
      "Incorreta. Apenas as Instâncias Reservadas Zonais fornecem reserva de capacidade. As Instâncias Reservadas Regionais não garantem reserva de capacidade, apenas descontos.",
      "Correta. As Instâncias Reservadas Zonais garantem reserva de capacidade na Zona de Disponibilidade especificada, além de oferecerem descontos. Isso permite que a empresa assegure a disponibilidade das instâncias críticas quando necessário.",
      "Incorreta. As Instâncias Reservadas Zonais oferecem reserva de capacidade, portanto, afirmar que nenhuma delas oferece reserva está incorreto."
    ]
  },
  {
    "question": "Recentemente, em sua organização, o SDK do AWS X-Ray foi incorporado em cada função Lambda para registrar chamadas de saída para fins de rastreamento. Quando seu líder de equipe acessa o serviço X-Ray no Console de Gerenciamento da AWS para obter uma visão geral das informações coletadas, ele descobre que nenhum dado está disponível. Qual é a causa mais provável desse problema?",
    "options": [
      "O X-Ray funciona apenas com aliases do AWS Lambda",
      "Corrigir a função IAM",
      "Habilitar a amostragem do X-Ray",
      "Alterar as regras do grupo de segurança"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O X-Ray não depende exclusivamente de aliases do Lambda para funcionar. Aliases são apenas ponteiros para versões específicas da função Lambda. O SDK do X-Ray pode ser incorporado diretamente no código da função, independentemente do uso de aliases. Portanto, essa afirmação é falsa e não explica a ausência de dados.",
      "Correta. O AWS X-Ray requer permissões adequadas para que as funções Lambda possam enviar dados de rastreamento. Se a função IAM associada à função Lambda não tiver as permissões necessárias para gravar dados no X-Ray, nenhum dado será coletado ou exibido no console. Portanto, verificar e corrigir as permissões da função IAM é o primeiro passo para resolver esse problema.",
      "Incorreta. Embora a amostragem do X-Ray controle quais requisições são rastreadas, se as permissões IAM não estiverem configuradas corretamente, a amostragem não funcionará e nenhum dado será enviado. Portanto, habilitar a amostragem não resolve o problema de ausência total de dados se as permissões estiverem incorretas.",
      "Incorreta. As permissões para que a função Lambda envie dados ao X-Ray são controladas por funções IAM, não por regras de grupos de segurança. Grupos de segurança gerenciam o tráfego de rede, mas não afetam diretamente as permissões para gravação de dados do X-Ray. Logo, essa alternativa não é relevante para o problema apresentado."
    ]
  },
  {
    "question": "Você é um desenvolvedor trabalhando em uma aplicação web escrita em Java e deseja usar o AWS Elastic Beanstalk para implantação, pois ele gerencia implantação, provisionamento de capacidade, balanceamento de carga, auto scaling e monitoramento da saúde da aplicação. Anteriormente, você conectava-se às instâncias provisionadas via SSH para emitir comandos de configuração. Agora, você quer um mecanismo de configuração que aplique as definições automaticamente para você. Qual das seguintes opções ajudaria a realizar isso?",
    "options": [
      "Implantar um wrapper do CloudFormation",
      "Usar o AWS Systems Manager Parameter Store como entrada para as configurações do Elastic Beanstalk",
      "Incluir arquivos de configuração na pasta .ebextensions/ na raiz do seu código-fonte",
      "Usar um hook do AWS Lambda"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Esta opção é fictícia e foi incluída apenas como um distrator. Embora o CloudFormation possa gerenciar recursos AWS, ele não é a forma recomendada para aplicar configurações automáticas diretamente em ambientes Elastic Beanstalk.",
      "Incorreta. Atualmente, o Parameter Store do Systems Manager não é suportado diretamente como fonte de configuração para Elastic Beanstalk, portanto essa opção não é viável para aplicar configurações automáticas.",
      "Correta. Arquivos de configuração dentro da pasta .ebextensions permitem definir opções de configuração que o Elastic Beanstalk aplica automaticamente durante a implantação. A seção option_settings desses arquivos define valores para configurar o ambiente Elastic Beanstalk, os recursos AWS associados e o software da aplicação, automatizando o processo sem necessidade de acesso SSH.",
      "Incorreta. Funções Lambda não são a melhor solução para disparar mudanças de configuração no Elastic Beanstalk, pois isso exigiria um esforço de desenvolvimento significativo e não há integração nativa para esse propósito."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico gerencia uma aplicação de microsserviços que recebe pedidos de vários parceiros por meio de uma API personalizada para cada parceiro, exposta via Amazon API Gateway. Os pedidos são processados por uma função Lambda compartilhada. Como a empresa pode notificar cada parceiro sobre o status dos seus respectivos pedidos da forma mais eficiente, sem impactar os pedidos dos outros parceiros? Além disso, a solução deve ser escalável para acomodar novos parceiros com o mínimo de alterações no código.",
    "options": [
      "Configurar uma função Lambda separada para cada parceiro. Configurar um tópico SNS e inscrever cada parceiro nesse tópico. Modificar cada função Lambda para publicar mensagens com atributos específicos no tópico SNS e aplicar a política de filtro apropriada nas assinaturas do tópico.",
      "Configurar um tópico SNS separado para cada parceiro e inscrever cada parceiro no respectivo tópico SNS. Modificar a função Lambda para publicar mensagens com atributos específicos no tópico SNS do parceiro e aplicar a política de filtro apropriada nas assinaturas do tópico.",
      "Configurar um tópico SNS separado para cada parceiro. Modificar a função Lambda para publicar mensagens para cada parceiro no respectivo tópico SNS.",
      "Configurar um tópico SNS e inscrever cada parceiro nesse tópico. Modificar a função Lambda para publicar mensagens com atributos específicos no tópico SNS e aplicar a política de filtro apropriada nas assinaturas do tópico."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Criar uma função Lambda para cada parceiro é uma solução ineficiente e complexa, pois a função Lambda compartilhada já é suficiente para processar os pedidos e enviar atualizações ao tópico SNS. Essa abordagem aumenta desnecessariamente o custo e a complexidade da arquitetura.",
      "Incorreta. Embora funcione, essa abordagem é menos eficiente porque cria um tópico SNS para cada parceiro, aumentando a complexidade e o custo da manutenção. Não há necessidade de segmentar as notificações em múltiplos tópicos quando um único tópico com políticas de filtro pode atender a todos os parceiros de forma mais simples e escalável.",
      "Incorreta. Essa solução não utiliza políticas de filtro e cria múltiplos tópicos SNS, o que é desnecessário e menos eficiente. Além disso, não há escalabilidade facilitada para novos parceiros, pois cada novo parceiro exigiria a criação de um novo tópico e alterações na função Lambda.",
      "Correta. Um tópico Amazon SNS funciona como um ponto lógico de comunicação que permite agrupar múltiplos endpoints (como AWS Lambda, Amazon SQS, HTTP/S ou e-mail). Ao publicar mensagens com atributos específicos e aplicar políticas de filtro nas assinaturas, cada parceiro recebe apenas as notificações relevantes para seus pedidos. Essa abordagem é eficiente e escalável, pois novos parceiros podem ser adicionados apenas configurando uma nova política de filtro, sem necessidade de alterar o código da função Lambda."
    ]
  },
  {
    "question": "Uma empresa de contabilidade utiliza extensivamente volumes Amazon EBS para armazenamento persistente dos dados de aplicações em instâncias Amazon EC2. Os volumes são criptografados para proteger os dados críticos dos clientes. Como parte do gerenciamento das credenciais de segurança, o gerente do projeto encontrou um trecho de política que se apresenta da seguinte forma:\n\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"Allow for use of this Key\",\n      \"Effect\": \"Allow\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::111122223333:role/UserRole\"\n      },\n      \"Action\": [\n        \"kms:GenerateDataKeyWithoutPlaintext\",\n        \"kms:Decrypt\"\n      ],\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"Allow for EC2 Use\",\n      \"Effect\": \"Allow\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::111122223333:role/UserRole\"\n      },\n      \"Action\": [\n        \"kms:CreateGrant\",\n        \"kms:ListGrants\",\n        \"kms:RevokeGrant\"\n      ],\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"StringEquals\": {\n          \"kms:ViaService\": \"ec2.us-west-2.amazonaws.com\"\n        }\n      }\n    }\n  ]\n}\n\nQuais das seguintes opções estão corretas em relação a essa política?",
    "options": [
      "A primeira declaração concede ao grupo de segurança a capacidade de gerar uma chave de dados e descriptografar essa chave de dados da CMK quando necessário.",
      "A primeira declaração concede a um principal IAM especificado a capacidade de gerar uma chave de dados e descriptografar essa chave de dados da CMK quando necessário.",
      "A segunda declaração nesta política concede ao grupo de segurança (mencionado na primeira declaração da política) a capacidade de criar, listar e revogar concessões para o Amazon EC2.",
      "A segunda declaração na política menciona que todos os recursos indicados na primeira declaração podem assumir a função especificada, o que proporciona a capacidade de criar, listar e revogar concessões para o Amazon EC2."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A política não menciona grupos de segurança (security groups) em nenhum momento; ela especifica um principal IAM (role/UserRole). Portanto, atribuir permissões ao grupo de segurança é incorreto.",
      "Correta. A primeira declaração da política concede explicitamente ao principal IAM identificado (role/UserRole) as permissões para gerar uma chave de dados sem o texto simples (GenerateDataKeyWithoutPlaintext) e para descriptografar (Decrypt) usando a CMK, ações essenciais para a criptografia e descriptografia dos volumes EBS.",
      "Incorreta. Novamente, a política não menciona grupos de segurança, mas sim um principal IAM específico. Portanto, essa afirmação está incorreta.",
      "Incorreta. A segunda declaração concede permissões ao mesmo principal IAM para criar, listar e revogar concessões (grants) para o EC2, mas não indica que os recursos da primeira declaração assumem uma função. Além disso, a condição limita o uso dessas permissões ao serviço EC2 via kms:ViaService, não a uma assunção de função por recursos."
    ]
  },
  {
    "question": "Uma empresa utiliza o AWS CodeDeploy para implantar aplicações do GitHub em instâncias EC2 executando Amazon Linux. O processo de implantação utiliza um arquivo chamado appspec.yml para especificar os hooks de implantação. Um evento final do ciclo de vida deve ser especificado para verificar o sucesso da implantação. Qual dos seguintes eventos de hook deve ser usado para verificar o sucesso da implantação?",
    "options": [
      "ValidateService",
      "AfterInstall",
      "AllowTraffic",
      "ApplicationStart"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. ValidateService é o último evento do ciclo de vida da implantação e é usado especificamente para verificar se a implantação foi concluída com sucesso, garantindo que a aplicação está funcionando conforme esperado.",
      "Incorreta. O evento AfterInstall é utilizado para tarefas como configurar a aplicação ou alterar permissões de arquivos, ocorrendo antes da verificação final do sucesso da implantação.",
      "Incorreta. O evento AllowTraffic permite que o tráfego de internet acesse as instâncias após a implantação. Esse evento é reservado para o agente do AWS CodeDeploy e não pode ser utilizado para executar scripts personalizados.",
      "Incorreta. O evento ApplicationStart é geralmente usado para reiniciar serviços que foram parados durante o evento ApplicationStop, não para validar o sucesso da implantação."
    ]
  },
  {
    "question": "Uma aplicação social de jogos suporta a transferência de vouchers de presente entre usuários. Quando um usuário atinge um determinado marco no ranking, ele ganha um voucher de presente que pode ser resgatado ou transferido para outro usuário. A equipe de desenvolvimento deseja garantir que essa transferência seja registrada no banco de dados de forma que os registros de ambos os usuários sejam atualizados com sucesso, ou que o estado anterior seja mantido, sem alterações parciais. Quais das seguintes soluções representam as melhores opções para atender aos requisitos do caso de uso apresentado? (Selecione duas.)",
    "options": [
      "Realizar ambas as operações no Amazon Redshift dentro de um único bloco de transação",
      "Usar Amazon S3 como repositório principal e gravar os dados de cada usuário em arquivos JSON individuais, garantindo atomicidade por meio de controle de versão.",
      "Realizar operações de leitura e escrita no DynamoDB com o parâmetro ConsistentRead definido como true",
      "Realizar ambas as operações no RDS MySQL dentro de um único bloco de transação",
      "Utilizar as APIs transacionais de leitura e escrita do DynamoDB nos itens da tabela como uma operação única, do tipo tudo ou nada"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O Amazon Redshift é um data warehouse totalmente gerenciado, projetado para armazenamento e análise de grandes volumes de dados. Ele não é adequado para gerenciar transações de banco de dados tradicionais e não suporta blocos transacionais para operações atômicas entre registros.",
      "Incorreta. O Amazon S3 é um serviço de armazenamento de objetos e não oferece suporte a transações ACID. Mesmo com controle de versão habilitado, ele não garante atomicidade nem isolamento entre múltiplas gravações. Portanto, não é adequado para casos que exigem integridade transacional entre registros de usuários.",
      "Incorreta. Embora o parâmetro ConsistentRead permita leituras fortemente consistentes no DynamoDB, ele não oferece suporte a transações. A consistência da leitura não garante atomicidade ou isolamento para múltiplas operações de escrita, portanto não atende ao requisito de atualização atômica dos registros.",
      "Correta. O Amazon RDS para MySQL oferece suporte a transações ACID, permitindo agrupar múltiplas operações de leitura e escrita em um único bloco transacional. Isso garante que as alterações sejam aplicadas de forma atômica, mantendo a integridade dos dados entre os registros dos usuários.",
      "Correta. As transações do DynamoDB permitem realizar alterações coordenadas do tipo tudo ou nada em múltiplos itens, tanto dentro de uma mesma tabela quanto entre tabelas diferentes. Elas garantem atomicidade, consistência, isolamento e durabilidade (ACID), ajudando a manter a integridade dos dados na aplicação."
    ]
  },
  {
    "question": "Um desenvolvedor que trabalha com uma instância Windows do EC2 instalou o Kinesis Agent para Windows para transmitir arquivos de log formatados em JSON para o Amazon Simple Storage Service (S3) via Amazon Kinesis Data Firehose. O desenvolvedor deseja entender quais tipos de destino (sink) são suportados pelo Kinesis Firehose. Qual dos seguintes tipos de destino NÃO é suportado pelo Kinesis Firehose?",
    "options": [
      "Amazon Redshift com Amazon S3",
      "Amazon ElastiCache com Amazon S3 como backup",
      "Amazon Elasticsearch Service (Amazon ES) com opção de backup para Amazon S3",
      "Amazon Simple Storage Service (Amazon S3) como destino direto do Firehose"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Amazon Redshift é um destino suportado pelo Kinesis Firehose. Os dados são inicialmente entregues a um bucket do S3 e, em seguida, carregados no cluster Redshift usando o comando COPY. É possível configurar backup dos dados no S3.",
      "Correta. Amazon ElastiCache é um serviço totalmente gerenciado de armazenamento em memória compatível com Redis ou Memcached, mas não é um destino suportado pelo Amazon Kinesis Data Firehose. Portanto, não é possível enviar dados diretamente para ElastiCache via Firehose.",
      "Incorreta. Amazon Elasticsearch Service (atualmente Amazon OpenSearch Service) é um destino suportado pelo Kinesis Firehose. Os dados podem ser entregues diretamente ao cluster ES e, opcionalmente, podem ser armazenados simultaneamente em um bucket S3 para backup.",
      "Incorreta. Amazon S3 é um dos destinos mais comuns e suportados diretamente pelo Kinesis Firehose para armazenamento de dados em streaming. Também é possível configurar backups adicionais em outro bucket S3 se a transformação de dados estiver habilitada."
    ]
  },
  {
    "question": "Seu líder de equipe pediu que você aprendesse AWS CloudFormation para criar um conjunto de recursos AWS relacionados e provisioná-los de forma ordenada. Você decide utilizar tipos de parâmetros específicos da AWS para validar valores inválidos. Ao especificar parâmetros, qual dos seguintes NÃO é um tipo de parâmetro válido?",
    "options": [
      "AWS::EC2::KeyPair::KeyName",
      "CommaDelimitedList",
      "String",
      "DependentParameter"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Este é um tipo de parâmetro válido que representa o nome de um par de chaves do Amazon EC2, permitindo a validação automática do valor informado.",
      "Incorreta. Este tipo de parâmetro é válido e representa uma lista de strings literais separadas por vírgulas, útil para passar múltiplos valores em um único parâmetro.",
      "Incorreta. Este é um tipo de parâmetro válido que aceita uma string literal, sendo o tipo mais básico e comum para parâmetros em CloudFormation.",
      "Correta. Este não é um tipo de parâmetro válido no AWS CloudFormation. Os parâmetros são independentes e não podem depender diretamente uns dos outros, portanto, não existe um tipo chamado DependentParameter."
    ]
  },
  {
    "question": "Um desenvolvedor da sua empresa foi promovido a Líder de Equipe e será responsável pelo deploy de código em instâncias EC2 utilizando AWS CodeCommit e AWS CodeDeploy. De acordo com os novos requisitos, o processo de deploy deve ser capaz de alterar permissões dos arquivos implantados, bem como verificar o sucesso da implantação. Qual das seguintes ações o novo desenvolvedor deve realizar?",
    "options": [
      "Definir um arquivo appspec.yml no diretório codebuild/",
      "Definir um arquivo appspec.yml no diretório raiz",
      "Definir um arquivo buildspec.yml no diretório codebuild/",
      "Definir um arquivo buildspec.yml no diretório raiz"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O arquivo appspec.yml deve estar localizado no diretório raiz da estrutura do código-fonte da aplicação, não em subdiretórios como codebuild/.",
      "Correta. O arquivo appspec.yml, formatado em YAML, deve estar no diretório raiz do código-fonte da aplicação. Ele é usado para mapear arquivos para seus destinos nas instâncias, definir permissões personalizadas para arquivos implantados e especificar scripts que serão executados em diferentes fases do processo de deploy, permitindo também a verificação do sucesso da implantação.",
      "Incorreta. O arquivo buildspec.yml é exclusivo para AWS CodeBuild e não tem relação com a configuração de permissões ou verificação de sucesso no processo de deploy realizado pelo CodeDeploy.",
      "Incorreta. O arquivo buildspec.yml é utilizado pelo AWS CodeBuild para definir as etapas de build, não para gerenciar permissões ou verificar o sucesso da implantação no CodeDeploy."
    ]
  },
  {
    "question": "Uma aplicação executando em instâncias EC2 processa mensagens de uma fila SQS. No entanto, às vezes as mensagens não são processadas corretamente e acabam em erro. Essas mensagens precisam ser isoladas para processamento e solução de problemas posteriores. Qual das opções a seguir ajudará a alcançar esse objetivo?",
    "options": [
      "Implementar uma Dead-Letter Queue (Fila de Mensagens Mortas)",
      "Usar DeleteMessage",
      "Aumentar o VisibilityTimeout",
      "Reduzir o VisibilityTimeout"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. As Dead-Letter Queues (DLQs) são filas especiais para onde mensagens que não puderam ser processadas com sucesso são enviadas após um número configurado de tentativas. Isso permite isolar mensagens problemáticas para análise e solução de problemas, facilitando o diagnóstico das causas de falha.",
      "Incorreta. O comando DeleteMessage remove a mensagem da fila após o processamento bem-sucedido. Isso não ajuda a identificar ou isolar mensagens que falharam no processamento, pois elas seriam simplesmente removidas sem análise posterior.",
      "Incorreta. Aumentar o VisibilityTimeout apenas prolonga o período em que a mensagem fica invisível para outros consumidores enquanto está sendo processada. Isso não ajuda a isolar mensagens com erro nem facilita a solução de problemas, pois a mensagem continua na fila principal.",
      "Incorreta. O VisibilityTimeout impede que outras instâncias consumam a mesma mensagem enquanto ela está sendo processada. Reduzir esse tempo fará com que mais consumidores possam receber a mesma mensagem com falha, aumentando a chance de processamento duplicado e dificultando o isolamento das mensagens problemáticas."
    ]
  },
  {
    "question": "Uma empresa precisa de um sistema de controle de versão para seu ciclo de desenvolvimento rápido, com mudanças incrementais, controle de versões e suporte às ferramentas Git existentes. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      "Bucket Amazon S3 com versionamento ativado",
      "AWS CodePipeline",
      "AWS CodeCommit",
      "AWS CodeBuild"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora o versionamento do Amazon S3 permita recuperar versões anteriores de arquivos individuais, ele não oferece suporte ao controle de versões em lote, nem funcionalidades colaborativas como branching, pull requests ou integração com ferramentas Git, essenciais para desenvolvimento ágil e colaborativo.",
      "Incorreta. O AWS CodePipeline é um serviço de entrega contínua que automatiza as fases de build, teste e implantação de aplicações. Embora seja fundamental para automação de release, não é um sistema de controle de versão e não gerencia repositórios Git ou versões de código.",
      "Correta. O AWS CodeCommit é um serviço totalmente gerenciado de controle de código-fonte baseado em Git, que hospeda repositórios seguros e escaláveis. Ele facilita a colaboração entre equipes por meio de pull requests, branching e merge, além de suportar todas as operações Git e integração com ferramentas Git existentes, permitindo o envio incremental de alterações.",
      "Incorreta. O AWS CodeBuild é um serviço gerenciado de integração contínua que compila código-fonte, executa testes e gera pacotes prontos para implantação. Ele não é um sistema de controle de versão e não oferece funcionalidades para gerenciar versões ou colaborar em código-fonte."
    ]
  },
  {
    "question": "Uma aplicação serverless construída na AWS processa pedidos de clientes 24/7 utilizando uma função AWS Lambda e se comunica com a API HTTP de um fornecedor externo para o processamento de pagamentos. A equipe de desenvolvimento deseja notificar a equipe de suporte quase em tempo real usando um tópico Amazon Simple Notification Service (Amazon SNS) já existente, mas somente quando a taxa de erro da API externa ultrapassar 5% do total de transações processadas em uma hora. Como um AWS Certified Developer – Associate, qual opção você sugeriria como a solução mais eficiente?",
    "options": [
      "Registrar os resultados das chamadas da API de processamento de pagamento no Amazon CloudWatch. Utilizar o Amazon CloudWatch Logs Insights para consultar os logs do CloudWatch. Configurar a função Lambda para verificar periodicamente a saída do CloudWatch Logs Insights e enviar uma notificação via o tópico SNS existente quando a taxa de erro ultrapassar o limite especificado.",
      "Configurar métricas do CloudWatch com monitoramento detalhado para as chamadas da API externa de processamento de pagamento. Criar um alarme do CloudWatch que envie uma notificação via o tópico SNS existente quando a taxa de erro ultrapassar o limite especificado.",
      "Registrar os resultados das chamadas da API de processamento de pagamento no Amazon CloudWatch. Utilizar o Amazon CloudWatch Metric Filter para analisar os logs do CloudWatch. Configurar a função Lambda para verificar periodicamente a saída do CloudWatch Metric Filter e enviar uma notificação via o tópico SNS existente quando a taxa de erro ultrapassar o limite especificado.",
      "Configurar e enviar métricas personalizadas de alta resolução para o CloudWatch que registrem as falhas nas chamadas da API externa de processamento de pagamento. Criar um alarme do CloudWatch que envie uma notificação via o tópico SNS existente quando a taxa de erro ultrapassar o limite especificado."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O CloudWatch Logs Insights é uma ferramenta poderosa para análise interativa de logs, mas não é adequada para monitoramento em tempo real via Lambda invocado periodicamente. Além disso, essa solução exige um processamento customizado complexo para calcular a taxa de erro, o que reduz sua eficiência para o cenário descrito.",
      "Incorreta. O monitoramento detalhado do CloudWatch oferece métricas com maior frequência para alguns serviços da AWS, mas não se aplica a APIs externas. Para monitorar chamadas a uma API externa, é necessário criar métricas personalizadas, pois o monitoramento detalhado padrão não captura esses dados, tornando essa opção inadequada para o cenário.",
      "Incorreta. Embora seja possível criar filtros de métricas para transformar logs em métricas numéricas, essa abordagem exige que a função Lambda seja invocada periodicamente para processar os dados, o que não permite monitoramento em tempo real. Além disso, a função Lambda precisaria de código customizado significativo para calcular a taxa de erro da API externa, tornando a solução menos eficiente para o caso apresentado.",
      "Correta. Publicar métricas personalizadas de alta resolução permite monitorar as falhas da API externa com granularidade de até um segundo, possibilitando uma visão quase em tempo real da taxa de erro. O alarme do CloudWatch pode ser configurado para disparar notificações automaticamente via SNS quando o limite de 5% for excedido, proporcionando uma solução eficiente e escalável para o problema."
    ]
  },
  {
    "question": "Uma empresa deseja compartilhar informações com um terceiro por meio de um endpoint HTTP API gerenciado por esse terceiro. A empresa possui a chave de API necessária para acessar o endpoint, e a integração dessa chave de API com o código da aplicação da empresa não deve impactar o desempenho da aplicação. Qual é a abordagem mais segura?",
    "options": [
      "Manter as credenciais da API no AWS Secrets Manager e usar essas credenciais para fazer a chamada à API buscando-as em tempo de execução via AWS SDK.",
      "Manter as credenciais da API em uma variável local no código e usar essa variável para fazer a chamada à API em tempo de execução.",
      "Manter as credenciais da API em um arquivo criptografado no S3 e usar essas credenciais para fazer a chamada à API buscando-as do S3 em tempo de execução via AWS SDK.",
      "Manter as credenciais da API em uma tabela criptografada no MySQL RDS e usar essas credenciais para fazer a chamada à API buscando-as do RDS em tempo de execução via AWS SDK."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Secrets Manager permite substituir credenciais codificadas no código por chamadas programáticas para recuperar segredos, evitando exposição no código-fonte. Além disso, oferece rotação automática de segredos, reduzindo riscos de comprometimento e melhorando a segurança sem impactar significativamente o desempenho da aplicação.",
      "Incorreta. Armazenar credenciais sensíveis diretamente no código é uma má prática de segurança, pois expõe as credenciais a qualquer pessoa que tenha acesso ao código-fonte, aumentando o risco de vazamento e comprometimento.",
      "Incorreta. Embora o S3 possa armazenar arquivos criptografados, o acesso frequente a arquivos para obter credenciais pode impactar a latência e não oferece gerenciamento de segredos nem rotação automática, além de ser uma prática menos segura comparada ao uso do Secrets Manager.",
      "Incorreta. Embora o armazenamento criptografado no RDS proteja os dados em repouso, buscar as credenciais diretamente do banco de dados em tempo de execução adiciona complexidade, pode impactar o desempenho e não oferece funcionalidades específicas de gerenciamento seguro de segredos, como rotação automática."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de saúde implantou instâncias EC2 na Conta AWS A. Essas instâncias precisam acessar dados de pacientes contendo Informações Pessoais Identificáveis (PII) em vários buckets do Amazon S3 em outra Conta AWS B. Como um Associate Developer, qual das seguintes soluções você recomendaria para esse caso de uso?",
    "options": [
      "Adicionar uma política de bucket em todos os buckets do Amazon S3 na Conta B para permitir o acesso das instâncias EC2 na Conta A.",
      "Criar uma função IAM com acesso ao S3 na Conta B e definir a Conta A como entidade confiável. Criar outra função (perfil de instância) na Conta A, anexá-la às instâncias EC2 da Conta A e adicionar uma política inline a essa função para assumir a função da Conta B.",
      "Copiar a AMI subjacente das instâncias EC2 da Conta A para a Conta B. Lançar instâncias EC2 na Conta B usando essa AMI e então acessar os dados PII no Amazon S3 da Conta B.",
      "Criar uma função IAM (perfil de instância) na Conta A e definir a Conta B como entidade confiável. Anexar essa função às instâncias EC2 na Conta A e adicionar uma política inline a essa função para acessar dados do S3 da Conta B."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Apenas adicionar uma política de bucket na Conta B não é suficiente, pois também é necessário configurar permissões no lado da Conta A para que as instâncias EC2 possam assumir uma função e acessar os objetos do S3 na Conta B.",
      "Correta. Essa é a abordagem recomendada para acesso entre contas. Criar uma função IAM na Conta B que permita acesso aos buckets S3 e configure a Conta A como confiável permite que as instâncias EC2 na Conta A assumam essa função via uma política inline anexada à função da Conta A, garantindo acesso seguro e controlado aos dados PII.",
      "Incorreta. Copiar a AMI é um fator distrator e não resolve o problema de acesso entre contas. Essa abordagem é desnecessária e não atende ao requisito de acesso seguro e controlado aos buckets S3 na Conta B.",
      "Incorreta. Essa opção está incorreta porque a confiança deve ser configurada na Conta que possui os recursos (Conta B), permitindo que a Conta A assuma a função. Definir a Conta B como confiável na Conta A inverte a relação de confiança e não funciona para acesso cross-account ao S3."
    ]
  },
  {
    "question": "Uma empresa farmacêutica utiliza instâncias Amazon EC2 para hospedagem de aplicações e Amazon CloudFront para entrega de conteúdo. Um novo artigo de pesquisa com descobertas críticas precisa ser compartilhado com uma equipe de pesquisa espalhada pelo mundo. Qual das alternativas abaixo representa a solução mais otimizada para atender a esse requisito sem comprometer a segurança do conteúdo?",
    "options": [
      "Usar o recurso de URL assinada do CloudFront para controlar o acesso ao arquivo",
      "Usar o recurso de cookies assinados do CloudFront para controlar o acesso ao arquivo",
      "Configurar o AWS Web Application Firewall (WAF) para monitorar e controlar as requisições HTTP e HTTPS encaminhadas ao CloudFront",
      "Usar a criptografia em nível de campo do CloudFront para proteger dados sensíveis"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Uma URL assinada inclui informações adicionais, como data e hora de expiração, que proporcionam maior controle sobre o acesso ao conteúdo. Ao configurar o CloudFront para URLs assinadas, você especifica grupos de chaves confiáveis que contêm as chaves públicas para validar a assinatura da URL. Sua aplicação gera URLs assinadas para usuários autorizados, permitindo que eles acessem o conteúdo de forma segura e controlada. O CloudFront valida a assinatura e garante que a URL não foi adulterada, rejeitando requisições inválidas e servindo o conteúdo apenas para usuários autorizados.",
      "Incorreta. Cookies assinados do CloudFront são indicados para controlar acesso a múltiplos arquivos restritos, como uma área de assinantes em um site, sem alterar as URLs existentes. No entanto, para o caso específico de compartilhamento de um único arquivo, as URLs assinadas são mais apropriadas e eficientes. Além disso, URLs assinadas têm prioridade sobre cookies assinados quando ambos são usados para os mesmos arquivos.",
      "Incorreta. O AWS WAF é um firewall de aplicação web que permite monitorar e controlar requisições HTTP/HTTPS com base em condições específicas, como endereços IP ou valores de query strings. Embora seja útil para proteger aplicações contra ataques e controlar acesso em larga escala, não é a solução mais adequada para restringir o acesso a um único arquivo específico, como no caso apresentado.",
      "Incorreta. A criptografia em nível de campo do CloudFront é usada para criptografar dados sensíveis em formulários HTTPS antes que uma requisição POST seja encaminhada para a origem, garantindo que apenas componentes específicos possam descriptografar esses dados. Essa funcionalidade não é adequada para controlar o acesso a arquivos estáticos ou compartilhamento de conteúdo, como no cenário descrito."
    ]
  },
  {
    "question": "Uma empresa deseja automatizar seu fluxo de trabalho de atendimento de pedidos e rastreamento de inventário. Desde a criação do pedido até a atualização do inventário e o envio, todo o processo precisa ser monitorado, gerenciado e atualizado automaticamente. Qual das seguintes opções você recomendaria como a solução mais otimizada para esse requisito?",
    "options": [
      "Usar o AWS Step Functions para coordenar e gerenciar os componentes do fluxo de trabalho de gerenciamento de pedidos e rastreamento de inventário.",
      "Usar uma fila do Amazon Simple Queue Service (Amazon SQS) para passar informações do gerenciamento de pedidos para o fluxo de trabalho de rastreamento de inventário.",
      "Configurar o Amazon EventBridge para rastrear o fluxo de trabalho desde o gerenciamento de pedidos até os sistemas de rastreamento de inventário.",
      "Usar o Amazon SNS para desenvolver aplicações orientadas a eventos que possam compartilhar informações."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Step Functions é um orquestrador serverless que facilita a sequência de funções AWS Lambda e múltiplos serviços AWS em aplicações críticas de negócios. Ele oferece uma interface visual para criar e executar fluxos de trabalho com checkpoints e eventos, mantendo o estado da aplicação. Cada etapa é executada em ordem, permitindo coordenação, gerenciamento de erros, retries e rollback, ideal para automatizar processos complexos como o atendimento de pedidos e o rastreamento de inventário.",
      "Incorreta. O Amazon SQS é uma fila altamente escalável e confiável para envio, armazenamento e recebimento de mensagens entre serviços, mas não gerencia o fluxo ou a coordenação entre múltiplos componentes do processo. Para orquestração e rastreamento do estado do fluxo de trabalho, é necessário implementar lógica adicional na aplicação, o que torna o SQS menos ideal para esse caso.",
      "Incorreta. O Amazon EventBridge é recomendado para construir aplicações orientadas a eventos que reagem a eventos de serviços AWS e SaaS de terceiros. Embora possa ser usado para integração e acionamento de eventos, ele não oferece uma orquestração visual e controle detalhado do estado do fluxo de trabalho como uma solução completa para processos de negócios sequenciais.",
      "Incorreta. O Amazon SNS é ideal para aplicações que requerem alta taxa de transferência e baixa latência na publicação de mensagens para múltiplos assinantes (fan-out), mas não oferece controle de fluxo ou coordenação entre etapas sequenciais de um processo de negócios complexo, como o atendimento de pedidos e rastreamento de inventário."
    ]
  },
  {
    "question": "Uma universidade criou um portal estudantil acessível por meio de um aplicativo para smartphone e uma aplicação web. O aplicativo para smartphone está disponível para Android e iOS, e a aplicação web funciona na maioria dos navegadores principais. Os estudantes poderão realizar estudos em grupo online e criar perguntas em fóruns. Todas as alterações feitas via dispositivos móveis devem estar disponíveis mesmo quando offline e devem sincronizar com outros dispositivos posteriormente. Qual dos seguintes serviços AWS atenderá a esses requisitos?",
    "options": [
      "Amazon Cognito Identity Pools",
      "AWS AppSync com Amplify DataStore",
      "Amazon Cognito User Pools",
      "Amazon DynamoDB com AWS AppSync",
      "AWS Elastic Beanstalk"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Amazon Cognito Identity Pools fornece credenciais temporárias para que os usuários possam acessar outros serviços AWS, como S3 e DynamoDB. Ele suporta usuários autenticados e anônimos, mas não oferece sincronização de dados entre dispositivos nem armazenamento local para operações offline.",
      "Correta. O AWS AppSync, em conjunto com o Amplify DataStore, permite a sincronização de dados entre dispositivos e aplicações, suportando operações offline. O Amplify DataStore armazena dados localmente no dispositivo e sincroniza automaticamente com o backend do AppSync quando a conexão é restabelecida, garantindo que as alterações feitas em qualquer dispositivo sejam propagadas para os demais.",
      "Incorreta. O Amazon Cognito User Pools é um serviço de diretório de usuários que permite autenticação e gerenciamento de usuários para aplicativos web e móveis. Embora seja essencial para autenticação e autorização, ele não oferece funcionalidades de sincronização de dados entre dispositivos nem suporte a operações offline.",
      "Incorreta. Embora o Amazon DynamoDB seja um banco de dados NoSQL altamente escalável e o AWS AppSync possa ser usado para sincronização, o DynamoDB sozinho não oferece suporte nativo para operações offline e sincronização automática entre dispositivos sem o uso do Amplify DataStore.",
      "Incorreta. O AWS Elastic Beanstalk é uma plataforma para implantação e gerenciamento simplificado de aplicações na nuvem AWS, cuidando de provisionamento de recursos, balanceamento de carga e escalabilidade. Ele não é um serviço voltado para sincronização de dados entre dispositivos ou suporte offline para aplicativos móveis."
    ]
  },
  {
    "question": "Uma empresa farmacêutica executa suas cargas de trabalho de banco de dados em volumes Provisioned IOPS SSD (io1). Como um Desenvolvedor Associado, qual das seguintes opções você identificaria como uma configuração INVÁLIDA para volumes EBS do tipo io1?",
    "options": [
      "Volume de 200 GiB com 15000 IOPS",
      "Volume de 200 GiB com 10000 IOPS",
      "Volume de 200 GiB com 5000 IOPS",
      "Volume de 200 GiB com 2000 IOPS"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Essa configuração é inválida porque ultrapassa a relação máxima permitida de 50 IOPS por GiB. Para 200 GiB, o máximo permitido é 10000 IOPS (200 GiB x 50), portanto 15000 IOPS excede esse limite.",
      "Incorreta. Essa configuração é válida e representa o limite máximo permitido para um volume de 200 GiB, respeitando a proporção de 50:1 entre IOPS e tamanho do volume.",
      "Incorreta. Essa configuração é válida, pois a relação máxima permitida entre IOPS provisionadas e tamanho do volume (em GiB) é 50:1. Para um volume de 200 GiB, 5000 IOPS está dentro do limite permitido (máximo 10000 IOPS).",
      "Incorreta. Essa configuração é válida e segura, pois 2000 IOPS está bem abaixo do limite máximo de 10000 IOPS para um volume de 200 GiB, respeitando a proporção 50:1."
    ]
  },
  {
    "question": "Uma empresa de análise de dados está processando dados em tempo real de Internet das Coisas (IoT) usando a Kinesis Producer Library (KPL) e enviando os dados para uma aplicação baseada em Kinesis Data Streams. A aplicação parou de processar os dados devido a uma exceção ProvisionedThroughputExceeded. Quais das seguintes ações ajudariam a resolver esse problema? (Selecione duas.)",
    "options": [
      "Usar o Kinesis enhanced fan-out para o Kinesis Data Streams",
      "Aumentar o número de shards no seu data stream para fornecer capacidade suficiente",
      "Usar o Amazon Kinesis Agent em vez da Kinesis Producer Library (KPL) para enviar dados ao Kinesis Data Streams",
      "Utilizar o Amazon SQS em vez do Kinesis Data Streams",
      "Configurar o produtor de dados para realizar tentativas com backoff exponencial"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O enhanced fan-out é útil para múltiplos consumidores lendo dados em paralelo, melhorando a latência e a taxa de transferência na leitura, mas não aumenta a capacidade de gravação do stream. Portanto, não resolve a exceção ProvisionedThroughputExceeded relacionada à capacidade de gravação.",
      "Correta. A capacidade do Kinesis Data Streams é definida pelo número de shards. Se a taxa de entrada de dados aumentar de forma sustentada, aumentar o número de shards é a forma adequada de ampliar a capacidade e evitar a exceção ProvisionedThroughputExceeded.",
      "Incorreta. O Kinesis Agent é uma ferramenta para facilitar o envio de dados para o Kinesis Data Streams, mas trocar o KPL pelo Kinesis Agent não resolve o problema de limite de capacidade do stream. A exceção ProvisionedThroughputExceeded está relacionada à capacidade do stream, não ao método de envio dos dados.",
      "Incorreta. Substituir o Kinesis Data Streams pelo Amazon SQS não resolve a exceção ProvisionedThroughputExceeded, pois o problema está relacionado ao limite de capacidade do Kinesis Data Streams, e não ao serviço de fila em si. Essa alternativa não aborda a causa raiz do problema.",
      "Correta. Quando ocorre um pico temporário no volume de dados, configurar o produtor para realizar tentativas com backoff exponencial ajuda a evitar rejeições contínuas, permitindo que as chamadas PUT sejam concluídas com sucesso após a redução temporária da carga."
    ]
  },
  {
    "question": "Um laboratório de diagnóstico armazena seus dados no DynamoDB. O laboratório deseja fazer backup dos dados de uma tabela específica do DynamoDB no Amazon S3, para que possa baixar esse backup localmente para algum uso operacional. Qual das seguintes opções NÃO é viável?",
    "options": [
      "Usar Hive com Amazon EMR para exportar seus dados para um bucket S3 e baixar localmente",
      "Usar a capacidade de backup sob demanda do DynamoDB para gravar no Amazon S3 e baixar localmente",
      "Usar o AWS Glue para copiar sua tabela para o Amazon S3 e baixar localmente",
      "Usar o AWS Data Pipeline para exportar sua tabela para um bucket S3 na conta de sua escolha e baixar localmente"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Correta. Utilizar Hive no Amazon EMR para exportar dados para o S3 é uma prática recomendada, especialmente para usuários que já utilizam EMR e estão familiarizados com Hive ou Spark, oferecendo maior controle sobre o processo de backup.",
      "Incorreta. Embora o DynamoDB ofereça métodos internos de backup (sob demanda e recuperação pontual) que armazenam os dados no Amazon S3, o usuário não tem acesso direto aos buckets S3 utilizados por esses backups, tornando essa opção inviável para baixar o backup localmente.",
      "Correta. O AWS Glue pode ser usado para copiar dados da tabela DynamoDB para o Amazon S3, sendo uma prática recomendada para backups automatizados e contínuos, que também podem ser consumidos por outros serviços como o Amazon Athena.",
      "Correta. Esta é uma das formas mais simples de realizar um backup pontual utilizando o menor consumo possível de recursos AWS. O Data Pipeline utiliza o Amazon EMR para criar o backup, e a parte de scripting já é automatizada, dispensando o conhecimento em Apache Hive ou Apache Spark para essa tarefa."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento está criando um jogo onde os jogadores podem comprar itens com moedas virtuais. Para cada moeda virtual comprada por um usuário, tanto a tabela de jogadores quanto a tabela de itens no DynamoDB precisam ser atualizadas simultaneamente usando uma operação do tipo tudo ou nada. Como desenvolvedor associado, como você implementaria essa funcionalidade?",
    "options": [
      "Usar a API BatchWriteItem para atualizar múltiplas tabelas simultaneamente.",
      "Capturar as transações na tabela de jogadores usando DynamoDB Streams e depois sincronizar com a tabela de itens.",
      "Usar a API TransactWriteItems das Transações do DynamoDB.",
      "Capturar as transações na tabela de itens usando DynamoDB Streams e depois sincronizar com a tabela de jogadores."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A API BatchWriteItem permite executar múltiplas operações de escrita em lote, mas não garante atomicidade. Ou seja, algumas operações podem falhar enquanto outras são aplicadas, o que não atende ao requisito de operação 'tudo ou nada'.",
      "Incorreta. Assim como na opção anterior, DynamoDB Streams não oferece suporte para transações atômicas entre tabelas, o que impede garantir que ambas as tabelas sejam atualizadas simultaneamente com sucesso ou nenhuma seja atualizada.",
      "Correta. A API TransactWriteItems permite agrupar até 100 ações de escrita em uma única operação atômica, garantindo que todas as atualizações em múltiplas tabelas ocorram com sucesso ou nenhuma seja aplicada, atendendo exatamente ao requisito de operação 'tudo ou nada'.",
      "Incorreta. Embora o DynamoDB Streams permita capturar alterações em tempo quase real, ele não suporta operações transacionais para garantir atualizações atômicas entre múltiplas tabelas. Portanto, não é possível garantir a consistência 'tudo ou nada' usando apenas streams para sincronização."
    ]
  },
  {
    "question": "Uma empresa adquiriu uma Reserved Instance do tipo m4.xlarge, mas utilizou três instâncias m4.xlarge simultaneamente durante uma hora. Como um Desenvolvedor, explique como será feita a cobrança dessas instâncias?",
    "options": [
      "Todas as instâncias são cobradas como uma hora de uso de Reserved Instance.",
      "Todas as instâncias são cobradas como uma hora de uso de instância On-Demand.",
      "Uma instância é cobrada como uma hora de uso de Reserved Instance e as outras duas são cobradas como duas horas de uso On-Demand.",
      "Uma instância é cobrada como uma hora de uso On-Demand e as outras duas são cobradas como duas horas de uso de Reserved Instance."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A Reserved Instance oferece desconto apenas para o uso equivalente a uma instância por hora; múltiplas instâncias simultâneas além da quantidade reservada são cobradas como On-Demand.",
      "Incorreta. A Reserved Instance garante desconto para uma instância durante uma hora, portanto pelo menos uma instância deve ser cobrada com desconto, não todas como On-Demand.",
      "Correta. O benefício da Reserved Instance aplica-se a uma instância por hora (3600 segundos); as instâncias adicionais executadas simultaneamente são cobradas com tarifa On-Demand.",
      "Incorreta. O benefício da Reserved Instance sempre se aplica primeiro a uma instância; instâncias adicionais são cobradas como On-Demand, não o contrário."
    ]
  },
  {
    "question": "Um desenvolvedor júnior foi solicitado a configurar o acesso a uma instância Amazon EC2 que hospeda uma aplicação web. O desenvolvedor configurou um novo grupo de segurança para permitir tráfego HTTP de entrada a partir de 0.0.0.0/0 e manteve as regras padrão de saída. Uma Lista de Controle de Acesso de Rede (Network ACL - NACL) personalizada, associada à sub-rede da instância, está configurada para permitir tráfego HTTP de entrada a partir de 0.0.0.0/0 e manteve as regras padrão de saída. Qual das seguintes soluções você sugeriria se a instância EC2 precisar aceitar e responder a requisições da internet?",
    "options": [
      "Uma regra de saída deve ser adicionada à Network ACL (NACL) para permitir que a resposta seja enviada ao cliente na faixa de portas efêmeras.",
      "Regras de saída precisam ser configuradas tanto no grupo de segurança quanto na NACL para enviar respostas ao Internet Gateway.",
      "Uma regra de saída no grupo de segurança deve ser configurada para permitir que a resposta seja enviada ao cliente na porta HTTP.",
      "A configuração está completa na instância EC2 para aceitar e responder às requisições."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Network ACLs são stateless e exigem regras explícitas para tráfego de entrada e saída. Para que a instância EC2 responda corretamente, a NACL deve permitir o tráfego de saída para as portas efêmeras (geralmente 1024-65535), que são usadas como portas de origem pelo cliente para a comunicação de retorno.",
      "Incorreta. Como os grupos de segurança são stateful, não é necessário configurar regras de saída para tráfego de resposta. Apenas a NACL, que é stateless, requer regras explícitas de saída para permitir o retorno do tráfego.",
      "Incorreta. Grupos de segurança são stateful, o que significa que as respostas ao tráfego permitido de entrada são automaticamente permitidas na saída, não sendo necessário configurar regras de saída específicas para a porta HTTP.",
      "Incorreta. Apesar de o grupo de segurança ser stateful, a NACL é stateless e, portanto, requer regras explícitas de entrada e saída para permitir o tráfego de resposta. A configuração atual não garante que as respostas sejam enviadas corretamente."
    ]
  },
  {
    "question": "Um desenvolvedor está buscando estabelecer controle de acesso para uma API que se conecta a uma função Lambda downstream. Qual dos seguintes mecanismos NÃO pode ser usado para autenticação com o API Gateway?",
    "options": [
      "AWS Security Token Service (STS)",
      "Lambda Authorizer",
      "Cognito User Pools",
      "Padrões de roles e políticas IAM da AWS"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Security Token Service (STS) fornece credenciais temporárias para usuários IAM ou federados, mas não é suportado diretamente pelo API Gateway como mecanismo de autenticação.",
      "Incorreta. Lambda Authorizers são funções Lambda que controlam o acesso a métodos REST da API usando autenticação via token bearer ou outros parâmetros da requisição, permitindo controle granular sobre quem pode invocar a API.",
      "Incorreta. Amazon Cognito User Pools permite criar soluções personalizadas de autenticação e autorização para APIs REST, controlando quem pode invocar os métodos da API.",
      "Incorreta. Roles e políticas IAM padrão oferecem controles flexíveis e robustos que podem ser aplicados para controlar quem pode criar, gerenciar e invocar APIs no API Gateway."
    ]
  },
  {
    "question": "Um desenvolvedor deseja armazenar e recuperar com segurança diversos tipos de variáveis, como informações de autenticação de APIs remotas, URL da API e credenciais relacionadas, em diferentes ambientes de uma aplicação implantada no Amazon Elastic Container Service (Amazon ECS). Qual seria a melhor abordagem que exige modificações mínimas no código da aplicação?",
    "options": [
      "Configurar a aplicação para buscar as variáveis no AWS KMS, armazenando a URL da API e as credenciais como chaves únicas no KMS para cada ambiente.",
      "Configurar a aplicação para buscar as variáveis e credenciais no AWS Systems Manager Parameter Store, utilizando caminhos hierárquicos únicos no Parameter Store para cada variável em cada ambiente.",
      "Configurar a aplicação para buscar as variáveis de cada ambiente implantado definindo as informações de autenticação e a URL da API como nomes únicos na definição da tarefa ECS durante o processo de implantação.",
      "Configurar a aplicação para buscar as variáveis a partir de um arquivo criptografado armazenado junto com a aplicação, criando arquivos únicos para cada ambiente com a URL da API e as credenciais."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS Key Management Service (KMS) é um serviço para criação, gerenciamento e controle de chaves criptográficas, mas não é um serviço de armazenamento de valores chave-valor para variáveis de configuração ou credenciais. Portanto, não é adequado para armazenar diretamente variáveis ou URLs de API.",
      "Correta. O AWS Systems Manager Parameter Store oferece um armazenamento seguro e hierárquico para dados de configuração e gerenciamento de segredos. É possível armazenar valores em texto simples ou criptografados, organizando-os em caminhos que facilitam a segregação por ambiente e tipo de dado. Essa abordagem permite que a aplicação recupere as variáveis de forma segura e com modificações mínimas no código.",
      "Incorreta. Embora seja possível definir variáveis de ambiente na definição da tarefa ECS, essas variáveis ficam visíveis para qualquer usuário ou função com permissão para descrever a definição da tarefa, o que representa um risco de segurança. Além disso, essa abordagem não é ideal para gerenciar credenciais sensíveis e não facilita a segregação clara entre ambientes.",
      "Incorreta. Armazenar dados sensíveis e credenciais em arquivos criptografados junto com a aplicação não é uma prática recomendada de segurança, pois aumenta o risco de exposição caso o arquivo seja acessado indevidamente. Além disso, essa abordagem dificulta a rotação e o gerenciamento centralizado das credenciais."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa varejista multinacional deseja permitir que usuários autenticados confiáveis de terceiros, provenientes das organizações fornecedoras, possam criar e atualizar registros em tabelas específicas do DynamoDB na conta AWS da empresa. Como um Associate Developer, qual das seguintes soluções você sugeriria para esse caso de uso?",
    "options": [
      "Utilizar Amazon Cognito User Pools para permitir que usuários autenticados confiáveis de terceiros acessem o DynamoDB.",
      "Utilizar Amazon Cognito Identity Pools para permitir que usuários autenticados confiáveis de terceiros acessem o DynamoDB.",
      "Criar um novo usuário IAM na conta AWS da empresa para cada usuário autenticado de terceiros das organizações fornecedoras. Esses usuários usariam as credenciais IAM para acessar o DynamoDB.",
      "Criar um novo grupo IAM na conta AWS da empresa para cada usuário autenticado de terceiros das organizações fornecedoras. Esses usuários usariam as credenciais do grupo IAM para acessar o DynamoDB."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Amazon Cognito User Pools são diretórios de usuários que permitem autenticação e gerenciamento de usuários para aplicações, mas não fornecem credenciais temporárias para acessar diretamente serviços AWS como o DynamoDB. Portanto, não são adequados para conceder acesso direto a recursos AWS.",
      "Correta. Amazon Cognito Identity Pools (identidades federadas) permitem criar identidades únicas para usuários e federá-las com provedores de identidade externos, fornecendo credenciais temporárias e com privilégios limitados para acessar serviços AWS, como DynamoDB. Essa abordagem é escalável, segura e adequada para usuários autenticados de terceiros.",
      "Incorreta. Criar usuários IAM individuais para cada usuário externo não é escalável nem seguro para cenários com usuários de terceiros. Além disso, isso aumenta a complexidade de gerenciamento e não aproveita os mecanismos de federação existentes.",
      "Incorreta. Grupos IAM não possuem credenciais próprias e não podem ser usados diretamente para autenticação. Além disso, criar grupos para cada usuário externo não é uma prática recomendada e não resolve o problema de autenticação federada."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa varejista está se preparando para a próxima promoção de Ação de Graças e quer garantir que o backend serverless da aplicação, executado por funções Lambda, não sofra gargalos de latência devido ao aumento repentino de tráfego. Como um Associate Developer, qual das seguintes soluções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Configurar o Application Auto Scaling para gerenciar a concorrência reservada do Lambda com base em um cronograma.",
      "Não é necessário fazer nenhuma provisão especial, pois o Lambda é automaticamente escalável devido à sua natureza serverless.",
      "Adicionar um Application Load Balancer na frente das funções Lambda.",
      "Configurar o Application Auto Scaling para gerenciar a concorrência provisionada do Lambda com base em um cronograma."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A concorrência reservada define um limite mínimo e máximo de concorrência para uma função, mas não pode ser gerenciada dinamicamente via Application Auto Scaling. Além disso, a concorrência reservada limita o máximo de instâncias simultâneas, não ajuda a reduzir a latência causada pela inicialização a frio.",
      "Incorreta. Embora o Lambda seja serverless e escale automaticamente, picos de tráfego podem fazer com que as funções atinjam limites de concorrência, resultando em aumento de latência para as invocações que iniciam novas instâncias. Portanto, não fazer nenhuma provisão especial pode causar gargalos de latência.",
      "Incorreta. Embora o Application Load Balancer possa distribuir requisições para funções Lambda, ele não resolve o problema de latência causado pela inicialização a frio nem gerencia a concorrência das funções. Portanto, não é uma solução eficaz para o aumento de tráfego neste contexto.",
      "Correta. A concorrência provisionada garante que um número pré-alocado de instâncias da função Lambda esteja sempre inicializado e pronto para atender requisições, reduzindo a latência causada pela inicialização a frio. O Application Auto Scaling pode ser configurado para ajustar essa concorrência provisionada automaticamente, antecipando picos de tráfego com escalonamento baseado em horários."
    ]
  },
  {
    "question": "Uma empresa hospeda seu site em instâncias Amazon EC2 e utiliza Auto Scaling para ajustar seus recursos conforme picos de tráfego. No entanto, usuários ao redor do mundo relatam lentidão no carregamento, pois o conteúdo estático hospedado nas instâncias EC2 demora muito para carregar, mesmo fora dos períodos de maior movimento. Quais duas ações devem ser tomadas para melhorar a latência do site? (Selecione duas.)",
    "options": [
      "Transferir o conteúdo estático da aplicação hospedado nas instâncias EC2 para o Amazon S3",
      "Migrar a aplicação para AWS Lambda",
      "Configurar uma distribuição Amazon CloudFront para cachear o conteúdo estático com o Amazon S3 configurado como origem",
      "Dobrar a capacidade desejada do grupo de Auto Scaling",
      "Atualizar a CPU e a memória RAM disponíveis nas instâncias EC2"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Migrar o conteúdo estático para o Amazon S3 permite que ele seja servido de forma mais eficiente, pois o S3 é um serviço de armazenamento altamente escalável e otimizado para distribuição de conteúdo estático.",
      "Incorreta. AWS Lambda é um serviço de computação sem servidor para execução de código, não para armazenamento de conteúdo estático. Essa opção não resolve o problema de latência do conteúdo estático.",
      "Correta. Amazon CloudFront é uma CDN que distribui conteúdo através de uma rede global de edge locations, reduzindo a latência ao entregar o conteúdo estático mais próximo dos usuários finais, especialmente quando combinado com o Amazon S3 como origem.",
      "Incorreta. A capacidade desejada define o número inicial de instâncias e mantém essa quantidade. Como a lentidão ocorre mesmo fora dos picos de tráfego, aumentar o número de instâncias não resolve a latência de rede para o conteúdo estático.",
      "Incorreta. Embora aumentar os recursos de hardware possa melhorar o desempenho computacional, o problema principal é a alta latência de rede para o conteúdo estático, que não será resolvida apenas com mais CPU ou RAM nas instâncias EC2."
    ]
  },
  {
    "question": "Como líder de equipe, você precisa gerar um relatório semanal das execuções do CodeBuild para reportar internamente e ao cliente. Esse relatório deve conter o número total de builds realizados na semana, a porcentagem de sucesso e falha, além do tempo total gasto nas builds pelos membros da equipe. Também é necessário recuperar os logs do CodeBuild para as builds que falharam e analisá-los utilizando o Athena. Qual das opções a seguir ajudará a alcançar esse objetivo?",
    "options": [
      "Usar integração com AWS Lambda para processar os logs",
      "Usar AWS CloudTrail e entregar os logs para um bucket S3",
      "Habilitar a integração do CodeBuild com S3 e CloudWatch Logs",
      "Utilizar CloudWatch Events para monitorar as builds"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora o AWS Lambda possa ser utilizado para processar logs programaticamente, a integração nativa do CodeBuild com CloudWatch Logs e a exportação para S3 já fornecem uma solução otimizada e mais simples para armazenar e analisar os logs, especialmente ao usar o Athena para consultas.",
      "Incorreta. Embora o CodeBuild seja integrado ao AWS CloudTrail, que registra todas as chamadas de API e pode entregar esses logs para um bucket S3, essa solução é mais adequada para auditoria e monitoramento de segurança. Não é ideal para análise detalhada de logs de build ou geração de relatórios semanais de desempenho e falhas.",
      "Correta. O AWS CodeBuild monitora automaticamente as execuções e publica métricas no Amazon CloudWatch, incluindo número total de builds, builds com falha, builds bem-sucedidas e duração das builds. Além disso, é possível exportar os logs do CloudWatch Logs para um bucket S3, permitindo análises personalizadas e consultas no Athena, facilitando o monitoramento detalhado e a geração de relatórios conforme o requisito.",
      "Incorreta. O CloudWatch Events pode ser usado para reagir a eventos do CodeBuild, como o término de uma build, mas não oferece armazenamento ou análise direta dos logs. Para consultas e análises detalhadas dos logs, a integração entre CloudWatch Logs e S3 é mais apropriada."
    ]
  },
  {
    "question": "Um grupo de Auto Scaling possui uma capacidade máxima de 3 instâncias, uma capacidade atual de 2 instâncias e uma política de escalonamento que adiciona 3 instâncias. Ao executar essa política de escalonamento, qual é o resultado esperado?",
    "options": [
      "O Amazon EC2 Auto Scaling não adiciona nenhuma instância ao grupo, mas sugere alterar a política de escalonamento para adicionar apenas uma instância.",
      "O Amazon EC2 Auto Scaling adiciona apenas 1 instância ao grupo.",
      "O Amazon EC2 Auto Scaling adiciona 3 instâncias ao grupo e depois reduz 2 dessas instâncias.",
      "O Amazon EC2 Auto Scaling adiciona 3 instâncias ao grupo."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Auto Scaling não sugere alterações na política; ele simplesmente aplica as regras de capacidade mínima e máxima ao executar a política de escalonamento.",
      "Correta. Para evitar ultrapassar a capacidade máxima do grupo, que é 3, o Auto Scaling adiciona somente 1 instância, elevando a capacidade atual de 2 para o máximo permitido de 3.",
      "Incorreta. Essa abordagem seria ineficiente e impraticável, pois o Auto Scaling não adiciona instâncias apenas para removê-las logo em seguida.",
      "Incorreta. O Auto Scaling garante que a nova capacidade nunca ultrapasse os limites mínimos e máximos definidos para o grupo. Portanto, não adicionará 3 instâncias se isso exceder a capacidade máxima."
    ]
  }
];

