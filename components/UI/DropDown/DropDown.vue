<template>
  <div class="nav__item relative">
    <button
      @click="dropDownHandler($event)"
      class="text-gray-700 no-underline inline-flex justify-center items-center px-2.5 py-2"
      :class="`nav__link-${index}`"
    >
      {{ title }}
      <expand-more-icon-20 color="#6b7280" />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <SubMenu
        v-if="isOpen"
        @closeSubmenu="onClose"
        :isOpen="isOpen"
        :items="items"
        :idx="index"
        :position="position"
      >
        <div v-for="(item, index) in items" :key="index" class="nav__item">
          <NuxtLink
            :to="item.url"
            class="text-gray-700 no-underline py-2 px-4 rounded-md hover:bg-slate-150 block"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </SubMenu>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import ExpandMoreIcon20 from '@/components/UI/Icons/ExpandMoreIcon_20.vue';
import SubMenu from './SubMenu.vue';

defineProps({
  items: {
    type: Array,
    default: [],
  },
  title: String,
  index: Number,
  position: {
    type: String,
    default: 'left',
  },
});

const isOpen = ref(false);

function dropDownHandler(event) {
  event.preventDefault();
  isOpen.value = !isOpen.value;
}

function onClose() {
  isOpen.value = false;
}
</script>
