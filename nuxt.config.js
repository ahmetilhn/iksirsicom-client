import { resolve } from 'path'
export default {
  loading: {
    color: '#252529',
    height: '3px'
  },
  alias: {
    '@': resolve(__dirname, './'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iksirsi - Developer Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/img/favicon/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicon/apple-touch-icon.png',
      },
    ],
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
      '@/assets/styles/sass/_mixins.scss',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
