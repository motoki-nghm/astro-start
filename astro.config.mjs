// https://astro.build/config
import image from '@astrojs/image';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import purgecss from 'astro-purgecss';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets',
  },
  integrations: [
    sitemap(),
    purgecss(),
    compress(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    preact({ compat: true }),
    relativeLinks(),
  ],
});
