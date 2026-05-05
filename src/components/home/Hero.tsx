import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { RevealWords, Reveal } from "./Reveal";
import { GSAPReveal } from "./GSAPReveal";

// Royalty-free cinematic clip: heavy logistics truck in operation.
const VIDEO_SRC = "https://videos.pexels.com/video-files/2153243/2153243-uhd_2560_1440_25fps.mp4";
const POSTER = "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-background pt-24 md:pt-28"
    >
      {/* Video layer */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-0 -z-20"
      >
        {!reduce ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <img src={POSTER} alt="" className="h-full w-full object-cover" />
        )}
      </motion.div>

      {/* Overlays - Red Tinted */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-primary/5" />
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

      <motion.div style={{ opacity }} className="container-edge relative z-10 pb-10 md:pb-14">
        {/* Eyebrow */}
        <Reveal delay={0.1}>
          <span className="eyebrow text-white/80">Established 1998 · Tema · Takoradi</span>
        </Reveal>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(2.75rem,8.4vw,8.5rem)] font-light leading-[0.95] tracking-tight text-balance text-white"
        >
          Move the impossible
          <span className="block italic text-white/90">across West Africa.</span>
        </motion.h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:gap-10 md:grid-cols-12 md:items-end">
          <Reveal delay={0.4} className="md:col-span-6 lg:col-span-5">
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
              Tired of contractors who go quiet at the worst moment? For 25+ years, Jonmoore has delivered the cargo nobody else will touch (heavy, abnormal, offshore, time-critical) across Ghana and the wider sub-region.
            </p>
          </Reveal>

          <Reveal delay={0.55} className="md:col-span-6 lg:col-span-7">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center md:justify-end">
              <MagneticButton href="/contact">Request a Quote</MagneticButton>
              <a
                href="/capabilities"
                className="link-underline text-sm tracking-wide text-white/90 font-medium"
              >
                Explore capabilities
              </a>
            </div>
            <p className="mt-3 text-left text-[11px] uppercase tracking-[0.2em] text-white/60 sm:text-right">
              Free assessment · Reply within 24h · No obligation
            </p>
          </Reveal>
        </div>

        {/* Trust strip */}
        <GSAPReveal delay={0.8} stagger={0.1} className="mt-14 border-t border-white/10 pt-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm text-white/75 lg:grid-cols-4">
            {[
              ["25+", "Years operating"],
              ["600t", "Lift capacity"],
              ["157", "Specialists on staff"],
              ["ISO Certified", "9001 / 14001 / 45001"],
            ].map(([k, v]) => (
              <li key={v} className="flex flex-col gap-1 min-w-0">
                <span className="font-display text-3xl md:text-4xl text-white whitespace-nowrap">{k}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/65">{v}</span>
              </li>
            ))}
          </ul>
        </GSAPReveal>
      </motion.div>
    </section>
  );
};
