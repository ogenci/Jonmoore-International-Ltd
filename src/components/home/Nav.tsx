import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 80);
    });
  }, [scrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-2 lg:pt-6"
        )}
      >
        <div className="container-edge">
          <motion.nav
            className={cn(
              "flex h-16 items-center justify-between transition-all duration-700",
              scrolled
                ? "rounded-full border border-white/20 bg-white/80 shadow-2xl backdrop-blur-2xl px-3 w-full max-w-[900px] mx-auto"
                : "w-full border border-white/10 bg-transparent rounded-full px-4 lg:border-transparent lg:bg-transparent lg:rounded-none lg:px-0"
            )}
          >
            {/* Logo */}
            <motion.a layout href="/" className="flex items-center gap-2 group shrink-0">
              <img
                src="/logo.png"
                alt="Jonmoore International Logo"
                className={cn(
                  "w-auto object-contain transition-all duration-700",
                  scrolled
                    ? "h-10 [mix-blend-mode:multiply] opacity-90"
                    : "h-10 lg:h-16 brightness-0 invert opacity-100"
                )}
              />
            </motion.a>

            {/* Links */}
            <ul className={cn(
              "hidden items-center gap-2 lg:flex absolute left-1/2 -translate-x-1/2",
              scrolled ? "relative left-0 translate-x-0 mx-auto" : ""
            )}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                      scrolled
                        ? "text-foreground/70 hover:bg-black/5 hover:text-primary"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden lg:block">
                <MagneticButton href="/contact">
                  Request a Quote
                </MagneticButton>
              </div>

              <button
                type="button"
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-full border lg:hidden transition-colors",
                  scrolled
                    ? "border-foreground/10 bg-black/5 text-foreground"
                    : "border-white/20 bg-white/10 text-white"
                )}
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[5.5rem] z-50 origin-top rounded-2xl border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-3xl lg:hidden pointer-events-auto"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-xl px-5 py-4 font-display text-3xl uppercase tracking-tight text-foreground transition-all hover:bg-primary/5 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-6 border-t border-border/10 mt-4">
                <MagneticButton href="/contact" className="w-full justify-center">
                  Request a Quote
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
