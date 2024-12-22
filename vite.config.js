import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sentimenter/', // Update with your repo name
  build: {
    target: 'esnext', // Ensure modern syntax is supported
  },
});
