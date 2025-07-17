// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 32000,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    allowedHosts: 'polyglot-test-maxklema-test-branch-1.opensource.mieweb.org', // Allow all hosts
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
