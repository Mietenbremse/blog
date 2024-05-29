import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.mietencheck.de",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // Beispiel: Erlaubt das Verwenden verschachtelter CSS Deklarationen
      // neben dem Tailwind Syntax
      nesting: true,
    }),
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // soft redirect, just in case we ever want to change this
  redirects: { "/": { status: 302, destination: "/de" } },
});
