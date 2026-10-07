import { providers, type Provider } from "@/data/providers";

export type SortKey = "popular" | "easiest";
export type CategoryFilter = "all" | "hosting" | "static" | "subdomain" | "easy";

export interface Suggestion extends Provider {
  example: string;
}

export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32)
    .replace(/-+$/g, "");
}

export function generateSuggestions(
  query: string,
  category: CategoryFilter = "all",
  sort: SortKey = "popular",
): Suggestion[] {
  const slug = slugify(query);
  if (!slug) return [];
  let list = providers.map((p) => ({
    ...p,
    example: p.formatTemplate.replace("{name}", slug),
  }));

  if (category !== "all") {
    if (category === "easy") {
      list = list.filter((p) => p.badges.includes("Easy Setup"));
    } else {
      list = list.filter((p) => p.category === category);
    }
  }

  list.sort((a, b) =>
    sort === "popular" ? b.popularity - a.popularity : b.setupEase - a.setupEase,
  );

  return list;
}
