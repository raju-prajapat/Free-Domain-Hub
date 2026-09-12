import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FreeDomainHub" },
      { name: "description", content: "Learn how FreeDomainHub handles search and visitor information." },
      { property: "og:title", content: "Privacy Policy — FreeDomainHub" },
      { property: "og:description", content: "Learn how FreeDomainHub handles search and visitor information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:py-24">
      <Button asChild variant="ghost" className="mb-10">
        <Link to="/"><ArrowLeft className="h-4 w-4" />Back to FreeDomainHub</Link>
      </Button>
      <ShieldCheck className="mb-5 h-10 w-10 text-primary" />
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <div className="mt-8 space-y-7 text-sm leading-7 text-muted-foreground">
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">Information we collect</h2><p>FreeDomainHub generates suggestions in your browser. We do not require an account or collect the project names you search for.</p></section>
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">External providers</h2><p>When you follow a provider link, that provider’s own privacy policy and terms apply. FreeDomainHub does not control those websites.</p></section>
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">Updates</h2><p>This policy may be updated as the service changes. The latest version will always appear on this page.</p></section>
      </div>
    </main>
  );
}