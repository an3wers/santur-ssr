<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  >
    <NuxtLink
      :to="`/catalog/${cat.tk_id}`"
      v-for="cat in homeStore.getPopularCategory"
      :key="cat.tk_id"
      class="pop-category-card no-underline text-gray-900 hover:text-gray-900"
      ><div class="rounded-2xl shadow-lg bg-white h-full">
        <div class="flex justify-between space-x-2 items-center px-5 py-6">
          <div class="pop-category-card__title font-medium">
            {{ cat.name }}
          </div>
          <div class="pop-category-card__image-block shrink-0">
            <img
              class="object-contain w-full h-full"
              :src="cat.imgpath"
              :alt="cat.name"
            />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useHomeStore } from '@/stores/home';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const homeStore = useHomeStore();

watch(
  () => authStore.user.id,
  () => {
    homeStore.loadSales();
  }
);
</script>
