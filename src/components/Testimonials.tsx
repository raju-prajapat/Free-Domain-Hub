const items = [
  {
    quote:
      "Finally a clean way to discover free hosting options. Saved me an hour of Googling for my hackathon project.",
    name: "Maya R.",
    role: "Indie hacker",
  },
  {
    quote:
      "I sent this to every junior dev I mentor. The filters and copy buttons are a great touch.",
    name: "Daniel K.",
    role: "Engineering lead",
  },
  {
    quote: "Beautiful UI and zero noise. Picked Cloudflare Pages in under 30 seconds.",
    name: "Priya S.",
    role: "Startup founder",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Loved by builders</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="glass-card rounded-2xl p-6">
            <blockquote className="text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="bg-gradient-primary grid h-9 w-9 place-items-center rounded-full text-sm font-semibold text-white">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
