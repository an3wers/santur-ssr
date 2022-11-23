<template>
  <div class="home-page -mt-5">
    <PageLoader v-if="!homeIsLoaded" />
    <div class="home-page -mt-5">
      <!-- <home-body /> -->
      <div class="section_grey pt-8 pb-16 bg-slate-150">
        <div class="container">
          <div>
            <ClientOnly>
              <activate-users
                v-if="profileStore.usersForActivate.length && authStore.user.id"
              />
            </ClientOnly>
            <!-- TODO: информер для активации пользователей для авторизованных -->
            <home-slider />
            <!-- <template v-else> -->
            <ClientOnly>
              <features />
              <popular-categories />
              <narrow-slider />
            </ClientOnly>

            <!-- </template> -->
          </div>
        </div>
      </div>
      <div class="section pt-16">
        <div class="container">
          <ClientOnly>
            <sale-products />
          </ClientOnly>
          <!-- <bottom-banner /> -->
          <news v-if="homeStore.news.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeSlider from '@/components/homePage/HomeSlider.vue';
import PopularCategories from '@/components/homePage/PopularCategories.vue';
import NarrowSlider from '@/components/homePage/NarrowSlider.vue';
import SaleProducts from '@/components/homePage/SaleProducts.vue';
// import BottomBanner from '@/components/homePage/BottomBanner.vue';
import News from '@/components/homePage/News.vue';
import Features from '@/components/homePage/Features.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import ActivateUsers from '@/components/homePage/ActivateUsers.vue';
// import AppLoader from '@/components/loaders/AppLoader.vue';
import { useProfileStore } from '@/stores/profile';
import { useAuthStore } from '@/stores/auth';

import { useHomeStore } from '@/stores/home';
import { ref, onMounted } from 'vue';

const profileStore = useProfileStore();
const authStore = useAuthStore();

const pageDescr =
  'Сантехкомплект-Урал - инженерное оборудование от отечественных и зарубежных производителей. Полностью комплектуем строительные объекты: жилые комплексы, промышленные объекты, ижс, коммерческая застройка.';

useHead({
  meta: [{ name: 'description', content: pageDescr }],
});

const homeIsLoaded = ref(false);
const homeStore = useHomeStore();

if (process.client) {
  await homeStore.loadPopularCategory();
  await homeStore.loadSales();
}

onMounted(() => {
  homeIsLoaded.value = true;
});

// async function loadHomePage() {
//   // await homeStore.loadTopSlider();
//   // await homeStore.loadNarrowSlider();
//   // await homeStore.loadNews();
//   homeIsLoaded.value = true;
// }

// // await loadHomePage();

// if (process.client) {
//   await loadHomePage();
// }
</script>
