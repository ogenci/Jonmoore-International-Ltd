import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Heavy & Abnormal Transport",
    desc: "Specialised low-loaders, hydraulic trailers and pilot escorts moving the cargo nobody else will quote on across Ghana and the West African corridor.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg",
  },
  {
    n: "02",
    title: "Cranes & Heavy Lift",
    desc: "Lifting, jacking and skidding solutions up to 600 tons. Crawler, mobile, rough-terrain owned, maintained, and operated by certified crews.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/Cranes-9.jpg",
  },
  {
    n: "03",
    title: "Expert Project Handling",
    desc: "Mining, oil & gas, energy, construction. One accountable PM from feasibility to final mile, working around the clock through every complication.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg",
  },
  {
    n: "04",
    title: "International Freight Forwarding",
    desc: "Multimodal, end-to-end. Air, sea, road. Real-time 24-hour cargo tracking through partners across major ports and global commercial zones.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/INTERNATIONAL-FREIGHT-FORWARDING.jpg",
  },
  {
    n: "05",
    title: "Offshore Logistics & Engineering",
    desc: "Through JILMEC our JV with Mansa Engineering and MODEC delivering world-class offshore logistics, engineering and warehousing for oil & gas.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/04/1.jpg",
  },
  {
    n: "06",
    title: "Warehousing & Storage",
    desc: "2,400 m² of secured open yard plus 2,100 cbm of multi-purpose warehousing across Tema and Takoradi managed with full inventory technology.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/WAREHOUSING-AND-STORAGE-1024x532.png",
  },
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="container-edge py-20 md:py-40">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
            Six disciplines.
            <br />
            <em className="italic text-foreground/70">One accountable team.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5">
          <p className="text-pretty text-foreground/70 md:text-lg">
            We don't subcontract the difficult parts. Every service below is owned and operated in-house which is why our quote is the one that holds.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden border border-border/10 bg-border/10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="group relative flex h-full flex-col bg-background p-7 md:p-8">
              <div className="flex items-start justify-between">
                <span className="font-display text-xs text-primary">{s.n}</span>
                <ArrowUpRight
                  className="h-4 w-4 text-foreground/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  strokeWidth={1.6}
                />
              </div>

              <div className="relative mt-6 aspect-[5/3] overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full scale-[1.02] object-cover grayscale-[35%] brightness-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.08] group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <h3 className="mt-7 font-display text-2xl leading-tight md:text-[1.65rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
