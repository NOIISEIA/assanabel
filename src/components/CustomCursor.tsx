"use client";

import { useEffect, useRef } from "react";
import "./custom-cursor.css";

/**
 * Rond bronze qui suit la souris (même comportement que les pages maison /traiteur…).
 * Inactif sur tactile / pointeur coarse et si prefers-reduced-motion.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cur = ref.current;
    const lab = labelRef.current;
    if (!fine || reduce || !cur || !lab) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let dead = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      cur.classList.add("show");
    };
    const onLeave = () => cur.classList.remove("show");
    const onOver = (e: PointerEvent) => {
      const t = (e.target as Element | null)?.closest?.("[data-cursor]");
      if (t instanceof HTMLElement && t.dataset.cursor) {
        lab.textContent = t.dataset.cursor;
        cur.classList.add("big");
      } else {
        cur.classList.remove("big");
      }
    };

    const loop = () => {
      if (dead) return;
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      cur.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div className="assanabel-cursor" ref={ref} aria-hidden="true">
      <span ref={labelRef} />
    </div>
  );
}
