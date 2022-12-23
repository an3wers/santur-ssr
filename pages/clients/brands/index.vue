<template>
  <div class="container">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>{{ title }}</h1>
    <div>
      <brands-navigation
        :active="activeFilter === 'all' ? 'Все' : activeFilter"
        :onlyHaveSert="isHaveSert"
        :searchValue:="brandsStore.searchValue"
        @change-char="charHandler"
        @handleHaveSert="onChangeHaveSert"
        @handleSearchValue="onChengeSearchValue"
        @handleSearchBrand="SearchBrandHandler"
        @handleCleanSearchValue="cleanSearchValueHandler"
      />
      <AppPageError v-if="mainStore.pageError" />
      <brands-list
        v-if="getFilteredBrands.length"
        :brands="getFilteredBrands"
        :isUpdate="isUpdate"
      />
      <div
        class="py-20"
        v-else-if="!getFilteredBrands.length && !mainStore.pageError"
      >
        <p class="text-center">Список брендов пуст</p>
      </div>
    </div>
    <!-- <page-loader v-if="!isUpdate" /> -->
  </div>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import BrandsNavigation from "@/components/clients/BrandsNavigation.vue";
import BrandsList from "@/components/clients/BrandsList.vue";
import { useMainStore } from "@/stores/main";
import { useBrandStore } from "@/stores/brands";
// import PageLoader from "@/components/loaders/PageLoader.vue";
import AppPageError from "@/components/AppPageError.vue";

const mainStore = useMainStore();
const brandsStore = useBrandStore();

const title = "Наши бренды";
const route = useRoute();
const isUpdate = ref(true);
const isHaveSert = ref(false);

useHead({
  title,
});

const activeFilter = ref(route.query.filter || "Все");

const breadcrumbs = [{ name: title, url: route.fullPath }];

if (activeFilter.value === "all" || activeFilter.value === "Все") {
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
    activeFilter.value = "Все";
    setQuery("all");
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

function onChangeHaveSert(event) {
  isHaveSert.value = event;
}

const getFilteredBrands = computed(() => {
  let result;
  if (isHaveSert.value) {
    result = brandsStore.allBrands
      .map((el) => {
        const brands = el.brands.filter((b) => b.fileSertDil == true);
        if (brands.length) {
          return { letter: el.letter, brands };
        }
      })
      .filter((el) => !!el);
  } else {
    result = brandsStore.allBrands;
  }

  return result;
});

// debounce

const delay = useDebounce(SearchBrandHandler, 1000)

function onChengeSearchValue(value) {
  
  delay(value)
}

async function SearchBrandHandler(value) {
  brandsStore.searchValue = value;
  activeFilter.value = "Все"
  setQuery('all')
  isUpdate.value = false;
  await brandsStore.fetchBrands(null, value);
  isUpdate.value = true;
}

async function cleanSearchValueHandler() {
  isUpdate.value = false;
  brandsStore.searchValue = "";
  activeFilter.value = "Все"
  setQuery('all')
  await brandsStore.fetchBrands(null);
  isUpdate.value = true;
}

onUnmounted(() => {
  brandsStore.searchValue = ''
})
</script>
