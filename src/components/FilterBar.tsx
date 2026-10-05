import { useNavigate } from "@tanstack/react-router";
import type { CategoryFilter, SortKey } from "@/lib/generateSuggestions";
import { cn } from "@/lib/utils";

const categories: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hosting", label: "Hosting" },
  { value: "static", label: "Static Site" },
  { value: "subdomain", label: "Subdomain" },
  { value: "easy", label: "Easy Setup" },
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
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() =>
              navigate({ 
                to: "/", 
                search: (p: Record<string, unknown>) => ({ ...p, category: c.value }), 
                hash: "results" 
              })
            }
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
              category === c.value
                ? "bg-gradient-primary border-transparent text-white shadow-md"
                : "glass-card text-muted-foreground border-border/50 hover:text-foreground hover:border-border",
            )}
            aria-pressed={category === c.value}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 text-xs">
        <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground">Sort By</span>
        <div className="flex overflow-hidden rounded-full border border-border/50 bg-background/30 p-0.5">
          {(["popular", "easiest"] as SortKey[]).map((s) => (
            <button
              key={s}
              onClick={() =>
                navigate({ 
                  to: "/", 
                  search: (p: Record<string, unknown>) => ({ ...p, sort: s }), 
                  hash: "results" 
                })
              }
              className={cn(
                "rounded-full px-4 py-1.5 transition-all",
                sort === s
                  ? "bg-foreground/10 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s === "popular" ? "Popularity" : "Easiest"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
