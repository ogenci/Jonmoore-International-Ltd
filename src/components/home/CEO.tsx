import { Reveal } from "./Reveal";

export const CEO = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-background">
      <div className="container-edge">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
                <img
                  src="/ceo.jpg"
                  alt="Hilton John Mitchell, CEO"
                  className="w-full h-full object-cover grayscale-[10%] brightness-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </Reveal>
            <div 
              aria-hidden 
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-primary/20 bg-primary/5 blur-3xl"
            />
          </div>
          
          <div>
            <Reveal delay={0.1}>
              <span className="eyebrow">Leadership</span>
            </Reveal>
            
            <Reveal delay={0.2}>
              <blockquote className="mt-8">
                <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2] text-foreground tracking-tight text-balance">
                  "When we founded Jonmoore in 1998, we saw a gap in West Africa for truly reliable, precision-engineered heavy logistics. We didn't just want to move cargo; we wanted to provide peace of mind for the most complex projects on the continent."
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col">
                <span className="font-display text-2xl text-primary">Hilton John Mitchell</span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-bold">
                  Chief Executive Officer
                </span>
                
                <svg viewBox="0 0 200 60" className="mt-6 h-12 w-auto opacity-30" aria-hidden>
                  <path d="M10 45 Q25 10 40 35 T70 25 Q85 15 95 30 T120 20 Q135 10 150 30 T180 25 Q190 20 195 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
