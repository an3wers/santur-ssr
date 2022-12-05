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
    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: {},
    //       autoprefixer: {},
    //       'postcss-preset-env': {},
    //     },
    //   },
    // },
    transpile: ["vue3-popper", "vue3-carousel"],
    // babel: {
    //   presets() {
    //     return [['@nuxt/babel-preset-app']];
    //   },
    // },
  },
  vite: {
    resolve: {
      dedupe: ["vue"],
    },
  },
  // plugins: [
  //   // { src: "~/plugins/maska.ts", mode: "client" }
  //   // { src: "~/plugins/v-mask.client.js", mode: "client" }
  // ],
  // nitro: {
  //   // devProxy: {    '/api/post': 'http://localhost:3000',    '/api/post': { target: 'https://example.com', changeOrigin: true }  }
  //   // devProxy: { '/apiauth/': 'https://isantur.ru/' }
  //   // proxyRequest: {'/apiauth/': 'https://isantur.ru/'}
  // }
});
