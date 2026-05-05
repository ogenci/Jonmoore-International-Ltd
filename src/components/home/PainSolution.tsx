import { Reveal } from "./Reveal";

const pains = [
  "Cargo delayed at the port and nobody returns the call.",
  "“Heavy lift specialists” who tap out at 200 tons.",
  "Customs paperwork bouncing between three contractors.",
  "Equipment that arrives bent, scratched, or short on parts.",
];

const solutions = [
  "Single accountable project manager from quote to delivery.",
  "Up to 600-ton lift in-house no scrambling for capacity.",
  "End-to-end freight forwarding under one roof.",
  "ISO-certified handling. 25 years. Reputation we won't risk.",
];

export const PainSolution = () => {
  return (
    <section className="container-edge py-20 md:py-40">
      <Reveal>
        <span className="eyebrow">The honest version</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
          Most logistics partners are great <em className="italic text-foreground/70">until something goes wrong.</em>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-24">
        <Reveal delay={0.05}>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">What you've lived through</h3>
          <ul className="mt-6 space-y-5">
            {pains.map((p) => (
              <li
                key={p}
                className="border-t border-border/10 pt-5 font-display text-xl leading-snug text-foreground/85 md:text-2xl"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-primary/90">The Jonmoore answer</h3>
          <ul className="mt-6 space-y-5">
            {solutions.map((s, i) => (
              <li
                key={s}
                className="flex gap-5 border-t border-border/10 pt-5"
              >
                <span className="mt-1 font-display text-sm text-primary">0{i + 1}</span>
                <span className="font-display text-xl leading-snug text-foreground md:text-2xl">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
