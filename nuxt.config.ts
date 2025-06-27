export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: ["@/assets/styles/main.scss", "swiper/css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_utils.scss" as *;',
          api: "modern-compiler",
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      title: "UNSTACKED — Early Access Comes With Real Advantages",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "The earlier you join, the more access and utility you unlock.",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "og:image:width",
          content: "600",
        },
        {
          property: "og:image:height",
          content: "314",
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          property: "og:description",
          content:
            "The earlier you join, the more access and utility you unlock.",
        },
        {
          property: "og:title",
          content: "UNSTACKED — Early Access Comes With Real Advantages",
        },
        {
          property: "og:site_name",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: { port: 6969 },
});
