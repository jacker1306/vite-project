<template>
    <div class="py-14">
        <h3 class="text-3xl mb-2">BEST SELLER</h3>
        <a data-aos="fade-up" class="text-sm hover:text-red-600 flex justify-center items-center" href="#">See more
            <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
        </a>
        <div class="w-4/5 flex flex-wrap mx-auto justify-between items-stretch mt-8">
            <a data-aos="fade-up"  href="#" v-for="product in products.slice(0,4)" :key="product.id" class="w-full sm:w-2/5 lg:w-1/5 mx-1 my-3 flex flex-col justify-between">
                <div class="flex justify-center items-center h-full sm:w-full md:h-48 lg:h-72 overflow-hidden">
                    <img :src="product.img" :alt="product.title" :title="product.title" class="transform hover:scale-110">
                </div>
                <div>
                    <p class="mt-4 text-sm md:text-md lg:text-xl">{{product.title}}</p>
                    <p class="text-red-600  text-sm md:text-md">{{product.price}}</p>
                    <p class="text-sm md:text-md">{{product.variants}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const products = ref([])
        const productVariant = ref([])
        const error = ref(null)
        const load = async () => {
            try {
                let productData = await fetch("https://my-json-server.typicode.com/jacker1306/vite-project/products")
                if(!productData.ok) {
                    throw Error("Data not avaialble!")
                }
                products.value = await(productData.json())
                // productVariant.value = products.
            }
            catch(err) {
                error.value = err.message
            }
        }
        load()
        return {
            products
        }
    }
}
</script>

<style>

</style>