<template>
  <div class="header__profile relative">
    <button
      type="button"
      @click="onOpen"
      class="py-2 px-2 lg:py-1 lg:px-3 relative flex items-center rounded-md bg-transparent border border-transparent hover:bg-blue-100 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20"
      :class="`nav__link-${idx}`"
    >
      <div class="hidden lg:block text-right" :class="`nav__link-${idx}`">
        <div>Личный кабинет</div>
        <div class="text-xs">{{ authStore.getUserNameForHeader }}</div>
      </div>
      <account-icon-24 class="ml-0 lg:ml-2" />
      <span
        v-if="authStore.user.id"
        class="absolute w-2 h-2 rounded-full bg-red-500 right-2 top-2"
      ></span>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <!-- :items="items" -->
      <SubMenu
        v-if="profileMenuIsOpen"
        @closeSubmenu="onClose"
        :idx="idx"
        position="right"
        isOpen="profileMenuIsOpen"
      >
        <div
          v-for="(item, index) in getDropdownMenu"
          :key="index"
          class="nav__item"
        >
          <NuxtLink
            :to="`/profile/${item.alias}`"
            class="text-gray-700 no-underline py-2 px-4 rounded-md hover:bg-slate-150 block"
          >
            {{ item.name }}
            <span
              class="ml-2 badge badge_light"
              v-if="
                item.alias === 'favorites' && profileStore.favorities.length
              "
              >{{ getFavoriteQty }}</span
            >
          </NuxtLink>
        </div>
        <template #header>
          <div
            class="px-5 mb-1 pb-2 -ml-1 -mr-1 border-gray-300 border-b text-sm font-medium"
            v-if="authStore.user.id"
          >
            <div class="text-gray-500">Профиль</div>
            <div class="">{{ profileStore.profile?.email }}</div>
          </div>

          <button
            v-if="!authStore.user.id"
            @click="onClickAuthHandler"
            class="flex text-left text-gray-700 w-full text-[0.9375rem] px-4 py-2 no-underline rounded-md hover:bg-slate-150 hover:text-primary"
          >
            <!-- Content -->
            Войти
          </button>
        </template>
        <template #footer>
          <button
            @click="onClickLogoutHandler"
            class="flex text-left w-full text-[0.9375rem] text-gray-700 px-4 py-2 no-underline rounded-md hover:bg-slate-150 hover:text-primary"
            v-if="authStore.user.id"
          >
            <!-- Content -->
            Выйти
          </button>
          <div
            v-if="authStore.user.id"
            class="px-5 mt-1 py-2 rounded-b-md -mb-2 -ml-1 -mr-1 border-gray-300 border-t text-sm font-medium"
          >
            <div class="text-gray-500 text-sm">Компания</div>
            <div class="text-sm">
              {{ useStrCrop(profileStore.profile?.subjInfo?.name, 60) }}
            </div>
          </div>
        </template>
      </SubMenu>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AccountIcon24 from '@/components/UI/Icons/AccountIcon_24.vue';
import { useProfileStore } from '@/stores/profile';
import { useAuthStore } from '@/stores/auth';
import { useAppMessage } from '@/stores/appMessage';
import { useCartStore } from '@/stores/cart';
import SubMenu from '@/components/UI/DropDown/SubMenu.vue';

const authStore = useAuthStore();
const profileStore = useProfileStore();
const appMessageStore = useAppMessage();
const cartStore = useCartStore();

const idx = 99;

const profileMenuIsOpen = ref(false);

const route = useRoute();
const router = useRouter();

// Открываем модальное окно входа

async function onOpen() {
  profileMenuIsOpen.value = !profileMenuIsOpen.value;
  await profileHandler();
}

function onClose() {
  profileMenuIsOpen.value = false;
}

function onClickAuthHandler() {
  authStore.openAuthModal();
}

async function onClickLogoutHandler() {
  const res = await authStore.logout();

  if (res instanceof Error) {
    appMessageStore.open('error', res.message, 'error');
  } else {
    if (route.path.includes('profile') || route.path.includes('checkout')) {
      router.push('/');
    }

    await authStore.setUser();
    await cartStore.getCart();
    await profileStore.loadProfile();
    await profileStore.getFavorities();
    appMessageStore.openWithTimer('info', 'Вы вышли из профиля', 'info');
  }
}

const getDropdownMenu = computed(() => {
  return !!authStore.user.id
    ? profileStore.menu
    : profileStore.menu.filter((el) => el.onlyAuth === false);
});

const getFavoriteQty = computed(() => {
  return profileStore.favorities.length || '';
});

async function profileHandler() {
  await profileStore.getFavorities();
}
</script>
