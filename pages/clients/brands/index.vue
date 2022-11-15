<template>
  <div class="container">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>{{ title }}</h1>
    <div>
      <brands-navigation
        :active="activeFilter === 'all' ? 'Все' : activeFilter"
        @change-char="charHandler"
      />
      <AppPageError v-if="mainStore.pageError" />
      <brands-list
        v-if="brandsStore.getBrands.length"
        :brands="brandsStore.getBrands"
      />
      <div
        class="py-20"
        v-else-if="!brandsStore.getBrands.length && !mainStore.pageError"
      >
        <p class="text-center">Список брендов пуст</p>
      </div>
    </div>
    <page-loader v-if="!isUpdate" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import BrandsNavigation from '@/components/clients/BrandsNavigation.vue';
import BrandsList from '@/components/clients/BrandsList.vue';
import { useMainStore } from '@/stores/main';
import { useBrandStore } from '@/stores/brands';
import PageLoader from '@/components/loaders/PageLoader.vue';
import AppPageError from '@/components/AppPageError.vue';

const mainStore = useMainStore();
const brandsStore = useBrandStore();

const title = 'Наши бренды';
const route = useRoute();
const isUpdate = ref(true);

useHead({
  title,
});

const activeFilter = ref(route.query.filter || 'Все');

const breadcrumbs = [{ name: title, url: route.fullPath }];

if (activeFilter.value === 'all' || activeFilter.value === 'Все') {
  await brandsStore.fetchBrands(null);
} else {
  await brandsStore.fetchBrands(activeFilter.value);
}

async function charHandler(char, lang) {
  isUpdate.value = false;
  if (lang) {
    activeFilter.value = char;
    setQuery(char);
    await brandsStore.fetchBrands(char);
  } else {
    activeFilter.value = 'Все';
    setQuery('all');
    await brandsStore.fetchBrands(null);
  }
  isUpdate.value = true;
}

function setQuery(str) {
  window.history.pushState(
    null,
    document.title,
    `${window.location.pathname}?filter=${str}`
  );
}
</script>
