<template>
  <Header></Header>
  <Banner></Banner>
  <BestSeller></BestSeller>
  <FashionList></FashionList>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import BestSeller from './components/BestSeller.vue'
import FashionList from './components/FashionList.vue'
export default {
  components: {
    Header,
    Banner,
    BestSeller,
    FashionList
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
