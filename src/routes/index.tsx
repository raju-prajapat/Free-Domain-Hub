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

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.enum(["all", "hosting", "static", "subdomain"]), "all").default("all"),
  sort: fallback(z.enum(["popular", "easiest"]), "popular").default("popular"),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "FreeDomainHub — Find Free Domains Instantly" },
      {
        name: "description",
        content:
          "Search free website domains and subdomains from trusted providers like Vercel, Netlify, Cloudflare Pages, and GitHub Pages — all in one place.",
      },
      { property: "og:title", content: "FreeDomainHub — Find Free Domains Instantly" },
      {
        property: "og:description",
        content: "Discover and compare free hosting and subdomain providers in seconds.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { q, category, sort } = Route.useSearch();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero initialQuery={q} />
        <ResultsGrid query={q} category={category} sort={sort} />
        <PopularProviders />
        <Features />
        <Testimonials />
        <FAQ />
        <EmailCapture />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
