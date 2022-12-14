<template>
  <Carousel
    class="carousel-cards cursor-pointer"
    :settings="settings"
    :breakpoints="breakpoints"
  >
    <Slide v-for="item in features" :key="item.id">
      <div class="carousel__item">
        <div
          :class="[
            item.isActive
              ? 'shadow-lg bg-white border-transparent'
              : 'border-gray-300',
          ]"
          @mouseenter="featureHandler(item.id)"
          class="p-6 h-full rounded-2xl border flex flex-col space-y-4"
        >
          <div class="w-8 h-8 md:w-12 md:h-12">
            <img
              class="w-full h-full object-contain"
              :src="`/images/features/${item.iconPath}`"
              :alt="item.title"
            />
          </div>
          <div class="text-lg ms:text-xl font-bold">{{ item.title }}</div>
          <div class="grow leading-snug md:leading-relaxed text-sm md:text-base">{{ item.text }}</div>
          <div class="flex justify-end">
            <NuxtLink
              :class="[!item.isActive && 'opacity-0']"
              class="no-underline inline-flex items-center py-2 text-base px-3 leading-5 rounded-md bg-blue-100 border border-transparent hover:bg-blue-200 hover:text-gray-800 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 text-gray-800"
              tabindex="0"
              target="_blanck"
              :to="item.url"
            >
              Подробнее
              <arrow-right-alt-icon-20 color="#4b5563" class="ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation class="carousel-cards__navigation" />
    </template>
  </Carousel>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import ArrowRightAltIcon20 from '@/components/UI/Icons/ArrowRightAltIcon_20.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

// import 'vue3-carousel/dist/carousel.css';

const features = ref([
  {
    id: 1,
    iconPath: 'feature_factory.svg',
    title: 'Собственное производство',
    text: 'Проектирование и аудит проектов. Изготовление блочных ИТП, нестандартных узлов и изделий, блочных котельных.',
    url: 'https://pro.santur.ru',
    isActive: true,
  },
  {
    id: 2,
    iconPath: 'feature_seti.svg',
    title: 'Наружные сети',
    text: 'Инженерное направление компании Сантехкомплект-Урал, которое занимается комплексом определенных систем и коммуникаций, которые располагаются снаружи здания.',
    url: 'https://seti.santur.ru',
    isActive: false,
  },
  {
    id: 3,
    iconPath: 'feature_fire.svg',
    title: 'Пожаротушение',
    text: 'Инженерное направление Сантехкомплект-Урал, которое включает в себя: разработку проектной документации, поставку оборудования, аудит и техническую консультацию.',
    url: 'https://fire.santur.ru',
    isActive: false,
  },
  {
    id: 4,
    iconPath: 'feature_ms.svg',
    title: 'Магазины Мастер-Сантехник',
    text: 'С 1996 года развиваем сеть магазинов, где быстро может отгрузиться и сделать покупку оптовый клиент, получить профессиональную консультацию каждый человек.',
    url: 'https://msantehnik.ru',
    isActive: false,
  },
  {
    id: 5,
    iconPath: 'feature_forum.png',
    title: 'Инженерный форум',
    text: 'Универсальная площадка неограниченных возможностей для профессионального общения и обмена опытом, поиска современных инженерных решений, соответствующих новым экономическим реалиям и тенденциям рынка.',
    url: 'https://forum.santur.ru',
    isActive: false,
  },
]);

const settings = {
  itemsToShow: 1.25,
  snapAlign: 'start',
};

const breakpoints = {
  640: {
    itemsToShow: 1.5,
    snapAlign: 'start',
  },

  768: {
    itemsToShow: 2.25,
    snapAlign: 'start',
  },

  1024: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  1280: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
  1536: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
};

function featureHandler(id) {
  const current = features.value.find((el) => el.id === id);

  features.value.forEach((el) => {
    el.isActive = false;
  });

  current.isActive = true;
}
</script>
