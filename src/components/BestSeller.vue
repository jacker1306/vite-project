<template>
    <h3 class="text-3xl mt-16 mb-2">BEST SELLER</h3>
    <a class="text-sm hover:text-red-600 flex justify-center items-center" href="#">See more
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
    </a>
    <div class="w-4/5 flex flex-wrap mx-auto justify-between items-center mt-8">
        <a  href="#" v-for="product in products.slice(0,4)" :key="product.id" class="w-1/5 mx-1 my-3">
            <img :src="product.img" alt="h-full">
            <p class="mt-4">{{product.description}}</p>
            <p class="text-red-600">{{product.price}}</p>
        </a>
        <p>{{product.variants}}</p>
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