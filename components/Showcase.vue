<template>
  <section class="reference-area pt-120">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="reference-title text-center mb-20">
            <h3 class="title">
              案例展示
            </h3>
            <a class="main-button hvr-sweep-to-right" href="#">查看所有</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="reference-item mt-30 animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
              <div class="reference-thumb shadow p-3 mb-5 bg-white rounded">
                <img src="/assets/images/reference_show1.jpg" alt="reference">
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="reference-item mt-30 animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div class="reference-thumb shadow p-3 mb-5 bg-white rounded">
                <img src="/assets/images/reference_show2.jpg" alt="reference">
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="reference-item mt-30 animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
              <div class="reference-thumb shadow p-3 mb-5 bg-white rounded">
                <img src="/assets/images/reference_show3.jpg" alt="reference">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Showcase'
}
</script>

<style lang="less" scoped>
.reference-area {
  padding-bottom: 120px;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 30%;
    width: 100%;
    background-image: url(/assets/images/news-bg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .reference-title {
    padding-bottom: 22px;
    position: relative;

    .title {
      color: #192437;
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
        background: #192437;
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
        background: #192437;
        left: 60%;
        top: 60%;
        box-shadow: 0 2px 2px black;
        transform: translateY(-50%);
      }
    }

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
  }
}

.reference-thumb {
  height: 300px;

  img {
    height: 100%;
  }
}

.hvr-sweep-to-right {
  &:before {
    background: #192437;
  }
}
</style>
