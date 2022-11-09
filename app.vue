<template>
  <div class="default-layout flex flex-col min-h-screen">
    <the-header />
    <div class="page-wrapper grow mt-5 mb-16">
      <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
      </NuxtLayout>
      <!-- <NuxtPage></NuxtPage> -->
      <PageLoader v-if="isLoading" />
    </div>

    <TheFooter />
    <OrderEditBar v-if="cartStore.cartId" :id="cartStore.cartId" />
    <Teleport to="body">
      <Transition name="fade">
        <app-message
          :type="appMessageStore?.type"
          :icon="appMessageStore?.icon"
          v-if="appMessageStore.isShow"
          >{{ appMessageStore?.message }}</app-message
        >
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppMessage from '@/components/AppMessage.vue';
import { useAppMessage } from '@/stores/appMessage';
import { useCatalogStore } from '@/stores/catalog';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';
import { useProfileStore } from '@/stores/profile';
import PageLoader from '@/components/loaders/PageLoader.vue';
import OrderEditBar from '@/components/profile/orderhistory/order/orderEditBar.vue';
import { useOrderStore } from '@/stores/order';

const titleTail =
  'Сантехкомплект-Урал — инженерная сантехника в Екатеринбурге и Нижнем Тагиле';
const defaultTitle =
  'Сантехкомплект-Урал — продажа сантехники оптом в Екатеринбурге и Нижнем Тагиле';

useHead({
  titleTemplate: (title) => {
    return title ? `${title} | ${titleTail}` : `${defaultTitle}`;
  },
});

const appMessageStore = useAppMessage();

const isLoading = ref(false);

const profileStore = useProfileStore();
const catalogStore = useCatalogStore();
const authStore = useAuthStore();
const cartStore = useCartStore();
// const orderStore = useOrderStore();

// const isLoaded = ref(false);
await authStore.setUser();
await catalogStore.loadCatalog();

if (process.client) {
  await profileStore.getFavorities();
  await profileStore.loadProfile();
  await cartStore.getCart();
  await cartStore.getShortCart();
}
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:start', () => {
  // console.log(123);
  isLoading.value = true;
  // loading.value.start()
});

nuxtApp.hook('page:finish', () => {
  // console.log(321);
  isLoading.value = false;
  // loading.value.finish()
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.23s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
