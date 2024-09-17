import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      kurocoApiDomain: 'https://hashtag-dev.g.kuroco.app'
    }
  },
  app: {
    head: {
      title: 'front_nuxt_corporate',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  modules: [
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix_and_default',
        // 切り替える言語を定義
        locales: [
          { code: 'ja', file: 'ja.json' },
          { code: 'en', file: 'en.json' }
        ],
        // デフォルトの言語を設定
        defaultLocale: 'ja',
        vueI18nLoader: true,
        lazy: true,
        // jsonファイルを保存したディレクトリを指定
        langDir: 'locales/'
      }
    ]
  ],

  googleFonts: {
    families: {
      'Noto Sans JP': [400, 700],
      'Noto Serif JP': [400, 700],
      Helvetica: [400, 700],
      'Secular One': [400, 700],
      Lora: [500],
      'Material Symbols Outlined': [400]
    }
  },

  devtools: { enabled: true },
  css: ['@/assets/scss/style.scss', 'animate.css/animate.min.css'],

  nitro: {
    // FullStaticGeneration
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html', '/200.html']
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
});
