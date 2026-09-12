import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FreeDomainHub" },
      { name: "description", content: "Contact the creator of FreeDomainHub on GitHub or LinkedIn." },
      { property: "og:title", content: "Contact — FreeDomainHub" },
      { property: "og:description", content: "Contact the creator of FreeDomainHub on GitHub or LinkedIn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:py-24">
      <Button asChild variant="ghost" className="mb-10">
        <Link to="/"><ArrowLeft className="h-4 w-4" />Back to FreeDomainHub</Link>
      </Button>
      <h1 className="font-display text-4xl font-bold">Contact</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Have feedback, a provider suggestion, or a question? Reach out through either profile.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a className="glass-card rounded-lg p-6 transition-colors hover:border-primary/50" href="https://github.com/raju-prajapat" target="_blank" rel="noopener noreferrer"><Github className="mb-4 h-7 w-7 text-primary" /><span className="font-display font-semibold">GitHub</span><p className="mt-1 text-sm text-muted-foreground">raju-prajapat</p></a>
        <a className="glass-card rounded-lg p-6 transition-colors hover:border-primary/50" href="https://www.linkedin.com/in/raju-ram-839b49394" target="_blank" rel="noopener noreferrer"><Linkedin className="mb-4 h-7 w-7 text-primary" /><span className="font-display font-semibold">LinkedIn</span><p className="mt-1 text-sm text-muted-foreground">Raju Ram</p></a>
      </div>
    </main>
  );
}