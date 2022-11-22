<template>
  <div class="home-slider mb-10">
    <div class="home-slider__body">
      <Carousel
        class="carousel-cards"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <div class="home-slider__banner w-full h-full">
              <NuxtLink target="_blank" :to="slide.url">
                <img
                  :src="`/images/banners/${slide.image}`"
                  alt=""
                  class="w-full h-full object-cover object-center rounded-lg lg:rounded-2xl"
                />
              </NuxtLink>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination class="carousel-cards__pagination" />
          <Navigation class="carousel-cards__navigation" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
// import { useHomeStore } from '@/stores/home'
import { ref } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';

// const { getSlider } = useHomeStore()
// 1504 х 400 px
const slides = ref([
  {
    id: '1',
    url: 'https://santur.ru',
    image: 'top_1.jpg',
  },
  {
    id: '2',
    url: 'https://santur.ru',
    image: 'top_2.jpg',
  },
  {
    id: '3',
    url: 'https://santur.ru',
    image: 'top_3.jpg',
  },
  {
    id: '4',
    url: 'https://santur.ru',
    image: 'top_4.jpg',
  },
  {
    id: '5',
    url: 'https://santur.ru',
    image: 'top_5.jpg',
  },
]);

const settings = {
  itemsToShow: 1,
  snapAlign: 'start',
  autoplay: 7000,
  wrapAround: true,
};

const breakpoints = {
  // 1296: {
  //     itemsToShow: 3.5,
  //      snapAlign: 'start',
  // }
};
</script>

<style scoped>
/* @import '@/node_modules/vue3-carousel/dist/carousel.css'; */
</style>
