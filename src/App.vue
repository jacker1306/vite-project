<template>
  <Header></Header>
  <Banner></Banner>
  <BestSeller></BestSeller>
  <FashionList></FashionList>
  <WhyUs></WhyUs>
  <Footer></Footer>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import BestSeller from './components/BestSeller.vue'
import FashionList from './components/FashionList.vue'
import WhyUs from './components/WhyUs.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    Header,
    Banner,
    BestSeller,
    FashionList,
    WhyUs,
    Footer,
  },
  setup() {
    

    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
