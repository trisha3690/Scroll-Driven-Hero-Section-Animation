import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: 'gh-pages-base-redirect',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && req.url.startsWith('/scroll-driven-hero-animation')) {
            req.url = req.url.replace(/^\/scroll-driven-hero-animation\/?/, '/') || '/';
          }
          next();
        });
      },
    },
  ],
  base: command === 'build' ? '/scroll-driven-hero-animation/' : '/',
}));
