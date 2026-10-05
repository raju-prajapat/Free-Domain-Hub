import { providers, type Provider } from "@/data/providers";

export type SortKey = "popular" | "easiest";
export type CategoryFilter = "all" | "hosting" | "static" | "subdomain" | "easy";

export interface Suggestion extends Provider {
  example: string;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[._\s]+/g, "-") // Replace dots, underscores, and spaces with hyphens
    .replace(/[^a-z0-9-]+/g, "") // Remove everything else
    .replace(/-+/g, "-") // Collapse multiple hyphens
    .replace(/^-+|-+$/g, "") // Trim leading/trailing hyphens
    .slice(0, 32) || "myapp";
}

export function generateSuggestions(
  query: string,
  category: CategoryFilter = "all",
  sort: SortKey = "popular",
): Suggestion[] {
  const slug = slugify(query);
  let list = providers.map((p) => ({
    ...p,
    example: p.formatTemplate.replace("{name}", slug),
  }));

  if (category !== "all") {
    if (category === "easy") {
      list = list.filter((p) => p.setupEase >= 8);
    } else {
      list = list.filter((p) => p.category === category);
    }
  }

  list.sort((a, b) =>
    sort === "popular" ? b.popularity - a.popularity : b.setupEase - a.setupEase,
  );

  return list;
}
