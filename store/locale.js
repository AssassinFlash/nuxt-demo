export default {
  state: () => ({
    locales: ['zh', 'en'],
    locale: 'zh'
  }),
  mutations: {
    SET_LANG (state, locale) {
      // 更改当前的国际化
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
    }
  }
}
