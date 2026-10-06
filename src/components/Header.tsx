import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/providers", label: "Providers" },
    { to: "/about", label: "About" },
    { to: "/", hash: "faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="glass-card mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 border border-border/50">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="bg-gradient-primary grid h-9 w-9 place-items-center rounded-xl shadow-lg transition-transform group-hover:scale-110">
            <Globe className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            FreeDomain<span className="text-gradient">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/providers"
            className="hidden sm:inline-flex bg-gradient-primary rounded-xl px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-95 active:scale-95"
          >
            Search Now
          </Link>
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 top-[88px] z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
        )}
      >
        <nav className="flex flex-col gap-6 p-8 text-xl font-semibold">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-b border-border/50 pb-4 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/providers"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-gradient-primary rounded-2xl py-4 text-center text-white shadow-xl"
          >
            Find Domains
          </Link>
        </nav>
      </div>
    </header>
  );
}
