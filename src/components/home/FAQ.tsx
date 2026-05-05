import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What kind of cargo do you actually handle?",
    a: "Heavy and abnormal loads up to 600 tons, project cargo for mining/oil & gas/energy/construction, containerised freight, offshore support equipment, and warehoused inventory. If it moves through West Africa, we've probably moved one before.",
  },
  {
    q: "Do you cover the wider West African region or only Ghana?",
    a: "We are headquartered in Tema and Takoradi and operate routinely across the wider West African sub-region including the corridor into Burkina Faso, Mali and Côte d'Ivoire through a long-established network of vetted partners.",
  },
  {
    q: "Do you own your fleet and lift equipment?",
    a: "Yes. We operate our own fleet of low-loaders and hydraulic trailers, and through our partnership with Paramount Transport & Trading we lead Ghana in cranes and heavy lift crawler, mobile, rough-terrain, telehandlers and more.",
  },
  {
    q: "What certifications do you hold?",
    a: "TRACE (anti-bribery due diligence), ISO 9001:2015 (quality), ISO 14001:2015 (environment), and ISO 45001:2018 (occupational health & safety). We are also a member of the BigMove heavy-haulage alliance.",
  },
  {
    q: "How fast will I hear back after requesting a quote?",
    a: "Within 24 hours on business days. For active port-side or time-critical work, often the same day. The quote you receive is line-itemed, not a vague estimate and it holds.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-edge py-20 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-light leading-[1.02] tracking-tight">
            Answered, <em className="italic text-foreground/70">honestly.</em>
          </h2>
          <p className="mt-6 text-foreground/65">
            Don't see yours? Ask us directly in the form below a real PM will read it.
          </p>
        </Reveal>

        <ul className="md:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <li className="border-b border-border/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-lg leading-snug md:text-2xl">{f.q}</span>
                    <span
                      className={
                        "mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/20 transition-all duration-500 " +
                        (isOpen ? "rotate-45 bg-primary text-primary-foreground border-primary" : "")
                      }
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-foreground/70 md:text-lg">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
