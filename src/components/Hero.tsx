import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { Sparkles } from "lucide-react";

export function Hero({ initialQuery }: { initialQuery: string }) {
  return (
    <section id="search" className="relative overflow-hidden px-4 pb-20 pt-16 sm:pt-24">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="bg-gradient-primary absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="glass-card mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Discover free domains from trusted providers</span>
        </div>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Find <span className="text-gradient">Free Domains</span>
          <br /> Instantly
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Search working free website domains and subdomains from trusted providers in one place.
        </p>

        <div className="mt-10">
          <SearchBar initialQuery={initialQuery} />
          <p className="mt-3 text-xs text-muted-foreground">
            Try{" "}
            {["taskly", "novalabs", "myportfolio"].map((s, i) => (
              <span key={s}>
                <a
                  href={`/?q=${s}#results`}
                  className="text-foreground/80 underline-offset-4 hover:text-primary hover:underline"
                >
                  {s}
                </a>
                {i < 2 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
