import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";
import { MagneticButton } from "@/components/home/MagneticButton";
import { Reveal } from "@/components/home/Reveal";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Clock, Shield } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll respond within 24 hours.");
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
      <CustomCursor />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative h-[75vh] flex flex-col justify-end pb-24 bg-foreground text-background overflow-hidden isolate">
          <div aria-hidden className="absolute inset-0 -z-20">
            <img src="https://jonmoore.com.gh/wp-content/uploads/2019/03/Cranes-9.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div aria-hidden className="absolute inset-0 -z-10 bg-primary/5" />
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

          <div className="container-edge relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">Get In Touch</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.95] tracking-tight text-white max-w-5xl text-balance">
              Let's discuss<br /><span className="italic text-white/80">your next move.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              Free assessment · Reply within 24 hours · No obligation. Tell us about your project and we'll find the right solution.
            </motion.p>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-b border-border/10">
          <div className="container-edge py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <Reveal>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg">24h Response</p>
                    <p className="text-sm text-foreground/50">Guaranteed reply time</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg">Free Assessment</p>
                    <p className="text-sm text-foreground/50">No obligation quote</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg">24/7 Emergency</p>
                    <p className="text-sm text-foreground/50">+233 (0)20 139 6339</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="container-edge py-24 md:py-40">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Left — Info */}
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <span className="eyebrow">Contact Information</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-balance">
                  Reach us directly.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-foreground/60 leading-relaxed">
                  Whether you're planning a complex heavy-lift or need a quick freight quote, our team is ready to help.
                </p>
              </Reveal>

              <div className="mt-12 space-y-0">
                <Reveal delay={0.15}>
                  <a href="mailto:solutions@jonmoore.com.gh" className="group flex items-center gap-5 py-6 border-t border-border/10 transition-colors hover:bg-surface/30 -mx-4 px-4 rounded-xl">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white transition-transform group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Email Us</p>
                      <p className="font-display text-xl group-hover:text-primary transition-colors">solutions@jonmoore.com.gh</p>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="flex items-center gap-5 py-6 border-t border-border/10 -mx-4 px-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Call Us</p>
                      <p className="font-display text-xl">+233 (0)20 139 6339</p>
                      <p className="font-display text-lg text-foreground/50">+233 (0)20 226 7919</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div className="flex items-start gap-5 py-6 border-t border-b border-border/10 -mx-4 px-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Visit Us</p>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-primary mb-1">Tema</p>
                          <p className="text-sm text-foreground/60">No. 1a Publishing Road, P.O. Box CO 614</p>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-primary mb-1">Takoradi</p>
                          <p className="text-sm text-foreground/60">Harbour Commercial Area, Western Region</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <div className="rounded-[32px] border border-border/10 bg-surface/20 p-8 md:p-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.06)]">
                  <h3 className="font-display text-3xl mb-2">Request a Quote</h3>
                  <p className="text-foreground/50 mb-10">Fill in the details below and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Reveal delay={0.12}>
                        <div>
                          <label htmlFor="name" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Full Name *</label>
                          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                            className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </Reveal>
                      <Reveal delay={0.14}>
                        <div>
                          <label htmlFor="email" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Email *</label>
                          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                            className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </Reveal>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Reveal delay={0.16}>
                        <div>
                          <label htmlFor="phone" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Phone</label>
                          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                            className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                            placeholder="+233 (0)20 000 0000"
                          />
                        </div>
                      </Reveal>
                      <Reveal delay={0.18}>
                        <div>
                          <label htmlFor="company" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Company</label>
                          <input id="company" name="company" type="text" value={formData.company} onChange={handleChange}
                            className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                            placeholder="Company name"
                          />
                        </div>
                      </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                      <div>
                        <label htmlFor="service" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Service Required</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange}
                          className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all appearance-none"
                        >
                          <option value="">Select a service...</option>
                          <option value="heavy-transport">Heavy & Abnormal Transport</option>
                          <option value="cranes">Cranes & Heavy Lift</option>
                          <option value="project-handling">Expert Project Handling</option>
                          <option value="freight">International Freight Forwarding</option>
                          <option value="offshore">Offshore Logistics & Engineering</option>
                          <option value="warehousing">Warehousing & Storage</option>
                          <option value="other">Other / General Enquiry</option>
                        </select>
                      </div>
                    </Reveal>
                    <Reveal delay={0.22}>
                      <div>
                        <label htmlFor="message" className="block text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-3">Project Details *</label>
                        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                          className="w-full rounded-2xl border border-border/10 bg-background px-5 py-4 text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                          placeholder="Tell us about your cargo, timeline, and any specific requirements..."
                        />
                      </div>
                    </Reveal>
                    <Reveal delay={0.24}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                        <MagneticButton>
                          <span className="flex items-center gap-2">
                            Submit Request
                            <Send className="h-4 w-4" />
                          </span>
                        </MagneticButton>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/35 max-w-[200px]">
                          Your data is secure and will never be shared
                        </p>
                      </div>
                    </Reveal>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden isolate">
          <div aria-hidden className="absolute inset-0 -z-20">
            <img src="https://jonmoore.com.gh/wp-content/uploads/2022/09/DJI_0440-Edit-scaled.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/80" />

          <div className="container-edge relative z-10 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold">24/7 Emergency Response</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-white max-w-3xl mx-auto mb-8 text-balance">
                Time-critical operation?
                <br />
                <span className="italic text-white/70">We're standing by.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/60 max-w-xl mx-auto mb-12 text-lg">
                For urgent logistics requirements, our response team operates around the clock. Call us directly for immediate assistance.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="tel:+233201396339" className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-white font-bold text-sm uppercase tracking-widest transition-all hover:bg-primary-glow hover:scale-105">
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </a>
                <a href="mailto:solutions@jonmoore.com.gh" className="group inline-flex items-center gap-2 text-white/80 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                  Or email us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
