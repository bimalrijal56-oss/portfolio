import { useEffect, useState, useRef } from "react";

/**
 * useScrollSpy - tracks which section is currently in view so the
 * navbar can highlight the active link. Optimized with requestAnimationFrame
 * to eliminate layout thrashing during scroll.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");
  const activeIdRef = useRef(sectionIds[0] || "");

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let current = sectionIds[0] || "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      if (current !== activeIdRef.current) {
        activeIdRef.current = current;
        setActiveId(current);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [JSON.stringify(sectionIds), offset]);

  return activeId;
}
