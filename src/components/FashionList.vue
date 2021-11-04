<template>
    <div class="bg-gray-200 py-10">
        <h3 class="text-3xl mb-2">CATEGORIES</h3>
        <a class="text-sm hover:text-red-600 flex justify-center items-center" href="#">See more
            <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
        </a>
        <div class="w-4/5 flex flex-wrap mx-auto justify-between items-stretch mt-8">
            <a href="#" v-for="fashion in fashions.slice(0,4)" :key="fashion.id" class="w-full sm:w-2/5 lg:w-1/5 mx-1 my-3 flex flex-col justify-between">
                <div class="h-full sm:w-full md:h-48 lg:h-72 flex items-center justify-center overflow-hidden object-contain">
                    <img :src="fashion.img" :alt="fashion.name" :title="fashion.name" class="transform hover:scale-110 w-full">
                </div>
                <div>
                    <p class="my-4 text-red-600 text-2xl md:text-3xl lg:text-2xl">{{fashion.name}}</p>
                    <button class="border border-black md:p-2 text-l md:text-xl p-1 rounded-md text-white bg-black hover:text-black hover:bg-white">CHECK OUT</button>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const fashions = ref([])
        const error = ref(null)
        const load = async () => {
            try {
                let fashionData = await fetch("https://my-json-server.typicode.com/jacker1306/vite-project/fashions")
                if(!fashionData.ok) {
                    throw Error("Data not avaialble!")
                }
                fashions.value = await(fashionData.json())
            }
            catch(err) {
                error.value = err.message
            }
        }
        load()
        return {
            fashions
        }
    }
}
</script>

<style>

</style>