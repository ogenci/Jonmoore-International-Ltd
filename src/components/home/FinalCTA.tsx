import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  cargo: z.string().trim().min(1, "Tell us the cargo type").max(120),
  message: z.string().trim().min(10, "A short note helps us quote accurately").max(1000),
});

type FormValues = z.infer<typeof schema>;

const bullets = [
  "Reply within 24 hours from a real project manager",
  "Free, line-itemed quote never a vague estimate",
  "ISO 9001 / 14001 / 45001 certified handling",
  "25 years of reputation we won't risk on your shipment",
];

export const FinalCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Handle quote submission.
    await new Promise((r) => setTimeout(r, 700));
    console.info("Quote request", data);
    setSubmitted(true);
    reset();
    toast.success("Quote request received we'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-vignette)" }} />
      <div className="container-edge grid gap-12 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <Reveal>
            <span className="eyebrow">Request a quote</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5.4vw,5rem)] font-light leading-[1] tracking-tight text-balance">
              Tell us what needs to move.
              <br />
              <em className="italic text-foreground/70">We'll handle the rest.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-12 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </span>
                  <span className="text-pretty">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-6">
          <div className="relative rounded-sm border border-border/10 bg-surface/60 p-6 sm:p-7 md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[420px] flex-col items-start justify-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
                <p className="mt-3 max-w-sm text-foreground/70">
                  Your request is in front of a project manager. Expect a reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 link-underline text-sm text-foreground/70"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      autoComplete="name"
                      className="field"
                      placeholder="Ama Mensah"
                    />
                  </Field>
                  <Field label="Company" error={errors.company?.message}>
                    <input
                      {...register("company")}
                      autoComplete="organization"
                      className="field"
                      placeholder="Acme Mining Ltd."
                    />
                  </Field>
                </div>
                <Field label="Work email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="field"
                    placeholder="ama@acme.com"
                  />
                </Field>
                <Field label="Cargo type" error={errors.cargo?.message}>
                  <input
                    {...register("cargo")}
                    className="field"
                    placeholder="e.g. 220-ton transformer · Tema → Kumasi"
                  />
                </Field>
                <Field label="Project details" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="field resize-none"
                    placeholder="Route, timeline, special handling needs…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-glow disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Request my quote"}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.6} />
                </button>
                <p className="text-center text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  No obligation · Reply within 24h · Confidential
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      {/* scoped field styles */}
      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid hsl(var(--border) / 0.18);
          padding: 0.75rem 0;
          color: hsl(var(--foreground));
          font-size: 0.95rem;
          outline: none;
          transition: border-color 300ms;
        }
        .field::placeholder { color: hsl(var(--foreground) / 0.35); }
        .field:focus { border-color: hsl(var(--primary)); }
      `}</style>
    </section>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
  </label>
);
