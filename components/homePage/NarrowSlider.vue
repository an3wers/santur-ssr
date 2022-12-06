<template>
  <div class="narrow-slider mt-10">
    <Carousel
      class="carousel-cards"
      :settings="settings"
      :breakpoints="breakpoints"
    >
      <Slide v-for="slide in sliders" :key="slide.id">
        <div class="carousel__item">
          <div class="w-full h-full">
            <NuxtLink :target="slide.target" :href="slide.url">
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
</template>

<script setup>
// import {useHomeStore} from '@/stores/home'
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

// import 'vue3-carousel/dist/carousel.css';
import { ref } from "vue";

// const { getNarrowBanner } = useHomeStore()
// 1504 х 220 px
const sliders = ref([
  {
    id: "6",
    url: "/clients/brands/uponor",
    image: "uponor_01122022_santur_new.jpg",
    target: '_self'
  },
  {
    id: "1",
    url: "/catalog/100817?Бренд=РОС",
    image: "bottom_1.jpg",
    target: '_self'
  },
  {
    id: "2",
    url: "/catalog/100817",
    image: "bottom_2.jpg",
    target: '_self'
  },
  {
    id: "3",
    url: "/catalog/100870?Бренд=Aquasfera",
    image: "bottom_3.jpg",
    target: '_self'
  },
  {
    id: "4",
    url: "/clients/brands/sanita",
    image: "bottom_4.jpg",
    target: '_self'
  },
  {
    id: "5",
    url: "/catalog/100914?search=regula",
    image: "bottom_5.jpg",
    target: '_self'
  },
]);

const settings = {
  itemsToShow: 1,
  snapAlign: "start",
  autoplay: 7000,
  wrapAround: true,
};

const breakpoints = {
  // 768: {
  //   itemsToShow: 1.3,
  //   snapAlign: 'start',
  // },
};
</script>
