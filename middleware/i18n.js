export default ({
  isHMR,
  app,
  store,
  error
}) => {
  if (isHMR) {
    return
  } // 是否通过模块热替换
  const locale = app.$cookies.get('lang') || app.i18n.fallbackLocale
  if (!store.state.locale.locales.includes(locale)) {
    return error({
      message: 'This page could not be found.',
      statusCode: 404
    })
  }
  store.commit('locale/SET_LANG', locale)
  app.i18n.locale = locale
}
