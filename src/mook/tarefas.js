const tarefas = [
    {
        id: 1,
        titulo: 'Implementar a Tela de Login',
        descricao: 'Desenvolver a interface de autenticação aplicando boas práticas de UX/UI. Deve incluir campos para e-mail e senha, suporte a feedbacks visuais de erro, opção de "lembrar-me" e integração visual com a paleta de cores padrão do sistema.',
        responsavel: 'Lucia'
    },
    {
        id: 2,
        titulo: 'Implementar a Tela de Listar Tarefas',
        descricao: 'Construir o componente responsável por consumir e renderizar a lista de tarefas a partir dos dados do JSON. A tela deve apresentar uma tabela com efeitos de hover, cabeçalho estilizado e links para navegação até o detalhamento individual de cada registro.',
        responsavel: 'Khyara'
    },
    {
        id: 3,
        titulo: 'Criar Endpoint de Autenticação',
        descricao: 'Desenvolver a API REST em Node.js para validação de credenciais e geração de tokens JWT. O endpoint deve validar os dados enviados, tratar falhas de login com mensagens apropriadas e retornar o token com tempo de expiração configurável.',
        responsavel: 'Carlos'
    },
    {
        id: 4,
        titulo: 'Ajustar Responsividade do Dashboard',
        descricao: 'Corrigir falhas de quebra de layout e rolagem horizontal em dispositivos móveis e tablets. Ajustar o grid principal e as tabelas para garantir uma navegação fluida em telas com largura inferior a 768px.',
        responsavel: 'Mariana'
    },
    {
        id: 5,
        titulo: 'Configurar Banco de Dados PostgreSQL',
        descricao: 'Estruturar o banco de dados criando as tabelas de usuários, tarefas e permissões. Escrever e rodar as migrations iniciais, além de definir os relacionamentos de chave estrangeira e os índices para otimização de consultas.',
        responsavel: 'Rafael'
    },
    {
        id: 6,
        titulo: 'Integração com Gateway de Pagamento',
        descricao: 'Implementar o fluxo completo de checkout permitindo pagamentos via Pix (com geração de QR Code dinâmico) e cartão de crédito. Incluir tratamento para confirmação via webhook e exibição do status da transação em tempo real.',
        responsavel: 'Beatriz'
    },
    {
        id: 7,
        titulo: 'Desenvolver Modal de Cadastro de Tarefas',
        descricao: 'Criar componente de modal contendo formulário para inserção de novas tarefas. Utilizar a biblioteca React Hook Form para gerenciar o estado dos inputs e aplicar regras de validação para impedir o envio de campos obrigatórios em branco.',
        responsavel: 'Lucas'
    },
    {
        id: 8,
        titulo: 'Escrever Testes Unitários no Front-end',
        descricao: 'Garantir a estabilidade e cobertura de testes dos componentes vitais da aplicação utilizando Jest e React Testing Library. Focar nos cenários de renderização de listas, submissão de formulários e estados de carregamento.',
        responsavel: 'Fernanda'
    },
    {
        id: 9,
        titulo: 'Configurar Pipeline de CI/CD',
        descricao: 'Criar rotina automatizada via GitHub Actions para executar a suíte de testes unitários, realizar o build da aplicação e fazer o deploy automático no ambiente de staging a cada push na branch principal.',
        responsavel: 'Thiago'
    },
    {
        id: 10,
        titulo: 'Otimizar Performance de Imagens',
        descricao: 'Revisar e converter todos os ativos de imagem do projeto para o formato WebP. Aplicar carregamento assíncrono (lazy loading) nos componentes de galeria para reduzir o tempo inicial de carregamento da página.',
        responsavel: 'Aline'
    },
    {
        id: 11,
        titulo: 'Implementar Filtro e Busca na Listagem',
        descricao: 'Adicionar funcionalidade de busca dinâmica na tela de listagem. O usuário deve conseguir filtrar a tabela em tempo real digitando o título, selecionando o responsável em um dropdown ou escolhendo o status da tarefa.',
        responsavel: 'Gabriel'
    },
    {
        id: 12,
        titulo: 'Documentar Endpoints da API',
        descricao: 'Escrever a documentação técnica completa de todos os endpoints da API utilizando Swagger/OpenAPI. Detalhar parâmetros de entrada, headers de autenticação requeridos e exemplos de respostas para status 200, 400 e 500.',
        responsavel: 'Patricia'
    }
];

export default tarefas;