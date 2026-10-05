import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResultsGrid } from "@/components/ResultsGrid";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.enum(["all", "hosting", "static", "subdomain", "easy"]), "all").default("all"),
  sort: fallback(z.enum(["popular", "easiest"]), "popular").default("popular"),
});

export const Route = createFileRoute("/providers")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Free Domain Providers Directory — FreeDomainHub" },
      {
        name: "description",
        content: "Browse our full directory of free domain and subdomain providers. Compare Vercel, Netlify, Cloudflare, and more.",
      },
    ],
  }),
  component: ProvidersPage,
});

function ProvidersPage() {
  const { q, category, sort } = Route.useSearch();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-10">
        <ResultsGrid query={q} category={category} sort={sort} />
      </main>
      <Footer />
    </div>
  );
}
