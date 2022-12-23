// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
      htmlAttrs: {
        lang: "ru",
      },
      script: [
        {src: '//code.jivo.ru/widget/0vaVd8xIjv', async:true}
      ]
    },
  },
  ssr: true,
  modules: ["@pinia/nuxt", "nuxt-lodash"],
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
