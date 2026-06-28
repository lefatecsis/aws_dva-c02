const originalQuestions = [
  {
    "question": "Você trabalha como desenvolvedor em um contrato para o governo na AWS GovCloud. Suas aplicações utilizam o Amazon Simple Queue Service (SQS) como serviço de fila de mensagens. Devido a recentes tentativas de invasão, as medidas de segurança foram reforçadas e agora exigem que os dados sejam armazenados em filas criptografadas.\n\nQuais das seguintes ações você pode tomar para atender a esses requisitos sem precisar alterar o código existente?",
    "options": [
      "Habilitar a criptografia do SQS com AWS KMS",
      "Usar o endpoint SSL",
      "Usar o AWS Secrets Manager",
      "Usar criptografia do lado do cliente"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A criptografia do lado servidor (SSE) do SQS utiliza chaves gerenciadas pelo AWS Key Management Service (KMS) para proteger o conteúdo das mensagens armazenadas nas filas, sem necessidade de alterar o código da aplicação. Essa solução atende ao requisito de criptografia em repouso de forma transparente.",
      "Incorreta. O uso do endpoint SSL garante criptografia apenas durante a transmissão dos dados (em trânsito), mas não protege os dados armazenados (em repouso). Como o requisito é a criptografia em repouso, essa opção não atende à necessidade.",
      "Incorreta. O AWS Secrets Manager é um serviço para gerenciar, rotacionar e recuperar segredos como credenciais e chaves de API, mas não é utilizado para criptografar dados armazenados em filas. Portanto, não atende ao requisito de criptografia em repouso para SQS.",
      "Incorreta. A criptografia do lado do cliente exige que a aplicação criptografe as mensagens antes de enviá-las para a fila, o que implica alterações no código existente. Como o requisito é não modificar o código, essa opção não é adequada."
    ]
  },
  {
    "question": "Uma empresa utiliza o AWS DynamoDB para armazenar informações sobre os times de esportes favoritos das pessoas e permitir que essas informações sejam pesquisáveis a partir da página inicial. Existe uma necessidade diária de que todos os 10 milhões de registros na tabela sejam excluídos e recarregados às 2:00 AM todas as noites.\n\nQual é a opção mais eficiente para realizar a exclusão com custos mínimos?",
    "options": [
      "Fazer um Scan e chamar DeleteItem para cada item",
      "Fazer um Scan e chamar BatchDeleteItem",
      "Excluir e recriar a tabela",
      "Chamar PurgeTable"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A operação Scan em uma tabela com 10 milhões de itens é muito lenta e custosa. Além disso, chamar DeleteItem individualmente para cada registro gera muitas chamadas e alto custo, tornando essa abordagem ineficiente para esse cenário.",
      "Incorreta. Embora o BatchDeleteItem permita deletar múltiplos itens por chamada, o uso do Scan para localizar todos os 10 milhões de registros ainda é muito lento e custoso. Portanto, essa não é a melhor opção para exclusão em massa nesse caso.",
      "Correta. A operação DeleteTable exclui a tabela inteira e todos os seus itens de forma eficiente. Após a solicitação de exclusão, a tabela entra no estado DELETING até que a exclusão seja concluída. Recriar a tabela em seguida permite um processo rápido e com custo reduzido, ideal para grandes volumes de dados como 10 milhões de registros.",
      "Incorreta. PurgeTable não é uma operação válida no DynamoDB e foi incluída apenas como uma alternativa para confundir. Não existe essa funcionalidade na AWS."
    ]
  },
  {
    "question": "Uma empresa de análise de dados com sua infraestrutura de TI na nuvem AWS deseja construir e implantar sua aplicação principal assim que houver qualquer alteração no código-fonte.\n\nComo um Desenvolvedor Associado, quais das seguintes opções você sugeriria para disparar a implantação? (Selecione duas)",
    "options": [
      "Manter o código-fonte em um volume Amazon EBS e iniciar o AWS CodePipeline sempre que houver atualizações no código-fonte",
      "Manter o código-fonte em um bucket Amazon S3 e configurar o AWS CodePipeline para executar periodicamente a cada 15 minutos",
      "Manter o código-fonte no Amazon EFS e iniciar o AWS CodePipeline sempre que um arquivo for atualizado",
      "Manter o código-fonte em um bucket Amazon S3 e iniciar o AWS CodePipeline sempre que um arquivo no bucket S3 for atualizado",
      "Manter o código-fonte em um repositório AWS CodeCommit e iniciar o AWS CodePipeline sempre que uma alteração for enviada para o repositório CodeCommit"
    ],
    "correct": [3, 4],
    "detailedExplanations": [
      "Incorreta. O Amazon EBS não é suportado como fonte para o AWS CodePipeline, portanto não é possível disparar pipelines com base em alterações no EBS.",
      "Incorreta. Embora seja possível configurar o pipeline para verificar o bucket S3 em intervalos regulares, essa abordagem é ineficiente e pode causar atrasos na implantação. A detecção baseada em eventos é recomendada para maior agilidade.",
      "Incorreta. O Amazon EFS não é suportado como um provedor de origem para o AWS CodePipeline. Portanto, não é possível configurar o pipeline para disparar automaticamente a partir de alterações no EFS.",
      "Correta. O AWS CodePipeline pode ser configurado para ser disparado automaticamente por eventos do Amazon S3, iniciando o processo de implantação imediatamente após uma atualização no bucket, o que é eficiente e recomendado.",
      "Correta. O AWS CodeCommit é um serviço de controle de versão gerenciado que integra-se nativamente ao AWS CodePipeline. O pipeline pode ser configurado para ser disparado automaticamente sempre que houver um push de código, garantindo implantações rápidas e confiáveis."
    ]
  },
  {
    "question": "Uma empresa do setor financeiro com mais de 10.000 funcionários contratou você como o novo Desenvolvedor Sênior. Inicialmente, o cache foi habilitado para reduzir o número de chamadas feitas a todos os endpoints da API e melhorar a latência das requisições ao API Gateway da empresa.\n\nPara fins de teste, você deseja invalidar o cache para que os clientes da API obtenham as respostas mais recentes. Qual das seguintes opções você deve utilizar?",
    "options": [
      "Usar o cabeçalho Bypass-Cache=1",
      "Usar o parâmetro de requisição ?cache-control-max-age=0",
      "Usar o parâmetro de requisição ?bypass_cache=1",
      "Usar o cabeçalho Cache-Control: max-age=0"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O cabeçalho Bypass-Cache=1 não é um cabeçalho HTTP válido nem reconhecido pelo API Gateway para controle de cache. Essa opção é fictícia e não tem efeito na invalidação do cache.",
      "Incorreta. A invalidação do cache requer o uso de um cabeçalho HTTP específico, não um parâmetro de consulta na URL. Portanto, usar um parâmetro de requisição como ?cache-control-max-age=0 não é suportado para esse propósito.",
      "Incorreta. Embora parâmetros de método possam ser passados via query string, o API Gateway não reconhece ?bypass_cache=1 como um parâmetro válido para ignorar ou invalidar o cache.",
      "Correta. Para que o cliente invalide uma entrada de cache existente e recarregue a resposta diretamente do endpoint de integração, ele deve enviar o cabeçalho HTTP Cache-Control: max-age=0 na requisição. Isso força o API Gateway a ignorar o cache e buscar a resposta atualizada, substituindo a entrada de cache anterior."
    ]
  },
  {
    "question": "Um desenvolvedor deseja uma forma simples e eficiente de retornar a versões anteriores de uma função Lambda que está sendo implantada.\n\nQual das seguintes soluções oferece o MENOR overhead operacional?",
    "options": [
      "Usar o CodeDeploy para configurar implantações blue/green para as diferentes versões da função Lambda",
      "Usar camadas (layers) do Lambda que possam apontar para as diferentes versões",
      "Usar um alias da função Lambda que possa apontar para as diferentes versões",
      "Usar uma política weighted do Route 53 que possa apontar para as diferentes versões da função Lambda"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora o CodeDeploy suporte implantações blue/green para funções Lambda, a implantação na plataforma Lambda já é, por padrão, uma implantação blue/green. Além disso, após a implantação, não é possível reverter diretamente para versões anteriores usando CodeDeploy, o que limita sua utilidade para esse caso específico.",
      "Incorreta. Camadas do Lambda são usadas para empacotar bibliotecas e dependências reutilizáveis, não para gerenciar ou apontar para diferentes versões da função Lambda. Portanto, não oferecem controle sobre versões da função.",
      "Correta. Aliases do Lambda funcionam como ponteiros para versões específicas da função, permitindo que você direcione o tráfego para versões distintas sem alterar o código do cliente. Eles oferecem uma maneira simples e eficiente de gerenciar versões e reverter para versões anteriores com mínimo overhead operacional.",
      "Incorreta. O Route 53 é um serviço de DNS e não gerencia versões de funções Lambda. Embora políticas weighted possam distribuir tráfego entre recursos DNS, elas não são aplicáveis para controle de versões de funções Lambda, tornando essa opção inadequada."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa está criando um template AWS CloudFormation que deve preencher automaticamente a variável da Região AWS durante a implantação do template.\n\nQual é a forma MAIS eficiente operacionalmente para determinar a Região em que o template está sendo implantado?",
    "options": [
      "Configurar um mapeamento contendo as chaves e valores nomeados para todas as Regiões AWS e fazer o template CloudFormation selecionar automaticamente o valor desejado.",
      "Criar um recurso personalizado suportado por AWS Lambda para a Região e permitir que o valor desejado seja preenchido no momento da implantação pela função Lambda.",
      "Usar o pseudo parâmetro AWS::Region.",
      "Criar um parâmetro no CloudFormation para a Região e permitir que o valor desejado seja preenchido no momento da implantação."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A seção Mappings associa chaves a valores nomeados, e você pode usar a função Fn::FindInMap para recuperar valores. Porém, o template não pode selecionar automaticamente a Região de implantação a partir de um mapeamento, pois não há um mecanismo para detectar a Região atual sem usar o pseudo parâmetro.",
      "Incorreta. Recursos personalizados permitem adicionar lógica de provisionamento personalizada que é executada durante a criação, atualização ou exclusão do stack. No entanto, a Região não é um recurso que precisa ser provisionado, e usar Lambda para isso é desnecessariamente complexo e ineficiente.",
      "Correta. Pseudo parâmetros são parâmetros pré-definidos pelo AWS CloudFormation que não precisam ser declarados no template. O AWS::Region retorna a string da Região onde o recurso está sendo criado, como us-west-2, permitindo que o template se adapte automaticamente à Região de implantação de forma simples e eficiente.",
      "Incorreta. Embora seja possível usar um parâmetro para informar a Região durante a implantação, isso exige intervenção manual e não é operacionalmente eficiente, já que o pseudo parâmetro AWS::Region fornece essa informação automaticamente."
    ]
  },
  {
    "question": "Como parte das normas internas, você deve garantir que todas as comunicações com o Amazon S3 sejam criptografadas.\n\nPara qual dos seguintes mecanismos de criptografia uma requisição será rejeitada caso a conexão não utilize HTTPS?",
    "options": [
      "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys)",
      "SSE-KMS (Server-Side Encryption with AWS KMS Keys)",
      "Criptografia do Lado Cliente (Client-Side Encryption)",
      "SSE-C (Server-Side Encryption with Customer-Provided Keys)"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A criptografia do lado servidor com chaves gerenciadas pelo próprio Amazon S3 (SSE-S3) não exige que a conexão seja via HTTPS para aceitar a requisição. O Amazon S3 criptografa os dados em repouso, mas não rejeita requisições HTTP.",
      "Incorreta. A criptografia do lado servidor usando chaves gerenciadas pelo AWS KMS não exige que a conexão seja via HTTPS para que a requisição seja aceita. Embora o uso de HTTPS seja uma boa prática, o Amazon S3 não rejeita requisições HTTP com SSE-KMS.",
      "Incorreta. Na criptografia do lado cliente, os dados são criptografados antes de serem enviados para o Amazon S3, e a comunicação pode ocorrer via HTTP ou HTTPS. Não há obrigatoriedade do uso de HTTPS para que a requisição seja aceita, embora seja recomendável para segurança da transmissão.",
      "Correta. A criptografia do lado servidor com chaves fornecidas pelo cliente (SSE-C) exige que a chave de criptografia seja enviada junto com a requisição. O Amazon S3 rejeita qualquer requisição feita via HTTP (não segura) para proteger a chave, pois o envio da chave por HTTP pode comprometer sua segurança. Portanto, o uso de HTTPS é obrigatório para SSE-C."
    ]
  },
  {
    "question": "Para uma aplicação que armazena informações pessoais de saúde (PHI) em uma instância Amazon RDS para MySQL criptografada, um desenvolvedor deseja melhorar o desempenho fazendo cache dos dados acessados com frequência e adicionando a capacidade de ordenar ou classificar esses conjuntos de dados em cache.\n\nQual é a melhor abordagem para atender a esses requisitos, considerando a restrição de que as PHIs permaneçam criptografadas o tempo todo?",
    "options": [
      "Armazenar os dados acessados com frequência em uma instância Amazon ElastiCache para Memcached com criptografia habilitada para dados em trânsito e em repouso.",
      "Migrar os dados acessados com frequência para um armazenamento local (Instance Store) em uma instância EC2 com criptografia habilitada para dados em trânsito e em repouso.",
      "Migrar os dados acessados com frequência para o DynamoDB Accelerator (DAX), que possui criptografia habilitada para dados em trânsito e em repouso.",
      "Armazenar os dados acessados com frequência em uma instância Amazon ElastiCache para Redis com criptografia habilitada para dados em trânsito e em repouso."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O Memcached é projetado para simplicidade e não suporta estruturas de dados avançadas nem operações como ordenação ou classificação, limitando sua utilidade para o caso de uso que exige manipulação de conjuntos ordenados.",
      "Incorreta. O armazenamento local do EC2 (Instance Store) oferece armazenamento temporário em nível de bloco, ligado fisicamente ao host, ideal para dados transitórios e voláteis, mas não é adequado para armazenamento persistente ou cache seguro de dados sensíveis como PHI.",
      "Incorreta. O DAX é um serviço de cache compatível com DynamoDB que oferece desempenho rápido em memória para aplicações exigentes, mas não pode ser usado como cache para uma instância RDS MySQL, tornando essa opção inadequada para o cenário apresentado.",
      "Correta. O Amazon ElastiCache para Redis é um serviço de estrutura de dados em memória compatível com Redis que suporta estruturas avançadas como conjuntos ordenados, permitindo ordenação e classificação dos dados em cache. Além disso, oferece criptografia em trânsito e em repouso, garantindo que as PHIs permaneçam protegidas o tempo todo."
    ]
  },
  {
    "question": "Sua equipe de desenvolvimento utiliza o AWS SDK para Java em uma aplicação web que faz upload de arquivos para vários buckets do Amazon Simple Storage Service (S3) utilizando o mecanismo de criptografia SSE-KMS. Os desenvolvedores estão relatando erros de permissão ao tentar enviar os objetos via HTTP. Qual dos seguintes cabeçalhos eles devem incluir na requisição?",
    "options": [
      "'x-amz-server-side-encryption': 'aws:kms'",
      "'x-amz-server-side-encryption': 'AES256'",
      "'x-amz-server-side-encryption': 'SSE-KMS'",
      "'x-amz-server-side-encryption': 'SSE-S3'"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Este é o valor correto para o cabeçalho quando se utiliza a criptografia do lado do servidor com chaves gerenciadas pelo AWS Key Management Service (SSE-KMS). Sem este cabeçalho, a requisição é negada por falta de permissão.",
      "Incorreta. Este valor é utilizado para a criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3), não para SSE-KMS. Portanto, não é o cabeçalho correto para uso com SSE-KMS.",
      "Incorreta. 'SSE-KMS' não é um valor válido para o cabeçalho. O valor correto para indicar criptografia SSE-KMS é 'aws:kms'.",
      "Incorreta. 'SSE-S3' não é um valor válido para o cabeçalho. O valor correto para criptografia SSE-S3 é 'AES256'."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento está armazenando dados sensíveis de clientes no Amazon S3 que exigem criptografia em repouso. As chaves de criptografia devem ser rotacionadas pelo menos anualmente.\n\nQual é a maneira mais simples de implementar uma solução que atenda a esse requisito?",
    "options": [
      "Importar uma chave personalizada para o AWS KMS e automatizar a rotação anual usando uma função Lambda",
      "Criptografar os dados antes de enviá-los para o Amazon S3",
      "Usar o AWS KMS com rotação automática de chaves",
      "Usar SSE-C com rotação automática de chaves anualmente"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora seja possível importar chaves personalizadas para o AWS KMS, a rotação automática não é suportada para essas chaves importadas. Além disso, a automação da rotação via Lambda adiciona complexidade e responsabilidade operacional, não sendo a solução mais simples para o requisito apresentado.",
      "Incorreta. A criptografia do lado do cliente (client-side encryption) exige que a equipe gerencie a geração, manutenção e rotação das chaves manualmente, aumentando a complexidade operacional. Portanto, não é a forma mais simples de garantir a criptografia em repouso com rotação anual de chaves.",
      "Correta. O uso do AWS Key Management Service (KMS) com rotação automática de chaves permite que as chaves mestras do cliente (CMKs) sejam rotacionadas automaticamente a cada ano, garantindo conformidade com o requisito de rotação anual. O Amazon S3 pode usar SSE-KMS para criptografar objetos no momento da gravação e descriptografá-los na leitura, gerenciando as chaves de forma segura e integrada.",
      "Incorreta. O Server-Side Encryption com Customer-Provided Keys (SSE-C) exige que o cliente forneça e gerencie as chaves de criptografia. O Amazon S3 não armazena essas chaves e não oferece suporte a rotação automática, tornando inviável atender ao requisito de rotação anual de forma automática."
    ]
  },
  {
    "question": "Sua empresa está em processo de adoção de uma cultura DevOps e está migrando todos os seus recursos on-premises para a nuvem utilizando arquiteturas serverless e implantações automatizadas. Você criou um template do AWS CloudFormation em YAML que utiliza uma função AWS Lambda para buscar arquivos HTML no GitHub e colocá-los em um bucket do Amazon Simple Storage Service (S3) que você especificar.\n\nQuais dos seguintes comandos da AWS CLI você pode usar para fazer upload de funções AWS Lambda e templates AWS CloudFormation para a AWS?",
    "options": [
      "cloudformation zip e cloudformation upload",
      "cloudformation package e cloudformation upload",
      "cloudformation package e cloudformation deploy",
      "cloudformation zip e cloudformation deploy"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Nenhum dos comandos 'cloudformation zip' ou 'cloudformation upload' existem na AWS CLI. Essa opção é fictícia e não pode ser utilizada para upload ou implantação de funções Lambda ou templates CloudFormation.",
      "Incorreta. Embora o comando 'cloudformation package' exista e funcione para empacotar artefatos locais, o comando 'cloudformation upload' não existe na AWS CLI, portanto essa combinação não é válida.",
      "Correta. O comando 'cloudformation package' empacota os artefatos locais referenciados no template CloudFormation, como o código-fonte da função Lambda, e os envia para um bucket S3. Em seguida, o comando 'cloudformation deploy' implanta o template CloudFormation especificado, criando e executando um changeset para provisionar os recursos de forma ordenada e previsível.",
      "Incorreta. O comando 'cloudformation zip' não existe na AWS CLI, embora 'cloudformation deploy' exista. Portanto, essa combinação não é válida para o processo descrito."
    ]
  },
  {
    "question": "Você foi designado como o novo líder de projeto para uma aplicação web que processa pedidos de clientes. Você deseja integrar um processamento orientado a eventos sempre que os dados forem modificados ou excluídos, utilizando uma abordagem serverless com AWS Lambda para processar eventos de streams.\n\nQual dos seguintes bancos de dados você deve escolher?",
    "options": [
      "RDS",
      "ElastiCache",
      "DynamoDB",
      "Kinesis"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O Amazon RDS, por si só, não oferece suporte nativo para streaming de eventos como o DynamoDB Streams. Embora seja possível capturar alterações no RDS usando outras ferramentas, ele não é a escolha ideal para um processamento orientado a eventos serverless direto.",
      "Incorreta. O Amazon ElastiCache é um serviço de cache em memória que melhora a performance de aplicações, mas não oferece funcionalidades de streaming de dados ou captura de eventos de modificação/exclusão de dados, portanto não atende ao requisito.",
      "Correta. O Amazon DynamoDB oferece o recurso DynamoDB Streams, que captura uma sequência ordenada de modificações em nível de item na tabela, incluindo inserções, atualizações e exclusões. Essa funcionalidade permite que aplicações serverless, como funções AWS Lambda, processem eventos quase em tempo real sempre que os dados são alterados, atendendo perfeitamente ao requisito do projeto.",
      "Incorreta. O Amazon Kinesis não é um banco de dados, mas sim um serviço para ingestão e processamento de dados em streaming. Embora possa ser usado para processar dados em tempo real, ele não armazena dados como um banco de dados tradicional e não é adequado para o requisito de banco de dados com suporte a streams nativos para alterações de dados."
    ]
  },
  {
    "question": "Um site serve conteúdo estático a partir de um bucket do Amazon Simple Storage Service (Amazon S3) e conteúdo dinâmico por meio de um Application Load Balancer. A base de usuários está distribuída globalmente e a latência deve ser minimizada para proporcionar uma melhor experiência ao usuário.\n\nQual tecnologia/serviço pode ajudar a acessar o conteúdo estático e dinâmico mantendo a latência dos dados baixa?",
    "options": [
      "Use o AWS Global Accelerator para alternar de forma transparente entre o bucket S3 e o load balancer conforme as necessidades dos dados.",
      "Configure o CloudFront com múltiplas origens para servir tanto conteúdo estático quanto dinâmico com baixa latência para usuários globais.",
      "Use o recurso Lambda@Edge do CloudFront para servir dados dos buckets S3 e do load balancer programaticamente em tempo real.",
      "Use os Grupos de Origem (Origin Groups) do CloudFront para agrupar as requisições estáticas e dinâmicas em uma única requisição para processamento posterior."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS Global Accelerator melhora a performance e disponibilidade ao fornecer IPs estáticos globais e roteamento inteligente para endpoints saudáveis, mas não é indicado para roteamento de conteúdo HTTP entre S3 e Application Load Balancer. É mais adequado para casos de uso não HTTP, como jogos, IoT ou aplicações que exigem failover regional rápido e IPs estáticos.",
      "Correta. O Amazon CloudFront é um serviço de CDN que acelera a distribuição de conteúdo estático e dinâmico por meio de uma rede global de edge locations. Configurando múltiplas origens em uma única distribuição CloudFront, é possível direcionar requisições para o bucket S3 para conteúdo estático e para o Application Load Balancer para conteúdo dinâmico, garantindo baixa latência e melhor experiência para usuários distribuídos globalmente.",
      "Incorreta. Lambda@Edge é uma funcionalidade serverless que permite executar código próximo ao usuário para personalizações e manipulações de requisições/respostas, ideal para operações computacionais intensivas. No entanto, não é a solução adequada para roteamento ou distribuição direta de conteúdo estático e dinâmico entre S3 e load balancer neste cenário.",
      "Incorreta. Os Grupos de Origem do CloudFront são usados para configurar failover entre origens, garantindo alta disponibilidade ao alternar entre uma origem primária e uma secundária em caso de falha. Eles não são projetados para agrupar diferentes tipos de requisições em uma única solicitação nem para roteamento de conteúdo estático e dinâmico."
    ]
  },
  {
    "question": "Sua empresa utiliza o Amazon CloudFront para distribuir conteúdo via internet aos clientes com baixa latência. Além da latência, a segurança é uma preocupação importante, e você deseja garantir conexões de ponta a ponta usando HTTPS para proteger o conteúdo.\n\nQual das opções abaixo está disponível para o uso de HTTPS no AWS CloudFront?",
    "options": [
      "Apenas entre os clientes e o CloudFront.",
      "Apenas entre o CloudFront e o backend.",
      "Nem entre os clientes e o CloudFront, nem entre o CloudFront e o backend.",
      "Entre os clientes e o CloudFront, assim como entre o CloudFront e o backend (origem)."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora seja possível exigir HTTPS entre os clientes e o CloudFront, também é possível configurar HTTPS entre o CloudFront e a origem, portanto essa opção está incompleta.",
      "Incorreta. É possível configurar HTTPS entre o CloudFront e a origem, mas também é possível exigir HTTPS entre os clientes e o CloudFront, então essa opção está incompleta.",
      "Incorreta. É possível configurar HTTPS para ambas as comunicações, tanto entre clientes e CloudFront quanto entre CloudFront e a origem, portanto essa opção não é válida.",
      "Correta. O CloudFront permite configurar HTTPS tanto para a comunicação entre os clientes (visualizadores) e o CloudFront quanto para a comunicação entre o CloudFront e a origem (backend), garantindo conexões criptografadas de ponta a ponta."
    ]
  },
  {
    "question": "Você possui uma aplicação web popular que acessa dados armazenados em um bucket do Amazon Simple Storage Service (S3). Os desenvolvedores utilizam o SDK para manter a aplicação e adicionar novas funcionalidades. Uma exigência de conformidade de segurança determina que todos os novos objetos enviados para o S3 sejam criptografados usando SSE-S3 no momento do upload. Qual dos seguintes cabeçalhos os desenvolvedores devem adicionar à requisição para garantir essa criptografia?",
    "options": [
      "'x-amz-server-side-encryption': 'aws:kms'",
      "'x-amz-server-side-encryption': 'SSE-KMS'",
      "'x-amz-server-side-encryption': 'SSE-S3'",
      "'x-amz-server-side-encryption': 'AES256'"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Este valor é válido para criptografia usando SSE-KMS (chaves gerenciadas pelo AWS KMS), que oferece controle avançado sobre as chaves, mas não corresponde à criptografia SSE-S3 solicitada.",
      "Incorreta. Similar ao anterior, 'SSE-KMS' não é um valor válido para o cabeçalho; o valor correto para usar SSE-KMS é 'aws:kms'. Além disso, SSE-KMS não é o método SSE-S3 requerido.",
      "Incorreta. Embora SSE-S3 seja o nome do método de criptografia gerenciada pelo Amazon S3, este valor não é aceito como valor válido para o cabeçalho 'x-amz-server-side-encryption'.",
      "Correta. Este é o valor correto para ativar a criptografia do lado do servidor usando SSE-S3 (Amazon S3-Managed Keys). O Amazon S3 utiliza AES-256, um padrão de criptografia forte, para proteger os dados em repouso."
    ]
  },
  {
    "question": "Após revisar sua fatura mensal da AWS, você percebe que o custo do uso do Amazon SQS aumentou substancialmente após a criação de novas filas; no entanto, você sabe que os clientes da fila não possuem muito tráfego e estão recebendo respostas vazias.\n\nQual das seguintes ações você deve tomar para reduzir os custos?",
    "options": [
      "Diminuir o DelaySeconds",
      "Utilizar Long Polling",
      "Usar uma fila FIFO",
      "Aumentar o VisibilityTimeout"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O parâmetro DelaySeconds atrasa a visibilidade inicial da mensagem na fila, mas não reduz o número de respostas vazias nem o custo associado ao polling da fila.",
      "Correta. O Long Polling no Amazon SQS permite que a requisição aguarde até que haja pelo menos uma mensagem disponível antes de retornar uma resposta, reduzindo significativamente o número de respostas vazias e, consequentemente, o custo associado às requisições desnecessárias.",
      "Incorreta. Filas FIFO garantem a ordem de processamento das mensagens e evitam duplicatas, porém são mais caras que as filas padrão e não ajudam na redução de custos relacionados a respostas vazias ou baixa taxa de mensagens.",
      "Incorreta. O VisibilityTimeout controla o tempo em que uma mensagem fica invisível para outros consumidores após ser recebida, mas não impacta diretamente no custo relacionado a respostas vazias ou no número de requisições feitas à fila."
    ]
  },
  {
    "question": "Um usuário possui uma política IAM e uma política do Amazon SQS aplicadas à sua conta. A política IAM concede permissão para a ação ReceiveMessage na fila example_queue, enquanto a política do Amazon SQS concede permissão para a ação SendMessage na mesma fila.\n\nConsiderando as permissões acima, quais das opções a seguir estão corretas? (Selecione duas)",
    "options": [
      "Se o usuário enviar uma requisição SendMessage para a fila example_queue, a política IAM negará essa ação.",
      "Adicionar apenas uma política IAM que negue todas as ações do usuário na fila não é suficiente. A política do SQS também deve negar explicitamente todas as ações.",
      "Apenas uma das políticas, IAM ou Amazon SQS, deve ser usada para conceder permissões. Ambas não podem ser usadas simultaneamente.",
      "Se você adicionar uma política que negue ao usuário acesso a todas as ações da fila, essa política irá sobrescrever as outras duas e o usuário não terá acesso à example_queue.",
      "O usuário pode enviar uma requisição ReceiveMessage para a fila example_queue, pois a política IAM permite essa ação."
    ],
    "correct": [3, 4],
    "detailedExplanations": [
      "Incorreta. A política IAM não nega nem permite explicitamente a ação SendMessage; a permissão para essa ação vem da política do Amazon SQS, que a permite. Como não há negação explícita na política IAM, o acesso para enviar mensagens é permitido.",
      "Incorreta. Uma negação explícita em qualquer uma das políticas (IAM ou SQS) é suficiente para bloquear o acesso. Não é necessário negar em ambas as políticas, pois uma negação explícita sempre prevalece sobre qualquer permissão.",
      "Incorreta. Existem duas formas de conceder permissões para recursos do Amazon SQS: usando políticas baseadas em identidade (IAM) e políticas específicas do Amazon SQS. É possível usar uma, outra ou ambas em conjunto para controlar o acesso, e elas funcionam de forma complementar.",
      "Correta. Uma política que contenha uma negação explícita para todas as ações na fila prevalecerá sobre quaisquer permissões concedidas por outras políticas, bloqueando o acesso do usuário à fila example_queue.",
      "Correta. A política IAM do usuário concede explicitamente permissão para a ação ReceiveMessage na fila example_queue. Como a política do SQS não nega essa ação, o usuário poderá realizar essa operação, pois ambas as políticas permitem ou não negam explicitamente a ação."
    ]
  },
  {
    "question": "Você fez o upload de um arquivo zip para o AWS Lambda que contém arquivos de código escritos em Node.js. Quando sua função é executada, você recebe a seguinte mensagem de erro: 'Error: Memory Size: 10,240 MB Max Memory Used'. Qual das alternativas a seguir explica o problema?",
    "options": [
      "Seu arquivo zip está corrompido.",
      "Você fez o upload de um arquivo zip maior que 50 MB para o AWS Lambda.",
      "O arquivo zip descompactado excede os limites do AWS Lambda.",
      "Sua função Lambda ficou sem memória RAM."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Um arquivo corrompido impediria a extração e execução da função, mas o erro indica que a função foi executada e falhou por uso de memória, o que significa que o arquivo não está corrompido.",
      "Incorreta. O tamanho do arquivo zip não impede a execução da função se estiver dentro dos limites permitidos para upload via console ou CLI. Além disso, a função foi executada, indicando que o arquivo foi aceito.",
      "Incorreta. Se o arquivo zip descompactado ultrapassasse os limites do Lambda, a função nem sequer seria executada, mas no caso a função foi executada e apresentou erro de memória.",
      "Correta. O erro indica que a função Lambda foi configurada com 10.240 MB de memória, mas o código tentou usar mais do que isso, causando falha por falta de memória durante a execução."
    ]
  },
  {
    "question": "Você é gerente de uma empresa de tecnologia que acabou de contratar uma equipe de desenvolvedores para trabalhar na infraestrutura AWS da empresa. Todos os desenvolvedores relatam que, ao usar o AWS CLI para executar comandos, ocorre a seguinte exceção: Você não está autorizado a executar esta operação. Mensagem de falha de autorização codificada: 6h34GtpmGjJJUm946eDVBfzWQJk6z5GePbbGDs9Z2T8xZj9EZtEduSnTbmrR7pMqpJrVYJCew2m8YBZQf4HRWEtrpncANrZMsnzk.\n\nQual das seguintes ações ajudará os desenvolvedores a decodificar essa mensagem?",
    "options": [
      "Use o comando decode-authorization-message do AWS IAM",
      "Use o comando decode-authorization-message do AWS STS",
      "Use o decodificador do AWS Cognito",
      "Use o comando decode-authorization-message do AWS KMS"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O serviço AWS IAM não possui o comando decode-authorization-message. Esta opção é fictícia e não existe na CLI da AWS.",
      "Correta. O comando decode-authorization-message do AWS STS permite decodificar informações adicionais sobre o status de autorização de uma requisição a partir de uma mensagem codificada retornada em resposta a uma solicitação AWS. Essa funcionalidade é essencial para entender detalhes das falhas de autorização, que são codificadas para proteger informações privilegiadas. Para usar este comando, o usuário deve ter permissão explícita para a ação sts:DecodeAuthorizationMessage em sua política IAM.",
      "Incorreta. O serviço AWS Cognito não possui nenhum decodificador para mensagens de falha de autorização e não oferece um comando decode-authorization-message. Esta opção é fictícia.",
      "Incorreta. O serviço AWS KMS não possui o comando decode-authorization-message. Esta opção é fictícia e não ajudará a decodificar mensagens de falha de autorização."
    ]
  },
  {
    "question": "Você foi contratado por uma empresa que precisa de um desenvolvedor experiente para ajudar com um fluxo de trabalho de integração contínua/entrega contínua (CI/CD) na AWS. Você configurou o pipeline do AWS CodePipeline para ser executado sempre que o código-fonte da aplicação for alterado em um repositório hospedado no AWS CodeCommit, e utiliza o AWS CodeBuild para compilar o código-fonte. Agora, você está configurando o parâmetro ProjectArtifacts na etapa de build.\n\nQual das seguintes ações você deve realizar?",
    "options": [
      "Configurar o AWS CodeBuild para armazenar os artefatos de saída em servidores EC2",
      "Entrar em contato com o suporte da AWS para permitir que o AWS CodePipeline gerencie os artefatos de build",
      "Conceder permissões ao AWS CodeBuild para fazer upload dos artefatos de build em seu bucket do Amazon S3",
      "Conceder permissões ao AWS CodeCommit para fazer upload dos artefatos de build em seu bucket do Amazon S3"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Servidores EC2 não são um local válido para armazenar artefatos de build no contexto do CodeBuild. O armazenamento deve ser feito em um bucket do Amazon S3 ou gerenciado pelo próprio CodePipeline.",
      "Incorreta. Não é necessário contatar o suporte da AWS para permitir que o CodePipeline gerencie os artefatos de build. O CodePipeline pode ser configurado para gerenciar os artefatos de saída diretamente, sem intervenção do suporte.",
      "Correta. Quando o parâmetro ProjectArtifacts está configurado com o tipo S3, o projeto de build armazena os artefatos de saída no Amazon S3. Para isso, o CodeBuild precisa ter permissões adequadas para fazer upload dos artefatos no bucket S3 especificado.",
      "Incorreta. O AWS CodeCommit é apenas o repositório de código-fonte e não tem controle ou responsabilidade sobre o processo de compilação ou armazenamento dos artefatos gerados pelo build."
    ]
  },
  {
    "question": "Um engenheiro sênior de nuvem projeta e implanta soluções de detecção de fraudes online para empresas de cartão de crédito que processam milhões de transações diariamente. A aplicação no Elastic Beanstalk envia arquivos para o Amazon S3 e, em seguida, envia uma mensagem para uma fila do Amazon SQS contendo o caminho do arquivo carregado no S3. O engenheiro deseja adiar a entrega de quaisquer novas mensagens na fila por pelo menos 10 segundos.\n\nQual recurso do SQS o engenheiro deve utilizar?",
    "options": [
      "Habilitar LongPolling",
      "Usar o parâmetro DelaySeconds",
      "Usar o parâmetro visibility timeout",
      "Implementar atraso no lado da aplicação"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. LongPolling reduz o custo e melhora a eficiência ao aguardar mensagens disponíveis na fila, evitando respostas vazias, mas não serve para adiar a entrega de mensagens. O tempo máximo de espera do LongPolling é 20 segundos, mas ele não controla o momento em que a mensagem é disponibilizada na fila.",
      "Correta. O parâmetro DelaySeconds permite adiar a entrega de novas mensagens na fila por um período definido, que pode variar de 0 a 900 segundos (15 minutos). Isso é ideal para casos em que se deseja postergar a visibilidade das mensagens para os consumidores, garantindo que elas não sejam processadas antes do tempo desejado.",
      "Incorreta. O visibility timeout é o período durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, evitando processamento duplicado. Ele não adia a entrega da mensagem na fila, apenas controla a visibilidade após o recebimento.",
      "Incorreta. Embora seja possível programar a aplicação para atrasar o envio das mensagens, essa abordagem não é robusta, pois se a aplicação falhar antes de enviar a mensagem, ela será perdida. Além disso, não há garantia de consistência e controle centralizado do atraso."
    ]
  },
  {
    "question": "Sua empresa gerencia centenas de instâncias EC2 rodando Linux em várias Zonas de Disponibilidade na região eu-west-3. Seu gerente solicitou coletar métricas de memória do sistema em todas as instâncias EC2 usando um script.\n\nQual das seguintes soluções ajudará a coletar esses dados?",
    "options": [
      "Extrair as estatísticas de RAM a partir das métricas padrão do CloudWatch para instâncias EC2.",
      "Extrair as estatísticas de RAM usando o AWS X-Ray.",
      "Extrair as estatísticas de RAM usando os metadados da instância.",
      "Utilizar um job cron nas instâncias que envie as estatísticas de RAM do EC2 como uma métrica personalizada para o CloudWatch."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. As métricas padrão do CloudWatch para EC2 incluem CPU, disco e rede, mas não fornecem métricas detalhadas de utilização de memória. Para obter métricas de memória, é necessário utilizar métricas personalizadas enviadas pela instância.",
      "Incorreta. O AWS X-Ray é uma ferramenta para análise e depuração de aplicações distribuídas e microserviços, fornecendo rastreamento de requisições e visualização de componentes da aplicação. Ele não coleta métricas de uso de memória das instâncias EC2.",
      "Incorreta. Os metadados da instância fornecem informações sobre a configuração e o ambiente da instância, como hostname, eventos e grupos de segurança, mas não oferecem métricas detalhadas de uso de memória. Eles apenas indicam o ID do disco RAM especificado no lançamento, sem dados de utilização.",
      "Correta. Os scripts de monitoramento do Amazon CloudWatch para instâncias Linux do Amazon EC2 demonstram como produzir e consumir métricas personalizadas no CloudWatch. Esses scripts Perl são exemplos funcionais que reportam métricas de memória, swap e uso de disco. É possível configurar um cron para enviar essas métricas periodicamente ao CloudWatch, permitindo monitoramento detalhado da utilização de memória."
    ]
  },
  {
    "question": "Um Amazon Simple Queue Service (SQS) precisa ser configurado entre duas contas AWS para acesso compartilhado à fila. A conta AWS A possui a fila SQS em sua conta e a conta AWS B precisa ter acesso a essa fila.\n\nQuais das seguintes opções precisam ser combinadas para permitir esse acesso entre contas? (Selecione três)",
    "options": [
      "O administrador da conta A anexa uma política de confiança ao role que identifica a conta B como o principal que pode assumir o role",
      "Os usuários da conta B possuem uma política de permissões que permite assumir o role criado na conta A",
      "O administrador da conta A cria um role IAM e anexa uma política de permissões",
      "O administrador da conta A anexa uma política de confiança ao role que identifica a conta B como o principal do serviço AWS que pode assumir o role",
      "O administrador da conta B cria um role IAM e anexa uma política de confiança ao role com a conta B como principal"
    ],
    "correct": [0, 1, 2],
    "detailedExplanations": [
      "Correta. Para permitir o acesso entre contas, a conta A deve criar um role com uma política de confiança que permita que a conta B assuma esse role.",
      "Correta. Para que os usuários da conta B possam assumir o role criado na conta A, eles precisam ter uma política de permissões que permita a ação sts:AssumeRole para esse role.",
      "Correta. A conta A deve criar um role com uma política de permissões que conceda acesso aos recursos da fila SQS para o role que será assumido pela conta B.",
      "Incorreta. A política de confiança para um serviço AWS é usada quando um serviço precisa assumir o role, não para acesso entre contas. Aqui, o principal deve ser a conta B, não um serviço AWS.",
      "Incorreta. A criação do role com a política de permissões e confiança deve ser feita na conta A, que possui o recurso. A conta B não deve criar esse role para acessar a fila da conta A."
    ]
  },
  {
    "question": "Um sistema de gerenciamento de pedidos utiliza um job cron para consultar a existência de novos pedidos. Cada vez que um novo pedido é criado, o job cron envia os dados desse pedido como mensagem para filas de mensagens, a fim de facilitar o processamento downstream dos pedidos de forma confiável. Para reduzir custos e melhorar a performance, a empresa deseja migrar essa funcionalidade para a nuvem AWS.\n\nQual das seguintes opções é a solução mais otimizada para atender a esse requisito?",
    "options": [
      "Usar o Amazon Simple Notification Service (SNS) para enviar notificações quando um pedido é criado. Configurar diferentes filas do Amazon Simple Queue Service (SQS) para receber essas mensagens e realizar o processamento downstream",
      "Usar o Amazon Simple Notification Service (SNS) para enviar notificações para streams do Amazon Kinesis Data Firehose para processar os dados para aplicações downstream",
      "Configurar diferentes filas do Amazon Simple Queue Service (SQS) para consultar periodicamente a existência de novos pedidos",
      "Usar o Amazon Simple Notification Service (SNS) para enviar notificações e utilizar funções AWS Lambda para processar as informações recebidas do SNS"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon SNS trabalha em conjunto com o Amazon SQS para fornecer uma solução eficiente e confiável. O SNS permite enviar mensagens em modo push para múltiplos assinantes, eliminando a necessidade de polling. Ao assinar filas SQS em um tópico SNS, as mensagens são entregues e armazenadas nas filas para processamento posterior, garantindo desacoplamento e resiliência no sistema.",
      "Incorreta. Embora seja possível assinar streams do Kinesis Data Firehose em tópicos SNS, o Kinesis é projetado para processamento em tempo real de grandes volumes de dados. Para o caso de uso apresentado, que envolve desacoplamento e armazenamento temporário de mensagens para processamento posterior, o SQS é mais adequado e econômico do que o Firehose.",
      "Incorreta. O Amazon SQS não é adequado para ser usado como serviço de polling ativo, pois as mensagens precisam ser enviadas para a fila (push) e depois consumidas pelos consumidores. O SQS não gera mensagens automaticamente nem realiza consultas periódicas para detectar novos pedidos.",
      "Incorreta. Apesar da integração entre SNS e Lambda permitir invocar funções Lambda com notificações SNS, o Lambda não armazena mensagens. Se uma função Lambda falhar no processamento, a mensagem pode ser perdida. Para garantir armazenamento e processamento confiável das mensagens, é necessário um serviço de fila como o SQS."
    ]
  },
  {
    "question": "Você possui uma aplicação web hospedada em uma instância EC2 que realiza requisições GET e PUT para objetos armazenados no Amazon Simple Storage Service (S3) utilizando o SDK para PHP. A equipe de segurança, após a revisão final da aplicação em busca de vulnerabilidades, identificou que sua aplicação utiliza chaves de acesso IAM (Access Key e Secret Access Key) codificadas diretamente no código para acessar os serviços AWS. Eles recomendam que você adote uma configuração mais segura, que utilize credenciais temporárias sempre que possível.\n\nQual das opções abaixo pode ser utilizada para atender a esse caso de uso?",
    "options": [
      "Codificar as credenciais diretamente no código da aplicação",
      "Utilizar o AWS Systems Manager Parameter Store",
      "Utilizar variáveis de ambiente",
      "Utilizar uma Role IAM associada à instância EC2 (IAM Instance Role)"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Essa prática é altamente insegura, pois expõe as credenciais no código-fonte, facilitando vazamentos e comprometimento da conta AWS. Além disso, dificulta a rotação de credenciais e não utiliza credenciais temporárias, contrariando a recomendação da equipe de segurança.",
      "Incorreta. O Parameter Store é útil para armazenar dados sensíveis, como senhas e strings de conexão, mas para acessá-lo via SDK você ainda precisa de credenciais válidas. Se as credenciais estiverem codificadas no código, o problema de segurança persiste. Portanto, o Parameter Store não resolve a questão das credenciais temporárias para acesso ao S3 diretamente.",
      "Incorreta. Embora o uso de variáveis de ambiente para armazenar as chaves de acesso seja uma prática melhor do que codificá-las diretamente no código, ainda assim envolve o uso de credenciais estáticas. Além disso, gerenciar variáveis de ambiente em múltiplas instâncias EC2 pode ser trabalhoso e inseguro, especialmente em ambientes dinâmicos e escaláveis.",
      "Correta. Uma Role IAM associada à instância EC2, por meio de um perfil de instância (Instance Profile), permite que a aplicação obtenha credenciais temporárias automaticamente via o serviço de metadados da instância. O SDK AWS utiliza essas credenciais temporárias para autenticar as requisições ao S3, eliminando a necessidade de armazenar chaves estáticas e aumentando significativamente a segurança da aplicação."
    ]
  },
  {
    "question": "Qual é a ordem de execução dos hooks em implantações in-place utilizando o CodeDeploy?",
    "options": [
      "Application Stop -> Before Install -> Validate Service -> Application Start",
      "Application Stop -> Download Bundle -> Before Install -> Install -> After Install -> Application Start -> Validate Service",
      "Before Install -> Application Stop -> Validate Service -> Application Start",
      "Before Install -> Application Stop -> Application Start -> Validate Service",
      "Application Stop -> Before Install -> Application Start -> Validate Service"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O hook 'Validate Service' deve ser executado após o 'Application Start', pois a validação só pode ocorrer depois que o aplicativo estiver rodando novamente, além de estarem faltando hooks importantes no fluxo.",
      "Correta. Essa é a ordem oficial dos hooks para implantações in-place no CodeDeploy. Primeiro, o aplicativo é parado (Application Stop), os arquivos são baixados (Download Bundle), depois são preparados antes da instalação (Before Install), a instalação é realizada (Install), seguida por ações pós-instalação (After Install), o aplicativo é iniciado novamente (Application Start) e, por fim, a validação do serviço é realizada (Validate Service).",
      "Incorreta. Essa sequência está incorreta porque o aplicativo precisa ser parado antes do 'Before Install' e a validação deve ocorrer após o 'Application Start'.",
      "Incorreta. Essa ordem está incorreta porque o hook 'Application Stop' deve ocorrer antes do 'Before Install', já que o aplicativo precisa ser parado antes de preparar a instalação, e os hooks 'Download Bundle', 'Install' e 'After Install' também fazem parte do fluxo oficial.",
      "Incorreta. Essa alternativa simplifica demais o fluxo oficial, omitindo hooks importantes como 'Download Bundle', 'Install' e 'After Install', o que pode causar confusão."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento utiliza o AWS SDK para Java para manter uma aplicação que armazena dados no AWS DynamoDB. A aplicação realiza operações de Scan para retornar vários itens de uma tabela de 25 GB. Não há possibilidade de criar índices para recuperar esses itens de forma previsível. Os desenvolvedores estão tentando obter essas linhas específicas do DynamoDB o mais rápido possível.\n\nQual das opções a seguir pode ser usada para melhorar o desempenho da operação Scan?",
    "options": [
      "Utilizar uma ProjectionExpression",
      "Utilizar uma FilterExpression",
      "Utilizar Scans paralelos",
      "Utilizar uma Query"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Uma ProjectionExpression é uma string que identifica os atributos que você deseja recuperar. Embora reduza a quantidade de dados retornados, ela não acelera a operação Scan em si, pois o Scan ainda precisa percorrer toda a tabela.",
      "Incorreta. A FilterExpression filtra os itens após a operação Scan ser concluída, descartando os que não correspondem ao filtro. Isso não reduz a quantidade de dados lidos nem acelera a operação, pois o consumo de capacidade de leitura permanece o mesmo.",
      "Correta. Por padrão, a operação Scan processa os dados sequencialmente, retornando até 1 MB por chamada. Scans paralelos dividem logicamente a tabela em múltiplos segmentos que podem ser escaneados simultaneamente por diferentes threads ou processos, acelerando significativamente a recuperação dos dados.",
      "Incorreta. A operação Query exige a existência de um índice para recuperar itens de forma eficiente. Como a questão informa que não é possível criar índices para acessar os itens previsivelmente, o uso de Query não é viável neste cenário."
    ]
  },
  {
    "question": "Como Desenvolvedor Full-stack, você está envolvido em todos os aspectos da plataforma de uma empresa, desde o desenvolvimento com PHP e JavaScript até a configuração de bancos de dados NoSQL com o Amazon DynamoDB. Você não se preocupa em receber dados desatualizados do banco e precisa realizar 16 leituras eventualmente consistentes por segundo, com tamanho de 12 KB cada.\n\nQuantas unidades de capacidade de leitura (RCUs) você precisa provisionar?",
    "options": [
      "12",
      "48",
      "24",
      "192"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Este valor subestima a capacidade necessária, pois considera apenas metade da quantidade correta de RCUs para o volume e tamanho das leituras eventualmente consistentes solicitadas.",
      "Incorreta. Esta quantidade é maior do que o necessário, pois não considera corretamente o tamanho do item e o tipo de leitura eventualmente consistente, resultando em superdimensionamento da capacidade.",
      "Correta. Uma unidade de capacidade de leitura (RCU) representa duas leituras eventualmente consistentes por segundo para um item de até 4 KB. Como cada item tem 12 KB, são necessárias 3 RCUs para duas leituras por segundo (12 KB / 4 KB = 3). Para 16 leituras por segundo, o cálculo é 3 * (16 / 2) = 24 RCUs.",
      "Incorreta. Este valor é excessivamente alto e não condiz com o cálculo correto baseado no tamanho do item e no número de leituras eventualmente consistentes por segundo."
    ]
  },
  {
    "question": "Sua implantação do AWS CodeDeploy em instâncias T2 foi bem-sucedida. A nova revisão do aplicativo realiza chamadas de API para o Amazon S3, porém o aplicativo não está funcionando como esperado devido a exceções de autorização. Você foi designado para solucionar o problema.\n\nQual das seguintes ações você deve realizar?",
    "options": [
      "Tornar o bucket S3 público",
      "Corrigir as permissões IAM para a role do serviço CodeDeploy",
      "Habilitar o proxy do CodeDeploy",
      "Corrigir as permissões IAM para a role da instância EC2"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Tornar o bucket S3 público não é uma boa prática de segurança, pois expõe os dados a qualquer usuário na internet, o que pode causar violações de segurança e acesso não autorizado a arquivos sensíveis. O ideal é aplicar o princípio do menor privilégio, concedendo apenas as permissões necessárias para as entidades autorizadas.",
      "Incorreta. O fato de o CodeDeploy ter implantado o aplicativo nas instâncias EC2 indica que não houve problema entre o serviço CodeDeploy e as instâncias. O problema está na comunicação entre as instâncias EC2 e o Amazon S3, portanto ajustar as permissões da role do CodeDeploy não resolverá o problema de autorização.",
      "Incorreta. Não é necessário configurar ou habilitar um proxy no CodeDeploy para resolver problemas de autorização entre a instância EC2 e o S3. O foco deve estar nas permissões IAM da instância EC2 para acessar o bucket S3, e não nas configurações do CodeDeploy.",
      "Correta. Você deve usar uma role IAM para gerenciar credenciais temporárias para aplicativos que rodam em instâncias EC2. Ao usar uma role, não é necessário distribuir credenciais de longo prazo (como chaves de acesso) para a instância. A role fornece permissões temporárias que o aplicativo pode usar ao fazer chamadas para outros recursos AWS, como o S3. Neste caso, é fundamental garantir que a role da instância EC2 tenha as permissões adequadas para acessar o bucket S3."
    ]
  },
  {
    "question": "Seu aplicativo móvel precisa realizar chamadas de API para o DynamoDB. Você não quer armazenar as chaves de acesso e secretas da AWS nos dispositivos móveis e precisa que todas as chamadas ao DynamoDB sejam feitas com uma identidade diferente para cada dispositivo móvel.\n\nQual dos seguintes serviços permite que você alcance esse objetivo?",
    "options": [
      "IAM",
      "Cognito Identity Pools",
      "Cognito User Pools",
      "Cognito Sync"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Criar um usuário IAM para cada dispositivo móvel não é uma prática recomendada nem escalável, pois geraria uma grande quantidade de usuários e dificultaria o gerenciamento das credenciais e permissões.",
      "Correta. O Amazon Cognito Identity Pools fornece credenciais temporárias da AWS para usuários autenticados e não autenticados, permitindo que cada dispositivo móvel tenha uma identidade única para acessar serviços AWS, como o DynamoDB, sem armazenar chaves permanentes no dispositivo.",
      "Incorreta. O Amazon Cognito User Pools serve para autenticar usuários em suas aplicações, fornecendo funcionalidades de cadastro e login. No entanto, ele não fornece credenciais temporárias para acessar outros serviços AWS, como o DynamoDB.",
      "Incorreta. O Cognito Sync é usado para sincronizar dados de perfil do usuário entre dispositivos móveis e web, mas não fornece credenciais para acessar serviços AWS nem gerencia identidades para chamadas de API."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa deseja inserir registros de fornecedores em uma tabela Amazon DynamoDB assim que o fornecedor fizer o upload de um novo arquivo em um bucket Amazon S3.\n\nComo um Associate Developer, qual conjunto de passos você recomendaria para alcançar esse objetivo?",
    "options": [
      "Criar um evento no S3 para invocar uma função Lambda que insira os registros no DynamoDB",
      "Escrever um job cron que execute uma função Lambda em um horário agendado para inserir os registros no DynamoDB",
      "Desenvolver uma função Lambda que faça polling no bucket S3 e então insira os registros no DynamoDB",
      "Configurar um evento com Amazon CloudWatch Events para monitorar o bucket S3 e então inserir os registros no DynamoDB"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O recurso de notificações do Amazon S3 permite configurar eventos que disparam uma função Lambda imediatamente após a criação de um objeto no bucket. Essa função Lambda pode então processar o arquivo e inserir os registros no DynamoDB de forma eficiente e em tempo real.",
      "Incorreta. Executar uma função Lambda em intervalos agendados pode resultar em execuções desnecessárias quando não há novos arquivos para processar, causando desperdício de recursos e aumento da latência na inserção dos registros.",
      "Incorreta. Essa abordagem não é eficiente, pois a função Lambda pode executar polling no bucket S3 em intervalos regulares mesmo quando não há arquivos novos para processar, gerando uso desnecessário de recursos e latência.",
      "Incorreta. O Amazon CloudWatch Events (EventBridge) não pode monitorar diretamente um bucket S3 para eventos de criação de objetos, nem pode inserir registros diretamente no DynamoDB. Ele precisaria acionar uma função Lambda para realizar essa inserção, o que torna essa opção indireta e menos adequada."
    ]
  },
  {
    "question": "Uma organização utiliza a Alexa como assistente inteligente para aumentar a produtividade em toda a empresa. Um grupo de desenvolvedores gerencia Skills personalizadas da Alexa escritas em Node.js para controlar configurações de equipamentos das salas de conferência e iniciar reuniões por ativação por voz. O gerente solicitou que todo o código das funções seja monitorado quanto à taxa de erros, com a possibilidade de criar alarmes baseados nesses dados.\n\nQual das seguintes opções deve ser escolhida? (selecione duas)",
    "options": [
      "AWS CloudTrail",
      "AWS X-Ray",
      "CloudWatch Alarms",
      "AWS Systems Manager (SSM)",
      "CloudWatch Metrics"
    ],
    "correct": [2, 4],
    "detailedExplanations": [
      "Incorreta. O CloudTrail é um serviço de auditoria que registra chamadas de API feitas em sua conta AWS, fornecendo histórico de atividades para fins de segurança e conformidade. Ele não é projetado para monitorar métricas de desempenho ou configurar alarmes baseados em taxas de erro.",
      "Incorreta. O AWS X-Ray é uma ferramenta para análise e depuração de aplicações distribuídas, permitindo rastrear requisições e identificar gargalos ou erros. Apesar de útil para diagnóstico, ele não captura métricas para monitoramento contínuo nem permite a criação direta de alarmes baseados em taxas de erro.",
      "Correta. O CloudWatch Alarms permite monitorar métricas específicas, como taxas de erro, e criar alarmes que disparam ações automáticas ou notificações quando os limites definidos são ultrapassados. É ideal para acompanhar a saúde e desempenho das funções e reagir rapidamente a problemas.",
      "Incorreta. O AWS Systems Manager é usado para gerenciar e automatizar operações em recursos da AWS, como instâncias EC2, buckets S3 e bancos de dados RDS, permitindo agrupar recursos e executar ações. No entanto, ele não é adequado para capturar métricas de erro de funções Lambda ou Skills Alexa nem para configurar alarmes baseados nessas métricas no contexto apresentado.",
      "Correta. O CloudWatch Metrics coleta e armazena métricas operacionais e de desempenho em tempo real, incluindo taxas de erro de funções Lambda. Essas métricas são essenciais para monitoramento contínuo e podem ser usadas como base para criar alarmes no CloudWatch Alarms."
    ]
  },
  {
    "question": "Você está trabalhando em um projeto que possui mais de 100 dependências. Toda vez que o AWS CodeBuild executa uma etapa de build, ele precisa resolver dependências Java a partir de repositórios externos Ivy, o que leva muito tempo. Seu gerente quer acelerar esse processo no AWS CodeBuild.\n\nQual das opções a seguir ajudará a acelerar esse processo com o mínimo esforço?",
    "options": [
      "Fazer cache das dependências no Amazon S3",
      "Reduzir o número de dependências",
      "Usar instâncias EC2 com armazenamento Instance Store para facilitar o cache interno das dependências",
      "Enviar todas as dependências como parte do código-fonte"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS CodeBuild permite configurar cache usando o Amazon S3 para armazenar dependências que não mudam frequentemente. Isso reduz significativamente o tempo gasto baixando dependências em builds subsequentes, acelerando o processo com mínimo esforço de configuração.",
      "Incorreta. Embora reduzir o número de dependências seja uma prática ideal para melhorar o desempenho, muitas vezes você não tem controle sobre isso, pois sua aplicação pode realmente precisar dessas dependências. Portanto, essa opção não é viável para acelerar o build neste cenário.",
      "Incorreta. O armazenamento Instance Store é temporário e ligado fisicamente à instância EC2, sendo ideal para dados transitórios, mas não é aplicável para o cache de dependências no CodeBuild, que é um serviço gerenciado e não utiliza instâncias EC2 diretamente para builds.",
      "Incorreta. Embutir todas as dependências no código-fonte não é uma boa prática, pois isso aumentará o tempo total do build e o tamanho do repositório. Se as dependências não mudam com frequência, é mais eficiente utilizar cache para evitar downloads repetidos."
    ]
  },
  {
    "question": "Sua empresa foi contratada para desenvolver um aplicativo móvel resiliente de votação para um próximo prêmio musical que espera ter entre 5 a 20 milhões de espectadores. O aplicativo móvel de votação será amplamente divulgado meses antes do evento, portanto, espera-se que o sistema suporte milhões de mensagens. Você está configurando filas do Amazon Simple Queue Service (SQS) para sua arquitetura, que devem receber mensagens com tamanhos entre 20 KB e 200 KB.\n\nÉ possível enviar essas mensagens para o SQS?",
    "options": [
      "Sim, o tamanho máximo da mensagem é 256 KB",
      "Não, o tamanho máximo da mensagem é 128 KB",
      "Não, o tamanho máximo da mensagem é 64 KB",
      "Sim, o tamanho máximo da mensagem é 512 KB"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O tamanho mínimo de uma mensagem no SQS é 1 byte, e o tamanho máximo permitido é 262.144 bytes, ou seja, 256 KB, o que suporta mensagens entre 20 KB e 200 KB sem problemas.",
      "Incorreta. O tamanho máximo permitido para mensagens no SQS é maior que 128 KB, sendo 256 KB, portanto mensagens de até 200 KB são aceitas.",
      "Incorreta. O SQS suporta mensagens maiores que 64 KB, com limite máximo de 256 KB, permitindo o envio de mensagens de até 200 KB.",
      "Incorreta. O limite máximo de tamanho para mensagens no SQS é 256 KB, não 512 KB."
    ]
  },
  {
    "question": "Um desenvolvedor está migrando uma aplicação local para a AWS Cloud. Atualmente, a aplicação processa uploads de usuários e os armazena em um diretório local no servidor. Todos esses arquivos enviados devem ser salvos e disponibilizados para todas as instâncias em um grupo de Auto Scaling.\n\nComo um Associate Developer, qual das seguintes opções você recomendaria para este caso de uso?",
    "options": [
      "Usar instâncias EC2 com armazenamento do tipo Instance Store e compartilhar os arquivos via software de sincronização de arquivos.",
      "Usar Amazon S3 e modificar o código da aplicação para que todos os uploads sejam enviados diretamente para o S3.",
      "Usar Amazon EBS como volume de armazenamento e compartilhar os arquivos via software de sincronização de arquivos.",
      "Usar Amazon EBS e configurar a AMI da aplicação para usar um snapshot do mesmo volume EBS ao lançar novas instâncias."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O armazenamento Instance Store é efêmero e os dados são perdidos quando a instância é interrompida ou terminada. Além disso, sincronizar arquivos manualmente entre instâncias aumenta a complexidade e não é recomendado para ambientes dinâmicos como Auto Scaling.",
      "Correta. O Amazon S3 é um serviço de armazenamento de objetos altamente durável, escalável e disponível globalmente. Ao modificar a aplicação para enviar arquivos diretamente ao S3, todos os arquivos ficam centralizados e acessíveis para todas as instâncias do Auto Scaling, eliminando a necessidade de sincronização manual e garantindo alta disponibilidade e escalabilidade.",
      "Incorreta. Embora tecnicamente seja possível usar software de sincronização para compartilhar arquivos entre instâncias com volumes EBS, isso adiciona complexidade significativa, esforço de desenvolvimento e não garante alta disponibilidade ou escalabilidade adequada para um ambiente de Auto Scaling.",
      "Incorreta. O Amazon EBS é vinculado a uma única instância por vez, e usar snapshots para replicar dados não permite compartilhamento em tempo real entre instâncias. Isso resultaria em dados desatualizados e não sincronizados entre as instâncias do Auto Scaling."
    ]
  },
  {
    "question": "Uma empresa deseja adicionar capacidades geoespaciais à camada de cache, junto com funcionalidades de consulta e a capacidade de escalar horizontalmente. A empresa utiliza o Amazon RDS como camada de banco de dados.\n\nQual solução é a mais adequada para esse caso de uso?",
    "options": [
      "Migrar para o Amazon DynamoDB para utilizar o DynamoDB Accelerator (DAX) integrado automaticamente, junto com funcionalidades de consulta",
      "Aproveitar as capacidades oferecidas pelo ElastiCache para Redis com o modo cluster habilitado",
      "Utilizar o cache do CloudFront para atender à demanda de cargas de trabalho crescentes",
      "Aproveitar as capacidades oferecidas pelo ElastiCache para Redis com o modo cluster desabilitado"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o DynamoDB com DAX ofereça cache em memória e alta performance para consultas, a migração do banco de dados para DynamoDB representa um esforço significativo e não é necessária para adicionar capacidades geoespaciais à camada de cache. Além disso, o DynamoDB não possui suporte nativo avançado para consultas geoespaciais comparado ao Redis.",
      "Correta. O Amazon ElastiCache para Redis com modo cluster habilitado oferece escalabilidade horizontal, alta disponibilidade e suporte a funcionalidades avançadas, incluindo capacidades geoespaciais. O modo cluster permite distribuir dados em múltiplos shards, facilitando o aumento da capacidade e desempenho, o que atende perfeitamente ao requisito de escalabilidade horizontal e consultas geoespaciais.",
      "Incorreta. O Amazon CloudFront é uma CDN que reduz a latência e a carga no servidor de origem ao distribuir conteúdo estático e dinâmico em pontos de presença globais. No entanto, ele não oferece capacidades de cache em memória com funcionalidades geoespaciais nem suporte a consultas complexas, que são requisitos do caso de uso.",
      "Incorreta. O modo cluster desabilitado limita a escalabilidade ao dimensionamento vertical (upgrade da instância), não suportando escalabilidade horizontal. Além disso, para ambientes de produção, a ausência de replicação e failover pode comprometer a disponibilidade e a resiliência dos dados."
    ]
  },
  {
    "question": "Você possui uma aplicação baseada em Java rodando em instâncias EC2 com agentes do AWS CodeDeploy instalados. Você está considerando diferentes opções de implantação, sendo uma delas a flexibilidade que permite a implantação incremental das novas versões da aplicação, substituindo as versões existentes nas instâncias EC2. A outra opção é uma estratégia na qual um grupo de Auto Scaling é utilizado para realizar a implantação.\n\nQuais das seguintes opções permitirão que você realize a implantação dessa forma? (Selecione duas)",
    "options": [
      "Implantação Blue/Green",
      "Implantação Pilot Light",
      "Implantação Cattle",
      "Implantação Warm Standby",
      "Implantação In-place"
    ],
    "correct": [0, 4],
    "detailedExplanations": [
      "Correta. Na implantação Blue/Green, um novo conjunto de instâncias é provisionado, e o CodeDeploy instala a versão mais recente da aplicação nelas. O tráfego do balanceador de carga é então redirecionado do conjunto antigo para o novo, permitindo uma troca segura e controlada, ideal para grupos de Auto Scaling.",
      "Incorreta. Implantação Pilot Light não é uma opção válida do CodeDeploy. O termo \"Pilot Light\" refere-se a uma estratégia de Recuperação de Desastres onde uma parte limitada da infraestrutura crítica é replicada para garantir rápida recuperação, não para implantações incrementais ou uso com Auto Scaling.",
      "Incorreta. \"Cattle Deployment\" não é um termo oficial do CodeDeploy e não representa uma estratégia válida para implantações. É um termo coloquial que se refere a tratar servidores como recursos descartáveis, mas não é uma opção de implantação reconhecida.",
      "Incorreta. Warm Standby não é uma opção válida do CodeDeploy. É um termo usado em cenários de Recuperação de Desastres, onde um ambiente funcional em escala reduzida está sempre ativo para rápida ativação em caso de falha, não para implantações de aplicações.",
      "Correta. Na implantação In-place, a aplicação em cada instância do grupo de implantação é parada, a nova versão é instalada e a aplicação é reiniciada e validada. Pode-se usar um balanceador de carga para remover a instância do tráfego durante a atualização, garantindo implantação incremental e substituição das versões existentes."
    ]
  },
  {
    "question": "Uma empresa mantém uma aplicação altamente disponível que recebe tráfego HTTPS de dispositivos móveis e navegadores web. O principal desenvolvedor deseja configurar o balanceador de carga para rotear o tráfego dos servidores web para smart.com/api e dos dispositivos móveis para smart.com/mobile. Um outro desenvolvedor sugere que essa recomendação anterior não é necessária e que as requisições deveriam ser enviadas para api.smart.com e mobile.smart.com, respectivamente.\n\nQuais das seguintes opções de roteamento foram discutidas no caso apresentado? (selecione duas)",
    "options": [
      "Baseado em host",
      "Baseado no IP do cliente",
      "Baseado em caminho",
      "Versão do navegador web",
      "Valor de cookie"
    ],
    "correct": [0, 2],
    "detailedExplanations": [
      "Correta. O roteamento baseado em host permite criar regras no Application Load Balancer que direcionam o tráfego conforme o nome do domínio presente no cabeçalho Host. Por exemplo, requisições para api.smart.com podem ser enviadas para um grupo de destino, enquanto mobile.smart.com para outro, exatamente como sugerido pela segunda recomendação do desenvolvedor.",
      "Incorreta. O roteamento não é feito com base no endereço IP do cliente. Essa opção foi incluída apenas para confundir, pois não é suportada para roteamento em Application Load Balancers.",
      "Correta. O roteamento baseado em caminho permite criar regras que encaminham o tráfego conforme o caminho da URL, como /api e /mobile, para diferentes grupos de destino. Essa abordagem corresponde à primeira recomendação do desenvolvedor, que deseja rotear o tráfego para smart.com/api e smart.com/mobile.",
      "Incorreta. O roteamento não é baseado na versão do navegador do cliente. Essa opção não faz sentido para balanceadores de carga e não está relacionada ao caso apresentado.",
      "Incorreta. Os Application Load Balancers suportam apenas cookies gerados pelo próprio balanceador para sessões persistentes (sticky sessions), e não permitem modificações nesses cookies. Além disso, o roteamento baseado em valor de cookie não se aplica ao cenário descrito."
    ]
  },
  {
    "question": "Sua empresa gerencia bancos de dados MySQL em instâncias EC2 para ter controle total. Aplicações em outras instâncias EC2, gerenciadas por um Auto Scaling Group (ASG), fazem requisições a esses bancos para obter informações que são exibidas em dashboards acessados por celulares, tablets e navegadores web.\n\nSeu gerente deseja escalar o Auto Scaling Group com base no número de requisições por minuto. Como você pode alcançar esse objetivo?",
    "options": [
      "Habilitar o monitoramento detalhado e usar isso para escalar seu ASG",
      "Anexar um Elastic File Storage adicional",
      "Anexar um Elastic Load Balancer",
      "Criar uma métrica personalizada no CloudWatch e configurar um alarme para escalar seu ASG"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O monitoramento detalhado do CloudWatch fornece métricas com resolução de 1 minuto para recursos da AWS, mas não captura métricas específicas de nível de aplicação, como o número de requisições por minuto ao banco de dados. Portanto, não é adequado para escalar o ASG com base nesse critério.",
      "Incorreta. O Amazon Elastic File System (EFS) é um serviço de armazenamento de arquivos elástico, escalável e totalmente gerenciado, projetado para armazenar dados e compartilhá-los entre instâncias. Ele não oferece métricas relacionadas ao número de requisições por minuto e não é utilizado para escalar automaticamente grupos de instâncias.",
      "Incorreta. Um Elastic Load Balancer distribui o tráfego entre instâncias e monitora a saúde delas, mas não escala automaticamente o número de instâncias. Ele não fornece métricas para escalar o ASG com base no número de requisições por minuto.",
      "Correta. Para escalar o Auto Scaling Group com base no número de requisições por minuto, é necessário criar uma métrica personalizada no CloudWatch que capture essa informação, pois não existe uma métrica padrão para isso. Com essa métrica, é possível configurar um alarme que acione o escalonamento automático do ASG conforme a demanda."
    ]
  },
  {
    "question": "Você configurou uma Network ACL e um Security Group para o balanceador de carga e instâncias Amazon EC2 para permitir tráfego de entrada na porta 80. No entanto, os usuários ainda não conseguem acessar seu site após o lançamento.\n\nQual configuração adicional é necessária para que o site fique acessível a todos os usuários pela internet?",
    "options": [
      "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 1025 - 5000",
      "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 32768 - 61000",
      "Adicionar uma regra ao Security Group permitindo tráfego de saída na porta 80",
      "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 1024 - 65535"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora sistemas Windows até o Server 2003 usem a faixa de portas efêmeras 1025-5000, o Elastic Load Balancing e a maioria dos clientes modernos utilizam a faixa mais ampla de 1024-65535. Limitar a regra a 1025-5000 pode bloquear respostas legítimas de clientes que usam outras portas efêmeras.",
      "Incorreta. Essa faixa de portas efêmeras é usada por muitos kernels Linux, incluindo o Amazon Linux, mas não cobre todas as portas efêmeras usadas por outros sistemas operacionais ou pelo Elastic Load Balancing, que utiliza a faixa 1024-65535. Portanto, essa regra é insuficiente para garantir o acesso universal ao site.",
      "Incorreta. Security Groups são stateful, o que significa que se o tráfego de entrada na porta 80 está permitido, as respostas de saída são automaticamente permitidas, independentemente das regras de saída. Portanto, não é necessário adicionar uma regra de saída na porta 80 no Security Group para que o site funcione.",
      "Correta. A Network ACL é uma camada opcional de segurança para sua VPC que funciona como um firewall controlando o tráfego de entrada e saída dos subnets. Como as Network ACLs são stateless, é necessário permitir explicitamente o tráfego de saída nas portas efêmeras (1024-65535) para que as respostas às requisições HTTP na porta 80 possam retornar aos clientes, garantindo assim a comunicação bidirecional."
    ]
  },
  {
    "question": "Uma empresa de TI está utilizando o AWS CloudFormation para gerenciar sua infraestrutura de TI. Ela criou um template para provisionar uma stack com uma VPC e uma subnet. O valor de saída (output) dessa subnet precisa ser utilizado em outra stack.\n\nComo um Associate Developer, qual das seguintes opções você sugeriria para fornecer essa informação para outra stack?",
    "options": [
      "Usar Fn::ImportValue",
      "Usar o campo 'Expose' na seção Output do template da stack",
      "Usar Fn::Transform",
      "Usar o campo 'Export' na seção Output do template da stack"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A função Fn::ImportValue é usada na stack consumidora para importar valores que já foram exportados por outra stack, mas não é o método para disponibilizar o valor inicialmente. Portanto, não serve para fornecer o valor para outra stack, mas sim para consumi-lo.",
      "Incorreta. O campo 'Expose' não existe na especificação do CloudFormation e é apenas uma opção fictícia usada como distração. Não há suporte para esse campo na seção Output.",
      "Incorreta. A função Fn::Transform é usada para especificar macros que realizam processamento personalizado em partes do template, como transformações complexas ou substituições. Ela não é adequada para compartilhar valores entre stacks.",
      "Correta. Para compartilhar valores entre stacks, é necessário exportar os valores de saída de uma stack usando o campo 'Export' na seção Output do template. Isso torna o valor disponível para outras stacks na mesma conta e região, que podem então importar esse valor usando Fn::ImportValue."
    ]
  },
  {
    "question": "Considere a seguinte política IAM:\n\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": \"s3:*\",\n      \"Resource\": \"arn:aws:s3:::EXAMPLE-BUCKET/private*\"\n    },\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:PutObject\", \"s3:GetObject\"],\n      \"Resource\": \"arn:aws:s3:::EXAMPLE-BUCKET/*\"\n    }\n  ]\n}\n\nQual das seguintes afirmações está correta de acordo com a política apresentada?",
    "options": [
      "A política concede acesso PutObject e GetObject a todos os objetos no bucket EXAMPLE-BUCKET e também concede acesso a todas as ações do S3 para objetos que começam com \"private\" no bucket EXAMPLE-BUCKET.",
      "A política concede acesso PutObject e GetObject a todos os objetos no bucket EXAMPLE-BUCKET, exceto aos objetos que começam com \"private\".",
      "A política concede acesso PutObject e GetObject a todos os buckets, exceto ao bucket EXAMPLE-BUCKET/private.",
      "A política nega acesso PutObject e GetObject a todos os buckets, exceto ao bucket EXAMPLE-BUCKET/private."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A política explicitamente nega todas as ações do S3 para objetos que começam com \"private\" no bucket EXAMPLE-BUCKET, portanto não concede acesso para esses objetos. Essa alternativa contradiz a negação explícita da política.",
      "Correta. O primeiro statement nega todas as ações do S3 para objetos cujo nome começa com \"private\" no bucket EXAMPLE-BUCKET. O segundo statement permite PutObject e GetObject para todos os objetos do bucket EXAMPLE-BUCKET. Como a negação tem precedência, o resultado final é permitir PutObject e GetObject para todos os objetos, exceto aqueles que começam com \"private\".",
      "Incorreta. A política não concede acesso a todos os buckets, mas apenas ao bucket EXAMPLE-BUCKET, com exceção dos objetos que começam com \"private\". A negação explícita impede ações em objetos que iniciam com \"private\" dentro desse bucket.",
      "Incorreta. A política não nega acesso a todos os buckets, mas apenas nega todas as ações do S3 para objetos que começam com \"private\" dentro do bucket EXAMPLE-BUCKET. Não há negação ou permissão para outros buckets."
    ]
  },
  {
    "question": "Um desenvolvedor implementou uma função Lambda que insere dados em um banco de dados RDS MySQL com o seguinte código Python:\n\ndef handler(event, context):\n  mysql = mysqlclient.connect()\n  data = event['data']\n  mysql.execute(f\"INSERT INTO foo (bar) VALUES (${data});\")\n  mysql.close()\n  return\n\nNa primeira execução, a função Lambda demora 2 segundos para rodar. Na segunda execução e nas subsequentes, a função demora 1,9 segundos para executar.\n\nO que pode ser feito para melhorar o tempo de execução da função Lambda?",
    "options": [
      "Aumentar a memória RAM da função Lambda",
      "Atualizar o tipo da instância MySQL",
      "Mover a conexão com o banco de dados para fora do handler",
      "Alterar o runtime para Node.js"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora aumentar a memória também aumente a CPU disponível, o gargalo principal é a criação da conexão com o banco, que é um processo custoso independente da memória ou CPU alocada. Portanto, essa ação não trará melhorias significativas no tempo de execução.",
      "Incorreta. O gargalo está na criação e fechamento da conexão com o banco de dados, não na capacidade da instância MySQL em si. Atualizar a instância não resolverá o problema de latência da conexão.",
      "Correta. A cada execução da função Lambda, a conexão com o banco de dados é criada e fechada, o que é custoso em termos de tempo. Ao mover a conexão para fora do handler, ela é criada uma única vez no contexto de execução da função e reutilizada em chamadas subsequentes, reduzindo o tempo total de execução.",
      "Incorreta. Reescrever a função em outro runtime não garante melhoria de desempenho, pois o problema está relacionado à forma como a conexão com o banco é gerenciada, não ao runtime utilizado."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico implementou o AWS CodeDeploy como parte de sua estratégia de CI/CD na nuvem AWS. A empresa configurou rollback automático durante a implantação de uma nova versão de sua aplicação principal em instâncias Amazon EC2.\n\nO que acontece se a implantação da nova versão falhar?",
    "options": [
      "A última implantação conhecida que funcionava é automaticamente restaurada usando um snapshot armazenado no Amazon S3.",
      "Uma nova implantação da última versão conhecida que funcionava da aplicação é realizada com um novo ID de implantação.",
      "O CodeDeploy altera os registros de alias do Route 53 para apontar novamente para a implantação verde conhecida como boa e encerra a implantação azul que falhou.",
      "O AWS CodePipeline promove a implantação mais recente que teve sucesso (status SUCCEEDED) para produção."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS CodeDeploy não utiliza snapshots armazenados no Amazon S3 para restaurar implantações, portanto essa alternativa está incorreta.",
      "Correta. O AWS CodeDeploy realiza rollback redeployando a revisão anterior como uma nova implantação, gerando um novo ID de implantação. Isso evita downtime e mantém o controle das versões implantadas.",
      "Incorreta. O cenário não menciona o uso de implantação blue/green, logo essa alternativa é um distrator e não representa o comportamento padrão do CodeDeploy.",
      "Incorreta. O cenário não menciona o uso do AWS CodePipeline, portanto essa alternativa é um distrator e não se aplica ao comportamento do CodeDeploy."
    ]
  },
  {
    "question": "Você é um administrador de sistemas cuja empresa recentemente migrou sua aplicação de produção para a AWS e transferiu os dados do MySQL para o AWS DynamoDB. Agora, você está adicionando novas tabelas no DynamoDB e precisa permitir que sua aplicação consulte os dados usando a chave primária e uma chave alternativa. Essa opção deve ser configurada no momento da criação da tabela, pois não pode ser alterada posteriormente.\n\nQual das seguintes ações você deve realizar?",
    "options": [
      "Criar um LSI (Índice Secundário Local)",
      "Criar um GSI (Índice Secundário Global)",
      "Migrar para outro banco de dados que não seja DynamoDB",
      "Executar uma operação Scan"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O LSI permite criar índices secundários locais que compartilham a mesma chave de partição da tabela base, mas possuem uma chave de ordenação alternativa. Esse índice deve ser definido no momento da criação da tabela e não pode ser adicionado posteriormente, atendendo exatamente ao requisito da questão.",
      "Incorreta. O GSI permite criar índices com chaves de partição e ordenação diferentes da tabela base, e pode ser criado ou modificado após a criação da tabela. Porém, o requisito da questão especifica que a opção deve ser definida no momento da criação da tabela, o que não é o caso do GSI.",
      "Incorreta. Migrar para outro banco de dados pode demandar mudanças significativas no código e na arquitetura da aplicação, não sendo uma solução prática para o requisito apresentado.",
      "Incorreta. A operação Scan lê todos os itens da tabela, o que não é eficiente para consultas específicas por chave. Além disso, Scan não cria ou altera índices, portanto não atende à necessidade de permitir consultas por chave alternativa."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento habilitou e configurou o CloudTrail para todos os buckets Amazon S3 usados em um projeto. O gerente do projeto é o proprietário de todos os buckets S3 utilizados. No entanto, o gerente percebeu que não recebeu nenhum log de acesso a nível de objeto quando os dados foram lidos por outra conta AWS.\n\nQual poderia ser a causa desse comportamento/erro?",
    "options": [
      "O CloudTrail sempre entrega os logs de acesso a nível de objeto para o solicitante e não para o proprietário do objeto.",
      "O CloudTrail precisa ser configurado em ambas as contas AWS para receber os logs de acesso em acessos entre contas.",
      "Os metadados do bucket estão em um estado inválido e precisam ser corrigidos pelo proprietário do bucket através do console AWS para resolver o problema.",
      "O proprietário do bucket também precisa ser o proprietário do objeto para receber os logs de acesso ao objeto."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora o CloudTrail entregue os logs de acesso a nível de objeto para o solicitante, ele também entrega esses logs para o proprietário do bucket, desde que este tenha permissões para as mesmas ações de API no objeto.",
      "Incorreta. O CloudTrail não precisa ser configurado em ambas as contas para registrar acessos entre contas. A configuração no bucket e as permissões adequadas são suficientes para que o proprietário do bucket receba os logs.",
      "Incorreta. Não há evidências de que metadados inválidos do bucket causem a ausência dos logs de acesso a nível de objeto. Essa opção é apenas um distrator.",
      "Correta. Se o proprietário do bucket também for o proprietário do objeto, ele receberá os logs de acesso ao objeto. Caso contrário, o proprietário do bucket deve obter permissões, por meio da ACL do objeto, para as mesmas ações de API no objeto para receber os logs de acesso correspondentes."
    ]
  },
  {
    "question": "Você está se preparando para um evento para apresentar sua skill Alexa escrita em JavaScript. Durante os testes dos comandos de ativação por voz, percebe que algumas intents não estão sendo invocadas corretamente e está tendo dificuldade para entender o que está acontecendo. Você incluiu o código console.log(JSON.stringify(this.event)) na esperança de obter mais detalhes sobre a requisição para sua skill Alexa.\n\nVocê gostaria que os logs fossem armazenados em um bucket do Amazon Simple Storage Service (S3) chamado MyAlexaLog. Como você deve proceder para alcançar esse objetivo?",
    "options": [
      "Exportar manualmente os logs do CloudWatch para o bucket S3 MyAlexaLog usando a funcionalidade de exportação de logs",
      "Utilizar o AWS Glue para extrair os logs do CloudWatch e armazená-los no bucket S3 MyAlexaLog",
      "Configurar uma função Lambda para processar os logs do CloudWatch e enviá-los ao bucket S3 MyAlexaLog",
      "Utilizar o Amazon Kinesis Data Firehose para capturar os logs do CloudWatch e entregá-los no bucket S3 MyAlexaLog",
      "Configurar uma integração direta do CloudWatch Logs com o bucket S3 MyAlexaLog para exportação automática dos logs"
    ],
    "correct": [0, 2, 3],
    "detailedExplanations": [
      "Correta. O CloudWatch Logs permite exportar os logs manualmente para um bucket S3, porém essa exportação não é automática nem em tempo real.",
      "Incorreta. O AWS Glue é um serviço de ETL para preparação de dados e não é indicado para capturar ou armazenar logs diretamente do CloudWatch em S3.",
      "Correta. É possível criar uma função Lambda que seja acionada pelos logs do CloudWatch para processá-los e armazená-los automaticamente no bucket S3 desejado.",
      "Correta. O Kinesis Data Firehose pode ser configurado para receber logs do CloudWatch e entregá-los automaticamente em um bucket S3 para armazenamento e análise.",
      "Incorreta. O CloudWatch Logs não possui integração nativa para enviar logs diretamente e automaticamente para um bucket S3. A exportação automática requer o uso de Lambda ou Kinesis Firehose."
    ]
  },
  {
    "question": "Engenheiros de DevOps estão desenvolvendo um sistema de processamento de pedidos onde notificações são enviadas para um departamento sempre que um pedido é realizado para um produto. O sistema também envia notificações idênticas do novo pedido para um módulo de processamento que permite que instâncias EC2 realizem o atendimento do pedido. Em caso de erros no processamento, as mensagens devem poder ser reprocessadas posteriormente. O sistema de processamento de pedidos deve escalar de forma transparente, sem necessidade de provisionamento manual ou programático de recursos.\n\nQual das seguintes soluções pode ser usada para atender a esse caso de uso da forma mais econômica?",
    "options": [
      "SNS + Kinesis",
      "SNS + SQS",
      "SQS + SES",
      "SNS + Lambda"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Amazon Kinesis Data Streams é usado para coletar e processar grandes volumes de dados em tempo real, mas exige provisionamento manual de shards para escalar e pode gerar custos elevados. Além disso, o Kinesis não oferece escalabilidade totalmente transparente no modo padrão, o que o torna menos adequado para este caso de uso que requer escalabilidade automática e custo-eficiência.",
      "Correta. O Amazon SNS permite o envio de notificações para múltiplos assinantes, incluindo filas SQS, funções Lambda e sistemas distribuídos, suportando o padrão fan-out. O Amazon SQS é um serviço de fila totalmente gerenciado que possibilita desacoplar e escalar sistemas distribuídos e aplicações serverless. Ele permite o reprocessamento de mensagens em caso de falhas, além de escalabilidade transparente sem necessidade de provisionamento manual. Essa combinação atende perfeitamente ao requisito de enviar notificações para múltiplos destinos e permitir o reprocessamento das mensagens, garantindo alta escalabilidade e custo-eficiência.",
      "Incorreta. O Amazon SES é um serviço de envio de e-mails e não se encaixa no fluxo de processamento de mensagens para múltiplos consumidores. Além disso, o SQS permite apenas um consumidor por mensagem, o que impede o envio simultâneo de notificações para o departamento e o módulo de processamento, inviabilizando o requisito de múltiplos consumidores.",
      "Incorreta. Embora o Amazon SNS possa invocar funções Lambda para processar mensagens, as instâncias EC2 não podem consumir diretamente mensagens de funções Lambda. Portanto, não é possível que as instâncias EC2 processem as notificações via Lambda, o que inviabiliza o atendimento do requisito de processamento pelo módulo EC2."
    ]
  },
  {
    "question": "Um sistema de votação hospedado localmente foi recentemente migrado para a AWS para reduzir custos, ganhar escalabilidade e atender melhor milhares de usuários simultâneos. Quando o estado de um recurso AWS muda, ele gera um evento que precisa acionar uma função AWS Lambda. O recurso AWS cujo estado muda e a função AWS Lambda não possuem integração direta.\n\nQual dos seguintes métodos pode ser usado para acionar a função AWS Lambda?",
    "options": [
      "Regras do CloudWatch Events com AWS Lambda",
      "Jobs Cron para acionar a função AWS Lambda e verificar o estado do seu serviço",
      "Abrir um chamado de suporte com a AWS",
      "Fontes personalizadas do AWS Lambda"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon CloudWatch Events (atualmente Amazon EventBridge) permite criar regras que detectam mudanças no estado de recursos AWS e acionam funções Lambda automaticamente. É a forma recomendada e nativa para integrar eventos de recursos que não possuem integração direta com Lambda.",
      "Incorreta. Utilizar jobs Cron exigiria um servidor adicional para executar essas tarefas agendadas, o que aumenta a complexidade e o custo. Em vez disso, é mais eficiente usar expressões Cron diretamente com o Amazon CloudWatch Events (EventBridge) para disparar a função Lambda de forma nativa e escalável.",
      "Incorreta. Embora seja possível abrir um chamado de suporte, a equipe da AWS não configurará uma integração personalizada para você. Eles podem orientar sobre como criar regras de eventos no CloudWatch para acionar a Lambda, mas a configuração deve ser feita pelo cliente.",
      "Incorreta. Essa opção é fictícia e foi inserida como um distrator. Não existe um conceito oficial chamado 'Fontes personalizadas do AWS Lambda' para acionar funções Lambda diretamente."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento está considerando o Amazon ElastiCache para Redis como solução de cache em memória para seu banco de dados relacional.\n\nQuais das seguintes opções estão corretas ao configurar o ElastiCache? (Selecione duas)",
    "options": [
      "Se você não tiver réplicas e um nó falhar, não haverá perda de dados ao usar o Redis com o modo cluster habilitado.",
      "Ao usar o Redis com o modo cluster habilitado, você não pode promover manualmente nenhum dos nós réplica para primário.",
      "Todos os nós em um cluster Redis devem estar na mesma região.",
      "Você pode escalar a capacidade de escrita do Redis adicionando nós réplica.",
      "Ao usar o Redis com modo cluster habilitado, mecanismos de replicação assíncrona são usados para manter as réplicas sincronizadas com o primário. Se o modo cluster estiver desabilitado, a replicação é feita de forma síncrona."
    ],
    "correct": [1, 2],
    "detailedExplanations": [
      "Incorreta. Se não houver réplicas e um nó falhar no modo cluster habilitado, haverá perda de todos os dados armazenados naquele shard. A ausência de réplicas implica risco de perda de dados em caso de falha.",
      "Correta. Quando o modo cluster está habilitado no Redis, existem limitações específicas, incluindo a impossibilidade de promover manualmente um nó réplica para primário. A promoção automática e a gestão do cluster são feitas internamente pelo serviço.",
      "Correta. Independentemente do modo cluster estar habilitado ou não, todos os nós do cluster Redis devem residir na mesma região AWS para garantir baixa latência e consistência do cluster.",
      "Incorreta. Adicionar nós réplica aumenta apenas a capacidade de leitura do cluster Redis. A capacidade de escrita não é escalada por meio de réplicas, pois todas as gravações são direcionadas ao nó primário.",
      "Incorreta. Tanto no modo cluster habilitado quanto desabilitado, a replicação entre o primário e as réplicas é assíncrona. Não existe replicação síncrona no Redis ElastiCache, o que significa que as réplicas podem estar ligeiramente defasadas em relação ao primário."
    ]
  },
  {
    "question": "Você está planejando construir um conjunto de instâncias EC2 otimizadas para EBS para lidar com a carga da sua nova aplicação. Devido a requisitos de conformidade de segurança, sua organização deseja que quaisquer strings secretas usadas na aplicação sejam criptografadas para evitar a exposição dos valores em texto claro.\n\nA solução requer que os eventos de descriptografia sejam auditados e que as chamadas de API sejam simples. Como isso pode ser alcançado? (selecione duas opções)",
    "options": [
      "Auditar usando AWS CloudTrail",
      "Armazenar o segredo como PlainText no AWS Systems Manager Parameter Store",
      "Criptografar primeiro com AWS KMS e depois armazenar no Parameter Store",
      "Auditar usando SSM Audit Trail",
      "Armazenar o segredo como SecureString no AWS Systems Manager Parameter Store"
    ],
    "correct": [0, 4],
    "detailedExplanations": [
      "Correta. O AWS CloudTrail registra todas as chamadas de API feitas para serviços AWS, incluindo chamadas para Systems Manager Parameter Store e AWS KMS, permitindo auditoria detalhada dos eventos de descriptografia e acesso aos segredos.",
      "Incorreta. Armazenar segredos em texto simples no Parameter Store não é seguro e expõe os valores sensíveis, violando os requisitos de segurança e conformidade.",
      "Incorreta. Embora essa abordagem funcione, ela exige chamadas adicionais de API para descriptografar manualmente os valores, tornando o processo mais complexo do que o uso direto de SecureString no Parameter Store, o que não atende ao requisito de simplicidade nas chamadas de API.",
      "Incorreta. 'SSM Audit Trail' não é um serviço ou funcionalidade existente da AWS; esta opção foi criada como um distrator e não pode ser usada para auditoria de eventos de descriptografia.",
      "Correta. O Parameter Store permite armazenar parâmetros do tipo SecureString, que são automaticamente criptografados usando AWS KMS. Isso simplifica a recuperação do segredo com uma única chamada de API e garante que os valores estejam protegidos em repouso."
    ]
  },
  {
    "question": "Uma empresa de TI utiliza uma política de implantação blue/green para provisionar novas instâncias Amazon EC2 em um Auto Scaling Group atrás de um novo Application Load Balancer para cada nova versão da aplicação. A configuração atual exige que os usuários façam login após cada nova implantação.\n\nComo um Associate Developer, qual conselho você daria para a empresa resolver esse problema?",
    "options": [
      "Usar multicast para replicar as informações de sessão",
      "Usar ElastiCache para manter as sessões dos usuários",
      "Habilitar sessões sticky (sessões persistentes) no Application Load Balancer",
      "Usar atualizações rolling (rolling updates) em vez de uma implantação blue/green"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O uso de multicast para replicação de sessões não é suportado nem recomendado em ambientes AWS, especialmente em Auto Scaling Groups e balanceadores de carga, e foi incluído apenas como uma alternativa para confundir.",
      "Correta. O Amazon ElastiCache permite configurar e escalar facilmente armazenamentos de dados em memória compatíveis com Redis ou Memcached, que podem ser usados para armazenar sessões de usuários de forma centralizada. Isso abstrai as sessões dos servidores web individuais, garantindo que as sessões sejam mantidas mesmo após novas implantações e troca de instâncias.",
      "Incorreta. Como o Application Load Balancer é substituído a cada nova implantação na estratégia blue/green, manter sessões sticky no ALB não funcionará, pois o balanceador de carga é trocado, causando perda da persistência da sessão.",
      "Incorreta. Atualizações rolling dividem as instâncias em lotes e atualizam uma parte por vez, o que pode causar interrupções nas sessões dos usuários, pois as instâncias que mantêm as sessões podem ser removidas temporariamente do balanceador. Portanto, essa abordagem não resolve o problema de manter sessões entre implantações."
    ]
  },
  {
    "question": "Você possui um Amazon Kinesis Data Stream com 10 shards e, pelas métricas, está bem abaixo da utilização máxima de throughput de 10 MB por segundo para envio de dados. Você envia 3 MB por segundo, mas ainda assim recebe frequentemente erros ProvisionedThroughputExceededException.\n\nQual é a causa mais provável desse problema?",
    "options": [
      "As métricas demoram para atualizar.",
      "O período de retenção dos dados é muito longo.",
      "Você possui shards demais.",
      "A chave de partição selecionada não está suficientemente distribuída."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. As métricas do Kinesis Data Streams são disponibilizadas pelo Amazon CloudWatch e atualizam com frequência suficiente para monitoramento em tempo real. Esse erro não é causado por atraso na atualização das métricas.",
      "Incorreta. O período de retenção dos dados no Kinesis Data Streams pode ser de até 365 dias e não impacta diretamente na ocorrência de erros ProvisionedThroughputExceededException.",
      "Incorreta. Ter shards em excesso não causa erros de throughput; na verdade, isso aumentaria a capacidade. Se houvesse um problema relacionado ao número de shards, o erro seria LimitExceededException, não ProvisionedThroughputExceededException.",
      "Correta. O Kinesis Data Streams utiliza a chave de partição para distribuir os dados entre os shards. Se a chave de partição não for bem distribuída, os dados se concentram em poucos shards, causando sobrecarga e erros de throughput mesmo que o uso total do stream esteja abaixo do limite."
    ]
  },
  {
    "question": "Uma empresa deseja migrar o código da aplicação existente de um repositório GitHub para o AWS CodeCommit.\n\nComo um AWS Certified Developer – Associate, qual das seguintes opções você recomendaria para migrar o repositório clonado para o CodeCommit via HTTPS?",
    "options": [
      "Usar a chave secreta de acesso e o ID da chave de acesso de um usuário IAM",
      "Usar credenciais Git geradas a partir do IAM",
      "Usar autenticação oferecida pelos tokens seguros do GitHub",
      "Usar autenticação multifator (MFA) do IAM"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. As chaves de acesso são credenciais de longo prazo para um usuário IAM ou para o usuário root da conta AWS, usadas para assinar requisições programáticas via AWS CLI ou SDK. Entretanto, para conexões HTTPS ao CodeCommit, o uso direto dessas chaves não é recomendado nem suportado para autenticação Git. A prática recomendada é usar credenciais Git específicas geradas para o IAM.",
      "Correta. Repositórios CodeCommit são baseados em Git e suportam autenticação via credenciais Git específicas geradas no console IAM. Essa é a forma recomendada para autenticar conexões HTTPS ao CodeCommit, pois permite usar um nome de usuário e senha estáticos que funcionam com Git e ferramentas de desenvolvimento que suportam HTTPS. Além disso, o uso de um usuário IAM para criar e gerenciar essas credenciais é a prática recomendada pela AWS.",
      "Incorreta. Tokens de acesso pessoal (PATs) do GitHub são usados para autenticação na API do GitHub ou na linha de comando para repositórios GitHub. Essa opção é específica para GitHub e não é válida para autenticação em repositórios AWS CodeCommit, portanto não é adequada para a migração.",
      "Incorreta. A autenticação multifator (MFA) adiciona uma camada extra de segurança para o login em consoles e serviços AWS, solicitando um código adicional além da senha. No entanto, o MFA não é um método de autenticação suportado para conexões Git HTTPS ao CodeCommit, portanto não é aplicável para essa migração."
    ]
  },
  {
    "question": "Você está projetando uma aplicação de alto desempenho que requer milhões de conexões simultâneas. Você possui várias instâncias EC2 executando servidores web Apache2 e a aplicação precisa capturar o endereço IP de origem e a porta de origem do usuário sem utilizar o cabeçalho X-Forwarded-For.\n\nQual das seguintes opções atenderá a essa necessidade?",
    "options": [
      "Elastic Load Balancer",
      "Classic Load Balancer",
      "Network Load Balancer",
      "Application Load Balancer"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Elastic Load Balancer (ELB) é o nome do serviço que engloba diferentes tipos de balanceadores de carga, incluindo Network, Application e Classic Load Balancers. Portanto, não é uma opção específica que atenda diretamente à necessidade descrita.",
      "Incorreta. O Classic Load Balancer é um balanceador de carga básico que distribui o tráfego entre instâncias EC2, mas não oferece suporte avançado para preservar o IP e a porta de origem do cliente sem o uso de X-Forwarded-For. Além disso, é uma tecnologia mais antiga e menos eficiente para cenários de alto desempenho.",
      "Correta. O Network Load Balancer opera na camada 4 (transporte) do modelo OSI e é capaz de lidar com milhões de conexões por segundo. Ele mantém as conexões TCP intactas, permitindo que o endereço IP e a porta de origem do cliente sejam preservados sem a necessidade do cabeçalho X-Forwarded-For, ideal para aplicações que exigem alta performance e rastreamento da origem do tráfego.",
      "Incorreta. O Application Load Balancer opera na camada 7 (aplicação) do modelo OSI e é projetado para roteamento baseado em conteúdo, como URLs e cabeçalhos HTTP. Ele não preserva diretamente o endereço IP e a porta de origem do cliente, dependendo do cabeçalho X-Forwarded-For para essa informação, o que não atende ao requisito da pergunta."
    ]
  },
  {
    "question": "Uma empresa de TI possui uma aplicação web rodando em instâncias Amazon EC2 que necessita de acesso somente leitura a uma tabela do Amazon DynamoDB.\n\nComo um profissional com certificação AWS Certified Developer – Associate, qual a solução recomendada seguindo as melhores práticas para atender a essa necessidade?",
    "options": [
      "Executar o código da aplicação utilizando as credenciais do usuário root da conta AWS para garantir acesso total a todos os serviços AWS.",
      "Criar um novo usuário IAM com chaves de acesso. Anexar uma política inline ao usuário com acesso somente leitura ao DynamoDB. Inserir as chaves no código da aplicação e, por segurança, redeployar o código sempre que as chaves forem rotacionadas.",
      "Criar um usuário IAM com acesso de Administrador e configurar as credenciais AWS desse usuário na instância EC2 em questão.",
      "Criar uma função IAM com a política AmazonDynamoDBReadOnlyAccess e vinculá-la ao perfil da instância EC2."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Utilizar as credenciais do usuário root é altamente desaconselhado por questões de segurança, pois expõe a conta a riscos críticos. O usuário root deve ser usado apenas para tarefas administrativas específicas e nunca para operações diárias ou acesso programático.",
      "Incorreta. Embora funcione, essa abordagem viola as melhores práticas de segurança da AWS, pois envolve armazenar credenciais estáticas no código da aplicação, aumentando o risco de exposição. Além disso, a necessidade de redeployar o código a cada rotação das chaves gera complexidade operacional desnecessária.",
      "Incorreta. Conceder privilégios administrativos amplos para uma aplicação que necessita apenas de acesso de leitura viola o princípio do menor privilégio, aumentando o risco de ações não autorizadas ou acidentais. Além disso, armazenar credenciais estáticas na instância EC2 não é recomendado.",
      "Correta. A melhor prática de segurança na AWS é utilizar funções IAM associadas diretamente ao perfil da instância EC2 para fornecer credenciais temporárias às aplicações. Isso evita o uso de credenciais estáticas e reduz riscos de exposição. A política AmazonDynamoDBReadOnlyAccess garante que a aplicação tenha apenas permissões de leitura na tabela DynamoDB, atendendo exatamente à necessidade."
    ]
  },
  {
    "question": "Uma empresa de cibersegurança está publicando dados críticos de logs em um grupo de logs do Amazon CloudWatch Logs, criado há 3 meses. A empresa precisa criptografar esses dados de log utilizando uma chave mestra do cliente (CMK) do AWS KMS, para que quaisquer dados futuros sejam criptografados conforme as diretrizes de segurança da empresa.\n\nQual das opções a seguir representa a melhor solução para atender a esse requisito?",
    "options": [
      "Utilize o console do CloudWatch Logs ou o comando AWS CLI put-log-group com o parâmetro --kms-key-id para associar a CMK ao grupo de logs existente.",
      "Use o comando AWS CLI put-retention-policy para definir a política de retenção e associe a CMK ao grupo de logs via console ou API.",
      "Use o comando AWS CLI create-log-group e especifique o ARN da chave KMS.",
      "Use o comando AWS CLI describe-log-groups e especifique o ARN da chave KMS.",
      "Use o comando AWS CLI put-resource-policy para associar a CMK ao grupo de logs existente."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Para alterar a chave KMS de um grupo de logs já existente, é necessário usar o console do CloudWatch Logs ou o comando AWS CLI put-log-group com o parâmetro --kms-key-id, garantindo que os dados futuros sejam criptografados com a nova CMK.",
      "Incorreta. O comando put-retention-policy define a política de retenção dos logs, mas não associa a CMK ao grupo de logs. A associação da CMK deve ser feita via console do CloudWatch Logs ou utilizando o comando correto da AWS CLI ou API.",
      "Incorreta. O comando create-log-group permite associar uma CMK apenas no momento da criação do grupo de logs. Como o grupo de logs já existe há 3 meses, essa opção não é aplicável para alterar a criptografia de um grupo já criado.",
      "Incorreta. O comando describe-log-groups apenas lista e obtém informações sobre os grupos de logs, incluindo se uma CMK está associada. Ele não permite alterar ou associar uma nova CMK.",
      "Incorreta. O comando put-resource-policy define políticas de recurso para o CloudWatch Logs, mas não permite associar ou alterar uma chave KMS em um grupo de logs."
    ]
  },
  {
    "question": "Uma plataforma de comunicação atende milhões de clientes e realiza o deploy de funcionalidades em um ambiente de produção na AWS utilizando o CodeDeploy. Você está revisando os scripts do processo de implantação localizados no arquivo AppSpec.\n\nQual das opções a seguir apresenta a ordem correta dos eventos do ciclo de vida?",
    "options": [
      "BeforeInstall => ApplicationStart => DownloadBundle => ValidateService",
      "ValidateService => BeforeInstall => DownloadBundle => ApplicationStart",
      "BeforeInstall => ValidateService => DownloadBundle => ApplicationStart",
      "DownloadBundle => BeforeInstall => ApplicationStart => ValidateService"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Essa sequência não respeita a ordem correta dos eventos do ciclo de vida do CodeDeploy, pois o DownloadBundle deve ocorrer antes do BeforeInstall, e o ValidateService deve ser o último evento.",
      "Incorreta. O ValidateService não pode ser o primeiro evento, pois ele valida o serviço após a implantação, e o DownloadBundle deve ser o primeiro passo para obter o pacote de implantação.",
      "Incorreta. Essa ordem está incorreta porque o DownloadBundle deve ser o primeiro evento para baixar o pacote de implantação, e o ValidateService deve ocorrer após o ApplicationStart para validar o serviço em execução.",
      "Correta. Essa é a ordem correta dos eventos do ciclo de vida no AWS CodeDeploy: primeiro o DownloadBundle para baixar o pacote, depois BeforeInstall para preparar o ambiente, seguido pelo ApplicationStart para iniciar a aplicação, e por fim ValidateService para validar se o serviço está funcionando corretamente."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando um Application Load Balancer (ALB) para direcionar o tráfego para instâncias EC2 da aplicação e funções Lambda.\n\nQuais das seguintes características do ALB podem ser consideradas corretas? (Selecione duas)",
    "options": [
      "Se você especificar os alvos usando endereços IP, o tráfego é roteado para as instâncias usando o endereço IP privado primário.",
      "Se você especificar os alvos usando o ID da instância, o tráfego é roteado para as instâncias usando qualquer endereço IP privado de uma ou mais interfaces de rede.",
      "Um ALB possui três tipos possíveis de alvo: Hostname, IP e Lambda.",
      "Não é possível especificar endereços IP publicamente roteáveis para um ALB.",
      "Um ALB possui três tipos possíveis de alvo: Instância, IP e Lambda."
    ],
    "correct": [3, 4],
    "detailedExplanations": [
      "Incorreta. Ao especificar alvos por endereços IP, o tráfego pode ser roteado para qualquer endereço IP privado associado a uma ou mais interfaces de rede da instância, permitindo que múltiplas aplicações na mesma instância usem a mesma porta.",
      "Incorreta. Quando você especifica os alvos usando o ID da instância, o tráfego é roteado para as instâncias utilizando o endereço IP privado primário da interface de rede principal da instância, não qualquer endereço IP privado.",
      "Incorreta. O ALB não suporta 'Hostname' como tipo de alvo. Os tipos válidos são Instância, IP e Lambda.",
      "Correta. Quando o tipo de alvo é IP, somente endereços IP privados dentro de blocos CIDR específicos podem ser usados. Endereços IP públicos não são permitidos como alvos.",
      "Correta. Ao criar um grupo de destino, você define o tipo de alvo, que pode ser Instância (ID da instância), IP (endereços IP privados) ou Lambda (funções Lambda). Este tipo não pode ser alterado após a criação."
    ]
  },
  {
    "question": "Uma equipe de desenvolvedores .NET trabalha com várias aplicações web ASP.NET que utilizam instâncias EC2 para hospedagem no IIS. O processo de implantação precisa ser configurado para que múltiplas versões da aplicação possam rodar no AWS Elastic Beanstalk. Uma versão seria usada para desenvolvimento e testes, e outra para testes de carga.\n\nQual dos métodos a seguir você recomendaria?",
    "options": [
      "Definir um ambiente de desenvolvimento com uma única instância e um ambiente de 'teste de carga' que possua configurações semelhantes ao ambiente de produção.",
      "Não é possível ter múltiplos ambientes de desenvolvimento no Elastic Beanstalk, apenas um ambiente de desenvolvimento e um de produção.",
      "Criar um Application Load Balancer para rotear o tráfego com base no hostname, permitindo passar parâmetros para o ambiente de desenvolvimento do Elastic Beanstalk. Criar um arquivo em .ebextensions/ para gerenciar o tráfego vindo do ALB.",
      "Utilizar apenas um ambiente do Elastic Beanstalk e realizar alterações de configuração usando um script Ansible."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Elastic Beanstalk permite criar múltiplos ambientes independentes para a mesma aplicação, facilitando o isolamento entre desenvolvimento, teste e produção. Ter ambientes separados para desenvolvimento e teste de carga garante que diferentes versões possam ser executadas simultaneamente sem interferência, além de permitir configurações específicas para cada finalidade.",
      "Incorreta. O Elastic Beanstalk permite criar múltiplos ambientes para a mesma aplicação, incluindo vários ambientes de desenvolvimento, teste e produção. A limitação mencionada não existe, e o console do AWS Management Console oferece um assistente para criar novos ambientes facilmente.",
      "Incorreta. Embora seja possível rotear tráfego via ALB com base no hostname, essa abordagem não é recomendada para testes de carga, pois diferentes versões da aplicação rodando nas mesmas instâncias podem causar conflitos e dificultar o isolamento dos ambientes, comprometendo a confiabilidade dos testes.",
      "Incorreta. O Ansible é uma ferramenta de automação de implantação que pode gerenciar infraestrutura, mas o Elastic Beanstalk já oferece suporte nativo para múltiplos ambientes, facilitando a criação e gerenciamento de versões separadas da aplicação. Usar apenas um ambiente e scripts externos complica o processo e não aproveita os recursos do Beanstalk."
    ]
  },
  {
    "question": "Você está armazenando seus arquivos de vídeo em um bucket S3 separado do bucket S3 principal que hospeda seu site estático. Ao acessar as URLs dos vídeos diretamente, os usuários conseguem visualizar os vídeos no navegador, mas não conseguem reproduzi-los ao visitar o site principal.\n\nQual é a causa raiz desse problema?",
    "options": [
      "Alterar a política IAM",
      "Habilitar CORS",
      "Desabilitar a criptografia do lado do servidor",
      "Alterar a política do bucket"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Políticas IAM são anexadas a usuários, grupos ou funções IAM e definem permissões para esses identidades. Como o acesso é feito por usuários públicos do site, que não possuem contas IAM, essa não é a causa do problema.",
      "Correta. O Cross-Origin Resource Sharing (CORS) define uma forma para aplicações web carregadas em um domínio interagirem com recursos em outro domínio. Para que o site principal (em um bucket S3) consiga reproduzir vídeos armazenados em outro bucket, é necessário configurar a política CORS no bucket de vídeos, permitindo o acesso cruzado entre origens.",
      "Incorreta. O Amazon S3 criptografa os dados no nível do objeto e gerencia a criptografia e descriptografia automaticamente. Se o arquivo de vídeo está criptografado, isso não impede o acesso via URL direta, portanto, desabilitar a criptografia não resolveria o problema.",
      "Incorreta. A política do bucket é uma política baseada em recursos do AWS Identity and Access Management (IAM) que concede permissões específicas, como permitir que um endereço IP acesse um arquivo de vídeo no bucket S3. Neste caso, não é um problema de permissão, pois o acesso direto via URL funciona, mas o vídeo não reproduz no site principal."
    ]
  },
  {
    "question": "Uma empresa desenvolveu um serviço baseado em aplicativo para que cidadãos possam reservar viagens de transporte na comunidade local. A plataforma está rodando em instâncias Amazon EC2 e utiliza o Amazon Relational Database Service (RDS) para armazenar os dados de transporte. Uma nova funcionalidade foi solicitada para que recibos sejam enviados por e-mail aos clientes com anexos em PDF recuperados do Amazon Simple Storage Service (S3).\n\nQual das opções abaixo fornecerá às instâncias EC2 as permissões corretas para fazer upload de arquivos no Amazon S3 e gerar URLs assinadas do S3?",
    "options": [
      "AWS CloudFormation",
      "Executar o comando aws configure na instância EC2",
      "Criar uma Role IAM para EC2",
      "User Data da instância EC2"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O AWS CloudFormation é uma ferramenta para provisionamento e gerenciamento de recursos AWS de forma automatizada e declarativa, mas não concede permissões diretamente às instâncias EC2 para acessar o S3. Ele pode ser usado para criar roles IAM, mas não é a solução direta para o problema apresentado.",
      "Incorreta. Embora o comando aws configure configure as credenciais para a AWS CLI, isso exige o gerenciamento manual de credenciais estáticas, o que não é seguro nem escalável. Além disso, não é necessário se a instância EC2 estiver associada a uma role IAM que fornece credenciais temporárias automaticamente.",
      "Correta. Criar uma Role IAM e associá-la à instância EC2 permite que a aplicação na instância obtenha permissões temporárias e seguras para acessar o Amazon S3, incluindo upload de arquivos e geração de URLs assinadas, sem a necessidade de gerenciar credenciais manualmente.",
      "Incorreta. O User Data é utilizado para executar scripts ou comandos durante o lançamento da instância, mas não é recomendado inserir credenciais AWS nele, pois isso pode expor informações sensíveis e não garante a atribuição segura de permissões."
    ]
  },
  {
    "question": "Uma organização começou recentemente a usar o AWS CodeCommit como seu serviço de controle de versão. Uma equipe de conformidade de segurança que visitou a organização estava auditando o processo de desenvolvimento de software e percebeu que os desenvolvedores executavam muitos comandos git push em suas máquinas de desenvolvimento. A equipe de conformidade exige que a criptografia seja usada para essa atividade.\n\nComo a organização pode garantir que o código-fonte esteja criptografado em trânsito e em repouso?",
    "options": [
      "Os repositórios são automaticamente criptografados em repouso.",
      "Habilite a criptografia KMS manualmente.",
      "Use uma função AWS Lambda como hook para criptografar o código enviado.",
      "Use um hook no git para criptografar o código no cliente antes do envio."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Os dados nos repositórios do AWS CodeCommit são criptografados automaticamente tanto em trânsito quanto em repouso. Quando os dados são enviados para um repositório (por exemplo, por meio do comando git push), o CodeCommit criptografa os dados enquanto os armazena, garantindo segurança sem necessidade de configurações adicionais.",
      "Incorreta. O AWS CodeCommit cria automaticamente uma chave gerenciada pela AWS no AWS Key Management Service (KMS) para criptografar os dados do repositório, portanto, não é necessário habilitar manualmente a criptografia KMS.",
      "Incorreta. Não há necessidade de usar AWS Lambda para criptografar o código enviado, pois o CodeCommit já realiza essa criptografia automaticamente.",
      "Incorreta. Não é necessário implementar hooks no cliente para criptografia, pois o AWS CodeCommit já garante a criptografia dos dados em trânsito e em repouso de forma transparente para o usuário."
    ]
  },
  {
    "question": "Uma empresa possui várias instâncias EC2 baseadas em Linux que geram diversos arquivos de log que precisam ser analisados para fins de segurança e conformidade. A empresa deseja usar o Kinesis Data Streams (KDS) para analisar esses dados de log.\n\nQual das seguintes opções é a forma mais otimizada de enviar os dados de log das instâncias EC2 para o KDS?",
    "options": [
      "Instalar o AWS SDK em cada uma das instâncias e configurá-lo para enviar os arquivos necessários ao Kinesis Data Streams",
      "Usar a Kinesis Producer Library (KPL) para coletar e ingerir dados de cada instância EC2",
      "Executar um job cron em cada uma das instâncias para coletar os dados de log e enviá-los ao Kinesis Data Streams",
      "Instalar e configurar o Kinesis Agent em cada uma das instâncias"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora o AWS SDK permita interagir com as APIs do Kinesis Data Streams, é necessário desenvolver código personalizado para detectar novas entradas nos arquivos de log e enviá-las ao stream. Isso adiciona complexidade e esforço que o Kinesis Agent já resolve de forma nativa e eficiente.",
      "Incorreta. A Kinesis Producer Library é uma biblioteca configurável que facilita a escrita em streams do Kinesis, atuando como intermediária entre o código do produtor e as APIs do Kinesis. No entanto, ela não é otimizada para monitorar arquivos de log continuamente, função que o Kinesis Agent realiza de forma mais direta e eficiente.",
      "Incorreta. Embora viável, essa abordagem exige desenvolvimento e manutenção de scripts personalizados para monitorar alterações nos arquivos, lidar com falhas e reenvios. O Kinesis Agent já oferece essas funcionalidades integradas, tornando essa opção menos eficiente e mais suscetível a erros.",
      "Correta. O Kinesis Agent é um aplicativo Java independente que oferece uma maneira simples e eficiente de coletar e enviar dados para o Kinesis Data Streams. Ele monitora continuamente um conjunto de arquivos, enviando novos dados para o stream, gerenciando rotação de arquivos, checkpoints e tentativas em caso de falhas. Além disso, emite métricas no Amazon CloudWatch para monitoramento e solução de problemas, tornando-o ideal para ambientes Linux como servidores web, de logs e bancos de dados."
    ]
  },
  {
    "question": "Você migrou sua infraestrutura local para a AWS e está configurando ambientes de implantação do AWS Elastic Beanstalk para produção, desenvolvimento e testes. Você configurou o ambiente de produção para usar uma implantação do tipo rolling (implantação gradual) para evitar que sua aplicação fique indisponível para os usuários. Para os ambientes de desenvolvimento e teste, você deseja implantar rapidamente e não se preocupa com períodos de indisponibilidade.\n\nQuais das seguintes políticas de implantação atendem às suas necessidades para desenvolvimento e teste?",
    "options": [
      "Rolling (Implantação gradual)",
      "Rolling with additional batches (Implantação gradual com lotes adicionais)",
      "Immutable (Imutável)",
      "All at once (Tudo de uma vez)"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Com este método, a aplicação é implantada em lotes sequenciais de instâncias, mantendo a maior parte da capacidade disponível durante a implantação. Evita períodos de indisponibilidade total e minimiza a redução da disponibilidade, porém o tempo total de implantação é maior. É indicado quando não se pode aceitar qualquer período de indisponibilidade completa, o que não é o caso para desenvolvimento e teste.",
      "Incorreta. Este método lança um lote extra de instâncias antes de iniciar a implantação gradual, garantindo que a capacidade total seja mantida durante todo o processo. Evita qualquer redução na disponibilidade, mas aumenta ainda mais o tempo de implantação em comparação ao método rolling simples. É indicado para ambientes que exigem alta disponibilidade constante, o que não é necessário para desenvolvimento e teste.",
      "Incorreta. Método mais lento que garante que a nova versão da aplicação seja implantada em novas instâncias, ao invés de atualizar as existentes. Permite rollback rápido e seguro em caso de falha na implantação. Durante a implantação, um segundo grupo de Auto Scaling é criado para servir o tráfego junto com o grupo antigo até que as novas instâncias passem nos testes de integridade. É ideal para produção, mas não para implantações rápidas em desenvolvimento e teste.",
      "Correta. Este é o método de implantação mais rápido. É adequado quando você pode aceitar uma breve indisponibilidade do serviço e quando implantações rápidas são prioritárias. Nesse método, o Elastic Beanstalk implanta a nova versão da aplicação em todas as instâncias simultaneamente, o que pode causar reinício do servidor web ou da aplicação, resultando em indisponibilidade temporária ou baixa disponibilidade para os usuários."
    ]
  }
];