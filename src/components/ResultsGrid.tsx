import { useMemo } from "react";
import { generateSuggestions, type CategoryFilter, type SortKey } from "@/lib/generateSuggestions";
import { ResultCard } from "./ResultCard";
import { FilterBar } from "./FilterBar";
import { Search } from "lucide-react";

export function ResultsGrid({
  query,
  category,
  sort,
}: {
  query: string;
  category: CategoryFilter;
  sort: SortKey;
}) {
  const suggestions = useMemo(
    () => generateSuggestions(query || "myapp", category, sort),
    [query, category, sort],
  );

  const hasQuery = query.trim().length > 0;

  return (
    <section id="results" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          {hasQuery ? (
            <>
              Results for <span className="text-gradient">{query}</span>
            </>
          ) : (
            <>Preview Results</>
          )}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {hasQuery
            ? "Pick a provider that fits your project."
            : "Enter a project name above to see personalized suggestions."}
        </p>
      </div>

      <FilterBar category={category} sort={sort} />

      {suggestions.length === 0 ? (
        <div className="glass-card mx-auto max-w-md rounded-2xl p-10 text-center">
          <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No providers match this filter. Try another category.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((s, i) => (
            <ResultCard key={s.id} s={s} index={i} />
          ))}
        </div>
      )}

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
        Examples shown are suggested formats. Final availability is confirmed at the provider.
      </p>
    </section>
  );
}
