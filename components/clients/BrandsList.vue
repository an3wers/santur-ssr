<template>
  <div class="space-y-10">
    <div v-for="item in brands">
      <h2 class="!mb-4">{{ item.letter }}</h2>
      <div class="grid grid-cols-12 gap-6">
        <div
          v-for="el in item.brands"
          :key="el.id"
          class="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
        >
          <NuxtLink
            class="no-underline text-gray-900"
            :to="`/clients/brands/${el.alias}`"
            >{{ el.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brands: {
    type: Array,
    default: [],
  },
});
</script>
