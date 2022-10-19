<template>
  <nav class="nav flex items-baseline">
    <!-- mainMenu -->

    <DropDown
      :title="mainMenu[0]['name']"
      :items="mainMenu[0]['child']"
      index="0"
      position="left"
    />
    <DropDown
      :title="mainMenu[1]['name']"
      :items="mainMenu[1]['child']"
      index="1"
      position="left"
    />
    <DropDown
      :title="mainMenu[2]['name']"
      :items="mainMenu[2]['child']"
      index="2"
      position="left"
    />

    <div class="nav__item relative">
      <NuxtLink
        class="text-gray-700 no-underline inline-flex justify-center items-center px-2.5 py-2"
        to="/"
        >Контакты</NuxtLink
      >
    </div>

    <!-- <DropDownItem v-for="(item, index) in mainMenu" :item="item" :key="index" /> -->
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import ExpandMoreIcon20 from '@/components/UI/Icons/ExpandMoreIcon_20.vue';
import DropDown from '@/components/UI/DropDown/DropDown.vue';

const mainMenu = useMainMenu(); // []

// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
// import { useMainMenu } from "@/utils/config";
// import DropDownItem from '@/components/appHeader/DropDownItem.vue';

// const mainMenu = useMainMenu();

// const getMenuWithChild = computed(() => {
//   return mainMenu.filter((el) => el.child.length);
// });

// const getMenuWithoutChild = computed(() => {
//   return mainMenu.filter((el) => !el.child.length);
// });
</script>
