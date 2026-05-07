import { motion } from "framer-motion";
import { Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Suggestion } from "@/lib/generateSuggestions";

export function ResultCard({ s, index }: { s: Suggestion; index: number }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(s.example);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="glass-card group relative flex flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold">{s.name}</h3>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{s.category}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {s.badges.map((b) => (
            <Badge
              key={b}
              variant="outline"
              className="border-primary/40 bg-primary/10 text-[10px] text-primary"
            >
              {b}
            </Badge>
          ))}
        </div>
      </div>

      <button
        onClick={copy}
        className="group/copy mb-4 flex items-center justify-between gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 text-left text-sm font-mono transition-colors hover:border-primary/50"
      >
        <span className="truncate text-foreground/90">{s.example}</span>
        {copied ? (
          <Check className="h-4 w-4 shrink-0 text-primary" />
        ) : (
          <Copy className="h-4 w-4 shrink-0 text-muted-foreground group-hover/copy:text-foreground" />
        )}
      </button>

      <p className="mb-5 flex-1 text-sm text-muted-foreground">{s.description}</p>

      <div className="flex gap-2">
        <Button
          asChild
          className="bg-gradient-primary flex-1 rounded-lg text-white hover:opacity-95"
        >
          <a href={s.signupUrl} target="_blank" rel="noopener noreferrer">
            Use This
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-lg">
          <a href={s.signupUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit provider">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
