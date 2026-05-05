import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MagneticButton } from "@/components/home/MagneticButton";
import { Reveal } from "@/components/home/Reveal";

const values = [
  {
    n: "01",
    title: "Safety First",
    desc: "Zero compromise. Our ISO 45001 certified operations have achieved over 1.2 million man-hours without a lost-time incident. Every crew member, every crane lift, every convoy — safety is engineered in, not bolted on.",
  },
  {
    n: "02",
    title: "In-House Ownership",
    desc: "We don't subcontract the critical parts. Our fleet, our crews, our engineers. This means accountability stays with one team from quote to completion — no finger-pointing when timelines get tight.",
  },
  {
    n: "03",
    title: "Precision Engineering",
    desc: "Route surveys, structural assessments, lift studies — we engineer every move before wheels turn. This upfront rigour is what eliminates the surprises that derail budgets and schedules.",
  },
  {
    n: "04",
    title: "Community Partnership",
    desc: "Through initiatives like our Smile4Ghana dental outreach in Akim-Achiase, we invest directly in the communities along the corridors we operate. Logistics that lift more than cargo.",
  },
];

const milestones = [
  { year: "1998", event: "Founded in Tema, Ghana by Hilton John Mitchell with a single low-loader and a vision for world-class West African logistics." },
  { year: "2005", event: "Expanded to Takoradi to support the growing mining and oil & gas sectors in the Western Region." },
  { year: "2010", event: "Acquired first 600-ton crawler crane — the largest privately-owned lifting capacity in Ghana." },
  { year: "2015", event: "Formed JILMEC joint venture with Mansa Engineering and MODEC for specialized offshore logistics." },
  { year: "2018", event: "Achieved triple ISO certification: 9001 (Quality), 14001 (Environmental), and 45001 (Health & Safety)." },
  { year: "2022", event: "Became the first African partner in BigMove Europe's premier heavy-haulage alliance." },
];

const certifications = [
  { name: "ISO 9001:2015", scope: "Quality Management Systems" },
  { name: "ISO 14001:2015", scope: "Environmental Management Systems" },
  { name: "ISO 45001:2018", scope: "Occupational Health & Safety" },
  { name: "BigMove Member", scope: "European Heavy Haulage Alliance" },
];

const AboutPage = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
      <CustomCursor />
      <Nav />
      <main>
        {/* Hero Section */}
        <section ref={parallaxRef} className="relative h-[75vh] flex flex-col justify-end pb-24 bg-foreground text-background overflow-hidden isolate">
          <motion.div aria-hidden className="absolute inset-0 -z-20" style={{ y: heroY }}>
            <img src="https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg" className="w-full h-full object-cover scale-110" alt="" />
          </motion.div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div aria-hidden className="absolute inset-0 -z-10 bg-primary/5" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

          <div className="container-edge relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">About Jonmoore</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white max-w-5xl text-balance">
              Built for the jobs<br /><span className="italic text-white/80">nobody else will take.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              We are a Transport and Project Logistics Company offering Specialized and Standard Transport services in Ghana and the West-African sub-region.
            </motion.p>
          </div>
        </section>

        {/* ── Our Story (first) ── */}
        <section className="container-edge py-24 md:py-40">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <div>
              <Reveal><span className="eyebrow">Our Story</span></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
                  25+ years of moving<br /><em className="italic text-foreground/70">what matters most.</em>
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6">
              <Reveal delay={0.1}><p className="text-lg leading-relaxed text-foreground/70">Founded in 1998 by Hilton John Mitchell, Jonmoore International began with a single conviction: West Africa deserved a logistics partner that could match global standards of safety, reliability, and engineering precision.</p></Reveal>
              <Reveal delay={0.15}><p className="text-lg leading-relaxed text-foreground/70">From a single low-loader operating out of Tema, we've grown into the region's most trusted heavy-haulage and project logistics company — with 157 specialists, a fleet of cranes reaching 600-ton capacity, and operations spanning Ghana, Côte d'Ivoire, Burkina Faso, and beyond.</p></Reveal>
              <Reveal delay={0.2}><p className="text-lg leading-relaxed text-foreground/70">Today, headquartered at No. 1a Publishing Road in Tema with a second base in Takoradi, we serve the mining, oil & gas, energy, and construction sectors with six fully in-house disciplines — ensuring every project has one accountable team from quote to completion.</p></Reveal>
            </div>
          </div>
        </section>

        {/* ── Headquarters (below story) ── */}
        <section className="container-edge pb-24 md:pb-40">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <Reveal><span className="eyebrow">Headquarters</span></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
                  Two strategic locations.<br /><em className="italic text-foreground/70">One unified operation.</em>
                </h2>
              </Reveal>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border/10 bg-surface/30 p-8">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-primary">Tema</span>
                  <p className="mt-4 font-display text-xl">Head Office</p>
                  <p className="mt-3 text-sm leading-loose text-foreground/60">No. 1a Publishing Road<br />P.O. Box CO 614<br />Tema, Ghana</p>
                  <div className="mt-6 pt-6 border-t border-border/10 space-y-2">
                    <p className="text-sm text-foreground/70">+233 (0)20 139 6339</p>
                    <p className="text-sm text-foreground/70">solutions@jonmoore.com.gh</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-border/10 bg-surface/30 p-8">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-primary">Takoradi</span>
                  <p className="mt-4 font-display text-xl">Western Region Base</p>
                  <p className="mt-3 text-sm leading-loose text-foreground/60">Harbour Commercial Area<br />Western Region<br />Ghana</p>
                  <div className="mt-6 pt-6 border-t border-border/10 space-y-2">
                    <p className="text-sm text-foreground/70">+233 (0)20 226 7919</p>
                    <p className="text-sm text-foreground/70">solutions@jonmoore.com.gh</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="relative py-24 md:py-40 overflow-hidden isolate">
          <div aria-hidden className="absolute inset-0 -z-20">
            <img src="https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/80" />
          <div className="container-edge relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">Certifications</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-white max-w-3xl mb-16 text-balance">
                Internationally certified.<br /><span className="italic text-white/70">Globally trusted.</span>
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                    <span className="font-display text-3xl text-white">{cert.name}</span>
                    <p className="mt-4 text-sm text-white/60">{cert.scope}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values Grid ── */}
        <section className="bg-surface/30 py-24 md:py-40 border-y border-border/10">
          <div className="container-edge">
            <Reveal><span className="eyebrow">Our Principles</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 mb-16 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight max-w-3xl text-balance">
                The standards that define<br /><em className="italic text-foreground/70">every operation.</em>
              </h2>
            </Reveal>
            <div className="grid gap-px overflow-hidden border border-border/10 bg-border/10 md:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <article className="group relative flex h-full flex-col bg-background p-10 md:p-14 transition-colors duration-500 hover:bg-surface/80">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-xl text-primary">{v.n}</span>
                    <h3 className="mt-8 font-display text-3xl leading-tight">{v.title}</h3>
                    <p className="mt-4 text-foreground/65 leading-relaxed">{v.desc}</p>
                    <div aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Journey — Horizontal scroll-reveal timeline ── */}
        <section className="py-24 md:py-40">
          <div className="container-edge">
            <Reveal><span className="eyebrow">Our Journey</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 mb-20 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight max-w-3xl text-balance">
                Every milestone earned,<br /><em className="italic text-foreground/70">one project at a time.</em>
              </h2>
            </Reveal>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div aria-hidden className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/15 md:-translate-x-px" />

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={m.year} delay={i * 0.08}>
                    <div className={`relative flex items-start gap-8 md:gap-0 mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Content */}
                      <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                        <div className={`inline-flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <span className="font-display text-4xl md:text-5xl text-primary/80">{m.year}</span>
                        </div>
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">{m.event}</p>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 z-10">
                        <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                      </div>

                      {/* Spacer for other side */}
                      <div className="hidden md:block flex-1 md:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
