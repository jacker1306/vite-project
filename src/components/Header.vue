<template>
    <!-- Nav -->
    <div class="header-container bg-green-400">
        <div class="header h-20 flex flex-row justify-between items-stretch w-4/5 mx-auto">
            <a class="items-center flex" href="#"><img src="../assets/jack-logo.png" alt="" class="h-16"></a>
            <ul class="flex flex-row justify-between items-center relative tracking-wider">
                <li class="p-7"><a class="text-red hover:text-blue-600" href="#">HOME</a></li>
                <li class="p-7"><a class="text-red hover:text-blue-600" href="#">PRODUCTS</a></li>
                <li class="p-7"><a class="text-red hover:text-blue-600" href="#">ABOUT</a></li>
                <li class="p-7"><a class="text-red hover:text-blue-600" href="#">CONTACT</a></li>
                <li class="p-7"><a class="text-red hover:text-blue-600" href="#">POLICIES</a></li>
                <li @click="modalStatus = true" class="p-7 text-red hover:text-blue-600 cursor-pointer">LOGIN</li>
            </ul>
        </div>
    </div>
    <!-- Teleport modal to body -->
    <teleport to="body">
        <!-- Sign-in modal -->
        <div @click.self="modalStatus = false" v-if="modalStatus" class="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-gray-600 shadow-md">
            <div class="flex flex-col jus items-center bg-white w-1/3 h-80 p-1 rounded-xl">
            <h2 class="text-3xl my-5 font-bold">SIGN IN</h2>
            <div class="flex w-4/5 mx-auto my-5">
                <label class="w-1/5" for="email">Email: </label>
                <input class="border pl-1 rounded-sm flex-1" type="email" name="email" id="" placeholder="Your email address">
            </div>
            <div class="flex w-4/5 mx-auto mb-5">
                <label class="w-1/5" for="password">Password: </label>
                <input class="border pl-1 rounded-sm flex-1" type="password" name="password" id="" placeholder="Your password">
            </div>
            <div class="flex items-center mt-4">
                <input class="mx-2" type="checkbox" id="check">
                <label for="check" required>Agree to Terms & Condition</label>
            </div>
            <div class="my-4">
                <button class="mx-2 border border-green-300 px-3 py-1 rounded-lg hover:text-white hover:bg-green-300">Sign-in</button>
                <button @click="modalStatus = false" class="border border-red-300 px-3 py-1 rounded-lg hover:text-white hover:bg-red-300 hover:border-red-300 mt-4"> Close </button>
            </div>
        </div>
    </div>
    </teleport>
</template>

<script>

import { ref } from 'vue'

export default {
    name: 'Header',
    components: {
    },
    setup() {
        const modalStatus = ref(false)

        return {
            modalStatus,
        }
    },
}
</script>

<style>
</style>