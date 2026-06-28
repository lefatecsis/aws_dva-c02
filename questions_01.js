const originalQuestions = [
  {
    "question": "Uma empresa adota práticas de desenvolvimento colaborativo. O gerente de engenharia deseja isolar o esforço de desenvolvimento configurando simulações dos componentes da API pertencentes a várias equipes de desenvolvimento.\n\nQual tipo de integração de API é mais adequado para esse requisito?",
    "options": [
      "AWS_PROXY",
      "HTTP_PROXY",
      "MOCK",
      "HTTP"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. A integração AWS_PROXY conecta diretamente o método da API a uma função Lambda, permitindo uma integração flexível e simplificada. No entanto, não é adequada para simulações isoladas, pois depende da execução real da função Lambda.",
      "Incorreta. A integração HTTP_PROXY permite que o cliente acesse endpoints HTTP do backend com uma configuração simplificada, passando as requisições e respostas diretamente sem mapeamentos. Não é indicada para simulações, pois requer um backend HTTP ativo.",
      "Correta. Esse tipo de integração permite que o API Gateway retorne uma resposta sem encaminhar a requisição para o backend. Isso é útil para testes de API, pois possibilita testar a configuração da integração sem gerar custos com o backend e facilita o desenvolvimento colaborativo da API ao simular componentes ainda em desenvolvimento por outras equipes.",
      "Incorreta. A integração HTTP expõe endpoints HTTP no backend, exigindo configuração detalhada do pedido e da resposta de integração, incluindo mapeamentos de dados. Não é ideal para simulações isoladas, pois depende do backend real para processar as requisições."
    ]
  },
  {
    "question": "Um desenvolvedor deseja integrar funcionalidades de upload e download de arquivos específicos para cada usuário em uma aplicação que utiliza tanto Amazon Cognito user pools quanto Cognito identity pools para acesso seguro ao Amazon S3. O desenvolvedor também quer garantir que apenas usuários autorizados possam acessar seus próprios arquivos e que os arquivos sejam salvos e recuperados de forma segura. Os arquivos possuem tamanhos entre 5 KB e 500 MB.\n\nQual é a solução mais eficiente que você recomendaria?",
    "options": [
      "Aproveitar uma política IAM com o prefixo de identidade do Amazon Cognito para restringir os usuários a utilizarem apenas suas próprias pastas no Amazon S3.",
      "Integrar o Amazon API Gateway com uma função Lambda que valide se o arquivo foi enviado para o S3 e baixado dele apenas pelo usuário autorizado.",
      "Utilizar CloudFront Lambda@Edge para validar se o arquivo foi enviado para o S3 e baixado dele apenas pelo usuário autorizado.",
      "Usar notificações de eventos do S3 para acionar uma função Lambda que valide se o arquivo foi enviado e baixado apenas pelo usuário autorizado."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Essa é a solução mais eficiente e segura. Amazon Cognito identity pools fornecem credenciais temporárias com permissões limitadas, e uma política IAM pode restringir o acesso dos usuários apenas às suas próprias pastas no S3, garantindo que cada usuário só possa acessar seus arquivos. Essa abordagem é nativa, escalável e evita a necessidade de funções Lambda adicionais ou serviços intermediários.",
      "Incorreta. Embora essa abordagem seja viável, ela não é a mais eficiente, pois não previne o upload indevido de arquivos em pastas de outros usuários. Além disso, adiciona complexidade e latência desnecessárias ao fluxo de dados.",
      "Incorreta. Essa opção pressupõe o uso de uma distribuição CloudFront, o que gera custos adicionais e aumenta a latência, tornando a solução menos eficiente para uploads e downloads. Também adiciona complexidade desnecessária ao fluxo de dados.",
      "Incorreta. Embora seja possível construir essa solução, ela não é a mais eficiente, pois não impede que um arquivo inválido seja enviado para a pasta designada de outro usuário. Portanto, não garante controle de acesso adequado no momento do upload."
    ]
  },
  {
    "question": "Sua empresa planeja abandonar a reserva de instâncias EC2 e deseja adotar uma arquitetura serverless mais ágil.\n\nQual das opções a seguir representa a forma mais simples e com menor esforço para implantar contêineres Docker nessa arquitetura serverless?",
    "options": [
      "AWS Elastic Beanstalk",
      "Amazon Elastic Container Service (Amazon ECS) em instâncias EC2",
      "Amazon Elastic Container Service (Amazon ECS) com Fargate",
      "Amazon Elastic Kubernetes Service (Amazon EKS) com Fargate"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. AWS Elastic Beanstalk é um serviço fácil de usar para implantar e escalar aplicações web e serviços, gerenciando automaticamente a capacidade, balanceamento de carga, escalabilidade e monitoramento. No entanto, ele utiliza instâncias EC2 para executar as aplicações, portanto não é uma solução serverless.",
      "Incorreta. Amazon ECS é um serviço gerenciado para executar e gerenciar contêineres Docker em clusters. Quando executado em instâncias EC2, você precisa provisionar e gerenciar os servidores subjacentes, o que não caracteriza uma arquitetura serverless.",
      "Correta. Amazon ECS com Fargate é uma solução serverless para executar contêineres Docker sem necessidade de gerenciar servidores. O Fargate é um mecanismo de computação serverless que permite focar no desenvolvimento da aplicação, pagando apenas pelos recursos consumidos e garantindo isolamento e segurança por design.",
      "Incorreta. Amazon EKS é um serviço gerenciado de Kubernetes que pode ser executado com Fargate para oferecer computação serverless. Contudo, para o caso que busca a forma mais simples e com menor esforço para implantar contêineres Docker, ECS com Fargate é mais direto e fácil de usar. EKS é mais indicado para quem precisa da complexidade e flexibilidade do Kubernetes."
    ]
  },
  {
    "question": "Um desenvolvedor está projetando um template AWS CloudFormation para implantar instâncias Amazon EC2 em várias contas AWS. O desenvolvedor precisa permitir a seleção de instâncias EC2 a partir de uma lista de tipos de instância previamente aprovados.\n\nQuais medidas o desenvolvedor pode tomar para integrar a lista de tipos de instância autorizados no template CloudFormation?",
    "options": [
      "Configurar um pseudo parâmetro com a lista de tipos de instância EC2 como AllowedValues no template CloudFormation",
      "Configurar parâmetros separados para cada tipo de instância EC2 no template CloudFormation",
      "Configurar um parâmetro com a lista de tipos de instância EC2 como AllowedValues no template CloudFormation",
      "Configurar um mapeamento contendo uma lista de tipos de instância EC2 como parâmetros no template CloudFormation"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Pseudo parâmetros são valores pré-definidos pelo AWS CloudFormation e não podem ser declarados ou modificados no template. Portanto, não é possível criar um pseudo parâmetro personalizado para conter uma lista de tipos de instância.",
      "Incorreta. Criar múltiplos parâmetros separados para cada tipo de instância é semanticamente incorreto e ineficiente, pois todos se referem ao mesmo recurso subjacente. Além disso, isso não restringe efetivamente a seleção a uma lista unificada de tipos aprovados.",
      "Correta. A seção Parameters permite personalizar templates, possibilitando a entrada de valores customizados a cada criação ou atualização da stack. O atributo AllowedValues define uma lista de valores permitidos para o parâmetro, garantindo que o valor informado seja um dos tipos de instância aprovados. Isso é ideal para restringir a seleção a tipos pré-definidos.",
      "Incorreta. A seção Mappings é usada para associar chaves a conjuntos nomeados de valores, como valores específicos por região, e não para armazenar listas de parâmetros. Além disso, não se pode usar parâmetros, pseudo parâmetros ou funções intrínsecas dentro de Mappings. Portanto, não é adequado para definir uma lista de tipos de instância autorizados."
    ]
  },
  {
    "question": "Um desenvolvedor deseja habilitar o rastreamento do X-Ray em um servidor Linux on-premises que executa uma aplicação personalizada e é acessado por meio do Amazon API Gateway.\n\nQual é a solução mais eficiente que exige a configuração mínima?",
    "options": [
      "Configurar uma função Lambda para analisar os dados de tráfego recebidos nos servidores on-premises e, em seguida, encaminhar os dados do X-Ray para o serviço X-Ray usando a chamada da API PutTelemetryRecords.",
      "Instalar e executar o agente unificado do CloudWatch nos servidores on-premises para capturar e encaminhar os dados do X-Ray para o serviço X-Ray usando a chamada da API PutTraceSegments.",
      "Instalar e executar o SDK do X-Ray nos servidores on-premises para capturar e encaminhar os dados para o serviço X-Ray.",
      "Instalar e executar o daemon do X-Ray nos servidores on-premises para capturar e encaminhar os dados para o serviço X-Ray."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Uma função Lambda não pode processar diretamente os dados do X-Ray de uma instância on-premises e encaminhá-los para o serviço X-Ray. Essa abordagem adiciona complexidade desnecessária e não é suportada para esse caso de uso.",
      "Incorreta. O agente do CloudWatch não pode encaminhar dados do X-Ray para o serviço X-Ray usando a API PutTraceSegments. Essa opção é um distrator e não é suportada para integração direta com o X-Ray.",
      "Incorreta. Embora o SDK do X-Ray seja necessário para instrumentar a aplicação, ele sozinho não encaminha os dados para o serviço X-Ray. É necessário que o daemon do X-Ray esteja em execução para coletar e enviar esses dados ao serviço.",
      "Correta. O daemon do AWS X-Ray é um aplicativo que escuta o tráfego na porta UDP 2000, coleta os dados brutos dos segmentos e os encaminha para a API do AWS X-Ray. Ele funciona em conjunto com os SDKs do X-Ray e deve estar em execução para que os dados enviados pelos SDKs alcancem o serviço X-Ray. Essa é a forma mais eficiente e com configuração mínima para habilitar o rastreamento em servidores on-premises."
    ]
  },
  {
    "question": "Uma empresa de comércio eletrônico possui um fluxo de trabalho para processamento de pedidos com várias tarefas a serem executadas em paralelo, além de etapas de decisão que precisam ser avaliadas para o processamento bem-sucedido do pedido. Todas as tarefas são implementadas por meio de funções Lambda.\n\nQual das seguintes opções é a MELHOR solução para atender a esses requisitos de negócio?",
    "options": [
      "Utilizar máquinas de estado do AWS Step Functions para orquestrar o fluxo de trabalho",
      "Utilizar atividades do AWS Step Functions para orquestrar o fluxo de trabalho",
      "Utilizar AWS Batch para orquestrar o fluxo de trabalho",
      "Utilizar AWS Glue para orquestrar o fluxo de trabalho"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. AWS Step Functions é um serviço que permite coordenar componentes de aplicações distribuídas e microsserviços usando fluxos de trabalho visuais. Com máquinas de estado definidas em Amazon States Language, é possível orquestrar tarefas paralelas e decisões complexas, ideal para workflows com funções Lambda.",
      "Incorreta. Atividades no AWS Step Functions são usadas para associar código externo (como um worker em EC2) a uma tarefa específica, mas não orquestram o fluxo de trabalho por si só. Elas são parte do mecanismo, não a solução principal para orquestração.",
      "Incorreta. AWS Batch é um serviço para execução de jobs em lote na nuvem, otimizando recursos computacionais para cargas batch, mas não é indicado para orquestração de workflows com múltiplas tarefas e decisões.",
      "Incorreta. AWS Glue é um serviço gerenciado de ETL (extração, transformação e carga) focado em preparação e carregamento de dados para análises, não sendo adequado para orquestração de workflows de processamento de pedidos."
    ]
  },
  {
    "question": "Como desenvolvedor, você deseja criar uma configuração personalizada para instâncias Amazon EC2 executando em um grupo de Auto Scaling. A solução deve permitir que o grupo faça o auto scaling com base na métrica de 'uso médio de RAM' das suas instâncias Amazon EC2.\n\nQual opção oferece a melhor solução?",
    "options": [
      "Criar uma métrica personalizada no CloudWatch e fazer suas instâncias enviarem dados para ela usando PutMetricData. Em seguida, criar um alarme baseado nessa métrica.",
      "Migrar sua aplicação para AWS Lambda.",
      "Criar um alarme personalizado para seu grupo de Auto Scaling e fazer suas instâncias acionarem o alarme usando a API PutAlarmData.",
      "Habilitar o monitoramento detalhado para EC2 e Auto Scaling para obter os dados de uso de RAM e criar um alarme no CloudWatch baseado nesses dados."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Você pode criar uma métrica personalizada para uso de RAM e configurar suas instâncias EC2 para enviar esses dados ao CloudWatch via PutMetricData. Depois, cria-se um alarme baseado nessa métrica para acionar o auto scaling conforme o uso médio de RAM.",
      "Incorreta. Embora o AWS Lambda seja útil para arquiteturas serverless, ele não é aplicável para monitorar o uso de RAM em instâncias EC2 dentro de um grupo de Auto Scaling, que é o requisito deste caso.",
      "Incorreta. Essa abordagem não funciona porque as instâncias precisam compartilhar e agregar os dados de uso de RAM para calcular a média do grupo. Não existe uma API PutAlarmData para instâncias acionarem alarmes diretamente, e o Auto Scaling depende de métricas agregadas no CloudWatch.",
      "Incorreta. O monitoramento detalhado aumenta a frequência de coleta das métricas padrão para 1 minuto, mas não coleta métricas personalizadas como uso de RAM. Você ainda precisaria criar e enviar a métrica personalizada de uso de RAM para o CloudWatch."
    ]
  },
  {
    "question": "Um site de comércio eletrônico de uma empresa espera centenas de milhares de visitantes na Black Friday. O departamento de marketing está preocupado que o alto volume de pedidos possa sobrecarregar o Amazon SQS, levando a falhas no processamento das mensagens. A empresa solicitou que você indique quais medidas devem ser tomadas como precaução contra esse alto volume.\n\nQual passo você sugeriria como um Desenvolvedor Associado?",
    "options": [
      "Converter a fila em uma fila FIFO ordenada, pois as mensagens para o sistema em queda serão processadas mais rapidamente uma vez que estejam ordenadas.",
      "O Amazon SQS é altamente escalável e não necessita de nenhuma intervenção para lidar com os volumes elevados esperados.",
      "Habilitar o autoescalonamento na fila do SQS.",
      "Pré-configurar a fila do SQS para aumentar a capacidade quando o número de mensagens atingir um determinado limite."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Não é possível converter uma fila padrão existente em uma fila FIFO. Para usar uma fila FIFO, é necessário criar uma nova fila FIFO ou excluir a fila padrão atual e recriá-la como FIFO. Além disso, a ordenação das mensagens não necessariamente acelera o processamento em sistemas indisponíveis.",
      "Correta. O Amazon SQS utiliza a infraestrutura da AWS para escalar dinamicamente conforme a demanda. Ele se ajusta elasticamente ao seu aplicativo, eliminando a necessidade de planejamento de capacidade ou pré-provisionamento. Para a maioria das filas padrão, o limite máximo é de aproximadamente 120.000 mensagens em processamento simultâneo (inflight), o que é suficiente para grandes volumes.",
      "Incorreta. As filas do Amazon SQS são, por definição, autoescaláveis e não requerem nenhuma configuração adicional para autoescalonamento. Não existe uma opção para habilitar ou configurar autoescalonamento manualmente nas filas SQS.",
      "Incorreta. O Amazon SQS escala automaticamente e dinamicamente conforme a demanda, não sendo necessário nem possível pré-configurar a capacidade da fila para aumentar em determinados limiares de mensagens."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento utiliza buckets Amazon S3 compartilhados para fazer upload de arquivos. Devido a esse acesso compartilhado, os objetos nos buckets S3 possuem diferentes proprietários, o que dificulta o gerenciamento dos objetos.\n\nComo um desenvolvedor associado, qual das opções a seguir você sugeriria para automaticamente tornar o proprietário do bucket S3 também o proprietário de todos os objetos no bucket, independentemente da conta AWS utilizada para fazer o upload dos objetos?",
    "options": [
      "Utilizar Listas de Controle de Acesso (ACLs) do bucket para controlar o acesso no bucket S3 e então definir seu proprietário.",
      "Utilizar o S3 Access Analyzer para identificar os proprietários de todos os objetos e alterar a propriedade para o proprietário do bucket.",
      "Utilizar CORS do S3 para tornar o proprietário do bucket S3 o proprietário de todos os objetos no bucket.",
      "Utilizar o recurso S3 Object Ownership para definir que o proprietário do bucket seja o proprietário padrão de todos os objetos no bucket."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. As ACLs do bucket permitem controlar o acesso em nível de bucket e objeto, mas não alteram automaticamente a propriedade dos objetos enviados por outras contas. Elas não resolvem o problema de múltiplos proprietários de objetos em um bucket compartilhado.",
      "Incorreta. O S3 Access Analyzer é uma ferramenta para analisar políticas de acesso e identificar permissões públicas ou compartilhadas, mas não permite alterar a propriedade dos objetos no bucket.",
      "Incorreta. CORS (Cross-Origin Resource Sharing) é uma política que permite que aplicações web em um domínio acessem recursos em outro domínio, não tem relação com a propriedade dos objetos em buckets S3.",
      "Correta. O S3 Object Ownership é uma configuração do bucket que permite controlar a propriedade dos objetos enviados. Com a opção 'Bucket owner preferred', objetos enviados por outras contas que utilizam a ACL 'bucket-owner-full-control' passam a ser automaticamente de propriedade do dono do bucket, facilitando o gerenciamento."
    ]
  },
  {
    "question": "Você migrou um banco de dados SQL Server on-premises para um banco de dados Amazon Relational Database Service (RDS) conectado a uma VPC dentro de uma sub-rede privada. Além disso, a aplicação Java relacionada, que estava hospedada on-premises, foi movida para uma função AWS Lambda.\n\nQual das seguintes opções você deve implementar para conectar a função AWS Lambda à sua instância RDS?",
    "options": [
      "Utilizar variáveis de ambiente para passar a string de conexão do RDS.",
      "Usar Lambda Layers para conectar separadamente à internet e ao RDS.",
      "Configurar o Lambda para conectar-se a uma sub-rede pública que forneça acesso à internet e usar um Security Group para acessar o RDS dentro da sub-rede privada.",
      "Configurar o Lambda para conectar-se à VPC com a sub-rede privada e o Security Group necessário para acessar o RDS."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora seja possível usar variáveis de ambiente para armazenar informações como strings de conexão ou segredos, isso não garante o acesso à instância RDS dentro da VPC. O Lambda ainda precisa estar configurado para acessar a rede privada onde o RDS está localizado.",
      "Incorreta. Lambda Layers são usados para adicionar bibliotecas, runtimes personalizados ou dependências ao código da função Lambda, mas não configuram ou facilitam o acesso à rede ou recursos como o RDS. Portanto, não ajudam na conexão com a instância RDS.",
      "Incorreta. Conectar o Lambda a uma sub-rede pública não garante acesso à internet nem um IP público para a função. Para que o Lambda tenha acesso à internet, a VPC precisa ter um NAT Gateway ou NAT Instance em uma sub-rede pública. Além disso, o acesso ao RDS em sub-rede privada deve ser feito a partir da mesma VPC e sub-rede privada, não da pública.",
      "Correta. A maneira adequada de permitir que uma função Lambda acesse um banco de dados RDS em uma sub-rede privada é configurá-la para executar dentro da mesma VPC e sub-rede privada, associando o Security Group que permite o acesso ao RDS. O Lambda cria interfaces de rede elásticas para se conectar à VPC, garantindo comunicação segura e privada com o banco de dados."
    ]
  },
  {
    "question": "Você é um desenvolvedor que utiliza a AWS CLI para criar funções Lambda que contêm variáveis de ambiente. Suas funções precisarão de mais de 50 variáveis de ambiente contendo informações sensíveis, como nomes de tabelas de banco de dados.\n\nQual é o tamanho total permitido e o número máximo de variáveis de ambiente que podem ser criadas para uma função AWS Lambda?",
    "options": [
      "O tamanho total de todas as variáveis de ambiente não deve exceder 4 KB. O número máximo de variáveis que podem ser criadas é 35.",
      "O tamanho total de todas as variáveis de ambiente não deve exceder 4 KB. Não há limite para o número de variáveis.",
      "O tamanho total de todas as variáveis de ambiente não deve exceder 8 KB. Não há limite para o número de variáveis.",
      "O tamanho total de todas as variáveis de ambiente não deve exceder 8 KB. O número máximo de variáveis que podem ser criadas é 50."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o limite de tamanho total seja 4 KB, não há um limite definido para o número de variáveis de ambiente, desde que o tamanho total seja respeitado.",
      "Correta. O AWS Lambda permite que o tamanho total combinado de todas as variáveis de ambiente seja de até 4 KB. Não existe um limite explícito para a quantidade de variáveis, desde que o tamanho total não ultrapasse esse limite.",
      "Incorreta. O tamanho total permitido para variáveis de ambiente no AWS Lambda é de até 4 KB, não 8 KB. Além disso, não há limite definido para o número de variáveis, desde que o tamanho total seja respeitado.",
      "Incorreta. O limite de tamanho total para variáveis de ambiente é 4 KB, não 8 KB. Além disso, não há um limite fixo no número de variáveis, desde que o tamanho total seja respeitado."
    ]
  },
  {
    "question": "Um novo membro da sua equipe está trabalhando na criação de uma Dead Letter Queue (DLQ) para funções AWS Lambda.\n\nComo um Associate Developer, você pode ajudá-lo a identificar os casos de uso em que o AWS Lambda adicionará uma mensagem em uma DLQ após o processamento? (Selecione duas opções)",
    "options": [
      "A invocação da função Lambda é síncrona",
      "A invocação da função Lambda é assíncrona",
      "A invocação da função Lambda falhou apenas uma vez, mas depois foi bem-sucedida",
      "O evento foi processado com sucesso",
      "O evento falhou em todas as tentativas de processamento"
    ],
    "correct": [1, 4],
    "detailedExplanations": [
      "Incorreta. Quando você invoca uma função de forma síncrona, o Lambda executa a função e espera pela resposta. Filas são geralmente usadas com invocações assíncronas, pois implementam o desacoplamento entre sistemas conectados. Não faz sentido usar filas quando o código chamador aguarda a resposta diretamente.",
      "Correta. Quando um evento de invocação assíncrona excede a idade máxima permitida ou falha em todas as tentativas de retry, o Lambda descarta o evento ou o envia para a dead-letter queue, caso esta esteja configurada.",
      "Incorreta. Um evento que eventualmente é processado com sucesso não é enviado para a dead-letter queue, mesmo que tenha falhado em tentativas anteriores.",
      "Incorreta. Um evento processado com sucesso não é enviado para a dead-letter queue, pois não há falha a ser tratada.",
      "Correta. A dead-letter queue funciona de forma semelhante a um destino de falha, sendo usada quando um evento falha em todas as tentativas de processamento ou expira sem ser processado."
    ]
  },
  {
    "question": "Você está gerenciando um site de armazenamento de arquivos na nuvem com um Application Load Balancer (ALB) voltado para a internet, que direciona as requisições dos usuários para 10 instâncias Amazon EC2 registradas. Os usuários reclamam que o site sempre solicita que eles façam reautenticação ao navegar entre as páginas. Você fica surpreso, pois esse comportamento não ocorre em sua máquina local ou no ambiente de desenvolvimento.\n\nQual poderia ser a causa desse problema?",
    "options": [
      "O Application Load Balancer está no modo slow-start, o que dá mais tempo para ler e gravar dados de sessão.",
      "As instâncias EC2 estão desconectando os usuários porque nunca têm acesso aos IPs dos clientes devido ao Load Balancer.",
      "O Load Balancer não tem a funcionalidade de stickiness (sessões aderentes) habilitada.",
      "O Load Balancer não tem TLS habilitado."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O modo slow-start permite que as instâncias recebam o tráfego gradualmente para 'aquecer' antes de receberem sua carga total, mas não tem impacto na gestão de sessões ou autenticação.",
      "Incorreta. O Elastic Load Balancing armazena o endereço IP do cliente no cabeçalho da requisição X-Forwarded-For e o repassa para o servidor. Assim, as instâncias EC2 podem acessar o IP original do cliente se necessário, e isso não causa a perda da sessão.",
      "Correta. Sessões aderentes permitem que o Load Balancer direcione as requisições subsequentes do mesmo cliente para a mesma instância alvo, mantendo o estado da sessão. Sem essa funcionalidade, as requisições podem ser distribuídas para diferentes instâncias, causando a necessidade de reautenticação constante.",
      "Incorreta. Embora o TLS seja importante para segurança e criptografia, sua ausência não causa perda de sessão ou necessidade constante de reautenticação."
    ]
  },
  {
    "question": "Uma empresa líder no setor financeiro oferece serviços de agregação de dados para firmas de trading de Wall Street. A empresa cobra seus clientes com base na quantidade de dados de clickstream fornecidos. Como a empresa opera em um setor regulado, é necessário que os mesmos dados de clickstream, na mesma ordem, estejam disponíveis para auditoria dentro de uma janela de 7 dias.\n\nComo um Desenvolvedor Associado, qual dos seguintes serviços AWS você recomendaria para executar o processo de faturamento e auditoria sobre os dados de clickstream fornecidos, garantindo que ambos os processos utilizem os dados na mesma ordem?",
    "options": [
      "AWS Kinesis Data Streams",
      "AWS Kinesis Data Analytics",
      "Amazon SQS",
      "AWS Kinesis Data Firehose"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O Amazon Kinesis Data Streams é um serviço escalável e durável para streaming de dados em tempo real, que captura grandes volumes de dados de múltiplas fontes. Ele garante a ordenação dos registros e permite que múltiplas aplicações leiam e processem os dados na mesma ordem, inclusive possibilitando a leitura e reprocessamento dos dados em até 365 dias. Para o caso apresentado, é possível configurar o armazenamento dos dados por até 7 dias, garantindo que o processo de faturamento e auditoria acessem os dados na mesma ordem dentro desse período.",
      "Incorreta. O AWS Kinesis Data Analytics é utilizado para analisar dados de streaming em tempo real, permitindo a construção rápida de consultas SQL e aplicações Java sofisticadas para transformar, agregar e analisar dados. No entanto, ele não garante a ordenação dos dados nem o armazenamento dos mesmos para reprocessamento em ordem, o que é essencial para o caso de uso apresentado.",
      "Incorreta. O Amazon Simple Queue Service (SQS) oferece filas padrão e FIFO. Embora as filas FIFO garantam a ordem e entrega única das mensagens, elas não suportam múltiplos consumidores lendo a mesma mensagem na mesma ordem com atraso de horas, como exigido para auditoria. Portanto, não atende ao requisito de reprocessamento ordenado dos dados para múltiplos processos.",
      "Incorreta. O AWS Kinesis Data Firehose é uma solução totalmente gerenciada para carregar dados de streaming em destinos como Amazon S3, Redshift e Elasticsearch. Ele é focado em ingestão e entrega de dados, não em processamento ordenado ou armazenamento para reprocessamento, o que o torna inadequado para garantir a ordenação e disponibilidade dos dados para auditoria e faturamento conforme o requisito."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de mídia está trabalhando para garantir a segurança de seus bancos de dados.\n\nQuais dos seguintes mecanismos de banco de dados da AWS podem ser configurados com Autenticação de Banco de Dados via IAM? (Selecione duas)",
    "options": [
      "RDS Oracle",
      "RDS Db2",
      "RDS PostgreSQL",
      "RDS MySQL",
      "RDS SQL Server"
    ],
    "correct": [2, 3],
    "detailedExplanations": [
      "Incorreta. O mecanismo Oracle no Amazon RDS não oferece suporte à autenticação via IAM, sendo necessário utilizar métodos tradicionais de autenticação baseados em usuário e senha.",
      "Incorreta. O Amazon RDS não suporta o mecanismo Db2, que é um produto da IBM, portanto não há possibilidade de configurar autenticação via IAM para esse banco neste serviço.",
      "Correta. O mecanismo PostgreSQL no Amazon RDS também suporta autenticação via IAM, possibilitando conexões seguras utilizando tokens temporários gerados pelo serviço IAM, eliminando a necessidade de armazenar credenciais no banco.",
      "Correta. A autenticação via IAM para banco de dados é suportada pelo mecanismo MySQL no Amazon RDS, permitindo que os usuários se conectem sem usar senhas tradicionais, mas sim tokens de autenticação gerados pelo IAM.",
      "Incorreta. O mecanismo SQL Server no Amazon RDS não suporta autenticação via IAM, sendo necessário utilizar autenticação tradicional com usuário e senha."
    ]
  },
  {
    "question": "Uma empresa de negociação de ações de alta frequência está migrando suas filas de mensagens de sistemas de middleware orientados a mensagens autogerenciados para o Amazon SQS. A equipe de desenvolvimento da empresa deseja minimizar os custos do uso do SQS.\n\nComo um Associate Developer, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Usar o timeout de visibilidade do SQS para recuperar mensagens das suas filas do Amazon SQS",
      "Usar o long polling do SQS para recuperar mensagens das suas filas do Amazon SQS",
      "Usar o short polling do SQS para recuperar mensagens das suas filas do Amazon SQS",
      "Usar o timer de mensagens do SQS para recuperar mensagens das suas filas do Amazon SQS"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O timeout de visibilidade é um período durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, mas não é um método para recuperar mensagens da fila.",
      "Correta. O long polling faz com que o Amazon SQS espere até que haja pelo menos uma mensagem disponível antes de responder, reduzindo o número de respostas vazias e, consequentemente, diminuindo os custos de uso do serviço.",
      "Incorreta. O short polling faz com que o Amazon SQS responda imediatamente, mesmo que não haja mensagens disponíveis, o que pode aumentar o custo devido ao maior número de respostas vazias.",
      "Incorreta. O timer de mensagens define um período inicial de invisibilidade para uma mensagem recém-enviada, mas não é usado para recuperar mensagens da fila, sendo apenas um mecanismo para atrasar a visibilidade da mensagem."
    ]
  },
  {
    "question": "Você possui um grupo de Auto Scaling configurado com capacidade mínima de 1 e máxima de 5, projetado para lançar instâncias EC2 em 3 Zonas de Disponibilidade. Durante um período de baixa utilização, uma Zona de Disponibilidade inteira ficou indisponível e sua aplicação sofreu downtime.\n\nO que você pode fazer para garantir que sua aplicação permaneça altamente disponível?",
    "options": [
      "Configurar o Auto Scaling Group para lançar instâncias em múltiplas Zonas de Disponibilidade e aumentar a capacidade mínima para 2",
      "Configurar failover rápido no Auto Scaling Group",
      "Habilitar RDS Multi-AZ",
      "Aumentar a capacidade máxima do Auto Scaling Group para 10",
      "Alterar a métrica de escalabilidade da política de auto scaling para bytes de rede"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Para garantir alta disponibilidade, é necessário configurar explicitamente o Auto Scaling Group para lançar instâncias em múltiplas Zonas de Disponibilidade e aumentar a capacidade mínima para pelo menos 2. Isso assegura que as instâncias sejam distribuídas entre diferentes AZs, evitando downtime caso uma AZ fique indisponível.",
      "Incorreta. Esta opção é fictícia e não corresponde a uma funcionalidade real do Auto Scaling Group na AWS, sendo usada apenas como distração.",
      "Incorreta. Habilitar o RDS Multi-AZ torna o banco de dados altamente disponível, mas não resolve o problema da aplicação que depende de múltiplas instâncias EC2 distribuídas em diferentes Zonas de Disponibilidade para garantir alta disponibilidade.",
      "Incorreta. Aumentar a capacidade máxima permite mais instâncias, mas não garante distribuição entre múltiplas Zonas de Disponibilidade nem alta disponibilidade por si só.",
      "Incorreta. Embora seja possível definir métricas personalizadas para políticas de escalabilidade, mudar a métrica para bytes de rede não garante que as instâncias sejam distribuídas entre diferentes Zonas de Disponibilidade, que é essencial para alta disponibilidade neste cenário."
    ]
  },
  {
    "question": "Você trabalha para uma empresa de transporte que está automatizando a criação de clusters ECS com um Auto Scaling Group usando um template AWS CloudFormation que aceita o nome do cluster como parâmetro. Inicialmente, você lançou o template com o valor de entrada 'MainCluster', que implantou cinco instâncias distribuídas em duas zonas de disponibilidade. Na segunda vez, você lançou o template com o valor de entrada 'SecondCluster'. Contudo, as instâncias criadas na segunda execução também foram lançadas no cluster 'MainCluster', mesmo após especificar um nome de cluster diferente.\n\nQual é a causa raiz desse problema?",
    "options": [
      "A imagem Docker do agente ECS precisa ser reconstruída para se conectar aos outros clusters",
      "O parâmetro do nome do cluster não foi atualizado no arquivo /etc/ecs/ecs.config durante o bootstrap",
      "Os grupos de segurança da instância EC2 estão configurados para o cluster ECS errado",
      "A instância EC2 está sem permissões IAM para ingressar nos outros clusters"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A imagem do agente ECS não precisa ser reconstruída para conectar-se a diferentes clusters. O problema não está relacionado à imagem do agente, pois a primeira execução funcionou corretamente.",
      "Correta. No arquivo ecs.config, é necessário configurar o parâmetro ECS_CLUSTER='nome_do_cluster' para registrar a instância de contêiner no cluster correto. Se esse parâmetro não for atualizado durante o bootstrap, a instância será registrada no cluster padrão ou anterior.",
      "Incorreta. Os grupos de segurança controlam o tráfego de rede para as instâncias, mas não determinam a qual cluster ECS a instância será registrada. Portanto, essa não é a causa do problema.",
      "Incorreta. As instâncias EC2 já estão sendo registradas no primeiro cluster, indicando que as permissões IAM estão corretas. Portanto, a falta de permissões não é a causa do problema."
    ]
  },
  {
    "question": "Uma empresa possui uma carga de trabalho que requer 14.000 IOPS consistentes para dados que devem ser duráveis e seguros. Os padrões de conformidade da empresa determinam que os dados devem estar protegidos em todas as etapas do seu ciclo de vida em todos os volumes EBS utilizados.\n\nQuais das seguintes afirmações são verdadeiras em relação à segurança dos dados no EBS?",
    "options": [
      "Os volumes EBS suportam criptografia em repouso utilizando o KMS, mas não suportam criptografia em trânsito.",
      "Os volumes EBS suportam criptografia em trânsito, mas não suportam criptografia em repouso.",
      "Os volumes EBS não suportam nenhum tipo de criptografia.",
      "Os volumes EBS suportam criptografia em repouso e em trânsito utilizando o KMS."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Os volumes EBS utilizam o AWS KMS para criptografar os dados em repouso, garantindo a segurança dos dados armazenados. No entanto, a criptografia em trânsito entre a instância EC2 e o volume EBS não é suportada nativamente, embora a comunicação ocorra dentro da rede segura da AWS.",
      "Incorreta. Os volumes EBS suportam criptografia em repouso utilizando o AWS KMS, mas não suportam criptografia em trânsito nativa.",
      "Incorreta. Os volumes EBS oferecem suporte nativo à criptografia integrada com o AWS KMS, garantindo a segurança dos dados armazenados.",
      "Incorreta. Embora os volumes EBS suportem criptografia em repouso com o AWS KMS, eles não suportam criptografia em trânsito nativa entre a instância EC2 e o volume EBS."
    ]
  },
  {
    "question": "Uma empresa de cibersegurança está executando um backend serverless com vários fluxos de trabalho que demandam alta capacidade computacional, rodando em funções Lambda. A equipe de desenvolvimento percebeu uma lentidão no desempenho após analisar as métricas das funções Lambda.\n\nComo um Associate Developer, qual das seguintes opções você sugeriria como a MELHOR solução para lidar com esses fluxos de trabalho que exigem alta capacidade computacional?",
    "options": [
      "Usar concorrência reservada para contabilizar os fluxos de trabalho que demandam alta capacidade computacional",
      "Usar concorrência provisionada para contabilizar os fluxos de trabalho que demandam alta capacidade computacional",
      "Aumentar a quantidade de memória disponível para as funções Lambda",
      "Invocar as funções Lambda de forma assíncrona para processar os fluxos de trabalho que demandam alta capacidade computacional"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Concorrência reservada limita o número máximo de execuções simultâneas da função, garantindo capacidade para ela, mas não aumenta a capacidade computacional de cada execução individual. Portanto, não melhora o desempenho em cargas computacionais pesadas.",
      "Incorreta. Concorrência provisionada mantém um número pré-aquecido de instâncias da função prontas para responder rapidamente, reduzindo latência de inicialização a frio. Porém, isso não aumenta a capacidade computacional de cada execução individual, não melhorando o desempenho em cargas pesadas.",
      "Correta. No modelo de recursos do AWS Lambda, a quantidade de CPU e outros recursos são proporcionais à memória configurada para a função. Ao aumentar a memória, você também aumenta a capacidade computacional disponível, melhorando o desempenho em cargas de trabalho pesadas. A memória pode ser configurada de 128 MB até 3.008 MB, em incrementos de 64 MB.",
      "Incorreta. Invocar funções Lambda de forma assíncrona significa que você não espera uma resposta imediata da função, apenas entrega o evento para o Lambda processar. Embora isso possa ajudar na escalabilidade e desacoplamento, não melhora a capacidade computacional ou o desempenho da função em si para cargas pesadas."
    ]
  },
  {
    "question": "Uma empresa de mídia utiliza uma fila do Amazon Simple Queue Service (SQS) para gerenciar suas transações. Com as mudanças nas necessidades do negócio, o tamanho da carga útil das mensagens está aumentando. O líder da equipe está preocupado com o limite de tamanho de 256 KB das mensagens no SQS.\n\nO que pode ser feito para que a fila aceite mensagens com tamanho maior?",
    "options": [
      "Usar o SQS Extended Client",
      "Solicitar aumento do limite de serviço junto à AWS",
      "Usar compressão gzip",
      "Usar a API MultiPart"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O SQS Extended Client permite que mensagens maiores que 256 KB sejam armazenadas no Amazon S3, enquanto apenas um ponteiro é enviado para a fila SQS. Isso possibilita o envio e recebimento de mensagens de até 2 GB, superando a limitação nativa do SQS.",
      "Incorreta. Embora seja possível solicitar aumentos de limites para alguns serviços AWS, o limite de 256 KB para mensagens no SQS é uma restrição técnica fixa. A solução recomendada para mensagens maiores é usar o SQS Extended Client com armazenamento no S3.",
      "Incorreta. Embora a compressão gzip possa reduzir o tamanho da mensagem, a mensagem ainda precisa ser codificada para atender aos padrões do SQS, o que pode adicionar overhead. Além disso, a compressão não garante que mensagens muito grandes ultrapassem o limite de 256 KB de forma confiável e eficiente.",
      "Incorreta. Não existe uma API MultiPart para o Amazon SQS. Essa funcionalidade é comumente associada ao Amazon S3 para upload de arquivos grandes, mas não se aplica ao SQS."
    ]
  },
  {
    "question": "Uma empresa possui mais de 100 milhões de membros em todo o mundo que assistem a 125 milhões de horas de programas de TV e filmes diariamente. A empresa utiliza a AWS para quase todas as suas necessidades de computação e armazenamento, operando mais de 10.000 instâncias de servidores na AWS. Isso resulta em um ambiente de rede extremamente complexo e dinâmico, onde as aplicações estão constantemente se comunicando dentro da AWS e pela Internet. Monitorar e otimizar essa rede é crítico para a empresa.\n\nA empresa precisa de uma solução para ingerir e analisar os múltiplos terabytes de dados em tempo real que sua rede gera diariamente na forma de logs de fluxo. Qual tecnologia/serviço a empresa deve utilizar para ingerir esses dados de forma econômica e que ofereça flexibilidade para direcionar esses dados para outros sistemas downstream?",
    "options": [
      "AWS Glue",
      "Amazon Kinesis Firehose",
      "Amazon Simple Queue Service (SQS)",
      "Amazon Kinesis Data Streams"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. AWS Glue é um serviço serverless de integração e preparação de dados para análise, aprendizado de máquina e desenvolvimento de aplicações. Ele é ideal para processamento em batch e preparação de dados, mas não é adequado para ingestão e análise de dados em tempo real, como os logs de fluxo gerados pela rede da empresa. Portanto, não atende aos requisitos do cenário apresentado.",
      "Incorreta. Amazon Kinesis Data Firehose é a forma mais simples de carregar dados de streaming em data lakes e ferramentas analíticas, como Amazon S3, Redshift, Elasticsearch e Splunk. É um serviço totalmente gerenciado que escala automaticamente e não requer administração contínua. Porém, Firehose é menos flexível que Kinesis Data Streams para processamento customizado e integração com múltiplos sistemas downstream, além de ser geralmente mais caro. Portanto, não é a melhor escolha para ingestão econômica e flexível de grandes volumes de dados em tempo real.",
      "Incorreta. Amazon SQS é um serviço de fila altamente escalável e confiável para armazenar mensagens entre componentes distribuídos de aplicações. Ele é ideal para casos onde o processamento de mensagens individuais com confirmação de sucesso/falha é importante, e geralmente para cenários com um único consumidor por fila. No entanto, SQS não é otimizado para ingestão e análise de grandes volumes de dados em tempo real, como logs de fluxo de rede, e não oferece a flexibilidade necessária para direcionar dados para múltiplos sistemas downstream em tempo real.",
      "Correta. Amazon Kinesis Data Streams (KDS) é um serviço de streaming de dados em tempo real, altamente escalável e durável. Ele pode capturar continuamente gigabytes de dados por segundo de centenas de milhares de fontes, como fluxos de cliques em websites, eventos de bancos de dados, transações financeiras, feeds de redes sociais, logs de TI e eventos de rastreamento de localização. Os dados coletados ficam disponíveis em milissegundos, permitindo casos de uso de análise em tempo real, como dashboards dinâmicos, detecção de anomalias e precificação dinâmica. KDS oferece processamento em tempo real, ordenação dos registros e a capacidade de leitura/reprodução dos dados para múltiplas aplicações, além de ser econômico e flexível para integração com sistemas downstream."
    ]
  },
  {
    "question": "Um provedor de serviços de telecomunicações armazena seus dados críticos de clientes no Amazon Simple Storage Service (Amazon S3).\n\nQuais das seguintes opções podem ser usadas para controlar o acesso aos dados armazenados no Amazon S3? (Selecione duas)",
    "options": [
      "Autenticação via Query String, Listas de Controle de Acesso (ACLs)",
      "Políticas de bucket, Políticas do IAM (Identity and Access Management)",
      "Autenticação via Query String, Limites de Permissões (Permissions Boundaries)",
      "Autenticação de banco de dados IAM, Políticas de bucket",
      "Limites de Permissões (Permissions Boundaries), Políticas do IAM (Identity and Access Management)"
    ],
    "correct": [0, 1],
    "detailedExplanations": [
      "Correta. A autenticação via Query String permite gerar URLs pré-assinadas que concedem acesso temporário a objetos S3, enquanto as ACLs permitem conceder permissões específicas (como READ, WRITE, FULL_CONTROL) para usuários ou grupos em buckets ou objetos individuais.",
      "Correta. Políticas de bucket definem regras que se aplicam a todas as requisições para um bucket S3, podendo restringir acesso por IP, HTTP referrer, entre outros. Políticas do IAM permitem controle granular de permissões para usuários e grupos dentro da conta AWS, incluindo acesso a recursos S3.",
      "Incorreta. A autenticação via Query String é um método válido para controlar o acesso temporário a objetos no S3, mas limites de permissões (permissions boundaries) não são usados para controle direto de acesso a recursos S3, pois apenas definem o limite máximo de permissões que uma entidade IAM pode receber, não concedendo permissões por si só.",
      "Incorreta. A autenticação de banco de dados IAM é um método específico para autenticação em bancos de dados MySQL e PostgreSQL gerenciados pela AWS e não é aplicável para controle de acesso ao Amazon S3. Políticas de bucket são válidas para controle de acesso, mas combinadas com autenticação de banco de dados IAM, a opção é incorreta.",
      "Incorreta. Embora as políticas do IAM sejam usadas para controle de acesso, limites de permissões (permissions boundaries) apenas definem o limite máximo de permissões que uma entidade IAM pode receber e não concedem permissões diretamente, portanto não são um mecanismo direto para controlar acesso ao S3."
    ]
  },
  {
    "question": "Uma aplicação bancária precisa enviar alertas e notificações em tempo real com base em atualizações dos serviços backend. A empresa deseja evitar a implementação de mecanismos complexos de polling para essas notificações.\n\nQual dos seguintes tipos de APIs suportados pelo Amazon API Gateway é a opção mais adequada?",
    "options": [
      "APIs REST ou HTTP",
      "APIs REST",
      "APIs HTTP",
      "APIs WebSocket"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Embora APIs HTTP ofereçam menor latência e custo comparado às APIs REST, ambas funcionam no modelo tradicional de requisição-resposta, sem suporte nativo para comunicação bidirecional ou push do servidor para o cliente. Portanto, não eliminam a necessidade de polling para notificações em tempo real.",
      "Incorreta. APIs REST no API Gateway são baseadas em recursos e métodos HTTP, onde o cliente faz requisições e o servidor responde. Elas não suportam comunicação bidirecional em tempo real nem envio de mensagens do servidor para o cliente sem uma requisição explícita, o que torna necessário o uso de polling para atualizações em tempo real.",
      "Incorreta. APIs HTTP são uma forma simplificada de APIs REST focadas em menor latência e custo, mas ainda operam no modelo requisição-resposta. Elas não suportam comunicação push do servidor para o cliente, portanto não são adequadas para notificações em tempo real sem polling.",
      "Correta. APIs WebSocket permitem comunicação bidirecional entre cliente e servidor, possibilitando que o backend envie mensagens em tempo real para os clientes conectados sem a necessidade de polling. Isso é ideal para alertas e notificações em tempo real, como em aplicações bancárias que exigem atualizações imediatas."
    ]
  },
  {
    "question": "Um desenvolvedor da sua equipe configurou o balanceador de carga para distribuir o tráfego igualmente entre instâncias ou entre Zonas de Disponibilidade. No entanto, o Elastic Load Balancing (ELB) está roteando mais tráfego para uma instância ou Zona de Disponibilidade do que para as outras.\n\nPor que isso está acontecendo e como pode ser corrigido? (Selecione duas opções)",
    "options": [
      "Após desabilitar uma Zona de Disponibilidade, os alvos nessa Zona permanecem registrados no balanceador de carga, recebendo assim rajadas aleatórias de tráfego.",
      "Sessões persistentes (sticky sessions) estão habilitadas no balanceador de carga.",
      "Podem existir conexões TCP de curta duração entre clientes e instâncias.",
      "O desequilíbrio ocorre quando o número de instâncias não está igualmente distribuído entre as Zonas de Disponibilidade.",
      "Para Application Load Balancers, o balanceamento de carga entre Zonas de Disponibilidade (cross-zone load balancing) está desabilitado por padrão."
    ],
    "correct": [1, 3],
    "detailedExplanations": [
      "Incorreta. Após desabilitar uma Zona de Disponibilidade, os alvos nessa Zona continuam registrados, mas o balanceador de carga não encaminha tráfego para eles. Portanto, eles não recebem rajadas aleatórias de tráfego.",
      "Correta. Sessões persistentes fazem com que o balanceador direcione requisições subsequentes do mesmo cliente para a mesma instância, o que pode causar distribuição desigual do tráfego.",
      "Incorreta. O problema ocorre com conexões TCP de longa duração, que podem causar distribuição desigual do tráfego. Conexões de curta duração não são a causa do desequilíbrio.",
      "Correta. Se o número de instâncias não estiver distribuído uniformemente entre as Zonas de Disponibilidade, o balanceador pode encaminhar mais tráfego para as zonas com mais instâncias, causando desequilíbrio.",
      "Incorreta. Nos Application Load Balancers, o balanceamento entre Zonas de Disponibilidade está sempre habilitado por padrão, garantindo distribuição equilibrada do tráfego entre as zonas."
    ]
  },
  {
    "question": "Um desenvolvedor júnior que trabalha com instâncias EC2 registradas em um cluster do Amazon Elastic Container Service (Amazon ECS) finalizou uma instância EC2 conforme instruções do líder da equipe. No entanto, a instância EC2 continua aparecendo como um recurso registrado no cluster ECS.\n\nComo um Associate Developer, qual das seguintes soluções você recomendaria para corrigir esse comportamento?",
    "options": [
      "A instância EC2 foi finalizada enquanto ainda executava tarefas, e por isso o ECS mantém o registro até que as tarefas sejam finalizadas.",
      "O cluster ECS está configurado para manter o registro de instâncias EC2 finalizadas por um período de tempo para fins de auditoria.",
      "A instância EC2 foi finalizada sem ser desregistrada manualmente do cluster ECS, portanto ela continua aparecendo como um recurso registrado.",
      "A instância EC2 foi finalizada usando a AWS CLI, enquanto para instâncias ECS deveria ser usada a Amazon ECS CLI para evitar problemas de sincronização.",
      "Um software personalizado na instância EC2 pode ter falhado e causado que a instância ficasse presa em um estado não saudável até ser reiniciada."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Mesmo que a instância EC2 esteja executando tarefas, se ela for finalizada fora do ECS, o registro da instância não é removido automaticamente. A remoção depende do desregistro manual da instância EC2 no cluster.",
      "Incorreta. O ECS não mantém automaticamente o registro de instâncias EC2 finalizadas; a presença da instância no cluster indica que ela não foi desregistrada manualmente.",
      "Correta. Quando uma instância EC2 registrada em um cluster ECS é finalizada fora do controle do ECS (por exemplo, terminada manualmente), ela não é removida automaticamente do cluster. É necessário desregistrar manualmente a instância EC2 do cluster usando o console do Amazon ECS ou a AWS CLI para que ela deixe de aparecer como recurso registrado.",
      "Incorreta. A AWS CLI pode ser usada para gerenciar instâncias EC2 e ECS sem causar problemas de sincronização. O problema está na ausência do desregistro manual da instância EC2 no cluster ECS.",
      "Incorreta. A questão informa que a instância EC2 foi finalizada, portanto o problema não está relacionado a falha de software ou estado da instância, mas sim ao processo de remoção da instância do cluster ECS."
    ]
  },
  {
    "question": "Uma empresa de telecomunicações que fornece serviço de internet para usuários de dispositivos móveis mantém mais de 100 instâncias c4.large na região us-east-1. As instâncias EC2 executam algoritmos complexos. O gerente deseja monitorar a utilização da CPU das instâncias EC2 com uma frequência de até 10 segundos.\n\nQual das alternativas abaixo representa a MELHOR solução para esse caso de uso?",
    "options": [
      "Criar uma métrica personalizada de alta resolução e enviar os dados usando um script acionado a cada 10 segundos",
      "Habilitar o monitoramento detalhado do EC2",
      "Abrir um chamado de suporte com a AWS",
      "Simplesmente obter os dados das métricas do CloudWatch"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Métricas personalizadas de alta resolução permitem publicar dados no CloudWatch com resolução de até 1 segundo. Isso possibilita configurar alarmes que avaliam a cada 10 segundos, atendendo exatamente à necessidade de monitoramento frequente e detalhado da utilização da CPU.",
      "Incorreta. O monitoramento detalhado do EC2 reduz o intervalo de coleta para 1 minuto, o que ainda é insuficiente para a frequência desejada de 10 segundos. Além disso, essa opção gera custos adicionais.",
      "Incorreta. Abrir um chamado de suporte não resolve diretamente a necessidade técnica de monitoramento em alta frequência e serve apenas como uma distração nesta questão.",
      "Incorreta. As métricas padrão do CloudWatch para EC2 são coletadas em intervalos de 5 minutos (monitoramento básico) ou 1 minuto (monitoramento detalhado). Portanto, não é possível obter dados com frequência de 10 segundos diretamente dessas métricas."
    ]
  },
  {
    "question": "Um desenvolvedor está trabalhando em uma função AWS Lambda que lê dados de objetos do Amazon S3 e grava esses dados em uma tabela do Amazon DynamoDB. Embora a função seja acionada com sucesso a partir de uma notificação de evento do S3 após a criação do objeto, ela encontra uma falha ao tentar gravar os dados na tabela DynamoDB.\n\nQual é a provável causa da falha?",
    "options": [
      "A função Lambda não possui permissões IAM para gravar no DynamoDB",
      "A tabela DynamoDB não possui um Endpoint Gateway VPC, que é necessário para a função Lambda realizar a gravação com sucesso",
      "O limite de concorrência provisionada da função Lambda foi excedido",
      "O limite de concorrência reservada da função Lambda foi excedido"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A função Lambda precisa de uma política baseada em identidade que permita acesso de leitura e gravação a uma tabela específica do DynamoDB. Essa política deve ser anexada a uma role de serviço da Lambda, que define quais ações a função pode executar. Sem essas permissões, a função falhará ao tentar gravar dados no DynamoDB.",
      "Incorreta. Endpoints Gateway para DynamoDB e S3 fornecem conectividade confiável sem necessidade de gateway de internet ou dispositivo NAT dentro de uma VPC, mas a função Lambda, por padrão, não é executada dentro de uma VPC. Portanto, a ausência de um Endpoint Gateway VPC não impede a função Lambda de acessar o DynamoDB.",
      "Incorreta. A concorrência provisionada inicializa ambientes de execução para responder imediatamente às invocações, mas não está relacionada a falhas de permissão para gravar no DynamoDB. Além disso, exceder esse limite resultaria em erros de invocação, não em falhas específicas na gravação dos dados.",
      "Incorreta. O limite de concorrência reservada garante o número máximo de instâncias concorrentes para a função, mas não impede que a função escreva no DynamoDB. Esse limite não está relacionado ao problema de permissão ou falha na gravação dos dados."
    ]
  },
  {
    "question": "Um desenvolvedor deseja armazenar com segurança um token de acesso que permite que uma aplicação de processamento de transações, executada em instâncias Amazon EC2, autentique e envie uma mensagem via API de chat para a equipe de suporte da empresa quando uma transação inválida for detectada. Minimizar a sobrecarga de gerenciamento é essencial, e o token de acesso da API de chat deve ser criptografado tanto em repouso quanto em trânsito, além de ser acessível a partir de outras contas AWS.\n\nQual é a solução mais eficiente para atender a esse cenário?",
    "options": [
      "Utilizar o AWS Systems Manager Parameter Store com uma chave gerenciada pelo cliente do AWS KMS para armazenar o token de acesso como um parâmetro SecureString e configurar uma política baseada em recursos para o parâmetro permitir acesso de outras contas. Modificar a role IAM das instâncias EC2 para conceder permissões de acesso ao Parameter Store. Buscar o token no Parameter Store com a flag de descriptografia e usar o token descriptografado para enviar a mensagem via chat.",
      "Utilizar o AWS Secrets Manager com uma chave gerenciada pelo cliente do AWS KMS para armazenar o token de acesso como um segredo e configurar uma política baseada em recursos para o segredo permitir acesso de outras contas. Modificar a role IAM das instâncias EC2 para conceder permissões de acesso ao Secrets Manager. Buscar o token no Secrets Manager e usar o token descriptografado para enviar a mensagem via chat.",
      "Utilizar SSE-KMS para armazenar o token de acesso como um objeto criptografado no Amazon S3 e configurar uma política baseada em recursos para o bucket S3 permitir acesso de outras contas. Modificar a role IAM das instâncias EC2 para conceder permissões de acesso ao objeto S3. Buscar o token no S3 e usar o token descriptografado para enviar a mensagem via chat.",
      "Armazenar o token de acesso criptografado com AWS KMS em uma tabela DynamoDB e configurar uma política baseada em recursos para a tabela DynamoDB permitir acesso de outras contas. Modificar a role IAM das instâncias EC2 para conceder permissões de acesso à tabela DynamoDB. Buscar o token na tabela DynamoDB e usar o token descriptografado para enviar a mensagem via chat."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Parameter Store não suporta políticas baseadas em recursos para parâmetros individuais, o que impede o compartilhamento direto entre contas via políticas de recurso. Além disso, embora seja possível criptografar parâmetros SecureString com KMS, a ausência de políticas baseadas em recursos limita a flexibilidade para este caso de uso.",
      "Correta. O AWS Secrets Manager é projetado para armazenar e gerenciar segredos de forma segura, criptografando-os com chaves do KMS e permitindo políticas baseadas em recursos para compartilhamento entre contas. Ele minimiza a sobrecarga de gerenciamento, oferece rotação automática de segredos e integra-se facilmente com roles IAM para controle de acesso granular.",
      "Incorreta. Embora o S3 suporte criptografia SSE-KMS e políticas baseadas em recursos, armazenar tokens de acesso sensíveis como objetos em buckets S3 é considerado uma má prática de segurança, pois aumenta o risco de exposição e dificulta o gerenciamento seguro e a rotação dos segredos.",
      "Incorreta. O DynamoDB não suporta políticas baseadas em recursos, o que impede o controle de acesso direto por outras contas via política de recurso. Além disso, armazenar credenciais sensíveis em tabelas de banco de dados é uma prática insegura, pois aumenta o risco de exposição e dificulta a gestão segura das chaves de criptografia."
    ]
  },
  {
    "question": "Sua aplicação web lê e grava dados em uma tabela DynamoDB. A tabela está provisionada com 400 Unidades de Capacidade de Gravação (WCU) compartilhadas entre 4 partições. Uma das partições recebe 250 WCU/segundo, enquanto as outras recebem muito menos. Você recebe o erro 'ProvisionedThroughputExceededException'.\n\nQual é a causa mais provável desse erro?",
    "options": [
      "Você tem uma partição quente (hot partition).",
      "A política IAM configurada está incorreta.",
      "As Unidades de Capacidade de Gravação (WCU) são aplicadas a todas as suas tabelas DynamoDB e precisam ser reconfiguradas.",
      "O monitoramento do CloudWatch está atrasado."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Nem sempre é possível distribuir a atividade de leitura e gravação de forma uniforme entre as partições. Quando o acesso aos dados é desequilibrado, uma \"partição quente\" recebe um volume maior de tráfego de leitura e gravação em comparação às outras. O DynamoDB utiliza a capacidade adaptativa para permitir que sua aplicação continue lendo e gravando nessas partições quentes sem ser limitada, desde que o tráfego não ultrapasse a capacidade total provisionada da tabela ou o limite máximo da partição.",
      "Incorreta. O erro não está relacionado a permissões ou políticas IAM, mas sim ao fato de que a capacidade provisionada foi excedida. Portanto, não é um problema de autorização.",
      "Incorreta. As Unidades de Capacidade de Leitura (RCU) e Gravação (WCU) são configuradas de forma independente para cada tabela DynamoDB. Não existe compartilhamento de capacidade entre tabelas, portanto essa afirmação está incorreta.",
      "Incorreta. O erro 'ProvisionedThroughputExceededException' é específico do DynamoDB e não está relacionado a qualquer serviço conectado, como o CloudWatch. O CloudWatch é um serviço totalmente gerenciado e não causa limitações ou erros de throughput no DynamoDB."
    ]
  },
  {
    "question": "Uma empresa deseja automatizar e orquestrar um fluxo de dados de alto volume e múltiplas fontes em uma solução escalável de gerenciamento de dados utilizando serviços AWS. A solução deve garantir que as regras de negócio e transformações sejam executadas em sequência, permitir o reprocessamento dos dados em caso de erros e exigir manutenção mínima.\n\nQual serviço AWS a empresa deve utilizar para gerenciar e automatizar a orquestração desses fluxos de dados?",
    "options": [
      "AWS Batch",
      "AWS Glue",
      "Amazon Kinesis Data Streams",
      "AWS Step Functions"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. AWS Batch é um serviço para execução de jobs em lote que provisiona recursos computacionais otimizados para cargas batch. Embora seja eficiente para processamento em lote, não é ideal para orquestração de fluxos complexos de dados com regras de negócio sequenciais e reprocessamento automatizado.",
      "Incorreta. AWS Glue é um serviço serverless de integração e preparação de dados, focado em descoberta, transformação e movimentação de dados para análises e machine learning. Embora possa executar transformações, não é um serviço de orquestração de workflows complexos com controle de sequência e reprocessamento automatizado.",
      "Incorreta. Amazon Kinesis Data Streams é um serviço serverless para captura e processamento em tempo real de grandes volumes de dados em streaming. Ele é ideal para ingestão e processamento contínuo, mas não oferece orquestração de workflows ou controle sequencial de regras de negócio com tratamento de erros integrado.",
      "Correta. AWS Step Functions é um serviço de orquestração visual que permite criar workflows distribuídos, automatizar processos, orquestrar microsserviços e pipelines de dados e machine learning. Ele garante a execução sequencial das etapas, facilita o tratamento de erros com reprocessamento e reduz a necessidade de manutenção manual."
    ]
  },
  {
    "question": "Uma organização está migrando seus recursos on-premises para a nuvem. O código-fonte será movido para o AWS CodeCommit e o AWS CodeBuild será utilizado para compilar o código-fonte usando o Apache Maven como ferramenta de build. A organização deseja que o ambiente de build permita escalabilidade e a execução de builds em paralelo.\n\nQual das opções abaixo a organização deve escolher para atender a esse requisito?",
    "options": [
      "Executar o CodeBuild em um Auto Scaling Group",
      "Escolher um tipo de instância de alta performance para as instâncias do CodeBuild",
      "O CodeBuild escala automaticamente; a organização não precisa fazer nada para escalabilidade ou para executar builds em paralelo",
      "Habilitar o Auto Scaling do CodeBuild"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. O AWS CodeBuild é um serviço gerenciado que escala automaticamente conforme a demanda. Não é necessário executar o CodeBuild dentro de um Auto Scaling Group, pois ele já gerencia a escalabilidade internamente.",
      "Incorreta. Embora tipos de instância mais potentes possam melhorar o desempenho individual de um build, isso não é necessário para escalabilidade ou execução paralela, pois o CodeBuild gerencia isso automaticamente.",
      "Correta. O AWS CodeBuild é um serviço totalmente gerenciado que automaticamente escala para atender múltiplas solicitações de build simultâneas, eliminando a necessidade de provisionar ou gerenciar servidores de build.",
      "Incorreta. Essa opção é um distrator, pois o CodeBuild já realiza o escalonamento automático para atender picos de builds sem necessidade de configuração adicional de Auto Scaling."
    ]
  },
  {
    "question": "O AWS CloudFormation ajuda a modelar e provisionar todos os recursos de infraestrutura em nuvem necessários para o seu negócio.\n\nQuais dos seguintes serviços dependem do CloudFormation para provisionar recursos? (Selecione duas opções)",
    "options": [
      "AWS CodeBuild",
      "AWS Auto Scaling",
      "AWS Elastic Beanstalk",
      "AWS Serverless Application Model (AWS SAM)",
      "AWS Lambda"
    ],
    "correct": [2, 3],
    "detailedExplanations": [
      "Incorreta. O AWS CodeBuild é um serviço gerenciado de integração contínua que compila código-fonte, executa testes e gera pacotes prontos para implantação. Embora o CodeBuild possa ser utilizado em pipelines que usam CloudFormation, ele não depende diretamente do CloudFormation para provisionar seus recursos.",
      "Incorreta. O AWS Auto Scaling monitora suas aplicações e ajusta automaticamente a capacidade para manter desempenho estável e previsível ao menor custo possível. Embora o Auto Scaling possa usar CloudFormation para facilitar a configuração, ele não depende obrigatoriamente do CloudFormation para provisionar recursos.",
      "Correta. O AWS Elastic Beanstalk é um serviço fácil de usar para implantar e escalar aplicações web desenvolvidas em várias linguagens e frameworks. O Elastic Beanstalk utiliza o AWS CloudFormation para lançar os recursos do ambiente e propagar alterações de configuração, dependendo diretamente do CloudFormation para provisionamento.",
      "Correta. O AWS SAM utiliza a especificação SAM para definir aplicações serverless. Os templates do SAM são uma extensão dos templates do AWS CloudFormation, incluindo componentes adicionais que facilitam o desenvolvimento. Portanto, o AWS SAM depende do CloudFormation para provisionar recursos.",
      "Incorreta. O AWS Lambda permite executar código sem necessidade de provisionar ou gerenciar servidores, cobrando apenas pelo tempo de computação consumido. O Lambda não depende do CloudFormation para executar suas funções."
    ]
  },
  {
    "question": "Uma equipe está avaliando a viabilidade de usar AWS Step Functions para criar um fluxo de trabalho bancário para aprovações de empréstimos. A aplicação web também terá uma etapa de aprovação humana dentro do fluxo.\n\nComo um desenvolvedor associado, quais das seguintes características você identificaria como principais para o AWS Step Functions? (Selecione duas)",
    "options": [
      "Você deve usar fluxos Express para cargas de trabalho com alta taxa de eventos e curta duração.",
      "Os fluxos Express têm duração máxima de cinco minutos e os fluxos Standard têm duração máxima de 180 dias (6 meses).",
      "Os fluxos Standard do AWS Step Functions são adequados para fluxos de trabalho duradouros e auditáveis, mas que não suportam etapas de aprovação humana.",
      "Tanto os fluxos de trabalho Standard quanto os Express suportam todas as integrações de serviços, atividades e padrões de design.",
      "Os fluxos Standard do AWS Step Functions são adequados para fluxos de trabalho duradouros, auditáveis e de longa duração, que também podem incluir etapas de aprovação humana."
    ],
    "correct": [0, 4],
    "detailedExplanations": [
      "Correta. Os fluxos Express são indicados para cenários com alta taxa de eventos (mais de 100.000 por segundo) e curta duração, otimizando performance e custo para esses casos.",
      "Incorreta. Os fluxos Express têm duração máxima de cinco minutos, porém os fluxos Standard suportam até um ano de duração máxima.",
      "Incorreta. Os fluxos Standard suportam etapas de aprovação humana, portanto essa afirmação está incorreta.",
      "Incorreta. Os fluxos Standard suportam todas as integrações de serviços, atividades e padrões de design. Já os fluxos Express não suportam atividades, execução síncrona (.sync) nem padrões de callback.",
      "Correta. Os fluxos Standard são ideais para processos que exigem durabilidade, auditabilidade e longa execução, além de suportarem etapas de aprovação humana, como em processos bancários, faturamento e processamento de cartões de crédito."
    ]
  },
  {
    "question": "Sua equipe mantém um API Gateway público que é acessado por clientes de outro domínio. O uso tem sido consistente nos últimos meses, mas recentemente mais que dobrou. Como resultado, seus custos aumentaram e você gostaria de impedir que outros domínios não autorizados acessem sua API.\n\nQual das seguintes ações você deve tomar?",
    "options": [
      "Atribuir um Security Group ao seu API Gateway",
      "Restringir o acesso usando políticas de recurso (Resource Policies) no API Gateway",
      "Utilizar limitação de taxa (throttling) a nível de conta",
      "Configurar CORS (Cross-Origin Resource Sharing) para controlar as origens que podem acessar a API",
      "Utilizar Mapping Templates"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O API Gateway não utiliza Security Groups, que são aplicados a recursos de rede como EC2 e interfaces de rede. Para controle de acesso, o API Gateway usa políticas de recurso (resource policies) que podem restringir o acesso por IP ou identidade. Portanto, atribuir Security Groups não é possível nem eficaz para essa finalidade.",
      "Correta. Resource Policies permitem restringir o acesso à sua API por IP, VPC, ou identidade, controlando quais clientes podem acessar sua API. Essa é a forma adequada de impedir acessos não autorizados de outros domínios ou origens, diferentemente do CORS, que controla apenas o comportamento do navegador.",
      "Incorreta. A limitação de taxa a nível de conta no API Gateway controla o número máximo de requisições por segundo e o pico de requisições para evitar sobrecarga do serviço. No entanto, isso não restringe o acesso por domínio ou origem, apenas limita o volume de chamadas, não sendo adequado para impedir acessos não autorizados de outros domínios.",
      "Incorreta. CORS é um mecanismo que controla o compartilhamento de recursos entre origens no navegador, permitindo que aplicações web em determinados domínios acessem a API. No entanto, CORS não impede que clientes fora do navegador, como servidores backend ou ferramentas como curl, acessem a API. Portanto, não é uma medida de segurança para restringir acesso por domínio.",
      "Incorreta. Mapping Templates são usados para transformar e formatar dados de entrada e saída em APIs, utilizando a Velocity Template Language (VTL). Eles não oferecem controle de acesso ou restrição por domínio, portanto não ajudam a impedir acessos não autorizados."
    ]
  },
  {
    "question": "Sua aplicação é implantada automaticamente usando o AWS Elastic Beanstalk. Seus arquivos de configuração YAML estão armazenados na pasta .ebextensions e novos arquivos são adicionados ou atualizados com frequência. A equipe de DevOps não quer reimplantar a aplicação toda vez que houver alterações na configuração; em vez disso, prefere gerenciar a configuração externamente, de forma segura, e carregá-la dinamicamente na aplicação em tempo de execução.\n\nQual opção permite fazer isso?",
    "options": [
      "Usar o AWS Systems Manager Parameter Store",
      "Usar variáveis de estágio (Stage Variables)",
      "Usar variáveis de ambiente",
      "Usar o Amazon S3"
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O AWS Systems Manager Parameter Store oferece um armazenamento hierárquico e seguro para gerenciamento de dados de configuração e segredos. Ele permite armazenar dados como senhas, strings de conexão de banco de dados e códigos de licença como valores de parâmetros. Para este caso, em que a equipe de DevOps não deseja reimplantar a aplicação a cada alteração, o Parameter Store possibilita armazenar a configuração externamente e carregá-la dinamicamente em tempo de execução.",
      "Incorreta. Variáveis de estágio são usadas para gerenciar múltiplos estágios de lançamento em APIs do API Gateway, não sendo aplicáveis para gerenciamento dinâmico e seguro de configurações em aplicações Elastic Beanstalk.",
      "Incorreta. Variáveis de ambiente são uma forma comum de especificar opções de configuração e credenciais, úteis para scripts ou para definir perfis temporários. No entanto, elas não são criptografadas em repouso e ficam visíveis em texto claro no Console AWS e em algumas respostas da API do Elastic Beanstalk, o que não atende ao requisito de segurança para armazenar configurações sensíveis externamente.",
      "Incorreta. Embora o Amazon S3 também permita armazenar dados sem gerenciar servidores, ele requer configuração explícita de criptografia e políticas de segurança, aumentando o risco de erros de configuração. Além disso, seria necessário criar uma solução personalizada para carregar as configurações dinamicamente, tornando o uso do Parameter Store uma opção mais simples e segura para este caso."
    ]
  },
  {
    "question": "Uma aplicação roda em uma instância EC2 e processa pedidos diariamente à noite. Essa instância EC2 precisa acessar os pedidos que estão armazenados no S3.\n\nComo você recomendaria que a instância EC2 acessasse os pedidos de forma segura?",
    "options": [
      "Usar User Data da instância EC2.",
      "Usar uma role IAM.",
      "Criar um usuário IAM programático e armazenar a chave de acesso e a chave secreta no arquivo ~/.aws/credentials da instância EC2.",
      "Criar uma política de bucket S3 que autorize acesso público."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. User Data é utilizado para executar scripts de inicialização na primeira execução da instância, não para gerenciar permissões de acesso a recursos como o S3.",
      "Correta. As roles IAM permitem que a instância EC2 faça chamadas seguras à API da AWS sem a necessidade de armazenar credenciais diretamente. A role é associada à instância via um perfil de instância, garantindo acesso seguro e gerenciado ao S3.",
      "Incorreta. Embora funcione, armazenar credenciais diretamente na instância é inseguro, pois qualquer pessoa com acesso à instância poderia roubar essas credenciais e comprometer a conta AWS.",
      "Incorreta. Embora isso permita o acesso, expor o bucket S3 ao público compromete a segurança, permitindo que qualquer pessoa acesse os arquivos armazenados, o que não é adequado para dados sensíveis."
    ]
  },
  {
    "question": "Dois policies estão anexadas a um usuário IAM. A primeira policy declara que o usuário tem explicitamente negado todo acesso a instâncias EC2. A segunda policy declara que o usuário tem permissão para a ação EC2:Describe.\n\nQuando o usuário tenta executar a ação 'Describe' em uma instância EC2 usando a CLI, qual será o resultado?",
    "options": [
      "O usuário IAM está em um estado inválido devido a políticas conflitantes.",
      "O usuário terá acesso negado porque uma das policies contém uma negação explícita.",
      "A ordem das policies importa. Se a policy 1 estiver antes da 2, o usuário terá acesso negado. Se a policy 2 estiver antes da 1, o usuário terá acesso permitido.",
      "O usuário terá acesso porque possui uma permissão explícita de allow."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Um usuário IAM não fica em estado inválido por ter políticas conflitantes. O sistema de avaliação de políticas do IAM resolve conflitos aplicando a regra de que uma negação explícita sempre prevalece sobre permissões concedidas.",
      "Correta. No IAM, uma negação explícita em qualquer policy sempre substitui permissões de allow. Portanto, o usuário será negado o acesso à ação EC2:Describe.",
      "Incorreta. A ordem das policies não influencia na avaliação das permissões. No IAM, uma negação explícita sempre prevalece sobre qualquer permissão concedida, independentemente da ordem das policies.",
      "Incorreta. Embora o usuário tenha uma permissão explícita de allow para a ação EC2:Describe, uma negação explícita em outra policy sempre prevalece e, portanto, o acesso será negado."
    ]
  },
  {
    "question": "Como parte do processo de integração, os funcionários de uma empresa de TI precisam enviar suas fotos de perfil para um bucket privado do S3. A empresa deseja construir uma aplicação web interna hospedada em uma instância EC2 que deve exibir as fotos de perfil de forma segura quando os funcionários marcarem presença.\n\nComo um Desenvolvedor Associado, qual das seguintes soluções você sugeriria para atender a esse caso de uso?",
    "options": [
      "Salvar a chave do objeto S3 para a foto de perfil de cada usuário em uma tabela do DynamoDB e usar uma função Lambda para gerar dinamicamente uma URL pré-assinada. Referenciar essa URL para exibição via aplicação web.",
      "Armazenar a imagem de perfil de cada usuário codificada em base64 em uma tabela do DynamoDB e referenciá-la na aplicação para exibição.",
      "Tornar o bucket S3 público para que a aplicação possa referenciar a URL da imagem para exibição.",
      "Armazenar a imagem de perfil de cada usuário codificada em base64 em uma tabela do RDS e referenciá-la na aplicação para exibição."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Essa abordagem mantém as imagens armazenadas de forma segura no S3, que por padrão é privado. A chave do objeto é armazenada no DynamoDB para fácil consulta, e a função Lambda gera URLs pré-assinadas com tempo limitado de validade, garantindo acesso seguro e controlado às imagens para exibição na aplicação.",
      "Incorreta. Embora o DynamoDB seja um banco NoSQL escalável, armazenar dados binários grandes, como imagens codificadas em base64, não é recomendado. Isso pode gerar custos elevados e problemas de performance, além de não facilitar o controle de acesso seguro às imagens.",
      "Incorreta. Tornar o bucket público compromete a segurança e a privacidade dos dados, permitindo acesso irrestrito às fotos de perfil. Essa solução não atende aos requisitos de segurança do caso de uso e deve ser evitada.",
      "Incorreta. Armazenar imagens codificadas em base64 diretamente em um banco relacional como o RDS é uma má prática, pois pode causar aumento significativo no custo, lentidão no acesso e dificuldades na escalabilidade. Além disso, não oferece um mecanismo seguro e eficiente para exibir as imagens."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento implantou uma API REST no Amazon API Gateway em dois estágios diferentes — um estágio de teste e um estágio de produção. O estágio de teste é usado como uma versão para testes e o estágio de produção como uma versão estável. Após as atualizações serem aprovadas nos testes, a equipe deseja promover o estágio de teste para o estágio de produção.\n\nQual das alternativas a seguir representa a solução ideal para esse caso de uso?",
    "options": [
      "Implantar a versão testada da API no estágio de produção, criando uma nova implantação associada ao estágio de produção.",
      "Promover o estágio de teste para produção copiando manualmente as configurações do estágio de teste para o estágio de produção.",
      "Excluir o estágio de produção existente. Criar um novo estágio com o mesmo nome (prod) e implantar a versão testada nesse estágio.",
      "Implantar a API sem escolher um estágio. Dessa forma, a implantação ativa será atualizada em todos os estágios.",
      "Atualizar o valor da variável de estágio do nome do estágio de teste para o nome do estágio de produção."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. A promoção da versão testada para produção no Amazon API Gateway é feita implantando a nova versão da API no estágio de produção. Isso envolve criar uma nova implantação da API e associá-la ao estágio de produção existente, sem necessidade de excluir ou recriar o estágio. Essa abordagem garante controle de versões e evita downtime.",
      "Incorreta. Copiar manualmente as configurações não promove a versão da API e pode levar a inconsistências. A prática recomendada é criar uma nova implantação da API no estágio de produção com a versão testada.",
      "Incorreta. Embora seja possível excluir e recriar o estágio de produção, essa abordagem não é ideal, pois pode causar downtime no ambiente de produção. Além disso, essa prática não é recomendada para promover versões testadas, já que existem métodos mais eficientes e seguros para gerenciar implantações entre estágios.",
      "Incorreta. Uma API só pode ser implantada em um estágio específico. Não é possível implantar uma API sem escolher um estágio, pois cada implantação deve estar associada a um estágio para que a API seja acessível.",
      "Incorreta. Variáveis de estágio são parâmetros configuráveis usados para alterar o comportamento da API em diferentes estágios, mas o nome do estágio é fixo e não pode ser alterado para promover uma versão. A promoção correta envolve implantar a API no estágio de produção com a nova versão."
    ]
  },
  {
    "question": "Um estagiário em uma empresa de TI está começando a trabalhar com a AWS Cloud e quer entender a seguinte política de acesso a um bucket do Amazon S3:\n\n{\n \"Version\": \"2012-10-17\",\n \"Statement\": [\n {\n \"Sid\": \"ListAllS3Buckets\",\n \"Effect\": \"Allow\",\n \"Action\": [\"s3:ListAllMyBuckets\"],\n \"Resource\": \"arn:aws:s3:::*\"\n },\n {\n \"Sid\": \"AllowBucketLevelActions\",\n \"Effect\": \"Allow\",\n \"Action\": [\n \"s3:ListBucket\",\n \"s3:GetBucketLocation\"\n ],\n \"Resource\": \"arn:aws:s3:::*\"\n },\n {\n \"Sid\": \"AllowBucketObjectActions\",\n \"Effect\": \"Allow\",\n \"Action\": [\n \"s3:PutObject\",\n \"s3:PutObjectAcl\",\n \"s3:GetObject\",\n \"s3:GetObjectAcl\",\n \"s3:DeleteObject\"\n ],\n \"Resource\": \"arn:aws:s3:::*/*\"\n },\n {\n \"Sid\": \"RequireMFAForProductionBucket\",\n \"Effect\": \"Deny\",\n \"Action\": \"s3:*\",\n \"Resource\": [\n \"arn:aws:s3:::Production/*\",\n \"arn:aws:s3:::Production\"\n ],\n \"Condition\": {\n \"NumericGreaterThanIfExists\": {\"aws:MultiFactorAuthAge\": \"1800\"}\n }\n }\n ]\n}\n\nComo um Associate Developer, você pode ajudá-lo a identificar para que serve essa política?",
    "options": [
      "Permite que um usuário gerencie um único bucket do Amazon S3 e nega todas as outras ações e recursos da AWS se o usuário não estiver autenticado via MFA nos últimos trinta minutos.",
      "Permite acesso total ao S3, mas nega explicitamente o acesso ao bucket Production se o usuário não tiver efetuado login usando MFA nos últimos trinta minutos.",
      "Permite acesso total ao S3 para um usuário do Amazon Cognito, mas nega explicitamente o acesso ao bucket Production se o usuário Cognito não estiver autenticado.",
      "Permite que usuários IAM acessem seu próprio diretório home no Amazon S3, tanto programaticamente quanto pelo console."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A política permite ações em todos os buckets (não apenas um único bucket) e nega o acesso somente ao bucket 'Production' se a autenticação MFA não tiver ocorrido nos últimos 30 minutos. Não há negação para outras ações da AWS fora do S3.",
      "Correta. Esta política concede permissões amplas para acessar e manipular objetos em qualquer bucket S3, mas nega explicitamente qualquer ação no bucket 'Production' se a autenticação multifator (MFA) não tiver sido realizada nos últimos 30 minutos. Isso é implementado pela condição que verifica a idade do MFA e nega o acesso se ultrapassada.",
      "Incorreta. A política não faz referência específica a usuários do Amazon Cognito nem limita o acesso com base na autenticação do Cognito. Ela trata de permissões gerais para buckets S3 e uma negação condicional baseada em MFA, não relacionada diretamente a usuários Cognito.",
      "Incorreta. A política não restringe o acesso a diretórios home específicos de usuários IAM, nem implementa tal lógica. Ela concede permissões amplas para todos os buckets, com uma negação condicional para o bucket 'Production'."
    ]
  },
  {
    "question": "Para atender às diretrizes de conformidade, uma empresa precisa garantir a replicação de quaisquer dados armazenados em seus buckets S3.\n\nQuais das seguintes características estão corretas ao configurar um bucket S3 para replicação? (Selecione três)",
    "options": [
      "A replicação entre buckets exige o uso de criptografia com SSE-KMS em ambos os lados para funcionar corretamente.",
      "A Replicação na Mesma Região (Same-Region Replication - SRR) e a Replicação entre Regiões (Cross-Region Replication - CRR) podem ser configuradas no nível do bucket S3, em um prefixo compartilhado ou no nível do objeto usando tags de objeto do S3.",
      "Uma vez que a replicação é ativada em um bucket, todos os objetos antigos e novos serão replicados.",
      "Objetos replicados não mantêm os metadados originais.",
      "As tags dos objetos podem ser replicadas entre Regiões AWS usando Replicação entre Regiões (Cross-Region Replication), desde que as permissões adequadas estejam configuradas.",
      "As regras de ciclo de vida configuradas em um bucket S3 não são replicadas automaticamente para o bucket de destino e precisam ser configuradas manualmente em cada bucket."
    ],
    "correct": [1, 4, 5],
    "detailedExplanations": [
      "Incorreta. A replicação funciona com objetos criptografados, inclusive com SSE-KMS, mas não exige obrigatoriamente que ambos os buckets usem SSE-KMS. É necessário apenas que as permissões de acesso às chaves estejam corretamente configuradas se SSE-KMS for usado.",
      "Correta. A replicação SRR e CRR pode ser configurada em diferentes níveis: no bucket inteiro, em prefixos específicos ou em objetos individuais por meio de tags, permitindo flexibilidade na definição do escopo da replicação.",
      "Incorreta. A replicação só ocorre para objetos adicionados após a ativação da replicação. Objetos existentes no bucket antes da configuração da replicação não são replicados automaticamente.",
      "Incorreta. Os objetos replicados mantêm todos os metadados originais, como data de criação e IDs de versão, garantindo que a réplica seja idêntica ao objeto fonte.",
      "Correta. As tags dos objetos podem ser replicadas entre regiões usando CRR, mas é necessário garantir que as permissões estejam configuradas corretamente para que a replicação das tags ocorra.",
      "Correta. As regras de ciclo de vida são definidas no nível do bucket e não são replicadas automaticamente junto com os objetos. Para manter políticas consistentes, é necessário configurar as regras manualmente em ambos os buckets."
    ]
  },
  {
    "question": "Você possui uma aplicação web em três camadas composta por uma camada web usando AngularJS, uma camada de aplicação utilizando o AWS API Gateway e uma camada de dados em um banco de dados Amazon Relational Database Service (RDS). Sua aplicação permite que visitantes consultem filmes populares do passado. A empresa deseja reduzir o número de chamadas feitas ao endpoint e melhorar a latência da API.\n\nO que você pode fazer para melhorar o desempenho?",
    "options": [
      "Usar Templates de Mapeamento (Mapping Templates)",
      "Usar Variáveis de Stage (Stage Variables)",
      "Usar Amazon Kinesis Data Streams para transmitir os dados recebidos e reduzir a carga sobre o API Gateway",
      "Habilitar o Cache do API Gateway"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Templates de mapeamento são scripts escritos em Velocity Template Language (VTL) aplicados ao payload usando expressões JSONPath para formatar e estruturar os dados de forma legível. Eles ajudam no processamento e transformação dos dados, mas não melhoram a latência nem reduzem o número de chamadas à API.",
      "Incorreta. Variáveis de stage funcionam como variáveis de ambiente e permitem alterar o comportamento dos métodos do API Gateway para cada estágio de implantação, por exemplo, direcionando para backends diferentes conforme o estágio. No entanto, elas não contribuem para a redução da latência ou diminuição do número de chamadas à API.",
      "Incorreta. O Amazon Kinesis Data Streams é um serviço escalável para captura e processamento de dados em tempo real, adequado para ingestão massiva de dados e análise contínua. No entanto, ele não é indicado para reduzir chamadas ou latência em APIs RESTful do API Gateway, pois não atua como cache nem proxy para chamadas de API.",
      "Correta. É possível habilitar o cache no Amazon API Gateway para armazenar as respostas dos endpoints por um período configurável (TTL). Isso reduz o número de chamadas feitas ao backend e melhora significativamente a latência das requisições, pois o API Gateway responde diretamente a partir do cache em vez de encaminhar a requisição ao endpoint. O TTL padrão é 300 segundos, podendo ser configurado até 3600 segundos."
    ]
  },
  {
    "question": "Uma empresa de TI possui sua stack serverless integrada ao AWS X-Ray. O desenvolvedor da empresa percebeu um volume elevado de dados sendo enviados para o X-Ray, o que fez com que os custos mensais na AWS disparassem. O desenvolvedor solicitou mudanças para mitigar esse problema.\n\nComo um Associate Developer, qual das seguintes soluções você recomendaria para obter tendências de rastreamento enquanto reduz custos com o mínimo de impacto?",
    "options": [
      "Usar expressões de filtro no console do X-Ray",
      "Implementar uma regra de amostragem de rede",
      "Habilitar o amostragem (sampling) do X-Ray",
      "Configuração personalizada para os agentes do X-Ray"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. As expressões de filtro no console do X-Ray ajudam a refinar a visualização dos dados já coletados, mas não reduzem o volume de dados enviados ou armazenados. Portanto, essa alternativa não contribui para a redução dos custos relacionados ao uso do X-Ray.",
      "Incorreta. Não existe uma funcionalidade oficial chamada \"regra de amostragem de rede\" no AWS X-Ray. Essa alternativa foi incluída como um distrator e não representa uma solução válida para controlar o volume de dados enviados ao X-Ray.",
      "Correta. O AWS X-Ray utiliza um algoritmo de amostragem para determinar quais requisições serão rastreadas, garantindo eficiência e uma amostra representativa das requisições. Por padrão, o SDK do X-Ray registra a primeira requisição a cada segundo e 5% das requisições adicionais. A amostragem pode ser habilitada diretamente pelo console AWS sem necessidade de alterar o código da aplicação, reduzindo significativamente o volume de dados enviados e, consequentemente, os custos.",
      "Incorreta. O AWS X-Ray não permite configurações personalizadas nos agentes para controlar diretamente o volume de dados. O controle do volume é feito por meio das regras de amostragem, que podem ser configuradas, mas não por customizações nos agentes propriamente ditos."
    ]
  },
  {
    "question": "Uma equipe de desenvolvimento criou um novo usuário IAM que possui permissão s3:PutObject para gravar em um bucket S3. Esse bucket S3 utiliza criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS) como criptografia padrão. Usando o ID da chave de acesso e a chave secreta do usuário IAM, a aplicação recebeu um erro de acesso negado ao chamar a API PutObject.\n\nComo um Associate Developer, como você resolveria esse problema?",
    "options": [
      "Corrigir a política do bucket S3 para permitir que o usuário IAM faça upload de objetos criptografados",
      "Corrigir a política do usuário IAM para permitir a ação kms:GenerateDataKey",
      "Corrigir a ACL do bucket S3 para permitir que o usuário IAM faça upload de objetos criptografados",
      "Corrigir a política do usuário IAM para permitir a ação s3:Encrypt"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora políticas de bucket possam controlar o acesso ao bucket, o usuário já possui permissão s3:PutObject. O problema está na falta da permissão para gerar a chave de dados KMS necessária para a criptografia, que deve ser concedida na política do usuário ou função IAM, não na política do bucket.",
      "Correta. Para buckets com criptografia padrão SSE-KMS, o usuário precisa da permissão kms:GenerateDataKey para que o AWS KMS possa gerar a chave de dados usada para criptografar o objeto. Sem essa permissão, a chamada PutObject falhará com erro de acesso negado.",
      "Incorreta. As listas de controle de acesso (ACLs) do Amazon S3 gerenciam permissões básicas para buckets e objetos, mas não concedem permissões para operações relacionadas ao AWS KMS. O problema está relacionado à falta de permissões para usar a chave KMS, que não é resolvido por ACLs.",
      "Incorreta. A ação s3:Encrypt não existe no conjunto de permissões do S3 e é um item inválido. A permissão correta envolve ações do KMS, como kms:GenerateDataKey."
    ]
  },
  {
    "question": "Um aplicativo móvel na área da saúde utiliza algoritmos proprietários de Machine Learning para fornecer diagnóstico precoce com base em métricas de saúde dos pacientes. Para proteger esses dados sensíveis, a equipe de desenvolvimento deseja migrar para um sistema escalável de gerenciamento de usuários com funcionalidades de login e cadastro que também suporte Autenticação Multifator (MFA).\n\nQuais das opções abaixo podem ser usadas para implementar uma solução com o MENOR esforço de desenvolvimento? (Selecione duas)",
    "options": [
      "Utilizar funções Lambda e Amazon RDS para criar uma solução personalizada de gerenciamento de usuários",
      "Utilizar o Amazon Cognito para gerenciamento de usuários e facilitação dos processos de login e cadastro",
      "Utilizar o Amazon Cognito para habilitar a Autenticação Multifator (MFA) quando os usuários efetuam login",
      "Utilizar funções Lambda e DynamoDB para criar uma solução personalizada de gerenciamento de usuários",
      "Utilizar o Amazon SNS para enviar o código de Autenticação Multifator (MFA) via SMS para os usuários do aplicativo móvel"
    ],
    "correct": [1, 2],
    "detailedExplanations": [
      "Incorreta. Embora seja tecnicamente possível, criar uma solução personalizada usando Lambda e RDS exige um esforço de desenvolvimento significativo para implementar funcionalidades de login, cadastro e MFA, o que contraria o requisito de menor esforço de desenvolvimento.",
      "Correta. O Amazon Cognito é um serviço gerenciado que simplifica a implementação de funcionalidades de cadastro, login e gerenciamento de usuários, além de escalar automaticamente para milhões de usuários, reduzindo significativamente o esforço de desenvolvimento.",
      "Correta. O Amazon Cognito oferece suporte nativo para MFA, permitindo que a autenticação multifator seja facilmente habilitada para aumentar a segurança dos usuários durante o login, com mínimo esforço de desenvolvimento.",
      "Incorreta. Assim como a opção com RDS, essa abordagem demanda um desenvolvimento complexo e maior esforço para implementar funcionalidades essenciais de gerenciamento de usuários e MFA, não atendendo ao requisito de menor esforço.",
      "Incorreta. O Amazon SNS não é adequado para enviar códigos MFA via SMS para usuários finais de aplicativos móveis, pois essa funcionalidade é destinada apenas a usuários IAM. Além disso, a AWS está descontinuando o suporte para MFA via SMS, tornando essa abordagem inadequada para soluções modernas que exigem segurança robusta."
    ]
  },
  {
    "question": "Como Desenvolvedor Sênior, você gerencia 10 instâncias Amazon EC2 que realizam muitas requisições de leitura para um banco de dados Amazon RDS para PostgreSQL. Você precisa tornar essa arquitetura resiliente para recuperação de desastres.\n\nQuais das seguintes funcionalidades ajudarão a preparar essa arquitetura para recuperação de desastres no banco de dados? (Selecione duas)",
    "options": [
      "Usar Read Replicas entre Regiões (cross-Region Read Replicas)",
      "Usar o recurso de clonagem de banco de dados do cluster RDS",
      "Usar armazenamento RDS Provisioned IOPS (SSD) em vez de armazenamento General Purpose (SSD)",
      "Habilitar o recurso de backup automatizado do Amazon RDS em uma implantação Multi-AZ que cria backups em múltiplas Regiões",
      "Habilitar o recurso de backup automatizado do Amazon RDS em uma implantação Multi-AZ que cria backups em uma única Região AWS"
    ],
    "correct": [0, 4],
    "detailedExplanations": [
      "Correta. As Read Replicas podem ser criadas em regiões diferentes da instância principal, permitindo a replicação assíncrona dos dados. Em caso de falha na região principal, a Read Replica pode ser promovida a instância principal, garantindo continuidade do serviço e recuperação rápida em um cenário de desastre regional.",
      "Incorreta. O recurso de clonagem de banco de dados está disponível apenas para Amazon Aurora e não para instâncias padrão do Amazon RDS. Portanto, não é aplicável para a arquitetura descrita.",
      "Incorreta. O armazenamento Provisioned IOPS é projetado para fornecer desempenho consistente e previsível de I/O, melhorando a performance do banco de dados, mas não oferece recursos específicos para recuperação de desastres.",
      "Incorreta. Backups automatizados do Amazon RDS são limitados a uma única região. Para backups em múltiplas regiões, é necessário usar snapshots manuais ou Read Replicas cross-region. Portanto, essa afirmação é incorreta.",
      "Correta. O recurso de backup automatizado do Amazon RDS permite a recuperação pontual do banco de dados e, quando configurado em uma implantação Multi-AZ, os backups são realizados na instância standby para minimizar o impacto de I/O na instância primária. Embora os backups automatizados sejam limitados a uma única região, eles garantem alta disponibilidade e proteção contra falhas locais."
    ]
  },
  {
    "question": "Sua empresa utiliza um Application Load Balancer para rotear o tráfego de usuários finais para aplicações hospedadas em instâncias Amazon EC2. As aplicações capturam informações das requisições recebidas e armazenam esses dados no Amazon Relational Database Service (RDS) utilizando mecanismos Microsoft SQL Server.\n\nComo parte de novas regras de conformidade, é necessário capturar o endereço IP do cliente. Como você deve proceder para obter essa informação?",
    "options": [
      "Você pode obter os endereços IP dos clientes a partir dos logs do Elastic Load Balancing.",
      "Você pode obter os endereços IP dos clientes a partir dos logs de acesso do servidor.",
      "Utilize o cabeçalho X-Forwarded-From.",
      "Utilize o cabeçalho X-Forwarded-For."
    ],
    "correct": [0, 3],
    "detailedExplanations": [
      "Parcialmente correta. Os logs do Elastic Load Balancing registram o endereço IP do cliente original e podem ser usados para auditoria e análise posterior, mas não fornecem essa informação em tempo real para a aplicação.",
      "Incorreta. Como os Load Balancers interceptam o tráfego entre os clientes e os servidores, os logs de acesso do servidor conterão apenas o endereço IP do Load Balancer, não do cliente original.",
      "Incorreta. O cabeçalho X-Forwarded-From não existe e é uma opção fictícia criada para confundir. O cabeçalho correto para identificar o IP do cliente é o X-Forwarded-For.",
      "Correta. O cabeçalho X-Forwarded-For é utilizado para identificar o endereço IP do cliente original quando se utiliza um Load Balancer HTTP ou HTTPS. Como o Load Balancer atua como intermediário, os logs do servidor só mostram o IP do Load Balancer. O Elastic Load Balancing insere o IP do cliente neste cabeçalho e o repassa para o servidor, permitindo capturar o IP real do cliente."
    ]
  },
  {
    "question": "Sua empresa hospeda um site estático no Amazon Simple Storage Service (S3) escrito em HTML5. O site é direcionado a entusiastas da aviação e cresceu para uma audiência mundial, com centenas de milhares de visitantes acessando mensalmente. Enquanto os usuários nos Estados Unidos têm uma ótima experiência, usuários de outras partes do mundo estão enfrentando respostas lentas e atrasos.\n\nQual serviço pode mitigar esse problema?",
    "options": [
      "Use o cache do Amazon S3",
      "Use o Amazon ElastiCache for Redis",
      "Use o Amazon CloudFront",
      "Use o Amazon S3 Transfer Acceleration"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. \"Cache do Amazon S3\" não é um serviço ou recurso existente na AWS. Essa alternativa é um distractor e não oferece solução para melhorar a latência de acesso ao conteúdo estático em diferentes regiões geográficas.",
      "Incorreta. O Amazon ElastiCache for Redis é uma solução de cache na memória para acelerar aplicações que dependem de dados dinâmicos e consultas frequentes a bancos de dados. No caso de um site estático hospedado no S3, não há necessidade de uma camada de cache para dados dinâmicos, tornando essa opção inadequada para o cenário apresentado.",
      "Correta. O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que distribui conteúdo estático e dinâmico globalmente a partir de localizações de borda (Edge Locations), reduzindo a latência e melhorando a experiência do usuário em diferentes regiões do mundo. Ao armazenar em cache o conteúdo do S3 nas Edge Locations, o CloudFront diminui a carga no bucket S3 e acelera a entrega do site para usuários globais.",
      "Incorreta. O Amazon S3 Transfer Acceleration acelera transferências de arquivos entre clientes e buckets S3 usando a infraestrutura do CloudFront, mas é focado em uploads e downloads de objetos, não na entrega de conteúdo para visitantes de um site estático. Além disso, ele não melhora diretamente a experiência de navegação dos usuários finais em diferentes regiões."
    ]
  },
  {
    "question": "Uma empresa do setor financeiro deseja garantir que os dados dos clientes estejam sempre criptografados no Amazon S3, mas quer uma solução gerenciada pela AWS que permita controle total para criar, rotacionar e remover as chaves de criptografia.\n\nComo um Desenvolvedor Associado, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
    "options": [
      "Criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3)",
      "Criptografia do lado do servidor com chaves mestras do cliente (CMKs) armazenadas no AWS Key Management Service (SSE-KMS)",
      "Criptografia do lado do servidor com AWS Secrets Manager",
      "Criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C)"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora o SSE-S3 criptografe cada objeto com uma chave única e utilize uma chave mestra que é rotacionada automaticamente pela AWS, ele não oferece controle direto para criar, rotacionar ou remover as chaves de criptografia, o que não atende ao requisito do cliente.",
      "Correta. Essa opção permite que você utilize chaves mestras do cliente gerenciadas no AWS KMS, oferecendo controle total para criar, rotacionar e desabilitar as chaves. Além disso, o AWS KMS fornece auditoria e políticas de acesso detalhadas, garantindo segurança e conformidade para os dados criptografados no S3.",
      "Incorreta. O AWS Secrets Manager é um serviço para gerenciar segredos como credenciais e chaves de API, permitindo rotação e gerenciamento de segredos, mas não é utilizado para criptografia direta de objetos no Amazon S3 nem para gerenciamento de chaves de criptografia para SSE.",
      "Incorreta. O SSE-C exige que o cliente crie, gerencie e forneça as chaves de criptografia para cada solicitação, incluindo a rotação e remoção das chaves. Isso não é uma solução gerenciada pela AWS e adiciona complexidade operacional, portanto não atende ao requisito de uma solução gerenciada com controle total."
    ]
  },
  {
    "question": "Você possui um processo de workflow que obtém código do AWS CodeCommit e faz deploy em instâncias EC2 associadas à tag de grupo ProdBuilders. Você deseja configurar as instâncias para armazenar no máximo duas revisões da aplicação para conservar espaço em disco.\n\nQual das alternativas a seguir permitirá implementar essa configuração?",
    "options": [
      "Colocar um load balancer na frente das suas instâncias",
      "Integrar com AWS CodePipeline",
      "Agente do AWS CloudWatch Logs",
      "Agente do CodeDeploy"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. Um load balancer distribui o tráfego de entrada entre várias instâncias EC2 para melhorar a disponibilidade e escalabilidade. Ele não possui funcionalidade para gerenciar versões de aplicações ou controlar o armazenamento local de revisões nas instâncias.",
      "Incorreta. O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua que automatiza pipelines de release para atualizações rápidas e confiáveis de aplicações e infraestrutura. Embora o CodeCommit e o CodePipeline sejam serviços integrados, o CodePipeline não gerencia o controle de versões nem o armazenamento de revisões diretamente nas instâncias EC2.",
      "Incorreta. O agente do CloudWatch Logs automatiza o envio de dados de log das instâncias EC2 para o CloudWatch Logs. Ele não gerencia revisões de aplicações nem controla o armazenamento local de versões em disco, portanto não atende ao requisito de limitar revisões armazenadas nas instâncias.",
      "Correta. O agente do CodeDeploy é um pacote de software instalado e configurado nas instâncias que permite que elas sejam usadas em implantações do CodeDeploy. Esse agente arquiva revisões e arquivos de log nas instâncias e realiza a limpeza desses artefatos para conservar espaço em disco. É possível configurar a opção :max_revisions: no arquivo de configuração do agente para limitar o número de revisões da aplicação armazenadas, mantendo apenas as mais recentes."
    ]
  },
  {
    "question": "Uma grande empresa armazena seus dados estáticos em buckets do Amazon S3. Cada linha de serviço da empresa possui sua própria conta AWS. Para um caso de uso de negócios, o departamento Financeiro precisa conceder acesso aos dados do bucket S3 deles para o departamento de Recursos Humanos.\n\nQual das opções abaixo NÃO é viável para acesso cross-account a objetos de buckets S3?",
    "options": [
      "Usar Access Control List (ACL) e políticas IAM para acesso programático exclusivo a objetos de buckets S3",
      "Usar políticas baseadas em recursos e políticas do AWS Identity and Access Management (IAM) para acesso programático exclusivo a objetos de buckets S3",
      "Usar roles IAM cross-account para acesso programático e via console a objetos de buckets S3",
      "Usar roles IAM e políticas baseadas em recursos para delegar acesso entre contas em diferentes partitions via acesso programático exclusivo"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Correta. As ACLs do S3 podem ser usadas para gerenciar permissões em cenários específicos, especialmente quando as políticas IAM e de bucket não atendem completamente às necessidades. As ACLs permitem definir permissões como READ, WRITE, READ_ACP, WRITE_ACP e FULL_CONTROL para contas AWS ou grupos pré-definidos do S3.",
      "Correta. Utilizar políticas baseadas em recursos (como bucket policies) combinadas com políticas IAM é uma prática recomendada para controlar o acesso programático entre contas. As políticas baseadas em recursos permitem definir quem pode acessar quais objetos e de que forma, proporcionando controle granular e auditável.",
      "Correta. Roles IAM cross-account são amplamente utilizadas para centralizar a gestão de permissões e permitir acesso tanto programático quanto via console entre contas AWS. Essa abordagem simplifica o gerenciamento de acesso a múltiplos buckets e elimina a necessidade de modificar ACLs dos objetos.",
      "Incorreta. Essa afirmação é falsa e, portanto, a resposta correta para a pergunta. Roles IAM e políticas baseadas em recursos só permitem delegar acesso entre contas dentro da mesma partition da AWS. Por exemplo, uma conta na região US West (N. California) na partition padrão 'aws' não pode conceder acesso a usuários de uma conta na China (Beijing) que está na partition 'aws-cn' usando políticas baseadas em recursos do S3."
    ]
  },
  {
    "question": "Você está criando um aplicativo móvel que precisa acessar o AWS API Gateway. Os usuários devem se registrar primeiro antes de poderem acessar sua API, e você deseja que o gerenciamento de usuários seja totalmente gerenciado.\n\nQual opção de autenticação você deve usar para a camada do API Gateway?",
    "options": [
      "Usar Lambda Authorizer",
      "Usar Cognito User Pools",
      "Usar User Pools do API Gateway",
      "Usar permissões IAM com assinatura sigv4"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. O Lambda Authorizer permite implementar esquemas personalizados de autorização usando funções Lambda, como autenticação via tokens bearer (OAuth, SAML) ou parâmetros de requisição. No entanto, ele não oferece um gerenciamento de usuários totalmente gerenciado, exigindo que você implemente e mantenha a lógica de autenticação.",
      "Correta. O Amazon Cognito User Pools oferece um serviço totalmente gerenciado para registro, autenticação e gerenciamento de usuários. Integrando o Cognito User Pools ao API Gateway, você pode controlar o acesso à API de forma simples e segura. O cliente deve autenticar-se no User Pool para obter um token válido, que será enviado no cabeçalho Authorization das requisições para acessar a API.",
      "Incorreta. \"User Pools do API Gateway\" não é uma funcionalidade real da AWS. Essa opção foi criada incorretamente e não existe como um recurso gerenciado para autenticação no API Gateway.",
      "Incorreta. A assinatura Signature Version 4 (sigv4) é um método para adicionar informações de autenticação às requisições HTTP para serviços AWS. Embora seja segura, não é prática para gerenciamento de usuários em aplicativos móveis, pois exigiria criar um usuário IAM para cada visitante, o que não é escalável nem gerenciado automaticamente."
    ]
  },
  {
    "question": "Uma empresa de TI migrou para uma arquitetura serverless na nuvem AWS, onde a camada de computação é implementada por funções Lambda. Os gerentes de engenharia gostariam de monitorar ativamente e solucionar quaisquer falhas nas funções Lambda.\n\nComo um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para esse caso de uso?",
    "options": [
      "Os desenvolvedores devem inserir instruções de logging no código das funções Lambda, que estarão disponíveis via logs do CloudWatch.",
      "Usar o CloudWatch Events para identificar e notificar quaisquer falhas no código das funções Lambda.",
      "Utilizar o CodeCommit para identificar e notificar quaisquer falhas no código das funções Lambda.",
      "Utilizar o CodeDeploy para identificar e notificar quaisquer falhas no código das funções Lambda."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. Inserir instruções de logging no código Lambda permite que os desenvolvedores capturem informações detalhadas sobre a execução e falhas da função. O AWS Lambda integra-se automaticamente ao CloudWatch Logs, enviando todos os logs para um grupo de logs específico, facilitando a análise e o monitoramento das falhas e do comportamento da função.",
      "Incorreta. O Amazon CloudWatch Events (agora chamado EventBridge) é usado para responder a eventos do sistema e disparar ações, como invocar funções Lambda, mas não é capaz de detectar ou notificar diretamente falhas internas no código das funções Lambda.",
      "Incorreta. O AWS CodeCommit é um serviço de controle de versão baseado em Git para hospedar repositórios de código, e não possui funcionalidades para monitorar ou notificar falhas em tempo de execução das funções Lambda.",
      "Incorreta. O AWS CodeDeploy é um serviço de implantação automatizada que facilita o lançamento de atualizações em várias plataformas, incluindo Lambda, mas não é projetado para identificar ou notificar falhas no código das funções Lambda durante a execução."
    ]
  },
  {
    "question": "Recentemente, você iniciou uma plataforma de aprendizado online utilizando AWS Lambda e API Gateway. A primeira versão foi um sucesso, e você começou a desenvolver novos recursos para a segunda versão. Você gostaria de introduzir gradualmente a segunda versão, direcionando apenas 10% do tráfego de entrada para a nova versão da função Lambda.\n\nQual solução você deve escolher?",
    "options": [
      "Implantar sua função Lambda em uma VPC",
      "Usar tags para distinguir as diferentes versões",
      "Usar aliases do AWS Lambda",
      "Usar variáveis de ambiente"
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. Implantar uma função Lambda em uma VPC adiciona uma camada de segurança e controle de rede, mas não permite gerenciar o roteamento ou a divisão percentual do tráfego entre versões diferentes da função Lambda.",
      "Incorreta. Embora seja possível usar tags para organizar funções Lambda por proprietário, projeto ou departamento, as tags são pares chave-valor livres usados para filtragem e relatórios de custo, e não para controle de roteamento de tráfego entre versões da função Lambda.",
      "Correta. Um alias do Lambda funciona como um ponteiro para uma versão específica da função. Você pode criar aliases que apontam para diferentes versões e configurar o roteamento de tráfego para distribuir uma porcentagem do tráfego entre versões, permitindo uma implantação gradual, como direcionar 10% do tráfego para a nova versão.",
      "Incorreta. Variáveis de ambiente são usadas para armazenar configurações e segredos que podem alterar o comportamento da função sem modificar o código, mas não oferecem controle de roteamento ou distribuição percentual de tráfego entre versões da função Lambda."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa de mídia social está considerando usar o Amazon ElastiCache para aumentar o desempenho dos seus bancos de dados existentes.\n\nComo um Associate Developer, quais dos seguintes casos de uso você recomendaria como o MELHOR ajuste para o ElastiCache? (Selecione dois)",
    "options": [
      "Usar o ElastiCache para melhorar a latência e o throughput em cargas de trabalho de aplicações com alta escrita",
      "Usar o ElastiCache para melhorar o desempenho de cargas de trabalho Extract-Transform-Load (ETL)",
      "Usar o ElastiCache para melhorar o desempenho de cargas de trabalho intensivas em computação",
      "Usar o ElastiCache para executar consultas JOIN altamente complexas",
      "Usar o ElastiCache para melhorar a latência e o throughput em cargas de trabalho de aplicações com alta leitura"
    ],
    "correct": [2, 4],
    "detailedExplanations": [
      "Incorreta. Aplicações com alta taxa de escrita não se beneficiam do cache, pois os dados no cache ficam obsoletos rapidamente, tornando o ElastiCache uma solução inadequada para esse cenário.",
      "Incorreta. Cargas de trabalho ETL envolvem leitura e transformação de grandes volumes de dados, o que não é adequado para cache. Para ETL, recomenda-se usar serviços como AWS Glue ou Amazon EMR, que são otimizados para esse tipo de processamento.",
      "Correta. O ElastiCache pode acelerar cargas de trabalho que exigem alto poder computacional, como motores de recomendação, armazenando em cache os dados frequentemente acessados e reduzindo a latência e o uso do banco de dados primário.",
      "Incorreta. Consultas JOIN complexas são melhor executadas em bancos de dados relacionais como Amazon RDS ou Aurora. O ElastiCache não é adequado para esse tipo de operação, pois é um armazenamento em memória focado em cache e não em processamento relacional complexo.",
      "Correta. O ElastiCache é ideal para melhorar a latência e a taxa de transferência em aplicações com alta demanda de leitura, como redes sociais, jogos, compartilhamento de mídia e portais de perguntas e respostas, armazenando dados frequentemente acessados em cache."
    ]
  },
  {
    "question": "Como parte da atualização das habilidades dos funcionários, os desenvolvedores da sua equipe receberam algumas responsabilidades típicas de engenheiros DevOps. Agora, os desenvolvedores têm controle total sobre o modelo de todo o processo de entrega de software, desde a codificação até a implantação. Como líder da equipe, você é responsável por quaisquer aprovações manuais necessárias durante o processo.\n\nQual das abordagens a seguir suporta esse fluxo de trabalho?",
    "options": [
      "Usar CodePipeline com Amazon Virtual Private Cloud (VPC).",
      "Criar múltiplos CodePipelines para cada ambiente e vinculá-los usando AWS Lambda.",
      "Criar pipelines AWS CodePipeline profundamente integrados para cada ambiente.",
      "Criar um único AWS CodePipeline para todo o fluxo e adicionar uma etapa de aprovação manual."
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O CodePipeline suporta endpoints VPC via AWS PrivateLink para manter o tráfego dentro da rede privada, o que é uma excelente medida de segurança, mas não atende à necessidade específica de controle e aprovação manual no fluxo de entrega de software.",
      "Incorreta. Embora seja possível criar funções Lambda e adicioná-las como ações nos pipelines, a etapa de aprovação manual deve estar contida no próprio fluxo do pipeline e não pode ser delegada a outro serviço AWS, como Lambda, para controle de aprovação.",
      "Incorreta. Embora seja possível usar templates AWS CloudFormation junto com CodePipeline e CodeCommit para criar ambientes de teste que implantam em produção após aprovação, essa abordagem não é a mais otimizada para o fluxo descrito, pois fragmenta o processo e dificulta o controle centralizado das aprovações manuais.",
      "Correta. É possível adicionar uma ação de aprovação manual em uma etapa do pipeline para que o processo pare e aguarde que alguém aprove ou rejeite manualmente a ação. As ações de aprovação não podem ser adicionadas em estágios de origem, que aceitam apenas ações de origem."
    ]
  },
  {
    "question": "Sua empresa possui um contrato de três anos com um provedor de serviços de saúde. O contrato exige que os backups mensais do banco de dados sejam mantidos durante toda a vigência do contrato para fins de conformidade. Atualmente, o limite de retenção dos backups automatizados no Amazon Relational Database Service (RDS) não atende aos seus requisitos.\n\nQual das seguintes soluções pode ajudá-lo a cumprir esses requisitos?",
    "options": [
      "Habilitar réplicas de leitura (Read Replicas) no RDS.",
      "Habilitar o RDS Multi-AZ para maior disponibilidade do banco de dados.",
      "Criar um evento cron no CloudWatch que dispare uma função AWS Lambda responsável por gerar snapshots do banco de dados.",
      "Habilitar os backups automáticos do RDS."
    ],
    "correct": 2,
    "detailedExplanations": [
      "Incorreta. As réplicas de leitura são usadas para distribuir cargas de leitura e melhorar a escalabilidade do banco de dados. Elas replicam os dados de forma assíncrona, mas não são projetadas para retenção de backups ou para atender requisitos de conformidade relacionados a backups de longo prazo.",
      "Incorreta. O recurso Multi-AZ do RDS é projetado para aumentar a disponibilidade e tolerância a falhas, replicando dados automaticamente para uma instância secundária em outra zona de disponibilidade. No entanto, ele não altera ou estende o período de retenção dos backups automatizados nem cria backups adicionais para fins de conformidade.",
      "Correta. Existem diversas formas de executar tarefas periódicas na AWS, e a combinação de CloudWatch Events com Lambda é uma das soluções mais simples e flexíveis. Criando uma regra no CloudWatch com agendamento (usando expressão cron ou intervalo fixo), é possível disparar uma função Lambda que executa a criação manual de snapshots do banco de dados, permitindo retenção por tempo indeterminado, atendendo assim à exigência de retenção de backups por três anos.",
      "Incorreta. Embora os backups automáticos do RDS sejam úteis para recuperação pontual, o período máximo de retenção configurável é de até 35 dias, o que é insuficiente para o requisito de retenção de backups por três anos estabelecido no contrato."
    ]
  },
  {
    "question": "Sua arquitetura de aplicação web consiste em múltiplas instâncias Amazon EC2 executando atrás de um Elastic Load Balancer, com um grupo de Auto Scaling configurado com capacidade desejada de 5 instâncias EC2. Você deseja integrar o AWS CodeDeploy para automatizar a implantação da aplicação. A implantação deve redirecionar o tráfego do ambiente original da aplicação para o novo ambiente.\n\nQual das opções abaixo atenderá aos seus critérios de implantação?",
    "options": [
      "Optar pela implantação Rolling",
      "Optar pela implantação In-place",
      "Optar pela implantação Imutável (Immutable)",
      "Optar pela implantação Blue/Green"
    ],
    "correct": [2, 3],
    "detailedExplanations": [
      "Incorreta. A implantação Rolling é uma estratégia típica do Elastic Beanstalk e não é diretamente suportada para instâncias EC2 gerenciadas pelo CodeDeploy. Além disso, não oferece o redirecionamento explícito de tráfego para um novo ambiente paralelo, como requerido.",
      "Incorreta. Na implantação In-place, a aplicação em cada instância do grupo de implantação é parada, a nova revisão é instalada e a aplicação é reiniciada na mesma instância. Embora seja possível usar um load balancer para remover temporariamente as instâncias durante a implantação, o tráfego não é redirecionado para um novo ambiente paralelo, o que não atende ao requisito de redirecionamento do tráfego para um novo ambiente.",
      "Correta. A implantação imutável é suportada pelo AWS CodeDeploy para instâncias EC2, onde uma nova frota paralela de instâncias é provisionada para a nova versão da aplicação. Após a validação, o tráfego é redirecionado para essa nova frota, permitindo um processo semelhante ao Blue/Green com alta disponibilidade e rollback rápido.",
      "Correta. A implantação Blue/Green é utilizada para atualizar suas aplicações minimizando interrupções causadas pelas mudanças da nova versão da aplicação. O CodeDeploy provisiona a nova versão da aplicação paralelamente à versão antiga antes de redirecionar o tráfego de produção. No caso de instâncias EC2, o tráfego é transferido de um conjunto de instâncias no ambiente original para um conjunto substituto de instâncias, garantindo alta disponibilidade e rollback rápido em caso de falhas."
    ]
  },
  {
    "question": "Seu líder de equipe solicitou que você habilite o monitoramento detalhado das instâncias Amazon EC2 utilizadas pelo seu time. Como desenvolvedor que trabalha com AWS CLI, qual dos comandos abaixo você executaria para ativar esse monitoramento detalhado?",
    "options": [
      "aws ec2 monitor-instances --instance-id i-1234567890abcdef0",
      "aws ec2 run-instances --image-id ami-09092360 --monitoring State=enabled",
      "aws ec2 run-instances --image-id ami-09092360 --monitoring Enabled=true",
      "aws ec2 monitor-instances --instance-ids i-1234567890abcdef0"
    ],
    "correct": 3,
    "detailedExplanations": [
      "Incorreta. O parâmetro correto para especificar múltiplas instâncias é '--instance-ids' no plural. Usar '--instance-id' no singular resulta em erro de sintaxe.",
      "Incorreta. Essa sintaxe é inválida para o parâmetro '--monitoring' no comando 'run-instances'. O valor correto deve ser 'Enabled=true'.",
      "Incorreta. Esse comando é utilizado para habilitar o monitoramento detalhado durante o lançamento de uma nova instância EC2, não para instâncias já em execução.",
      "Correta. Esse comando habilita o monitoramento detalhado para uma ou mais instâncias EC2 já em execução, utilizando o parâmetro correto '--instance-ids'."
    ]
  },
  {
    "question": "A equipe de desenvolvimento de uma empresa deseja criptografar um objeto de 111 GB utilizando o AWS KMS.\n\nQual das opções a seguir representa a melhor solução?",
    "options": [
      "Realizar uma chamada à API GenerateDataKeyWithPlaintext que retorna uma cópia criptografada da chave de dados. Use a chave em texto simples para criptografar os dados.",
      "Realizar uma chamada à API GenerateDataKey que retorna uma chave em texto simples e uma cópia criptografada da chave de dados. Use a chave em texto simples para criptografar os dados.",
      "Realizar uma chamada à API GenerateDataKeyWithoutPlaintext que retorna uma cópia criptografada da chave de dados. Use a chave criptografada para criptografar os dados.",
      "Realizar uma chamada à API Encrypt para criptografar os dados em texto simples como texto cifrado usando uma chave mestra do cliente (CMK) com material de chave importado."
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. A API GenerateDataKeyWithPlaintext não existe e foi apresentada apenas como uma alternativa para confundir. Não há essa operação na API do AWS KMS.",
      "Correta. A API GenerateDataKey gera uma chave simétrica única para criptografia do lado do cliente. Essa operação retorna uma cópia em texto simples da chave de dados e uma cópia criptografada sob uma chave mestra do cliente (CMK) especificada. A chave em texto simples pode ser usada para criptografar os dados fora do AWS KMS, e a chave criptografada pode ser armazenada junto com os dados criptografados para posterior descriptografia.",
      "Incorreta. A API GenerateDataKeyWithoutPlaintext retorna apenas a chave de dados criptografada, sem a chave em texto simples necessária para criptografar os dados localmente. Essa operação é útil para cenários onde a criptografia será feita posteriormente, mas não é adequada para criptografar imediatamente um objeto grande.",
      "Incorreta. A API Encrypt é adequada para criptografar pequenas quantidades de dados arbitrários, como senhas ou identificadores pessoais, e não para objetos grandes como um arquivo de 111 GB. Além disso, o uso de material de chave importado não altera essa limitação. Portanto, essa abordagem não é eficiente nem prática para o cenário apresentado."
    ]
  },
  {
    "question": "Uma empresa de marketing digital hospeda seu site em um bucket Amazon S3 A. A equipe de desenvolvimento percebe que as fontes web hospedadas em outro bucket S3 B não estão carregando no site.\n\nQual das seguintes soluções pode ser usada para resolver esse problema?",
    "options": [
      "Configurar CORS no bucket B que hospeda as fontes web para permitir que a origem do bucket A faça as requisições.",
      "Configurar CORS no bucket A que hospeda o site para permitir qualquer origem responder às requisições.",
      "Habilitar versionamento em ambos os buckets para facilitar o funcionamento correto do site.",
      "Atualizar as políticas dos buckets A e B para permitir o carregamento correto das fontes web no site."
    ],
    "correct": 0,
    "detailedExplanations": [
      "Correta. O CORS (Cross-Origin Resource Sharing) deve ser configurado no bucket B para permitir que o site hospedado no bucket A acesse as fontes web. Isso define quais origens podem acessar os recursos do bucket B, permitindo o carregamento correto das fontes no site.",
      "Incorreta. A configuração CORS deve ser aplicada no bucket que hospeda os recursos (fontes web), ou seja, no bucket B, para permitir que o site hospedado no bucket A possa acessar esses recursos.",
      "Incorreta. O versionamento é usado para manter múltiplas versões de objetos no bucket, não tem relação com o problema de carregamento das fontes web entre buckets diferentes.",
      "Incorreta. Atualizar as políticas dos buckets não resolve o problema de carregamento das fontes web, pois o controle de acesso entre domínios diferentes para recursos web é gerenciado pela configuração CORS, não pelas políticas de bucket."
    ]
  },
  {
    "question": "Seu líder de equipe solicitou uma revisão de código das suas funções Lambda. Seu código está escrito em Python e utiliza o Amazon Simple Storage Service (S3) para fazer upload de logs em um bucket S3. Após a revisão, o líder recomendou o reuso do contexto de execução para melhorar o desempenho da função Lambda.\n\nQual das seguintes ações ajudará a implementar essa recomendação?",
    "options": [
      "Usar variáveis de ambiente para passar parâmetros operacionais",
      "Mover a inicialização do cliente Amazon S3 para fora do handler da função",
      "Atribuir mais memória RAM para a função",
      "Habilitar a integração com o AWS X-Ray"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Utilizar variáveis de ambiente é uma boa prática para evitar hardcoding de parâmetros, mas não está relacionado ao reuso do contexto de execução para melhorar o desempenho da função Lambda.",
      "Correta. As melhores práticas da AWS para Lambda recomendam aproveitar o reuso do contexto de execução para melhorar o desempenho. Inicializar clientes SDK, como o do Amazon S3, fora do handler da função permite que esses objetos sejam reutilizados em invocações subsequentes no mesmo ambiente, reduzindo o tempo de inicialização e o custo de execução.",
      "Incorreta. Aumentar a memória RAM pode acelerar a execução da função, mas a recomendação do líder está relacionada especificamente ao reuso do contexto de execução, que não é impactado diretamente pela quantidade de memória alocada.",
      "Incorreta. O AWS X-Ray é uma ferramenta útil para monitoramento e identificação de gargalos de desempenho, mas não contribui diretamente para o reuso do contexto de execução da função Lambda."
    ]
  },
  {
    "question": "Sua empresa executa lógica de negócios em componentes de software menores que desempenham várias funções. Algumas funções processam informações em poucos segundos, enquanto outras parecem levar muito tempo para serem concluídas. Seu gerente pediu para desacoplar os componentes que demoram muito para garantir que as aplicações de software permaneçam responsivas sob carga. Você decide configurar o Amazon Simple Queue Service (SQS) para funcionar com sua configuração do Elastic Beanstalk.\n\nQual dos seguintes ambientes do Elastic Beanstalk você deve escolher para atender a esse requisito?",
    "options": [
      "Ambiente com balanceamento de carga e escalabilidade automática",
      "Ambiente worker dedicado",
      "Instância única com Elastic IP",
      "Nó worker de instância única"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Embora ambientes com balanceamento de carga e escalabilidade automática sejam indicados para aplicações que precisam escalar horizontalmente e distribuir carga, eles não são a melhor escolha para desacoplar tarefas longas. Além disso, essa configuração pode aumentar custos sem resolver diretamente o problema da responsividade sob carga causado por operações demoradas.",
      "Correta. Um ambiente worker dedicado no Elastic Beanstalk é projetado para executar tarefas que levam muito tempo para serem concluídas, desacoplando essas operações do front-end da aplicação web. Isso garante que a aplicação permaneça responsiva sob carga, processando tarefas longas de forma assíncrona, geralmente integrando-se com o Amazon SQS para gerenciar filas de mensagens.",
      "Incorreta. Um ambiente com instância única e Elastic IP não possui balanceador de carga e não é altamente disponível. Embora possa reduzir custos, não é recomendado para produção e não resolve o problema de desacoplamento de tarefas longas para manter a aplicação responsiva.",
      "Incorreta. O termo 'nó worker' é mais comumente associado a clusters Kubernetes (EKS) e não ao Elastic Beanstalk. Portanto, essa opção não é aplicável ao contexto do Elastic Beanstalk e não atende ao requisito de desacoplamento para tarefas demoradas."
    ]
  },
  {
    "question": "Uma empresa utiliza o Amazon RDS como seu banco de dados. Para melhorar a experiência do usuário, foi decidido que uma camada de cache altamente confiável e totalmente gerenciada deve ser configurada na frente do RDS.\n\nQual das opções a seguir é a escolha correta, considerando que a regeneração do conteúdo do cache é uma atividade custosa?",
    "options": [
      "Migrar o banco de dados para o Amazon Redshift",
      "Implementar o Amazon ElastiCache Redis em Modo Cluster",
      "Implementar o Amazon ElastiCache Memcached",
      "Instalar o Redis em uma instância Amazon EC2"
    ],
    "correct": 1,
    "detailedExplanations": [
      "Incorreta. Amazon Redshift é um serviço de data warehouse voltado para análise de grandes volumes de dados, não sendo adequado para atuar como camada de cache em tempo real. Além disso, não resolve o problema de cache com alta disponibilidade e baixa latência.",
      "Correta. O ElastiCache para Redis com Modo Cluster habilitado oferece alta confiabilidade, disponibilidade e escalabilidade horizontal, permitindo distribuir dados em múltiplos shards. Isso reduz o impacto no desempenho e facilita a manutenção do cache, especialmente quando a regeneração do conteúdo é custosa.",
      "Incorreta. Memcached é um sistema de cache em memória simples e de alto desempenho, mas não oferece recursos avançados como persistência, replicação ou suporte a transações. Para casos em que a regeneração do cache é custosa, o Redis, com seus recursos avançados, é mais adequado.",
      "Incorreta. Embora seja possível instalar o Redis diretamente em uma instância Amazon EC2, ao contrário do ElastiCache para Redis, que é um serviço gerenciado, você precisará cuidar da manutenção, atualizações, escalabilidade e gerenciamento da infraestrutura, aumentando a complexidade operacional."
    ]
  }
];