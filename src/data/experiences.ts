export type Experience = {
  role: string;
  company: string;
  employmentType?: string;
  period: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Frontend Engineer',
    company: 'Lomadee',
    employmentType: 'Tempo integral',
    period: 'jan de 2025 — o momento · 1 ano 5 meses',
    startDate: 'Janeiro de 2025',
    endDate: 'Presente',
    location: 'São Paulo, Brasil',
    description:
      'Atuei como Frontend Engineer com atuação Fullstack na evolução do principal produto da empresa, impactando diretamente a experiência de usuários em larga escala — com foco em performance, escalabilidade, arquitetura e qualidade de software.',
    highlights: [
      'Desenvolvi funcionalidades end-to-end, atuando em front-end e back-end, participando de decisões técnicas, definição de soluções e colaboração com times multidisciplinares em ambiente ágil.',
      'Atuei no desenvolvimento de uma extensão para Chrome, implementando funcionalidades no front-end (content scripts, UI da extensão) e integração com APIs e serviços de back-end — ampliando o alcance do produto e a experiência do usuário fora do ambiente web tradicional.',
      'Liderei a criação de componentes reutilizáveis e padronização de interface (Design System), promovendo maior escalabilidade, consistência visual e produtividade do time.',
      'Competências: Fullstack Development, Front-end Architecture, Microservices, Chrome Extensions, Design Systems, Componentização, Performance Optimization, Clean Code, API Integration.',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'react-i18next',
      'Figma',
      'Chrome Extension',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'MONITFY',
    employmentType: 'Tempo integral',
    period: 'set de 2021 — o momento · 4 anos 9 meses',
    startDate: 'Setembro de 2021',
    endDate: 'Presente',
    location: 'São Paulo, Brasil · Remoto',
    description:
      'Atuei como Frontend Engineer com atuação Fullstack, responsável pela evolução contínua do produto principal — com foco em experiência do usuário, performance e escalabilidade.',
    highlights: [
      'Desenvolvi novas funcionalidades e melhorias, atuando também em integrações com o back-end e participando ativamente de decisões técnicas e colaboração entre times.',
      'Contribuí para a construção de biblioteca de componentes reutilizáveis com Storybook, garantindo consistência visual, escalabilidade e padronização de interface.',
      'Competências: Front-end Development, Component Libraries, Design Systems, UI/UX, Performance Optimization, Clean Code, API Integration.',
    ],
    stack: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'Storybook',
      'Figma',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'b8one',
    employmentType: 'Tempo integral',
    period: 'abr de 2022 — dez de 2022 · 9 meses',
    startDate: 'Abril de 2022',
    endDate: 'Dezembro de 2022',
    location: 'São Paulo, Brasil · Remoto',
    description:
      'Atuei como Frontend Developer (E-commerce) no desenvolvimento e customização de lojas utilizando VTEX IO — com foco em performance, experiência do usuário e conversão.',
    highlights: [
      'Implementei funcionalidades e integrações com APIs da plataforma, colaborando com equipes multidisciplinares em projetos de e-commerce.',
      'Desenvolvi componentes reutilizáveis com React e GraphQL utilizando Store Framework e CSS Handles, garantindo escalabilidade, reutilização e aderência às boas práticas da plataforma.',
      'Competências: E-commerce Development, VTEX IO, Front-end Performance, Componentização, API Integration, UX Optimization.',
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'VTEX IO', 'Store Framework', 'CSS Handles'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'QGX Digital',
    employmentType: 'Tempo integral',
    period: 'fev de 2021 — ago de 2021 · 7 meses',
    startDate: 'Fevereiro de 2021',
    endDate: 'Agosto de 2021',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Atuei como Software Developer (Fullstack) no desenvolvimento de funcionalidades e correções em diferentes projetos, contribuindo para entregas eficientes e qualidade de software.',
    highlights: [
      'Trabalhei em ambientes dinâmicos e multidisciplinares, adquirindo experiência com múltiplas stacks e contextos (web e mobile).',
      'Competências: Fullstack Development, Web Development, Mobile Development, Cloud (AWS), APIs, Performance Optimization.',
    ],
    stack: ['Node.js', 'TypeScript', 'React', 'Angular', 'React Native', 'Golang', 'AWS'],
  },
];
