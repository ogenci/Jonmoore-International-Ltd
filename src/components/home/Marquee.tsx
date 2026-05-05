const items = [
  "BigMove Member",
  "TRACE Certified",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "MODEC JV Partner",
  "JILMEC Co. Ltd",
  "West Africa Coverage",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section
      aria-label="Certifications and partners"
      className="border-y border-border/10 bg-surface/40 py-6 overflow-hidden"
    >
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-14 font-display text-xl text-foreground/55 md:text-2xl">
            {t}
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
          </span>
        ))}
      </div>
    </section>
  );
};
