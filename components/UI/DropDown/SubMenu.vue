<template>
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
      class="nav__sub-menu absolute bg-white py-4 px-1 space-y-1 w-72 rounded-lg shadow-lg right-0 z-20 border border-gray-50"
      :class="`${position}-0`"
    >
      <div v-for="(item, index) in items" :key="index" class="nav__item">
        <NuxtLink
          :to="item.url"
          class="text-gray-700 no-underline py-2 px-4 rounded-md hover:bg-slate-100 block"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: [],
  },
  idx: String,
  position: String,
});

const emits = defineEmits(['closeSubmenu']);

// const onClose = (e) => {
//   console.log(123, e);
// };

onMounted(() => {
  //   function hideMenuHandler() {
  //     if (process.client) {
  //       window.addEventListener('click', onClose);
  //     }
  //   }
  //   console.log(123);

  //   if (props.isOpen) {
  window.addEventListener('click', (e) => {
    // console.log(e.target);
    if (
      !e.target.matches(`.nav__link-${props.idx}`) &&
      !e.target.matches('.nav__sub-menu')
    ) {
      //   console.log(123123);
      emits('closeSubmenu');
    }
    // if

    // if (e.target.classList.contains('nav__item')) {
    //   console.log(123);
    // }
    // if (!e.target.matches('.nav__sub-menu')) {
    //   // if (e.target.matches('.nav__item')) {
    //   if (props.isOpen) {
    //     console.log(123);
    //   }
    // }
  });
  // hideMenuHandler();
  //   }
});
</script>
