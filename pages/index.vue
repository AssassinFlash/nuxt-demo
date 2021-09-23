<template>
  <div>
    <Nav />
    <Slider />
    <CompanyProfile />
  </div>
</template>
<script>
import Nav from '../components/Nav'
import Slider from '~/components/Slider'
import CompanyProfile from '~/components/CompanyProfile'

export default {
  components: {
    Nav,
    Slider,
    CompanyProfile
  }
}
</script>
