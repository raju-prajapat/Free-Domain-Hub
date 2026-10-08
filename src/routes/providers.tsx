import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { providers } from "@/data/providers";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ExternalLink, Search } from "lucide-react";
import { slugify } from "@/lib/generateSuggestions";
import { cn } from "@/lib/utils";
import { isSafeExternalUrl } from "@/lib/providerAvailability";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "all").default("all"),
  sort: fallback(z.string(), "popular").default("popular"),
});

export const Route = createFileRoute("/providers")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Free Domain Providers Directory — FreeDomainHub" },
      {
        name: "description",
        content: "Compare eight free hosting and subdomain providers, their suggested formats, setup difficulty, and official websites.",
      },
      { property: "og:title", content: "Free Domain Providers Directory — FreeDomainHub" },
      { property: "og:description", content: "Compare eight free hosting and subdomain providers and visit their official websites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { tagName: "link", rel: "canonical", href: "https://freedomainhub.lovable.app/providers" },
    ],
  }),
  component: ProvidersPage,
});

function ProvidersPage() {
  const { q, category, sort } = Route.useSearch();
  const navigate = useNavigate({ from: "/providers" });
  const [term, setTerm] = useState(q);
  useEffect(() => setTerm(q), [q]);
  const safeCategory = ["all", "hosting", "static", "subdomain", "easy"].includes(category) ? category : "all";
  const safeSort = sort === "easiest" ? "easiest" : "popular";
  const filteredProviders = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = providers.filter((provider) => {
      const matchesTerm = !needle || [provider.name, provider.description, provider.formatTemplate, provider.category, ...provider.badges]
        .join(" ").toLowerCase().includes(needle);
      const matchesCategory = safeCategory === "all"
        || (safeCategory === "easy" ? provider.badges.includes("Easy Setup") : provider.category === safeCategory);
      return matchesTerm && matchesCategory;
    });
    return list.sort((a, b) => safeSort === "popular" ? b.popularity - a.popularity : b.setupEase - a.setupEase);
  }, [q, safeCategory, safeSort]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = z.string().trim().max(100).safeParse(term);
    if (!parsed.success) return;
    void navigate({ to: ".", search: (previous) => ({ ...previous, q: parsed.data }) });
  };
  const filters: { value: string; label: string }[] = [
    { value: "all", label: "All" }, { value: "hosting", label: "Hosting" },
    { value: "static", label: "Static Site" }, { value: "subdomain", label: "Subdomain" },
    { value: "easy", label: "Easy Setup" },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16">
        <header className="mb-10 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Provider directory</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Compare provider types, setup ease, example formats, and official destinations. Suggested names are not availability checks.</p>
        </header>
        <form onSubmit={submit} className="mx-auto mb-6 flex max-w-2xl gap-2">
          <Input aria-label="Search providers" placeholder="Search providers or features" value={term} maxLength={100} onChange={(event) => setTerm(event.target.value)} />
          <Button type="submit" className="bg-gradient-primary text-white"><Search className="mr-2 h-4 w-4" />Search</Button>
        </form>
        <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter providers by type">
          {filters.map((filter) => <Button key={filter.value} type="button" variant="ghost" aria-pressed={safeCategory === filter.value} className={cn("rounded-full border", safeCategory === filter.value ? "bg-gradient-primary border-transparent text-white" : "text-muted-foreground")} onClick={() => void navigate({ to: ".", search: (previous) => ({ ...previous, category: filter.value }) })}>{filter.label}</Button>)}
        </div>
        <div className="mb-5 flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>{filteredProviders.length} {filteredProviders.length === 1 ? "provider" : "providers"}</span>
          <label className="flex items-center gap-2">Sort
            <select aria-label="Sort providers" className="rounded-md border border-border bg-background px-3 py-2 text-foreground" value={safeSort} onChange={(event) => void navigate({ to: ".", search: (previous) => ({ ...previous, sort: event.target.value }) })}>
              <option value="popular">Most popular</option><option value="easiest">Easiest setup</option>
            </select>
          </label>
        </div>
        {filteredProviders.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map((provider) => <article key={provider.id} className="glass-card flex min-w-0 flex-col rounded-xl p-5">
            <div className="flex items-center gap-3">
            <img src={provider.logo} alt={`${provider.name} logo`} loading="lazy" onError={(event) => { event.currentTarget.hidden = true; }} className="h-9 w-9 rounded-md bg-background object-contain p-1" />
              <div className="min-w-0"><h2 className="font-display text-lg font-semibold">{provider.name}</h2><p className="text-xs capitalize text-muted-foreground">{provider.category}</p></div>
            </div>
            <p className="mt-4 flex-1 text-sm text-muted-foreground">{provider.description}</p>
            <code className="mt-4 break-all rounded-md border border-border/60 bg-background/40 px-3 py-2 text-xs">{provider.formatTemplate.replace("{name}", "yourapp")}</code>
            <div className="mt-3 flex flex-wrap gap-1.5"><span className="rounded-full border border-border px-2 py-1 text-xs text-muted-foreground">Suggested</span>{provider.badges.map((badge) => <span key={badge} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs text-primary">{badge}</span>)}</div>
            <p className="mt-3 text-xs text-muted-foreground">Setup ease {provider.setupEase}/10 · Popularity {provider.popularity}/10</p>
            {isSafeExternalUrl(provider.officialUrl) && <a className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-gradient-primary px-4 text-sm font-medium text-white" href={provider.officialUrl} target="_blank" rel="noopener noreferrer">Visit official provider <ExternalLink className="h-4 w-4" /></a>}
          </article>)}
        </div> : <p className="py-14 text-center text-muted-foreground">No providers match. Try a provider name, “static”, “hosting”, or “easy setup”.</p>}
        <p className="mt-8 text-center text-xs text-muted-foreground">Suggested formats only. The provider confirms final availability, eligibility, and terms.</p>
      </main>
      <Footer />
    </div>
  );
}
