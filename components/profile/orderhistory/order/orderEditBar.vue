<template>
  <div class="py-3 bg-gray-700 fixed bottom-0 left-0 right-0">
    <div class="container">
      <div class="text-white flex space-x-6 justify-center items-center">
        <span
          >Редактирование заказа
          <NuxtLink
            class="text-white hover:text-white"
            :to="`/profile/orderhistory/${id}`"
            >№{{ id }}</NuxtLink
          ></span
        >
        <AppButton btnSize="xs" @click="closeHandler(id)" btnType="outline"
          >Отменить изменеия</AppButton
        >
        <AppButton btnSize="xs" @click="saveHandler" btnType="outline"
          >Сохранить заказ</AppButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { useCartStore } from '@/stores/cart';
import { useAppMessage } from '@/stores/appMessage';

defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();
const cartStore = useCartStore();
const appMessageStore = useAppMessage();

function saveHandler() {
  router.push({ path: '/checkout' });
}

async function closeHandler(id) {
  // Чищю корзину и делаю редирект в заказ
  const res = await cartStore.cleanCart();

  if (res instanceof Error) {
    appMessageStore.open(
      'error',
      'При отмене редактирования произошла ошибка',
      'error'
    );
  } else {
    router.push({ path: `/profile/orderhistory/${id}` });
    await cartStore.getCart();
  }
}
</script>
