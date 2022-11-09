<template>
  <div class="favorites-wrap">
    <ProfilePageWrapper title="Избранные товары">
      <favorities-list
        v-if="profileStore.favorities.length && favoritiesIsUpdate"
        :products="profileStore.favorities"
        @onClickRemoveFavority="removeFavorityHandler"
      />
      <favorities-empty-state
        v-if="!profileStore.favorities.length && favoritiesIsUpdate"
      />
      <PageLoader v-if="!favoritiesIsUpdate" />
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProfilePageWrapper from '@/components/profile/ProfilePageWrapper.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import { useProfileStore } from '@/stores/profile';
import FavoritiesList from '@/components/profile/favorities/FavoritiesList.vue';
import FavoritiesEmptyState from '@/components/profile/favorities/FavoritiesEmptyState.vue';

useHead({
  title: 'Избранные товары',
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
