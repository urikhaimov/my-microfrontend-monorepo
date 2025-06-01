import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'widgetMetrics',
      filename: 'remoteEntry.js',
      exposes: {
        './WidgetApp': './src/WidgetApp'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 4174
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
