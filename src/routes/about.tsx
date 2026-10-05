import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, ShieldCheck, Zap, Info } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FreeDomainHub — How It Works" },
      {
        name: "description",
        content: "Learn how FreeDomainHub helps you discover free domains and subdomains for your projects.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl mb-6">
            About <span className="text-gradient">FreeDomainHub</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A simple discovery platform for the modern web.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          <div className="glass-card rounded-3xl p-8 border border-border/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">What we do</h3>
            <p className="text-muted-foreground leading-relaxed">
              We aggregate and compare free domain and subdomain offerings from trusted hosting providers like Vercel, Netlify, and Cloudflare. Our goal is to help you find a professional-looking URL for your project without any upfront cost.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-border/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">What we don't do</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are not a domain registrar. We do not own, manage, or register domains. We also do not guarantee availability; we provide suggestions and link you to the official provider to complete your setup.
            </p>
          </div>
        </div>

        <div className="mt-20 glass-card rounded-3xl p-10 border border-border/50">
          <h2 className="text-3xl font-bold mb-8 text-center font-display">How it works</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Zap, title: "1. Search", desc: "Enter your project name to see suggested formats." },
              { icon: Info, title: "2. Compare", desc: "Compare setup difficulty, popularity, and features." },
              { icon: Globe, title: "3. Deploy", desc: "Follow the link to the provider and launch your site." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background border border-border shadow-sm">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-accent/30 p-8 border border-border/40">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Transparency Notice
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FreeDomainHub is a discovery tool. All external links point to official provider websites. We do not have access to your hosting accounts or personal data. We recommend reviewing each provider's terms of service before signing up.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
