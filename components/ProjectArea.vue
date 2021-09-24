<template>
  <section class="project-area">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-title text-center mb-20">
            <h3 class="title">
              {{ $t('product.title') }}
            </h3>
            <a href="#" class="main-button hvr-sweep-to-right">查看所有</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row project-active">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="project-item mt-30">
                <div class="project-thumb shadow p-3 mb-5 bg-white rounded">
                  <img src="/assets/images/product_show1.png" alt="projects">
                  <div class="project-content">
                    <div class="d-flex flex-column justify-content-center" style="height:20%;padding:5% 0;">
                      <h4 class="title">
                        SR-1/1-600-S1
                      </h4>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:50%;padding:5% 0">
                      <h3>1.适用于户用光伏发电系统</h3>
                      <h3>2.一进一出设计</h3>
                      <h3>3.满足客户定制化需求</h3>
                      <h3>4.IP65防护等级</h3>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:30%;padding:5% 0">
                      <a href="#" class="hvr-sweep-to-right">查看该产品</a>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="project-item mt-30">
                <div class="project-thumb shadow p-3 mb-5 bg-white rounded">
                  <img src="/assets/images/product_show2.png" alt="projects">
                  <div class="project-content">
                    <div class="d-flex flex-column justify-content-center" style="height:20%;padding:5% 0">
                      <h4 class="title">
                        SR-2/2-600-S2
                      </h4>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:50%;padding:5% 0">
                      <h3>1.适用于户用光伏发电系统</h3>
                      <h3>2.二进二出设计</h3>
                      <h3>3.满足客户定制化需求</h3>
                      <h3>4.IP65防护等级</h3>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:30%;padding:5% 0">
                      <a href="#" class="hvr-sweep-to-right">查看该产品</a>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="project-item mt-30">
                <div class="project-thumb shadow p-3 mb-5 bg-white rounded">
                  <img src="/assets/images/product_show3.png" alt="projects">
                  <div class="project-content">
                    <div class="d-flex flex-column justify-content-center" style="height:20%;padding:5% 0">
                      <h4 class="title">
                        SR-3/3-600-S2
                      </h4>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:50%;padding:5% 0">
                      <h3>1.适用于户用光伏发电系统</h3>
                      <h3>2.三进三出设计</h3>
                      <h3>3.满足客户定制化需求</h3>
                      <h3>4.IP65防护等级</h3>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:30%;padding:5% 0">
                      <a href="#" class="hvr-sweep-to-right">查看该产品</a>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="project-item mt-30">
                <div class="project-thumb shadow p-3 mb-5 bg-white rounded">
                  <img src="/assets/images/product_show4.png" alt="projects">
                  <div class="project-content">
                    <div class="d-flex flex-column justify-content-center" style="height:20%;padding:5% 0">
                      <h4 class="title">
                        SR-2/2-1000-T2
                      </h4>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:50%;padding:5% 0">
                      <h3>1.适用于工商业光伏发电系统</h3>
                      <h3>2.二进二出设计</h3>
                      <h3>3.满足客户定制化需求</h3>
                      <h3>4.IP65防护等级</h3>
                    </div>
                    <div class="d-flex flex-column justify-content-center" style="height:30%;padding:5% 0">
                      <a href="#" class="hvr-sweep-to-right">查看该产品</a>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
          </swiper>
          <div class="line" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ProjectArea',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.project-area {
  background: url(/assets/images/faq-bg.jpg) fixed;
  padding-top: 80px;
  padding-bottom: 100px;
  margin-top: -50px;

  .project-title {
    padding-bottom: 22px;
    position: relative;

    .main-button {
      position: absolute;
      right: 80px;
      top: 50%;
      transform: translateY(-50%);
      width: 150px;
      height: 50px;
      background: #FF8D1D;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      color: #fff;
      transition: all .3s ease-out 0s;

      &:hover {
        color: #1773CC;
      }
    }

    .title {
      color: #fff;
      position: relative;
      font-size: 50px;
      font-weight: 400;
      text-transform: uppercase;
      text-shadow: 2px 2px 3px black;

      &:before {
        position: absolute;
        width: 150px;
        height: 5px;
        content: '';
        background: #fff;
        left: 30%;
        top: 60%;
        box-shadow: 0 2px 2px black;
        transform: translateY(-50%);
      }

      &:after {
        position: absolute;
        width: 150px;
        height: 5px;
        content: '';
        background: #fff;
        left: 60%;
        top: 60%;
        box-shadow: 0 2px 2px black;
        transform: translateY(-50%);
      }
    }
  }

  .project-item {
    margin-bottom: 60px;
    position: relative;

    .project-thumb {
      position: relative;
      overflow: hidden;
      transition: all .4s ease-out 0s;

      &:hover {
        .project-content {
          top: 0;
        }
      }

      img {
        width: 100%;
        transition: all .3s ease-out 0s;
      }

      .project-content {
        position: absolute;
        left: 0;
        top: 100%;
        height: 100%;
        width: 100%;
        background-color: rgba(25, 36, 55, .8);
        padding-left: 10%;
        padding-right: 10%;
        letter-spacing: 1px;
        transition: all .5s ease-out 0s;

        .title {
          color: #fff;
          font-size: 24px;
          font-weight: 400;
          text-transform: uppercase;
        }

        h3 {
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: 1.5px;
          margin-right: 5px;

          &:first-of-type {
            padding-top: 26px;
          }

          &:last-of-type {
            padding-bottom: 29px;
          }
        }

        a {
          box-sizing: content-box;
          display: block;
          width: 120px;
          height: 30px;
          padding: 10px 20px;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: #FF8D1D;
          letter-spacing: 1px;
          position: relative;
          transition: all .3s ease-out 0s;

          &:hover {
            color: white;
          }
        }
      }
    }
  }
}

.line {
  height: 2px;
  width: 90%;
  background: #ccc;
  margin: 20px auto 0;
}

.hvr-sweep-to-right {
  &:before {
    background: #192437;
  }
}
</style>
