<template>
  <div class="favorites-wrap">
    <ProfilePageWrapper title="Избранные товары">
      <div class="relative">
        <favorities-list
          v-if="profileStore.favorities.length"
          :products="profileStore.favorities"
          @onClickRemoveFavority="removeFavorityHandler"
        />
        <favorities-empty-state
          v-if="!profileStore.favorities.length && favoritiesIsUpdate"
        />
       
        <!-- Лоадер -->
        
        <div
            v-if="!favoritiesIsUpdate"
            class="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center py-16"
          >
            <app-spinner-medium />
          </div>
          <!-- # Лоадер -->
        
      </div>
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProfilePageWrapper from "@/components/profile/ProfilePageWrapper.vue";
import PageLoader from "@/components/loaders/PageLoader.vue";
import { useProfileStore } from "@/stores/profile";
import FavoritiesList from "@/components/profile/favorities/FavoritiesList.vue";
import FavoritiesEmptyState from "@/components/profile/favorities/FavoritiesEmptyState.vue";
import AppSpinnerMedium from '@/components/loaders/AppSpinnerMedium.vue'

useHead({
  title: "Избранные товары",
});

const profileStore = useProfileStore();

const pageIsLoaded = ref(false);
const favoritiesIsUpdate = ref(true);

onMounted(() => {
  pageIsLoaded.value = true;
});

async function loadFavorities() {
  favoritiesIsUpdate.value = false;
  await profileStore.getFavorities();
  favoritiesIsUpdate.value = true;
}

await loadFavorities();

async function removeFavorityHandler(product) {
  favoritiesIsUpdate.value = false;
  await profileStore.removeFromFavorities(product);
  await profileStore.getFavorities();
  favoritiesIsUpdate.value = true;
}
</script>
