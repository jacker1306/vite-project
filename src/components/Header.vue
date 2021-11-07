<template>
    <!-- Nav -->
    <div class="header-container sticky top-0 z-10 bg-white">
        <!-- Menu on large screen -->
        <div class="header h-20 flex flex-row justify-between items-center lg lg:w-4/5 lg:mx-auto mx-2">
            <a class="items-center flex" href="#"><img src="../assets/jack-logo.png" alt="" class="h-16"></a>
            <i @click="menuToggle" :class="menuBar" class="toggle fas text-4xl md:hidden"></i>
            <ul class="hidden md:flex flex-row justify-between items-center relative tracking-wider">
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">HOME</a></li>
                <li class="p-3 lg:p-4">
                    <a class="pb-1 hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl  relative products">
                        PRODUCTS
                        <div class="product-list hidden absolute z-1 border bg-white rounded-md py-2 px-10">
                            <ul>
                                <li class="my-2" v-for="fashion in fashions" :key="fashion.name"> <a class="text-black hover:text-red-600 " href="#"> {{fashion.name}} </a></li>
                            </ul>
                        </div>
                    </a></li>
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">ABOUT</a></li>
                <li @click="contactModal = true" class="p-6 text-red hover:text-red-600 focus:border-red-600 cursor-pointer"><span class="border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl  pb-1">CONTACT US</span> </li>
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">POLICIES</a></li>
                <li @click="signInModal = true" class="p-6 text-red hover:text-red-600 cursor-pointer"><span class="border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl  pb-1">LOGIN</span> </li>
            </ul>
        </div>
        <!-- Menu on medium screen -->
        <div data-aos="slide-left" v-if="!barCond" class="menu md:hidden flex flex-col border-b fixed w-full bg-white">
            <ul class="text-center">
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">HOME</a></li>
                <li @click="subMenuCond = !subMenuCond" class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">PRODUCTS</a></li>
                <li v-if="subMenuCond" class="p-3 lg:p-4" v-for="fashion in fashions" :key="fashion.name"><a class="text-blue-400 hover:text-red-600 " href="#"> {{fashion.name}} </a></li>
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">ABOUT</a></li>
                <li @click="contactModal = true" class="p-6 text-red hover:text-red-600 focus:border-red-600 cursor-pointer"><span class="border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl  pb-1">CONTACT US</span> </li>
                <li class="p-3 lg:p-4"><a class="pb-1 text-red hover:text-red-600 border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl " href="#">POLICIES</a></li>
                <li @click="signInModal = true" class="p-6 text-red hover:text-red-600 cursor-pointer"><span class="border-b border-white hover:border-red-600 focus:border-red-600 text-md lg:text-l xl:text-xl  pb-1">LOGIN</span> </li>
            </ul>
        </div>
        
    </div>
    <!-- Teleport modal to body -->
    <teleport to="body">
        <!-- Sign-in modal -->
        <div @click.self="signInModal = false" v-if="signInModal" class="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-gray-600 shadow-md z-10">
            <div class="flex flex-col items-center bg-white h-96 p-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 rounded-xl">
                <h2 class="text-3xl my-5 font-bold">SIGN IN</h2>
                <div class="text-sm flex p-1 w-full sm:w-4/5 mt-5">
                    <label class="w-1/5" for="email">Name: </label>
                    <input class="ml-1 sm:ml-0 border-b pl-1 rounded-sm flex-1 outline-none" type="name" name="name" id="" placeholder="Your name">
                </div>
                <div class="text-sm flex p-1 w-full sm:w-4/5 my-5">
                    <label class="w-1/5" for="email">Email: </label>
                    <input class="ml-1 sm:ml-0 border-b pl-1 rounded-sm flex-1 outline-none" type="email" name="email" id="" placeholder="Your email address">
                </div>
                <div class="text-sm flex p-1 w-full sm:w-4/5 mb-5">
                    <label class="w-1/5" for="password">Password: </label>
                    <input class="outline-none ml-1 sm:ml-0 border-b pl-1 rounded-sm flex-1" v-bind:type="passType" name="password" id="" placeholder="Your password">
                    <svg @click="passToggle" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 mt-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                </div>
                <div class="flex items-center mt-5 text-sm">
                    <input class="mx-2" type="checkbox" id="check">
                    <label for="check" required>Agree to Terms & Conditions</label>
                </div>
                <div class="mt-6">
                    <button class="mx-2 border border-green-300 px-3 py-1 rounded-lg hover:text-white hover:bg-green-300">Sign-in</button>
                    <button @click="signInModal = false" class="border border-red-300 px-3 py-1 rounded-lg hover:text-white hover:bg-red-300 hover:border-red-300 mt-4"> Close </button>
                </div>
            </div>
        </div>

        <!-- Contact Modal -->
        <div @click.self="contactModal = false" v-if="contactModal" class="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-gray-600 shadow-md z-10">
            <div class="flex flex-col items-center bg-white h-96 p-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 rounded-xl">
                <h2 class="text-3xl my-5 font-bold">CONTACT US</h2>
                <div class="text-sm flex p-1 w-full sm:w-4/5 mt-5">
                    <label class="w-1/5" for="name">Your name: </label>
                    <input class="ml-1 sm:ml-0 border-b pl-1 rounded-sm flex-1 outline-none" type="text" name="name" id="" placeholder="Your name">
                </div>
                <div class="text-sm flex p-1 w-full sm:w-4/5 my-5">
                    <label class="w-1/5" for="email">Email: </label>
                    <input class="ml-1 sm:ml-0 border-b pl-1 rounded-sm flex-1 outline-none" type="email" name="email" id="" placeholder="Your email address">
                </div>
                <div class="text-sm flex p-1 w-full sm:w-4/5 mb-5">
                    <label class="w-1/5" for="message">Message: </label>
                    <textarea class="border w-4/5 resize-none outline-none" name="message" id="message" cols="50" rows="3"></textarea>
                </div>
                <div class="flex items-center mt-0 text-sm">
                    <input class="mx-2" type="checkbox" id="check">
                    <label for="check" required>Agree to Terms & Conditions</label>
                </div>
                <div class="my-1">
                    <button class="mx-2 border border-green-300 px-3 py-1 rounded-lg hover:text-white hover:bg-green-300"> Send </button>
                    <button @click="contactModal = false" class="border border-red-300 px-3 py-1 rounded-lg hover:text-white hover:bg-red-300 hover:border-red-300 mt-4"> Close </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>

import { ref } from 'vue'
import getFashion from '../composable/getFashion'

export default {
    name: 'Header',
    components: {
    },
    setup() {
        const signInModal = ref(false)
        const contactModal = ref(false)
        const passType = ref('password')
        const condition = ref(true)

        const menuBar = ref('fa-bars')
        const barCond = ref(true)

        const subMenuCond = ref(false)

        const {fashions, error, load} = getFashion()
        load()

        const passToggle = () => {
            condition.value = !condition.value
            if (condition.value) {
                passType.value = 'text'
            } else {
                passType.value = 'password'
            }
        }

        const menuToggle = () => {
            barCond.value = !barCond.value
            subMenuCond.value = false
            if (barCond.value) {
                menuBar.value = 'fa-bars'
            } else {
                menuBar.value = 'fa-times'
            }
            // setTimeout(() => {
            //     barCond.value
            // }, 1000);
        }



        return {
            signInModal,
            contactModal,
            passType,
            condition,
            passToggle,
            fashions,
            error,
            menuBar,
            menuToggle,
            barCond,
            subMenuCond
        }
    },
}
</script>

<style scoped>
    .product-list {
        left: -17px;
        top: 48px;
    }
    .products::after {
        content: "";
        width: 88px;
        height: 28px;
        /* background-color: red; */
        position: absolute;
        top: 21px;
        left: 0;
    }
    .products:hover .product-list{
        display: block;
    }

</style>