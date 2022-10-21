<template>
  <div class="office-wrap">
    <ProfilePageWrapper title="Филиал Сантехкомплект-Урал">
      <div v-if="authStore.user.id && profileStore.profile.name !== 'Гость'">
        <office-list />
      </div>

      <!-- empty state -->
      <profile-empty-state v-else />
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProfilePageWrapper from '@/components/profile/ProfilePageWrapper.vue';
import { useProfileStore } from '@/stores/profile';
import ProfileEmptyState from '@/components/profile/ProfileEmptyState.vue';
import OfficeList from '@/components/profile/office/OfficeList.vue';
import { useAuthStore } from '@/stores/auth';
import PageLoader from '@/components/loaders/PageLoader.vue';

const authStore = useAuthStore();
const profileStore = useProfileStore();

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});
</script>
