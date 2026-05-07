import { useEffect, useState } from 'react';

export const useScrollSpy = (ids: string[], offset = 120) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActiveId(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);

  return activeId;
};
