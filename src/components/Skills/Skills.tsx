import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const Skills = () => (
  <section id="skills" className="section-y relative">
    <div className="container-page">
      <header className="max-w-[720px] mb-14 flex flex-col gap-3.5">
        <span className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) text-[0.78rem] font-semibold tracking-[0.06em] uppercase">
          Skills
        </span>
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold">
          Stack que uso para <span className="text-gradient-brand">construir produtos sólidos</span>
          .
        </h2>
        <p className="text-[1.05rem] text-(--color-ink-muted)">
          Da arquitetura visual à integração com o back-end — uma stack moderna, escalável e
          pensada para entregar com qualidade e velocidade.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            className="group relative overflow-hidden flex flex-col gap-[18px] p-7 rounded-3xl bg-(--color-surface) border border-(--color-border-soft) shadow-soft-sm transition-[transform,box-shadow,border-color] duration-300 ease-soft hover:-translate-y-1 hover:shadow-soft-lg hover:border-[rgb(108_92_231_/_0.25)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-brand-soft before:opacity-0 before:transition-opacity before:duration-300 before:ease-soft before:pointer-events-none hover:before:opacity-40"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex gap-3.5">
              <span className="shrink-0 inline-grid place-items-center w-11 h-11 rounded-xl bg-(--color-surface) border border-(--color-border-soft) text-(--color-brand-deep) shadow-soft-sm transition-[transform,color,background,border-color] duration-300 ease-soft group-hover:rotate-[-6deg] group-hover:scale-105 group-hover:bg-gradient-brand group-hover:text-white group-hover:border-transparent">
                <category.icon size={20} />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-semibold">{category.title}</h3>
                <p className="text-[0.9rem] mt-1 text-(--color-ink-muted) leading-[1.55]">
                  {category.description}
                </p>
              </div>
            </div>

            <ul className="relative flex flex-wrap gap-2 mt-auto">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 text-[0.82rem] font-medium rounded-full bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) transition-colors duration-200 ease-soft group-hover:bg-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
