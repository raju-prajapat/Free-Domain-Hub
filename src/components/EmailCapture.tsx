import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

export function EmailCapture() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSchema.safeParse(email).success) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.info("Email updates are not connected yet. Your address was not saved.");
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <div className="glass-card rounded-3xl p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Get new providers in your inbox
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Email updates are not connected yet. No address is collected or saved.
        </p>
        <form
          onSubmit={submit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
        >
          <Input
            aria-label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@project.com"
            maxLength={255}
            className="h-11 bg-background/50"
          />
          <Button
            type="submit"
            className="bg-gradient-primary h-11 rounded-lg px-5 text-white hover:opacity-95"
          >
            Notify me
          </Button>
        </form>
      </div>
    </section>
  );
}
