import { useNavigate } from "@tanstack/react-router";
import type { CategoryFilter, SortKey } from "@/lib/generateSuggestions";
import { cn } from "@/lib/utils";

const categories: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hosting", label: "Hosting" },
  { value: "static", label: "Static Site" },
  { value: "subdomain", label: "Subdomain" },
];

export function FilterBar({
  category,
  sort,
}: {
  category: CategoryFilter;
  sort: SortKey;
}) {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() =>
              navigate({ to: "/", search: (p: Record<string, unknown>) => ({ ...p, category: c.value }), hash: "results" })
            }
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs transition-all",
              category === c.value
                ? "bg-gradient-primary border-transparent text-white shadow-md"
                : "glass-card text-muted-foreground hover:text-foreground",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="text-muted-foreground">Sort:</span>
        {(["popular", "easiest"] as SortKey[]).map((s) => (
          <button
            key={s}
            onClick={() =>
              navigate({ to: "/", search: (p: Record<string, unknown>) => ({ ...p, sort: s }), hash: "results" })
            }
            className={cn(
              "rounded-full px-3 py-1.5 transition-all",
              sort === s
                ? "bg-foreground/10 text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {s === "popular" ? "Most Popular" : "Easiest Setup"}
          </button>
        ))}
      </div>
    </div>
  );
}
