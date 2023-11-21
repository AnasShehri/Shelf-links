export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],

  elementPlus: {
    themes: ['dark']
  },

  app: {
    head: {
      title: "Links | Shelf team",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
