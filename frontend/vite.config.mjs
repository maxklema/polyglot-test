import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 32000,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    allowedHosts: ['"polyglot-test-maxklema-main.opensource.mieweb.org"']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});

