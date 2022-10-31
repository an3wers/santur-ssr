<template>
  <div
    id="dropdown-submenu"
    class="nav__sub-menu absolute bg-slate-50 py-4 px-1 space-y-1 w-52 lg:w-72 rounded-lg shadow-lg right-0 z-20 border border-gray-50"
    :class="`${position}-0`"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  idx: Number,
  position: String,
  isOpen: Boolean,
});

const emits = defineEmits(['closeSubmenu']);

const closeIfClickedOutside = (e) => {
  if (
    !e.target.matches(`.nav__link-${props.idx}`) &&
    !e.target.parentElement.matches(`.nav__link-${props.idx}`) &&
    !e.target.matches('.nav__sub-menu')
  ) {
    emits('closeSubmenu');
    window.removeEventListener('click', closeIfClickedOutside);
  }
};

watch(route, () => {
  emits('closeSubmenu');
});

onMounted(() => {
  window.addEventListener('click', closeIfClickedOutside);
});
</script>
