import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { slugify } from "@/lib/generateSuggestions";

const projectNameSchema = z.string().trim().max(100).transform(slugify).pipe(
  z.string().min(1, "Use at least one letter or number.").max(32),
);

export function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const [value, setValue] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setValue(initialQuery);
  }, [initialQuery]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = projectNameSchema.safeParse(value);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Enter a project name to continue.");
      return;
    }
    void navigate({
      to: "/",
      search: (prev) => ({ ...prev, q: parsed.data }),
      hash: "results",
    });
  };

  const clear = () => {
    setValue("");
    void navigate({
      to: "/",
      search: (prev) => ({ ...prev, q: "" }),
      hash: "results",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="glass-card mx-auto flex w-full max-w-2xl flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:items-center"
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your project name (e.g. My Portfolio)"
          maxLength={100}
          autoComplete="off"
          className="h-12 border-0 bg-transparent pl-11 pr-10 text-base focus-visible:ring-0"
          aria-label="Search project name"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clear}
            aria-label="Clear search"
            title="Clear search"
            className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-gradient-primary h-12 rounded-xl px-6 font-medium text-white shadow-lg hover:opacity-95 transition-all active:scale-[0.98]"
      >
        Search Free Domains
      </Button>
    </form>
  );
}
