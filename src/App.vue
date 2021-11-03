<template>
  <Header></Header>
  <Banner></Banner>
  <BestSeller></BestSeller>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import BestSeller from './components/BestSeller.vue'
export default {
  components: {
    Header,
    Banner,
    BestSeller
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
