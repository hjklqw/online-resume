module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    defaultNS: 'landing',
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
