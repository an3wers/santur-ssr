<template>
  <div class="mobile-menu__item flex border-b border-gray-300 flex-col">
    <button
      v-if="menuItem.child.length"
      @click="subMenuHandler"
      class="text-left py-3 hover:bg-slate-200 pl-2 pr-3 flex justify-between items-center"
      :class="subMenuIsOpen ? 'bg-slate-200' : ''"
    >
      <span>
        {{ menuItem.name }}
      </span>
      <span :class="subMenuIsOpen ? 'rotate-180' : ''">
        <extend-more-icon-20 color="#6B7280" />
      </span>
    </button>
    <div
      v-if="menuItem.child.length && subMenuIsOpen"
      class="mobile-menu__sub-items px-2 py-3"
    >
      <div v-for="item in menuItem.child" :key="item.name">
        <NuxtLink
          :to="item.url"
          class="text-gray-700 no-underline hover:text-primary py-2 block"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
    <NuxtLink
      :to="menuItem.url"
      v-if="!menuItem.child.length"
      class="text-gray-900 no-underline hover:bg-slate-200 hover:text-gray-900 px-2 py-3 block"
      >{{ menuItem.name }}</NuxtLink
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExtendMoreIcon20 from '@/components/UI/Icons/ExpandMoreIcon_20.vue';

defineProps({
  menuItem: {
    type: Object,
  },
});

const subMenuIsOpen = ref(false);

function subMenuHandler() {
  subMenuIsOpen.value = !subMenuIsOpen.value;
}
</script>
