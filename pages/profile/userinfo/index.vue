<template>
  <div class="userinfo-wrap">
    <ProfilePageWrapper title="Данные профиля">
      <div v-if="authStore.user.id && profileStore.profile.name !== 'Гость'">
        <user-info-card
          @changePassword="toggleModalChangePassword"
          @rememberPassword="rememberPasswordToggle"
        />
      </div>

      <!-- empty state -->
      <profile-empty-state v-else />

      <Teleport to="body">
        <app-modal
          modalSize="md"
          key="change-modal"
          @close="toggleModalChangePassword"
          v-if="isOpenChangePasswordModal"
        >
          <template #header>Изменить пароль</template>
          <template #body>
            <!-- Компонент изменения пароля -->
            <change-password-modal @changePassword="changePaswordHandler" />
          </template>
        </app-modal>
        <app-modal
          modalSize="md"
          key="remember-modal"
          v-if="isOpenRememberPasswordModal"
          @close="rememberPasswordToggle"
        >
          <template #header>Напомнить пароль</template>
          <template #body>
            <RememberPasswordModal
              @rememberPassword="remeberPasswordHandler"
              controlSize="md"
            ></RememberPasswordModal>
          </template>
        </app-modal>
      </Teleport>
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
import UserInfoCard from '@/components/profile/userInfo/userInfoCard.vue';
import AppModal from '@/components/modal/AppModal.vue';
import ChangePasswordModal from '@/components/profile/userInfo/ChangePasswordModal.vue';
import { useAppMessage } from '@/stores/appMessage';
import PageLoader from '@/components/loaders/PageLoader.vue';
import RememberPasswordModal from '@/components/profile/userInfo/RememberPasswordModal.vue';

useHead({
  title: 'Данные профиля',
});

const appMessage = useAppMessage();
const authStore = useAuthStore();
const profileStore = useProfileStore();

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});

const isOpenChangePasswordModal = ref(false);
const isOpenRememberPasswordModal = ref(false);

function toggleModalChangePassword() {
  isOpenChangePasswordModal.value = !isOpenChangePasswordModal.value;
}

async function changePaswordHandler(values) {
  // console.log('Изменение пароля', values)
  const res = await profileStore.changePassword(values);
  if (res instanceof Error) {
    appMessage.open('error', res.message, 'error');
  } else {
    appMessage.openWithTimer('success', 'Пароль успешно изменен', 'success');
    isOpenChangePasswordModal.value = false;
  }
}

function rememberPasswordToggle() {
  isOpenRememberPasswordModal.value = !isOpenRememberPasswordModal.value;
}

function remeberPasswordHandler() {
  console.log(123);
}
</script>
