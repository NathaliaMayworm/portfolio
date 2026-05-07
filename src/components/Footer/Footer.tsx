import { Mail } from 'lucide-react';
import { socials } from '../../data/socials';
import { GithubIcon, LinkedinIcon } from '../icons';

const socialLink =
  'inline-grid place-items-center w-[38px] h-[38px] rounded-[10px] text-(--color-ink-soft) bg-(--color-surface) border border-(--color-border-soft) transition-[color,background,border-color,transform] duration-200 ease-soft hover:text-(--color-brand-deep) hover:bg-[rgb(108_92_231_/_0.08)] hover:border-[rgb(108_92_231_/_0.25)] hover:-translate-y-0.5 focus-ring';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border-soft) py-8 bg-white/40 backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="inline-grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-brand text-white text-xs font-extrabold tracking-wider shadow-soft-sm">
            NM
          </span>
          <div className="flex flex-col leading-tight">
            <strong className="font-display text-[0.95rem] text-(--color-ink)">
              Nathália Mayworm Kapps
            </strong>
            <span className="text-[0.82rem] text-(--color-ink-muted)">
              Software Engineer · Frontend-Focused Fullstack
            </span>
          </div>
        </div>

        <p className="text-[0.85rem] text-(--color-ink-muted) text-center flex-1 basis-60">
          © {year} Nathália Mayworm Kapps. Construído com React, Vite, TypeScript e Tailwind CSS.
        </p>

        <div className="flex gap-2">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={socialLink}
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={socialLink}
          >
            <GithubIcon size={18} />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="E-mail" className={socialLink}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
