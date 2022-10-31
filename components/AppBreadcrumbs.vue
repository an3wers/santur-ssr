<template>
  <nav
    class="flex"
    :class="position === 'center' ? 'justify-center' : ''"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex mb-4 items-center space-x-3 relative">
      <!-- Статичный первый элемент -->
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center no-underline text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          Главная
        </NuxtLink>
      </li>
      <!-- Итерируемый li если массив не пустой -->
      <span class="absolute" v-if="items.length == 0"></span>
      <li v-else v-for="(item, index) in items" :key="index">
        <div class="inline-flex items-center">
          <span class="text-gray-400">/</span>
          <NuxtLink
            :to="item.url"
            class="ml-3 text-sm font-medium no-underline text-gray-500 hover:hover:text-gray-900"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </li>
      <!-- Статичный последний элемент -->
      <li v-if="breadcrumbs.length" aria-current="page">
        <div class="inline-flex items-center">
          <span class="text-gray-400">/</span>
          <span class="ml-3 text-sm font-medium text-gray-700">{{
            current.name
          }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: [],
  },
  position: {
    type: String,
    default: 'left', // center
  },
});

const items = computed(() => {
  if (props.breadcrumbs.length) {
    return props.breadcrumbs.filter(
      (el, index) => index != props.breadcrumbs.length - 1
    );
  }
  return [];
});

const current = computed(() => {
  if (props.breadcrumbs.length) {
    return props.breadcrumbs.pop();
  }
  return '';
});
</script>
