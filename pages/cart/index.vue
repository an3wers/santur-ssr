<template>
  <div class="cart-page">
    <div class="container">
      <!-- Кнопка назад -->
      <app-go-back />
      <!-- main block -->
      <div
        class="grid grid-cols-12 gap-6"
        v-if="cartIsLoaded && cartStore.cartItems.length"
      >
        <div
          class="col-start-1 col-end-13 lg:col-start-1 lg:col-end-9 space-y-6"
        >
          <div class="flex justify-between items-baseline">
            <h1>Корзина</h1>
            <app-button
              v-if="cartStore.cartItems.length > 0 && !cartStore.cartId"
              btnSize="md"
              btnType="light"
              class="-mr-3"
              @click="removeAllHandler"
              >Очистить корзину</app-button
            >
          </div>

          <div class="space-y-6">
            <!-- Информер войти в профиль -->
            <app-informer v-if="!authStore.user.id" type="primary">
              <div>
                <a @click.prevent="authStore.openAuthModal()" href="!#"
                  >Войдите</a
                >
                в профиль для оформления заказа или
                <RouterLink to="/registration">зарегистрируйтесь</RouterLink>,
                если аккаунта еще нет.
              </div>
            </app-informer>
            <!-- product-list -->
            <cart-product-list :products="cartStore.cartItems" />
            <!-- add product free form -->
            <cart-product-free-form />
          </div>
        </div>
        <div
          class="col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 space-y-6"
        >
          <!-- инофрмация по заказу -->
          <cart-info />
        </div>

        <!-- Пустое состояние -->
      </div>
      <page-loader v-if="!cartIsLoaded" />
      <cart-empty v-if="!cartStore.cartItems.length && cartIsLoaded" />
    </div>
  </div>
</template>

<script setup>
import AppGoBack from '@/components/AppGoBack.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { ref, watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import CartProductList from '@/components/cart/CartProductList.vue';
import CartInfo from '@/components/cart/CartInfo.vue';
import CartEmpty from '@/components/cart/CartEmpty.vue';
import CartProductFreeForm from '@/components/cart/CartProductFreeForm.vue';
import AppInformer from '@/components/AppInformer.vue';
import { useAppMessage } from '@/stores/appMessage';
import PageLoader from '@/components/loaders/PageLoader.vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

useHead({
  title: 'Корзина',
});

// definePageMeta({
//   middleware: ['auth'],
// });

const profileStore = useProfileStore();
const cartStore = useCartStore();
const authStore = useAuthStore();
const cartIsLoaded = ref(false);
const { open } = useAppMessage();

const { profile } = storeToRefs(profileStore);

async function loadCart() {
  const res = await cartStore.getCart();

  if (res instanceof Error) {
    // error message
    open('error', 'При загрузке корзины произошла ошибка', 'error');
  }
  cartIsLoaded.value = true;
}

// watch(
//   () => authStore.user.id,
//   async () => {
//     // console.log(profile.value.subjInfo.dgcode);
//     // await cartStore.getCart();
//   }
// );

loadCart();

async function removeAllHandler() {
  const ask = confirm('Вы действительно хотите очистить корзину?');
  if (ask) {
    // очищаем корзину
    const res = await cartStore.cleanCart();
    if (res instanceof Error) {
      console.log('Error', res);
    } else {
      await cartStore.getCart();
    }
  } else {
    return;
  }
}
</script>
