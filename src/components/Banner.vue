<template>
    <Splide :options="{ rewind: true, autoplay:true, interval: 5000, pauseOnHover: true, }">
        <SplideSlide>
            <div class="banner1 w-full text-white bg-cover bg-center">
                <h2 class="text-7xl py-32">BUY IT BEFORE IT'S TOO LATER</h2>
                <p class="mx-auto text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo placeat voluptatum laboriosam, error consequatur nesciunt porro unde ex totam similique quasi! Sit fugit id dicta at mollitia quia omnis porro aliquid optio! Sunt ipsam voluptas sequi, temporibus hic voluptates provident odit doloribus cupiditate eligendi, nostrum quidem? Voluptate earum asperiores, nam, totam unde alias dolores eveniet est vel suscipit distinctio quia voluptatem, soluta laudantium? Voluptates dolor illum vel fugit accusamus optio porro atque aspernatur, eum quos quibusdam eos debitis consectetur eaque esse voluptas, deserunt tenetur architecto sint impedit accusantium sequi delectus! Qui ipsa error expedita eligendi fugiat fuga. Beatae, earum.</p>
                <button class="border my-10 p-2 rounded-md text-white bg-black hover:bg-white hover:text-black">SHOP NOW</button>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner2 w-full text-white bg-cover bg-center"></div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner3 w-full text-white bg-cover bg-center"></div>
        </SplideSlide>
        <SplideSlide>
            <div class="banner4 w-full text-white bg-cover bg-center"></div>
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