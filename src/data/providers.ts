export type ProviderCategory = "hosting" | "static" | "subdomain";

export interface Provider {
  id: string;
  name: string;
  formatTemplate: string; // use {name}
  category: ProviderCategory;
  popularity: number; // 1-10
  setupEase: number; // 1-10
  description: string;
  signupUrl: string;
  badges: string[];
}

export const providers: Provider[] = [
  {
    id: "vercel",
    name: "Vercel",
    formatTemplate: "{name}.vercel.app",
    category: "hosting",
    popularity: 10,
    setupEase: 10,
    description: "Deploy modern web apps with zero config. Free SSL and global CDN included.",
    signupUrl: "https://vercel.com/signup",
    badges: ["Popular", "Easy Setup"],
  },
  {
    id: "netlify",
    name: "Netlify",
    formatTemplate: "{name}.netlify.app",
    category: "hosting",
    popularity: 9,
    setupEase: 10,
    description: "Drag-and-drop deploys, instant rollbacks, and built-in form handling.",
    signupUrl: "https://app.netlify.com/signup",
    badges: ["Popular", "Easy Setup"],
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    formatTemplate: "{name}.pages.dev",
    category: "static",
    popularity: 9,
    setupEase: 8,
    description: "Lightning-fast static hosting on Cloudflare's global edge network.",
    signupUrl: "https://dash.cloudflare.com/sign-up",
    badges: ["Popular", "Free Tier"],
  },
  {
    id: "github-pages",
    name: "GitHub Pages",
    formatTemplate: "{name}.github.io",
    category: "static",
    popularity: 9,
    setupEase: 7,
    description: "Host static sites directly from a GitHub repo. Perfect for portfolios.",
    signupUrl: "https://github.com/signup",
    badges: ["Popular"],
  },
  {
    id: "infinityfree",
    name: "InfinityFree",
    formatTemplate: "{name}.infinityfreeapp.com",
    category: "hosting",
    popularity: 6,
    setupEase: 6,
    description: "Free PHP and MySQL hosting with unlimited bandwidth.",
    signupUrl: "https://www.infinityfree.com/",
    badges: ["Free Tier"],
  },
  {
    id: "duckdns",
    name: "DuckDNS",
    formatTemplate: "{name}.duckdns.org",
    category: "subdomain",
    popularity: 7,
    setupEase: 9,
    description: "Free dynamic DNS subdomains, great for self-hosted services.",
    signupUrl: "https://www.duckdns.org/",
    badges: ["Easy Setup"],
  },
  {
    id: "freedns",
    name: "FreeDNS",
    formatTemplate: "{name}.mooo.com",
    category: "subdomain",
    popularity: 6,
    setupEase: 7,
    description: "Thousands of free subdomain options across many shared root domains.",
    signupUrl: "https://freedns.afraid.org/",
    badges: ["Free Tier"],
  },
  {
    id: "awardspace",
    name: "AwardSpace",
    formatTemplate: "{name}.atwebpages.com",
    category: "hosting",
    popularity: 5,
    setupEase: 7,
    description: "Free web hosting with PHP, MySQL, and a friendly control panel.",
    signupUrl: "https://www.awardspace.com/",
    badges: ["Free Tier"],
  },
];
