import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Brief",
    body: "Tell us the cargo, the route, the deadline. We respond within 24 hours with a clear, line-itemed quote never a vague estimate.",
  },
  {
    n: "02",
    title: "Plan",
    body: "A dedicated PM maps the corridor, permits, escorts, and lift plan. You see one document. We coordinate the rest.",
  },
  {
    n: "03",
    title: "Execute",
    body: "ISO-certified crews, owned fleet, real-time tracking. If something shifts, you get a call before you have to make one.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Cargo intact. Paperwork closed. Debrief in writing. The kind of finish that turns one job into a decade of repeat work.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="container-edge py-20 md:py-40">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight">
            From brief to delivery <em className="italic text-foreground/70">no surprises.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5">
          <p className="text-foreground/70 md:text-lg">
            A repeatable, transparent process is what lets us promise on-time, intact delivery and back it.
          </p>
        </Reveal>
      </div>

      <ol className="mt-12 grid gap-px overflow-hidden border border-border/10 bg-border/10 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <li className="flex h-full flex-col bg-background p-7 md:p-8">
              <span className="font-display text-xs text-primary">{s.n}</span>
              <h3 className="mt-8 font-display text-3xl leading-tight">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};
