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
    name: 'Рыков Никита Николаевич',
    image: '/images/managers/men_8.jpg',
    position: 'Коммерческий директор',
  },
  {
    name: 'Таушканова Ирина Сергеевна',
    image: '/images/managers/men_9.jpg',
    position: 'Директор по развитию',
  },
  {
    name: 'Артемов Павел Валерьевич',
    image: '/images/managers/men_10.jpg',
    position: 'Директор департамента «Регионы»',
  },
  {
    name: 'Румянцев Егор Олегович',
    image: '/images/managers/men_11.jpg',
    position: 'Руководитель департамента операционных продаж',
  },
  {
    name: 'Зарубина Ксения Владимировна',
    image: '/images/managers/men_7.jpg',
    position: 'Руководитель отдела продаж «Эксплуатация и реконструкция»',
  },
  {
    name: 'Ахметшин Раиль Фаилович',
    image: '/images/managers/men_12.jpg',
    position: 'Руководитель отдела продаж «Наружные сети»',
  },
  {
    name: 'Студитский Сергей Викторович',
    image: '/images/managers/men_13.jpg',
    position: 'Руководитель отдела продаж «Строительство»',
  },
  {
    name: 'Мальков Сергей Александрович',
    image: '/images/managers/men_14.jpg',
    position: 'Технический директор',
  },
  {
    name: 'Журавлев Алексей Сергеевич',
    image: '/images/managers/men_15.jpg',
    position: 'Директор по развитию IT',
  },
  {
    name: 'Данилов Евгений Сергеевич',
    image: '/images/managers/men_16.jpg',
    position: 'Руководитель отдела закупок',
  },
  {
    name: 'Поляков Владислав Николаевич',
    image: '/images/managers/men_17.jpg',
    position: 'Руководитель отдела продаж «Магазины»',
  },
  {
    name: 'Сараев Антон Александрович',
    image: '/images/managers/men_18.jpg',
    position: 'Руководитель службы технической поддержки',
  },
  {
    name: 'Зарубин Максим Геннадьевич',
    image: '/images/managers/men_19.jpg',
    position: 'Руководитель отдела продаж «Строительство-развитие»',
  },
  {
    name: 'Малышева Наталья Владимировна',
    image: '/images/managers/men_20.jpg',
    position: 'Руководитель отдела маркетинга',
  },
  {
    name: 'Соколова Алена Владимировна',
    image: '/images/managers/men_21.jpg',
    position: 'Руководитель юридического отдела',
  },
  {
    name: 'Душамбин Денис Ринатович',
    image: '/images/managers/men_22.jpg',
    position: 'Руководитель складов хранения',
  },
  {
    name: 'Костик Сергей Владимирович',
    image: '/images/managers/men_23.jpg',
    position: 'Руководитель транспортно-логистического отдела',
  },
  {
    name: 'Кейсер Игорь Романович',
    image: '/images/managers/men_24.jpg',
    position: 'Руководитель отдела по защите ресурсов',
  },
];
</script>
