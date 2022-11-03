<template>
  <!-- <div v-if="homeIsLoaded" class="home-page -mt-5"> -->
  <div class="home-page -mt-5">
    <div class="home-page -mt-5">
      <!-- <home-body /> -->
      <div class="section_grey pt-8 pb-16 bg-slate-150">
        <div class="container">
          <div>
            <home-slider />
            <AppLoader v-if="!homeIsLoaded" />
            <template v-else>
              <features />
              <popular-categories />
              <narrow-slider />
            </template>
          </div>
        </div>
      </div>
      <div class="section pt-16">
        <div class="container">
          <sale-products v-if="homeIsLoaded" />
          <!-- <bottom-banner /> -->
          <news v-if="homeStore.news.length" />
        </div>
      </div>
    </div>
  </div>
  <!-- <PageLoader v-else /> -->
  <!-- <AppLoader v-else /> -->
</template>

<script setup>
import HomeSlider from '@/components/homePage/HomeSlider.vue';
import PopularCategories from '@/components/homePage/PopularCategories.vue';
import NarrowSlider from '@/components/homePage/NarrowSlider.vue';
import SaleProducts from '@/components/homePage/SaleProducts.vue';
import BottomBanner from '@/components/homePage/BottomBanner.vue';
import News from '@/components/homePage/News.vue';
import Features from '@/components/homePage/Features.vue';
// import PageLoader from '@/components/loaders/PageLoader.vue';
import AppLoader from '@/components/loaders/AppLoader.vue';

import { useHomeStore } from '@/stores/home';
import { ref, onMounted } from 'vue';

const pageDescr =
  'Сантехкомплект-Урал - инженерное оборудование от отечественных и зарубежных производителей. Полностью комплектуем строительные объекты: жилые комплексы, промышленные объекты, ижс, коммерческая застройка.';

useHead({
  meta: [{ name: 'description', content: pageDescr }],
});

const homeIsLoaded = ref(false);
const homeStore = useHomeStore();

async function loadHomePage() {
  // await homeStore.loadTopSlider();
  // await homeStore.loadNarrowSlider();
  // await homeStore.loadNews();
  await homeStore.loadPopularCategory();
  await homeStore.loadSales();
  homeIsLoaded.value = true;
}
loadHomePage();
</script>
