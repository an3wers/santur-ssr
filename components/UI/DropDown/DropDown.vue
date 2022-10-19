<template>
  <div class="nav__item relative">
    <a
      @click="dropDownHandler($event)"
      class="text-gray-700 no-underline inline-flex justify-center items-center px-2.5 py-2"
      :class="`nav__link-${index}`"
      href="#"
      >{{ title }}
      <expand-more-icon-20 color="#6b7280" />
    </a>

    <SubMenu
      @closeSubmenu="onClose"
      v-if="isOpen"
      :items="items"
      :isOpen="isOpen"
      :idx="index"
      :position="position"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExpandMoreIcon20 from '@/components/UI/Icons/ExpandMoreIcon_20.vue';
import SubMenu from './SubMenu.vue';

defineProps({
  title: String,
  items: {
    type: Array,
    default: [],
  },
  index: String,
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

onMounted(() => {
  // console.log(333);
  // window.addEventListener('click', (e) => {
  //   console.log(e.target);
  //   // if (e.target.classList.contains('nav__item')) {
  //   //   console.log(333);
  //   // }
  // });
});
</script>
