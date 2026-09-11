import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/GPA-Calculator-OIT/',
    plugins: [tailwindcss()],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
