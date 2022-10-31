<template>
  <div class="mobile-menu">
    <app-button-icon @click="menuHandler" btnType="light">
      <menu-icon-24 />
    </app-button-icon>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="mobile-menu__sudebar fixed right-0 top-0 bottom-0 left-0 bg-slate-50 py-6 z-20"
      >
        <div class="container">
          <div class="flex justify-end">
            <app-button-icon @click="menuHandler" btnType="light">
              <close-icon-24 />
            </app-button-icon>
          </div>
          <div>
            <mobile-menu-item
              v-for="item in getMenu"
              :key="item.name"
              :menuItem="item"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppButtonIcon from '@/components/UI/Buttons/AppButtonIcon.vue';
import MenuIcon24 from '@/components/UI/Icons/MenuIcon_24.vue';
import CloseIcon24 from '@/components/UI/Icons/CloseIcon_24.vue';
import MobileMenuItem from '@/components/appHeader/MobileMenuItem.vue';

const isOpen = ref(false);
const route = useRoute();

function menuHandler() {
  isOpen.value = !isOpen.value;
}

const getMenu = computed(() => {
  return useMainMenu();
});

watch(route, () => {
  isOpen.value = false;
});
</script>
