// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vue3-carousel-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt'
  ],
  components: [
    {
      path: ('./components'),
      pathPrefix: false,
      global: true
    }
  ],

  css: [
    '~/assets/css/input.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/fonts/barlow.css',
    '~/assets/fonts/major.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/auth.js'

  ],
  runtimeConfig: {
    public: {
      serverUrl: 'http://localhost/PFC/server.php'
    }
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
})