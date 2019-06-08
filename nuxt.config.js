import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', size:'180x180', href: '/assets/img/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size:'32x32', href: '/assets/img/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size:'16x16', href: '/assets/img/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/assets/img/favicons/site.webmanifest' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/assets/img/favicons/safari-pinned-tab.svg' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "@/assets/sass/main.sass"
  ],


  router: {
    middleware: [
      "clearValidationErrors"
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //"~/plugins/vue-input-ui"
    '~/plugins/mixins/user.js',
    '~/plugins/mixins/validation.js',
    '~/plugins/axios.js',
    '~plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    ['nuxt-i18n',{
      locales: [
        {code: "en", iso: 'en-US', file: "en.js", name: 'English'},
        {code: "ru", iso: 'ru-RU', file: "ru.js", name: 'Русский'},
        {code: "zh", iso: 'zh-CN', file: "zh.js", name: '中国  '},
        {code: "fr", iso: 'fr-FR', file: "fr.js", name: 'France'},
        {code: "pt", iso: 'pt-PT', file: "pt.js", name: 'Portugal'},
        {code: "es", iso: 'es-ES', file: "es.js", name: 'Español'},
      ],
      lazy: true,
      defaultLocale: "en",
      langDir: "assets/i18n/",
      vueI18n: {
        fallbackLocale: "en"
      },
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
      pages: {},
      parsePages: false
    }]
  ],

  axios: {
    baseURL: "https://api.gymhealth.org/api"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: '/logout',
            method: 'post'
          }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      },
    },
    redirect: {
      login: "/start/sign-in",
      home: false
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //vendor: ['vue-input-ui'],
    extend(config, ctx) {
    }
  }
}
