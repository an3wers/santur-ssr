// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap'},
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
  ssr: true,
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-preset-env": {},
    },
  },
  build: {
    transpile: ["vue3-popper", "vue3-carousel", '@gtm-support/core'],
  },
  vite: {
    resolve: {
      dedupe: ["vue"],
    },
  },
  // plugins: ["~plugins/maska.js"],
});
