import { resolve } from 'path'
export default {
  alias: {
    '@': resolve(__dirname, './'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iksirsicom-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/vendor/reset.css',
    '@/assets/styles/vendor/flex-classes.css',
    // SCSS file in the project
    '@/assets/styles/sass/_theme.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    scss: [
      '@/assets/styles/sass/_colors.scss',
      '@/assets/styles/sass/_animations.scss',
      '@/assets/styles/sass/_variables.scss',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
