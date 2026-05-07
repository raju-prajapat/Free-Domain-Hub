import { Zap, Filter, Globe2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant suggestions",
    desc: "Type once and see free domain options across all major providers.",
  },
  {
    icon: Filter,
    title: "Smart filters",
    desc: "Narrow by hosting, static site, or subdomain. Sort by easiest setup.",
  },
  {
    icon: Globe2,
    title: "Trusted providers",
    desc: "We aggregate well-known free platforms so you don't waste time digging.",
  },
  {
    icon: ShieldCheck,
    title: "No registration needed",
    desc: "FreeDomainHub is a discovery tool — you sign up directly with each provider.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Built for shipping <span className="text-gradient">fast</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Everything you need to find a free home for your next project.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="glass-card rounded-2xl p-6">
            <div className="bg-gradient-primary mb-4 grid h-10 w-10 place-items-center rounded-lg shadow-md">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
