import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Loader2, Sparkles } from "lucide-react";
import { socials } from "../../data/socials";
import { profile } from "../../data/profile";
import { LinkedinIcon } from "../icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const btnBase =
  "inline-flex items-center gap-2 px-[22px] py-3.5 rounded-full font-semibold text-[0.95rem] transition-[transform,box-shadow,background,color,border-color,filter] duration-200 ease-soft hover:not-disabled:-translate-y-0.5 disabled:cursor-progress disabled:opacity-85 focus-ring";

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      const { generateResume } = await import("../../utils/generateResume");
      generateResume();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section
      id="hero"
      className="container-page relative min-h-screen md:pt-[96px] md:pb-24 pt-10 pb-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center"
    >
      <div className="flex flex-col gap-5">
        <motion.span
          className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-(--color-border-soft) backdrop-blur-md text-[0.82rem] font-medium text-(--color-ink-soft) shadow-soft-sm [&>svg]:text-(--color-brand)"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Sparkles size={14} />
          Disponível para novos desafios
        </motion.span>

        <motion.h1
          className="text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Oi, eu sou{" "}
          <span className="text-gradient-brand">{profile.fullName}</span>
        </motion.h1>

        <motion.p
          className="font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold text-(--color-brand-deep) m-0"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.role} · {profile.roleDetail}
        </motion.p>

        <motion.p
          className="text-[1.075rem] max-w-[540px] leading-[1.7] text-(--color-ink-soft)"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {profile.shortBio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mt-3"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a
            href="#contato"
            className={`${btnBase} text-white bg-gradient-brand shadow-glow hover:brightness-105 hover:shadow-[0_24px_48px_rgb(108_92_231_/_0.35)] [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-soft hover:[&_svg]:translate-x-0.5`}
          >
            Vamos conversar
            <ArrowRight size={18} />
          </a>
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className={`${btnBase} text-(--color-ink) bg-(--color-surface) border border-(--color-border-soft) shadow-soft-sm hover:border-[rgb(108_92_231_/_0.4)] hover:shadow-soft-md`}
          >
            {downloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            {downloading ? "Gerando…" : "Baixar currículo"}
          </button>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`${btnBase} text-(--color-ink-soft) bg-transparent border border-(--color-border-soft) hover:text-(--color-brand-deep) hover:bg-[rgb(108_92_231_/_0.06)] hover:border-[rgb(108_92_231_/_0.3)]`}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="flex items-center flex-wrap gap-6 mt-8 pt-6 border-t border-(--color-border-soft)"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="flex flex-col gap-0.5">
            <strong className="font-display text-xl font-bold text-(--color-ink)">
              +5
            </strong>
            <span className="text-[0.85rem] text-(--color-ink-muted)">
              anos de experiência
            </span>
          </div>
          <div className="hidden xs:block w-px h-8 bg-(--color-border-soft)" />
          <div className="flex flex-col gap-0.5">
            <strong className="font-display text-xl font-bold text-(--color-ink)">
              React · Next · Node · TS
            </strong>
            <span className="text-[0.85rem] text-(--color-ink-muted)">
              stack principal
            </span>
          </div>
          <div className="hidden xs:block w-px h-8 bg-(--color-border-soft)" />
          <div className="flex flex-col gap-0.5">
            <strong className="font-display text-xl font-bold text-(--color-ink)">
              Fullstack
            </strong>
            <span className="text-[0.85rem] text-(--color-ink-muted)">
              frontend-focused
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative grid place-items-center min-h-[360px] lg:min-h-[420px]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      >
        <div className="relative z-[2] w-full max-w-[480px] rounded-[32px] p-[22px] bg-white/75 border border-white/70 shadow-[var(--shadow-soft-lg),0_0_0_1px_rgb(108_92_231_/_0.08)] backdrop-blur-[18px]">
          <div className="flex items-center gap-2 pb-3.5 border-b border-(--color-border-soft)">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffd166]" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#06d6a0]" />
            <span className="ml-2 font-mono text-[0.78rem] text-(--color-ink-muted)">
              profile.ts
            </span>
          </div>
          <pre className="my-4 p-0 font-mono text-[0.88rem] leading-[1.7] text-(--color-ink) whitespace-pre-wrap">
            <code>
              <span className="text-[#b347d9]">const</span>{" "}
              <span className="text-[#2563eb]">nathalia</span> = {"{"}
              {"\n"} role:{" "}
              <span className="text-[#0d9488]">'Software Engineer'</span>,{"\n"}{" "}
              focus:{" "}
              <span className="text-[#0d9488]">
                'Frontend-Focused Fullstack'
              </span>
              ,{"\n"} stack: [<span className="text-[#0d9488]">'React'</span>,{" "}
              <span className="text-[#0d9488]">'Next.js'</span>,{" "}
              <span className="text-[#0d9488]">'TypeScript'</span>,{" "}
              <span className="text-[#0d9488]">'Node.js'</span>,{" "}
              <span className="text-[#0d9488]">'NestJS'</span>],
              {"\n"} architecture: [
              <span className="text-[#0d9488]">'Design Systems'</span>,{" "}
              <span className="text-[#0d9488]">'Microservices'</span>],
              {"\n"} apiIntegration: [
              <span className="text-[#0d9488]">'REST'</span>,{" "}
              <span className="text-[#0d9488]">'GraphQL'</span>],
              {"\n"} stateManagement: [
              <span className="text-[#0d9488]">'Redux'</span>,{" "}
              <span className="text-[#0d9488]">'Zustand'</span>],
              {"\n"} databases: [
              <span className="text-[#0d9488]">'PostgreSQL'</span>,{" "}
              <span className="text-[#0d9488]">'MongoDB'</span>],
              {"\n"} performance: <span className="text-[#d97706]">true</span>,
              {"\n"} scalability: <span className="text-[#d97706]">true</span>,
              {"\n"}
              {"}"};
            </code>
          </pre>
          <div className="flex flex-wrap gap-2 pt-3.5 border-t border-(--color-border-soft)">
            <span className="px-3 py-1.5 text-[0.78rem] font-medium rounded-full bg-[rgb(108_92_231_/_0.1)] text-(--color-brand-deep)">
              Microservices
            </span>
            <span className="px-3 py-1.5 text-[0.78rem] font-medium rounded-full bg-[rgb(108_92_231_/_0.1)] text-(--color-brand-deep)">
              Performance
            </span>
            <span className="px-3 py-1.5 text-[0.78rem] font-medium rounded-full bg-[rgb(108_92_231_/_0.1)] text-(--color-brand-deep)">
              Design Systems
            </span>
          </div>
        </div>

        <div className="absolute -inset-10 z-[1] blur-[40px] opacity-85 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(124_92_255_/_0.35)_0%,rgb(124_92_255_/_0)_70%)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
