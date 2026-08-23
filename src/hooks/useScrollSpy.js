import { useEffect, useState } from "react";

/**
 * useScrollSpy - tracks which section is currently in view so the
 * navbar can highlight the active link.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
