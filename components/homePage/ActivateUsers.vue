<template>
  <div class="mb-4">
    <app-informer type="warning">
      <div>
        <p>
          К вашей компании присоединился новый пользователь. Подтвердите или
          отклоните, если это сотрудник не вашей компании.
        </p>
        <AppButton @click="isModalOpen = !isModalOpen">
          Список пользователей</AppButton
        >
      </div>
    </app-informer>
    <Teleport to="body">
      <app-modal
        modalSize="xl"
        @close="isModalOpen = !isModalOpen"
        v-if="isModalOpen"
      >
        <template #header> Новые пользователи </template>
        <template #body>
          <ul v-if="usersForActivate.length" class="divide-y divide-gray-300">
            <li
              class="flex py-3 first:pt-1 last:pb-1 items-start"
              v-for="(user, index) in usersForActivate"
              :key="user.id"
            >
              <span>{{ index + 1 }}.</span>
              <div class="ml-3 mr-3">{{ user.name }}, {{ user.email }}</div>
              <div class="flex space-x-2">
                <AppButton
                  btnType="secondary"
                  btnSize="xs"
                  @click="activateHandler(user.urlForActivate)"
                >
                  <span class="text-primary">Активировать</span>
                </AppButton>
                <AppButton
                  btnType="outline"
                  btnSize="xs"
                  @click="disactivateHandler(user.urlForBan)"
                >
                  <span class="text-red-500">Отклонить</span>
                </AppButton>
                <!-- <NuxtLink :to="user.urlForActivate">Активировать</NuxtLink>
                <NuxtLink :to="user.urlForBan">Отклонить</NuxtLink> -->
              </div>
            </li>
          </ul>
          <p v-else>Список новых пользователей пуст.</p>
        </template>
      </app-modal>
    </Teleport>
  </div>
</template>

<script setup>
import AppInformer from '@/components/AppInformer.vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import AppModal from '@/components/modal/AppModal.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';

const profileStore = useProfileStore();
const { checkUsersForActivate } = useProfileStore();
const isModalOpen = ref(false);
const { usersForActivate } = storeToRefs(profileStore);
// const router = useRouter();

async function activateHandler(link) {
  //   console.log(link);
  //   const myLink = router.resolve({ path: 'https://ya.ru' });
  window.open(link, '_blank');
  await checkUsersForActivate();
  //   navigateTo('https://ya.ru', { external: true });
}
async function disactivateHandler(link) {
  //   console.log(link);
  window.open(link, '_blank');
  await checkUsersForActivate();
}
</script>
