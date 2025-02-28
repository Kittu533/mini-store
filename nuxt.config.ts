export default defineNuxtConfig({
  compatibilityDate: '2025-02-26',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    'shadcn-nuxt',
  ],

  colorMode: {
    preference: 'light', // Default mode ke light
    fallback: 'light',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }

})