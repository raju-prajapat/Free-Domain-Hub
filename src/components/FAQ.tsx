import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are these real free domains?",
    a: "The listed providers offer free hosting plans or subdomain formats, subject to each provider’s current terms. A suggested name is not a live availability check, and the provider confirms whether you can use it.",
  },
  {
    q: "Can I connect my own custom domain later?",
    a: "Many listed hosting providers support custom domains, but features and plan requirements vary. Check the provider’s current documentation before choosing.",
  },
  {
    q: "Do you register domains directly?",
    a: "No. FreeDomainHub is a discovery and comparison tool. We send you to each provider's official signup page so you stay in control.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes. Searching and comparing the suggested provider formats is free.",
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
          <AccordionItem key={f.q} value={`faq-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
