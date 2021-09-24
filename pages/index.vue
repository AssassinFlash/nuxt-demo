<template>
  <div>
    <Nav />
    <Slider />
    <CompanyProfile />
    <ProjectArea />
    <Showcase />
    <Footer />
  </div>
</template>
<script>
import Nav from '../components/Nav'
import Slider from '~/components/Slider'
import CompanyProfile from '~/components/CompanyProfile'
import ProjectArea from '~/components/ProjectArea'
import Showcase from '~/components/Showcase'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav,
    Slider,
    CompanyProfile,
    ProjectArea,
    Showcase,
    Footer
  }
}
</script>
