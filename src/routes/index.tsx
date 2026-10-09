import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResultsGrid } from "@/components/ResultsGrid";
import { PopularProviders } from "@/components/PopularProviders";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { MotionConfig } from "framer-motion";
import type { CategoryFilter, SortKey } from "@/lib/generateSuggestions";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "all").default("all"),
  sort: fallback(z.string(), "popular").default("popular"),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "FreeDomainHub — Find Free Domains & Subdomains" },
      {
        name: "description",
        content:
          "Discover free domains and subdomains from popular hosting providers in one place.",
      },
      { property: "og:title", content: "FreeDomainHub — Find Free Domains & Subdomains" },
      {
        property: "og:description",
        content: "Discover and compare suggested hosting and subdomain formats. Availability is confirmed by each provider.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://freedomainhub.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  const { q, category, sort } = Route.useSearch();
  const query = q.slice(0, 100);
  const safeCategory: CategoryFilter = ["all", "hosting", "static", "subdomain", "easy"].includes(category)
    ? (category as CategoryFilter)
    : "all";
  const safeSort: SortKey = ["popular", "easiest"].includes(sort) ? (sort as SortKey) : "popular";
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero initialQuery={query} />
          <ResultsGrid query={query} category={safeCategory} sort={safeSort} />
          <PopularProviders />
          <Features />
          <Testimonials />
          <FAQ />
          <EmailCapture />
        </main>
        <Footer />
        <Toaster theme="dark" />
      </div>
    </MotionConfig>
  );
}
