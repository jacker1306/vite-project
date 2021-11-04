<template>
    <Splide :options="{ rewind: true, autoplay:true, interval: 5000, pauseOnHover: true, }">
        <SplideSlide>
            <div class="banner1 w-full max-h-screen text-white bg-cover bg-center">
                <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl py-32">BUY IT BEFORE IT'S TOO LATER</h2>
                <p class="mx-auto text-center md:text-xl lg:text-2xl">You're looking for the best store with best clothing options?<br>
                    Lookg no more as you have found Jack Fashion!
                </p>
                <button class="border my-10 p-2 rounded-md text-white bg-black hover:bg-white hover:text-black">SHOP NOW</button>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner2 w-full max-h-screen text-white bg-cover bg-center"></div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner3 w-full max-h-screen text-white bg-cover bg-center"></div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner4 w-full max-h-screen text-white bg-cover bg-center"></div>
        </SplideSlide>
    </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import Splide1 from '@splidejs/vue-splide/src/js/components/Splide/Splide.vue'
export default {
    components: {
    Splide,
    SplideSlide,
    Splide1
},
}
</script>

<style scoped>
    div {
        height: 700px;
    }
    .banner1 {
        background-image: url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    }
    .banner2 {
        background-image: url(https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg);
    }
    .banner3 {
        background-image: url(https://i1.wp.com/tdsblog.com/wp-content/uploads/2016/02/The-Sartorial-Man-Feburary-Series-with-The-Designers-Studio.jpg?fit=1499%2C563&ssl=1);
    }
    .banner4 {
        background-image: url(https://i.ytimg.com/vi/IeEjd08tbvU/maxresdefault.jpg);
    }

    p {
        max-width: 60%;
    }
</style>