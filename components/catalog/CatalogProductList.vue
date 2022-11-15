<template>
  <div
    v-if="products.length"
    class="product-list flex flex-col pb-6 space-y-4 divide-y divide-gray-300 min-w-[320px] sm:min-w-[600px] overflow-x-auto"
  >
    <catalog-product-preview
      v-for="prod in products"
      :key="prod.code"
      :product="prod"
    />
  </div>
</template>

<script setup>
import CatalogProductPreview from '@/components/catalog/CatalogProductPreview.vue';

defineProps({
  products: {
    type: Array,
    default: [],
  },
});
</script>
