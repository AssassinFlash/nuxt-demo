<template>
  <section class="profile-area pb-120">
    <div class="container">
      <div class="row profile-background">
        <div class="col-lg-5 mt-50">
          <div class="profile-thumb animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
            <img src="/assets/images/company-profile.png" alt="">
          </div>
        </div>
        <div class="col-lg-7 mt-50">
          <div class="profile-item">
            <div class="profile-header">
              <h3 class="title">
                {{ $t('index.companyProfile.title') }}
              </h3>
              <span>{{ $t('index.companyProfile.brief') }}</span>
            </div>
            <div class="row">
              <div class="col-lg-7 col-md-7">
                <div class="profile-list-content">
                  <p>{{ $t('index.companyProfile.content') }}</p>
                  <ul class="profile-list-ul">
                    <li class="profile-list-li">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-duigoux" />
                      </svg>
                      1111
                    </li>
                    <li><i class="flaticon-tick" />Suspe ndisse suscipit sagittis leo.</li>
                    <li><i class="flaticon-tick" />Entum estibulum dignissim posuere.</li>
                    <li><i class="flaticon-tick" />If you are going to use a passage.</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 col-sm-7">
                <div class="solution-slide-item mt-50">
                  <div class="solution-services">
                    <i class="flaticon-creative-design" />
                    <p>We’re providing the best industrial services</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="solution-user  d-flex align-items-center">
              <div class="user">
                <img src="/assets/images/solution-user.png" alt="user">
              </div>
              <div class="sing">
                <img src="/assets/images/solution-sing.png" alt="user">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="solution-shape animated wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
      <img src="/assets/images/shape/shape-13.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompanyProfile'
}
</script>

<style lang="less" scoped>
.profile-area {
  margin-top: -70px;
  z-index: 11;
  position: relative;
  padding-bottom: 120px;

  .profile-background {
    position: relative;

    &:before {
      width: 102%;
      position: absolute;
      content: '';
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      height: 100%;
      border-top: 10px solid #FF8D1D;
      background: #fff;
    }

    .profile-thumb {
      img {
        height: 330px;
      }
    }

    .profile-item {
      padding-left: 70px;
      margin-top: -12px;

      .profile-header {
        .title {
          font-size: 54px;
          font-weight: 400;
          color: #192437;
          letter-spacing: 2px;
        }

        span {
          display: block;
          width: 500px;
          font-size: 34px;
          line-height: 44px;
          color: #FF8D1D;
          padding-top: 40px;
        }
      }

      .profile-list-content {
        p {
          font-weight: 400;
          color: #7e8591;
          line-height: 34px;
          letter-spacing: .7px;
          padding-right: 55px;
          padding-bottom: 26px;
          padding-top: 41px;
        }

        .profile-list-ul {
          margin: 0;
          padding-top: 0;

          .profile-list-li {
            font-weight: 400;
            line-height: 44px;
            color: #7e8591;

            .icon {
              width: 20px;
              height: 20px;
              margin-right: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
