import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";
import award1 from "@/assets/award-1.png";
import award2 from "@/assets/award-2.png";
import award3 from "@/assets/award-3.png";
import award4 from "@/assets/award-4.png";

const awards = [
  {
    image: award1,
    year: "2023",
    title: "BigMove Excellence Award",
    org: "BigMove International Network",
    note: "Recognised for category-defining heavy haulage execution in West Africa.",
  },
  {
    image: award2,
    year: "2022",
    title: "Logistics Operator of the Year",
    org: "Ghana Shippers' Authority",
    note: "Awarded for sustained on-time delivery across complex offshore projects.",
  },
  {
    image: award3,
    year: "2021",
    title: "Safety Performance Distinction",
    org: "ISO 45001 Audit Body",
    note: "Zero lost-time incidents across 1.2M+ man-hours on heavy lift operations.",
  },
  {
    image: award4,
    year: "2020",
    title: "Outstanding Project Delivery",
    org: "MODEC / JILMEC Joint Venture",
    note: "Honoured for the FPSO module transport, delivered ahead of schedule.",
  },
];

export const Awards = () => {
  return (
    <section
      aria-label="Awards and recognition"
      className="relative overflow-hidden border-b border-border/10 bg-surface/30 py-20 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-vignette)" }}
      />

      <div className="container-edge relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Recognition</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
                Awarded for the work that{" "}
                <em className="italic text-foreground/70">few dare to attempt.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex max-w-sm flex-col gap-6 md:items-end md:text-right">
              <p className="text-foreground/60">
                Two and a half decades of execution, recognised across industry bodies, partners, and regulators.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                See all awards
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border/10 bg-border/10 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col bg-background p-8 transition-colors duration-500 hover:bg-surface/80 md:p-10">
                <div className="flex items-start justify-between">
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                    />
                    <img
                      src={a.image}
                      alt={a.title}
                      width={512}
                      height={512}
                      loading="lazy"
                      className="relative h-20 w-20 object-contain transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-display text-sm tracking-widest text-foreground/50">{a.year}</span>
                </div>

                <h3 className="mt-10 font-display text-2xl leading-tight md:text-[28px]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-primary/80">
                  {a.org}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/60">
                  {a.note}
                </p>

                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
