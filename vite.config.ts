import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    VitePWA({
      mode: "production",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "IT Support App - MGISolutions",
        short_name: "ITSupportApp",
        theme_color: "#013253",
        start_url: "/",
        display: "standalone",
        background_color: "#013253",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          // {
          //   src: "/icon-512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          "group-guest": [
            "./src/views/login/index.vue",            
            "./src/views/login/forgot.vue",            
            "./src/views/login/reset.vue",            
          ],
          "group-user": [
            "./src/views/profile/index.vue",            
            "./src/views/dashboard.vue",            
          ],
        },
      },
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
});
