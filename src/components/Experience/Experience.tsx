import { motion } from 'framer-motion';
import { Briefcase, Check, MapPin } from 'lucide-react';
import { experiences } from '../../data/experiences';

const Experience = () => (
  <section id="experiencia" className="section-y relative">
    <div className="container-page">
      <header className="max-w-[720px] mb-14 flex flex-col gap-3.5">
        <span className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) text-[0.78rem] font-semibold tracking-[0.06em] uppercase">
          Experiência
        </span>
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold">
          Uma trajetória focada em{' '}
          <span className="text-gradient-brand">front-end com impacto</span>.
        </h2>
        <p className="text-[1.05rem] text-(--color-ink-muted)">
          +5 anos atuando em produtos reais — da concepção do componente até a entrega completa
          da feature, em colaboração próxima com design, produto e back-end.
        </p>
      </header>

      <ol className="relative flex flex-col gap-7 pl-8 xs:pl-10 m-0 before:content-[''] before:absolute before:top-2 before:bottom-2 before:left-[11px] xs:before:left-[15px] before:w-0.5 before:bg-[linear-gradient(to_bottom,rgb(108_92_231_/_0.4),rgb(108_92_231_/_0))]">
        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${i}`}
            className="group relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="absolute -left-8 xs:-left-10 top-[18px] grid place-items-center w-6 h-6 xs:w-8 xs:h-8 rounded-full bg-(--color-surface) text-(--color-brand-deep) border border-[rgb(108_92_231_/_0.25)] shadow-soft-sm transition-[transform,background,color,border-color] duration-300 ease-soft group-hover:bg-gradient-brand group-hover:text-white group-hover:border-transparent group-hover:scale-110 [&>svg]:w-3 [&>svg]:h-3 xs:[&>svg]:w-4 xs:[&>svg]:h-4"
              aria-hidden
            >
              <Briefcase size={16} />
            </span>

            <div className="p-7 rounded-3xl bg-(--color-surface) border border-(--color-border-soft) shadow-soft-sm transition-[transform,box-shadow,border-color] duration-300 ease-soft group-hover:-translate-y-1 group-hover:shadow-soft-lg group-hover:border-[rgb(108_92_231_/_0.25)]">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) text-[0.78rem] font-semibold tracking-[0.04em]">
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 text-[0.82rem] text-(--color-ink-muted)">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                )}
              </div>
              <h3 className="text-[1.2rem] font-semibold mb-1">{exp.role}</h3>
              <p className="text-[0.95rem] font-medium text-(--color-brand-deep) mb-3">
                {exp.company}
                {exp.employmentType ? ` · ${exp.employmentType}` : ''}
              </p>
              <p className="text-[0.98rem] leading-[1.7] text-(--color-ink-soft) mb-4">
                {exp.description}
              </p>
              <ul className="flex flex-col gap-2.5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[0.95rem] text-(--color-ink-soft)"
                  >
                    <Check
                      size={14}
                      className="shrink-0 mt-1 p-0.5 w-[18px] h-[18px] rounded-full bg-gradient-brand text-white"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 mt-[18px] pt-[18px] border-t border-dashed border-(--color-border-soft)">
                {exp.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-2.5 py-1 text-[0.78rem] font-medium rounded-full bg-[rgb(15_17_38_/_0.04)] dark:bg-white/[0.06] text-(--color-ink-soft) transition-colors duration-200 ease-soft group-hover:bg-[rgb(108_92_231_/_0.1)] group-hover:text-(--color-brand-deep) dark:group-hover:bg-[rgb(167_139_250_/_0.15)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
