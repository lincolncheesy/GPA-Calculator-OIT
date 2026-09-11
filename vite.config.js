import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/GPA-Calculator-OIT/',
    plugins: [tailwindcss()],
  };
});
