import { motion } from 'framer-motion';
import { Code2, Database, Layers, Network, Rocket, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Arquitetura Frontend',
    text: 'Forte domínio de React, Next.js e TypeScript com foco em arquitetura frontend, componentização e gerenciamento de estado com Redux e Zustand — construindo interfaces modernas, reutilizáveis e eficientes.',
  },
  {
    icon: Layers,
    title: 'Design Systems & UI',
    text: 'Crio Design Systems e bibliotecas de componentes reutilizáveis com Tailwind CSS, Styled Components e Storybook — garantindo consistência visual, escalabilidade e produtividade do time.',
  },
  {
    icon: Network,
    title: 'APIs & Microserviços',
    text: 'Atuo na integração e consumo de APIs REST e GraphQL (Fetch API e Axios), além do desenvolvimento backend com Node.js e NestJS em arquitetura de microserviços — com foco em escalabilidade e sistemas distribuídos.',
  },
  {
    icon: Database,
    title: 'Soluções end-to-end',
    text: 'Experiência com bancos de dados SQL e NoSQL (PostgreSQL e MongoDB), contribuindo para o desenvolvimento de soluções completas end-to-end.',
  },
  {
    icon: Rocket,
    title: 'Performance & qualidade',
    text: 'Atuação forte em performance, qualidade de código e boas práticas de engenharia de software — buscando otimização contínua de aplicações e melhoria da experiência do usuário.',
  },
  {
    icon: Sparkles,
    title: 'IA aplicada ao desenvolvimento',
    text: 'Uso Claude, Codex e Cursor no dia a dia para aumentar produtividade, acelerar entregas e apoiar decisões técnicas.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const About = () => (
  <section id="sobre" className="section-y relative">
    <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <motion.div
        className="flex flex-col gap-4 lg:sticky lg:top-[104px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <div className="relative self-start">
          <span
            className="absolute -inset-3 rounded-full bg-gradient-brand opacity-25 blur-xl"
            aria-hidden
          />
          <img
            src="/perfil-avatar.webp"
            alt="Foto de Nathália Mayworm"
            width={140}
            height={140}
            loading="lazy"
            decoding="async"
            className="relative w-[140px] h-[140px] rounded-full object-cover border-4 border-white dark:border-(--color-surface) shadow-soft-lg ring-1 ring-(--color-border-soft)"
          />
        </div>
        <span className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) text-[0.78rem] font-semibold tracking-[0.06em] uppercase">
          Sobre mim
        </span>
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold">
          Software Engineer com foco em{' '}
          <span className="text-gradient-brand">front-end e experiência do usuário</span>.
        </h2>
        <p className="text-[1.05rem] leading-[1.75] text-(--color-ink-soft)">
          Software Engineer com +5 anos de experiência, com foco em front-end, atuando no
          desenvolvimento de aplicações escaláveis, performáticas e orientadas à experiência do
          usuário.
        </p>
        <p className="text-[1.05rem] leading-[1.75] text-(--color-ink-soft)">
          <strong className="font-semibold text-(--color-ink)">Principais competências:</strong>{' '}
          React, Next.js, TypeScript, Redux e Zustand; arquitetura frontend, Design Systems,
          componentização e engenharia de interfaces escaláveis; integração de serviços e consumo
          de APIs REST e GraphQL (Fetch API e Axios); Node.js e NestJS em arquitetura de
          microserviços; bancos de dados SQL e NoSQL (PostgreSQL e MongoDB); performance,
          escalabilidade e boas práticas de engenharia de software; IA aplicada ao desenvolvimento
          com Claude, Codex e Cursor.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.title}
            className="group flex flex-col gap-3 p-7 rounded-3xl bg-(--color-surface) border border-(--color-border-soft) shadow-soft-sm transition-[transform,box-shadow,border-color] duration-300 ease-soft hover:-translate-y-1 hover:shadow-soft-lg hover:border-[rgb(108_92_231_/_0.25)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-grid place-items-center w-11 h-11 rounded-2xl bg-gradient-brand-soft text-(--color-brand-deep) mb-1 transition-transform duration-300 ease-soft group-hover:scale-110 group-hover:-rotate-3">
              <pillar.icon size={20} />
            </span>
            <h3 className="text-[1.075rem] font-semibold">{pillar.title}</h3>
            <p className="text-[0.95rem] leading-[1.65] text-(--color-ink-soft)">{pillar.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
