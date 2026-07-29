import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Horoscope_Generator_VedicAstrology/' : '/',
});