import { useMemo } from "react";
import { generateSuggestions, slugify, type CategoryFilter, type SortKey } from "@/lib/generateSuggestions";
import { ResultCard } from "./ResultCard";
import { FilterBar } from "./FilterBar";
import { Search, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function ResultsGrid({
  query,
  category,
  sort,
}: {
  query: string;
  category: CategoryFilter;
  sort: SortKey;
}) {
  const navigate = useNavigate();
  const suggestions = useMemo(
    () => generateSuggestions(query || "yourapp", category, sort),
    [query, category, sort],
  );

  const hasQuery = query.trim().length > 0;
  const invalidQuery = hasQuery && !slugify(query);

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
            ? "Compare suggested formats from these providers. Availability and eligibility are confirmed by each provider."
            : "Explore popular free hosting and subdomain providers. Enter a name to preview suggested formats."}
        </p>
      </div>

      <FilterBar category={category} sort={sort} />

      {invalidQuery || suggestions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mx-auto max-w-md rounded-3xl p-12 text-center border border-dashed border-border/60"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/50">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {invalidQuery ? "That project name needs a change" : "No matching providers"}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {invalidQuery
                ? "Use at least one letter or number, such as portfolio, taskly, or nova."
                : "Try adjusting your filters or search for something else like portfolio, taskly, or my-app."}
            </p>
            <Button
              type="button"
              variant="link"
              onClick={() => void navigate({ to: "/", search: (prev) => ({ ...prev, category: "all", sort: "popular" }) })}
              className="text-xs font-medium text-primary"
            >
              Clear all filters
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {suggestions.map((s, i) => (
              <ResultCard key={s.id} s={s} index={i} />
            ))}
          </motion.div>
        )}

      <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-accent/20 p-6 text-center border border-border/40">
        <div className="flex items-center justify-center gap-2 mb-2 text-primary">
          <Info className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Disclaimer</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          These are suggested domain formats, not availability checks. Final availability, eligibility, and terms are confirmed exclusively by the respective providers. 
          FreeDomainHub is not a registrar and does not guarantee domain acquisition.
        </p>
      </div>
    </section>
  );
}
