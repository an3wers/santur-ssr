<template>
  <div class="profile-pages container">
    <client-only>
      <h1>{{ title }}</h1>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div class="space-y-6">
            <profile-menu :menu="profileStore.menu" />
            <profile-ta
              v-if="!profileStore?.profile?.is_ta && authStore?.user?.id"
            />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-9 order-1 lg:order-2">
          <!-- render body -->
          <slot :key="$route.fullPath"></slot>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';
import ProfileMenu from '@/components/profile/ProfileMenu.vue';
import ProfileTa from '@/components/profile/ProfileTa.vue';
import { useProfileStore } from '@/stores/profile';
import { useAuthStore } from '@/stores/auth';

// const route = useRoute();
const profileStore = useProfileStore();
const authStore = useAuthStore();

defineProps({
  title: {
    type: String,
    default: '',
  },
});

// Title page from route
// const getPageTitle = computed(() => {
//   return route.matched[0].meta.pageTitle
// })
</script>
