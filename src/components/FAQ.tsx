import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are these real free domains?",
    a: "Yes. Every provider listed offers a free domain or subdomain. Some are full hosting platforms (like Vercel), others are dedicated subdomain services (like DuckDNS).",
  },
  {
    q: "Can I connect my own custom domain later?",
    a: "Most providers (Vercel, Netlify, Cloudflare Pages, etc.) let you attach a custom domain on top of their free subdomain whenever you're ready.",
  },
  {
    q: "Do you register domains directly?",
    a: "No. FreeDomainHub is a discovery and comparison tool. We send you to each provider's official signup page so you stay in control.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes — completely free. We may add optional features in the future, but the core search will always be free.",
  },
  {
    q: "Can I add or request more providers?",
    a: "Absolutely. We're constantly expanding the list. Use the email form below to suggest a provider you'd like to see.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions, answered</h2>
      </div>
      <Accordion type="single" collapsible className="glass-card rounded-2xl px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
