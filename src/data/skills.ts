import {
  Code2,
  Combine,
  Database,
  Layers,
  Palette,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    description:
      "Construção de interfaces modernas, escaláveis e performáticas.",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "State Management",
    description: "Gerenciamento de estado e sincronização de dados.",
    icon: Combine,
    items: ["Redux", "Zustand", "Context API", "React Query"],
  },
  {
    title: "UI Engineering",
    description: "Componentização visual e Design Systems escaláveis.",
    icon: Layers,
    items: ["Tailwind", "Styled Components", "Storybook", "Design Tokens"],
  },
  {
    title: "Back-end & APIs",
    description:
      "Desenvolvimento de serviços, integrações e arquitetura de APIs.",
    icon: Server,
    items: ["Node.js", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    title: "Banco de Dados",
    description: "Modelagem e integração com bancos SQL e NoSQL.",
    icon: Database,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Design & UX",
    description: "Colaboração próxima com produto e design.",
    icon: Palette,
    items: [
      "Figma",
      "Acessibilidade",
      "UX",
      "Design Systems",
      "Internacionalização",
    ],
  },
  {
    title: "Qualidade",
    description: "Padronização, qualidade e confiabilidade no desenvolvimento.",
    icon: ShieldCheck,
    items: ["Testes", "ESLint", "Prettier", "CI/CD"],
  },
  {
    title: "Ferramentas & Workflow",
    description:
      "Fluxos modernos de desenvolvimento, versionamento e produtividade.",
    icon: Wrench,
    items: ["Git", "GitHub", "Vite", "Docker"],
  },
  {
    title: "AI Assisted Development",
    description:
      "Uso estratégico de IA para produtividade e qualidade de código.",
    icon: Sparkles,
    items: ["Claude", "Cursor", "Codex"],
  },
];
