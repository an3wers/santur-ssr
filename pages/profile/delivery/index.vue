<template>
  <div class="delivery-wrap">
    <ProfilePageWrapper title="Доставки">
      <div v-if="authStore.user.id && profileStore.profile.name !== 'Гость'">
        <p>Сервис в стадии разработки</p>
      </div>
      <profile-empty-state v-else />
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProfilePageWrapper from '@/components/profile/ProfilePageWrapper.vue';
import ProfileEmptyState from '@/components/profile/ProfileEmptyState.vue';
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';

useHead({
  title: 'Доставки',
});

const authStore = useAuthStore();
const profileStore = useProfileStore();

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});
</script>
