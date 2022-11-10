<template>
  <div class="container">
    <div class="post-wrapper">
      <AppBreadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Менеджмент компании</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <div class="grid gap-6 grid-cols-2">
            <!-- cards -->
            <div
              v-for="(item, index) in managers"
              :key="index"
              class="flex items-stretch col-span-2 md:col-span-1 bg-slate-100 rounded-lg"
            >
              <div class="w-36 h-56 lg:w-44 lg:h-64 shrink-0">
                <img
                  class="rounded-lg object-cover w-full h-full"
                  :src="item.image"
                  alt=""
                />
              </div>
              <div class="p-5 flex flex-col justify-center">
                <h4 class="text-base lg:text-lg font-bold leading-snug mb-1">
                  {{ item.name }}
                </h4>
                <div class="leading-snug text-gray-700">
                  {{ item.position }}
                </div>
              </div>
            </div>
            <!-- # cards -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

const breadcrumbs = [
  { name: 'Менеджмент компании', url: '/about/company-managers' },
];

useHead({
  title: 'Менеджмент компании',
});

const managers = [
  {
    name: 'Федорцев Виталий Викторович',
    image: '/images/managers/men_2.jpg',
    position: 'Управляющий компанией',
  },
  {
    name: 'Глущенко Николай Николаевич',
    image: '/images/managers/men_1.jpg',
    position: 'Основатель компании, директор по развитию бизнеса',
  },
  {
    name: 'Катаева Лариса Александровна',
    image: '/images/managers/men_6.jpg',
    position: 'Исполнительный директор',
  },
  {
    name: 'Дудак Олеся Михайловна',
    image: '/images/managers/men_3.jpg',
    position: 'Финансовый директор',
  },
  {
    name: 'Чупеева Олеся Валерьевна',
    image: '/images/managers/men_4.jpg',
    position: 'Директор департамента рознично-оптовых продаж',
  },
  {
    name: 'Ларин Евгений Иванович',
    image: '/images/managers/men_5.jpg',
    position: 'Директор филиала Сантехкомплект-Тагил',
  },
  {
    name: 'Зарубина Ксения Владимировна',
    image: '/images/managers/men_7.jpg',
    position: 'Руководитель отдела продаж «Эксплуатация и реконструкция» ',
  },
];
</script>
