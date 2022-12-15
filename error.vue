<template>
  <div class="default-layout flex justify-center flex-col min-h-screen">
    <!-- <the-header /> -->
    <div class="container mt-4 mb-16">
      <div class="flex flex-col">
        <div class="max-w-4xl w-full h-auto mx-auto">
          <img
            class="w-full h-auto"
            src="~/assets/images/error_404.jpg"
            alt="page not found"
          />
        </div>
        <div class="mt-4 text-center">
          <h2>{{ error.statusCode }}</h2>
          <p class="">{{ error.message }}</p>
          <app-button btnType="secondary" @click="handleHome" btnSize="lg"
            >Перейти на главную</app-button
          >
        </div>
      </div>
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
import AppButton from "@/components/UI/Buttons/AppButton.vue";
// import TheHeader from "@/components/TheHeader.vue";
// import TheFooter from "@/components/TheFooter.vue";

// import { useCatalogStore } from '@/stores/catalog';
// import { useAuthStore } from '@/stores/auth';
// import { useCartStore } from '@/stores/cart';
// import { useProfileStore } from '@/stores/profile';

// const profileStore = useProfileStore();
// const catalogStore = useCatalogStore();
// const authStore = useAuthStore();
// const cartStore = useCartStore();

// await authStore.setUser();
// await catalogStore.loadCatalog();

// if (process.client) {
//   await profileStore.getFavorities();
//   await profileStore.loadProfile();
//   await cartStore.getCart();
//   await cartStore.getShortCart();
// }

defineProps(['error'])

useHead({
  title: "Страница не найдена",
});

function handleHome() {
  clearError({ redirect: '/'})
}
</script>
