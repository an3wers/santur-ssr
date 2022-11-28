<template>
  <nav class="nav flex items-baseline">
    <!-- mainMenu -->

    <DropDown
      v-for="(item, index) in getMenuWithChild"
      :key="index"
      :index="index"
      :items="item.child"
      :title="item.name"
    />
    <div class="nav__item relative">
      <NuxtLink
        class="text-gray-700 no-underline inline-flex justify-center items-center px-2.5 py-2"
        :to="getMenuContact.url"
        >{{ getMenuContact.name }}</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExpandMoreIcon20 from '@/components/UI/Icons/ExpandMoreIcon_20.vue';
import DropDown from '@/components/UI/DropDown/DropDown.vue';

const mainMenu = useMainMenu(); // []

const getMenuWithChild = computed(() => {
  return mainMenu.filter((el) => el.child.length > 0);
});

const getMenuContact = computed(() => {
  return mainMenu.filter((el) => el.name === 'Контакты')[0];
});
</script>
