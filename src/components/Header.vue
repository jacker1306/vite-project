<template>
    <div class="header-container bg-gray-400">
        <div class="header flex flex-row justify-between items-center w-4/5 mx-auto">
            <a href="#"><img src="../assets/logo.png" alt="" class="h-20"></a>
            <div class="nav h-full">
                <ul class="flex flex-row justify-between items-stretch relative tracking-wider">
                    <li class="p-6"><a class="text-red hover:text-blue-600" href="#">HOME</a></li>
                    <li class="p-6"><a class="text-red hover:text-blue-600" href="#">PRODUCTS</a></li>
                    <li class="p-6"><a class="text-red hover:text-blue-600" href="#">ABOUT</a></li>
                    <li class="p-6"><a class="text-red hover:text-blue-600" href="#">CONTACT</a></li>
                    <li class="p-6"><a class="text-red hover:text-blue-600" href="#">POLICIES</a></li>
                    <li @click="displayModal()" class="p-6 text-red hover:text-blue-600 cursor-pointer">LOGIN</li>
                </ul>
            </div>
        </div>
    </div>
    <teleport to="body">
        <Modal v-if="modalStatus" :modalStatus="modalStatus"></Modal>
    </teleport>
</template>

<script>

import { ref } from 'vue'
import Modal from "./Modal.vue"

export default {
    name: 'Header',
    components: {
        Modal
    },
    setup() {
        const modalStatus = ref(false)

        const displayModal = () => {
            modalStatus.value = true;
        }
        return {
            modalStatus,
            displayModal
        }
    },
}
</script>

<style>
</style>