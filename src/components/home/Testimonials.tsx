import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";

const quotes = [
  {
    headline: "Delivered a 380-ton transformer ahead of schedule, through the rainy season.",
    body: "We've worked with logistics partners across three continents. Jonmoore is the only one who calls before there's a problem, not after.",
    name: "Operations Director",
    org: "Energy sector client, Tema",
  },
  {
    headline: "The quote held. The timeline held. So did everything in the convoy.",
    body: "Their PM was on the phone at 4am when our customs window opened early. That kind of accountability is rare in this region.",
    name: "Project Lead",
    org: "International EPC contractor",
  },
  {
    headline: "From port clearance to final mile, every detail handled without escalation.",
    body: "We sent them our most complex offshore module and they returned a delivery report tighter than our own internal audit. We've stopped tendering this category.",
    name: "Supply Chain Manager",
    org: "Offshore oil & gas operator",
  },
];

const partners = [
  "BigMove",
  "MODEC",
  "JILMEC",
  "TRACE",
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
];

export const Testimonials = () => {
  return (
    <section id="about" className="border-y border-border/10 bg-surface/40 py-20 md:py-40">
      <div className="container-edge">
        <Reveal>
          <span className="eyebrow">In their words</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
            The clients who hire us once <em className="italic text-foreground/70">tend to stay for a decade.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border/15 bg-background p-8 shadow-[0_1px_0_0_hsl(var(--border)/0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_hsl(var(--primary)/0.4)] md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <Quote className="h-8 w-8 text-primary/70" strokeWidth={1.4} aria-hidden />

                <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" strokeWidth={1.4} />
                  ))}
                </div>

                <blockquote className="relative mt-5">
                  <p className="font-display text-xl leading-snug md:text-[1.6rem]">
                    &ldquo;{q.headline}&rdquo;
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/65">{q.body}</p>
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-4 border-t border-border/10 pt-6 text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display text-primary">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display text-base">{q.name}</span>
                    <span className="block text-xs text-foreground/55">{q.org}</span>
                  </span>
                </figcaption>

                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border/10 pb-6 sm:flex-row sm:items-end sm:gap-6">
              <div>
                <span className="eyebrow">Trusted partners & certifications</span>
                <h3 className="mt-4 font-display text-2xl leading-tight md:text-3xl">
                  The credentials behind every shipment.
                </h3>
              </div>
              <span className="font-display text-xs tracking-widest text-foreground/40 sm:text-sm">
                {String(partners.length).padStart(2, "0")} / endorsements
              </span>
            </div>

            <ul className="mt-2 grid grid-cols-2 gap-px overflow-hidden border-b border-border/10 bg-border/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {partners.map((p) => (
                <li
                  key={p}
                  className="group relative flex h-24 items-center justify-center bg-background px-4 transition-colors duration-500 hover:bg-surface/80"
                >
                  <span className="font-display text-xl text-foreground/55 transition-all duration-500 group-hover:scale-105 group-hover:text-foreground md:text-[22px]">
                    {p}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-4 bottom-3 h-px origin-left scale-x-0 bg-primary/70 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
