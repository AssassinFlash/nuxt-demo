export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-jzh-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/glightbox/glightbox.min.css'
      },
      {
        rel: 'stylesheet',
        href: './assets/css/default.css'
      }
    ],
    script: [
      {
        src: '/assets/plugins/glightbox/glightbox.min.js',
        body: true
      },
      {
        src: '/assets/plugins/accordion/accordion.min.js',
        body: true
      },
      {
        src: '//at.alicdn.com/t/font_2812132_q2sz04hc8r.js',
        body: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
        body: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  router: {
    // 路由配置
    middleware: ['i18n']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js'
    // {
    //   src: './static/assets/plugins/iconfont/iconfont.js',
    //   ssr: false
    // }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt', ['cookie-universal-nuxt', { parseJSON: true }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
