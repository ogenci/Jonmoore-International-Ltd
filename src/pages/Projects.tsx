import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MagneticButton } from "@/components/home/MagneticButton";

const projects = [
  {
    year: "2022",
    title: "BigMove Europe Integration",
    client: "BigMove Alliance",
    category: "Strategic Partnership",
    desc: "Becoming the first and only African partner in BigMove Europe's premier heavy-haulage network. This rigorous vetting process involved extensive audits of our HSE standards, fleet maintenance, and engineering capabilities.",
    impact: "Elevated West African logistics standards, providing European clients with a trusted, compliant partner for direct end-to-end heavy haulage into the continent. Reduced multi-vendor coordination risks significantly.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg",
  },
  {
    year: "2021",
    title: "FPSO Offshore Support",
    client: "MODEC",
    category: "Offshore Logistics",
    desc: "Comprehensive offshore logistics and engineering support for MODEC's FPSO vessels operating in Ghanaian waters, delivered through our specialized JILMEC joint venture.",
    impact: "Ensured zero operational downtime for offshore rigs through rapid, 24/7 supply vessel coordination and rigorous inventory management. Improved overall safety compliance across all transferred materials.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/04/1.jpg",
  },
  {
    year: "2020",
    title: "Mining Equipment Relocation",
    client: "Confidential",
    category: "Heavy Transport",
    desc: "End-to-end relocation of oversized mining processing equipment across challenging terrain. Required comprehensive route surveys, civil works to reinforce bridges, and multi-trailer hydraulic transport.",
    impact: "Delivered the massive components 14 days ahead of the critical-path schedule. The proactive route engineering prevented costly detours, saving the client over $400k in potential transit delays.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg",
  },
  {
    year: "2019",
    title: "Port Infrastructure Expansion",
    client: "GPHA",
    category: "Cranes & Heavy Lift",
    desc: "Heavy lifting and placement of critical port infrastructure components using our 600-ton capacity crawler cranes, executed safely alongside active port traffic.",
    impact: "Enabled the port to expand its cargo throughput capacity without halting daily operations. Our precision jacking and skidding methodology ensured zero safety incidents in a high-risk zone.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/Cranes-9.jpg",
  },
  {
    year: "2018",
    title: "Cross-Border Commercial Freight",
    client: "Regional Importers",
    category: "Freight Forwarding",
    desc: "End-to-end management of complex, multi-modal supply chains connecting global manufacturing hubs to deep inland West African commercial centers.",
    impact: "Streamlined the customs clearance process and reduced overall transit times by 20%, ensuring critical supply chains remained unbroken during regional peak seasons.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/INTERNATIONAL-FREIGHT-FORWARDING.jpg",
  },
  {
    year: "2016",
    title: "Oil Refinery Module Transport",
    client: "Tema Oil Refinery",
    category: "Heavy & Abnormal Transport",
    desc: "Transportation of specialized refinery processing modules over a 10km route from Tema Port to the construction site of a new oil processing facility — through dense urban areas requiring overnight road closures and police coordination.",
    impact: "Completed the multi-phase transport in 3 overnight windows with zero community disruption complaints. Our meticulous route planning and stakeholder communication became the reference standard for future urban abnormal loads in the Greater Accra region.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/WAREHOUSING-AND-STORAGE-1024x532.png",
  }
];

const ProjectRow = ({ project, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="py-24 md:py-32 border-t border-border/10 overflow-hidden">
      <div className={`container-edge grid gap-12 md:gap-20 md:grid-cols-2 md:items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
        
        {/* Image Column */}
        <div className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[24px] shadow-2xl ${isEven ? '' : 'md:col-start-2'}`}>
          <motion.img 
            style={{ y, scale: 1.15 }}
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        {/* Content Column */}
        <div className={`flex flex-col ${isEven ? '' : 'md:col-start-1'}`}>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display text-3xl text-primary">{project.year}</span>
            <div className="h-px flex-1 bg-border/10" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/50 font-bold">{project.category}</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            {project.title}
          </h2>
          
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed text-pretty">
            {project.desc}
          </p>

          <div className="mt-8 bg-surface/50 rounded-xl p-6 border border-border/5">
            <h4 className="text-[11px] uppercase tracking-widest text-primary font-bold mb-3">Client Impact</h4>
            <p className="text-foreground/80 leading-relaxed text-sm">
              {project.impact}
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border/10 pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-foreground/40 font-bold mb-2">Client</dt>
              <dd className="font-display text-xl">{project.client}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-foreground/40 font-bold mb-2">Sector</dt>
              <dd className="font-display text-xl">{project.category}</dd>
            </div>
          </dl>

          <div className="mt-12">
            <MagneticButton href="/contact" variant="ghost">
              Discuss similar project
            </MagneticButton>
          </div>
        </div>

      </div>
    </div>
  );
};

const ProjectsPage = () => {
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
              src="https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg"
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
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white max-w-5xl text-balance"
            >
              Proven across the continent.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
            >
              From offshore oil & gas logistics to moving complete mining plants across the West African corridor, explore the projects that defined our reputation.
            </motion.p>
          </div>
        </section>

        {/* Projects List */}
        <section className="bg-background pt-10">
          {projects.map((project, i) => (
            <ProjectRow key={i} index={i} project={project} />
          ))}
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
