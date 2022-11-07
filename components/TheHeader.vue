<template>
  <div
    class="header bg-white relative pt-5 pb-6"
    :class="{ 'z-10': catalogStore.getIsMenu }"
  >
    <div class="container">
      <!-- Топ -->
      <div class="header-info items-center flex justify-between">
        <!-- Логотип -->
        <div class="header__logo">
          <NuxtLink class="block" to="/">
            <img
              class="hidden md:inline-block"
              src="~/assets/images/logo-santur.svg"
              alt="logo"
              width="260"
            />
            <img
              class="inline-block md:hidden w-12"
              src="~/assets/images/logo_santur_mini.svg"
              alt="logo-mini"
              width="48"
            />
          </NuxtLink>
        </div>
        <!-- Навигация -->
        <div class="hidden lg:block header__nav">
          <nav-header />
        </div>
        <!-- Контакты -->
        <contacts-header />
        <!-- mobile-menu -->
        <div class="flex lg:hidden space-x-2">
          <mobile-menu />
          <header-profile />
          <NuxtLink
            to="/cart"
            class="no-underline text-gray-900 hover:text-gray-900 py-2 px-2 relative inline-flex items-center justify-end rounded-md bg-transparent border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
          >
            <cart-icon-24 />
            <span
              v-if="cartStore.cartCount > 0"
              class="absolute w-2 h-2 rounded-full bg-red-500 right-2 top-2"
            ></span>
          </NuxtLink>
        </div>

        <!-- # mobile-menu -->
      </div>
      <!-- # Топ -->
      <!-- START Каталог, поиск, кнопки -->
      <div class="header-main mt-4 flex space-x-0 lg:space-x-6">
        <!-- Каталог -->
        <div class="hidden lg:block header__catalog">
          <catalog-header />
          <catalog-dropdown v-if="catalogStore.getIsMenu" />
        </div>
        <!-- Mobile button catalog -->
        <div class="block lg:hidden !ml-0 !mr-4">
          <app-button @click="$router.push({ path: '/catalog' })"
            >Каталог</app-button
          >
        </div>
        <!-- # Mobile button catalog -->
        <!-- Поиск -->
        <search-header />
        <!-- Кнопки -->
        <div class="flex space-x-3">
          <!-- component Profile -->
          <div class="hidden lg:block">
            <header-profile />
          </div>

          <div class="hidden lg:block header__cart">
            <NuxtLink
              class="no-underline w-auto lg:w-36 text-gray-900 hover:text-gray-900 py-1.5 px-2 lg:py-1 lg:px-3 relative inline-flex items-center justify-end rounded-md bg-transparent border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
              to="/cart"
            >
              <div class="text-right">
                <div>Корзина</div>
                <div class="text-xs">{{ cartStore.cartSum }} ₽</div>
              </div>
              <cart-icon-24 class="ml-0 lg:ml-2" />
              <!-- Счетчик корзина -->
              <span v-if="cartStore.cartCount > 0" class="cart-badge">{{
                cartStore.cartCount < 99 ? cartStore.cartCount : '99+'
              }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- END Каталог, поиск, кнопки -->
    </div>
    <Teleport to="body">
      <app-modal
        @close="closeAuthModalHandler"
        modalSize="lg"
        v-if="authStore.getIsOpenAuthModal"
      >
        <template #header> Войти в профиль </template>
        <template #body>
          <p class="mb-4">
            Или <NuxtLink to="/registration">зарегистрируйтесь</NuxtLink>, если
            аккаунта еще нет.
          </p>
          <auth-form />
        </template>
      </app-modal>
    </Teleport>
  </div>
</template>

<script setup>
// import { ref, computed, onMounted } from "vue";
// import { useRouter, useRoute } from 'vue-router';
import NavHeader from '@/components/appHeader/NavigationHeader.vue';
import ContactsHeader from '@/components/appHeader/ContactsHeader.vue';
import CatalogHeader from '@/components/appHeader/CatalogHeader.vue';
import SearchHeader from '@/components/appHeader/SearchHeader.vue';
import AppButtonLarge from '@/components/UI/Buttons/AppButtonLarge.vue';
import CatalogDropdown from '@/components/appHeader/CatalogDropdown.vue';
import CartIcon24 from '@/components/UI/Icons/CartIcon_24.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { useCatalogStore } from '@/stores/catalog';
import { useCartStore } from '@/stores/cart';
import AppModal from '@/components/modal/AppModal.vue';
import { useAuthStore } from '@/stores/auth';
import HeaderProfile from '@/components/appHeader/HeaderProfile.vue';
import MobileMenu from '@/components/appHeader/MobileMenu.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';

const authStore = useAuthStore();
const cartStore = useCartStore();
const catalogStore = useCatalogStore();
// const router = useRouter();
// const route = useRoute();

function closeAuthModalHandler() {
  authStore.closeAuthModal();
}
</script>
