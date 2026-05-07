import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const [value, setValue] = useState(initialQuery);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/",
      search: (prev: Record<string, unknown>) => ({ ...prev, q: value.trim() }),
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
          placeholder="Enter your project name"
          className="h-12 border-0 bg-transparent pl-11 text-base focus-visible:ring-0"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="bg-gradient-primary h-12 rounded-xl px-6 font-medium text-white shadow-lg hover:opacity-95"
      >
        Search Free Domains
      </Button>
    </form>
  );
}
