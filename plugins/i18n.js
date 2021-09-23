import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: app.$cookies.get('lang') || 'zh', // 通过cookie设置国际化
    fallbackLocale: 'en', // 默认国际化
    messages: {
      en: require('~/locales/en.json'),
      zh: require('~/locales/zh.json')
    }
  })
}
