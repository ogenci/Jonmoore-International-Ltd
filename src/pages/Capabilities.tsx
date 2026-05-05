import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MagneticButton } from "@/components/home/MagneticButton";

const services = [
  {
    n: "01",
    title: "Heavy & Abnormal Transport",
    desc: "Specialised logistics solutions designed specifically for the most complex cargo. We manage entire route surveys, structural assessments, and the physical transportation of out-of-gauge items that standard carriers simply cannot handle.",
    features: ["Specialised low-loaders & hydraulic trailers", "Comprehensive route & bridge surveys", "Police & civil escort management", "Cross-border West African corridor access"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg",
    color: "bg-surface",
  },
  {
    n: "02",
    title: "Cranes & Heavy Lift",
    desc: "A completely in-house fleet of state-of-the-art lifting equipment, delivering unparalleled safety and precision. From standard mobile cranes to massive crawler cranes capable of lifting up to 600 tons in a single operation.",
    features: ["Lifting capacities from 25t to 600t", "Crawler, mobile, and rough-terrain cranes", "Jacking and skidding engineering", "Certified and strictly trained operators"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/Cranes-9.jpg",
    color: "bg-background",
  },
  {
    n: "03",
    title: "Expert Project Handling",
    desc: "Turnkey project logistics that remove the headache of multi-vendor coordination. We embed directly with your engineering teams to deliver seamless cargo flow for mining, energy, and large-scale infrastructure projects.",
    features: ["End-to-end Project Management (PM)", "Feasibility studies & budget forecasting", "Dedicated on-site logistics coordinators", "Compliance & HSSE risk mitigation"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg",
    color: "bg-surface",
  },
  {
    n: "04",
    title: "International Freight Forwarding",
    desc: "Global reach with local expertise. We navigate complex customs frameworks and manage multi-modal transportation networks to ensure your time-critical cargo arrives securely, efficiently, and exactly as planned.",
    features: ["Global air, sea, and road freight", "Real-time 24/7 cargo tracking", "Fast-tracked customs brokerage", "Dangerous goods & perishable handling"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/INTERNATIONAL-FREIGHT-FORWARDING.jpg",
    color: "bg-background",
  },
  {
    n: "05",
    title: "Offshore Logistics & Engineering",
    desc: "Delivering world-class support for the demanding oil and gas sector. Through our strategic joint ventures, we provide robust engineering, specialized offshore transport, and rapid emergency response capabilities.",
    features: ["Support vessel coordination", "Rig mobilization & demobilization", "Specialized offshore container supply", "Technical engineering via JILMEC JV"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/04/1.jpg",
    color: "bg-surface",
  },
  {
    n: "06",
    title: "Warehousing & Storage",
    desc: "Secure, highly-monitored facilities strategically located near major ports. We offer scalable storage solutions equipped with modern inventory systems to optimize your supply chain buffer and reduce port demurrage.",
    features: ["2,400 m² secured open yard space", "2,100 cbm of covered warehousing", "Digital inventory tracking systems", "Tema and Takoradi port proximity"],
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/WAREHOUSING-AND-STORAGE-1024x532.png",
    color: "bg-background",
  },
];

const Card = ({ i, title, desc, img, n, color, features, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 w-full">
      <motion.div
        style={{ scale, top: `calc(-10vh + ${i * 35}px)` }}
        className={`relative flex flex-col md:flex-row w-full h-[600px] md:h-[650px] rounded-[40px] p-8 md:p-14 origin-top ${color} border border-border/10 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.1)] gap-10 md:gap-16`}
      >
        <div className="w-full md:w-[45%] flex flex-col justify-between h-full z-10">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-xl text-primary">
                {n}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">Discipline</span>
            </div>
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">{desc}</p>
            {features && (
              <ul className="mt-8 space-y-3">
                {features.map((f: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <MagneticButton href="/contact" variant="ghost" className="mt-8 group-hover:bg-primary/5">
              Discuss requirement
            </MagneticButton>
          </div>
        </div>
        <div className="relative w-full md:w-[55%] h-full rounded-[24px] overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img src={img} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const CapabilitiesPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
      <CustomCursor />
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="relative h-[75vh] flex flex-col justify-end pb-24 bg-foreground text-background overflow-hidden isolate">
          {/* Background image */}
          <div aria-hidden className="absolute inset-0 -z-20">
            <img
              src="https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          {/* Overlays - Red Tinted */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div aria-hidden className="absolute inset-0 -z-10 bg-primary/5" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

          <div className="container-edge relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                Core Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white max-w-5xl"
            >
              Six disciplines.
              <br />
              <span className="italic text-white/80">One accountable team.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
            >
              We don't subcontract the difficult parts. Every service below is owned and operated
              in-house which is why our quote is the one that holds.
            </motion.p>
          </div>
        </section>

        {/* Overlapping Cards Section */}
        <section ref={container} className="relative mt-10 mb-40 container-edge">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.04;
            return (
              <Card
                key={i}
                i={i}
                {...service}
                progress={scrollYProgress}
                range={[i * 0.15, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
