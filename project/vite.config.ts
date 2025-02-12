import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/myapps/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'CryptoCoin-1.0.0',
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false
    }
  }
});




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
//   // Add public directory for template assets
//   publicDir: 'CryptoCoin-1.0.0',
//   server: {
//     watch: {
//       usePolling: true,
//     },
//     hmr: {
//       overlay: false // Disable the HMR overlay
//     }
//   }
// });