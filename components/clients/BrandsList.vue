<template>
  <div class="relative">
    <div class="space-y-10">
      <div v-for="item in brands" key="item.letter">
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
              >{{ el.name
              }}<span class="ml-1" v-if="el.fileSertDil">
                <Popper hover content="Есть сертификат дилера">
                  <AppBadge size="xs" color="light-blue">д</AppBadge>
                </Popper>
              </span></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Лоадер -->
    <div
      v-if="!isUpdate"
      class="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center py-16"
    >
      <app-spinner-medium />
    </div>
    <!-- # Лоадер -->
  </div>
</template>

<script setup>
import AppBadge from "@/components/UI/Badge/AppBadge.vue";
import Popper from "vue3-popper";
import AppSpinnerMedium from "@/components/loaders/AppSpinnerMedium.vue";

defineProps({
  brands: {
    type: Array,
    default: [],
  },
  isUpdate: {
    type: Boolean,
    default: true,
  },
});
</script>
