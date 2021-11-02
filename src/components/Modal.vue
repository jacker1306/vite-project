<template>
    <div class="wrap h-full w-full absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70">
        <div class="modal w-2/5 h-300px mt-60 mx-auto border border-gray-300 rounded-md min-h-1/2 text-black bg-white">
            <h2 class="text-xl my-5">SIGN IN</h2>
            <button @click="modalStatus=false" class="border border-red-300 px-3 py-1 rounded-lg">Close</button>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: 'Modal',
    props: ['modalStatus'],
    setup(props) {
        const modal = ref(props.modalStatus)
        return {
            modal
        }
    }
}
</script>

<style scoped>

</style>