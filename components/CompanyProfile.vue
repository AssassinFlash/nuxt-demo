<template>
  <section class="profile-area pb-120">
    <div class="container">
      <div class="row profile-background">
        <div class="col-lg-5 mt-50">
          <div class="profile-thumb animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
            <img src="/assets/images/company-profile.png" alt="">
          </div>
          <ul class="profile-list-ul">
            <li class="profile-list-li">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duigoux" />
              </svg>
              {{ $t('index.companyProfile.desc.title1') }}
            </li>
            <li class="profile-list-li">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duigoux" />
              </svg>
              {{ $t('index.companyProfile.desc.title2') }}
            </li>
            <li class="profile-list-li">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duigoux" />
              </svg>
              {{ $t('index.companyProfile.desc.title3') }}
            </li>
            <li class="profile-list-li">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duigoux" />
              </svg>
              {{ $t('index.companyProfile.desc.title4') }}
            </li>
          </ul>
        </div>
        <div class="col-lg-7 mt-50">
          <div class="profile-item">
            <div class="profile-header">
              <h3 class="title">
                {{ $t('index.companyProfile.title') }}
              </h3>
              <h4>{{ $t('index.companyProfile.brief') }}</h4>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="profile-list-content">
                  <p>{{ $t('index.companyProfile.content') }}</p>
                </div>
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
        height: 365px;
      }
    }

    .profile-list-ul {
      margin: 0;
      padding-top: 20px;
      padding-left: 20px;

      .profile-list-li {
        font-weight: 400;
        line-height: 44px;
        color: #7e8591;

        .icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
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
          text-shadow: 2px 2px 2px black;
        }

        h4 {
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
          width: 500px;
          font-size: 18px;
          font-weight: 400;
          color: #7e8591;
          line-height: 34px;
          letter-spacing: .7px;
          padding-top: 40px;
        }
      }
    }
  }
}
</style>
