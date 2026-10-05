import { useMemo, useState, useEffect } from "react";
import { generateSuggestions, type CategoryFilter, type SortKey } from "@/lib/generateSuggestions";
import { ResultCard } from "./ResultCard";
import { FilterBar } from "./FilterBar";
import { Search, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ResultsGrid({
  query,
  category,
  sort,
}: {
  query: string;
  category: CategoryFilter;
  sort: SortKey;
}) {
  const [isLoading, setIsLoading] = useState(false);
  
  const suggestions = useMemo(
    () => generateSuggestions(query || "myapp", category, sort),
    [query, category, sort],
  );

  // Simulate a small loading state for better UX when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [query, category, sort]);

  const hasQuery = query.trim().length > 0;

  return (
    <section id="results" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          {hasQuery ? (
            <>
              Results for <span className="text-gradient">"{query}"</span>
            </>
          ) : (
            <>Suggested <span className="text-gradient">Domains</span></>
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
          {hasQuery
            ? "We've matched your project with these free domain providers. Pick the one that fits your tech stack."
            : "Explore popular free domain and subdomain providers. Enter a name to see exactly how your site would look."}
        </p>
      </div>

      <FilterBar category={category} sort={sort} />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card h-64 rounded-2xl animate-pulse bg-muted/20" />
            ))}
          </motion.div>
        ) : suggestions.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mx-auto max-w-md rounded-3xl p-12 text-center border border-dashed border-border/60"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/50">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No matching providers</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Try adjusting your filters or search for something else like "portfolio", "taskly", or "my-app".
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="text-xs font-medium text-primary hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {suggestions.map((s, i) => (
              <ResultCard key={s.id} s={s} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-accent/20 p-6 text-center border border-border/40">
        <div className="flex items-center justify-center gap-2 mb-2 text-primary">
          <Info className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Disclaimer</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          These are suggested domain formats based on provider patterns. 
          Final availability, eligibility, and terms of service are confirmed exclusively by the respective providers. 
          FreeDomainHub is not a registrar and does not guarantee domain acquisition.
        </p>
      </div>
    </section>
  );
}
