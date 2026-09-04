"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  speed?: number;
  max?: number;
  className?: string;
  children: React.ReactNode;
};

export default function Parallax({
  speed = 0.15,
  max = 60,
  className = "",
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elCenter = rect.top + rect.height / 2;
      const raw = (viewportCenter - elCenter) * speed;
      const offset = Math.max(-max, Math.min(max, raw));
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, max]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
