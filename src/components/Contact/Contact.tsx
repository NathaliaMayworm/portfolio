import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { socials } from '../../data/socials';
import { GithubIcon, LinkedinIcon } from '../icons';

const channels = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    text: 'in/nathaliamayworm',
    href: socials.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    text: 'github.com/NathaliaMayworm',
    href: socials.github,
    external: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    text: socials.email,
    href: `mailto:${socials.email}`,
    external: false,
  },
];

const Contact = () => (
  <section id="contato" className="section-y container-page">
    <motion.div
      className="relative isolate overflow-hidden md:ml-8 lg:ml-10 p-6 md:p-8 lg:p-10 rounded-[32px] text-white shadow-soft-lg bg-[linear-gradient(135deg,#1a1547_0%,#2b1c70_50%,#4338ca_100%)] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(50%_60%_at_20%_30%,rgb(167_139_250_/_0.45)_0%,transparent_70%),radial-gradient(60%_60%_at_80%_80%,rgb(59_130_246_/_0.45)_0%,transparent_70%)] after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(to_right,rgb(255_255_255_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255_/_0.05)_1px,transparent_1px)] after:bg-[size:48px_48px] after:[mask-image:radial-gradient(ellipse_at_center,rgb(0_0_0_/_0.7),transparent_70%)] after:[-webkit-mask-image:radial-gradient(ellipse_at_center,rgb(0_0_0_/_0.7),transparent_70%)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex px-3.5 py-1.5 rounded-full bg-white/[0.12] border border-white/[0.18] text-white/95 text-[0.78rem] font-semibold tracking-[0.06em] uppercase">
        Contato
      </span>
      <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] font-bold text-white max-w-[720px] tracking-[-0.02em]">
        Vamos construir{' '}
        <span className="bg-[linear-gradient(90deg,#c4b5fd_0%,#93c5fd_100%)] bg-clip-text text-transparent">
          algo incrível juntos
        </span>
        ?
      </h2>
      <p className="mt-4 text-[1.05rem] leading-[1.7] text-white/[0.78] max-w-[600px]">
        Se você está procurando uma Frontend Engineer para somar ao seu time ou quer trocar uma
        ideia sobre produto, design ou tecnologia — fico feliz em conversar.
      </p>

      <a
        href={`mailto:${socials.email}`}
        className="inline-flex items-center gap-2.5 mt-8 px-[26px] py-4 rounded-full bg-white text-[#0f1126] font-semibold text-base shadow-[0_18px_48px_rgb(0_0_0_/_0.25)] transition-[transform,box-shadow] duration-200 ease-soft hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgb(124_92_255_/_0.45)] focus-ring"
      >
        <Mail size={18} className="text-(--color-brand-deep)" />
        {socials.email}
      </a>

      <div className="grid md:grid-cols-3 gap-3.5 mt-10">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noreferrer' : undefined}
            className="group flex items-center gap-3.5 px-5 py-[18px] rounded-2xl bg-white/[0.06] border border-white/10 text-white transition-[background,transform,border-color] duration-200 ease-soft hover:bg-white/[0.12] hover:border-white/25 hover:-translate-y-0.5 focus-ring"
          >
            <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-white/[0.12] shrink-0">
              <channel.icon size={18} />
            </span>
            <span className="flex flex-col gap-0.5 flex-1 min-w-0">
              <strong className="text-[0.95rem] font-semibold">{channel.label}</strong>
              <span className="text-[0.85rem] text-white/70 overflow-hidden text-ellipsis whitespace-nowrap">
                {channel.text}
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="opacity-60 transition-[transform,opacity] duration-200 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Contact;
