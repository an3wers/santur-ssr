<template>
  <div class="container">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>{{ title }}</h1>
    <div>
      <brands-navigation
        :active="activeFilter === 'all' ? 'Все' : activeFilter"
        :onlyHaveSert="brandsStore.onlyHaveSert"
        :searchValue:="brandsStore.searchValue"
        @change-char="charHandler"
        @handleHaveSert="onChangeHaveSert"
        @handleSearchValue="onChengeSearchValue"
        @handleSearchBrand="SearchBrandHandler"
        @handleCleanSearchValue="cleanSearchValueHandler"
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
import { ref } from "vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import BrandsNavigation from "@/components/clients/BrandsNavigation.vue";
import BrandsList from "@/components/clients/BrandsList.vue";
import { useMainStore } from "@/stores/main";
import { useBrandStore } from "@/stores/brands";
import PageLoader from "@/components/loaders/PageLoader.vue";
import AppPageError from "@/components/AppPageError.vue";

const mainStore = useMainStore();
const brandsStore = useBrandStore();

const title = "Наши бренды";
const route = useRoute();
const isUpdate = ref(true);

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
  // console.log(event.target.checked)
  // event - true or false
  brandsStore.onlyHaveSert = event;
}

function onChengeSearchValue(value) {
  brandsStore.searchValue = value;
}

async function SearchBrandHandler(value) {
  isUpdate.value = false;
  await brandsStore.fetchBrands(null, value);
  isUpdate.value = true;
}

async function cleanSearchValueHandler() {
  isUpdate.value = false;
  brandsStore.searchValue = "";
  await brandsStore.fetchBrands(null);
  isUpdate.value = true;
}
</script>
