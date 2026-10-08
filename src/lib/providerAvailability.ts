import type { Provider } from "@/data/providers";

export type AvailabilityResult =
  | { status: "available"; checkedAt: string }
  | { status: "unavailable"; checkedAt: string }
  | { status: "provider-verification-required" };

/** A provider-specific integration can implement this without changing suggestion UI. */
export interface ProviderAvailabilityChecker {
  check(provider: Provider, projectSlug: string): Promise<AvailabilityResult>;
}

/** V1 deliberately makes no availability claim; users confirm directly with providers. */
export const providerAvailabilityChecker: ProviderAvailabilityChecker = {
  async check() {
    return { status: "provider-verification-required" };
  },
};

export function isSafeExternalUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}