// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Vue Designer',
  description: 'Vue Designer Nuxt PrimeVue Tailwind CSS - Quick start template',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-primevue-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-primevue-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    {
      text: 'Home',
      link: '/',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Quick Start',
      link: '/quick-start',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Subscribe',
      link: '/subscribe',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
