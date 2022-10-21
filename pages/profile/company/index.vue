<template>
  <div class="company-wrap">
    <ProfilePageWrapper title="Мои компании">
      <div
        v-if="authStore.user.id && profileStore.profile.name !== 'Гость'"
        class="space-y-6"
      >
        <company-list />
        <company-documents />
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
import ProfileEmptyState from '@/components/profile/ProfileEmptyState.vue';
import CompanyList from '@/components/profile/company/CompanyList.vue';
import CompanyDocuments from '@/components/profile/company/CompanyDocuments.vue';
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';
import PageLoader from '@/components/loaders/PageLoader.vue';

const authStore = useAuthStore();
const profileStore = useProfileStore();

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});
</script>
