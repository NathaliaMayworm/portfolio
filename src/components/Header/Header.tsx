import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../../data/navigation";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useTheme } from "../../hooks/useTheme";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

const navLinkBase =
  "inline-flex items-center px-3.5 py-2 rounded-full text-[0.92rem] font-medium text-(--color-ink-soft) transition-colors duration-200 ease-soft hover:text-(--color-ink) hover:bg-[rgb(108_92_231_/_0.08)] focus-ring";
const navLinkActive = "text-(--color-brand-deep) bg-[rgb(108_92_231_/_0.1)]";

const themeToggleClass =
  "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(108_92_231_/_0.08)] text-(--color-brand-deep) transition-colors duration-200 ease-soft hover:bg-[rgb(108_92_231_/_0.16)] focus-ring";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] flex items-center transition-[background,border-color,backdrop-filter,box-shadow] duration-300 ease-soft border-b ${
        scrolled
          ? "glass border-(--color-border-soft) shadow-soft-sm"
          : "border-transparent"
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page flex items-center gap-6">
        <a
          href="#hero"
          className="inline-flex items-center gap-3 font-display font-bold text-(--color-ink) focus-ring"
          aria-label="Início"
        >
          <span className="inline-grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-brand text-white text-xs font-extrabold tracking-wider shadow-glow">
            NK
          </span>
          <span className="hidden xs:inline text-base tracking-tight">
            Nathália Mayworm
            <span className="text-(--color-brand-deep) ml-1.5">Kapps</span>
          </span>
        </a>

        <nav className="hidden lg:block ml-auto mr-3" aria-label="Principal">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${navLinkBase} ${isActive ? navLinkActive : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          className={`hidden lg:inline-flex ${themeToggleClass}`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center px-[18px] py-2.5 rounded-full font-semibold text-[0.92rem] text-white bg-gradient-brand shadow-soft-sm transition-[transform,box-shadow,filter] duration-200 ease-soft hover:-translate-y-px hover:shadow-glow hover:brightness-105 focus-ring"
        >
          Vamos conversar
        </a>

        <div className="lg:hidden ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            className={themeToggleClass}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={themeToggleClass}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-[72px] inset-x-0 px-5 pt-4 pb-6 glass border-b border-(--color-border-soft) shadow-soft-md"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-base font-medium text-(--color-ink) transition-colors duration-200 ease-soft hover:bg-[rgb(108_92_231_/_0.08)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-4 py-3.5 rounded-xl text-base font-semibold text-center text-white bg-gradient-brand"
                >
                  Vamos conversar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
