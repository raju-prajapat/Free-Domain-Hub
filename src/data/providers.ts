export type ProviderCategory = "hosting" | "static" | "subdomain";

export interface Provider {
  id: string;
  name: string;
  logo: string;
  officialUrl: string;
  signupUrl: string;
  formatTemplate: string; // use {name}
  category: ProviderCategory;
  popularity: number; // 1-10
  setupEase: number; // 1-10
  description: string;
  badges: string[];
  verificationNote: string;
}

export const providers: Provider[] = [
  {
    id: "vercel",
    name: "Vercel",
    logo: "https://vercel.com/favicon.ico",
    officialUrl: "https://vercel.com",
    signupUrl: "https://vercel.com/signup",
    formatTemplate: "{name}.vercel.app",
    category: "hosting",
    popularity: 10,
    setupEase: 10,
    description: "Deploy modern web apps with zero config. Free SSL and global CDN included.",
    badges: ["Popular", "Easy Setup"],
    verificationNote: "Deployment required for subdomain activation.",
  },
  {
    id: "netlify",
    name: "Netlify",
    logo: "https://www.netlify.com/favicon.ico",
    officialUrl: "https://www.netlify.com",
    signupUrl: "https://app.netlify.com/signup",
    formatTemplate: "{name}.netlify.app",
    category: "hosting",
    popularity: 9,
    setupEase: 10,
    description: "Drag-and-drop deploys, instant rollbacks, and built-in form handling.",
    badges: ["Popular", "Easy Setup"],
    verificationNote: "Free subdomains are assigned per site.",
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    logo: "https://www.cloudflare.com/favicon.ico",
    officialUrl: "https://pages.cloudflare.com",
    signupUrl: "https://dash.cloudflare.com/sign-up",
    formatTemplate: "{name}.pages.dev",
    category: "static",
    popularity: 9,
    setupEase: 8,
    description: "Lightning-fast static hosting on Cloudflare's global edge network.",
    badges: ["Popular", "Free Tier"],
    verificationNote: "Requires a Cloudflare account.",
  },
  {
    id: "github-pages",
    name: "GitHub Pages",
    logo: "https://github.com/favicon.ico",
    officialUrl: "https://pages.github.com",
    signupUrl: "https://github.com/signup",
    formatTemplate: "{name}.github.io",
    category: "static",
    popularity: 9,
    setupEase: 7,
    description: "Host static sites directly from a GitHub repo. Perfect for portfolios.",
    badges: ["Popular"],
    verificationNote: "Format is username.github.io/repo-name or username.github.io.",
  },
  {
    id: "infinityfree",
    name: "InfinityFree",
    logo: "https://www.infinityfree.com/favicon.ico",
    officialUrl: "https://www.infinityfree.com",
    signupUrl: "https://www.infinityfree.com/register",
    formatTemplate: "{name}.infinityfreeapp.com",
    category: "hosting",
    popularity: 6,
    setupEase: 6,
    description: "Free PHP and MySQL hosting with unlimited bandwidth.",
    badges: ["Free Tier"],
    verificationNote: "Offers various free subdomain choices.",
  },
  {
    id: "duckdns",
    name: "DuckDNS",
    logo: "https://www.duckdns.org/favicon.ico",
    officialUrl: "https://www.duckdns.org",
    signupUrl: "https://www.duckdns.org/",
    formatTemplate: "{name}.duckdns.org",
    category: "subdomain",
    popularity: 7,
    setupEase: 9,
    description: "Free dynamic DNS subdomains, great for self-hosted services.",
    badges: ["Easy Setup"],
    verificationNote: "Verify availability directly on DuckDNS homepage.",
  },
  {
    id: "freedns",
    name: "FreeDNS",
    logo: "https://freedns.afraid.org/favicon.ico",
    officialUrl: "https://freedns.afraid.org",
    signupUrl: "https://freedns.afraid.org/signup/",
    formatTemplate: "{name}.mooo.com",
    category: "subdomain",
    popularity: 6,
    setupEase: 7,
    description: "Thousands of free subdomain options across many shared root domains.",
    badges: ["Free Tier"],
    verificationNote: "Thousands of domain extensions available.",
  },
  {
    id: "awardspace",
    name: "AwardSpace",
    logo: "https://www.awardspace.com/favicon.ico",
    officialUrl: "https://www.awardspace.com",
    signupUrl: "https://www.awardspace.com/signup/",
    formatTemplate: "{name}.atwebpages.com",
    category: "hosting",
    popularity: 5,
    setupEase: 7,
    description: "Free web hosting with PHP, MySQL, and a friendly control panel.",
    badges: ["Free Tier"],
    verificationNote: "Includes free short-term subdomains.",
  },
];
