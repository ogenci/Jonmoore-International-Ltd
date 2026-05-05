import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { GSAPReveal } from "./GSAPReveal";

const stats = [
  { value: 25, suffix: "+", label: "Years operating since 1998" },
  { value: 600, suffix: "t", label: "Lift capacity in-house" },
  { value: 157, suffix: "", label: "Specialists across the team" },
  { value: 2400, suffix: "m²", label: "Open yard storage" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {n.toLocaleString()}
      <span className="text-[0.6em] ml-1">{suffix}</span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="relative border-y border-border/10 bg-surface/50 py-24 md:py-32">
      <div className="container-edge">
        <GSAPReveal>
          <span className="eyebrow">Track record</span>
        </GSAPReveal>
        <GSAPReveal stagger={0.12} className="mt-10 grid gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="border-t border-border/20 pt-6">
              <div className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-none tracking-tight whitespace-nowrap">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm text-foreground/70 font-medium">{s.label}</p>
            </div>
          ))}
        </GSAPReveal>
      </div>
    </section>
  );
};
