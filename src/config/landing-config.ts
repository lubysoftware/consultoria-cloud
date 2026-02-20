/**
 * Configuração centralizada da Landing Page
 * 
 * Este arquivo contém todos os textos, imagens e configurações
 * que precisam ser ajustados para cada nova landing page.
 * 
 * Para criar uma nova LP, copie este arquivo e ajuste os valores abaixo.
 */

export interface LandingConfig {
  // Metadados
  theme: string;
  themeLabel: string;
  
  // Header
  header: {
    ctaButton: string;
  };
  
  // Hero Section
  hero: {
    backgroundImage: string; // Path relativo a @/assets/
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    subtitleHighlight: string;
    benefits: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  
  // Pain Points
  painPoints: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
  
  // How It Works
  howItWorks: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  
  // Use Cases
  useCases: {
    label: string;
    title: string;
    titleHighlight: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  
  // Why Luby
  whyLuby: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    differentials: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Technologies
  technologies: {
    label: string;
    title: string;
    description: string;
    items: Array<{
      name: string;
      slug?: string;
      alt?: string;
    }>;
  };
  
  // Deliveries
  deliveries: {
    label: string;
    title: string;
    titleHighlight: string;
    image: string; // Path relativo a @/assets/
    items: Array<{
      id: string;
      title: string;
      items: string[];
    }>;
  };
  
  // Contact Form
  contactForm: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    benefits: Array<{
      text: string;
    }>;
    ctaSubmit: string;
    ctaSchedule: string;
  };
  
  // FAQ
  faq: {
    label: string;
    title: string;
    titleHighlight: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

// Configuração atual da Landing Page de Consultoria Cloud
export const landingConfig: LandingConfig = {
  theme: "consultoria-cloud",
  themeLabel: "Consultoria Cloud",
  
  header: {
    ctaButton: "Solicitar sessão de estratégia Cloud",
  },
  
  hero: {
    backgroundImage: "hero-bg.png",
    badge: "Consultoria Cloud",
    title: "Leve sua nuvem para um nível previsível de segurança, custo e confiabilidade",
    titleHighlight: "",
    subtitle: "A Luby ajuda sua empresa a migrar, modernizar e operar na nuvem com governança desde o início, controle de custos e padrões de produção que evitam surpresas depois do go live.",
    subtitleHighlight: "",
    benefits: [
      "Arquitetura cloud alinhada com boas práticas e padrões de entrega",
      "Landing zone, identidade, redes e segurança por design",
      "Migração e modernização em fases, com cutover controlado",
      "FinOps e otimização de custo com visibilidade por produto e time",
      "Operação confiável com observabilidade e runbooks",
    ],
    ctaPrimary: "Solicitar sessão de estratégia Cloud",
    ctaSecondary: "Ver como funciona",
  },
  
  painPoints: {
    label: "Dores de consultoria cloud",
    title: "A nuvem é poderosa. Sem governança, ",
    titleHighlight: "vira custo e risco mais rápido do que você imagina",
    description: "Os problemas raramente são da AWS, Google Cloud ou Azure. Normalmente são falta de base, decisões sem padrão e um modelo operacional que não foi pensado para crescer.",
    items: [
      {
        title: "Custo cresce sem dono",
        description: "A conta sobe e ninguém consegue ligar gasto a produto, ambiente ou time.",
      },
      {
        title: "Segurança e acessos se espalham",
        description: "Permissões viram \"vale tudo\", segredos se perdem e auditoria vira estresse.",
      },
      {
        title: "Sem landing zone e padrões",
        description: "Projetos, contas e redes evoluem cada um de um jeito e a entrega fica lenta.",
      },
      {
        title: "Migrações parecem perigosas",
        description: "Medo de downtime, cutover incerto e rollback frágil travam a decisão.",
      },
      {
        title: "Confiabilidade não é projetada",
        description: "Incidentes se repetem porque resiliência e recuperação não foram desenhadas.",
      },
      {
        title: "Entrega ainda é manual",
        description: "Está na nuvem, mas deploy continua lento, arriscado e com muita mão.",
      },
      {
        title: "Complexidade e sprawl de serviços",
        description: "Muita ferramenta, pouco padrão, manutenção cara no longo prazo.",
      },
      {
        title: "Observabilidade incompleta",
        description: "Você descobre problema pelo cliente, não pelos sinais.",
      },
      {
        title: "Modelo operacional não escala",
        description: "Conhecimento fica tribal e cada workload novo repete o mesmo erro.",
      },
    ],
    cta: "Ver o que dá para arrumar primeiro",
  },
  
  howItWorks: {
    label: "Como entregamos",
    title: "Consultoria Cloud com base sólida, migração controlada e operação que o time consegue sustentar",
    titleHighlight: "",
    description: "A gente começa pelo risco e pela realidade do seu ambiente, depois cria a base e executa em fases com validação, visibilidade de custo e disciplina de produção.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico cloud e objetivos",
        description: "Mapeamos workloads, dependências, ambientes, postura de segurança, processo de entrega e principais drivers de custo. Identificamos o que não pode quebrar e onde o risco é maior.",
        detail: "Clareza antes de qualquer mudança.",
      },
      {
        number: "02",
        title: "Blueprint e landing zone",
        description: "Desenhamos identidade e acessos, redes e limites, separação por ambientes, logging, políticas e governança. Definimos padrões para o time evoluir sem criar caos.",
        detail: "Base segura que aumenta velocidade.",
      },
      {
        number: "03",
        title: "Migração e modernização em fases",
        description: "Executamos por ondas, com steps de validação, plano de cutover e rollback para cargas críticas. Aplicamos infraestrutura como código e disciplina de release para reduzir surpresa.",
        detail: "Progresso controlado, sem aposta.",
      },
      {
        number: "04",
        title: "Operar, otimizar e melhorar",
        description: "Estruturamos observabilidade, prontidão para incidentes, práticas de custo e ownership claro. Depois evoluímos confiabilidade, performance e spend de forma contínua.",
        detail: "Nuvem saudável depois do go live.",
      },
    ],
  },
  
  useCases: {
    label: "Use cases",
    title: "Trabalho de cloud que destrava migração, modernização e operação",
    titleHighlight: "",
    items: [
      {
        title: "Landing zone e governança",
        description: "Identidade, redes, ambientes e padrões que evitam sprawl.",
        icon: "Layers",
      },
      {
        title: "Migração para cloud em fases",
        description: "Planos com validação e cutover controlado para reduzir downtime.",
        icon: "RefreshCw",
      },
      {
        title: "Modernização pós migração",
        description: "Refatorar o que dói, melhorar confiabilidade e acelerar entrega.",
        icon: "Code",
      },
      {
        title: "Containers e enablement de plataforma",
        description: "Padrões consistentes de deploy com guardrails operacionais.",
        icon: "Box",
      },
      {
        title: "Serverless e sistemas orientados a eventos",
        description: "Mais escala com operações mais simples quando faz sentido.",
        icon: "Zap",
      },
      {
        title: "Segurança e auditoria",
        description: "Permissões, segredos, logging e controles que reduzem risco.",
        icon: "Shield",
      },
      {
        title: "FinOps e otimização de custos",
        description: "Tagueamento, budgets, alocação e backlog de economia por workload.",
        icon: "DollarSign",
      },
      {
        title: "Resiliência e disaster recovery",
        description: "Backups, RTO e RPO, testes e playbooks para continuidade.",
        icon: "Activity",
      },
    ],
  },
  
  whyLuby: {
    label: "Por que Luby",
    title: "Cloud dá certo quando arquitetura, segurança e custo são desenhados juntos",
    titleHighlight: "",
    description: "Não é sobre colocar um selo de parceiro na apresentação. É sobre reduzir risco com padrão, executar em fases com previsibilidade e deixar seu time com um modelo operacional que funciona no dia a dia.",
    cta: "Falar com um especialista em Cloud",
    differentials: [
      {
        title: "Base cloud pensada antes do sprawl",
        description: "Landing zone, identidade e governança antes do ambiente virar \"cada um por si\".",
      },
      {
        title: "Migração com disciplina e cutovers previsíveis",
        description: "Fases, validação e rollback quando o risco é alto.",
      },
      {
        title: "Custo com dono e visibilidade",
        description: "Tagueamento, alocação e limites para manter spend previsível.",
      },
      {
        title: "Segurança por design",
        description: "Permissões, segredos e trilhas de auditoria com limites claros.",
      },
      {
        title: "A gente opera o que constrói",
        description: "Observabilidade, runbooks e ownership para confiabilidade melhorar com o tempo.",
      },
    ],
  },
  
  technologies: {
    label: "Tecnologias",
    title: "Tecnologias que usamos para entregar com padrão de produção",
    description: "Selecionamos ferramentas maduras e amplamente adotadas para garantir segurança, observabilidade, automação e escalabilidade no seu contexto.",
    items: [
      { name: "AWS", slug: "aws" },
      { name: "Google Cloud", slug: "gcp" },
      { name: "Microsoft Azure", slug: "azure" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Terraform", slug: "terraform" },
      { name: "Docker", slug: "docker" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Datadog", slug: "datadog" },
    ],
  },
  
  deliveries: {
    label: "Entregáveis",
    title: "Entregáveis que deixam sua cloud segura, operável e com custo controlado",
    titleHighlight: "",
    image: "deliveries.png",
    items: [
      {
        id: "diagnosis",
        title: "Diagnóstico e roadmap",
        items: [
          "Mapa do estado atual de workloads, ambientes e dependências",
          "Matriz de risco e prioridades para segurança, confiabilidade e entrega",
          "Roadmap em fases com marcos e métricas de evolução",
          "Sequenciamento de migração e cutover por workload",
        ],
      },
      {
        id: "landing-zone",
        title: "Landing zone e governança",
        items: [
          "Modelo de identidade e acesso com papéis, limites e responsabilidades",
          "Padrões de rede, ambientes e separação por contexto",
          "Baseline de logging, monitoramento e sinais para auditoria",
          "Templates de infraestrutura como código e guardrails de plataforma",
        ],
      },
      {
        id: "migration",
        title: "Migração e modernização",
        items: [
          "Plano por workload com validação e estratégia de rollback",
          "Refactor onde precisa e modernização guiada por risco e impacto",
          "Melhorias em CI/CD para releases mais seguros e frequentes",
          "Estratégia de testes e mudanças para cargas críticas",
        ],
      },
      {
        id: "operations",
        title: "Operação, confiabilidade e FinOps",
        items: [
          "Plano de observabilidade, logs, métricas, traces e alertas",
          "Runbooks, rituais de incidentes e prontidão operacional",
          "FinOps com tags, budgets, alocação e ownership por custo",
          "Backlog de otimização para confiabilidade, performance e spend",
        ],
      },
    ],
  },
  
  contactForm: {
    label: "Sessão de estratégia Cloud",
    title: "Receba um plano de cloud que seu time consegue executar",
    titleHighlight: "",
    description: "Conte o que você roda hoje e o que precisa destravar. Vamos mapear riscos de segurança, gargalos de entrega, custo e maturidade operacional, e indicar um plano por fases para evoluir a cloud com previsibilidade.",
    benefits: [
      { text: "Diagnóstico de riscos e gargalos do ambiente atual" },
      { text: "Recomendações de landing zone e governança" },
      { text: "Plano de migração e modernização por ondas" },
      { text: "Próximos passos claros, sem compromisso" },
    ],
    ctaSubmit: "Solicitar minha sessão de estratégia",
    ctaSchedule: "Agendar uma conversa",
  },
  
  faq: {
    label: "Perguntas frequentes sobre Consultoria Cloud",
    title: "Perguntas frequentes sobre Consultoria Cloud",
    titleHighlight: "",
    items: [
      {
        question: "O que significa contratar uma consultoria cloud na prática",
        answer: "É ter um time que mapeia seu ambiente, desenha padrões e executa mudanças com controle, pensando em segurança, custo, confiabilidade e operação, não só em infraestrutura.",
      },
      {
        question: "Vocês ajudam a escolher a arquitetura certa",
        answer: "Sim. Recomendamos o que faz sentido para seus workloads, maturidade do time e restrições, com tradeoffs claros e um plano por fases.",
      },
      {
        question: "Dá para migrar sem grande downtime",
        answer: "Muitas vezes sim. Depende do sistema. A gente planeja validação, cutover por ondas e rollback quando necessário.",
      },
      {
        question: "Precisa ter landing zone antes de migrar",
        answer: "Se você quer previsibilidade de governança e segurança, sim. Sem isso, o ambiente cresce sem padrão e o custo de conserto depois é maior.",
      },
      {
        question: "Como vocês tratam IAM e risco de acessos",
        answer: "Com limites claros. Papéis por responsabilidade, segregação por ambiente, políticas, gestão de segredos e sinais de auditoria.",
      },
      {
        question: "Como controlar custo na nuvem de verdade",
        answer: "Primeiro visibilidade e ownership. Depois tags, budgets, alocação, limites e um backlog de otimização por workload.",
      },
      {
        question: "Vocês modernizam aplicações depois da migração",
        answer: "Sim. Em muitos casos migrar reduz risco primeiro, e modernizar em seguida melhora velocidade, confiabilidade e custo.",
      },
      {
        question: "Vocês trabalham junto com nosso time interno",
        answer: "Sim. Entramos no seu fluxo, ajudamos a criar padrões e deixamos ownership claro para o time operar depois.",
      },
      {
        question: "Vamos conseguir operar o que for entregue",
        answer: "Sim. A entrega inclui documentação, templates, runbooks e práticas operacionais para sustentar o ambiente no dia a dia.",
      },
      {
        question: "Qual é o primeiro passo",
        answer: "Começar pela sessão de estratégia cloud. Você sai com clareza de riscos, prioridades e um plano por fases para evoluir com controle.",
      },
    ],
  },
};
