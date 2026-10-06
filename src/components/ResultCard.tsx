import { motion } from "framer-motion";
import { Copy, ExternalLink, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Suggestion } from "@/lib/generateSuggestions";

export function ResultCard({ s, index }: { s: Suggestion; index: number }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(s.example);
      setCopied(true);
      toast.success(`Copied: ${s.example}`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.035 }}
      className="glass-card group relative flex flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] border border-border/50"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/50 border border-border/50 p-2">
            <img src={s.logo} alt={s.name} className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold leading-tight">{s.name}</h3>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{s.category}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {s.badges.map((b) => (
            <Badge
              key={b}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-[9px] px-1.5 py-0 text-primary"
            >
              {b}
            </Badge>
          ))}
        </div>
      </div>

      <button
        onClick={copy}
        type="button"
        aria-label={`Copy suggested format ${s.example}`}
        className="group/copy mb-4 flex items-center justify-between gap-2 rounded-xl border border-border/60 bg-background/30 px-3 py-2.5 text-left text-sm font-mono transition-all hover:border-primary/40 hover:bg-background/50"
        title="Click to copy domain"
      >
        <span className="truncate text-foreground/90">{s.example}</span>
        {copied ? (
          <div className="flex items-center gap-1 text-[10px] font-sans font-medium text-primary">
            <span>Copied</span>
            <Check className="h-3.5 w-3.5" />
          </div>
        ) : (
          <Copy className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover/copy:text-foreground" />
        )}
      </button>

      <p className="mb-5 flex-1 text-sm text-muted-foreground leading-relaxed">
        {s.description}
      </p>

      <div className="mb-4 flex items-center gap-1.5 rounded-lg bg-accent/30 px-2.5 py-1.5 text-[10px] text-muted-foreground border border-border/30">
        <ShieldCheck className="h-3 w-3 text-primary/70" />
        <span>{s.verificationNote}</span>
      </div>

      <div className="flex gap-2">
        <Button
          asChild
          className="bg-gradient-primary flex-1 rounded-xl text-white shadow-md hover:opacity-95 transition-all"
        >
          <a href={s.signupUrl} target="_blank" rel="noopener noreferrer" aria-label={`Check ${s.name} signup and confirm availability`}>
            Use This
          </a>
        </Button>
        <Button asChild variant="outline" className="rounded-xl border-border/60 hover:bg-accent group-hover:border-primary/30">
          <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${s.name} official website`} className="flex items-center gap-2 px-3">
            <span className="text-xs font-medium">Visit</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
