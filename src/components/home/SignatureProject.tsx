import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export const SignatureProject = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-20 md:py-40">
      <div className="container-edge grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
            <motion.img
              src="https://i0.wp.com/jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg?w=1800&ssl=1"
              alt="Jonmoore heavy haulage convoy at the depot"
              loading="lazy"
              style={reduce ? undefined : { y, scale }}
              className="h-full w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="md:col-span-5 md:pl-6 lg:pl-12">
          <Reveal>
            <span className="eyebrow">Signature work</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-light leading-[1.05] tracking-tight text-balance">
              Added to the BigMove roster Africa's first.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-foreground/70 md:text-lg">
              In 2022, BigMove Europe's premier heavy-haulage alliance extended its network into Africa with a single partner: Jonmoore International. It's the kind of vetting we earned one project at a time, by quietly delivering when the alternative was a phone call no client wanted to make.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-border/10 pt-6 text-sm">
              <div>
                <dt className="text-foreground/55">Region</dt>
                <dd className="mt-1 font-display text-lg">West Africa</dd>
              </div>
              <div>
                <dt className="text-foreground/55">Network</dt>
                <dd className="mt-1 font-display text-lg">BigMove · MODEC · MPSG</dd>
              </div>
              <div>
                <dt className="text-foreground/55">Sectors</dt>
                <dd className="mt-1 font-display text-lg">Mining · Oil & Gas · Energy</dd>
              </div>
              <div>
                <dt className="text-foreground/55">Headquartered</dt>
                <dd className="mt-1 font-display text-lg">Tema · Takoradi</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/projects" variant="ghost">
                Explore all projects
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
