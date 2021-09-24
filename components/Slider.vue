<template>
  <section class="banner-slide">
    <VueSlickCarousel v-bind="settings">
      <div class="banner-area slide-bg1 d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h4 data-animation="fadeInDown" data-delay="1s">
                  {{ $t('intro.title') }}
                </h4>
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">
                  {{ $t('intro.slogan') }}
                </h3>
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">
                  {{ $t('intro.button') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-area slide-bg2 d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h4 data-animation="fadeInDown" data-delay="1s">
                  {{ $t('application.title') }}
                </h4>
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">
                  {{ $t('application.slogan') }}
                </h3>
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">
                  {{ $t('application.button') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'Slider',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        arrows: false,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.banner-slide {
  top: 100px;
}

.banner-area {
  height: 700px;
  position: relative;
  z-index: 10;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #000;
    opacity: .3;
  }

  .banner-content {
    text-align: left;

    h4 {
      font-size: 30px;
      color: white;
      background: rgba(18, 27, 43, .2);
      line-height: 60px;
      padding: 0 20px;
      letter-spacing: 1.5px;
    }

    .title {
      font-size: 80px;
      line-height: 100px;
      color: white;
      padding-top: 11px;
      padding-bottom: 41px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
    }

    a {
      box-shadow: 0 20px 20px 0 rgba(0, 0, 0, .04);
    }

    .main-btn {
      &:before {
        position: absolute;
        content: '';
        left: 60px;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        width: 15px;
        background: white;
        transition: all .4s ease-out 0s;
      }

      display: inline-block;
      font-weight: 700;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      background: #FF8D1D;
      padding: 0 60px 0 85px;
      font-size: 20px;
      line-height: 75px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      z-index: 5;
      transition: all .4s ease-out 0s;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;

      &:hover {
        background: #192437;
      }
    }
  }
}

.slide-bg1 {
  background-image: url(/assets/images/banner-bg-1.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.slide-bg2 {
  background-image: url(/assets/images/banner-bg-2.jpg);
}
</style>
