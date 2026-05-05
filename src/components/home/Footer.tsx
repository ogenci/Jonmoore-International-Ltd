import { ArrowUp, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background text-foreground overflow-hidden">
      {/* ── Large Typography Hero ── */}
      <div className="container-edge pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-6">Let's work together</p>
            <a 
              href="/contact" 
              className="group inline-block"
            >
              <span className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight text-foreground/90 transition-colors duration-500 group-hover:text-primary block">
                Get in touch
              </span>
              <span className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight text-foreground/15 italic block transition-colors duration-500 group-hover:text-foreground/30">
                today →
              </span>
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-foreground/10 transition-all duration-500 hover:bg-foreground hover:border-foreground self-start md:self-auto"
          >
            <ArrowUp className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-background" />
          </button>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container-edge">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* ── Links Row ── */}
      <div className="container-edge py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto_auto] md:gap-16 lg:gap-24">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/" className="inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-white font-display text-base">J</span>
              <span className="font-display text-lg tracking-tight text-foreground">Jonmoore International</span>
            </a>
            <p className="mt-5 text-[13px] leading-relaxed text-foreground/40">
              Heavy haulage, cranes, project logistics & freight forwarding across Ghana and West Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Li", full: "LinkedIn" },
                { label: "X", full: "Twitter" },
                { label: "Ig", full: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.full}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/[0.08] bg-foreground/[0.03] text-[10px] font-bold text-foreground/35 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground hover:border-foreground/15"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/25 font-bold mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-1 text-[13px] text-foreground/45 transition-colors duration-300 hover:text-foreground">
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/25 font-bold mb-5">Contact</p>
            <ul className="space-y-2.5 text-[13px] text-foreground/45">
              <li><a href="mailto:solutions@jonmoore.com.gh" className="transition-colors hover:text-foreground">solutions@jonmoore.com.gh</a></li>
              <li>+233 (0)20 139 6339</li>
              <li>+233 (0)20 226 7919</li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/25 font-bold mb-5">Offices</p>
            <ul className="space-y-4 text-[13px] text-foreground/45">
              <li>
                <span className="text-foreground/65">Tema</span>
                <br />No. 1a Publishing Road
              </li>
              <li>
                <span className="text-foreground/65">Takoradi</span>
                <br />Harbour Commercial Area
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom ── */}
      <div className="container-edge">
        <div className="h-px bg-foreground/[0.06]" />
      </div>
      <div className="container-edge py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-foreground/25">© {year} Jonmoore International Ltd. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[10px] tracking-[0.15em] uppercase text-foreground/20">
          <span>ISO 9001 · 14001 · 45001</span>
          <span className="h-3 w-px bg-foreground/10" />
          <span>BigMove Member</span>
        </div>
      </div>
    </footer>
  );
};
