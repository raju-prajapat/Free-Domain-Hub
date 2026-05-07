import { Link } from "@tanstack/react-router";
import { Globe } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-primary grid h-8 w-8 place-items-center rounded-lg shadow-lg">
            <Globe className="h-4 w-4 text-white" />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            FreeDomain<span className="text-gradient">Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link to="/" hash="providers" className="hover:text-foreground transition-colors">
            Providers
          </Link>
          <Link to="/" hash="features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/" hash="faq" className="hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>
        <Link
          to="/"
          hash="search"
          className="bg-gradient-primary rounded-full px-4 py-1.5 text-xs font-medium text-white shadow-md transition-transform hover:scale-105"
        >
          Search
        </Link>
      </div>
    </header>
  );
}
