import {
  Code2,
  Palette,
  Database,
  Server,
  PenTool,
  Wrench,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end',
    description: 'A base do meu trabalho — interfaces escaláveis e performáticas.',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Zustand'],
  },
  {
    title: 'Styling',
    description: 'Estilos robustos, design tokens e componentização visual.',
    icon: Palette,
    items: ['Tailwind CSS', 'Styled Components', 'Storybook'],
  },
  {
    title: 'Back-end',
    description: 'Atuação fullstack com APIs robustas e bem integradas.',
    icon: Server,
    items: ['Node.js', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem de dados relacional e não-relacional.',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Design',
    description: 'Colaboração próxima com design e foco em UX.',
    icon: PenTool,
    items: ['Figma', 'Design Systems', 'Acessibilidade'],
  },
  {
    title: 'Ferramentas',
    description: 'Versionamento, qualidade e produtividade no dia a dia.',
    icon: Wrench,
    items: ['Git', 'GitHub', 'CI/CD', 'Vite'],
  },
  {
    title: 'IA',
    description: 'Uso estratégico de IA para acelerar entregas com qualidade.',
    icon: Sparkles,
    items: ['Claude', 'Codex', 'Cursor'],
  },
];
