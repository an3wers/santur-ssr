<template>
  <div class="p-6 rounded-xl bg-slate-100 relative lg:sticky top-4">
    <!-- Лоадер -->
    

    <ContainerLoader v-if="!cartStore.cartIsUpdated" />

    <!-- # Лоадер -->

    <h2 v-if="!cartStore.cartId">Информация о заказе</h2>
    <h2 v-else>Заказ №{{ cartStore.cartId }}</h2>

    <!-- Выбор договора, если пользователь авторизован -->
    <div v-if="authStore.getIsAuth" class="input-block pb-4 space-y-2">
      <label class="font-semibold">Договор</label>
      <select
        class="w-full rounded-md border form-select py-2 text-base px-3 leading-5 bg-white border-transparent focus:border-primary focus:bg-white focus:ring focus:ring-blue-500 focus:ring-opacity-20"
        :value="getContractSelected"
        @change="contractHandler($event.target.value)"
      >
        <option
          v-for="c in profileStore.getIsActiveContracts"
          :key="c.code"
          :value="c.code"
        >
          {{ c.num }}
        </option>
      </select>
    </div>

    <ul class="list-none divide-y divide-slate-300">
      <li class="flex justify-between py-3 items-start">
        <span>Товары</span>
        <span class="font-semibold">{{ cartStore.cartSum }} ₽</span>
      </li>
      <!-- <li class="flex justify-between py-3 items-start">
                <span>Скидка</span>
                <span class=" font-semibold">10%</span>
             </li> -->
      <li class="flex justify-between py-3 items-start">
        <span>Количество товаров</span>
        <span class="font-semibold">{{ cartStore.cartCount }}</span>
      </li>
      <li class="flex justify-between py-3 items-start">
        <span>Вес заказа</span>
        <span class="font-semibold">{{ cartStore.cartWeight }} кг</span>
      </li>
      <!-- <li class="flex justify-between py-3 items-start">
                <span>Вес товаров в наличии</span>
                <span class=" font-semibold">30 кг</span>
             </li> -->
      <li class="flex justify-between py-3 font-bold text-xl items-start">
        <span>Итого</span>
        <span>{{ cartStore.cartSum }} ₽</span>
      </li>
    </ul>

    <div v-if="!cartStore.cartId" class="flex flex-col space-y-3 mt-4">
      <!-- Кнопки -->
      <app-button
        @click="$router.push('/checkout')"
        :disabled="!authStore.getIsAuth"
        btnType="primary"
        btnSize="lg"
        class="w-full"
      >
        Перейти к оформлению
      </app-button>
      <app-button
        :disabled="!authStore.getIsAuth"
        btnType="outline"
        btnSize="lg"
        @click="saveOrderHandler"
        >Сохранить заказ</app-button
      >
    </div>
    <div v-else class="flex flex-col space-y-3 mt-4">
      <!-- Кнопки -->
      <app-button
        @click="editOrderSaveHandler"
        :disabled="!authStore.getIsAuth"
        btnType="primary"
        btnSize="lg"
        class="w-full"
      >
        Сохранить заказ
      </app-button>
      <app-button
        @click="editOrderCancelHandler(cartStore.cartId)"
        :disabled="!authStore.getIsAuth"
        btnType="outline"
        btnSize="lg"
        >Отменить изменения</app-button
      >
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
// import AppSelector from '@/components/UI/Forms/AppSelector.vue';
import { useProfileStore } from '@/stores/profile';
import { useAppMessage } from '@/stores/appMessage';
import { useOrderStore } from '@/stores/order';
import { storeToRefs } from 'pinia';
import ContainerLoader from '@/components/loaders/ContainerLoader.vue';

const profileStore = useProfileStore();
const cartStore = useCartStore();
const authStore = useAuthStore();
const appMessageStore = useAppMessage();
const router = useRouter();
const orderStore = useOrderStore();

const { cartContract } = storeToRefs(cartStore);
const { profile } = storeToRefs(profileStore);

// const contarctSelected = ref(
//   cartContract.value || profileStore.profile.subjInfo.dgcode || ''
// );
const contarctSelected = ref(
  cartContract.value || profile.value?.subjInfo?.dgcode || ''
);

const getContractSelected = computed(() => {
  return contarctSelected.value;
});

watch(
  () => profileStore.profile.email,
  () => {
    // console.log('WATCH TO USER ID FROM CART');
    // console.log(cartContract.value, profile.value.subjInfo.dgcode);
    // if (cartStore.cartContract) {
    contractHandler(profile.value?.subjInfo?.dgcode || '');
    // }
  }
);

async function contractHandler(val) {
  contarctSelected.value = val;
  cartStore.cartIsUpdated = false;
  const res = await cartStore.changeContractInCart(val);
  if (res instanceof Error) {
    appMessageStore.open('error', res.message, 'error');
  } else {
    // await profileStore.loadProfile();
    await cartStore.getCart();
    // console.log("Contarct change", val);
  }
  cartStore.cartIsUpdated = true;
}

async function saveOrderHandler() {
  const res = await cartStore.cartConfirm('бн', '', '', 'draft');
  if (res instanceof Error) {
    // При сохранении заказа произошла ошибка
    appMessageStore.open(
      'error',
      'При сохранении заказа произошла ошибка',
      'error'
    );
  } else {
    // Заказ сохранен
    router.push({ name: 'thank', query: { draft: res } });
  }
}

async function editOrderSaveHandler() {
  router.push({ path: '/checkout' });

  // Сохраняю заказ и делаю редирект в заказ
  // const res = cartStore.cartConfirm('бн', '', '')
}

async function editOrderCancelHandler(id) {
  // Чищю корзину и делаю редирект в заказ
  const res = await cartStore.cleanCart();

  if (res instanceof Error) {
    appMessageStore.open(
      'error',
      'При отмене редактирования произошла ошибка',
      'error'
    );
  } else {
    orderStore.cleanEditOrder();
    router.push({ path: `/profile/orderhistory/${id}` });
    await cartStore.getCart();
  }
}
</script>
