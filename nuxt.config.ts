export default {
  nitro: {
    preset: 'vercel-edge',
  },
  head: {
    title: "InstaMerch",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:description",
        name: "description",
        content:
          "Get customized t-shirts with a few clicks,Just upload an image or type what design you want and we'll print it for you."
      },
      {
        hid: "description",
        name: "description",
        content:
          "Get customized t-shirts with a few clicks,Just upload an image or type what design you want and we'll print it for you."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}