<template>
  <header class="header-area">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-top-items d-flex justify-content-between align-items-center">
              <div class="logo">
                <a href="#">
                  <img src="/assets/images/logo.png" alt="">
                  <h1>{{ $t('topMenu.logo') }}</h1>
                </a>
              </div>
              <div class="header-top-info">
                <ul class="header-top-ul">
                  <li class="header-top-li">
                    <div class="header-top-icon">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjian" />
                      </svg>
                    </div>
                    <div class="header-top-desc">
                      <span>{{ $t('topMenu.email') }}</span>
                      <a href="mailto:sales@sunriver-electric.com">sales@sunriver-electric.com</a>
                    </div>
                  </li>
                  <li class="header-top-li">
                    <div class="header-top-icon">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianhua1" />
                      </svg>
                    </div>
                    <div class="header-top-desc">
                      <span>{{ $t('topMenu.phone') }}</span>
                      <a href="tel:13763316262">+86 137 6331 6262</a>
                    </div>
                  </li>
                  <li class="header-top-li">
                    <div class="header-top-icon">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dizhi" />
                      </svg>
                    </div>
                    <div class="header-top-desc">
                      <span>{{ $t('topMenu.address.title') }}</span>
                      <a href="mailto:sales@sunriver-electric.com">{{ $t('topMenu.address.location') }}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-header-item d-flex justify-content-between align-items-center">
              <div class="main-header-menus  d-flex">
                <div class="header-btn">
                  <span>{{ $t('topMenu.lang.title') }}</span>
                  <ul class="header-lang-ul">
                    <li class="header-lang-li" @click="switchLocale('zh')">
                      {{ $t('topMenu.lang.zh') }}
                    </li>
                    <li class="header-lang-li" @click="switchLocale('en')">
                      {{ $t('topMenu.lang.en') }}
                    </li>
                  </ul>
                </div>
                <div class="header-menu">
                  <ul class="header-menu-ul">
                    <li v-for="menuItem in menuBar" :key="menuItem.index" class="header-menu-li">
                      <a href="#">{{ $t('topMenu.' + menuItem.title) }}</a>
                      <ul v-if="menuItem.subMenu" class="header-submenu-ul">
                        <li v-for="subMenuItem in menuItem.subMenu" :key="subMenuItem.index" class="header-submenu-li">
                          <a href="#">{{ $t('topMenu.subMenu.' + subMenuItem.title) }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Nav',
  data () {
    return {
      menuBar: [
        {
          index: 1,
          title: 'home'
        },
        {
          index: 2,
          title: 'product'
        },
        {
          index: 4,
          title: 'application',
          subMenu: [
            {
              index: 11,
              title: 'consult',
              name: 'ConsultFeedback'
            },
            {
              index: 12,
              title: 'download',
              name: 'DataDownload'
            }
          ]
        },
        {
          index: 5,
          title: 'support'
        },
        {
          index: 6,
          title: 'about'
        }
      ],
      headerInfo: {}
    }
  },
  computed: {
    ...mapState('locale', ['locale'])
  },
  mounted () {
    axios.get('http://localhost:4000/header').then((res) => {
      // eslint-disable-next-line no-console
      this.headerInfo = res.data
    })
  },
  methods: {
    ...mapMutations({ SET_LOCALE: 'locale/SET_LANG' }),
    switchLocale (lang) {
      const locale = lang
      this.$i18n.locale = locale
      this.SET_LOCALE(locale)
      this.$cookies.set('lang', locale)
    }
  }
}
</script>

<style lang="less" scoped>
.header-area {
  .header-top {
    position: relative;

    .logo {
      margin: 21px 0 21px 0;

      a {
        display: flex;
        align-items: center;
      }

      img {
        width: 150px;
        height: 150px;
        margin-right: 10px;
      }

      h1 {
        font-size: 60px;
        width: 150px;
      }
    }

    .header-top-info {
      .header-top-ul {
        display: flex;

        .header-top-li {
          box-sizing: border-box;
          width: 180px;
          position: relative;
          border-right: 1px solid #eaeaea;
          //padding-right: 30px;
          margin-left: 30px;
          display: flex;
          align-items: center;

          .header-top-icon {
            margin-right: 15px;

            .icon {
              width: 40px;
            }
          }

          .header-top-desc {
            display: flex;
            flex-direction: column;

            span {
              font-size: 14px;
              color: #7f8692;
            }

            a {
              font-size: 14px;
              color: black;
            }
          }

          &:first-of-type {
            margin-left: 0;
            padding-right: 30px;
          }

          &:last-of-type {
            padding-right: 0;
            border-right: 0;
            width: 220px;
          }
        }
      }
    }
  }
}

.main-header {
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    min-width: 20%;
    background: #f4f4f5;
  }

  .header-btn {
    position: relative;
    width: 250px;

    span {
      display: block;
      background: #FF8D1D;
      line-height: 70px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      border-right: 10px solid #fff;
      white-space: nowrap;
      z-index: 5;
      transition: all .3s ease-out 0s;
      cursor: pointer;
    }

    &:hover {
      .header-lang-ul {
        opacity: 1;
        visibility: visible;
      }
    }

    .header-lang-ul {
      position: absolute;
      left: 15%;
      top: 102%;
      width: 180px;
      color: white;
      background: rgba(0, 0, 0, .3);
      transition: all .3s ease-out 0s;
      opacity: 0;
      visibility: hidden;
      z-index: 1000;

      .header-lang-li {
        height: 50px;
        text-align: center;
        line-height: 50px;
        transition: all .3s ease-out 0s;
        cursor: pointer;

        &:hover {
          color: #1773CC;
          background: #192437;
        }
      }
    }
  }

  background: #192437;
  position: relative;

  .header-menu {
    display: flex;
    align-items: center;
  }

  .main-header-item {
    height: 70px;

    .header-menu-ul {
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-menu-li {
        position: relative;
        height: 100%;
        width: 100px;
        margin-right: 50px;
        transition: all .4s ease-out 0s;

        &:hover {
          a {
            color: #1773CC;
          }

          .header-submenu-ul {
            opacity: 1;
            visibility: visible;
          }
        }

        .header-submenu-ul {
          position: absolute;
          left: -25%;
          top: 205%;
          width: 180px;
          background: rgba(0, 0, 0, .3);
          transition: all .3s ease-out 0s;
          opacity: 0;
          visibility: hidden;
          z-index: 1000;

          .header-submenu-li {
            height: 50px;
            transition: all .3s ease-out 0s;

            &:hover {
              a {
                background: #192437;
                color: #1773CC;
              }
            }

            a {
              display: block;
              height: 100%;
              line-height: 50px;
              color: white;
            }
          }
        }

        a {
          display: block;
          width: 100%;
          height: 100%;
          color: white;
          text-align: center;
          transition: all .3s ease-out 0s;
        }
      }
    }
  }
}

</style>
