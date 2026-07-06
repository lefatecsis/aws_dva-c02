const originalQuestions = [
  {
    "question": "Uma equipe de desenvolvimento está configurando o Amazon Kinesis Data Streams para ingestão de dados em tempo real provenientes de diversos aparelhos. A equipe definiu a capacidade de shards como um para testar a configuração.\n\nO que acontece se os limites de capacidade de um stream de dados do Amazon Kinesis forem excedidos enquanto o produtor de dados adiciona dados ao stream?",
    "options": [
      "Os dados são perdidos a menos que a chave de partição dos registros seja alterada para que os dados sejam escritos em um shard diferente no stream.",
      "As chamadas de put data serão rejeitadas com uma exceção AccessDeniedException assim que o limite for atingido.",
      "As chamadas de put data serão rejeitadas com uma exceção ProvisionedThroughputExceeded.",
      "Entre em contato com o suporte da AWS para solicitar um aumento no número de shards."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A chave de partição é usada para distribuir os registros entre os shards, mas alterar a chave de partição não cria shards adicionais. Com apenas um shard provisionado, mudar a chave de partição não evita o estouro de capacidade nem a perda de dados.",
      "Incorreta. A exceção AccessDeniedException ocorre quando o sistema não tem permissões suficientes para executar a operação. Como a ingestão de dados estava ocorrendo antes do limite ser atingido, essa exceção não é aplicável neste contexto.",
      "Correta. Os limites de capacidade de um stream do Kinesis são definidos pelo número de shards. Quando esses limites são ultrapassados, as chamadas para adicionar dados (put data) são rejeitadas com a exceção ProvisionedThroughputExceeded. Em casos de aumento temporário da taxa de entrada, a repetição das chamadas pelo produtor pode resolver o problema. Se o aumento for sustentado, é necessário aumentar o número de shards para garantir capacidade suficiente.",
      "Incorreta. O aumento do número de shards é uma ação que o próprio usuário pode realizar diretamente pelo console ou API da AWS. Não é necessário contatar o suporte para isso, tornando esta opção incorreta."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento criou templates do AWS CloudFormation que são reutilizáveis, aproveitando parâmetros de entrada para nomear recursos com base nos nomes dos clientes.\n\nVocê deseja salvar seus templates na nuvem. Qual opção de armazenamento você deve escolher?",
    "options": [
      "Amazon ECR",
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Amazon Elastic Container Registry (ECR) é um serviço gerenciado para armazenar imagens de contêiner Docker, não sendo aplicável para armazenamento de templates do CloudFormation, que são arquivos de texto JSON ou YAML.",
      "Correta. O Amazon S3 é o serviço recomendado para armazenar templates do CloudFormation na nuvem. Quando você faz upload de um arquivo de template local, o CloudFormation o armazena em um bucket do S3 na sua conta AWS. Se não houver um bucket criado pelo CloudFormation, ele cria um bucket exclusivo para cada região onde o template é enviado, facilitando o gerenciamento e reutilização dos templates.",
      "Incorreta. O Amazon Elastic Block Store (EBS) fornece armazenamento em nível de bloco para instâncias EC2 e é indicado para dados que exigem acesso rápido e persistência de longo prazo, mas não é adequado para armazenar templates do CloudFormation, pois não é um serviço de armazenamento de objetos ou arquivos compartilhados.",
      "Incorreta. O Amazon EFS é um sistema de arquivos que pode ser montado em instâncias Amazon EC2 baseadas em Linux, mas não é adequado para armazenar templates do CloudFormation, pois não é integrado para esse propósito e não oferece os recursos de versionamento e acesso simplificado que o S3 proporciona."
    ]
  },
  {
    "question": "Você trabalha em uma startup de tecnologia que desenvolve aplicações web e móveis. Deseja puxar imagens Docker do repositório ECR chamado demo para iniciar testes locais com a versão mais recente da aplicação.\n\nQuais dos seguintes comandos você deve executar para puxar imagens Docker existentes do ECR? (Selecione duas.)",
    "options": [
      "docker pull 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
      "aws docker push 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
      "docker login -u $AWS_ACCESS_KEY_ID -p $AWS_SECRET_ACCESS_KEY",
      "docker build -t 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
      "$(aws ecr get-login --no-include-email)"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Este comando é usado para puxar (pull) uma imagem Docker específica do repositório ECR, permitindo que você execute a imagem localmente para testes ou desenvolvimento.",
      "Incorreta. O comando 'aws docker push' não existe. Além disso, o objetivo é puxar (pull) imagens, não enviá-las (push). O comando correto para puxar imagens é 'docker pull'.",
      "Incorreta. Não é possível autenticar no Amazon ECR usando as variáveis AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY diretamente com o comando docker login. Essas credenciais são utilizadas pela AWS CLI, não pelo Docker.",
      "Incorreta. Este comando é usado para construir uma imagem Docker localmente a partir de um Dockerfile, não para puxar imagens existentes de um repositório remoto como o ECR.",
      "Correta. Este comando obtém um token de autenticação válido por 12 horas para o registro ECR e executa automaticamente o comando docker login com esse token, permitindo que você autentique o Docker para puxar imagens do ECR."
    ]
  },
  {
    "question": "Você é um engenheiro de software trabalhando em uma empresa de TI e foi solicitado a contribuir para uma aplicação interna em crescimento que inclui dashboards para visualização de dados. Você está provisionando uma tabela AWS DynamoDB e precisa realizar 10 leituras fortemente consistentes por segundo, cada uma com tamanho de 4 KB.\n\nQuantas Unidades de Capacidade de Leitura (RCUs) são necessárias?",
    "options": [
      "5",
      "40",
      "20",
      "10"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. 5 RCUs seriam insuficientes para suportar 10 leituras fortemente consistentes por segundo, pois cada leitura de 4 KB consome 1 RCU. Portanto, 5 RCUs suportariam apenas 5 leituras por segundo.",
      "Incorreta. 40 RCUs indicariam um consumo muito maior do que o necessário para 10 leituras fortemente consistentes de 4 KB. Esse valor poderia ser válido para leituras maiores ou para um volume de leituras muito maior, mas não para o cenário descrito.",
      "Incorreta. 20 RCUs corresponderiam ao dobro do necessário para 10 leituras fortemente consistentes de 4 KB. Esse valor seria correto se cada leitura fosse de 8 KB ou se fossem necessárias leituras eventualmente consistentes, o que não é o caso aqui.",
      "Correta. Uma Unidade de Capacidade de Leitura (RCU) representa uma leitura fortemente consistente por segundo para um item de até 4 KB. Como cada leitura é fortemente consistente e o tamanho do item é exatamente 4 KB, cada leitura consome 1 RCU. Portanto, para 10 leituras por segundo, são necessárias 10 RCUs."
    ]
  },
  {
    "question": "Uma empresa multinacional mantém contas AWS separadas para diferentes verticais em sua organização. O gerente de projeto de uma equipe deseja migrar o ambiente Elastic Beanstalk da conta AWS da Equipe A para a conta AWS da Equipe B. Como Desenvolvedor, você foi chamado para ajudar nesse processo.\n\nQual das opções a seguir você sugeriria?",
    "options": [
      "Não é possível migrar um ambiente Elastic Beanstalk de uma conta AWS para outra.",
      "Criar uma configuração de exportação a partir do console do Elastic Beanstalk na conta da Equipe A. Essa configuração deve ser compartilhada com a Role IAM da conta da Equipe B. A opção de importação na conta da Equipe B mostrará a configuração salva, que pode ser usada para criar uma nova aplicação Beanstalk.",
      "Criar uma configuração salva na conta da Equipe A e configurá-la para exportação. Agora, faça login na conta da Equipe B e escolha a opção Importar. Aqui, você deve especificar o nome da configuração salva e permitir que o sistema crie a nova aplicação. Esse processo pode levar algum tempo dependendo das regiões das duas contas.",
      "Criar uma configuração salva na conta da Equipe A e baixá-la para sua máquina local. Faça as alterações específicas da conta e faça o upload para um bucket S3 na conta da Equipe B. A partir do console do Elastic Beanstalk, crie uma aplicação a partir das 'Configurações Salvas'."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. É possível migrar um ambiente Elastic Beanstalk entre contas AWS utilizando configurações salvas, portanto essa afirmação está incorreta.",
      "Incorreta. Não existe uma funcionalidade direta de exportação e importação entre contas no console do Elastic Beanstalk que funcione dessa forma. A migração requer o uso de configurações salvas baixadas e carregadas manualmente.",
      "Incorreta. Não há uma opção nativa de importação direta no Elastic Beanstalk para configurações salvas entre contas. O processo envolve baixar a configuração, ajustar parâmetros e fazer upload manualmente.",
      "Correta. Essa é a abordagem recomendada para migrar ambientes Elastic Beanstalk entre contas AWS. As configurações salvas são arquivos YAML que definem a versão da plataforma, opções de configuração e tags. Você deve baixar a configuração, ajustar parâmetros específicos da nova conta (como nome de par de chaves, IDs de sub-rede, nomes de aplicação) e fazer upload para um bucket S3 da conta destino. Depois, crie a aplicação usando essa configuração salva."
    ]
  },
  {
    "question": "Um novo colaborador está tentando entender as particularidades do Auto Scaling do EC2. Como um AWS Certified Developer – Associate, você foi solicitado a orientar esse novo colaborador.\n\nVocê consegue identificar e explicar as afirmações corretas sobre o Auto Scaling para o novo colaborador? (Selecione três).",
    "options": [
      "Toda vez que você cria um grupo de Auto Scaling a partir de uma instância existente, é criada uma nova AMI (Amazon Machine Image).",
      "Grupos de Auto Scaling sempre iniciam instâncias nas zonas de disponibilidade mais baratas da região.",
      "O Auto Scaling do Amazon EC2 não pode adicionar um volume a uma instância existente caso o volume atual esteja próximo da capacidade.",
      "Grupos de Auto Scaling do EC2 são construções regionais. Eles abrangem várias Zonas de Disponibilidade, mas não múltiplas regiões da AWS.",
      "Você pode usar o Auto Scaling do Amazon EC2 para verificações de integridade (health checks) e substituição de instâncias com problemas mesmo sem usar Elastic Load Balancing (ELB).",
      "O Auto Scaling do Amazon EC2 funciona tanto com Application Load Balancers quanto com Network Load Balancers."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Ao criar um grupo de Auto Scaling a partir de uma instância existente, não é criada automaticamente uma nova AMI. É necessário criar manualmente uma AMI se desejar usá-la para o grupo.",
      "Incorreta. O Auto Scaling não considera automaticamente o custo por zona de disponibilidade. Ele distribui instâncias com base em balanceamento, capacidade e políticas de alocação, não custo.",
      "Incorreta. O Auto Scaling do EC2 não gerencia nem adiciona volumes a instâncias já em execução. O dimensionamento lida com novas instâncias, não com a modificação de instâncias existentes.",
      "Correta. Grupos de Auto Scaling do EC2 são construções regionais que podem abranger várias Zonas de Disponibilidade dentro da mesma região, mas não se estendem por múltiplas regiões da AWS.",
      "Correta. O Auto Scaling do EC2 pode realizar verificações de integridade usando tanto o ELB quanto as verificações nativas do EC2, permitindo substituir instâncias com problemas mesmo sem ELB.",
      "Correta. O Auto Scaling do EC2 é compatível com ALB e NLB, integrando-se a ambos para realizar verificações de integridade e distribuir carga."
    ]
  },
  {
    "question": "Uma aplicação de mídia utiliza uma distribuição Amazon CloudFront para distribuir conteúdo estático configurado em um bucket Amazon S3. A aplicação é utilizada em diferentes países e várias Regiões AWS. Algumas regiões têm experimentado latência quando ocorre um cache miss no CloudFront.\n\nQual das seguintes alterações de configuração você sugeriria para diminuir a latência e melhorar a performance do usuário redirecionando as requisições em caso de cache miss para o bucket S3 na Região mais próxima do país do usuário?",
    "options": [
      "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função Lambda@Edge para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função Lambda@Edge ao evento de viewer request da distribuição.",
      "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função CloudFront para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função CloudFront ao evento de origin request da distribuição.",
      "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função Lambda@Edge para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função Lambda@Edge ao evento de origin request da distribuição.",
      "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função CloudFront para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função CloudFront ao evento de viewer request da distribuição."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O evento viewer request é acionado para todas as requisições recebidas pelo CloudFront antes de verificar o cache, ou seja, independentemente de cache hit ou miss. Isso faria com que a função Lambda@Edge fosse executada em todas as requisições, aumentando a latência e o custo desnecessariamente. Para tratar especificamente cache misses, deve-se usar o evento origin request.",
      "Incorreta. As CloudFront Functions só podem ser associadas aos eventos viewer request e viewer response. Não suportam eventos origin request ou origin response. Portanto, não é possível usar uma CloudFront Function para modificar requisições no evento origin request, que é necessário para tratar cache misses e redirecionar para o origin correto.",
      "Correta. Quando uma requisição do visualizador para o CloudFront resulta em um cache miss (o objeto solicitado não está em cache na localização edge), o CloudFront envia uma requisição para o origin para recuperar o objeto, chamado origin request. A função Lambda@Edge associada ao evento origin request pode modificar a requisição antes que ela seja enviada ao origin, permitindo redirecionar para o bucket S3 na Região mais próxima do usuário com base no cabeçalho CloudFront-Viewer-Country. Isso reduz a latência e melhora a performance, além de garantir soberania dos dados ao servir conteúdo de uma origem geograficamente próxima.",
      "Incorreta. Embora as CloudFront Functions possam ser associadas ao evento viewer request, esse evento ocorre para todas as requisições, não apenas para cache misses. Isso faria com que a função fosse executada em todas as requisições, o que não é eficiente para o caso de uso que visa otimizar apenas os cache misses. Além disso, CloudFront Functions têm limitações em relação à manipulação avançada de requisições comparado ao Lambda@Edge."
    ]
  },
  {
    "question": "Sua empresa possui um balanceador de carga em uma VPC configurado para ser acessível pela internet. O nome DNS público atribuído ao balanceador de carga é myDns-1234567890.us-east-1.elb.amazonaws.com. Quando suas aplicações clientes são carregadas pela primeira vez, elas capturam o nome DNS do balanceador e resolvem o endereço IP para que possam referenciar diretamente o IP subjacente.\n\nFoi observado que as aplicações clientes funcionam bem inicialmente, mas param de funcionar inesperadamente após algum tempo. Qual é a causa desse problema?",
    "options": [
      "Seus grupos de segurança não são estáveis.",
      "O balanceador de carga é altamente disponível e seu endereço IP público pode mudar. O nome DNS é constante.",
      "Você precisa desabilitar a implantação multi-AZ.",
      "Você precisa habilitar a afinidade de sessão (stickiness)."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Os grupos de segurança são configurados para controlar o tráfego de rede e, uma vez configurados corretamente, são estáveis. Se as aplicações param de funcionar após algum tempo, o problema provavelmente não está relacionado aos grupos de segurança.",
      "Correta. O balanceador de carga recebe um nome DNS público fixo, mas os endereços IP associados a ele podem mudar devido à alta disponibilidade e escalabilidade. Portanto, as aplicações clientes não devem armazenar o endereço IP resolvido, mas sempre usar o nome DNS para garantir conectividade contínua.",
      "Incorreta. A implantação multi-AZ aumenta a disponibilidade e tolerância a falhas do balanceador de carga. Desabilitar essa funcionalidade não resolveria o problema e não está relacionado à mudança do endereço IP do balanceador.",
      "Incorreta. A afinidade de sessão faz com que o balanceador de carga direcione as requisições de um usuário para a mesma instância, garantindo persistência de sessão. No entanto, isso não impacta o problema descrito, que está relacionado à resolução do endereço IP do balanceador."
    ]
  },
  {
    "question": "Um desenvolvedor, ao trabalhar com instâncias Amazon EC2, percebeu que uma instância não era mais necessária e a desligou. Porém, outra instância do mesmo tipo foi automaticamente iniciada na conta.\n\nQual das opções a seguir pode explicar essa sequência de ações?",
    "options": [
      "A instância poderia fazer parte de um Network Load Balancer e, por isso, foi automaticamente iniciada.",
      "O usuário não tinha as permissões corretas para desligar a instância. É necessário ter permissões de root para terminar uma instância.",
      "A instância poderia fazer parte de um Application Load Balancer e, por isso, foi automaticamente iniciada.",
      "A instância pode fazer parte de um Auto Scaling Group e, por isso, uma instância semelhante foi reiniciada automaticamente."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Um Network Load Balancer (NLB) distribui o tráfego de rede entre instâncias, mas não tem a capacidade de iniciar ou reiniciar instâncias automaticamente. A menos que esteja configurado com um Auto Scaling Group, o NLB sozinho não pode lançar instâncias.",
      "Incorreta. Se o usuário não possui permissões suficientes, ele nem mesmo conseguiria executar a ação de desligar a instância. Além disso, não é necessário ter permissões de root para terminar uma instância EC2; permissões específicas do IAM para a ação de término são suficientes.",
      "Incorreta. O Application Load Balancer (ALB) distribui o tráfego entre instâncias, mas não inicia instâncias por conta própria. Normalmente, o ALB é configurado junto com um Auto Scaling Group para gerenciar o número de instâncias, mas sozinho não pode lançar instâncias automaticamente.",
      "Correta. Grupos de Auto Scaling podem ser configurados para manter um número desejado de instâncias em execução. Se uma instância é terminada manualmente, o Auto Scaling Group automaticamente lança uma nova instância para substituir a que foi removida, mantendo a capacidade desejada."
    ]
  },
  {
    "question": "Um desenvolvedor em uma universidade está criptografando uma grande carga útil XML transferida pela rede usando o AWS KMS e deseja testar a aplicação antes de ir para produção.\n\nQual é o tamanho máximo de dados suportado pelo AWS KMS para criptografia direta?",
    "options": [
      "16 KB",
      "4 KB",
      "1 MB",
      "10 MB"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS KMS não suporta criptografia direta de dados com tamanho superior a 4 KB. Para dados maiores, recomenda-se o uso de criptografia envelope.",
      "Correta. O AWS KMS suporta a criptografia direta de até 4 kilobytes (4096 bytes) de dados arbitrários, como chaves RSA, senhas de banco de dados ou outras informações sensíveis. Para dados maiores, a criptografia envelope é recomendada para melhorar a eficiência e reduzir a transferência de dados pela rede.",
      "Incorreta. O limite máximo para criptografia direta no AWS KMS é 4 KB. Para dados maiores, a prática recomendada é utilizar criptografia envelope, que melhora a performance e reduz a latência.",
      "Incorreta. O AWS KMS não permite criptografar diretamente dados com tamanho superior a 4 KB. Para cargas maiores, a criptografia envelope é a solução adequada."
    ]
  },
  {
    "question": "Uma empresa armazena dados confidenciais em um bucket do Amazon Simple Storage Service (S3). Novas diretrizes regulatórias exigem que os arquivos sejam armazenados com criptografia do lado do servidor. A criptografia utilizada deve ser o Advanced Encryption Standard (AES-256) e a empresa não deseja gerenciar as chaves de criptografia do S3.\n\nQual das seguintes opções você deve utilizar?",
    "options": [
      "SSE-S3",
      "Criptografia do Lado do Cliente (Client-Side Encryption)",
      "SSE-KMS",
      "SSE-C"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. SSE-S3 utiliza criptografia do lado do servidor com chaves gerenciadas pela própria Amazon S3, aplicando AES-256 para proteger os dados sem que a empresa precise gerenciar as chaves, atendendo exatamente aos requisitos regulatórios.",
      "Incorreta. A criptografia do lado do cliente exige que você gerencie o processo de criptografia e as chaves antes de enviar os dados ao S3, o que não atende à exigência da empresa de não gerenciar as chaves.",
      "Incorreta. SSE-KMS oferece criptografia do lado do servidor com gerenciamento de chaves pelo AWS Key Management Service (KMS), permitindo controle detalhado e auditoria das chaves, mas a empresa não deseja gerenciar as chaves, o que torna essa opção menos adequada.",
      "Incorreta. SSE-C exige que você forneça e gerencie suas próprias chaves de criptografia, o que contraria o requisito da empresa de não gerenciar as chaves do S3."
    ]
  },
  {
    "question": "Sua empresa de comércio eletrônico precisa melhorar seu processo de entrega de software e está migrando da metodologia waterfall. Você decidiu que toda aplicação deve ser construída seguindo as melhores práticas de CI/CD e que cada aplicação deve ser empacotada e implantada como um container Docker. As imagens Docker devem ser armazenadas no ECR e enviadas utilizando AWS CodePipeline e AWS CodeBuild.\n\nAo tentar realizar esse processo, a última etapa falha devido a um problema de autorização. Qual é a causa mais provável desse problema?",
    "options": [
      "O CodeBuild não consegue se comunicar com o ECR devido a problemas com grupos de segurança.",
      "As instâncias do ECS estão mal configuradas e precisam conter dados adicionais no arquivo /etc/ecs/ecs.config.",
      "O repositório do ECR está obsoleto; é necessário deletá-lo e recriá-lo.",
      "As permissões do IAM estão incorretas para o serviço CodeBuild."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Grupos de segurança atuam como firewalls virtuais em nível de instância, mas não interferem diretamente no envio de imagens Docker para o ECR. Portanto, problemas de grupos de segurança não são a causa provável do erro de autorização nesse contexto.",
      "Incorreta. Um erro de autorização indica problemas de permissões, não de configuração das instâncias ECS. Além disso, o arquivo /etc/ecs/ecs.config é relevante para a configuração do agente ECS, não para autenticação do CodeBuild com o ECR.",
      "Incorreta. O conceito de repositório 'obsoleto' ou 'stale' não existe no Amazon ECR. Repositórios podem ser deletados quando não são mais necessários, mas isso não está relacionado a erros de autorização durante o push de imagens.",
      "Correta. Para que o CodeBuild possa autenticar e enviar imagens Docker para o Amazon ECR, ele precisa de permissões específicas do IAM, incluindo a permissão ecr:GetAuthorizationToken. Sem essas permissões, o processo falhará por problemas de autorização."
    ]
  },
  {
    "question": "Um desenvolvedor está criando um serviço de API RESTful usando o Amazon API Gateway com integração AWS Lambda. O serviço deve suportar diferentes versões da API para fins de teste.\n\nComo um Associate Developer, qual das seguintes opções você sugeriria como a melhor forma de realizar isso?",
    "options": [
      "Configurar uma política de recurso do API Gateway para identificar as versões da API e fornecer contexto para a função Lambda.",
      "Implantar as versões da API como estágios únicos com endpoints exclusivos e usar variáveis de estágio para fornecer o contexto que identifica as versões da API.",
      "Usar um cabeçalho X-Version para identificar qual versão está sendo chamada e passar esse cabeçalho para a função Lambda.",
      "Usar um Lambda authorizer do API Gateway para direcionar os clientes da API para a versão correta da API."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Políticas de recurso do API Gateway são usadas para controlar o acesso à API com base em identidades e permissões, não para gerenciar ou identificar versões da API ou fornecer contexto para funções Lambda.",
      "Correta. Um estágio é uma referência nomeada a uma implantação, que é uma captura instantânea da API. Você pode usar estágios para gerenciar diferentes versões da API, como desenvolvimento, teste e produção. Variáveis de estágio funcionam como variáveis de ambiente e permitem configurar endpoints, funções Lambda ou outros parâmetros específicos para cada versão da API, facilitando o gerenciamento e a manutenção.",
      "Incorreta. Embora seja possível usar um cabeçalho personalizado para indicar a versão da API, essa abordagem não é recomendada para gerenciar versões em API Gateway, pois aumenta a complexidade do código e dificulta o gerenciamento centralizado das versões da API.",
      "Incorreta. Um Lambda authorizer é utilizado para autenticação e autorização personalizada, não para roteamento ou gerenciamento de versões da API."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando instâncias de contêiner do Amazon ECS para enviar informações de logs para o CloudWatch Logs. Para que as instâncias de contêiner possam enviar dados de log ao CloudWatch Logs, é necessário criar uma política IAM que permita que as instâncias utilizem as APIs do CloudWatch Logs.\n\nQual política é a mais adequada para atender a esse requisito?",
    "options": [
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"logs:CreateLogGroup\",\n        \"logs:CreateLogStream\",\n        \"logs:PutLogEvents\",\n        \"ecs:DescribeServices\"\n      ],\n      \"Resource\": [\n        \"arn:aws:logs:<ARN do Grupo de Logs>\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"logs:CreateLogGroup\",\n        \"logs:CreateLogStream\",\n        \"logs:PutLogEvents\",\n        \"logs:DescribeLogStreams\"\n      ],\n      \"Resource\": [\n        \"arn:aws:logs:*:*:*\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"logs:CreateLogGroup\",\n        \"logs:CreateLogStream\",\n        \"logs:PutLogEvents\"\n      ],\n      \"Resource\": [\n        \"arn:aws:logs:*:*:*\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"logs:CreateLogGroup\",\n        \"logs:CreateLogStream\",\n        \"logs:PutLogEvents\",\n        \"logs:DescribeLogGroups\"\n      ],\n      \"Resource\": [\n        \"arn:aws:logs:*:*:*\"\n      ]\n    }\n  ]\n}"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A permissão ecs:DescribeServices não é necessária para enviar logs ao CloudWatch Logs. Além disso, falta a permissão logs:DescribeLogStreams, que é essencial para listar os streams de logs e garantir o funcionamento correto da política. O recurso está restrito a um ARN específico, o que pode limitar o funcionamento dependendo do uso.",
      "Correta. Essa política concede as permissões necessárias para criar grupos e streams de logs, enviar eventos de log e listar streams de logs, o que é essencial para que as instâncias do ECS possam enviar logs ao CloudWatch Logs corretamente. O uso do caractere curinga (*) no ARN permite que a política funcione para qualquer grupo de logs.",
      "Incorreta. Embora essa política permita criar grupos e streams de logs e enviar eventos, falta a permissão logs:DescribeLogStreams, que é necessária para que a instância possa listar os streams de logs existentes e operar corretamente.",
      "Incorreta. A permissão logs:DescribeLogGroups não é adequada para essa finalidade, pois o correto é permitir logs:DescribeLogStreams para que a instância possa listar os streams de logs existentes. Essa permissão errada pode impedir o correto envio e gerenciamento dos logs."
    ]
  },
  {
    "question": "Sua aplicação web possui um front-end composto por 5 instâncias EC2 atrás de um Application Load Balancer. Você configurou sua aplicação para capturar o endereço IP do cliente que realiza as requisições. Ao analisar os dados capturados, percebe que todos os endereços IP registrados são iguais, sendo o mesmo endereço IP do Application Load Balancer.\n\nO que você deve fazer para identificar o endereço IP verdadeiro do cliente?",
    "options": [
      "Verificar o cabeçalho X-Forwarded-For no backend",
      "Verificar o cabeçalho X-Forwarded-Proto no backend",
      "Verificar o cookie do cliente",
      "Modificar o front-end do site para que os usuários enviem seus IPs nas requisições"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O cabeçalho X-Forwarded-For é inserido pelo Application Load Balancer e contém o endereço IP original do cliente. Para identificar o IP verdadeiro do cliente, o backend deve ler esse cabeçalho.",
      "Incorreta. O cabeçalho X-Forwarded-Proto indica o protocolo (HTTP ou HTTPS) usado pelo cliente para se conectar ao load balancer, não o endereço IP do cliente.",
      "Incorreta. Para obter o IP do cliente via cookie, seria necessário modificar a lógica tanto do cliente quanto do servidor, o que não é eficiente nem recomendado para essa finalidade.",
      "Incorreta. O endereço IP do cliente já é enviado automaticamente nas requisições, mas o load balancer intercepta e substitui pelo seu próprio IP. Não é necessário modificar o front-end para isso."
    ]
  },
  {
    "question": "Uma empresa possui funções AWS Lambda que são invocadas por outros serviços AWS, como Amazon Kinesis Data Firehose, Amazon API Gateway, Amazon Simple Storage Service ou Amazon CloudWatch Events. O que essas funções Lambda têm em comum é que elas processam cargas de trabalho pesadas, como análise de big data, processamento de arquivos grandes e cálculos estatísticos.\n\nO que você deve fazer para melhorar o desempenho das suas funções AWS Lambda sem alterar o código?",
    "options": [
      "Alterar o runtime da função Lambda para Golang",
      "Aumentar o tempo limite (timeout) da função Lambda",
      "Alterar o tipo de instância da função Lambda",
      "Aumentar a memória alocada para a função Lambda"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Mudar o runtime implica alterar a linguagem de programação, o que exige modificações no código. Além disso, essa mudança pode não resolver problemas de desempenho e foge do requisito de não alterar o código.",
      "Incorreta. Aumentar o timeout apenas permite que a função execute por mais tempo, mas não melhora o desempenho ou a velocidade do processamento. Isso pode evitar que a função seja interrompida prematuramente, mas não acelera a execução.",
      "Incorreta. O conceito de tipo de instância aplica-se ao Amazon EC2, não ao AWS Lambda, que é um serviço serverless. Lambda não permite escolher tipos de instância, pois a infraestrutura é gerenciada pela AWS.",
      "Correta. Aumentar a memória alocada para a função Lambda também aumenta proporcionalmente a CPU e outros recursos computacionais disponíveis, melhorando o desempenho para cargas de trabalho pesadas sem necessidade de alterar o código."
    ]
  },
  {
    "question": "Uma empresa possui dados sensíveis armazenados em um bucket Amazon S3 que está criptografado usando o AWS Key Management Service (AWS KMS). Um desenvolvedor deseja garantir a criptografia em trânsito para todos os usuários que receberam permissão para usar a operação S3 GetObject em múltiplas contas AWS.\n\nQual das seguintes opções representa a melhor solução para esse caso de uso?",
    "options": [
      "Configurar uma política baseada em recursos no bucket S3 para permitir acesso quando a requisição possuir a condição \"aws:SecureTransport\": \"false\".",
      "Configurar uma política baseada em recursos no bucket S3 para negar acesso quando a requisição possuir a condição \"aws:SecureTransport\": \"false\".",
      "Configurar uma política baseada em recursos na chave KMS para negar acesso quando a requisição possuir a condição \"aws:SecureTransport\": \"false\".",
      "Configurar uma política baseada em recursos na chave KMS para permitir acesso quando a requisição possuir a condição \"aws:SecureTransport\": \"false\"."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Permitir acesso quando a condição \"aws:SecureTransport\" for falsa permite conexões HTTP não criptografadas, o que viola o requisito de garantir criptografia em trânsito para a operação GetObject.",
      "Correta. Essa configuração força o uso de conexões criptografadas via HTTPS (TLS) para acessar o bucket, negando qualquer requisição feita por HTTP. A condição \"aws:SecureTransport\" verifica se a requisição foi feita usando HTTPS, garantindo assim a criptografia em trânsito para a operação GetObject.",
      "Incorreta. Políticas baseadas em recursos na chave KMS não são adequadas para controlar a criptografia em trânsito nas operações S3 GetObject, pois o controle de transporte seguro deve ser aplicado diretamente no bucket S3, que é o recurso acessado.",
      "Incorreta. Permitir acesso quando a condição \"aws:SecureTransport\" for falsa significa aceitar conexões não criptografadas, o que contraria o requisito de garantir criptografia em trânsito. Além disso, o controle deve ser feito no bucket S3, não na chave KMS."
    ]
  },
  {
    "question": "Uma empresa especializada em plataforma de comunicação em nuvem como serviço permite que desenvolvedores de software utilizem programaticamente seus serviços para enviar e receber mensagens de texto. A plataforma inicial não possuía uma arquitetura escalável, pois todos os componentes estavam hospedados em um único servidor, e deve ser redesenhada para alta disponibilidade e escalabilidade.\n\nQuais das seguintes opções podem ser usadas para implementar a nova arquitetura? (Selecione duas.)",
    "options": [
      "SES + S3",
      "CloudWatch + CloudFront",
      "ALB + ECS",
      "EBS + RDS",
      "API Gateway + Lambda"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Amazon Simple Email Service (SES) é um serviço para envio e recebimento de e-mails, enquanto o Amazon S3 é um serviço de armazenamento de objetos. Essa combinação não oferece uma solução para alta disponibilidade e escalabilidade de uma plataforma de mensagens de texto, pois não gerencia a execução da aplicação nem o balanceamento de carga.",
      "Incorreta. Amazon CloudWatch é um serviço de monitoramento e observabilidade, enquanto Amazon CloudFront é uma rede de distribuição de conteúdo (CDN). Esses serviços auxiliam no monitoramento e na entrega rápida de conteúdo, mas não oferecem uma solução para executar a aplicação de mensagens com alta disponibilidade e escalabilidade.",
      "Correta. O Amazon Elastic Container Service (ECS) é um serviço gerenciado de orquestração de contêineres altamente escalável e de alto desempenho que suporta contêineres Docker, permitindo executar aplicações em clusters gerenciados de instâncias EC2. O Application Load Balancer (ALB) distribui automaticamente o tráfego de aplicação entre múltiplos alvos, como instâncias EC2, contêineres e funções Lambda, podendo operar em múltiplas zonas de disponibilidade. A combinação ALB + ECS possibilita uma arquitetura escalável e altamente disponível para APIs REST, distribuindo a carga e garantindo resiliência.",
      "Incorreta. Amazon Elastic Block Store (EBS) fornece armazenamento em bloco para instâncias EC2, e Amazon Relational Database Service (RDS) é um serviço gerenciado de banco de dados relacional. Embora sejam serviços importantes, essa combinação não resolve a escalabilidade e alta disponibilidade da aplicação em si, pois não contempla balanceamento de carga nem execução de código de aplicação.",
      "Correta. Amazon API Gateway é um serviço totalmente gerenciado que facilita a criação, publicação, monitoramento e segurança de APIs em qualquer escala. AWS Lambda permite executar código sem provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução consumido. Juntos, API Gateway e Lambda possibilitam uma arquitetura serverless, altamente escalável e disponível, ideal para expor funcionalidades de backend para envio e recebimento de mensagens, com integração nativa para autenticação e gerenciamento de tráfego."
    ]
  },
  {
    "question": "Uma aplicação de comércio eletrônico grava arquivos de log no Amazon S3. A aplicação também lê esses arquivos de log em paralelo, quase em tempo real. A equipe de desenvolvimento deseja evitar quaisquer discrepâncias de dados que possam ocorrer quando a aplicação sobrescreve um arquivo de log existente e, em seguida, tenta ler esse arquivo específico.\n\nQual das opções a seguir MELHOR descreve as capacidades do Amazon S3 relevantes para esse cenário?",
    "options": [
      "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 pode retornar os novos dados.",
      "Um processo substitui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 sempre retorna a versão mais recente do objeto.",
      "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 pode retornar os dados anteriores.",
      "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 não retorna nenhum dado."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o Amazon S3 retorne os dados mais recentes imediatamente após a gravação, a expressão 'pode retornar' sugere inconsistência ou comportamento eventual, o que não ocorre, pois o S3 garante consistência forte.",
      "Correta. O Amazon S3 oferece consistência forte para leituras após gravações, o que significa que qualquer leitura subsequente a uma gravação ou sobrescrição de objeto retorna imediatamente a versão mais atualizada do objeto, sem atrasos ou dados inconsistentes.",
      "Incorreta. O Amazon S3 não retorna dados antigos após a gravação ser concluída, pois oferece consistência forte para leituras e gravações, garantindo que a leitura sempre reflita a última versão do objeto.",
      "Incorreta. O Amazon S3 não bloqueia a leitura retornando nenhum dado durante a propagação da alteração. Ele garante consistência forte, ou seja, a leitura sempre retorna dados válidos e atualizados após a gravação ser concluída."
    ]
  },
  {
    "question": "Um desenvolvedor da sua empresa configurou uma build usando o AWS CodeBuild. A build falha e o desenvolvedor precisa solucionar rapidamente o problema para identificar quais comandos ou configurações no arquivo BuildSpec estão causando o erro.\n\nQual abordagem ajudará a alcançar esse objetivo?",
    "options": [
      "Conectar via SSH no container Docker do CodeBuild",
      "Habilitar monitoramento detalhado",
      "Congelar o CodeBuild durante sua próxima execução",
      "Executar o AWS CodeBuild localmente usando o agente CodeBuild"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Não é possível acessar via SSH o container Docker usado pelo CodeBuild, pois o ambiente é gerenciado e isolado. Por isso, a melhor prática é testar e corrigir erros localmente usando o agente CodeBuild.",
      "Incorreta. O monitoramento detalhado é um recurso disponível para instâncias EC2 e não para builds do CodeBuild. Embora seja possível capturar logs e eventos via AWS CloudTrail para auditoria, isso não ajuda diretamente na depuração dos comandos do arquivo BuildSpec durante a execução da build.",
      "Incorreta. Não é possível congelar o processo do CodeBuild durante a execução. É possível interromper uma build em execução, mas isso não ajuda na identificação dos erros no arquivo BuildSpec. Para mais detalhes, consulte: https://docs.aws.amazon.com/codebuild/latest/userguide/stop-build.html",
      "Correta. O AWS CodeBuild é um serviço totalmente gerenciado, sem necessidade de provisionar servidores. Com o suporte a builds locais, é possível executar o CodeBuild em uma máquina local usando o agente CodeBuild, permitindo testar e depurar os scripts de build e o arquivo BuildSpec antes de enviar o código. Isso facilita identificar e corrigir erros rapidamente no ambiente de desenvolvimento local."
    ]
  },
  {
    "question": "Você é um desenvolvedor responsável por manter uma aplicação web escrita em .NET. A aplicação faz referências a objetos públicos em um bucket S3 público acessível via URL pública. Durante uma revisão de código, seu colega alerta que essa abordagem não é uma boa prática, pois alguns objetos contêm dados privados. Após o administrador tornar o bucket S3 privado, você não consegue mais acessar os objetos, mas deseja criar uma aplicação que permita que as pessoas acessem alguns objetos conforme necessário, com uma restrição de tempo.\n\nQual das seguintes opções permitirá o acesso aos objetos?",
    "options": [
      "Usar URL pré-assinada",
      "Usar política de roteamento",
      "Usar política de bucket",
      "Usar política IAM"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Por padrão, todos os objetos no S3 são privados, e somente o proprietário do objeto tem permissão para acessá-los. Contudo, o proprietário pode compartilhar objetos temporariamente criando uma URL pré-assinada, usando suas credenciais de segurança, que concede permissão limitada no tempo para baixar os objetos. Ao criar uma URL pré-assinada, é necessário fornecer as credenciais, nome do bucket, chave do objeto, método HTTP (GET para download) e o tempo de expiração. Essas URLs são válidas apenas pelo período especificado, permitindo controle de acesso granular e temporário.",
      "Incorreta. Políticas de roteamento são aplicadas no DNS do Route 53 e não têm relação com controle de acesso a objetos no S3. Portanto, essa opção é inválida para o cenário apresentado.",
      "Incorreta. Políticas de bucket podem restringir acesso, por exemplo, por endereço IP, mas não oferecem suporte nativo para restrições temporais. Para controle de acesso com limite de tempo, uma abordagem melhor é usar URLs pré-assinadas.",
      "Incorreta. Embora seja possível usar políticas IAM para conceder acesso a um bucket específico, elas não suportam restrições baseadas em tempo para acesso temporário. Portanto, para controle de acesso com limite de tempo, essa não é a melhor opção."
    ]
  },
  {
    "question": "Como um AWS Certified Developer Associate, você está escrevendo um template CloudFormation em YAML. O template consiste na criação de uma instância EC2 e um recurso RDS. Após a criação dos recursos, você deseja exibir o endpoint de conexão do banco de dados RDS.\n\nQual função intrínseca retorna o valor necessário para isso?",
    "options": [
      "!FindInMap",
      "!GetAtt",
      "!Sub",
      "!Ref"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A função Fn::FindInMap é usada para buscar valores em um mapa de duas camadas definido na seção Mappings do template, geralmente para obter valores estáticos baseados em chaves, como AMIs por região, e não para acessar atributos dinâmicos de recursos criados.",
      "Correta. A função intrínseca Fn::GetAtt retorna o valor de um atributo de um recurso definido no template. No caso do RDS, é possível obter o endpoint de conexão usando !GetAtt seguido do nome lógico do recurso e do atributo Endpoint.Address, que contém o DNS do banco de dados.",
      "Incorreta. A função Fn::Sub é utilizada para substituir variáveis dentro de uma string com valores especificados, útil para construir comandos ou strings de saída, mas não retorna atributos específicos de recursos como o endpoint do RDS.",
      "Incorreta. A função Ref retorna o valor padrão de um parâmetro ou o ID lógico de um recurso, mas não retorna atributos específicos como o endpoint do RDS. Para obter o endpoint, é necessário usar !GetAtt."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento tem utilizado o serviço Amazon S3 como armazenamento de objetos. Com a introdução da consistência forte no Amazon S3, a equipe deseja entender o impacto dessa mudança em suas práticas de armazenamento de dados.\n\nComo um associado de desenvolvimento, você pode identificar as principais características do modelo de dados com consistência forte adotado pelo S3? (Selecione duas.)",
    "options": [
      "Um processo exclui um objeto existente e lista imediatamente as chaves dentro do bucket. O objeto ainda pode estar visível por alguns minutos até que a alteração seja propagada.",
      "Um processo exclui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 não retornará nenhum dado, pois o objeto foi excluído.",
      "Um processo substitui um objeto existente e pode ler dados antigos imediatamente após a substituição.",
      "Se você excluir um bucket e listar imediatamente todos os buckets, o bucket excluído ainda pode aparecer na lista.",
      "Um processo substitui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 retornará os dados atualizados."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Essa descrição representa um comportamento de consistência eventual, que não se aplica ao modelo atual do Amazon S3 para objetos. Com a consistência forte, a exclusão de um objeto é imediatamente refletida nas listagens, e o objeto não deve mais aparecer.",
      "Correta. O Amazon S3 oferece consistência forte para operações de leitura após gravação (read-after-write) e exclusão (DELETE) de objetos em todos os buckets e regiões AWS. Isso significa que, após a exclusão de um objeto, qualquer tentativa imediata de leitura não retornará dados, pois a exclusão já foi efetivada.",
      "Incorreta. O Amazon S3 garante consistência forte para substituições, portanto, a leitura imediata após a substituição não retornará dados antigos.",
      "Incorreta. A configuração e listagem de buckets no Amazon S3 seguem um modelo de consistência eventual. Portanto, a listagem de buckets não reflete consistência forte, e essa característica não faz parte do modelo de dados com consistência forte para objetos.",
      "Correta. O Amazon S3 garante consistência forte para substituições (PUTs que sobrescrevem objetos existentes). Portanto, a leitura imediata após a substituição retornará os dados atualizados, refletindo a alteração feita."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento percebeu que uma das instâncias EC2 foi configurada incorretamente com o atributo 'DeleteOnTermination' definido como True para seu volume raiz EBS.\n\nComo um associado de desenvolvimento, qual a melhor forma de desabilitar essa flag enquanto a instância ainda está em execução?",
    "options": [
      "Definir o atributo DisableApiTermination da instância usando a API.",
      "Atualizar o atributo usando o console de gerenciamento AWS. Selecionar a instância EC2 e desmarcar a caixa \"Delete On Termination\" para o volume raiz EBS.",
      "Definir o atributo DeleteOnTermination como False usando a linha de comando.",
      "O atributo não pode ser atualizado enquanto a instância está em execução. Pare a instância pelo console do Amazon EC2 e então atualize a flag."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O atributo DisableApiTermination controla a proteção contra término da instância, impedindo que ela seja terminada acidentalmente, mas não afeta o comportamento do DeleteOnTermination dos volumes EBS associados.",
      "Incorreta. O console da AWS não permite alterar o atributo DeleteOnTermination de volumes raiz em instâncias que já estão em execução. Essa configuração só pode ser definida durante o lançamento da instância.",
      "Correta. Se a instância já está em execução, é possível alterar o atributo DeleteOnTermination para False utilizando comandos via linha de comando, como o AWS CLI, sem a necessidade de parar a instância.",
      "Incorreta. Essa afirmação é falsa, pois é possível modificar o atributo DeleteOnTermination para volumes raiz em instâncias em execução via linha de comando, sem a necessidade de parar a instância."
    ]
  },
  {
    "question": "Como engenheiro de confiabilidade de site, você trabalha na construção e operação de sistemas distribuídos, tolerantes a falhas e em grande escala na nuvem, utilizando automação. Você acabou de substituir a plataforma CI/CD da empresa baseada em Jenkins pelo AWS CodeBuild e deseja definir programaticamente as etapas de build.\n\nQual das opções abaixo você deve escolher?",
    "options": [
      "Definir um arquivo appspec.yml no diretório raiz",
      "Definir um arquivo buildspec.yml no diretório raiz",
      "Definir um arquivo buildspec.yml no diretório codebuild/",
      "Definir um arquivo appspec.yml no diretório codebuild/"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O appspec.yml é um arquivo de configuração usado exclusivamente pelo AWS CodeDeploy para gerenciar implantações, não para definir processos de build no AWS CodeBuild.",
      "Correta. O AWS CodeBuild utiliza o arquivo buildspec.yml, que deve estar localizado no diretório raiz do código-fonte para definir as etapas e comandos do processo de build de forma programática e automatizada.",
      "Incorreta. Embora o arquivo buildspec.yml seja o formato correto para definir as etapas de build no AWS CodeBuild, ele deve estar localizado no diretório raiz do código-fonte, e não dentro de uma subpasta como codebuild/.",
      "Incorreta. O arquivo appspec.yml é utilizado pelo AWS CodeDeploy para orquestrar implantações, não para definir etapas de build no CodeBuild. Além disso, ele não deve estar em um subdiretório para funcionar corretamente."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento herdou uma aplicação web rodando na região us-east-1 com três zonas de disponibilidade (us-east-1a, us-east-1b e us-east-1c), cujo tráfego web de entrada é roteado por um balanceador de carga. Quando uma das instâncias EC2 que hospedam a aplicação web falha, a equipe percebe que o balanceador de carga continua a enviar tráfego para essa instância, causando problemas intermitentes.\n\nQual das seguintes ações a equipe de desenvolvimento deve realizar para minimizar esse problema?",
    "options": [
      "Habilitar verificações de integridade (Health Checks)",
      "Habilitar implantações Multi-AZ",
      "Habilitar afinidade de sessão (Stickiness)",
      "Habilitar SSL"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. As verificações de integridade permitem que o balanceador de carga monitore periodicamente o estado das instâncias EC2 enviando pings, tentando conexões ou fazendo requisições. Instâncias que não respondem adequadamente são marcadas como fora de serviço (OutOfService), evitando que o tráfego seja roteado para elas, o que minimiza problemas causados por instâncias com falha.",
      "Incorreta. Embora distribuir instâncias em múltiplas zonas de disponibilidade seja uma boa prática para aumentar a disponibilidade, isso não impede que o balanceador de carga envie tráfego para instâncias com falha. É necessário um mecanismo de verificação de integridade para gerenciar corretamente o roteamento do tráfego.",
      "Incorreta. A afinidade de sessão faz com que o balanceador de carga direcione as requisições subsequentes de um usuário para a mesma instância, mantendo a sessão ativa. No entanto, isso não ajuda a identificar ou evitar instâncias com problemas de saúde, portanto não resolve o problema descrito.",
      "Incorreta. Habilitar SSL garante a criptografia da comunicação entre o cliente e o servidor, protegendo os dados em trânsito. Essa configuração não influencia na detecção de falhas das instâncias EC2 nem no roteamento do tráfego pelo balanceador."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma organização varejista deseja permitir que uma função Lambda em sua Conta AWS A acesse uma tabela DynamoDB em outra Conta AWS B.\n\nComo um Associate Developer, qual das seguintes soluções você recomendaria para esse caso de uso? (Selecione duas.)",
    "options": [
      "Configurar uma política inline na função Lambda da Conta A para acessar diretamente a tabela DynamoDB na Conta B.",
      "Criar um clone da função Lambda na Conta AWS B para que ela possa acessar a tabela DynamoDB na mesma conta.",
      "Criar uma função IAM na Conta B com acesso ao DynamoDB. Modificar a política de confiança da função na Conta B para permitir que a função de execução da Lambda assuma essa função. Atualizar o código da função Lambda para incluir a chamada da API AssumeRole.",
      "Adicionar uma política de recurso à tabela DynamoDB na Conta AWS B para conceder acesso à função Lambda na Conta A.",
      "Criar uma função IAM na Conta B com acesso ao DynamoDB. Modificar a política de confiança dessa função IAM na Conta B para permitir que a função Lambda da Conta A a assuma. Atualizar o código da função Lambda para incluir a chamada da API AssumeRole."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Políticas inline na função Lambda da Conta A não concedem permissões cross-account para acessar recursos em outra conta sem o uso de AssumeRole ou políticas de recurso adequadas.",
      "Incorreta. Clonar a função Lambda em outra conta não resolve o problema de acesso cross-account e adiciona complexidade desnecessária.",
      "Correta. Essa é a abordagem recomendada para permitir que uma função Lambda em uma conta acesse recursos em outra conta. A função IAM na Conta B concede permissões ao DynamoDB e permite que a função Lambda da Conta A a assuma via AssumeRole, garantindo segurança e controle adequados.",
      "Incorreta. Tabelas DynamoDB não suportam políticas de recurso para controle de acesso cross-account, portanto essa opção não é viável.",
      "Correta. Essa abordagem configura corretamente a política de confiança na função IAM da Conta B para permitir que a função Lambda da Conta A assuma essa função via AssumeRole, garantindo acesso seguro e controlado ao DynamoDB cross-account."
    ]
  },
  {
    "question": "Uma organização com cargas de trabalho de alto volume de dados migrou com sucesso para o DynamoDB após enfrentar muitos problemas com sistemas tradicionais de banco de dados. No entanto, alguns meses após a entrada em produção, as tabelas do DynamoDB estão registrando latência consistentemente alta.\n\nComo um Associate Developer, qual das seguintes opções você sugeriria para reduzir a latência? (Selecione duas.)",
    "options": [
      "Utilizar o DynamoDB Accelerator (DAX) para empresas com cargas de trabalho intensivas em gravação.",
      "Considerar o uso de tabelas globais se sua aplicação for acessada por usuários distribuídos globalmente.",
      "Aumentar as configurações de timeout das requisições para que o cliente tenha tempo suficiente para completar as solicitações, reduzindo assim as tentativas repetidas no sistema.",
      "Utilizar leituras eventualmente consistentes em vez de leituras fortemente consistentes sempre que possível.",
      "Reduzir o pool de conexões, que mantém as conexões ativas mesmo quando não há requisições de usuários, bloqueando assim os serviços."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O DAX é recomendado para cargas de trabalho intensivas em leitura, pois é um cache em memória totalmente gerenciado que pode melhorar o desempenho de leitura em até 10 vezes. Para cargas de trabalho predominantemente de gravação, o DAX não traz benefícios significativos.",
      "Correta. Tabelas globais replicam dados entre múltiplas regiões da AWS, reduzindo a latência ao aproximar os dados dos usuários finais. Isso é especialmente importante para aplicações com usuários geograficamente dispersos.",
      "Incorreta. O ideal é reduzir o tempo de timeout para que o cliente abandone requisições de alta latência mais rapidamente e envie uma nova solicitação, que geralmente é processada mais rapidamente. Aumentar o timeout pode causar maior latência percebida e sobrecarga no sistema.",
      "Correta. Leituras eventualmente consistentes são mais rápidas e menos propensas a apresentar alta latência do que leituras fortemente consistentes, além de serem mais econômicas. Se a aplicação tolera uma consistência eventual, essa é uma boa prática para reduzir latência.",
      "Incorreta. Reduzir o pool de conexões pode aumentar a latência, pois manter conexões ativas e reutilizá-las ajuda a manter caches internos aquecidos, reduzindo a latência. Em alguns casos, enviar tráfego dummy para a tabela também pode ajudar a manter o cache aquecido."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico possui uma frota de servidores web baseados em EC2 que estão enfrentando problemas de alta utilização de CPU. A equipe de desenvolvimento determinou que o atendimento de tráfego seguro via HTTPS é um dos principais fatores que contribuem para a alta carga da CPU.\n\nQuais das seguintes ações podem reduzir a alta carga de CPU nos servidores web? (Selecione duas.)",
    "options": [
      "Criar um listener HTTPS no Application Load Balancer com SSL pass-through",
      "Criar um listener HTTP no Application Load Balancer com terminação SSL",
      "Criar um listener HTTP no Application Load Balancer com SSL pass-through",
      "Configurar um certificado SSL/TLS no Application Load Balancer via AWS Certificate Manager (ACM)",
      "Criar um listener HTTPS no Application Load Balancer com terminação SSL"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora um listener HTTPS possa ser configurado, o SSL pass-through significa que o tráfego criptografado é encaminhado diretamente para as instâncias EC2, que continuam a realizar a descriptografia, mantendo a alta carga de CPU nos servidores.",
      "Incorreta. Um listener HTTP não suporta terminação SSL, pois o protocolo HTTP não é criptografado. Portanto, não é possível realizar terminação SSL em um listener HTTP, tornando esta opção inválida para descarregar a CPU dos servidores.",
      "Incorreta. Um listener HTTP não suporta SSL pass-through, pois o protocolo HTTP não é criptografado. Além disso, o SSL pass-through não realiza terminação no ALB, mantendo a carga de descriptografia nas instâncias EC2, o que não resolve o problema de alta CPU.",
      "Correta. Configurar um certificado SSL/TLS no ALB usando o ACM permite que o balanceador de carga realize a terminação SSL, ou seja, ele descriptografa o tráfego HTTPS antes de encaminhá-lo para as instâncias EC2, reduzindo a carga de CPU nos servidores.",
      "Correta. Um listener HTTPS com terminação SSL no ALB permite que o balanceador de carga gerencie a descriptografia do tráfego seguro, aliviando a necessidade das instâncias EC2 processarem essa carga, o que diminui a utilização da CPU nos servidores web."
    ]
  },
  {
    "question": "Uma empresa utiliza um grande conjunto de volumes EBS para sua frota de instâncias Amazon EC2. Como um AWS Certified Developer – Associate, foi solicitado seu auxílio para entender os recursos de segurança dos volumes EBS. A empresa não deseja construir ou manter sua própria infraestrutura de gerenciamento de chaves de criptografia.\n\nVocê pode ajudá-los a entender o que funciona para a criptografia do Amazon EBS? (Selecione duas.)",
    "options": [
      "A criptografia por padrão é uma configuração específica de Zona de Disponibilidade (AZ). Se você ativá-la para uma AZ, não pode desativá-la para volumes ou snapshots individuais nessa AZ.",
      "Você pode criptografar um volume ou snapshot existente não criptografado usando os SDKs da AWS Key Management Service (KMS).",
      "A criptografia por padrão é uma configuração específica da Região. Se você ativá-la para uma Região, não pode desativá-la para volumes ou snapshots individuais nessa Região.",
      "Um snapshot de um volume criptografado pode ser criptografado ou não criptografado.",
      "Um volume restaurado a partir de um snapshot criptografado, ou uma cópia de um snapshot criptografado, está sempre criptografado."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A criptografia por padrão é uma configuração específica da Região, não da Zona de Disponibilidade. Ao ativá-la para uma Região, não é possível desativá-la para volumes ou snapshots individuais nessa Região.",
      "Incorreta. Não existe uma forma direta de criptografar um volume ou snapshot já existente e não criptografado. Para criptografar, é necessário criar uma cópia do snapshot original habilitando a criptografia durante a cópia e então criar um volume a partir desse snapshot criptografado.",
      "Correta. É possível configurar sua conta AWS para forçar a criptografia dos novos volumes EBS e cópias de snapshots criados. Essa configuração é específica da Região e, uma vez ativada, não pode ser desativada para volumes ou snapshots individuais.",
      "Incorreta. Um snapshot criado a partir de um volume criptografado sempre será criptografado. Não é possível criar snapshots não criptografados a partir de volumes criptografados.",
      "Correta. Um volume criado a partir de um snapshot criptografado ou uma cópia desse snapshot sempre será criptografado. A criptografia não pode ser removida de volumes ou snapshots criptografados."
    ]
  },
  {
    "question": "Uma empresa utiliza uma infraestrutura baseada em microsserviços para processar chamadas de API de clientes, realizar filtragem de requisições e armazenar em cache usando o AWS API Gateway. Os usuários relatam receber o código de erro 501 e você foi acionado para identificar o que está falhando.\n\nQual serviço você escolheria para ajudar na solução desse problema?",
    "options": [
      "Utilizar o serviço AWS CloudTrail",
      "Utilizar o serviço Amazon CloudWatch",
      "Utilizar o serviço AWS X-Ray",
      "Utilizar o serviço Amazon API Gateway"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O AWS CloudTrail fornece um histórico das chamadas de API feitas na conta AWS, incluindo ações via Console, SDKs e ferramentas de linha de comando. Embora seja útil para monitoramento e auditoria geral, ele não oferece uma análise detalhada do fluxo interno entre microsserviços ou ajuda a identificar problemas específicos de execução, como o erro 501 relatado.",
      "Incorreta. O Amazon CloudWatch é um serviço de monitoramento e gerenciamento que coleta métricas e logs de recursos AWS e aplicações híbridas ou on-premises. Embora possa fornecer dados e alertas sobre o estado geral dos serviços, ele não oferece ferramentas específicas para depurar problemas detalhados em aplicações baseadas em microsserviços, como análise de rastreamento de chamadas que o X-Ray oferece.",
      "Correta. O AWS X-Ray ajuda desenvolvedores a analisar e depurar aplicações distribuídas em produção, especialmente aquelas baseadas em arquitetura de microsserviços. Com o X-Ray, é possível entender o desempenho da aplicação e seus serviços subjacentes para identificar e solucionar a causa raiz de problemas de performance e erros. Ele oferece uma visão completa das requisições enquanto trafegam pela aplicação, mostrando um mapa dos componentes envolvidos, o que é essencial para diagnosticar erros como o código 501.",
      "Incorreta. O Amazon API Gateway é um serviço para criação, publicação, manutenção, monitoramento e segurança de APIs REST, HTTP e WebSocket em qualquer escala. Apesar de ser o ponto de entrada para as chamadas de API, ele não permite investigar o fluxo detalhado entre microsserviços nem diagnosticar problemas internos específicos que geram erros como o 501."
    ]
  },
  {
    "question": "Uma empresa deseja armazenar seus arquivos acessados com pouca frequência na AWS, que possam ser acessados simultaneamente por centenas de instâncias EC2. A empresa precisa do serviço de armazenamento de arquivos mais econômico que forneça acesso imediato aos dados sempre que necessário.\n\nQual das seguintes opções representa a melhor solução para os requisitos apresentados?",
    "options": [
      "Classe de armazenamento Amazon Elastic File System (EFS) Standard–IA",
      "Classe de armazenamento Amazon Elastic File System (EFS) Standard",
      "Classe de armazenamento Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
      "Amazon Elastic Block Store (EBS)"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon EFS é um serviço de armazenamento de arquivos que oferece interface de sistema de arquivos POSIX, acesso concorrente para milhares de instâncias EC2 e alta durabilidade. A classe Standard–IA reduz custos para arquivos acessados com pouca frequência sem sacrificar a disponibilidade e o acesso imediato aos dados, atendendo perfeitamente aos requisitos da empresa.",
      "Incorreta. A classe de armazenamento EFS Standard é ideal para arquivos acessados com frequência, oferecendo alta durabilidade e disponibilidade. No entanto, a empresa busca reduzir custos armazenando arquivos acessados com pouca frequência, o que torna essa opção menos econômica para o caso apresentado.",
      "Incorreta. O Amazon S3 é um serviço de armazenamento de objetos acessível via API pela internet, não um sistema de arquivos. Portanto, não oferece a interface de sistema de arquivos nem o acesso concorrente necessário para centenas de instâncias EC2 acessarem os arquivos simultaneamente.",
      "Incorreta. O Amazon EBS é um serviço de armazenamento em nível de bloco para uso com uma única instância EC2. Ele oferece baixa latência para acesso a dados, mas não suporta acesso simultâneo por centenas de instâncias EC2, além de não ser um serviço de armazenamento de arquivos, o que é necessário neste caso."
    ]
  },
  {
    "question": "Você é um desenvolvedor DynamoDB em uma empresa aeroespacial que precisa gravar 6 objetos por segundo, cada um com tamanho de 4,5 KB.\n\nQual é a unidade de capacidade de gravação (Write Capacity Unit - WCU) necessária para o seu projeto?",
    "options": [
      "46",
      "24",
      "30",
      "15"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Esta opção superestima a capacidade necessária sem justificativa baseada no cálculo correto do tamanho do item e número de gravações por segundo.",
      "Incorreta. Esta opção não considera o arredondamento do tamanho do item para múltiplos de 1 KB e, portanto, subestima a capacidade necessária.",
      "Correta. Cada unidade de capacidade de gravação (WCU) representa uma gravação por segundo para um item de até 1 KB. Como o tamanho do item é 4,5 KB, ele é arredondado para 5 KB, consumindo 5 WCUs por gravação. Para 6 gravações por segundo, o total é 6 x 5 = 30 WCUs.",
      "Incorreta. Esta opção considera o tamanho do item como 2,5 KB, o que não está correto, pois o DynamoDB arredonda para cima para o próximo múltiplo inteiro de 1 KB."
    ]
  },
  {
    "question": "Sua organização possui desenvolvedores que fazem merge de alterações de código regularmente em um repositório AWS CodeCommit. Seu pipeline utiliza o AWS CodeCommit como fonte e você deseja configurar uma regra que reaja a mudanças no CodeCommit.\n\nQual das opções a seguir você escolheria para esse tipo de integração?",
    "options": [
      "Utilizar função Lambda com Amazon Simple Notification Service (SNS)",
      "Utilizar Regras do Amazon EventBridge",
      "Utilizar Regras de Eventos do CloudTrail com Amazon Simple Email Service (SES)",
      "Utilizar Regras de Eventos do Lambda"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Funções Lambda podem ser acionadas por eventos do EventBridge, mas o AWS CodePipeline não dispara funções Lambda diretamente. Portanto, essa integração não é a forma recomendada para reagir a mudanças no CodeCommit.",
      "Correta. O Amazon EventBridge é o serviço atual que monitora eventos e mudanças de estado em recursos AWS e aplicações. Ele permite detectar e reagir a mudanças no AWS CodeCommit configurando regras que capturam eventos específicos, acionando ações automaticamente, o que o torna ideal para reagir a alterações no CodeCommit.",
      "Incorreta. Não existe o conceito de 'Regras de Eventos do CloudTrail'. O AWS CloudTrail registra chamadas de API para sua conta AWS, mas não possui regras de eventos para acionar ações diretamente, e o uso do SES para este propósito não é adequado.",
      "Incorreta. Não existe o conceito de 'Regras de Eventos do Lambda'. Lambda é uma função que pode ser acionada por eventos, mas as regras de eventos são gerenciadas pelo EventBridge, não pelo Lambda."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de saúde está planejando migrar para a AWS Cloud a partir do data center local. A equipe está avaliando o Amazon RDS como camada de banco de dados para sua aplicação principal.\n\nQuais das seguintes afirmações você identificaria como corretas para o RDS Multi-AZ? (Selecione duas.)",
    "options": [
      "As atualizações na sua instância de banco de dados são replicadas assincronamente entre a Zona de Disponibilidade para a instância standby para manter ambas sincronizadas.",
      "O Amazon RDS inicia automaticamente uma failover para a instância standby caso o banco de dados primário falhe por qualquer motivo.",
      "Para aumentar a escalabilidade de leitura, a instância standby Multi-AZ pode ser usada para atender requisições de leitura.",
      "O RDS aplica atualizações do sistema operacional realizando a manutenção na instância standby, depois promovendo a standby para primária e, finalmente, realizando a manutenção na antiga primária, que se torna a nova standby.",
      "Para backups automatizados, a atividade de I/O é suspensa no banco de dados primário, pois os backups não são realizados na instância standby."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A replicação entre a instância primária e a standby em Multi-AZ é síncrona, garantindo que ambas estejam sempre sincronizadas para proteger contra perda de dados em caso de falha.",
      "Correta. O Amazon RDS oferece alta disponibilidade com Multi-AZ ao realizar failover automático para a instância standby em caso de falha no banco de dados primário, minimizando o tempo de indisponibilidade.",
      "Incorreta. A instância standby em uma implantação Multi-AZ não pode ser usada para operações de leitura ou escrita. Ela serve apenas para alta disponibilidade e recuperação em caso de falha, não para escalabilidade de leitura.",
      "Correta. Durante a manutenção, o RDS primeiro atualiza a instância standby, promove ela para primária e só então atualiza a antiga primária, minimizando o impacto da manutenção e garantindo alta disponibilidade.",
      "Incorreta. Com Multi-AZ, os backups automatizados são realizados na instância standby, o que evita a suspensão da atividade de I/O no banco primário durante a janela de backup, melhorando a disponibilidade."
    ]
  },
  {
    "question": "Um aplicativo de compartilhamento de fotos gerencia sua frota de servidores EC2 por trás de um Application Load Balancer, e o tráfego é distribuído por uma distribuição CloudFront. A equipe de desenvolvimento deseja desacoplar o processo de autenticação de usuários do aplicativo para que os servidores possam focar apenas na lógica de negócio.\n\nComo um Associate Developer, qual das seguintes soluções você recomendaria para atender a esse caso de uso com o mínimo esforço de desenvolvimento?",
    "options": [
      "Usar autenticação Cognito via Cognito Identity Pools para o seu Application Load Balancer",
      "Usar autenticação Cognito via Cognito Identity Pools para a sua distribuição CloudFront",
      "Usar autenticação Cognito via Cognito User Pools para o seu Application Load Balancer",
      "Usar autenticação Cognito via Cognito User Pools para a sua distribuição CloudFront"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Não existe a possibilidade de usar autenticação via Cognito Identity Pools para gerenciar a autenticação de usuários diretamente no Application Load Balancer. Os Identity Pools fornecem credenciais temporárias para usuários autenticados ou convidados, mas não gerenciam o processo de autenticação em si, que deve ser feito via Cognito User Pools.",
      "Incorreta. Cognito Identity Pools não são usados para gerenciar autenticação de usuários. Eles fornecem credenciais temporárias para acesso a recursos AWS, mas não realizam autenticação direta. Portanto, essa opção não é adequada para autenticação de usuários na distribuição CloudFront.",
      "Correta. O Application Load Balancer pode ser configurado para autenticar usuários de forma segura usando Cognito User Pools, permitindo que a autenticação seja offloadada para o ALB. Isso possibilita que os servidores da aplicação foquem exclusivamente na lógica de negócio. Além disso, Cognito User Pools suportam autenticação via provedores sociais e corporativos, facilitando a integração e reduzindo o esforço de desenvolvimento.",
      "Incorreta. Não é possível integrar diretamente Cognito User Pools com uma distribuição CloudFront para autenticação. Para isso, seria necessário criar uma função Lambda@Edge para realizar a autenticação via Cognito User Pools, o que implica em esforço adicional de desenvolvimento, não atendendo ao requisito de mínimo esforço."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de comércio eletrônico deseja executar um serviço de armazenamento de dados serverless em dois containers Docker que compartilham recursos.\n\nQual das seguintes configurações do ECS pode ser usada para facilitar esse caso de uso?",
    "options": [
      "Colocar os dois containers em duas definições de tarefa separadas usando o tipo de lançamento EC2",
      "Colocar os dois containers em duas definições de tarefa separadas usando o tipo de lançamento Fargate",
      "Colocar os dois containers em uma única definição de tarefa usando o tipo de lançamento EC2",
      "Colocar os dois containers em uma única definição de tarefa usando o tipo de lançamento Fargate"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Usar definições de tarefa separadas impede o compartilhamento direto de recursos entre os containers e o tipo EC2 não é serverless, portanto não atende ao requisito.",
      "Incorreta. Definições de tarefa separadas impedem o compartilhamento de recursos entre containers, o que não atende ao requisito, mesmo que o tipo de lançamento seja serverless.",
      "Incorreta. Embora colocar os containers em uma única definição de tarefa permita o compartilhamento de recursos, o tipo de lançamento EC2 exige gerenciamento de instâncias e não é serverless, o que contraria o requisito do time.",
      "Correta. Colocar os dois containers em uma única definição de tarefa com o tipo de lançamento Fargate permite que eles compartilhem recursos de forma eficiente em uma infraestrutura serverless gerenciada pela AWS, atendendo ao requisito do time de desenvolvimento."
    ]
  },
  {
    "question": "Sua aplicação envia mensagens com frequência para uma fila do Amazon Simple Queue Service (SQS), que são então consultadas por outra aplicação que especifica qual mensagem deseja recuperar.\n\nQual das opções abaixo descreve o número máximo de mensagens que podem ser recuperadas de uma vez?",
    "options": [
      "5",
      "100",
      "10",
      "20"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora seja possível recuperar menos de 10 mensagens, o limite máximo suportado pela API do SQS para recuperação simultânea é maior que 5.",
      "Incorreta. Apesar de o SQS suportar filas com milhares de mensagens, a operação de recebimento limita a quantidade máxima de mensagens retornadas por chamada a 10.",
      "Correta. O Amazon SQS permite recuperar até 10 mensagens em uma única chamada ao método ReceiveMessage, que é o limite máximo definido pela API para processamento em lote.",
      "Incorreta. O Amazon SQS não permite recuperar mais que 10 mensagens em uma única chamada, portanto 20 é um valor acima do limite permitido."
    ]
  },
  {
    "question": "Uma empresa deseja implementar autenticação para seu novo serviço RESTful API que utiliza o Amazon API Gateway. Para autenticar as chamadas, cada requisição deve incluir cabeçalhos HTTP com um client ID e um user ID. Essas credenciais devem ser comparadas com os dados de autenticação armazenados em uma tabela DynamoDB.\n\nComo um AWS Certified Developer – Associate, qual das seguintes opções você recomendaria para implementar essa autenticação no API Gateway?",
    "options": [
      "Configurar um Model no API Gateway que exija as credenciais, e então conceder ao API Gateway acesso à tabela de autenticação no DynamoDB.",
      "Atualizar as requisições de integração do API Gateway para exigir as credenciais, e então conceder ao API Gateway acesso à tabela de autenticação no DynamoDB.",
      "Desenvolver um authorizer Lambda que consulte os dados de autenticação na tabela DynamoDB.",
      "Autorizar usando o Amazon Cognito que referencie a tabela de autenticação do DynamoDB."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. No API Gateway, um Model define a estrutura dos dados da payload usando JSON Schema, mas não realiza autenticação ou validação de credenciais. Models são usados para validação de formato de dados, não para controle de acesso ou autenticação.",
      "Incorreta. As requisições de integração no API Gateway são usadas para encaminhar dados para o backend, mas não são adequadas para implementar autenticação personalizada. Além disso, conceder acesso direto do API Gateway ao DynamoDB para autenticação não é uma prática recomendada, pois o API Gateway não possui lógica para validar credenciais diretamente.",
      "Correta. Um authorizer Lambda é um recurso do API Gateway que permite executar uma função Lambda para controlar o acesso à API. Ele pode implementar um esquema de autenticação personalizado, como validar client ID e user ID presentes nos cabeçalhos HTTP, consultando a tabela DynamoDB para verificar as credenciais. Essa abordagem oferece flexibilidade e segurança para autenticação customizada.",
      "Incorreta. O Amazon Cognito User Pools gerencia usuários e autenticação, mas não suporta diretamente a referência a tabelas DynamoDB para validação de credenciais personalizadas. Para usar o Cognito, os usuários devem estar registrados no User Pool, e a autenticação é feita via tokens gerados pelo Cognito, não diretamente pela tabela DynamoDB."
    ]
  },
  {
    "question": "Você é um desenvolvedor da 'Movie Gallery', uma empresa que acabou de migrar para a nuvem. É necessário criar um banco de dados utilizando tecnologia NoSQL para armazenar filmes que serão listados para visualização pública. Você está em uma etapa importante do design do banco de dados com DynamoDB e precisa escolher a chave de partição apropriada.\n\nQual dos seguintes atributos únicos atende a esse requisito?",
    "options": [
      "producer_name",
      "movie_language",
      "lead_actor_name",
      "movie_id"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O atributo producer_name não é adequado porque terá valores duplicados, resultando em baixa cardinalidade, o que pode causar hotspots e distribuição desigual dos dados no DynamoDB.",
      "Incorreta. O atributo movie_language terá muitos valores repetidos, pois vários filmes podem estar no mesmo idioma, o que gera baixa cardinalidade e pode causar concentração de dados em poucas partições.",
      "Incorreta. O atributo lead_actor_name não é adequado porque muitos filmes podem ter o mesmo ator principal, resultando em valores duplicados e baixa cardinalidade, prejudicando a distribuição dos dados.",
      "Correta. O atributo movie_id possui alta cardinalidade, ou seja, valores únicos para cada item no banco de dados, tornando-o o candidato ideal para a chave de partição, garantindo uma distribuição uniforme dos dados entre as partições do DynamoDB."
    ]
  },
  {
    "question": "Uma empresa de varejo gerencia sua infraestrutura de TI na AWS Cloud utilizando o Elastic Beanstalk. A equipe de desenvolvimento planeja implantar a próxima versão da aplicação com o MÍNIMO tempo de inatividade e a capacidade de realizar rollback rapidamente caso a implantação apresente problemas.\n\nComo um Associate Developer, qual das seguintes opções você recomendaria para a equipe de desenvolvimento?",
    "options": [
      "Implantar a nova versão da aplicação utilizando a política de implantação 'All at once' (Tudo de uma vez).",
      "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling with additional batch' (Implantação em lotes com lote adicional).",
      "Implantar a nova versão em um ambiente separado via Blue/Green Deployment e, em seguida, trocar os registros do Route 53 entre os dois ambientes para redirecionar o tráfego para a nova versão.",
      "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling' (Implantação em lotes)."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora a implantação 'All at once' seja a mais rápida, ela pode causar indisponibilidade temporária da aplicação para os usuários, pois atualiza todas as instâncias simultaneamente, o que não atende ao requisito de mínimo downtime.",
      "Incorreta. Essa política evita qualquer redução de disponibilidade, mas aumenta o tempo total de implantação. O rollback também é manual e não tão rápido quanto o Blue/Green Deployment, não satisfazendo o requisito de rollback ágil.",
      "Correta. O Blue/Green Deployment permite implantar a nova versão em um ambiente isolado, evitando downtime. A troca rápida dos registros DNS no Route 53 redireciona instantaneamente o tráfego para a nova versão, possibilitando rollback imediato ao reverter a troca, atendendo aos requisitos da equipe.",
      "Incorreta. A implantação 'Rolling' evita o downtime e reduz a indisponibilidade, porém o processo de rollback não é imediato, pois requer uma nova implantação manual, o que não atende à necessidade de rollback rápido."
    ]
  },
  {
    "question": "Um desenvolvedor acabou de concluir a configuração do Application Load Balancer (ALB) para as instâncias EC2. Ao iniciar os testes, ele percebeu que esqueceu de associar grupos-alvo ao seu ALB.\n\nQual código de erro ele deve esperar encontrar nos logs de depuração?",
    "options": [
      "HTTP 500",
      "HTTP 504",
      "HTTP 503",
      "HTTP 403"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. HTTP 500 indica um erro interno do servidor. Esse erro pode ocorrer por diversas razões, como uma requisição sem protocolo HTTP válida, falha na geração de uma URL de redirecionamento pelo load balancer, ou erro na execução das regras do AWS WAF (Web ACL). Não está relacionado à ausência de grupos-alvo no ALB.",
      "Incorreta. HTTP 504 indica 'Gateway Timeout'. Esse erro acontece quando o ALB não consegue estabelecer conexão com o destino dentro do tempo limite ou quando o destino não responde a tempo. Não é o erro esperado para a ausência de grupos-alvo.",
      "Correta. HTTP 503 indica 'Serviço indisponível'. No contexto do ALB, esse erro ocorre quando não há grupos-alvo registrados ou disponíveis para o balanceador de carga, ou seja, o ALB não consegue encaminhar o tráfego para nenhum destino válido.",
      "Incorreta. HTTP 403 indica que o acesso foi proibido. Esse erro ocorre quando uma lista de controle de acesso da AWS WAF (Web ACL) bloqueia uma requisição ao ALB. Não é o erro esperado quando não há grupos-alvo associados."
    ]
  },
  {
    "question": "Uma aplicação é executada no Amazon Elastic Container Service (Amazon ECS) usando AWS Fargate. Os requisitos de auditoria da empresa exigem que o registro e o armazenamento dos dados de logs da aplicação sejam feitos de forma centralizada na AWS.\n\nComo você configuraria esse requisito?",
    "options": [
      "Os dados métricos do Amazon ECS são enviados automaticamente para o CloudWatch em períodos de 1 minuto. O serviço Amazon ECS usando o tipo de inicialização Fargate possui métricas de utilização de CPU e memória no CloudWatch que podem ser habilitadas pelo console do ECS.",
      "Use o driver de logs awslogs para enviar informações de log para o CloudWatch Logs. Para ativar o driver awslogs, suas instâncias de contêiner do Amazon ECS precisam ter pelo menos a versão 1.9.0 do agente de contêiner.",
      "Baixe e instale o agente unificado do CloudWatch nas instâncias ECS para coletar métricas internas do sistema e logs da aplicação. Os logs coletados pelo agente unificado do CloudWatch são processados e armazenados no Amazon CloudWatch Logs e podem ser consultados para geração de relatórios.",
      "Use o driver de logs awslogs para configurar os contêineres nas suas tarefas para enviar informações de log para o CloudWatch Logs. Adicione os parâmetros necessários de logConfiguration à definição da tarefa."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora o Amazon ECS envie métricas de CPU e memória para o CloudWatch automaticamente em tarefas Fargate, essas métricas são de sistema e não incluem os logs da aplicação, que são necessários para o requisito de auditoria.",
      "Incorreta. Esta afirmação é válida apenas para o tipo de inicialização EC2, onde o agente do contêiner precisa estar na versão 1.9.0 ou superior. No caso do Fargate, não há instâncias gerenciadas pelo usuário, portanto essa exigência não se aplica.",
      "Incorreta. O AWS Fargate é um serviço serverless e não oferece acesso às instâncias subjacentes para instalação de agentes. Portanto, não é possível baixar ou instalar o agente unificado do CloudWatch em instâncias ECS no Fargate.",
      "Correta. Para tarefas executadas no Fargate, é necessário configurar explicitamente o driver de logs awslogs na definição da tarefa, incluindo os parâmetros logConfiguration, para que os logs da aplicação sejam enviados e armazenados centralmente no CloudWatch Logs, atendendo aos requisitos de auditoria."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico utiliza filas Amazon SQS para desacoplar a arquitetura de sua aplicação. A equipe de desenvolvimento observou falhas no processamento de mensagens em um cenário específico, quando um usuário realiza um pedido para um determinado ID de produto, mas esse ID de produto é excluído, causando a falha no código da aplicação.\n\nComo um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para lidar com essas falhas no processamento de mensagens?",
    "options": [
      "Utilizar uma fila dead-letter (dead-letter queue) para lidar com falhas no processamento de mensagens",
      "Utilizar short polling para lidar com falhas no processamento de mensagens",
      "Utilizar long polling para lidar com falhas no processamento de mensagens",
      "Utilizar uma fila temporária para lidar com falhas no processamento de mensagens"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Filas dead-letter são usadas para armazenar mensagens que não puderam ser processadas com sucesso após várias tentativas. Elas permitem isolar mensagens problemáticas para análise posterior, facilitando a identificação e correção de erros na aplicação ou dados inconsistentes, como no caso do ID de produto excluído.",
      "Incorreta. Short polling retorna imediatamente uma resposta, mesmo que não haja mensagens disponíveis, e não oferece nenhum mecanismo para tratar mensagens que falham no processamento. Portanto, não é adequado para gerenciar falhas de processamento.",
      "Incorreta. Long polling é uma técnica para reduzir o número de chamadas de API e melhorar a eficiência na recepção de mensagens, mas não resolve falhas específicas no processamento das mensagens, como mensagens que não podem ser processadas devido a dados inconsistentes ou deletados.",
      "Incorreta. Filas temporárias são geralmente usadas para padrões de mensagens request-response, onde uma fila é criada temporariamente para receber respostas específicas. Elas não são projetadas para capturar ou gerenciar mensagens que falham no processamento em filas principais."
    ]
  },
  {
    "question": "Uma empresa deseja automatizar a criação de clusters ECS usando CloudFormation. O processo funcionou por um tempo, mas após criar definições de tarefas e atribuir funções, a equipe de desenvolvimento descobre que as tarefas dos containers não estão utilizando as permissões atribuídas a elas.\n\nQual configuração do ECS deve ser definida em /etc/ecs/ecs.config para permitir que as tarefas ECS utilizem funções IAM?",
    "options": [
      "ECS_ENGINE_AUTH_DATA",
      "ECS_AVAILABLE_LOGGING_DRIVERS",
      "ECS_ENABLE_TASK_IAM_ROLE=true",
      "ECS_CLUSTER"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Define credenciais para autenticação com repositórios privados de container, sem relação com permissões IAM em tarefas ECS.",
      "Incorreta. Define quais drivers de logging podem ser usados nos containers (como awslogs), mas não influencia no uso de funções IAM.",
      "Correta. A configuração 'ECS_ENABLE_TASK_IAM_ROLE=true' deve ser definida no arquivo /etc/ecs/ecs.config em instâncias EC2 registradas em um cluster ECS, permitindo que o agente ECS suporte o uso de taskRoleArn definido nas tarefas. É necessária quando o agente ECS está em modo de host EC2 (não Fargate).",
      "Incorreta. Essa configuração define o nome do cluster ECS ao qual a instância do container se conecta, mas não afeta permissões ou funções IAM."
    ]
  },
  {
    "question": "Uma empresa configurou um grupo de Auto Scaling com verificações de integridade. A configuração está definida com capacidade desejada de 3 e capacidade máxima de 3. As instâncias EC2 do seu grupo de Auto Scaling estão configuradas para escalar quando a utilização da CPU atingir 60%, e atualmente estão operando com 80% de utilização.\n\nO que acontecerá a seguir?",
    "options": [
      "A capacidade desejada aumentará para 4, enquanto a capacidade máxima permanecerá em 3.",
      "O sistema acionará alarmes do CloudWatch para o suporte da AWS.",
      "A capacidade desejada aumentará para 4 e a capacidade máxima também aumentará para 4.",
      "O sistema continuará operando normalmente, sem alterar a capacidade."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A capacidade desejada não pode ultrapassar o valor da capacidade máxima configurada. Portanto, não é possível que a capacidade desejada aumente para 4 se a capacidade máxima está definida como 3.",
      "Incorreta. Embora o Auto Scaling possa acionar alarmes do CloudWatch com base em métricas configuradas, o suporte da AWS não é automaticamente notificado nem intervém nesse processo. Essa opção é um distrator.",
      "Incorreta. A capacidade máxima não é alterada automaticamente. Para aumentar a capacidade máxima, é necessário modificar manualmente essa configuração. O Auto Scaling não ajusta a capacidade máxima com base na utilização da CPU ou na capacidade desejada.",
      "Correta. Como a capacidade desejada e máxima estão definidas como 3, e o grupo já está operando com 3 instâncias, o Auto Scaling não aumentará o número de instâncias, mesmo com a CPU em 80%. O grupo mantém o número atual de instâncias, pois já atingiu a capacidade máxima configurada."
    ]
  },
  {
    "question": "Sua equipe acabou de assinar um contrato anual com um cliente que mantém uma aplicação web em três camadas, que precisa ser migrada para a AWS Cloud. A aplicação possui tráfego constante ao longo do dia e necessita estar em um sistema confiável, com alta disponibilidade e sem tempo de inatividade. A solução também precisa ser custo-efetiva para essa startup.\n\nQual das seguintes opções você deve escolher?",
    "options": [
      "Uso de Auto Scaling com múltiplas zonas de disponibilidade",
      "Instâncias Reservadas do Amazon EC2 com reserva de capacidade zonal",
      "Instâncias Spot do Amazon EC2",
      "Instâncias On-Demand do Amazon EC2",
      "Infraestrutura On-Premises"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o Auto Scaling em múltiplas zonas de disponibilidade aumente a disponibilidade e escalabilidade da aplicação, ele não é uma opção isolada para garantir custo-efetividade e reserva de capacidade para um contrato anual, sendo necessário combinar com tipos adequados de instâncias para otimização de custos.",
      "Correta. As Instâncias Reservadas com reserva de capacidade zonal garantem a disponibilidade da capacidade necessária na zona de disponibilidade escolhida, proporcionando maior segurança para lançar o número de instâncias reservadas quando necessário. Além disso, proporcionam economia significativa em comparação com as instâncias sob demanda, especialmente em contratos de longo prazo, como um ano. Elas não são instâncias físicas separadas, mas sim um desconto aplicado na cobrança das instâncias On-Demand que correspondam a atributos específicos, como tipo de instância e região, sem diferença de desempenho.",
      "Incorreta. Instâncias Spot são instâncias EC2 não utilizadas oferecidas a preços muito reduzidos, mas podem ser interrompidas a qualquer momento sem aviso prévio. São indicadas para cargas de trabalho tolerantes a interrupções, como processamento em lote ou tarefas de background, e não para aplicações que exigem alta disponibilidade e zero downtime, como no caso apresentado.",
      "Incorreta. As instâncias On-Demand cobram por segundo sem compromissos de longo prazo, oferecendo flexibilidade total para iniciar, parar ou terminar instâncias a qualquer momento. No entanto, elas são mais caras do que as Instâncias Reservadas. Como o sistema precisa estar disponível por um ano inteiro, utilizar Instâncias Reservadas é mais econômico e adequado para esse cenário.",
      "Incorreta. Infraestrutura On-Premises implica que o cliente mantém fisicamente os servidores, incluindo provisionamento de capacidade e manutenção. Isso não é uma opção viável quando o objetivo é migrar a aplicação para a AWS Cloud, pois vai contra o modelo de nuvem gerenciada e escalável da AWS."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de TI configurou um Application Load Balancer (ALB) com uma função Lambda A como alvo, mas a função Lambda A não consegue processar nenhuma requisição proveniente do ALB. Após investigação, a equipe descobriu que há outra função Lambda B na conta AWS que está ultrapassando os limites de concorrência.\n\nComo a equipe de desenvolvimento pode resolver esse problema?",
    "options": [
      "Utilize uma distribuição CloudFront em vez de um Application Load Balancer (ALB) para a função Lambda A.",
      "Utilize um API Gateway em vez de um Application Load Balancer (ALB) para a função Lambda A.",
      "Configure a concorrência reservada para a função Lambda B para que ela seja limitada caso ultrapasse um determinado limite de concorrência.",
      "Configure concorrência provisionada para a função Lambda B para que ela seja limitada caso ultrapasse um determinado limite de concorrência."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora o CloudFront possa ser integrado com funções Lambda@Edge, essa alteração não impacta o limite de concorrência da função Lambda B. Portanto, essa opção não resolve o problema de concorrência que impede a função Lambda A de processar requisições.",
      "Incorreta. Trocar o ALB por API Gateway para a função Lambda A não afeta o limite de concorrência da função Lambda B, que é a causa do problema. Essa opção não resolve o problema de throttling causado pela concorrência excessiva da função Lambda B.",
      "Correta. A concorrência é o número de requisições que uma função Lambda está processando simultaneamente. Ao configurar concorrência reservada para a função Lambda B, você limita o máximo de instâncias simultâneas que essa função pode executar, evitando que ela consuma toda a capacidade disponível e permitindo que a função Lambda A processe suas requisições sem ser bloqueada por throttling.",
      "Incorreta. A concorrência provisionada é usada para garantir que uma função Lambda tenha instâncias pré-inicializadas para reduzir a latência, não para limitar o número máximo de execuções simultâneas. Portanto, essa opção não é adequada para controlar o uso excessivo de concorrência da função Lambda B."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando as ações de redirecionamento para um Application Load Balancer. Ele encontrou o seguinte trecho de código.\n\nQual das opções abaixo é um exemplo válido de condição para query string que o desenvolvedor pode usar na AWS CLI?",
    "options": [
      "[\n  {\n    \"Field\": \"query-string\",\n    \"StringHeaderConfig\": {\n      \"Values\": [\"*.example.com\"]\n    }\n  }\n]",
      "[\n  {\n    \"Field\": \"query-string\",\n    \"QueryStringConfig\": {\n      \"Values\": [\n        {\n          \"Key\": \"version\",\n          \"Value\": \"v1\"\n        },\n        {\n          \"Value\": \"*example*\"\n        }\n      ]\n    }\n  }\n]",
      "[\n  {\n    \"Field\": \"query-string\",\n    \"PathPatternConfig\": {\n      \"Values\": [\"/img/*\"]\n    }\n  }\n]",
      "[\n  {\n    \"Type\": \"redirect\",\n    \"RedirectConfig\": {\n      \"Protocol\": \"HTTPS\",\n      \"Port\": \"443\",\n      \"Host\": \"#{host}\",\n      \"Path\": \"/#{path}\",\n      \"Query\": \"#{query}\",\n      \"StatusCode\": \"HTTP_301\"\n    }\n  }\n]"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. \"StringHeaderConfig\" é um campo utilizado para condições baseadas em cabeçalhos HTTP, não para query strings. Usá-lo dentro de uma condição de \"query-string\" é incorreto e resultará em erro de configuração.",
      "Correta. Esta opção exemplifica corretamente uma condição para query string no Application Load Balancer, onde é possível definir pares chave/valor (como \"version=v1\") ou apenas valores com curingas (como \"*example*\"). Essa configuração permite que o ALB avalie a query string da requisição para aplicar regras específicas, utilizando curingas e correspondência não sensível a maiúsculas/minúsculas.",
      "Incorreta. \"PathPatternConfig\" não é um campo válido para condições de query string. Essa configuração é usada para padrões de caminho (path) e não para query strings, portanto esta opção está malformada e não será aceita pelo ALB.",
      "Incorreta. Esta configuração representa uma ação de redirecionamento, não uma condição de query string. Ela redireciona requisições HTTP para HTTPS mantendo o host, caminho e query string originais, mas não define uma condição para filtragem baseada em query strings."
    ]
  },
  {
    "question": "Uma empresa multinacional executa suas operações de tecnologia na AWS Cloud. Como parte da solução de armazenamento, ela utiliza um grande número de volumes EBS, com AWS Config e CloudTrail ativados. Um gerente tentou encontrar o nome do usuário que criou um volume EBS buscando nos logs de eventos do CloudTrail, mas não obteve sucesso.\n\nComo um Associate Developer, qual das seguintes opções você recomendaria como a solução correta para esse problema?",
    "options": [
      "As métricas do Amazon EBS no CloudWatch estão desativadas.",
      "O evento 'CreateVolume' no AWS CloudTrail é gerado pelo serviço EC2 quando um volume EBS é criado automaticamente durante o lançamento de uma instância, portanto, o usuário que iniciou a criação do volume deve ser identificado pelo evento de criação da instância EC2, não pelo evento 'CreateVolume' isoladamente.",
      "As verificações de status do volume EBS estão desativadas.",
      "Os logs de eventos do AWS CloudTrail para 'ManageVolume' não estão disponíveis para volumes EBS criados durante o lançamento de uma instância Amazon EC2."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o Amazon EBS envie métricas para o CloudWatch, essas métricas são relacionadas ao desempenho e estado dos volumes quando anexados a instâncias, e não fornecem informações sobre metadados ou o usuário que criou o volume. Portanto, desativar as métricas do CloudWatch não impacta a capacidade de rastrear a criação do volume via CloudTrail.",
      "Correta. O CloudTrail registra o evento 'CreateVolume' mesmo para volumes criados automaticamente durante o lançamento da instância EC2, mas esse evento é emitido pelo serviço EC2 em nome do usuário. Por isso, para identificar o usuário que originou a criação do volume, é necessário analisar o evento de criação da instância EC2, que contém a informação do usuário que iniciou a ação.",
      "Incorreta. As verificações de status do volume EBS ajudam a monitorar a integridade e possíveis inconsistências dos dados no volume, mas não fornecem informações sobre o usuário que criou o volume ou metadados relacionados à criação. Portanto, essa opção não resolve o problema de rastreamento solicitado.",
      "Incorreta. O evento 'ManageVolume' não existe no AWS CloudTrail e foi incluído como uma alternativa para confundir. Portanto, não é uma opção válida para rastreamento de criação ou gerenciamento de volumes EBS."
    ]
  },
  {
    "question": "Um pipeline do AWS CodePipeline foi configurado para ser acionado por eventos do Amazon CloudWatch. Recentemente, o pipeline falhou e, após investigação, o líder da equipe percebeu que a origem foi alterada de AWS CodeCommit para Amazon Simple Storage Service (S3). O líder da equipe solicitou que você identifique qual usuário realizou essa alteração.\n\nQual serviço da AWS ajudará você a resolver esse problema?",
    "options": [
      "AWS X-Ray",
      "Amazon CloudWatch",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O AWS X-Ray auxilia desenvolvedores a analisar e depurar aplicações distribuídas em produção, especialmente arquiteturas de microsserviços, permitindo identificar causas raiz de problemas de desempenho e erros. Embora seja essencial para troubleshooting de aplicações, não registra atividades de usuários nem alterações administrativas na conta AWS.",
      "Incorreta. O Amazon CloudWatch é um serviço de monitoramento e gerenciamento que coleta dados e fornece insights acionáveis sobre recursos e aplicações AWS, híbridas ou on-premises. Embora possa reagir a eventos relacionados a serviços AWS, ele não registra atividades de usuários nem alterações feitas na conta, portanto não é útil para identificar quem realizou uma mudança.",
      "Incorreta. O Amazon Inspector é um serviço automatizado de avaliação de segurança que ajuda a melhorar a segurança e conformidade das aplicações implantadas na AWS, focando em vulnerabilidades e acessos indevidos em instâncias EC2. Ele não registra atividades de usuários nem alterações feitas na conta, portanto não serve para rastrear quem modificou o pipeline.",
      "Correta. O AWS CloudTrail é um serviço que permite governança, conformidade, auditoria operacional e auditoria de riscos na sua conta AWS. Ele registra, monitora continuamente e mantém o histórico das atividades da conta relacionadas a ações realizadas em sua infraestrutura AWS, incluindo alterações feitas via Console de Gerenciamento, SDKs, CLI e outros serviços. Com o CloudTrail, é possível identificar qual usuário realizou a alteração, o endereço IP de origem e o horário da ação."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de TI utiliza o CloudFormation para gerenciar sua infraestrutura AWS. A equipe criou uma stack de rede contendo uma VPC com sub-redes e uma stack de aplicação web com instâncias EC2 e uma instância RDS. A equipe deseja referenciar a VPC criada na stack de rede dentro da stack da aplicação web.\n\nComo um profissional com certificação Developer Associate, qual das seguintes soluções você recomendaria para esse caso de uso?",
    "options": [
      "Criar uma referência entre stacks e usar o campo Outputs para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Fn::ImportValue para importar o valor da VPC na stack da aplicação web.",
      "Criar uma referência entre stacks e usar o campo Export para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Ref para referenciar o valor da VPC na stack da aplicação web.",
      "Criar uma referência entre stacks e usar o campo Export para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Fn::ImportValue para importar o valor da VPC na stack da aplicação web.",
      "Criar uma referência entre stacks e usar o campo Outputs para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Ref para referenciar o valor da VPC na stack da aplicação web."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O campo Outputs sozinho não exporta valores para outras stacks; para isso, é necessário usar o campo Export. Portanto, mesmo usando Fn::ImportValue, não será possível importar o valor corretamente.",
      "Incorreta. Embora o campo Export seja usado para disponibilizar valores para outras stacks, a função Ref não pode importar esses valores exportados. Para importar valores exportados, deve-se usar a função Fn::ImportValue.",
      "Correta. O método adequado para compartilhar valores entre stacks no CloudFormation é exportar o valor usando o campo Export na stack de origem e importar esse valor usando a função Fn::ImportValue na stack de destino.",
      "Incorreta. O campo Outputs sozinho não exporta valores para outras stacks. Além disso, a função Ref não pode ser usada para importar valores exportados de outras stacks, apenas para referenciar recursos dentro da mesma stack."
    ]
  },
  {
    "question": "Seu colega de equipe configurou uma notificação de evento do Amazon S3 para um bucket que armazena dados sensíveis de auditoria da empresa. Como líder da equipe, você está recebendo as notificações SNS para todos os eventos nesse bucket. Após validar os dados dos eventos, percebeu que alguns eventos estão faltando.\n\nQual poderia ser a causa desse comportamento e como evitá-lo no futuro? (Selecione duas.)",
    "options": [
      "O versionamento está habilitado no bucket S3, o que ajuda a garantir notificações para cada versão do objeto, mas ainda assim, em casos de sobrescritas rápidas ou exclusões, alguns eventos podem não ser entregues.",
      "Alguém pode ter criado uma nova configuração de notificação que substituiu sua configuração existente.",
      "Sua ação de notificação está escrevendo no mesmo bucket que aciona a notificação.",
      "Se duas gravações forem feitas simultaneamente em um único objeto sem versionamento, é possível que apenas uma notificação de evento seja enviada.",
      "As notificações do S3 são sempre garantidas e nunca podem ser perdidas, independentemente da configuração do bucket."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Habilitar o versionamento no bucket S3 faz com que cada gravação crie uma nova versão do objeto e dispare uma notificação para essa versão, reduzindo a chance de perda de eventos. No entanto, isso não garante 100% de entrega em todos os casos, especialmente em situações de concorrência muito alta ou exclusões rápidas.",
      "Incorreta. Embora seja possível que uma nova configuração substitua a anterior, no cenário apresentado o líder da equipe está recebendo a maioria das notificações, o que indica que a configuração não foi substituída.",
      "Incorreta. Se a ação de notificação escreve no mesmo bucket que dispara a notificação, isso pode causar um loop de execução, mas não resulta em eventos faltando.",
      "Correta. As notificações de evento do Amazon S3 são entregues pelo menos uma vez, mas em buckets sem versionamento, gravações simultâneas no mesmo objeto podem resultar em notificações agrupadas ou perdidas. Para garantir que cada gravação gere uma notificação, recomenda-se habilitar o versionamento no bucket.",
      "Incorreta. Embora o S3 tente entregar notificações pelo menos uma vez, não há garantia absoluta de que nenhuma notificação será perdida, especialmente em cenários de alta concorrência ou falhas temporárias."
    ]
  },
  {
    "question": "Como Desenvolvedor Associado, você é responsável pelo gerenciamento dos dados dos streams do AWS Kinesis na sua empresa. A equipe de segurança estabeleceu requisitos mais rigorosos, utilizando mecanismos disponíveis no serviço Kinesis Data Streams que não exigem alterações no código da sua parte.\n\nQuais das seguintes funcionalidades atendem aos requisitos mencionados? (Selecione duas.)",
    "options": [
      "Criptografia KMS para dados em repouso",
      "Criptografia SSE-C",
      "Uso de VPC Endpoints para Kinesis Data Streams",
      "Criptografia do lado do cliente"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A criptografia do lado do servidor com AWS KMS (Key Management Service) protege os dados em repouso automaticamente, sem necessidade de alterações no código, usando uma chave mestra gerenciada pelo cliente.",
      "Incorreta. A criptografia SSE-C é um recurso do Amazon S3 onde o cliente fornece as chaves de criptografia; não é aplicável ao Kinesis Data Streams e não atende ao requisito do cenário.",
      "Correta. O uso de VPC Endpoints permite que o tráfego entre a VPC e o Kinesis Data Streams permaneça na rede da AWS, aumentando a segurança sem necessidade de alterações no código do cliente.",
      "Incorreta. A criptografia do lado do cliente requer alterações no código para que os dados sejam criptografados antes do envio ao Kinesis, portanto não atende ao requisito de não modificar o código."
    ]
  },
  {
    "question": "Um desenvolvedor acabou de integrar uma função AWS Lambda a uma API do Amazon API Gateway. A integração resultou em erros que o desenvolvedor não consegue solucionar. Por isso, ele decidiu habilitar o registro de logs no CloudWatch no nível do método para a API Gateway.\n\nQuais são os pontos principais a serem considerados ao configurar o registro de logs no nível do método para a API Gateway? (Selecione duas.)",
    "options": [
      "No registro de acesso, apenas as variáveis $context e $input são suportadas.",
      "Os grupos ou streams de logs da API Gateway podem ser excluídos e recriados apenas ao reimplantar a API.",
      "O AWS Security Token Service (STS) é utilizado pela API Gateway para enviar dados de logs ao CloudWatch Logs. Portanto, o AWS STS deve estar habilitado na Região que você está utilizando.",
      "Para habilitar o CloudWatch Logs para todos ou apenas alguns métodos, é necessário especificar o ARN de uma role IAM que permita que a API Gateway grave informações no CloudWatch Logs em nome do usuário. Essa role deve conter uma política de confiança adequada.",
      "Você é cobrado pelo acesso às métricas do CloudWatch no nível do método e do estágio, mas não pelas métricas no nível da API."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. No registro de acesso, apenas as variáveis $context são suportadas para especificar detalhes do acesso, como quem acessou a API e como. As variáveis $input não são suportadas para logs de acesso.",
      "Incorreta. Embora seja possível excluir grupos ou streams de logs manualmente pelo console do CloudWatch, isso não é recomendado, pois pode causar falhas no registro dos logs. A criação dos grupos e streams ocorre durante a implantação da API, mas a exclusão manual pode impactar o funcionamento dos logs.",
      "Correta. A API Gateway chama o AWS STS para assumir a role do IAM que permite gravar logs no CloudWatch. Se o STS estiver desabilitado na Região, ocorrerão erros ao configurar o ARN da role para logs.",
      "Correta. É obrigatório informar o ARN de uma role IAM com a política AmazonAPIGatewayPushToCloudWatchLogs e a relação de confiança que permita à API Gateway assumir essa role para enviar logs ao CloudWatch.",
      "Incorreta. Você é cobrado pelo acesso às métricas no nível do método, mas as métricas no nível do estágio e da API não geram cobranças adicionais."
    ]
  },
  {
    "question": "Uma startup gerencia seus recursos na nuvem com Elastic Beanstalk. O ambiente consiste em algumas instâncias Amazon EC2, um Auto Scaling Group (ASG) e um Elastic Load Balancer (ELB). Mesmo após o Load Balancer marcar uma instância EC2 como não saudável, o ASG não a substituiu por uma instância saudável.\n\nComo desenvolvedor, qual configuração é necessária para automatizar a substituição da instância não saudável?",
    "options": [
      "O tipo de verificação de integridade (health check) do Auto Scaling Group deve ser alterado de EC2 para ELB utilizando um arquivo de configuração.",
      "O Auto Scaling Group não substitui automaticamente as instâncias marcadas como não saudáveis pelo Load Balancer; elas devem ser substituídas manualmente pelo Console AWS.",
      "O campo de caminho de ping (ping path) do Load Balancer está configurado incorretamente.",
      "Os parâmetros de health check foram configurados para verificar apenas a integridade da instância. A falha ocorreu devido a um problema na aplicação, que não foi considerada nos parâmetros de verificação."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Por padrão, o Auto Scaling Group realiza health checks do tipo EC2, que verificam apenas o status da instância EC2. Para que o ASG substitua automaticamente instâncias marcadas como não saudáveis pelo Load Balancer, é necessário alterar o tipo de health check para ELB, configurando isso via arquivo de configuração.",
      "Incorreta. Se o tipo de health check do ASG for configurado para ELB, o Auto Scaling substituirá automaticamente as instâncias consideradas não saudáveis pelo Load Balancer, eliminando a necessidade de intervenção manual.",
      "Incorreta. O ping path é uma configuração do ELB para health checks da aplicação. Se estiver incorreto, o ELB considerará todas as instâncias como não saudáveis, não apenas uma. Portanto, isso não explica o problema específico de uma instância não sendo substituída.",
      "Incorreta. Os health checks padrão do EC2 verificam somente o estado da instância, não a saúde da aplicação ou serviços internos. Portanto, a falha da aplicação não é detectada por esses parâmetros, e essa afirmação não explica a falta de substituição automática."
    ]
  },
  {
    "question": "Você é um desenvolvedor em uma empresa de nuvem que adota arquitetura serverless. Você já realizou o deployment inicial e deseja avançar para adicionar estágios no API Gateway, associando-os a deployments existentes. Seus estágios incluirão prod, test e dev, e precisarão corresponder a variantes de funções Lambda que podem ser atualizadas ao longo do tempo.\n\nQuais dos seguintes recursos você deve adicionar para alcançar esse objetivo? (Selecione duas.)",
    "options": [
      "Versões do Lambda",
      "Variáveis de Estágio",
      "Integração Lambda com X-Ray",
      "Aliases do Lambda",
      "Templates de Mapeamento"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Versões do Lambda são imutáveis e não podem ser atualizadas após a publicação, o que as torna inadequadas para gerenciar variantes que precisam ser atualizadas ao longo do tempo, como nos estágios prod, test e dev.",
      "Correta. Variáveis de estágio são pares nome-valor configurados para cada estágio de deployment do API Gateway. Elas funcionam como variáveis de ambiente e permitem configurar endpoints backend diferentes para cada estágio, facilitando a associação a diferentes variantes de funções Lambda ou outros recursos.",
      "Incorreta. A integração do Lambda com X-Ray é útil para rastreamento e depuração de requisições, mas não tem relação direta com o gerenciamento de estágios do API Gateway ou com a associação a variantes atualizáveis da função Lambda.",
      "Correta. Aliases do Lambda funcionam como ponteiros para versões específicas da função Lambda. Eles permitem criar versões \"mutáveis\" que podem apontar para diferentes versões da função ao longo do tempo, facilitando a gestão de ambientes como dev, test e prod de forma estável.",
      "Incorreta. Templates de mapeamento oferecem flexibilidade para transformar e mapear parâmetros de requisição e resposta, mas não são usados para associar estágios do API Gateway a versões mutáveis de funções Lambda nem para gerenciar variantes atualizáveis da função."
    ]
  },
  {
    "question": "Uma empresa de investimentos deseja gerar continuamente análises de séries temporais das ações compradas por seus clientes. A empresa quer construir um ranking ao vivo com análises quase em tempo real dessas ações mais demandadas.\n\nQual das alternativas a seguir representa uma solução totalmente gerenciada com o menor custo para atender a esse caso de uso?",
    "options": [
      "Usar Kinesis Data Streams para ingerir os dados e Kinesis Data Analytics para gerar as pontuações do ranking e as análises de séries temporais.",
      "Usar Kinesis Data Streams para ingerir os dados e a Amazon Kinesis Client Library para a lógica da aplicação gerar as pontuações do ranking e as análises de séries temporais.",
      "Usar Kinesis Firehose para ingerir os dados e Kinesis Data Analytics para gerar as pontuações do ranking e as análises de séries temporais.",
      "Usar Kinesis Firehose para ingerir os dados e Amazon Athena para gerar as pontuações do ranking e as análises de séries temporais."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora o Kinesis Data Streams seja altamente escalável e adequado para ingestão de grandes volumes de dados, ele envolve custos adicionais relacionados à provisão e manutenção de shards. Para um cenário que prioriza uma solução totalmente gerenciada e de menor custo, o Kinesis Firehose é mais indicado, pois elimina a necessidade de gerenciamento de shards e reduz os custos operacionais.",
      "Incorreta. A Amazon Kinesis Client Library (KCL) é uma biblioteca que facilita a construção de aplicações consumidoras para processar dados do Kinesis Data Streams, lidando com balanceamento de carga e tolerância a falhas. No entanto, essa abordagem exige desenvolvimento e gerenciamento da aplicação, o que não atende ao requisito de uma solução totalmente gerenciada e de menor custo.",
      "Correta. O Amazon Kinesis Data Firehose é um serviço totalmente gerenciado que captura, transforma e entrega dados de streaming para destinos como Amazon S3, Redshift e outros, escalando automaticamente e sem necessidade de administração contínua. O Kinesis Data Analytics permite transformar e analisar dados em streaming em tempo real usando Apache Flink, com baixa latência e sem necessidade de gerenciar servidores, sendo ideal para gerar rankings e análises de séries temporais quase em tempo real com custo otimizado.",
      "Incorreta. O Amazon Athena é um serviço de consulta interativa que analisa dados armazenados no Amazon S3 usando SQL padrão. Embora seja serverless e não exija gerenciamento de infraestrutura, ele não é adequado para análises em tempo real de dados de streaming. Para análises quase em tempo real, o Kinesis Data Analytics é a opção mais apropriada."
    ]
  },
  {
    "question": "Uma empresa de análise está utilizando o Kinesis Data Streams (KDS) para processar dados de status de saúde de automóveis de táxis gerenciados por um serviço de transporte por aplicativo. Múltiplas aplicações consumidoras estão utilizando os fluxos de dados recebidos, e os engenheiros notaram uma lentidão no desempenho da entrega dos dados entre os produtores e consumidores dos fluxos de dados.\n\nComo um Desenvolvedor Associado, qual das seguintes opções você sugeriria para melhorar o desempenho para esse caso de uso?",
    "options": [
      "Substituir o Kinesis Data Streams pelas filas FIFO do SQS",
      "Substituir o Kinesis Data Streams pelo Kinesis Data Firehose",
      "Utilizar o recurso Enhanced Fan-Out do Kinesis Data Streams",
      "Substituir o Kinesis Data Streams pelas filas padrão do SQS"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O Amazon SQS FIFO garante ordenação estrita e entrega exatamente uma vez, mas tem limitações de taxa de transferência e não é projetado para múltiplos consumidores paralelos lendo um fluxo contínuo de dados em tempo real. Portanto, não é adequado para o cenário descrito.",
      "Incorreta. O Amazon Kinesis Data Firehose é um serviço totalmente gerenciado que facilita o carregamento confiável de dados em streaming para data lakes, armazenamentos e ferramentas analíticas. Ele é projetado para entrega automática e não permite que aplicações consumam diretamente os dados em tempo real, diferentemente do Kinesis Data Streams. Portanto, não é adequado para casos que requerem múltiplos consumidores lendo dados simultaneamente em tempo real.",
      "Correta. Por padrão, a taxa de saída de 2 MB/segundo por shard é compartilhada entre todas as aplicações consumidoras, o que pode causar gargalos quando há múltiplos consumidores. O recurso Enhanced Fan-Out permite que cada consumidor registrado receba seu próprio throughput dedicado de 2 MB/segundo por shard, escalando automaticamente conforme o número de shards, melhorando significativamente o desempenho para múltiplos consumidores simultâneos.",
      "Incorreta. O Amazon SQS Standard oferece alta taxa de transferência e entrega pelo menos uma vez, mas não é ideal para cenários que exigem processamento em tempo real e múltiplos consumidores lendo simultaneamente de um fluxo contínuo de dados. Além disso, SQS não é um serviço de streaming, o que o torna inadequado para esse caso de uso."
    ]
  },
  {
    "question": "Como desenvolvedor, você está trabalhando em um aplicativo móvel que utiliza o Amazon Simple Queue Service (SQS) para enviar mensagens a sistemas downstream para processamento adicional. Um dos requisitos é que as mensagens sejam armazenadas na fila por um período de 12 dias.\n\nComo você configuraria esse requisito?",
    "options": [
      "Habilitar Long Polling para a fila SQS",
      "O período máximo de retenção das mensagens no SQS é de 7 dias, portanto, o período de 12 dias não é possível",
      "Alterar a configuração do tempo de retenção das mensagens na fila",
      "Usar uma fila SQS FIFO"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O Long Polling reduz o custo e melhora a eficiência ao receber mensagens, diminuindo respostas vazias, mas não altera o tempo de retenção das mensagens na fila. Logo, não resolve o requisito de armazenar mensagens por 12 dias.",
      "Incorreta. Essa afirmação é falsa, pois o Amazon SQS permite configurar o tempo de retenção das mensagens por até 14 dias (1.209.600 segundos). Portanto, armazenar mensagens por 12 dias é possível.",
      "Correta. O Amazon SQS permite configurar o tempo de retenção das mensagens entre 60 segundos e 1.209.600 segundos (14 dias). O padrão é 4 dias, mas pode ser ajustado para 12 dias usando a ação SetQueueAttributes, garantindo que as mensagens permaneçam na fila pelo período desejado.",
      "Incorreta. Filas FIFO (First-In-First-Out) são projetadas para garantir a ordem e evitar duplicatas nas mensagens, mas não influenciam o tempo de retenção das mensagens na fila. Portanto, essa configuração não atende ao requisito de retenção de 12 dias."
    ]
  },
  {
    "question": "Como engenheiro de confiabilidade de site, você é responsável por melhorar a implantação da empresa escalando e automatizando aplicações. À medida que novas versões da aplicação ficam prontas para produção, você garante que a aplicação seja implantada em diferentes conjuntos de instâncias EC2 em momentos distintos, permitindo uma transição suave.\n\nUsando o AWS CodeDeploy, qual das opções a seguir permite realizar isso?",
    "options": [
      "Agente do CodeDeploy",
      "Hooks do CodeDeploy",
      "Grupos de Implantação do CodeDeploy",
      "Definir múltiplas Aplicações no CodeDeploy"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O agente do CodeDeploy é um pacote de software instalado nas instâncias que permite que elas se comuniquem com o serviço CodeDeploy. Ele não controla a segmentação ou o agendamento das implantações em diferentes grupos de instâncias.",
      "Incorreta. Hooks são scripts vinculados a eventos do ciclo de vida da implantação, como ApplicationStart ou ApplicationStop, usados para executar tarefas específicas durante a implantação. Eles não controlam a segmentação ou o agendamento das implantações em diferentes conjuntos de instâncias.",
      "Correta. Grupos de implantação permitem definir conjuntos específicos de instâncias EC2 para receberem atualizações em momentos distintos. Cada grupo de implantação contém configurações e instâncias-alvo, possibilitando uma implantação gradual e controlada, facilitando transições suaves entre versões da aplicação.",
      "Incorreta. Definir múltiplas aplicações no CodeDeploy não é a abordagem correta para controlar a implantação em diferentes conjuntos de instâncias em momentos distintos. A separação e o controle do momento da implantação são gerenciados por grupos de implantação, não pela criação de múltiplas aplicações."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento configurou um Elastic Load Balancer para roteamento baseado em host. O objetivo é suportar múltiplos subdomínios e diferentes domínios de nível superior.\n\nA regra *.sample.com corresponde a qual(is) dos seguintes domínios?",
    "options": [
      "test.sample.com",
      "sample.com",
      "sample.test.com",
      "SAMPLE.COM"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A regra *.sample.com utiliza condições de host para definir regras que roteiam requisições com base no nome do host no cabeçalho (host header). Isso permite suportar múltiplos subdomínios usando um único load balancer. O padrão *.sample.com corresponde a qualquer subdomínio imediato, como test.sample.com.",
      "Incorreta. A regra *.sample.com não corresponde ao domínio raiz sample.com, pois o caractere curinga '*' representa um subdomínio, e sample.com não possui um subdomínio antes de sample.com.",
      "Incorreta. A regra *.sample.com corresponde a subdomínios imediatos de sample.com, mas sample.test.com é um subdomínio de test.com, não de sample.com, portanto não corresponde à regra.",
      "Incorreta. Embora o nome do host não seja sensível a maiúsculas ou minúsculas, a regra *.sample.com ainda não corresponde ao domínio raiz SAMPLE.COM, pois o curinga '*' exige um subdomínio antes de sample.com."
    ]
  },
  {
    "question": "Um aplicativo de streaming de vídeo utiliza o Amazon CloudFront para distribuição de dados. A equipe de desenvolvimento decidiu usar o CloudFront com failover de origem para alta disponibilidade.\n\nQuais das seguintes opções estão corretas ao configurar o CloudFront com Grupos de Origem? (Selecione duas.)",
    "options": [
      "O CloudFront realiza failover para a origem secundária somente quando o método HTTP da requisição do visualizador é GET, HEAD ou OPTIONS.",
      "Para configurar failover de origem, você deve ter uma distribuição com pelo menos três origens.",
      "Quando há um acerto de cache (cache hit), o CloudFront direciona a requisição para a origem primária no grupo de origem.",
      "O CloudFront direciona todas as requisições recebidas para a origem primária, mesmo quando uma requisição anterior fez failover para a origem secundária.",
      "No Grupo de Origem da sua distribuição, todas as origens são definidas como primárias para failover automático caso uma origem falhe."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O CloudFront realiza failover para a origem secundária apenas se o método HTTP da requisição for GET, HEAD ou OPTIONS. Métodos HTTP diferentes, como POST ou PUT, não acionam o failover.",
      "Incorreta. Apenas duas origens são necessárias para configurar failover de origem: uma primária e uma secundária.",
      "Incorreta. Quando há um acerto de cache, o CloudFront retorna o arquivo solicitado diretamente do cache, sem encaminhar a requisição para a origem. O encaminhamento para a origem primária ocorre apenas em caso de falta de cache (cache miss).",
      "Correta. O CloudFront sempre tenta a origem primária para cada requisição. Ele só envia requisições para a origem secundária após uma falha na origem primária, mas não mantém o roteamento para a secundária após o failover.",
      "Incorreta. Para configurar failover de origem, é necessário definir exatamente uma origem primária e uma secundária no grupo de origem. Não é possível definir todas as origens como primárias."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando um Auto Scaling Group do Amazon EC2 que deve lançar instâncias Spot e On-Demand conforme a necessidade. Além disso, o agente do CodeDeploy precisa ser instalado automaticamente nessas instâncias EC2. Todas as instâncias EC2 estão executando o sistema operacional Amazon Linux.\n\nQual é a forma mais eficiente operacionalmente para configurar esse requisito?",
    "options": [
      "Use configurações de inicialização (launch configurations) para configurar o Auto Scaling Group do EC2 para instâncias On-Demand e Spot. Adicione o script shell na aba de configuração de inicialização no console AWS. Esse script shell instalará o agente CodeDeploy.",
      "Use o AWS Systems Manager para instalar e atualizar automaticamente o agente CodeDeploy nas instâncias Spot e On-Demand.",
      "Use modelos de inicialização (launch templates) para configurar o Auto Scaling Group do EC2 para instâncias On-Demand e Spot. Ao criar um modelo de inicialização, utilize o campo User data para adicionar um script de configuração que será executado quando a instância iniciar. Esse script shell pode, então, instalar o agente CodeDeploy.",
      "Configure o AWS Resource Access Manager (RAM) para agendar a instalação automática do agente CodeDeploy nas instâncias EC2. O agendamento automático do RAM funciona apenas em máquinas Linux e não em sistemas operacionais Windows."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Configurações de inicialização não suportam o lançamento simultâneo de instâncias Spot e On-Demand nem múltiplos tipos de instância no mesmo Auto Scaling Group. Além disso, a AWS recomenda o uso de modelos de inicialização em vez de configurações de inicialização, pois oferecem mais flexibilidade e recursos.",
      "Incorreta. Embora o AWS Systems Manager possa ser usado para instalar e atualizar o agente CodeDeploy, ele exige que o agente do Systems Manager (SSM Agent) esteja previamente instalado e configurado em todas as instâncias. Isso adiciona complexidade e reduz a eficiência operacional para este caso específico.",
      "Correta. Modelos de inicialização permitem especificar configurações detalhadas para as instâncias, incluindo a capacidade de lançar instâncias Spot e On-Demand no mesmo Auto Scaling Group. O uso do campo User data para executar um script de instalação do agente CodeDeploy na inicialização é a forma mais eficiente e automatizada para garantir que o agente esteja instalado em todas as instâncias Amazon Linux.",
      "Incorreta. O AWS RAM é um serviço que permite compartilhar recursos de forma segura entre contas AWS, dentro de uma organização ou com usuários e funções IAM, mas não é utilizado para agendar ou automatizar a instalação do agente CodeDeploy. Portanto, essa opção não atende ao requisito."
    ]
  },
  {
    "question": "Uma aplicação de codificação de vídeo rodando em uma instância EC2 leva cerca de 20 segundos em média para processar cada arquivo de vídeo bruto. A aplicação consome as mensagens de novos trabalhos a partir de uma fila SQS. A equipe de desenvolvimento precisa considerar o cenário em que o processo de codificação de vídeo leva mais tempo do que o habitual, para garantir que o mesmo vídeo bruto não seja processado por múltiplos consumidores.\n\nComo um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Usar a ação WaitTimeSeconds para realizar long polling e estender o tempo de visibilidade da mensagem",
      "Usar a ação DelaySeconds para atrasar o tempo de visibilidade da mensagem",
      "Usar a ação ChangeMessageVisibility para estender o tempo de visibilidade da mensagem",
      "Usar a ação WaitTimeSeconds para realizar short polling e estender o tempo de visibilidade da mensagem"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A ação WaitTimeSeconds é utilizada para configurar o tempo de espera durante a operação de polling (long polling ou short polling) para receber mensagens, mas não tem efeito sobre o tempo de visibilidade da mensagem, que controla quando a mensagem fica disponível para outros consumidores.",
      "Incorreta. A ação DelaySeconds é usada para atrasar a entrega inicial de uma mensagem na fila, ou seja, para que a mensagem não fique disponível para consumo imediatamente. Ela não altera o tempo de visibilidade de uma mensagem que já foi recebida e está em processamento.",
      "Correta. A ação ChangeMessageVisibility permite modificar o tempo de visibilidade de uma mensagem já recebida, impedindo que outros consumidores processem a mesma mensagem enquanto o processamento atual não for concluído. Isso é essencial para cenários onde o tempo de processamento pode variar e exceder o tempo de visibilidade inicial configurado.",
      "Incorreta. Assim como no long polling, o WaitTimeSeconds em short polling apenas define o tempo que a chamada aguarda por mensagens na fila, não alterando o tempo de visibilidade da mensagem já recebida."
    ]
  }
];