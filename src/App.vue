<template>
  <Header></Header>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
export default {
  components: {
    Header,
    Modal,
  },
  setup() {
    let modalStatus = false
    console.log(modalStatus)

    return {
      modalStatus
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
