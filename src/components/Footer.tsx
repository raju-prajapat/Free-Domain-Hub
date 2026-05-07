import { Globe, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-primary grid h-8 w-8 place-items-center rounded-lg">
              <Globe className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-base font-bold">
              FreeDomain<span className="text-gradient">Hub</span>
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Discover free website domains and subdomains from trusted providers — all in one
            place. Not a registrar.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Product
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#providers" className="hover:text-primary">Providers</a></li>
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
            <li><a href="#" className="hover:text-primary">Terms</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FreeDomainHub. Discovery tool — we don't register domains.
        </p>
        <div className="flex gap-3 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
