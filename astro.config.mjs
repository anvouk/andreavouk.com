import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

const expressiveCodeConfig = expressiveCode({
  frames: {
    extractFileNameFromCode: false,
    removeCommentsWhenCopyingTerminalFrames: false,
  },
  styleOverrides: {
    codeFontFamily: "'Source Code Pro', 'Monospaced', monospace",
    codeFontSize: '1.1em',
    borderRadius: '0.3rem',
    codePaddingBlock: '0.8rem',
    codePaddingInline: '1rem',
    codeLineHeight: '1.50',
  },
  defaultProps: {
    frame: 'none',
  },
  themes: ['one-dark-pro'],
});

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://andreavouk.com',
  integrations: [sitemap(), expressiveCodeConfig, mdx()]
});
