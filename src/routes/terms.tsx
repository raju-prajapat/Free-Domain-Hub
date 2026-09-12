import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — FreeDomainHub" },
      { name: "description", content: "Terms governing your use of the FreeDomainHub discovery tool." },
      { property: "og:title", content: "Terms of Use — FreeDomainHub" },
      { property: "og:description", content: "Terms governing your use of the FreeDomainHub discovery tool." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:py-24">
      <Button asChild variant="ghost" className="mb-10">
        <Link to="/"><ArrowLeft className="h-4 w-4" />Back to FreeDomainHub</Link>
      </Button>
      <FileText className="mb-5 h-10 w-10 text-primary" />
      <h1 className="font-display text-4xl font-bold">Terms of Use</h1>
      <div className="mt-8 space-y-7 text-sm leading-7 text-muted-foreground">
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">Discovery service</h2><p>FreeDomainHub is an information and discovery tool. It is not a registrar and does not register, reserve, or guarantee domains or subdomains.</p></section>
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">Availability</h2><p>Suggestions show possible address formats only. Final availability, eligibility, limits, and pricing are determined by each provider.</p></section>
        <section><h2 className="mb-2 text-lg font-semibold text-foreground">Third-party services</h2><p>You are responsible for reviewing and accepting a provider’s terms before using its service.</p></section>
      </div>
    </main>
  );
}