const originalQuestions = [
  {
    "question": "Uma empresa de análise de dados processa dados de Internet das Coisas (IoT) usando o Amazon Kinesis. A equipe de desenvolvimento percebeu que o fluxo de dados IoT para o Kinesis apresenta picos periódicos. A chamada da API PutRecords ocasionalmente falha e os logs mostram que a resposta da chamada com falha é a seguinte: (trecho de resposta HTTP com erro) Como um Desenvolvedor Associado Certificado pela AWS, qual das seguintes opções você recomendaria para resolver esse caso de uso? (Selecione duas.)",
    "options": [
      "Diminuir o número de consumidores KCL",
      "Diminuir a frequência ou o tamanho das suas requisições",
      "Mesclar os shards para diminuir o número de shards no stream",
      "Utilizar um mecanismo de retry com backoff exponencial para tratamento de erros",
      "Aumentar a frequência ou o tamanho das suas requisições"
    ],
    "correct": [1, 3],
    "detailedExplanations": [
      "Incorreta. O número de consumidores KCL (Kinesis Client Library) não afeta diretamente o erro ProvisionedThroughputExceededException, que está relacionado à taxa de gravação dos produtores via PutRecords, não ao consumo dos dados.",
      "Correta. Reduzir a taxa ou o tamanho das requisições ajuda a evitar ultrapassar a capacidade provisionada do shard, prevenindo erros de throughput excedido e melhorando a estabilidade do fluxo de dados.",
      "Incorreta. Mesclar shards reduz a capacidade total de throughput do stream, o que pode aumentar a probabilidade de erros de ProvisionedThroughputExceededException, piorando o problema.",
      "Correta. Implementar retries com backoff exponencial é uma prática recomendada para lidar com erros temporários, como ProvisionedThroughputExceededException, permitindo que o sistema aguarde antes de tentar novamente, reduzindo a pressão sobre o stream.",
      "Incorreta. Aumentar a frequência ou o tamanho das requisições agravaria o problema de throughput excedido, resultando em mais falhas e degradação do desempenho do stream."
    ]
  },
  {
    "question": "Você é um desenvolvedor de uma aplicação web escrita em .NET que utiliza o AWS SDK. Precisa implementar um mecanismo de autenticação que retorne um JWT (JSON Web Token). Qual serviço da AWS ajudará no gerenciamento e manipulação desses tokens?",
    "options": [
      "API Gateway",
      "Cognito User Pools",
      "Cognito Sync",
      "Cognito Identity Pools"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o API Gateway possa ser usado para validar tokens JWT em chamadas de API, ele não é o serviço responsável pela emissão ou gerenciamento dos tokens. O API Gateway atua como um ponto de entrada para APIs e pode integrar-se com serviços de autenticação, mas não gera os tokens JWT diretamente.",
      "Correta. O Amazon Cognito User Pools é o serviço que gerencia usuários e autenticação, emitindo tokens JWT após a autenticação bem-sucedida. Ele implementa tokens de ID, acesso e refresh conforme o padrão OpenID Connect (OIDC). O token de ID é um JWT que contém informações sobre o usuário autenticado, como nome, email e telefone, e pode ser usado para autenticar usuários em recursos do servidor ou APIs.",
      "Incorreta. O Amazon Cognito Sync é um serviço e biblioteca cliente que permite a sincronização de dados relacionados ao usuário entre dispositivos diferentes. Ele não é responsável pela emissão ou gerenciamento de tokens de autenticação, mas sim pela sincronização de dados do perfil do usuário entre dispositivos móveis e web, sem necessidade de backend próprio.",
      "Incorreta. O Cognito Identity Pools é usado para conceder credenciais temporárias da AWS a usuários autenticados ou anônimos, permitindo acesso a serviços AWS como S3 e DynamoDB. Ele não emite tokens JWT para autenticação, mas sim credenciais temporárias para autorização de acesso a recursos AWS."
    ]
  },
  {
    "question": "Uma empresa de jogos deseja armazenar informações sobre todos os jogos que lançou. Cada jogo possui um nome, número da versão e categoria (como esportes, quebra-cabeças, estratégia, etc). As informações dos jogos também podem incluir propriedades adicionais sobre as plataformas suportadas e especificações técnicas, que são inconsistentes entre os jogos. Você foi contratado como um AWS Certified Developer – Associate para construir uma solução que atenda aos seguintes casos de uso: - Para um dado nome e número de versão, obter todos os detalhes do jogo que possui esse nome e versão. - Para um dado nome, obter todos os detalhes de todos os jogos com esse nome. - Para uma dada categoria, obter todos os detalhes de todos os jogos nessa categoria. Qual solução você recomendaria como a mais eficiente?",
    "options": [
      "Configurar uma tabela Amazon DynamoDB com uma chave primária composta pelo nome como chave de partição e o número da versão como chave de ordenação. Criar um índice secundário global com a categoria como chave de partição e o nome como chave de ordenação.",
      "Configurar uma tabela Amazon DynamoDB com uma chave primária composta pela categoria como chave de partição e o número da versão como chave de ordenação. Criar um índice secundário global com o nome como chave de partição.",
      "Configurar uma instância Amazon RDS MySQL com uma tabela de jogos contendo colunas para nome, número da versão e categoria. Configurar a coluna nome como chave primária.",
      "Armazenar permanentemente as informações de nome, número da versão e categoria dos jogos em uma instância Amazon ElastiCache para Memcached."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Essa configuração permite consultas eficientes para todos os casos de uso: a chave primária possibilita buscar rapidamente um jogo específico pelo nome e versão, enquanto o índice secundário global permite consultar todos os jogos de uma categoria, ordenados pelo nome. Além disso, a flexibilidade do DynamoDB lida bem com atributos adicionais inconsistentes.",
      "Incorreta. Essa configuração não permite consultas eficientes para o caso de uso que exige obter detalhes de um jogo específico pelo nome e número da versão, pois a chave primária não inclui o nome, dificultando a busca direta por esses atributos. Isso resultaria em múltiplas consultas menos eficientes.",
      "Incorreta. Configurar apenas o nome como chave primária não permite consultas eficientes por número da versão ou categoria, além de não aproveitar a escalabilidade e flexibilidade do DynamoDB para dados semiestruturados e inconsistentes.",
      "Incorreta. Amazon ElastiCache para Memcached é uma camada de cache volátil e não um armazenamento persistente. Não é adequado para armazenar dados que precisam ser mantidos permanentemente, como informações de jogos."
    ]
  },
  {
    "question": "Uma empresa de TI está configurando Auto Scaling para suas instâncias Amazon EC2 distribuídas em diferentes Zonas de Disponibilidade (AZs) e Regiões. Quais dos seguintes cenários NÃO estão corretos sobre o Auto Scaling do EC2? (Selecione duas.)",
    "options": [
      "Um grupo de Auto Scaling pode conter instâncias EC2 em apenas uma Zona de Disponibilidade de uma Região.",
      "Um grupo de Auto Scaling pode conter instâncias EC2 em uma ou mais Zonas de Disponibilidade dentro da mesma Região.",
      "Para grupos de Auto Scaling em uma VPC, as instâncias EC2 são lançadas em sub-redes.",
      "O Amazon EC2 Auto Scaling tenta distribuir as instâncias de forma equilibrada entre as Zonas de Disponibilidade habilitadas para seu grupo de Auto Scaling.",
      "Grupos de Auto Scaling que abrangem múltiplas Regiões precisam ser habilitados para todas as Regiões especificadas."
    ],
    "correct": [0, 4],
    "detailedExplanations": [
      "Correta. Esta afirmação está incorreta para grupos de Auto Scaling. Um grupo de Auto Scaling pode conter instâncias EC2 em uma ou mais Zonas de Disponibilidade dentro da mesma Região, não se limitando a apenas uma AZ.",
      "Incorreta. Esta é uma afirmação correta. Grupos de Auto Scaling podem abranger múltiplas Zonas de Disponibilidade dentro da mesma Região para melhorar a disponibilidade e resiliência.",
      "Incorreta. Esta afirmação está correta. Para grupos de Auto Scaling em uma VPC, as instâncias EC2 são lançadas em sub-redes específicas que o cliente seleciona ao criar ou atualizar o grupo.",
      "Incorreta. Esta afirmação é correta. O Auto Scaling distribui as instâncias uniformemente entre as Zonas de Disponibilidade habilitadas. Se uma AZ ficar indisponível, o Auto Scaling lança novas instâncias em AZs saudáveis e redistribui quando a AZ retorna ao estado saudável.",
      "Correta. Esta afirmação está incorreta. Grupos de Auto Scaling não podem abranger múltiplas Regiões. Cada grupo de Auto Scaling está restrito a uma única Região."
    ]
  },
  {
    "question": "Um negócio de comércio eletrônico possui suas aplicações executando em uma frota de instâncias Amazon EC2 distribuídas por várias Regiões e Zonas de Disponibilidade. A equipe técnica sugeriu o uso de Elastic Load Balancers para melhorar o design arquitetural. Quais características do Elastic Load Balancer o tornam uma escolha vantajosa? (Selecione duas.)",
    "options": [
      "Implantar instâncias EC2 em múltiplas Regiões AWS",
      "Separar o tráfego público do tráfego privado",
      "Construir um sistema altamente disponível",
      "O Load Balancer se comunica com as instâncias EC2 subjacentes usando seus IPs públicos",
      "Melhorar a escalabilidade vertical do sistema"
    ],
    "correct": [1, 2],
    "detailedExplanations": [
      "Incorreta. Um Elastic Load Balancer pode distribuir o tráfego apenas entre instâncias EC2 dentro da mesma Região AWS, não entre Regiões diferentes.",
      "Correta. Os nós de um load balancer com acesso à internet possuem endereços IP públicos, mas o balanceador encaminha as requisições para os alvos (como instâncias EC2) usando seus IPs privados, permitindo que os alvos não precisem de IPs públicos para receber tráfego externo.",
      "Correta. Elastic Load Balancing promove alta disponibilidade ao distribuir automaticamente o tráfego entre alvos saudáveis em múltiplas Zonas de Disponibilidade, garantindo tolerância a falhas e continuidade do serviço.",
      "Incorreta. O Load Balancer se comunica com as instâncias EC2 usando seus endereços IP privados, o que aumenta a segurança e eficiência da comunicação interna.",
      "Incorreta. Elastic Load Balancing oferece suporte à escalabilidade horizontal, distribuindo o tráfego entre múltiplas instâncias, e pode ser integrado a grupos de Auto Scaling para aumentar ou diminuir a quantidade de recursos, mas não melhora a escalabilidade vertical (aumento de capacidade de uma única instância)."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento deseja construir uma aplicação utilizando arquitetura serverless. A equipe planeja usar extensivamente funções AWS Lambda para atingir esse objetivo. Os desenvolvedores trabalham com diferentes linguagens de programação como Python, .NET e JavaScript. A equipe quer modelar a infraestrutura na nuvem utilizando qualquer uma dessas linguagens de programação. Qual serviço/ferramenta da AWS a equipe deve usar para esse caso de uso?",
    "options": [
      "AWS Cloud Development Kit (CDK)",
      "AWS CodeDeploy",
      "AWS Serverless Application Model (SAM)",
      "AWS CloudFormation"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS CDK é um framework de desenvolvimento open-source que permite definir recursos de nuvem usando linguagens de programação familiares como Python, JavaScript, Java e .NET. Ele oferece componentes de alto nível chamados constructs, que facilitam a modelagem e o provisionamento seguro e repetível da infraestrutura via CloudFormation, atendendo exatamente à necessidade da equipe.",
      "Incorreta. O AWS CodeDeploy é um serviço gerenciado para automatizar implantações de software em diversos ambientes, incluindo EC2, Lambda e servidores on-premises. Ele não é uma ferramenta para modelar infraestrutura nem para definir recursos em linguagens de programação.",
      "Incorreta. O AWS SAM é um framework que facilita a criação e implantação de aplicações serverless usando templates declarativos baseados em YAML. Embora simplifique o desenvolvimento serverless, ele não permite modelar a infraestrutura usando linguagens de programação tradicionais, o que é um requisito do caso.",
      "Incorreta. O AWS CloudFormation é um serviço que permite definir a infraestrutura como código por meio de templates JSON ou YAML, mas não suporta diretamente o uso de linguagens de programação tradicionais para modelar a infraestrutura. Ele é a base para provisionamento, mas não atende ao requisito de usar linguagens como Python, .NET ou JavaScript para modelagem."
    ]
  },
  {
    "question": "Tarefas de contêiner ECS Fargate geralmente são distribuídas entre Zonas de Disponibilidade (AZs) e as cargas de trabalho subjacentes precisam de acesso persistente e compartilhado entre AZs aos volumes de dados configurados para as tarefas de contêiner. Qual das seguintes soluções é a melhor escolha para essas cargas de trabalho?",
    "options": [
      "Bind mounts",
      "Volumes AWS Storage Gateway",
      "Volumes Docker",
      "Volumes Amazon EFS"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Bind mounts são arquivos ou diretórios no host, como uma instância Amazon EC2 ou AWS Fargate, montados dentro do contêiner. Embora suportados para tarefas hospedadas no Fargate ou EC2, bind mounts fornecem armazenamento temporário e não persistente, o que os torna inadequados para cenários que exigem armazenamento compartilhado e persistente entre AZs.",
      "Incorreta. Volumes do AWS Storage Gateway são usados para integrar armazenamento local com a nuvem AWS, mas não são uma solução adequada para armazenamento persistente compartilhado entre tarefas ECS Fargate distribuídas em múltiplas AZs. Esta opção é apresentada apenas como um distrator.",
      "Incorreta. Volumes Docker são gerenciados pelo Docker e criados localmente no host, geralmente em /var/lib/docker/volumes na instância EC2. Eles podem ser integrados a sistemas de armazenamento externos via drivers de volume, como Amazon EBS, mas são suportados apenas para tarefas executadas em instâncias EC2, não em Fargate. Além disso, não oferecem armazenamento compartilhado entre múltiplas AZs.",
      "Correta. Volumes Amazon EFS fornecem armazenamento de arquivos simples, escalável e persistente para uso com tarefas Amazon ECS. O EFS é elástico, crescendo e encolhendo automaticamente conforme arquivos são adicionados ou removidos, e permite acesso compartilhado e persistente entre múltiplas AZs. É suportado para tarefas hospedadas tanto em Fargate quanto em instâncias EC2, sendo a melhor opção para cargas de trabalho que necessitam de armazenamento compartilhado entre AZs."
    ]
  },
  {
    "question": "Como parte do seu trabalho de desenvolvimento, um AWS Certified Developer Associate está criando políticas e as vinculando a identidades do IAM. Após criar as políticas baseadas em identidade necessárias, ele agora está criando políticas baseadas em recursos. Qual é a única política baseada em recurso que o serviço IAM suporta?",
    "options": [
      "Limite de permissões (Permissions boundary)",
      "Lista de controle de acesso (Access control list - ACL)",
      "Política de confiança (Trust policy)",
      "Políticas de controle de serviço da AWS Organizations (Service Control Policies - SCP)"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Limites de permissões são um recurso avançado para definir a permissão máxima que uma política baseada em identidade pode conceder a uma entidade IAM (usuário ou função). Eles não são políticas baseadas em recursos, mas sim restrições aplicadas a políticas baseadas em identidade.",
      "Incorreta. ACLs são políticas específicas de alguns serviços que controlam o acesso a recursos, geralmente entre contas diferentes, mas não são políticas baseadas em recursos suportadas pelo IAM. Serviços como Amazon S3, AWS WAF e Amazon VPC suportam ACLs, mas o IAM não.",
      "Correta. Políticas de confiança definem quais entidades principais (contas, usuários, funções e usuários federados) podem assumir uma função IAM. A função IAM é tanto uma identidade quanto um recurso que suporta políticas baseadas em recursos. O IAM suporta apenas um tipo de política baseada em recurso, chamada política de confiança da função, que é anexada a uma função IAM.",
      "Incorreta. SCPs são políticas aplicadas no nível da organização para limitar permissões máximas em contas da AWS. Elas não são políticas baseadas em recursos, nem são gerenciadas pelo serviço IAM diretamente."
    ]
  },
  {
    "question": "Um desenvolvedor foi encarregado de proteger determinados buckets S3 que são compartilhados por uma grande equipe de usuários. Na última vez em que a política de um bucket foi alterada, ele ficou erroneamente disponível para qualquer pessoa, inclusive fora da organização. Qual recurso/serviço ajudará o desenvolvedor a identificar problemas de segurança semelhantes com o mínimo de esforço?",
    "options": [
      "S3 Object Lock",
      "S3 Analytics",
      "IAM Access Analyzer",
      "Recurso Access Advisor no console IAM"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O S3 Object Lock permite armazenar objetos usando o modelo \"Write Once Read Many\" (WORM), prevenindo exclusões acidentais ou inadequadas de dados. Porém, não é adequado para identificar problemas de acesso ou políticas incorretas em buckets S3.",
      "Incorreta. O Amazon S3 Analytics Storage Class Analysis ajuda a analisar padrões de acesso para otimizar a transição de dados entre classes de armazenamento. Ele não é capaz de identificar acessos não intencionais ou problemas de segurança em buckets S3.",
      "Correta. O AWS IAM Access Analyzer ajuda a identificar recursos na sua organização e contas, como buckets Amazon S3 ou funções IAM, que estão compartilhados com entidades externas. Isso permite detectar acessos não intencionais aos seus recursos e dados, reduzindo riscos de segurança.",
      "Incorreta. O Access Advisor informa o último uso de funções IAM para ajudar a identificar funções não utilizadas, auxiliando na remoção segura dessas funções. No entanto, ele não fornece informações sobre entidades fora do IAM, como buckets S3, e portanto não é adequado para este cenário."
    ]
  },
  {
    "question": "Um desenvolvedor foi solicitado a criar uma aplicação que possa ser implantada em uma frota de instâncias EC2. A configuração deve permitir controle total sobre as etapas da implantação utilizando o modelo de implantação blue-green. Qual serviço ajudará a alcançar esse objetivo?",
    "options": [
      "CodePipeline",
      "CodeDeploy",
      "CodeBuild",
      "Elastic Beanstalk"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS CodePipeline automatiza as fases de build, teste e implantação do processo de release sempre que há uma alteração no código, porém, por si só, não realiza a implantação direta das aplicações nem oferece controle detalhado sobre as etapas da implantação blue-green.",
      "Correta. O AWS CodeDeploy é um serviço de implantação que automatiza a entrega de aplicações para instâncias Amazon EC2, instâncias on-premises ou funções serverless Lambda. Ele oferece controle detalhado sobre as etapas da implantação e suporta o modelo blue-green, permitindo validar a nova versão antes de redirecionar o tráfego de produção.",
      "Incorreta. O AWS CodeBuild é um serviço totalmente gerenciado de integração contínua que compila o código-fonte, executa testes e gera pacotes de software prontos para implantação, mas não realiza a implantação das aplicações em si.",
      "Incorreta. O AWS Elastic Beanstalk oferece hooks para personalização, mas não proporciona o mesmo nível de controle sobre as etapas de implantação que o CodeDeploy. Além disso, realiza atualizações in-place que podem causar indisponibilidade temporária, a menos que se utilize um ambiente separado para realizar uma implantação blue-green manualmente."
    ]
  },
  {
    "question": "Uma organização possui suas instâncias EC2 hospedadas em duas Zonas de Disponibilidade (AZs). A AZ1 possui 2 instâncias e a AZ2 possui 8 instâncias. O Elastic Load Balancer que gerencia as instâncias nas duas AZs tem o balanceamento de carga entre zonas (cross-zone load balancing) habilitado em sua configuração. Qual porcentagem do tráfego cada instância na AZ1 receberá?",
    "options": [
      "25%",
      "10%",
      "20%",
      "15%"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Se o balanceamento entre zonas estivesse desabilitado, cada instância na AZ1 receberia 50% do tráfego da AZ1, que corresponde a metade do tráfego total, ou seja, 25% do tráfego total para cada uma das 2 instâncias. Porém, neste caso, o balanceamento entre zonas está habilitado.",
      "Correta. Com o balanceamento de carga entre zonas habilitado, o tráfego é distribuído igualmente entre todas as instâncias registradas, independentemente da AZ em que estejam. Como há 10 instâncias no total (2 na AZ1 e 8 na AZ2), cada instância recebe 10% do tráfego.",
      "Incorreta. Esta opção é inválida e serve apenas como distração, pois não corresponde à distribuição correta do tráfego com ou sem balanceamento entre zonas.",
      "Incorreta. Esta opção também é inválida e não corresponde a nenhuma configuração válida de distribuição de tráfego no cenário descrito."
    ]
  },
  {
    "question": "Qual das alternativas a seguir melhor descreve como funciona a criptografia no KMS?",
    "options": [
      "O KMS recebe a CMK do cliente a cada chamada de Encrypt e criptografa os dados com ela.",
      "O KMS gerencia as CMKs e gera chaves de dados que os clientes usam para criptografar localmente seus dados, protegendo as CMKs internamente.",
      "O KMS envia a CMK para o cliente, que realiza a criptografia e depois apaga a CMK.",
      "O KMS gera uma nova CMK para cada chamada de Encrypt e criptografa os dados com ela."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora seja possível importar uma CMK para o KMS, isso é feito uma única vez. Após a importação, o KMS gerencia a chave e realiza as operações de criptografia e descriptografia. Não é necessário enviar a CMK a cada chamada de criptografia.",
      "Correta. O KMS gerencia as chaves mestras do cliente (CMKs) e gera chaves de dados (data keys) que são usadas pelos clientes para criptografar e descriptografar seus dados localmente. O KMS protege as CMKs internamente e não recebe os dados dos clientes para criptografá-los diretamente.",
      "Incorreta. O KMS nunca envia a chave mestra (CMK) para o cliente. Toda a criptografia e descriptografia são realizadas internamente no KMS, garantindo que a chave nunca seja exposta fora do serviço.",
      "Incorreta. O KMS não gera uma nova CMK a cada chamada de criptografia. Em vez disso, utiliza uma CMK existente para criptografar os dados. Embora o KMS possa rotacionar automaticamente as chaves para melhorar a segurança, ele não cria uma nova CMK para cada operação de criptografia."
    ]
  },
  {
    "question": "O gerente de uma empresa de TI deseja configurar o acesso dos membros a pastas específicas de usuários em um bucket Amazon S3 - bucket-a. Assim, o usuário x pode acessar apenas os arquivos em sua pasta - bucket-a/user/user-x/ e o usuário y pode acessar apenas os arquivos em sua pasta - bucket-a/user/user-y/, e assim por diante. Como um Associate Developer, qual das seguintes construções do IAM você recomendaria para que o trecho da política possa ser genérico para todos os membros da equipe, evitando que o gerente precise criar uma política IAM separada para cada membro?",
    "options": [
      "Condição de política IAM",
      "Principal de política IAM",
      "Variáveis de política IAM",
      "Recurso de política IAM"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O elemento Condition permite especificar condições para quando uma política está em vigor, como comparar valores específicos, mas não é adequado para parametrizar recursos de forma genérica para múltiplos usuários com base em seus nomes ou pastas específicas.",
      "Incorreta. O elemento Principal é usado para especificar a entidade que pode acessar um recurso, geralmente em políticas baseadas em recursos ou políticas de confiança de funções IAM, e não pode ser usado em políticas baseadas em identidade para parametrizar o acesso de múltiplos usuários.",
      "Correta. As variáveis de política IAM funcionam como espaços reservados que são substituídos por valores específicos da solicitação no momento da avaliação da política. Isso permite criar uma única política genérica que se aplica a múltiplos usuários, como membros de uma equipe, controlando o acesso a pastas específicas de cada usuário sem a necessidade de políticas individuais.",
      "Incorreta. O elemento Resource define os recursos (ARNs) aos quais a política se aplica, mas não oferece um mecanismo para tornar o recurso dinâmico ou genérico para múltiplos usuários. Para isso, é necessário usar variáveis na definição do recurso."
    ]
  },
  {
    "question": "Como desenvolvedor, você está criando uma aplicação usando o AWS Cloud Development Kit (CDK). Qual das seguintes opções representa a ordem correta dos passos a serem seguidos para criar uma aplicação usando o AWS CDK?",
    "options": [
      "Criar a aplicação a partir de um template fornecido pelo AWS CDK -> Adicionar código à aplicação para criar recursos dentro das stacks -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS -> Construir a aplicação",
      "Criar a aplicação a partir de um template fornecido pelo AWS CDK -> Adicionar código à aplicação para criar recursos dentro das stacks -> Construir a aplicação (opcional) -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS",
      "Criar a aplicação a partir de um template fornecido pelo AWS CloudFormation -> Adicionar código à aplicação para criar recursos dentro das stacks -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS -> Construir a aplicação",
      "Criar a aplicação a partir de um template fornecido pelo AWS CloudFormation -> Adicionar código à aplicação para criar recursos dentro das stacks -> Construir a aplicação (opcional) -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o ponto de partida correto seja um template do AWS CDK, o passo de build não deve ocorrer após o deploy. O build é opcional, mas se feito, deve ser antes da síntese e do deploy para detectar erros antecipadamente.",
      "Correta. Esta é a sequência padrão recomendada para o desenvolvimento com AWS CDK: iniciar a aplicação com um template do CDK, adicionar código para definir recursos, construir o código (opcional, mas recomendado para detectar erros), sintetizar as stacks para gerar templates CloudFormation e, finalmente, fazer o deploy das stacks na conta AWS.",
      "Incorreta. Além de usar templates do CloudFormation para iniciar a aplicação ser incorreto, a etapa de build não pode ocorrer após o deploy, pois o build é necessário antes da síntese e do deploy para garantir que o código esteja correto.",
      "Incorreta. Não se cria uma aplicação AWS CDK a partir de templates do AWS CloudFormation. O AWS CDK gera templates CloudFormation a partir do código, mas o ponto de partida é um template do próprio AWS CDK, não do CloudFormation."
    ]
  },
  {
    "question": "Como um Desenvolvedor Associado Certificado pela AWS, você configurou o AWS CLI em sua estação de trabalho. Sua região padrão está definida como us-east-1 e seu usuário IAM tem permissões para executar comandos em serviços como EC2, S3 e RDS em qualquer região. Você deseja executar um comando para parar uma instância EC2 na região us-east-2. Qual das seguintes opções é a solução MAIS otimizada para esse caso de uso?",
    "options": [
      "Utilize injeção de dependência do boto3.",
      "Você deve criar um novo usuário IAM apenas para essa outra região.",
      "Utilize o parâmetro --region no comando.",
      "Você precisa sobrescrever a região padrão usando o comando aws configure."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O boto3 é uma biblioteca Python para interagir com serviços AWS programaticamente e não é utilizada diretamente pelo AWS CLI. Essa opção é um distrator e não se aplica ao uso do CLI.",
      "Incorreta. Criar um novo usuário IAM para cada região não é uma prática recomendada nem eficiente, pois aumenta a complexidade da gestão de usuários e permissões sem necessidade.",
      "Correta. Usar o parâmetro --region permite especificar a região desejada para o comando sem alterar a configuração padrão, tornando essa abordagem a mais eficiente e prática para operações em múltiplas regiões.",
      "Incorreta. Alterar a região padrão via aws configure não é a solução mais otimizada, pois exigiria redefinir a região padrão toda vez que precisar operar em uma região diferente, o que é pouco prático."
    ]
  },
  {
    "question": "Você implantou uma aplicação Java em uma instância EC2 que utiliza o SDK do X-Ray. Ao testar a aplicação a partir do seu computador pessoal, ela envia dados para o X-Ray normalmente, mas quando a aplicação é executada dentro da instância EC2, ela falha ao enviar os dados para o X-Ray. Qual das seguintes opções NÃO ajuda na depuração desse problema?",
    "options": [
      "CloudTrail",
      "Função de Instância EC2 (EC2 Instance Role)",
      "Daemon do X-Ray na EC2",
      "Amostragem (X-Ray Sampling)"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O AWS CloudTrail registra e monitora continuamente as atividades da conta, incluindo chamadas de API. É possível verificar no CloudTrail se alguma chamada relacionada ao X-Ray está sendo negada, auxiliando na identificação de problemas de permissão ou configuração.",
      "Incorreta. O daemon do X-Ray utiliza o SDK da AWS para enviar os dados de rastreamento e precisa de credenciais com permissões adequadas. Na EC2, ele usa automaticamente a função associada à instância, o que elimina problemas relacionados a permissões de API.",
      "Incorreta. O daemon do X-Ray é um aplicativo que escuta o tráfego na porta UDP 2000, coleta os dados brutos dos segmentos e os envia para a API do AWS X-Ray. Os logs do daemon podem ajudar a identificar problemas na comunicação ou no envio dos dados.",
      "Correta. A amostragem permite controlar a quantidade de dados registrados e modificar o comportamento de amostragem sem alterar ou reimplantar o código. No entanto, como a aplicação está falhando em enviar dados para o X-Ray, a amostragem não auxilia na identificação da causa da falha."
    ]
  },
  {
    "question": "A equipe de desenvolvimento acabou de configurar e anexar a política IAM necessária para acessar o AWS Billing and Cost Management para todos os usuários do departamento financeiro. Porém, os usuários não conseguem visualizar o serviço AWS Billing and Cost Management no console da AWS. Qual poderia ser a razão para esse problema?",
    "options": [
      "É necessário ativar o acesso de usuários IAM ao console do Billing and Cost Management para todos os usuários que precisam de acesso.",
      "Os usuários podem ter outra política que os restrinja de acessar as informações de faturamento.",
      "O usuário IAM deve ser criado especificamente dentro do AWS Billing and Cost Management e não na conta AWS para ter acesso ao console de faturamento.",
      "Apenas o usuário root tem acesso ao console do AWS Billing and Cost Management."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Por padrão, usuários IAM não têm acesso ao console de Billing and Cost Management. O administrador da conta deve ativar explicitamente o acesso para usuários IAM ao console de faturamento, além de anexar as políticas necessárias. Essa ativação precisa ser feita uma única vez para que o acesso funcione.",
      "Incorreta. Embora políticas conflitantes possam causar restrições, no cenário apresentado não há indicação de outra política bloqueando o acesso, portanto essa não é a causa principal do problema.",
      "Incorreta. Usuários IAM são criados e gerenciados dentro da conta AWS como um todo, independentemente do serviço. Não existe criação de usuários IAM específicos para o serviço de faturamento.",
      "Incorreta. Embora o usuário root tenha acesso completo, é possível conceder acesso ao console de faturamento para usuários IAM ativando o acesso e aplicando as políticas apropriadas."
    ]
  },
  {
    "question": "Um desenvolvedor está configurando uma política de bucket que nega a permissão de upload de objetos para qualquer requisição que não inclua o cabeçalho x-amz-server-side-encryption solicitando criptografia do lado do servidor com SSE-KMS para um bucket Amazon S3 chamado examplebucket. Qual das seguintes políticas atende corretamente a esse requisito?",
    "options": [
      "{\"Version\":\"2012-10-17\",\"Id\":\"PutObjectPolicy\",\"Statement\":[{\"Sid\":\"DenyUnEncryptedObjectUploads\",\"Effect\":\"Deny\",\"Principal\":\"*\",\"Action\":\"s3:PutObject\",\"Resource\":\"arn:aws:s3:::examplebucket/*\",\"Condition\":{\"StringNotEquals\":{\"s3:x-amz-server-side-encryption\":\"aws:kms\"}}}]}",
      "{\"Version\":\"2012-10-17\",\"Id\":\"PutObjectPolicy\",\"Statement\":[{\"Sid\":\"DenyUnEncryptedObjectUploads\",\"Effect\":\"Deny\",\"Principal\":\"*\",\"Action\":\"s3:PutObject\",\"Resource\":\"arn:aws:s3:::examplebucket/*\",\"Condition\":{\"StringNotEquals\":{\"s3:x-amz-server-side-encryption\":\"false\"}}}]}",
      "{\"Version\":\"2012-10-17\",\"Id\":\"PutObjectPolicy\",\"Statement\":[{\"Sid\":\"DenyUnEncryptedObjectUploads\",\"Effect\":\"Deny\",\"Principal\":\"*\",\"Action\":\"s3:PutObject\",\"Resource\":\"arn:aws:s3:::examplebucket/*\",\"Condition\":{\"StringEquals\":{\"s3:x-amz-server-side-encryption\":\"aws:kms\"}}}]}",
      "{\"Version\":\"2012-10-17\",\"Id\":\"PutObjectPolicy\",\"Statement\":[{\"Sid\":\"DenyUnEncryptedObjectUploads\",\"Effect\":\"Deny\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::examplebucket/*\",\"Condition\":{\"StringNotEquals\":{\"s3:x-amz-server-side-encryption\":\"aws:AES256\"}}}]}"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Esta política nega a permissão de upload (s3:PutObject) para qualquer requisição que não inclua o cabeçalho 'x-amz-server-side-encryption' com o valor \"aws:kms\", garantindo que apenas uploads criptografados com SSE-KMS sejam permitidos no bucket examplebucket.",
      "Incorreta. Esta política nega uploads de objetos quando o cabeçalho de criptografia do lado do servidor não é \"false\", o que não faz sentido, pois \"false\" não é um valor válido para o cabeçalho 'x-amz-server-side-encryption'. A condição correta deve verificar se o valor é diferente de \"aws:kms\" para garantir que a criptografia SSE-KMS seja usada.",
      "Incorreta. Embora esta política verifique o valor correto do cabeçalho SSE-KMS, a condição usa 'StringEquals' em vez de 'StringNotEquals'. Isso significa que ela negaria uploads apenas quando o cabeçalho for exatamente \"aws:kms\", o que é o oposto do comportamento desejado.",
      "Incorreta. Esta política nega a ação s3:GetObject, que é para leitura, enquanto o requisito é negar uploads (s3:PutObject). Além disso, verifica a criptografia SSE-S3 (AES256) em vez de SSE-KMS, o que não atende ao requisito especificado."
    ]
  },
  {
    "question": "O CodeCommit é um serviço gerenciado de controle de versão que hospeda repositórios Git privados na nuvem AWS. Qual dos seguintes tipos de credenciais NÃO é suportado pelo IAM para acesso ao CodeCommit?",
    "options": [
      "Chaves de acesso AWS (AWS Access Keys)",
      "Credenciais Git (Git credentials)",
      "Nome de usuário e senha do IAM (IAM username and password)",
      "Chaves SSH (SSH Keys)"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. As chaves de acesso AWS podem ser usadas com o auxiliar de credenciais incluído no AWS CLI para se comunicar com repositórios CodeCommit via HTTPS.",
      "Incorreta. As credenciais Git são um par de nome de usuário e senha gerados pelo IAM que podem ser usados para acessar repositórios CodeCommit via HTTPS.",
      "Correta. O nome de usuário e senha do IAM não podem ser usados para acessar o CodeCommit, pois o serviço não suporta autenticação direta com essas credenciais.",
      "Incorreta. As chaves SSH são pares de chaves pública e privada geradas localmente que podem ser associadas ao usuário IAM para comunicação com repositórios CodeCommit via SSH."
    ]
  },
  {
    "question": "Uma empresa SaaS executa uma aplicação web na área de saúde que é utilizada mundialmente por usuários. Desenvolvedores mobile solicitaram a exposição de APIs públicas para funcionalidades específicas da aplicação. Você decide disponibilizar essas APIs para os desenvolvedores mobile como ofertas de produto. Qual das opções a seguir permitirá que você faça isso?",
    "options": [
      "Usar Usage Plans do API Gateway",
      "Usar Usage Plans do AWS Billing",
      "Usar Custom Authorizers do AWS Lambda",
      "Usar Usage Plans do CloudFront"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon API Gateway permite criar, publicar, manter, monitorar e proteger APIs REST, HTTP e WebSocket. Usage Plans definem quem pode acessar quais APIs, em quais estágios e métodos, além de controlar a quantidade e a velocidade do acesso. Eles usam chaves de API para identificar clientes e aplicar limites de uso, permitindo oferecer APIs públicas como produtos com controle de consumo.",
      "Incorreta. O AWS Billing and Cost Management é o serviço responsável por gerenciar cobranças, monitorar uso e controlar custos na AWS. Não existe um recurso chamado Usage Plans no AWS Billing, e ele não oferece funcionalidades para expor ou gerenciar APIs públicas.",
      "Incorreta. AWS Lambda Custom Authorizers são usados para implementar autenticação e autorização personalizada em APIs do API Gateway, mas não gerenciam limites de uso ou planos de consumo. Portanto, não são adequados para controlar o acesso e a cota de APIs públicas como um produto.",
      "Incorreta. O Amazon CloudFront é um serviço de CDN (Content Delivery Network) que entrega dados, vídeos, aplicações e APIs globalmente com baixa latência e alta velocidade. No entanto, não existe um recurso chamado Usage Plans no CloudFront, e ele não é utilizado para gerenciar acesso ou limites de APIs públicas."
    ]
  },
  {
    "question": "Sua organização global possui uma infraestrutura de TI implantada usando CloudFormation na AWS Cloud. Um funcionário, na região us-east-1, criou uma stack chamada 'Application1' e exportou uma saída com o nome 'ELBDNSName'. Outro funcionário criou uma stack para uma aplicação diferente, 'Application2', na região us-east-2, e também exportou uma saída com o nome 'ELBDNSName'. O primeiro funcionário tentou implantar a stack CloudFormation 'Application1' na região us-east-2, mas ocorreu um erro. Qual é a causa desse erro? (Selecione duas.)",
    "options": [
      "Os valores de saída no CloudFormation devem ter nomes únicos em todas as regiões.",
      "Os valores de saída exportados no CloudFormation devem ter nomes únicos dentro de uma única região.",
      "Os valores de saída exportados no CloudFormation devem ter nomes únicos em todas as regiões.",
      "Uma stack CloudFormation não pode ser implantada em mais de uma região da AWS usando o mesmo nome de stack.",
      "Os valores de saída no CloudFormation devem ter nomes únicos dentro de uma única região."
    ],
    "correct": [1, 4],
    "detailedExplanations": [
      "Incorreta. Não existe restrição para nomes únicos de saídas exportadas entre regiões diferentes, apenas dentro da mesma região.",
      "Correta. Essa é a regra correta: os nomes exportados devem ser únicos dentro da mesma região para evitar conflitos entre stacks.",
      "Incorreta. Os nomes das saídas exportadas precisam ser únicos apenas dentro da mesma região, não entre diferentes regiões. Portanto, essa afirmação está incorreta.",
      "Incorreta. É possível criar stacks com o mesmo nome em diferentes regiões da AWS. O erro relatado não está relacionado ao nome da stack, mas sim ao conflito de nomes de exportações dentro da mesma região.",
      "Correta. No CloudFormation, os nomes das saídas exportadas devem ser únicos dentro da mesma região para evitar conflitos. Como ambas as stacks exportaram 'ELBDNSName' na região us-east-2, houve um conflito que causou o erro."
    ]
  },
  {
    "question": "Você está criando um template do CloudFormation para implantar sua aplicação CMS rodando em uma instância EC2 dentro da sua conta AWS. Como a aplicação será implantada em múltiplas regiões, você precisa criar um mapa com todos os possíveis valores da AMI base. Como você deve invocar a função !FindInMap para atender a esse caso de uso?",
    "options": [
      "!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]",
      "!FindInMap [ MapName ]",
      "!FindInMap [ MapName, TopLevelKey ]",
      "!FindInMap [ MapName, TopLevelKey, SecondLevelKey, ThirdLevelKey ]"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A função Fn::FindInMap retorna o valor correspondente às duas chaves fornecidas dentro de um mapa declarado na seção Mappings do template. O primeiro parâmetro é o nome lógico do mapa, o segundo é a chave de nível superior (por exemplo, a região), e o terceiro é a chave de segundo nível (por exemplo, o tipo de arquitetura da AMI). Essa é a forma correta para acessar valores em mapas aninhados no CloudFormation.",
      "Incorreta. A função Fn::FindInMap necessita de pelo menos dois níveis de chave para localizar um valor dentro do mapa. Passar apenas o nome do mapa não é válido e resultará em erro.",
      "Incorreta. A função Fn::FindInMap requer exatamente dois níveis de chave (TopLevelKey e SecondLevelKey) para acessar o valor desejado dentro do mapa. Fornecer apenas um nível de chave é insuficiente para recuperar um valor aninhado.",
      "Incorreta. A função Fn::FindInMap suporta apenas dois níveis de chaves para acessar valores em um mapa declarado na seção Mappings. Passar três níveis de chave excede o número de parâmetros aceitos e causará erro na execução do template."
    ]
  },
  {
    "question": "Você criou um Elastic Load Balancer que marcou todas as instâncias EC2 no grupo de destino como não saudáveis. Surpreendentemente, ao acessar o endereço IP das instâncias EC2 no navegador, você consegue acessar seu site. Qual poderia ser a razão pela qual suas instâncias estão sendo marcadas como não saudáveis? (Selecione duas.)",
    "options": [
      "Sua aplicação web utiliza um runtime que não é suportado pelo Application Load Balancer",
      "Você precisa associar um Elastic IP às instâncias EC2",
      "Os volumes EBS foram montados incorretamente",
      "O grupo de segurança da instância EC2 não permite tráfego proveniente do grupo de segurança do Application Load Balancer",
      "A rota para a verificação de integridade está configurada incorretamente"
    ],
    "correct": [3, 4],
    "detailedExplanations": [
      "Incorreta. O Application Load Balancer é agnóstico ao runtime da aplicação, atuando no nível de rede e HTTP, portanto essa opção é um distraidor sem relação com o problema.",
      "Incorreta. Elastic IPs não são necessários para que o Application Load Balancer funcione corretamente, pois ele gerencia o tráfego para as instâncias sem necessidade de IPs estáticos.",
      "Incorreta. Como é possível acessar o site diretamente pelo IP da instância, isso indica que o volume EBS está funcionando corretamente e não é a causa do problema.",
      "Correta. Para que o Load Balancer realize a verificação de integridade e encaminhe o tráfego, o grupo de segurança da instância deve permitir conexões vindas do grupo de segurança do Load Balancer, tanto na porta do listener quanto na porta da verificação de integridade.",
      "Correta. Se a rota configurada para a verificação de integridade (health check) estiver incorreta, o Load Balancer não conseguirá validar que a instância está saudável, mesmo que o site esteja acessível diretamente pelo IP."
    ]
  },
  {
    "question": "Uma empresa deseja fornecer acesso beta a alguns desenvolvedores de sua equipe para uma nova versão da API REST do Amazon API Gateway da empresa, sem causar qualquer impacto aos clientes existentes que utilizam a API via interface frontend e autenticação Amazon Cognito. A nova versão possui novos endpoints e mudanças incompatíveis com versões anteriores, e a equipe de desenvolvimento da empresa é responsável pela manutenção dessa versão. Qual das alternativas abaixo satisfaz esses requisitos da forma MAIS eficiente operacionalmente?",
    "options": [
      "Criar novas chaves de API na API do API Gateway e fazer com que os desenvolvedores apontem para os endpoints passando as novas chaves de API.",
      "Configurar um deployment com canary release na API do API Gateway e fazer com que os desenvolvedores apontem para o deployment relevante referenciando a variável de estágio no endpoint.",
      "Criar uma nova API no API Gateway que aponte para o novo código da aplicação da API e fazer com que os desenvolvedores apontem os endpoints para essa nova API.",
      "Criar um estágio de desenvolvimento na API do API Gateway e fazer com que os desenvolvedores apontem os endpoints para esse estágio de desenvolvimento."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. As chaves de API servem para controle de acesso e limites de uso, mas não garantem o isolamento de versões incompatíveis. Todas as chaves ainda operariam sobre a mesma API, sem separar a versão beta dos clientes existentes.",
      "Incorreta. O canary release direciona uma porcentagem do tráfego para uma nova versão, mas não garante controle de acesso exclusivo a determinados usuários. Isso não atende ao requisito de fornecer acesso apenas a um grupo beta.",
      "Correta. Criar uma nova API é a maneira mais eficiente de isolar versões incompatíveis da API. Isso permite que apenas os desenvolvedores autorizados testem a nova versão, sem afetar os clientes existentes. Essa abordagem oferece maior controle, escalabilidade e segurança.",
      "Incorreta. Estágios compartilham a mesma API base e não são recomendados para versões incompatíveis. Eles são úteis para testar variações pequenas (como dev/test/prod), mas não isolam alterações quebradoras."
    ]
  },
  {
    "question": "Uma aplicação está hospedada por um terceiro e exposta em yourapp.3rdparty.com. Você gostaria que seus usuários acessassem sua aplicação usando www.mydomain.com, domínio que você possui e gerencia no Route 53. Qual tipo de registro do Route 53 você deve criar para isso?",
    "options": [
      "Criar um registro Alias",
      "Criar um registro A",
      "Criar um registro CNAME",
      "Criar um registro PTR"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Registros Alias permitem rotear tráfego para recursos específicos da AWS, como distribuições CloudFront, buckets S3, ou para outro registro dentro da mesma zona hospedada. Eles não podem ser usados para apontar para domínios externos genéricos, como yourapp.3rdparty.com, que não são recursos AWS gerenciados.",
      "Incorreta. O registro A é usado para apontar um domínio ou subdomínio diretamente para um endereço IP. Ele não pode ser utilizado para mapear um nome de domínio para outro nome de domínio.",
      "Correta. Um registro CNAME mapeia consultas DNS de um nome de domínio para outro domínio ou subdomínio. Ele é ideal para apontar www.mydomain.com para yourapp.3rdparty.com. Contudo, não é possível criar um registro CNAME para o domínio raiz (zone apex), como mydomain.com, mas para subdomínios como www.mydomain.com é permitido.",
      "Incorreta. O registro PTR (Pointer) é utilizado para resolver um endereço IP para um nome de domínio totalmente qualificado (FQDN), funcionando como um DNS reverso. Ele não serve para mapear um nome de domínio para outro."
    ]
  },
  {
    "question": "Uma empresa multinacional possui várias unidades de negócio, cada uma com sua própria conta AWS. A equipe de desenvolvimento da empresa deseja depurar e rastrear dados entre contas diferentes e visualizar essas informações em uma conta centralizada. Como um Associate Developer, qual das seguintes soluções você recomendaria para esse caso de uso?",
    "options": [
      "Amazon CloudWatch Events",
      "AWS X-Ray",
      "AWS CloudTrail",
      "VPC Flow Logs"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Amazon CloudWatch Events fornece um fluxo quase em tempo real de eventos do sistema que descrevem mudanças nos recursos AWS, permitindo disparar notificações ou ações baseadas nessas mudanças. Entretanto, não é uma ferramenta para depuração ou rastreamento de dados entre contas, nem para visualização centralizada de dados de aplicações.",
      "Correta. O AWS X-Ray ajuda desenvolvedores a analisar e depurar aplicações distribuídas em produção, como as baseadas em arquitetura de microsserviços. Ele oferece uma visão completa das requisições enquanto percorrem a aplicação, mostrando um mapa dos componentes subjacentes. Além disso, o X-Ray permite coletar dados entre múltiplas contas AWS, pois o agente pode assumir uma role para publicar dados em uma conta centralizada diferente daquela onde está executando, facilitando o rastreamento e a visualização centralizada.",
      "Incorreta. O AWS CloudTrail registra, monitora continuamente e retém atividades da conta relacionadas a chamadas de API e ações na infraestrutura AWS, suportando governança, conformidade e auditoria. Porém, ele não é uma ferramenta para depuração ou rastreamento detalhado de dados de aplicações entre contas, nem para visualização centralizada de dados de execução de aplicações.",
      "Incorreta. O VPC Flow Logs captura informações sobre o tráfego IP que entra e sai das interfaces de rede em uma VPC, sendo útil para análise de tráfego e segurança de rede. Os dados podem ser enviados para o CloudWatch Logs ou S3, mas não são projetados para depuração ou rastreamento de dados entre contas AWS, nem para visualização centralizada de dados de aplicação."
    ]
  },
  {
    "question": "Você criou uma aplicação Java que utiliza o Amazon RDS como seu principal armazenamento de dados e o ElastiCache para armazenamento de sessões de usuário. A aplicação precisa ser implantada usando o Elastic Beanstalk, e toda nova implantação deve permitir que os servidores da aplicação reutilizem o banco de dados RDS. Por outro lado, os dados de sessão do usuário armazenados no ElastiCache podem ser recriados a cada implantação. Qual das seguintes configurações permitirá alcançar esse objetivo? (Selecione duas.)",
    "options": [
      "Banco de dados RDS definido dentro do diretório .ebextensions/",
      "ElastiCache incluído junto ao código-fonte da aplicação",
      "Banco de dados ElastiCache definido externamente e referenciado por variáveis de ambiente",
      "Banco de dados RDS definido externamente e referenciado por variáveis de ambiente",
      "ElastiCache definido dentro do diretório .ebextensions/"
    ],
    "correct": [2, 3],
    "detailedExplanations": [
      "Incorreta. Criar o banco RDS via .ebextensions vincula sua existência ao ciclo de vida do ambiente Elastic Beanstalk, o que pode causar perda de dados ao encerrar o ambiente.",
      "Incorreta. O ElastiCache é um serviço gerenciado da AWS e não pode ser incluído ou empacotado junto ao código-fonte da aplicação.",
      "Correta. O ElastiCache deve ser criado externamente e referenciado pela aplicação, pois é um serviço gerenciado separado do Elastic Beanstalk. Para dados de sessão transitórios, essa abordagem é adequada e permite reutilização entre implantações.",
      "Correta. Definir o banco RDS externamente desacopla sua vida útil do ambiente Elastic Beanstalk, permitindo reutilização do banco em múltiplos ambientes e atualizações sem perda de dados.",
      "Incorreta. Não é possível criar clusters ElastiCache via arquivos .ebextensions, pois ElastiCache é um serviço gerenciado externo ao ambiente Elastic Beanstalk."
    ]
  },
  {
    "question": "Um desenvolvedor foi solicitado a criar uma aplicação web para ser implantada em instâncias EC2. O desenvolvedor deseja focar apenas na escrita do código da aplicação, sem se preocupar com o provisionamento, configuração e implantação dos servidores. Como um Associate Developer, qual serviço AWS você recomendaria para este caso de uso?",
    "options": [
      "AWS Elastic Beanstalk",
      "AWS Serverless Application Model (SAM)",
      "AWS CloudFormation",
      "AWS CodeDeploy"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Elastic Beanstalk oferece um ambiente gerenciado que facilita a implantação e execução de aplicações na nuvem. Ele cuida do provisionamento, configuração e implantação dos recursos necessários, permitindo que o desenvolvedor foque apenas no código da aplicação.",
      "Incorreta. O AWS SAM é um framework para construir aplicações serverless, geralmente usando AWS Lambda e outros serviços sem servidor. Como a aplicação precisa ser implantada em instâncias EC2, essa opção não é adequada.",
      "Incorreta. O AWS CloudFormation permite criar e gerenciar recursos AWS por meio de templates, mas exige que o desenvolvedor defina explicitamente os recursos e sua configuração. Não abstrai o provisionamento e implantação da aplicação como o Elastic Beanstalk faz.",
      "Incorreta. O AWS CodeDeploy automatiza implantações de software em instâncias e outros ambientes, mas não realiza o provisionamento ou configuração dos servidores. Portanto, não atende ao requisito de abstrair o gerenciamento do servidor."
    ]
  },
  {
    "question": "O Amazon Simple Queue Service (SQS) possui um conjunto de APIs para diversas ações suportadas pelo serviço. Como um desenvolvedor associado, quais das seguintes afirmações você identificaria como corretas em relação à API CreateQueue? (Selecione três)",
    "options": [
      "As tags da fila são case sensitive. Se você adicionar uma nova tag com a mesma chave, mas com letras maiúsculas/minúsculas diferentes, ambas serão mantidas separadamente.",
      "Você não pode alterar o tipo da fila após criá-la",
      "A API CreateQueue pode ser usada para atualizar os atributos de uma fila existente passando os mesmos parâmetros da criação original.",
      "O valor do tempo de visibilidade para a fila é em segundos, com padrão de 30 segundos",
      "A fila de dead-letter (DLQ) de uma fila FIFO deve ser também uma fila FIFO. Já a DLQ de uma fila padrão deve ser também uma fila padrão",
      "O tempo, em segundos, pelo qual a entrega de todas as mensagens na fila é atrasada é configurado usando o atributo MessageRetentionPeriod"
    ],
    "correct": [1, 3, 4],
    "detailedExplanations": [
      "Incorreta. As tags da fila no Amazon SQS são case insensitive. Isso significa que chaves como 'env' e 'ENV' são tratadas como iguais. Se uma nova tag for adicionada com a mesma chave (independentemente do uso de maiúsculas/minúsculas), ela sobrescreve a existente.",
      "Correta. O tipo da fila não pode ser alterado após sua criação, ou seja, não é possível converter uma fila padrão em FIFO. Para usar uma fila FIFO, é necessário criar uma nova fila desse tipo ou excluir a fila padrão existente e recriá-la como FIFO.",
      "Incorreta. A API CreateQueue é usada exclusivamente para criar uma nova fila. Se você tentar criar uma fila com o mesmo nome de uma existente e passar atributos diferentes, o SQS retorna um erro. Para alterar atributos de uma fila existente, deve-se usar a API SetQueueAttributes.",
      "Correta. O tempo de visibilidade da fila é configurado em segundos, com valores válidos entre 0 e 43.200 (12 horas). O valor padrão é 30 segundos, que determina o período em que uma mensagem fica invisível após ser recebida por um consumidor.",
      "Correta. A fila de dead-letter de uma fila FIFO deve ser obrigatoriamente uma fila FIFO. Da mesma forma, a fila de dead-letter de uma fila padrão deve ser também uma fila padrão; não é permitido misturar os tipos entre a fila principal e a DLQ.",
      "Incorreta. O atraso na entrega das mensagens é configurado pelo atributo DelaySeconds, que define o tempo em segundos para atrasar a entrega de todas as mensagens na fila. O atributo MessageRetentionPeriod controla o tempo, em segundos, que o Amazon SQS mantém uma mensagem antes de descartá-la."
    ]
  },
  {
    "question": "Um desenvolvedor possui uma aplicação que armazena dados em um bucket do Amazon S3. A aplicação utiliza uma API HTTP para armazenar e recuperar objetos. Quando a operação PutObject adiciona objetos ao bucket S3, o desenvolvedor deve garantir que esses objetos sejam criptografados em repouso utilizando criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3). Qual solução garantirá que qualquer requisição de upload sem a criptografia obrigatória não seja processada?",
    "options": [
      "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como sse:s3. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.",
      "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como AES256. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.",
      "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como aws:kms. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.",
      "Definir a chave de criptografia para SSE-S3 no cabeçalho HTTP de cada requisição. Usar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O valor 'sse:s3' não é um valor válido para o cabeçalho x-amz-server-side-encryption. Para SSE-S3, o valor correto é 'AES256'. Essa opção é fictícia e não funcionará.",
      "Correta. A criptografia SSE-S3 é ativada ao definir o cabeçalho x-amz-server-side-encryption com o valor AES256 na requisição PutObject. Uma política de bucket pode negar uploads que não incluam esse cabeçalho, garantindo que todos os objetos sejam criptografados em repouso com SSE-S3.",
      "Incorreta. O valor 'aws:kms' é utilizado para criptografia do lado do servidor com AWS KMS (SSE-KMS), que é diferente do SSE-S3. Como a exigência é usar SSE-S3, essa opção não atende ao requisito.",
      "Incorreta. Para SSE-S3, o Amazon S3 gerencia automaticamente as chaves de criptografia e não permite que o cliente defina ou envie a chave de criptografia no cabeçalho HTTP. Portanto, essa abordagem não é válida nem suportada."
    ]
  },
  {
    "question": "Você está armazenando informações de apostas em sua aplicação de apostas e gostaria que os dados da tabela DynamoDB expirassem automaticamente após uma semana. O que você deve usar?",
    "options": [
      "Usar DynamoDB Streams",
      "Usar uma função Lambda",
      "Usar TTL (Time To Live)",
      "Usar DAX"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. DynamoDB Streams fornece um registro das alterações feitas na tabela, permitindo capturar eventos de inserção, atualização e exclusão. Entretanto, ele não realiza a exclusão automática dos dados expirados. Vale notar que itens expirados via TTL geram eventos no Stream, mas a exclusão em si não é feita pelo Stream.",
      "Incorreta. Embora seja possível implementar a expiração dos dados com uma função Lambda, isso exigiria configurar índices, realizar consultas ou varreduras frequentes e acionar a função periodicamente via CloudWatch Events. Essa abordagem é complexa, menos eficiente e mais trabalhosa do que usar o recurso nativo TTL do DynamoDB.",
      "Correta. O TTL é um recurso nativo do DynamoDB que permite definir um timestamp para expiração de cada item na tabela. Quando o tempo definido é atingido, o DynamoDB exclui automaticamente esses itens, reduzindo o uso de armazenamento e custos sem necessidade de intervenção manual ou código adicional.",
      "Incorreta. O Amazon DynamoDB Accelerator (DAX) é um cache em memória totalmente gerenciado que melhora a performance das leituras do DynamoDB, reduzindo a latência de milissegundos para microssegundos. No entanto, DAX não oferece funcionalidade para expirar ou deletar dados automaticamente."
    ]
  },
  {
    "question": "Uma organização possui escritórios em múltiplas localidades e a equipe de tecnologia configurou um Application Load Balancer (ALB) com alvos distribuídos em várias Zonas de Disponibilidade. A equipe deseja analisar as requisições recebidas para identificar latências e padrões de endereços IP dos clientes. Qual recurso do Load Balancer ajudará a coletar as informações necessárias?",
    "options": [
      "Logs de acesso do ALB",
      "Rastreamento de requisições do ALB",
      "Logs do CloudTrail",
      "Métricas do CloudWatch"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Os logs de acesso do Elastic Load Balancing capturam informações detalhadas sobre as requisições enviadas ao load balancer, incluindo o horário da requisição, o endereço IP do cliente, latências, caminhos das requisições e respostas do servidor. Esses logs são ideais para analisar padrões de tráfego e latências, sendo uma funcionalidade opcional que deve ser habilitada explicitamente.",
      "Incorreta. O rastreamento de requisições adiciona um identificador de rastreamento nos cabeçalhos HTTP para acompanhar o fluxo das requisições, mas não fornece dados detalhados sobre latência ou padrões de IP dos clientes, portanto não atende ao requisito da análise solicitada.",
      "Incorreta. O CloudTrail registra chamadas de API feitas para o Elastic Load Balancing, incluindo informações sobre quem fez a chamada e quando, mas não captura dados sobre as requisições HTTP recebidas pelo load balancer, como latência ou IP do cliente.",
      "Incorreta. O CloudWatch coleta métricas agregadas sobre o desempenho do load balancer e dos alvos, como contagem de requisições e latência média, mas não fornece informações detalhadas por requisição, como o endereço IP do cliente ou dados específicos de cada requisição."
    ]
  },
  {
    "question": "Uma empresa global de comércio eletrônico deseja realizar testes de carga geográficos em sua API de processamento de pedidos. A empresa precisa implantar recursos em múltiplas Regiões AWS para suportar o teste de carga da API. Como a empresa pode atender a esses requisitos sem adicionar código adicional à aplicação?",
    "options": [
      "Configurar um template do AWS CloudFormation que defina os recursos para o teste de carga. Desenvolver funções Lambda específicas para cada Região que criem um stack a partir do template CloudFormation quando invocadas.",
      "Configurar um AWS Cloud Development Kit (CDK) Toolkit que defina os recursos para o teste de carga. Utilizar o CDK CLI para criar um stack a partir do template em cada Região.",
      "Configurar um template do AWS Organizations que defina os recursos para o teste de carga em toda a organização. Utilizar o comando AWS CLI create-stack-set para criar um stack set nas Regiões desejadas.",
      "Configurar um template do AWS CloudFormation que defina os recursos para o teste de carga. Utilizar o comando AWS CLI create-stack-set para criar um stack set nas Regiões desejadas."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Essa abordagem exige desenvolvimento e manutenção de funções Lambda específicas para cada Região, além de criar stacks manualmente, o que gera complexidade e redundância desnecessária. O uso do CloudFormation StackSets elimina essa necessidade ao gerenciar múltiplas Regiões automaticamente.",
      "Incorreta. Embora o AWS CDK seja uma ferramenta poderosa para definir infraestrutura como código, ele ainda depende do CloudFormation para provisionamento e possui limitações regionais. Além disso, criar stacks individualmente em cada Região com o CDK CLI não automatiza a implantação multi-região de forma eficiente como o StackSets.",
      "Incorreta. O AWS Organizations é um serviço para gerenciamento e consolidação de múltiplas contas AWS, não para definir templates ou provisionar recursos. Ele não suporta a criação de templates para infraestrutura, portanto não pode ser usado para criar recursos de teste de carga via stack sets.",
      "Correta. O AWS CloudFormation StackSets permite criar, atualizar ou deletar stacks em múltiplas contas e Regiões AWS com uma única operação. Usando uma conta administradora, é possível definir um template CloudFormation e provisionar os recursos necessários para o teste de carga em várias Regiões simultaneamente, sem necessidade de código adicional."
    ]
  },
  {
    "question": "Como um AWS Certified Developer Associate, você foi solicitado a criar um ambiente AWS Elastic Beanstalk para gerenciar o deploy de uma aplicação que possui alto tráfego e necessidades de alta disponibilidade. Você precisa implantar a nova versão usando o Beanstalk garantindo que a performance e a disponibilidade não sejam afetadas. Qual das seguintes opções é a forma MAIS otimizada de fazer isso, mantendo a solução custo-efetiva?",
    "options": [
      "Realizar o deploy usando a política de implantação 'Immutable' (implantação imutável)",
      "Realizar o deploy usando a política de implantação 'Rolling' (implantação em lotes sequenciais)",
      "Realizar o deploy usando a política de implantação 'All at once' (tudo de uma vez)",
      "Realizar o deploy usando a política de implantação 'Rolling with additional batch' (implantação em lotes sequenciais com lote adicional)"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A implantação imutável cria um novo grupo de Auto Scaling com as novas instâncias para a nova versão, garantindo um rollback rápido e seguro em caso de falha. Apesar de ser muito segura, essa abordagem é mais lenta e mais cara, pois mantém duas infraestruturas simultâneas durante o deploy, o que pode não ser custo-efetivo para todas as situações.",
      "Incorreta. A política 'Rolling' realiza o deploy em lotes sequenciais, atualizando parte das instâncias por vez, o que mantém a maior parte da capacidade disponível durante o processo. Porém, durante o deploy, a capacidade total pode ser reduzida temporariamente, o que pode impactar aplicações com alto tráfego e alta necessidade de disponibilidade.",
      "Incorreta. Essa é a forma mais rápida de deploy, atualizando todas as instâncias simultaneamente. Porém, durante o processo, a aplicação pode ficar indisponível ou com baixa disponibilidade, o que não é adequado para aplicações com alto tráfego e alta necessidade de disponibilidade.",
      "Correta. Essa política lança um lote adicional de instâncias antes de iniciar o deploy em lotes sequenciais. Isso garante que a capacidade total e a largura de banda sejam mantidas durante todo o processo, evitando qualquer redução na disponibilidade. Embora o tempo de implantação seja maior, essa abordagem é ideal para aplicações que exigem alta disponibilidade e desempenho constante, mantendo a solução custo-efetiva."
    ]
  },
  {
    "question": "Uma empresa está criando um aplicativo de jogos que será implantado em dispositivos móveis. O aplicativo enviará dados para uma API RESTful baseada em funções Lambda. O aplicativo atribuirá a cada requisição da API um identificador único. O volume de requisições da API pode variar aleatoriamente a qualquer momento do dia. Durante o throttling das requisições, o aplicativo pode precisar reenviar requisições. A API deve ser capaz de lidar com requisições duplicadas sem inconsistências ou perda de dados. Qual das seguintes abordagens você recomendaria para atender a esses requisitos?",
    "options": [
      "Persistir o identificador único de cada requisição em uma tabela DynamoDB. Modificar a função Lambda para enviar uma resposta de erro ao cliente quando receber uma requisição duplicada.",
      "Persistir o identificador único de cada requisição em uma tabela MySQL no RDS. Modificar a função Lambda para verificar a tabela em busca do identificador antes de processar a requisição.",
      "Persistir o identificador único de cada requisição em um cache ElastiCache para Memcached. Modificar a função Lambda para verificar o cache em busca do identificador antes de processar a requisição.",
      "Persistir o identificador único de cada requisição em uma tabela DynamoDB. Modificar a função Lambda para verificar a tabela em busca do identificador antes de processar a requisição."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora o DynamoDB seja adequado para armazenar os identificadores, enviar uma resposta de erro ao cliente em caso de requisição duplicada pode causar inconsistência na experiência do usuário e não garante o tratamento transparente das duplicidades. O ideal é que a API lide com duplicatas de forma idempotente, processando apenas uma vez e retornando uma resposta consistente, sem erros desnecessários.",
      "Incorreta. Embora o RDS MySQL possa armazenar os identificadores, ele não é a melhor opção para lidar com picos massivos e imprevisíveis de requisições, pois escala verticalmente e pode se tornar um gargalo. O DynamoDB oferece escalabilidade horizontal automática e desempenho consistente em milissegundos, sendo mais adequado para aplicações com alta variação e volume de tráfego, como no caso apresentado.",
      "Incorreta. O Memcached é um sistema de cache simples que não oferece recursos de persistência, replicação ou snapshots, o que pode resultar em perda de dados em caso de falhas. Portanto, não é adequado para garantir a idempotência e evitar inconsistências em requisições duplicadas, especialmente em aplicações críticas que não podem perder dados.",
      "Correta. O DynamoDB é um banco de dados NoSQL totalmente gerenciado, serverless, que oferece alta performance e escalabilidade automática para lidar com grandes volumes de requisições. Armazenar o identificador único em uma tabela DynamoDB permite garantir que cada requisição seja processada apenas uma vez, evitando duplicidades e inconsistências. A função Lambda deve consultar a tabela para verificar se o identificador já foi processado antes de executar a lógica, garantindo assim a idempotência e evitando perda de dados."
    ]
  },
  {
    "question": "Uma empresa executa suas operações tecnológicas em uma frota de instâncias Amazon EC2. A empresa precisa que um determinado software esteja disponível nas instâncias para suportar seus fluxos de trabalho diários. A equipe de desenvolvimento foi orientada a usar o recurso de user data das instâncias EC2. Quais das alternativas a seguir são verdadeiras sobre a configuração de user data em instâncias EC2? (Selecione duas.)",
    "options": [
      "Por padrão, o user data é executado apenas durante o ciclo de boot quando você lança a instância pela primeira vez",
      "Por padrão, os scripts inseridos como user data não possuem privilégios de usuário root para execução",
      "Por padrão, os scripts inseridos como user data são executados com privilégios de usuário root",
      "Por padrão, o user data é executado toda vez que uma instância EC2 é reiniciada",
      "Quando uma instância está em execução, você pode atualizar o user data usando credenciais do usuário root"
    ],
    "correct": [0, 2],
    "detailedExplanations": [
      "Correta. O comportamento padrão do user data é executar scripts e diretivas cloud-init somente na primeira inicialização da instância. Para executar o user data em reinicializações, configurações adicionais são necessárias.",
      "Incorreta. Os scripts de user data são executados como usuário root por padrão, portanto, não é necessário usar sudo para comandos que requerem privilégios elevados.",
      "Correta. Scripts fornecidos via user data são executados com privilégios de root, o que significa que não é necessário usar o comando sudo dentro do script. Qualquer arquivo criado será de propriedade do root, e permissões adicionais devem ser configuradas se usuários não-root precisarem acessar esses arquivos.",
      "Incorreta. Por padrão, o user data é executado apenas durante o ciclo de boot inicial da instância. Para que o user data seja executado em reinicializações subsequentes, é necessário configurar explicitamente essa funcionalidade.",
      "Incorreta. Não é possível modificar o user data enquanto a instância está em execução, mesmo com credenciais root. É possível apenas visualizar o user data atual."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento configurou o tráfego de entrada para as portas relevantes tanto no Security Group da instância EC2 quanto na Network Access Control List (NACL) da sub-rede da instância EC2. No entanto, a equipe não consegue se conectar ao serviço que está rodando na instância Amazon EC2. Como um associado de desenvolvimento, qual das seguintes recomendações você faria para resolver esse problema?",
    "options": [
      "As regras associadas às Network ACLs nunca devem ser modificadas pela linha de comando. Uma tentativa de modificar regras pela linha de comando bloqueia a regra e resulta em um comportamento errático.",
      "Network ACLs são stateful, portanto, permitir o tráfego de entrada nas portas necessárias já habilita a conexão. Security Groups são stateless, então é necessário permitir tanto o tráfego de entrada quanto o de saída.",
      "Security Groups são stateful, portanto, permitir o tráfego de entrada nas portas necessárias já habilita a conexão. Network ACLs são stateless, então é necessário permitir tanto o tráfego de entrada quanto o de saída.",
      "A Role IAM definida no Security Group é diferente da Role IAM que tem acesso nas Network ACLs."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Essa afirmação é falsa. A AWS permite modificar regras de Network ACLs pela linha de comando (CLI, SDKs, etc.) sem causar bloqueios ou comportamentos erráticos. Essa alternativa foi criada apenas para confundir.",
      "Incorreta. Essa afirmação está invertida. Na realidade, Security Groups são stateful e Network ACLs são stateless. Portanto, essa alternativa está incorreta.",
      "Correta. Security Groups mantêm o estado da conexão, permitindo automaticamente o tráfego de retorno para conexões permitidas de entrada. Já as Network ACLs são stateless, exigindo regras explícitas para tráfego de entrada e saída. Para que a conexão funcione, as NACLs devem permitir o tráfego de entrada na porta do serviço e o tráfego de saída nas portas efêmeras usadas para o retorno.",
      "Incorreta. Security Groups e Network ACLs não utilizam Roles IAM para controle de acesso. Essa alternativa é incorreta e foi incluída como distração."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico desenvolveu uma API hospedada no Amazon ECS. Picos variáveis de tráfego na aplicação estão causando atrasos no processamento dos pedidos. A aplicação processa os pedidos utilizando filas do Amazon SQS. A métrica ApproximateNumberOfMessagesVisible apresenta picos muito altos ao longo do dia, o que dispara o alarme do CloudWatch. Outras métricas do ECS para os containers da API estão dentro dos limites esperados. Como um Desenvolvedor Associado, qual das seguintes opções você recomendaria para melhorar o desempenho mantendo os custos baixos?",
    "options": [
      "Utilizar métrica de backlog por instância com política de escalonamento por rastreamento de alvo (target tracking)",
      "Utilizar política de escalonamento em etapas (step scaling) do ECS",
      "Utilizar Docker Swarm",
      "Utilizar o agendador de serviço do ECS"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Utilizar uma métrica personalizada de backlog por instância com uma política de escalonamento por rastreamento de alvo permite que o sistema ajuste dinamicamente a capacidade do ECS com base na quantidade de mensagens pendentes por instância, garantindo que o processamento acompanhe a demanda de forma eficiente e mantendo os custos controlados. Essa abordagem é mais precisa do que usar apenas a métrica ApproximateNumberOfMessagesVisible, pois considera a capacidade atual da frota e o tempo aceitável de latência para processar mensagens.",
      "Incorreta. Embora o ECS suporte políticas de escalonamento em etapas, a AWS recomenda o uso de políticas de escalonamento por rastreamento de alvo (target tracking) para a maioria dos casos, pois elas ajustam automaticamente a capacidade com base em métricas específicas, oferecendo uma resposta mais inteligente e eficiente às variações de carga.",
      "Incorreta. Docker Swarm é uma ferramenta de orquestração de containers que permite gerenciar múltiplos containers em vários hosts, mas não está integrada diretamente com o Amazon ECS e não resolve o problema de escalabilidade dinâmica baseado em métricas do SQS nem otimiza custos para esta arquitetura.",
      "Incorreta. O agendador de serviço do ECS é usado para gerenciar a execução de tarefas de longa duração e garantir que o número desejado de tarefas esteja sempre em execução, mas não resolve diretamente o problema de escalabilidade baseado na fila do SQS nem otimiza o processamento em resposta a variações de demanda."
    ]
  },
  {
    "question": "Uma empresa deseja melhorar o desempenho de seu serviço de API popular que oferece acesso de leitura não autenticado a informações estatísticas atualizadas diariamente, utilizando Amazon API Gateway e AWS Lambda. Quais medidas a empresa pode adotar para alcançar esse objetivo?",
    "options": [
      "Configurar o API Gateway para usar Elasticache com Memcached",
      "Habilitar o cache de API no API Gateway",
      "Configurar o API Gateway para usar um Endpoint VPC Gateway",
      "Configurar planos de uso e chaves de API no API Gateway"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Elasticache para Memcached não pode ser integrado diretamente ao API Gateway para melhorar a responsividade da API neste caso. Elasticache atua como um serviço downstream e não é uma opção nativa para cache no API Gateway.",
      "Correta. O API Gateway oferece estratégias para otimizar a API e melhorar a responsividade, como o cache de respostas e compressão de payload. Habilitar o cache de API no Amazon API Gateway permite armazenar em cache as respostas dos endpoints, reduzindo o número de chamadas ao backend e melhorando a latência das requisições.",
      "Incorreta. Endpoints de gateway são usados para conectar VPCs diretamente a serviços como Amazon S3 e DynamoDB sem passar pela internet, mas não melhoram a performance do API Gateway nem habilitam AWS PrivateLink para APIs.",
      "Incorreta. Planos de uso e chaves de API são usados para controlar o acesso, limitar e monitorar o consumo da API, mas não melhoram a responsividade ou o desempenho do serviço. Eles são mecanismos de controle e segurança, não de otimização de desempenho."
    ]
  },
  {
    "question": "Uma empresa de cibersegurança deseja executar suas aplicações em hardware de locação exclusiva para atender às diretrizes de segurança. Qual das opções a seguir é a forma MAIS econômica de isolar suas instâncias Amazon EC2 em um único locatário?",
    "options": [
      "Instâncias Spot",
      "Instâncias Dedicadas",
      "Instâncias On-Demand",
      "Hosts Dedicados"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Instâncias Spot são instâncias EC2 não utilizadas oferecidas a preços inferiores aos das instâncias On-Demand. Elas são executadas quando há capacidade disponível e o preço máximo definido pelo usuário excede o preço Spot. Apesar de serem econômicas, não garantem isolamento em hardware de locação exclusiva, pois podem compartilhar servidores físicos com outras instâncias, não atendendo ao requisito de segurança da empresa.",
      "Incorreta. Instâncias Dedicadas são instâncias Amazon EC2 que rodam em hardware dedicado a um único cliente, garantindo isolamento físico entre diferentes contas AWS. No entanto, elas podem compartilhar hardware com outras instâncias da mesma conta, o que não oferece isolamento físico exclusivo para todas as instâncias do cliente.",
      "Incorreta. Instâncias On-Demand cobram por capacidade computacional por segundo, sem compromissos de longo prazo, e oferecem controle total sobre o ciclo de vida da instância. No entanto, não garantem isolamento em hardware exclusivo e são uma das opções mais caras, não sendo adequadas para o requisito de isolamento em hardware single-tenant da empresa.",
      "Correta. Hosts Dedicados são servidores físicos completos dedicados exclusivamente ao uso do cliente, oferecendo controle e visibilidade sobre o posicionamento das instâncias no servidor. Eles garantem isolamento total em hardware, atendendo aos requisitos de segurança para hardware de locação exclusiva, embora tenham custo mais elevado que as Instâncias Dedicadas."
    ]
  },
  {
    "question": "Uma empresa construiu sua pilha tecnológica utilizando arquitetura serverless da AWS para gerenciar todas as suas funções de negócio. Para acelerar o desenvolvimento de um novo requisito, a empresa deseja utilizar aplicações serverless pré-construídas. Qual serviço da AWS representa a solução mais simples para atender a esse caso de uso?",
    "options": [
      "AWS AppSync",
      "AWS Service Catalog",
      "AWS Serverless Application Repository (SAR)",
      "AWS Marketplace"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O AWS AppSync é um serviço gerenciado que facilita o desenvolvimento de APIs GraphQL, conectando de forma segura diversas fontes de dados como DynamoDB e Lambda. Apesar de acelerar o desenvolvimento de APIs, ele não oferece aplicações serverless pré-construídas para implantação direta.",
      "Incorreta. O AWS Service Catalog permite que organizações criem e gerenciem catálogos de serviços de TI aprovados para uso na AWS, incluindo imagens de máquinas virtuais, servidores, softwares e arquiteturas completas. Embora facilite a governança e o gerenciamento centralizado, ele não é focado em disponibilizar aplicações serverless pré-construídas para acelerar o desenvolvimento.",
      "Correta. O AWS Serverless Application Repository é um repositório gerenciado de aplicações serverless que permite a equipes e desenvolvedores armazenar, compartilhar e implantar aplicações reutilizáveis de forma rápida e simples. Com ele, não é necessário clonar, construir ou empacotar o código-fonte antes da implantação, pois oferece aplicações pré-construídas que aceleram o desenvolvimento e promovem boas práticas organizacionais.",
      "Incorreta. O AWS Marketplace é uma loja online para que parceiros qualificados comercializem softwares para clientes AWS. Ele facilita a compra e uso imediato de softwares e serviços na nuvem, mas não é um repositório específico para aplicações serverless pré-construídas focadas em acelerar o desenvolvimento interno."
    ]
  },
  {
    "question": "Um desenvolvedor em uma empresa está trabalhando em um template do CloudFormation para configurar recursos. Os recursos serão definidos por código e provisionados com base em certas condições definidas na seção Conditions. Qual seção de um template do CloudFormation NÃO pode ser associada a uma Condition?",
    "options": [
      "Resources",
      "Parameters",
      "Outputs",
      "Conditions"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A seção Resources descreve os recursos que você deseja provisionar na stack do CloudFormation. É possível associar condições aos recursos para que sejam criados apenas se a condição for verdadeira.",
      "Correta. A seção Parameters permite que você insira valores personalizados no seu template do CloudFormation a cada criação ou atualização de stack. No entanto, as condições não podem ser aplicadas diretamente aos parâmetros, pois estes são usados para entrada de dados e não para controle condicional de criação ou configuração de recursos.",
      "Incorreta. A seção Outputs é opcional e declara valores de saída que podem ser importados por outras stacks, retornados em respostas ou visualizados no console do CloudFormation. Você pode associar condições aos outputs para que sejam criados condicionalmente, dependendo do resultado da condição.",
      "Incorreta. A seção Conditions é onde você define as expressões condicionais que determinam se certos recursos ou outputs devem ser criados ou configurados. Portanto, esta seção é essencial para o uso de condições no template."
    ]
  },
  {
    "question": "Como um AWS Certified Developer Associate, você recebeu um documento escrito em YAML que representa a arquitetura de uma aplicação serverless. A primeira linha do documento contém Transform: 'AWS::Serverless-2016-10-31'. O que a seção Transform no documento representa?",
    "options": [
      "A presença da seção Transform indica que é um template do Serverless Application Model (SAM).",
      "Ela representa uma função intrínseca do CloudFormation.",
      "A presença da seção Transform indica que é um parâmetro do CloudFormation.",
      "Ela representa a definição de uma função Lambda."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A seção 'Transform' indica que o template utiliza o AWS Serverless Application Model (SAM), que é uma extensão do AWS CloudFormation para facilitar a definição de aplicações serverless. O transform 'AWS::Serverless-2016-10-31' é uma macro que expande a sintaxe SAM para um template CloudFormation padrão.",
      "Incorreta. Funções intrínsecas no CloudFormation são usadas para manipular valores durante a criação do template e geralmente começam com 'Fn::' ou '!'. A seção 'Transform' não é uma função intrínseca, mas sim uma indicação de macro para processamento do template.",
      "Incorreta. Parâmetros no CloudFormation são definidos na seção 'Parameters' e não na seção 'Transform'. A seção 'Transform' serve para aplicar macros ao template, não para definir parâmetros.",
      "Incorreta. A definição de uma função Lambda é feita através do recurso 'AWS::Lambda::Function' no CloudFormation, e não pela seção 'Transform'. Essa seção não define recursos específicos, mas indica que o template será processado como um SAM."
    ]
  },
  {
    "question": "Quais das seguintes credenciais de segurança só podem ser criadas pelo usuário root da conta AWS?",
    "options": [
      "Credenciais de Acesso do Usuário Root (senha e chaves de acesso root)",
      "Senhas de Usuário IAM",
      "Chaves de Acesso de Usuário IAM",
      "Chaves de Par de Chaves do EC2"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Somente o usuário root da conta AWS pode criar e gerenciar suas próprias credenciais de acesso, incluindo a senha do usuário root e as chaves de acesso root. Essas credenciais concedem permissões totais na conta e não podem ser criadas por usuários IAM.",
      "Incorreta. Cada usuário IAM tem controle sobre suas próprias credenciais e pode redefinir sua senha a qualquer momento sem a necessidade do usuário root.",
      "Incorreta. As chaves de acesso, compostas por um ID e uma chave secreta, são usadas para assinar requisições programáticas à AWS. Usuários IAM podem criar suas próprias chaves de acesso sem necessidade do usuário root.",
      "Incorreta. As chaves de par de chaves do EC2 são usadas para acessar instâncias do Amazon EC2, como via SSH em instâncias Linux. Essas chaves podem ser criadas por usuários IAM e não exigem acesso do usuário root."
    ]
  },
  {
    "question": "Uma startup com uma conta AWS recém-criada está testando diferentes instâncias EC2. Eles utilizaram uma instância de desempenho burstable - T2.micro - por 35 segundos e, em seguida, pararam a instância. Ao final do mês, qual será a duração de uso da instância pela qual a empresa será cobrada?",
    "options": [
      "35 segundos",
      "0 segundos",
      "60 segundos",
      "30 segundos"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Apesar do uso ter sido de apenas 35 segundos, a AWS aplica uma cobrança mínima de 60 segundos mesmo para instâncias Linux.",
      "Incorreta. Como a instância foi iniciada e utilizada, mesmo que brevemente, haverá cobrança. A AWS nunca cobra zero em casos onde há uso real.",
      "Correta. A AWS cobra instâncias EC2 em incrementos de 1 segundo, mas com um tempo mínimo de 60 segundos. Ou seja, mesmo que a instância T2.micro baseada em Linux tenha sido usada por apenas 35 segundos, a cobrança será referente a 60 segundos.",
      "Incorreta. A instância foi usada por 35 segundos, e mesmo que esse fosse o tempo real de uso, o faturamento mínimo é de 60 segundos."
    ]
  },
  {
    "question": "Você é um desenvolvedor trabalhando com funções AWS Lambda que são invocadas via REST APIs usando o Amazon API Gateway. Atualmente, quando uma requisição GET é feita pelo consumidor, todo o conjunto de dados retornado pela função Lambda fica visível. Seu líder de equipe pediu para você formatar a resposta dos dados. Qual recurso do API Gateway pode ser utilizado para resolver esse problema?",
    "options": [
      "Utilizar um interceptor customizado em Lambda",
      "Implantar um script shell interceptador",
      "Utilizar Templates de Mapeamento do API Gateway",
      "Usar uma variável de estágio do API Gateway"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Esta opção é fictícia. O Lambda não possui um mecanismo nativo para interceptar e modificar respostas de outras funções Lambda no contexto do API Gateway.",
      "Incorreta. Esta opção é um distrator. Não há suporte para executar scripts shell interceptadores no fluxo do API Gateway para modificar respostas de funções Lambda.",
      "Correta. No API Gateway, o payload da requisição de um método pode ser transformado para um formato diferente do payload da requisição de integração, conforme requerido pelo backend, e vice-versa para a resposta. Os Templates de Mapeamento permitem mapear o payload da requisição do método para o payload da integração e também mapear a resposta da integração para a resposta do método, possibilitando formatar os dados retornados pela função Lambda conforme desejado.",
      "Incorreta. Variáveis de estágio são pares nome-valor usados para configurar atributos associados a um estágio de implantação da API, funcionando como variáveis de ambiente. Embora possam ser usadas em templates de mapeamento, elas não são adequadas para formatar ou transformar o payload da resposta, que é o objetivo aqui."
    ]
  },
  {
    "question": "Para habilitar conexões HTTPS para sua aplicação web implantada na AWS Cloud, um desenvolvedor está no processo de criar um certificado de servidor. Quais entidades da AWS podem ser usadas para implantar certificados de servidor SSL/TLS? (Selecione duas.)",
    "options": [
      "AWS Certificate Manager",
      "AWS CloudFormation",
      "IAM",
      "AWS Secrets Manager",
      "AWS Systems Manager"
    ],
    "correct": [0, 2],
    "detailedExplanations": [
      "Correta. O AWS Certificate Manager (ACM) é a ferramenta recomendada para provisionar, gerenciar e implantar certificados SSL/TLS na AWS. Ele permite solicitar certificados públicos gratuitamente, gerenciar certificados existentes e renová-los automaticamente em regiões suportadas.",
      "Incorreta. O AWS CloudFormation é uma ferramenta para modelar e provisionar recursos de infraestrutura como código, mas não gerencia ou implanta certificados SSL/TLS diretamente.",
      "Correta. O IAM pode ser usado para gerenciar certificados de servidor SSL/TLS, especialmente em regiões onde o AWS Certificate Manager (ACM) não é suportado. O IAM armazena as chaves privadas de forma segura e permite o uso desses certificados em recursos AWS, embora exija que o certificado seja obtido externamente.",
      "Incorreta. O AWS Secrets Manager é usado para proteger e gerenciar segredos, como credenciais e chaves privadas, que podem estar relacionados a certificados SSL/TLS, mas não é utilizado para implantar certificados diretamente.",
      "Incorreta. O AWS Systems Manager é uma ferramenta para gerenciamento operacional e automação de infraestrutura, mas não é usado para gerenciar ou implantar certificados SSL/TLS."
    ]
  },
  {
    "question": "Ao executar uma implantação Rolling em um ambiente Elastic Beanstalk, apenas dois lotes concluíram a implantação com sucesso, enquanto o restante dos lotes falhou ao implantar a versão atualizada. Após isso, a equipe de desenvolvimento encerrou as instâncias do lote que falhou na implantação. Qual será o status dessas instâncias que falharam após a terminação?",
    "options": [
      "O Elastic Beanstalk substituirá as instâncias que falharam por instâncias executando a versão da aplicação da implantação mais antiga que foi bem-sucedida.",
      "O Elastic Beanstalk substituirá as instâncias que falharam por instâncias executando a versão da aplicação da implantação mais recente que foi bem-sucedida.",
      "O Elastic Beanstalk não substituirá as instâncias que falharam.",
      "O Elastic Beanstalk substituirá as instâncias que falharam somente após a versão da aplicação a ser instalada ser escolhida manualmente pelo console da AWS."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Elastic Beanstalk não reverte para a versão mais antiga bem-sucedida automaticamente; ele utiliza a versão da implantação mais recente que foi concluída com sucesso para substituir instâncias terminadas.",
      "Correta. Quando uma implantação Rolling falha em alguns lotes, o Elastic Beanstalk mantém as instâncias dos lotes que tiveram sucesso com a nova versão e, ao substituir instâncias terminadas dos lotes que falharam, ele as substitui por instâncias executando a versão da aplicação da implantação mais recente bem-sucedida, garantindo consistência no ambiente.",
      "Incorreta. O Elastic Beanstalk sempre garante que o ambiente esteja saudável e com a versão correta da aplicação, substituindo instâncias terminadas para manter a integridade do ambiente.",
      "Incorreta. O Elastic Beanstalk não exige intervenção manual para substituir instâncias terminadas durante uma implantação Rolling; ele gerencia automaticamente a substituição com base na última implantação bem-sucedida."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento deseja implantar uma função AWS Lambda que exige alta utilização de CPU. Como um profissional com certificação Developer Associate, qual das seguintes opções você recomendaria para reduzir o tempo médio de execução da função?",
    "options": [
      "Implantar a função com a alocação de memória configurada para o valor máximo permitido.",
      "Implantar a função em múltiplas Regiões AWS.",
      "Implantar a função com a alocação de CPU configurada para o valor máximo.",
      "Implantar a função utilizando camadas Lambda (Lambda layers)."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A AWS Lambda aloca a capacidade de CPU proporcionalmente à quantidade de memória configurada para a função. Ao aumentar a memória para o máximo permitido, você também aumenta a capacidade de CPU disponível, o que pode reduzir o tempo de execução da função.",
      "Incorreta. Implantar a função em várias regiões não aumenta a capacidade computacional ou o poder de CPU da função Lambda. Essa abordagem pode ser útil para alta disponibilidade ou latência, mas não reduz o tempo médio de execução da função.",
      "Incorreta. A alocação direta de CPU não é um parâmetro configurável no Lambda. A CPU é alocada automaticamente em proporção à memória configurada para a função, portanto, não é possível definir a CPU separadamente.",
      "Incorreta. Camadas Lambda são arquivos .zip que podem conter bibliotecas, runtimes personalizados, dados ou arquivos de configuração para promover o reuso de código e facilitar a manutenção. Elas não aumentam a capacidade computacional ou o poder de CPU da função Lambda."
    ]
  },
  {
    "question": "Você é um desenvolvedor em uma empresa de manufatura que possui vários servidores locais. A empresa decide migrar novos desenvolvimentos para a nuvem utilizando tecnologia serverless. Você opta por usar o AWS Serverless Application Model (AWS SAM) e trabalhar com um arquivo de template AWS SAM para representar sua arquitetura serverless. Qual dos seguintes tipos de recursos NÃO é válido no contexto serverless?",
    "options": [
      "AWS::Serverless::Api",
      "AWS::Serverless::SimpleTable",
      "AWS::Serverless::Function",
      "AWS::Serverless::UserPool"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Correta. Este recurso cria um conjunto de recursos e métodos do Amazon API Gateway que podem ser invocados por endpoints HTTPS. É útil para casos avançados onde se deseja controle total e flexibilidade na configuração das APIs, sendo suportado pelo AWS SAM.",
      "Correta. Este recurso cria uma tabela DynamoDB com uma chave primária de atributo único. É indicado para cenários onde o acesso aos dados é feito apenas pela chave primária e é um recurso válido no AWS SAM.",
      "Correta. Este recurso cria uma função Lambda, uma role de execução do IAM e os mapeamentos de fontes de eventos que disparam a função. É um dos principais recursos suportados pelo AWS SAM para aplicações serverless.",
      "Incorreta. Não existe um recurso chamado UserPool no AWS Serverless Application Model. O UserPool pertence ao serviço Amazon Cognito, utilizado para autenticação em aplicativos móveis e web, mas não é representado como um recurso serverless no SAM."
    ]
  },
  {
    "question": "Uma empresa de mídia criou um aplicativo de streaming de vídeo e deseja que seus usuários brasileiros sejam atendidos pelos servidores localizados no Brasil. Usuários de outras regiões do mundo não devem conseguir acessar esses servidores por meio de consultas DNS. Qual política de roteamento do Route 53 atende a esse requisito?",
    "options": [
      "Geolocation (Geolocalização)",
      "Weighted (Ponderado)",
      "Latency (Latência)",
      "Failover (Failover)"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A política Geolocation permite direcionar o tráfego com base na localização geográfica de onde as consultas DNS se originam, possibilitando que apenas usuários brasileiros acessem os servidores no Brasil, enquanto bloqueia ou redireciona usuários de outras regiões.",
      "Incorreta. A política Weighted permite distribuir o tráfego entre múltiplos recursos em proporções definidas, mas não restringe o acesso com base na localização geográfica dos usuários.",
      "Incorreta. A política Latency roteia o tráfego para a região AWS que oferece a menor latência para o usuário, visando melhorar o desempenho, mas não restringe o acesso por localização geográfica.",
      "Incorreta. A política Failover direciona o tráfego para um recurso principal quando ele está saudável e para um recurso secundário quando o principal está indisponível, não controlando o acesso por localização geográfica."
    ]
  },
  {
    "question": "Você está executando cargas de trabalho na AWS e incorporou strings de conexão do banco de dados RDS em cada servidor web que hospeda suas aplicações. Após reprovar em uma auditoria de segurança, você está buscando uma abordagem diferente para armazenar seus segredos de forma segura e realizar a rotação automática das credenciais do banco de dados. Qual serviço da AWS você pode usar para atender a esse caso de uso?",
    "options": [
      "KMS",
      "Secrets Manager",
      "Systems Manager",
      "SSM Parameter Store"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O AWS Key Management Service (KMS) facilita a criação e o gerenciamento de chaves criptográficas para proteger dados, controlando seu uso em diversos serviços AWS e aplicações. Entretanto, o KMS não é um serviço para armazenar segredos nem para realizar a rotação automática de credenciais de banco de dados.",
      "Correta. O AWS Secrets Manager permite gerenciar, recuperar e rotacionar automaticamente credenciais de banco de dados, chaves de API e outros segredos ao longo de seu ciclo de vida. Ele elimina a necessidade de codificar informações sensíveis em texto simples, oferecendo integração nativa para rotação automática com serviços como Amazon RDS, Amazon Redshift e Amazon DocumentDB.",
      "Incorreta. O AWS Systems Manager fornece visibilidade e controle da infraestrutura AWS, permitindo automação de tarefas operacionais e visualização de dados operacionais. Contudo, ele não é um serviço destinado ao armazenamento seguro de segredos nem oferece recursos para rotacionar automaticamente credenciais de banco de dados.",
      "Incorreta. O AWS Systems Manager Parameter Store oferece armazenamento seguro e hierárquico para dados de configuração e gerenciamento de segredos, como senhas e strings de conexão. No entanto, ele não possui funcionalidade nativa para realizar a rotação automática das credenciais do banco de dados, o que é um requisito fundamental neste cenário."
    ]
  },
  {
    "question": "Um desenvolvedor está testando filas do Amazon Simple Queue Service (SQS) em um ambiente de desenvolvimento. A fila, juntamente com todo o seu conteúdo, precisa ser excluída após os testes. Qual API do SQS deve ser utilizada para atender a esse requisito?",
    "options": [
      "PurgeQueue",
      "DeleteQueue",
      "RemoveQueue",
      "RemovePermission"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A operação PurgeQueue exclui todas as mensagens contidas na fila especificada pelo QueueUrl, mas mantém a fila ativa. Ou seja, a fila permanece disponível para uso, apenas seu conteúdo é removido.",
      "Correta. A operação DeleteQueue exclui a fila especificada pelo parâmetro QueueUrl, independentemente do conteúdo da fila. Ao deletar a fila, todas as mensagens nela contidas deixam de estar disponíveis. O processo de exclusão pode levar até 60 segundos, durante os quais algumas requisições podem ainda ser aceitas, mas após esse período a fila e suas mensagens deixam de existir. Além disso, é necessário aguardar pelo menos 60 segundos antes de criar uma nova fila com o mesmo nome.",
      "Incorreta. RemoveQueue não é uma operação válida na API do Amazon SQS e foi incluída apenas como uma alternativa para confundir. A exclusão correta da fila deve ser feita via DeleteQueue.",
      "Incorreta. A operação RemovePermission é usada para revogar permissões específicas definidas na política da fila, identificadas pelo parâmetro Label. Ela não exclui a fila nem suas mensagens, apenas remove permissões associadas."
    ]
  },
  {
    "question": "Um líder de equipe de desenvolvimento é responsável por gerenciar o acesso dos seus principais IAM. No início do ciclo, ela concedeu privilégios excessivos aos usuários para mantê-los motivados a experimentar novas funcionalidades. Agora, ela deseja garantir que a equipe tenha apenas as permissões mínimas necessárias para concluir o trabalho. Qual das opções a seguir ajudará a identificar funções IAM não utilizadas e removê-las sem interromper nenhum serviço?",
    "options": [
      "IAM Access Analyzer",
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "AWS IAM Credential Report"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O IAM Access Analyzer permite identificar permissões não utilizadas com base em logs do AWS CloudTrail, ajudando a detectar funções e permissões IAM que não estão sendo usadas, facilitando a aplicação do princípio do menor privilégio.",
      "Incorreta. O AWS Trusted Advisor fornece recomendações em áreas como segurança, custo e desempenho, mas não identifica diretamente funções IAM não utilizadas.",
      "Incorreta. O AWS Security Hub consolida achados de segurança de diversos serviços, mas não fornece relatórios sobre funções IAM não utilizadas.",
      "Incorreta. O Credential Report mostra o status das credenciais (senhas, chaves de acesso, MFA) para usuários IAM, mas não avalia o uso de funções ou políticas em si."
    ]
  },
  {
    "question": "O líder técnico da sua equipe revisou um template YAML do CloudFormation escrito por um novo integrante e identificou que uma seção inválida foi adicionada ao template. Qual das seguintes opções representa uma seção inválida do template CloudFormation?",
    "options": [
      "Seção 'Parameters' do template",
      "Seção 'Conditions' do template",
      "Seção 'Resources' do template",
      "Seção 'Dependencies' do template"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. A seção 'Parameters' é opcional e permite passar valores para o template em tempo de execução (durante a criação ou atualização da stack). Parâmetros podem ser referenciados nas seções 'Resources' e 'Outputs'.",
      "Incorreta. A seção 'Conditions' é opcional e permite definir condições que controlam se certos recursos serão criados ou se propriedades específicas serão atribuídas durante a criação ou atualização da stack. Por exemplo, pode-se criar um recurso condicionalmente dependendo se a stack é para ambiente de produção ou teste.",
      "Incorreta. A seção 'Resources' é a única seção obrigatória do template e especifica os recursos da stack e suas propriedades, como uma instância do Amazon EC2 ou um bucket do Amazon S3. Recursos podem ser referenciados nas seções 'Resources' e 'Outputs'.",
      "Correta. Não existe uma seção chamada 'Dependencies' em templates do CloudFormation. Embora seja possível definir dependências entre recursos usando propriedades específicas como 'DependsOn', não há uma seção dedicada chamada 'Dependencies' no template."
    ]
  },
  {
    "question": "Sua empresa configurou o AWS Organizations para gerenciar múltiplas contas AWS. Dentro de cada conta AWS, existem diversos scripts do CloudFormation em execução. Seu gerente solicitou que cada script exiba o número da conta AWS onde o script foi executado. Qual parâmetro pseudo você deve usar para obter essa informação?",
    "options": [
      "AWS::Region",
      "AWS::AccountId",
      "AWS::NoValue",
      "AWS::StackName"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. AWS::Region retorna uma string que representa a região AWS onde o recurso está sendo criado, como us-west-2, mas não fornece o número da conta AWS.",
      "Correta. O parâmetro AWS::AccountId retorna o ID da conta AWS na qual a stack está sendo criada, permitindo que o script identifique a conta onde está sendo executado.",
      "Incorreta. O parâmetro AWS::NoValue é utilizado para remover uma propriedade de recurso quando especificado como valor de retorno na função intrínseca Fn::If. Ele não retorna informações sobre a conta AWS.",
      "Incorreta. AWS::StackName retorna o nome da stack conforme especificado no comando aws cloudformation create-stack, como \"teststack\", mas não retorna o ID da conta AWS."
    ]
  },
  {
    "question": "Após uma implantação de teste em um ambiente Elastic Beanstalk, um desenvolvedor percebeu que todos os saldos acumulados de burst do Amazon EC2 foram perdidos. Qual das opções a seguir pode causar esse comportamento?",
    "options": [
      "A implantação foi realizada como uma implantação Rolling, resultando na reinicialização dos saldos de burst do EC2.",
      "A implantação foi realizada usando atualizações imutáveis ou no modo de divisão de tráfego.",
      "Quando uma implantação canary falha, ela zera os saldos de burst do EC2.",
      "A implantação foi realizada como uma implantação All-at-once, esvaziando todos os saldos acumulados de burst do EC2."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Implantações Rolling dividem as instâncias EC2 em lotes e atualizam uma parte por vez, preservando os saldos de burst acumulados, portanto não causam perda desses saldos.",
      "Correta. Atualizações imutáveis lançam um conjunto completo de novas instâncias em um grupo de Auto Scaling separado, substituindo as antigas, o que resulta na perda dos saldos de burst acumulados. Da mesma forma, implantações com divisão de tráfego (traffic splitting) criam novas instâncias para testes canary, também causando a perda desses saldos. Além disso, políticas que substituem todas as instâncias durante a atualização, como atualizações gerenciadas com substituição de instâncias, também provocam essa perda.",
      "Incorreta. Falhas em implantações canary não resultam na reinicialização dos saldos de burst do EC2; essa alternativa é um distrator sem fundamento técnico.",
      "Incorreta. Implantações All-at-once atualizam todas as instâncias simultaneamente, mas não causam perda dos saldos de burst acumulados do EC2."
    ]
  },
  {
    "question": "Uma empresa de varejo está migrando seu banco de dados local para o Amazon RDS para PostgreSQL. A empresa possui cargas de trabalho com alta demanda de leitura. A equipe de desenvolvimento está buscando refatorar o código para alcançar o desempenho ideal nas consultas SQL. Qual solução atenderá a esse requisito com o menor esforço de desenvolvimento atual e futuro?",
    "options": [
      "Configurar o Amazon RDS em uma configuração Multi-AZ com uma única instância standby. Refatorar o código da aplicação para que as consultas utilizem o endpoint da instância standby.",
      "Configurar o ElastiCache para Memcached para atuar como uma camada de cache para o Amazon RDS. Refatorar o código da aplicação para que as consultas utilizem o endpoint do ElastiCache para Memcached.",
      "Configurar o Amazon RDS com uma ou mais réplicas de leitura. Refatorar o código da aplicação para que as consultas utilizem o endpoint das réplicas de leitura.",
      "Configurar o ElastiCache para Redis para atuar como uma camada de cache para o Amazon RDS. Refatorar o código da aplicação para que as consultas utilizem o endpoint do ElastiCache para Redis."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Em uma implantação Multi-AZ com instância standby, a instância standby é usada apenas para failover e não está acessível para consultas de leitura. Portanto, não é possível direcionar consultas de leitura para a instância standby, tornando essa opção inadequada para melhorar o desempenho de leitura.",
      "Incorreta. Assim como o Redis, o Memcached é um cache em memória e não um banco de dados relacional. Ele não suporta consultas SQL, portanto não pode substituir consultas diretas ao banco de dados PostgreSQL. Essa abordagem não atende ao requisito de otimização de consultas SQL.",
      "Correta. O Amazon RDS utiliza a funcionalidade nativa de replicação do PostgreSQL para criar réplicas de leitura, que são instâncias especializadas que recebem atualizações assíncronas da instância principal. Isso permite distribuir a carga de consultas somente leitura, melhorando o desempenho sem impactar a instância principal. Refatorar a aplicação para direcionar consultas de leitura às réplicas é a solução que oferece o melhor desempenho com menor esforço de desenvolvimento futuro.",
      "Incorreta. Embora o ElastiCache para Redis seja um cache em memória eficiente, ele não é um banco de dados relacional e não suporta consultas SQL diretamente. Portanto, não é adequado para substituir consultas SQL em um banco de dados relacional como o PostgreSQL."
    ]
  },
  {
    "question": "Uma empresa multinacional acabou de migrar para a AWS Cloud e configurou alertas baseados em previsões no AWS Budgets para gerenciamento de custos. No entanto, nenhum alerta foi recebido, mesmo após quase três semanas da criação da conta e dos orçamentos. Qual poderia ser o problema na configuração do AWS Budgets?",
    "options": [
      "O Amazon CloudWatch pode estar indisponível, e por isso os alertas não estão sendo enviados.",
      "A AWS exige aproximadamente 5 semanas de dados de uso para gerar previsões de orçamento.",
      "A conta precisa fazer parte de uma Organização AWS para receber alertas do AWS Budgets.",
      "O orçamento baseado em previsão foi criado a partir de uma conta que não possui privilégios suficientes."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Amazon CloudWatch é um serviço totalmente gerenciado pela AWS e raramente fica indisponível. Essa alternativa foi incluída apenas como um fator de distração.",
      "Correta. O AWS Budgets necessita de cerca de 5 semanas de dados históricos de uso para gerar previsões confiáveis. Até que esse período seja alcançado, alertas baseados em previsão não serão disparados.",
      "Incorreta. Contas independentes também podem criar orçamentos e receber alertas. Não é obrigatório pertencer a uma Organização AWS para utilizar o AWS Budgets.",
      "Incorreta. Se a conta ou o usuário não tivesse privilégios suficientes, o orçamento nem poderia ser criado. Portanto, essa não é a causa do problema."
    ]
  },
  {
    "question": "Você é um desenvolvedor trabalhando em uma aplicação de processamento de pedidos em larga escala. Após desenvolver as funcionalidades, você faz commit do seu código no AWS CodeCommit e inicia a construção do projeto com o AWS CodeBuild antes de implantá-lo no servidor. A construção está demorando muito e o erro aponta para um problema na resolução de dependências de terceiros. Você gostaria de evitar que uma construção demore tanto no futuro por razões semelhantes. Qual das opções a seguir representa a melhor solução para resolver esse caso de uso?",
    "options": [
      "Utilizar AWS Lambda",
      "Utilizar AWS CloudWatch Events",
      "Utilizar VPC Flow Logs",
      "Habilitar timeouts no CodeBuild"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O AWS Lambda permite executar código sem gerenciar servidores, mas não tem influência direta sobre o processo de build do CodeBuild nem sobre o tempo que ele leva para resolver dependências.",
      "Incorreta. O AWS CloudWatch Events (agora Amazon EventBridge) é usado para monitorar e reagir a eventos em recursos AWS, mas não controla ou limita o tempo de execução dos builds no CodeBuild.",
      "Incorreta. VPC Flow Logs captura informações sobre o tráfego de rede dentro da VPC, mas não tem relação com o controle ou otimização do processo de build no CodeBuild.",
      "Correta. Configurar um timeout no AWS CodeBuild permite que o processo de build seja automaticamente interrompido após um tempo máximo configurado, evitando que builds travem ou demorem excessivamente devido a problemas como falha na resolução de dependências."
    ]
  },
  {
    "question": "Uma empresa utiliza o Elastic Beanstalk para gerenciar sua infraestrutura de TI na nuvem AWS e deseja implantar uma nova versão do aplicativo nas instâncias EC2. Durante a implantação, algumas instâncias devem continuar atendendo requisições com a versão antiga do aplicativo, enquanto outras devem atender com a nova versão até que a implantação seja concluída. Qual política de implantação atende a esse requisito sem gerar custos adicionais?",
    "options": [
      "Immutable",
      "All at once",
      "Rolling",
      "Rolling with additional batches"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A política 'Immutable' cria novas instâncias para a nova versão, mantendo as antigas até que a implantação seja concluída. Isso garante segurança e facilidade de rollback, mas gera custos adicionais devido à execução simultânea de instâncias extras.",
      "Incorreta. A política 'All at once' implanta a nova versão em todas as instâncias simultaneamente, o que pode causar indisponibilidade temporária do aplicativo, pois não mantém versões antigas e novas rodando simultaneamente.",
      "Correta. A implantação do tipo 'Rolling' atualiza as instâncias em lotes sequenciais, permitindo que algumas instâncias continuem atendendo com a versão antiga enquanto outras já utilizam a nova, sem aumentar o número total de instâncias e, portanto, sem custos adicionais.",
      "Incorreta. Essa política também atualiza em lotes, porém cria lotes adicionais de instâncias para manter a capacidade total durante a implantação, o que aumenta os custos devido à execução temporária de instâncias extras."
    ]
  },
  {
    "question": "Sua empresa armazenou todos os segredos da aplicação no SSM Parameter Store. A equipe de auditoria solicitou um relatório para entender melhor quando e quem realizou chamadas de API contra o SSM Parameter Store. Qual das opções abaixo pode ser usada para gerar esse relatório?",
    "options": [
      "Utilizar os logs de acesso do SSM Parameter Store armazenados no S3 para obter um registro das ações realizadas por um usuário",
      "Utilizar os logs de acesso do SSM Parameter Store no CloudWatch Logs para obter um registro das ações realizadas por um usuário",
      "Utilizar o AWS CloudTrail para obter um registro das ações realizadas por um usuário",
      "Utilizar o recurso de listagem do SSM Parameter Store para obter um registro das ações realizadas por um usuário"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Embora seja possível configurar logs de acesso no S3 para alguns serviços, o SSM Parameter Store não gera logs de acesso detalhados no S3 que permitam identificar quem realizou chamadas de API.",
      "Incorreta. Embora o CloudWatch Logs possa ser integrado para monitoramento, ele não fornece informações detalhadas sobre quem realizou as chamadas de API, nem quando elas ocorreram, o que é essencial para auditoria.",
      "Correta. O AWS CloudTrail registra todas as chamadas de API feitas para o Systems Manager Parameter Store, incluindo informações sobre quem fez a solicitação, quando, de qual endereço IP e outros detalhes importantes para auditoria e conformidade.",
      "Incorreta. O recurso de listagem do Parameter Store permite visualizar parâmetros armazenados, mas não registra ou fornece histórico de ações ou chamadas de API feitas por usuários."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento em uma empresa de mídia social utiliza funções AWS Lambda para sua arquitetura serverless na nuvem AWS. Para uma nova implantação, o líder da equipe deseja enviar apenas uma parte do tráfego para uma nova versão da função Lambda. Caso a implantação apresente problemas, a solução também deve suportar a capacidade de reverter para uma versão anterior da função Lambda, com o MÍNIMO tempo de inatividade para a aplicação. Como um Associate Developer, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Configure a aplicação para fazer o deploy diretamente da nova versão da função Lambda. Se a implantação falhar, redefina a aplicação para a versão atual usando o número da versão no ARN.",
      "Configure a aplicação para ter múltiplos aliases da função Lambda. Faça o deploy da nova versão do código. Configure um novo alias que aponte para o alias atual da função Lambda para tratar 10% do tráfego. Se a implantação falhar, redefina o novo alias para apontar todo o tráfego para o alias funcional mais recente da função Lambda.",
      "Configure a aplicação para usar um alias que aponte para a versão atual. Faça o deploy da nova versão do código e configure o alias para enviar todo o tráfego para essa nova versão. Se a implantação falhar, redefina o alias para apontar para a versão atual.",
      "Configure a aplicação para usar um alias que aponte para a versão atual. Faça o deploy da nova versão do código e configure o alias para enviar 10% dos usuários para essa nova versão. Se a implantação falhar, redefina o alias para enviar todo o tráfego para a versão atual."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Essa opção envia todo o tráfego para a nova versão sem controle de percentual, não atendendo ao requisito de enviar apenas parte do tráfego. Além disso, a reversão pode causar downtime, contrariando o requisito de mínimo tempo de inatividade.",
      "Incorreta. Um alias do Lambda só pode apontar para uma versão específica da função Lambda, não para outro alias. Portanto, configurar um alias para apontar para outro alias não é possível e torna essa solução inviável.",
      "Incorreta. Embora utilize alias, essa opção envia 100% do tráfego para a nova versão, o que não atende ao requisito de enviar apenas uma parte do tráfego para a nova versão. Além disso, em caso de falha, a aplicação pode sofrer tempo de inatividade, o que contraria o requisito de mínimo downtime.",
      "Correta. Essa abordagem utiliza aliases para controlar o tráfego, enviando apenas uma parte para a nova versão, permitindo testes controlados. Em caso de falha, o alias pode ser rapidamente revertido para a versão estável, minimizando o downtime."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa cria soluções serverless utilizando AWS Lambda. As funções são invocadas por clientes via AWS API Gateway, que está acessível a qualquer pessoa. O líder da equipe deseja controlar o acesso utilizando um mecanismo de autorização de terceiros. Como um Associate Developer, qual das seguintes opções você recomendaria para esse caso de uso?",
    "options": [
      "API Gateway User Pools",
      "Cognito User Pools",
      "Permissões IAM com assinatura sigv4",
      "Lambda Authorizer"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Essa opção é fictícia e foi incluída como um distrator. Não existe um recurso chamado \"API Gateway User Pools\" no AWS API Gateway.",
      "Incorreta. Um Cognito User Pool é um diretório de usuários gerenciado pela Amazon Cognito, que permite que os usuários façam login diretamente ou via provedores de identidade federados. Como é um serviço gerenciado pela AWS, não atende ao requisito de usar um mecanismo de autorização de terceiros personalizado.",
      "Incorreta. A assinatura Signature Version 4 (sigv4) é um método para autenticar requisições AWS via HTTP, exigindo permissões IAM. Porém, não atende ao requisito de usar um mecanismo de autorização de terceiros, pois depende do controle nativo da AWS e não de autenticação externa.",
      "Correta. Um Lambda Authorizer (anteriormente conhecido como custom authorizer) é uma função Lambda que você cria para controlar o acesso à sua API. Ele permite implementar estratégias de autenticação com tokens bearer, como OAuth ou SAML, possibilitando integrar mecanismos de autorização de terceiros antes do acesso à API."
    ]
  },
  {
    "question": "Você escolheu o AWS Elastic Beanstalk para fazer o upload do código da sua aplicação e permitir que ele gerencie detalhes como provisionamento de recursos e monitoramento. Ao criar arquivos de configuração para o AWS Elastic Beanstalk, qual convenção de nomenclatura você deve seguir?",
    "options": [
      ".config_<meus_ajustes>.ebextensions",
      ".config/<meus_ajustes>.ebextensions",
      ".ebextensions/<meus_ajustes>.config",
      ".ebextensions_<meus_ajustes>.config"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Essa opção apresenta a extensão e o diretório invertidos e não segue o padrão oficial de nomenclatura do Elastic Beanstalk para arquivos de configuração.",
      "Incorreta. Essa nomenclatura inverte a estrutura correta dos diretórios e extensões, pois os arquivos de configuração devem estar dentro da pasta .ebextensions e ter extensão .config, não o contrário.",
      "Correta. Os arquivos de configuração do AWS Elastic Beanstalk devem estar dentro da pasta '.ebextensions' na raiz do pacote da aplicação e possuir a extensão '.config'. Esses arquivos são escritos em YAML ou JSON e permitem customizar o ambiente e os recursos AWS provisionados.",
      "Incorreta. O nome do diretório e o formato do arquivo estão incorretos. A pasta deve ser '.ebextensions' (com ponto e sem underline) e os arquivos devem ter extensão '.config', não um nome misto com underline."
    ]
  }
];