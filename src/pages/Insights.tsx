import { motion } from "framer-motion";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Reveal } from "@/components/home/Reveal";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Awards & Achievements",
    date: "September 2022",
    title: "BigMove adds Jonmoore to roster",
    excerpt: "BigMove, a European association of heavy haulage logistics companies, has broadened its scope to Africa with the addition of Jonmoore International as a partner.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg",
    featured: true,
  },
  {
    category: "News Room",
    date: "May 2023",
    title: "Smile4Ghana dental outreach in Akim-Achiase",
    excerpt: "Smile4Ghana, a registered charity organisation from the United Kingdom and its logistics partner Jonmoore International undertake a three-day dental outreach programme.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/P1070327.jpg",
    featured: false,
  },
  {
    category: "Expert Project Handling",
    date: "January 2022",
    title: "'MOORE OIL, 'MOORE GAS.",
    excerpt: "Jonmoore International was contracted on a project to transport specialized cargo over a 10km distance from the Tema Port to the construction site of a new Oil processing facility.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/04/1.jpg",
    featured: false,
  },
  {
    category: "Heavy & Abnormal",
    date: "November 2021",
    title: "Making the right choice",
    excerpt: "Jonmoore International continues to provide services to meet the varying needs of clients. Our Special Transport, utilizing modular solutions can be configured from 5-axle lines.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/INTERNATIONAL-FREIGHT-FORWARDING.jpg",
    featured: false,
  },
  {
    category: "Expert Project Handling",
    date: "April 2021",
    title: "Exceptional services in Oil and Gas",
    excerpt: "The oil and gas industry is a good contributor to Ghana's economy making up an enviable percentage of exports leaving the shores of Ghana.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/Cranes-9.jpg",
    featured: false,
  },
  {
    category: "News Room",
    date: "March 2021",
    title: "Heavy transport of dump trucks",
    excerpt: "Jonmoore was recommended by a transport company in Greece by one of the shipping lines in Ghana. This company had just won a bid for heavy dump truck delivery.",
    img: "https://jonmoore.com.gh/wp-content/uploads/2019/03/WAREHOUSING-AND-STORAGE-1024x532.png",
    featured: false,
  },
];

const InsightsPage = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
      <CustomCursor />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative h-[75vh] flex flex-col justify-end pb-24 bg-foreground text-background overflow-hidden isolate">
          <div aria-hidden className="absolute inset-0 -z-20">
            <img src="https://jonmoore.com.gh/wp-content/uploads/2019/03/INTERNATIONAL-FREIGHT-FORWARDING.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div aria-hidden className="absolute inset-0 -z-10 bg-primary/5" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

          <div className="container-edge relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">News & Insights</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white max-w-5xl text-balance">
              Industry updates<br /><span className="italic text-white/80">& company news.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              Stay informed on our latest projects, industry recognition, and the innovations driving West African logistics forward.
            </motion.p>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="container-edge py-24 md:py-40">
            <Reveal>
              <article className="group relative grid md:grid-cols-2 gap-0 overflow-hidden rounded-[32px] border border-border/10 bg-surface/30 shadow-lg cursor-pointer">
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold text-white">Featured</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-10 md:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] uppercase tracking-widest text-primary font-bold">{featured.category}</span>
                    <span className="text-foreground/30">·</span>
                    <span className="text-[11px] uppercase tracking-widest text-foreground/50">{featured.date}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="mt-6 text-foreground/65 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-foreground/60 group-hover:text-primary transition-colors">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
                  </div>
                </div>
              </article>
            </Reveal>
          </section>
        )}

        {/* Article Grid */}
        <section className="container-edge pb-24 md:pb-40">
          <div className="flex items-center justify-between mb-16">
            <Reveal>
              <span className="eyebrow">All Articles</span>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.08}>
                <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border/10 bg-background transition-all duration-500 hover:shadow-xl hover:border-border/20 cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] uppercase tracking-widest text-primary font-bold">{article.category}</span>
                      <span className="text-foreground/30">·</span>
                      <span className="text-[11px] uppercase tracking-widest text-foreground/50">{article.date}</span>
                    </div>
                    <h3 className="font-display text-2xl leading-tight tracking-tight group-hover:text-primary transition-colors duration-500">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm text-foreground/60 leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="mt-6 pt-6 border-t border-border/5 flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-foreground/50 group-hover:text-primary transition-colors">
                      Read more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default InsightsPage;
