import { providers } from "@/data/providers";

export function PopularProviders() {
  const top = [...providers].sort((a, b) => b.popularity - a.popularity).slice(0, 8);
  return (
    <section id="providers" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Trusted providers</p>
        <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">
          Popular free hosting & subdomain platforms
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {top.map((p) => (
          <a
            key={p.id}
            href={p.signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl px-4 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="font-display text-base font-semibold">{p.name}</div>
            <div className="mt-1 truncate text-[11px] text-muted-foreground">
              {p.formatTemplate.replace("{name}", "yourapp")}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
