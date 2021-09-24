<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-main">
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-widget mt-30">
                <div class="footer-title pb-30">
                  <h4 class="title">
                    Contact
                  </h4>
                </div>
                <div class="footer-about-content">
                  <div class="about-info d-flex align-items-center mb-10">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-youjian" />
                    </svg>
                    <div class="email">
                      <a href="mailto:sales@sunriver-electric.com">
                        <h5>sales@sunriver-electric.com</h5>
                      </a>
                    </div>
                  </div>
                  <div class="about-info d-flex align-items-center mb-10 mt-10">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-dianhua1" />
                    </svg>
                    <div class="call">
                      <a href="tel:13763316262">
                        <h5>+86 137 6331 6262</h5>
                      </a>
                    </div>
                  </div>
                  <div class="about-info d-flex align-items-center mb-10 mt-10">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-dizhi" />
                    </svg>
                    <div class="address">
                      <h5>{{ $t('topMenu.address.location') }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-20">
                  <h4 class="title">
                    Explore
                  </h4>
                </div>
                <div class="footer-about-list">
                  <ul class="about-ul">
                    <li v-for="menuItem in menubar" :key="menuItem.index" class="about-li">
                      <a href="#" class="menu-name">{{ $t('topMenu.' + menuItem.title) }}</a>
                      <ul v-if="menuItem.submenu" class="about-submenu-ul">
                        <li v-for="subMenuItem in menuItem.submenu" :key="subMenuItem.index" class="about-submenu-li">
                          <a href="#" class="submenu-name">{{ $t('topMenu.subMenu.' + subMenuItem.title) }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-widget mt-30 ml-30">
                <div class="footer-title pb-30">
                  <h4 class="title">
                    扫码关注
                  </h4>
                </div>
                <div class="footer-about-list d-flex">
                  <img src="/assets/images/QRcode.png" alt="QRcode" style="width:175px;height:175px">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center mt-50">
          <h2>© Copyright by Guangzhou Sunriver Electric Co., Ltd.</h2>
        </div>
      </div>
    </footer>

    <!--    <div class="go-top-area">-->
    <!--      <div class="go-top-wrap">-->
    <!--        <div class="go-top-btn-wrap">-->
    <!--          <div :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`" @click="scrollTop">-->
    <!--            <i class="fa fa-angle-double-up" />-->
    <!--            <i class="fa fa-angle-double-up" />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      menubar: [
        {
          index: 1,
          title: 'home'
        },
        {
          index: 2,
          title: 'product'
        },
        {
          index: 3,
          title: 'application'
        },
        {
          index: 4,
          title: 'support',
          submenu: [
            {
              index: 11,
              title: 'consult'
            },
            {
              index: 12,
              title: 'download'
            }
          ]
        },
        {
          index: 5,
          title: 'about'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer-area {
  background: #192437;

  .footer-main {
    padding-top: 66px;

    .footer-widget {
      .footer-title {
        .title {
          color: #fff;
          font-size: 18px;
          font-weight: 400;
          text-transform: uppercase;
        }
      }

      .footer-about-content {
        .about-info {
          h5 {
            font-size: 16px;
            color: #e5efff;
            font-weight: 400;
            line-height: 24px;
          }
        }
      }

      .footer-about-list {
        .about-ul {
          .about-li {
            position: relative;
            transition: all .3s ease-out 0s;

            &:hover {
              .menu-name {
                color: #1773CC;
              }

              .about-submenu-ul {
                opacity: 1;
                visibility: visible;
              }
            }

            .menu-name {
              display: block;
              color: #e5efff;
              font-weight: 400;
              font-size: 16px;
              height: 40px;
              line-height: 40px;
              transition: all .3s ease-out 0s;
            }

            .about-submenu-ul {
              position: absolute;
              background: rgba(255, 255, 255, .3);
              width: 150px;
              left: 130%;
              top: 10%;
              opacity: 0;
              visibility: hidden;
              transition: all .3s ease-out 0s;

              .about-submenu-li {
                transition: all .3s ease-out 0s;

                &:hover {
                  background: #FF8D1D;

                  .submenu-name {
                    color: #1773CC;
                  }
                }
              }

              .submenu-name {
                display: block;
                color: #fff;
                height: 40px;
                line-height: 40px;
                text-align: center;
                transition: all .3s ease-out 0s;
              }
            }
          }
        }
      }
    }
  }

  .footer-copyright {
    border-top: 1px solid rgba(255, 255, 255, .2);
    h2{
      font-size: 16px;
      font-weight: 400;
      color: #e5efff;
      line-height: 100px;
    }
  }
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
