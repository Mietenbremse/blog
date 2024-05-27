import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.cookiestudios.org',
  integrations: [mdx(), sitemap(), tailwind({
    // Beispiel: Erlaubt das Verwenden verschachtelter CSS Deklarationen
    // neben dem Tailwind Syntax
    nesting: true,
  }),],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en", ],
    routing: {
      prefixDefaultLocale: true
  }
  }
});