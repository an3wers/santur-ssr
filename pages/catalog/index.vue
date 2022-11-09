<template>
  <div class="catalog-page">
    <div class="container">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>{{ title }}</h1>
      <catalog-list />
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRoute } from 'vue-router';
import CatalogList from '@/components/catalog/catalogList.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import { useCatalogStore } from '@/stores/catalog';
const route = useRoute();
const title = 'Каталог';

useHead({
  title: title,
});

const breadcrumbs = [{ name: title, url: route.fullPath }];
</script>
