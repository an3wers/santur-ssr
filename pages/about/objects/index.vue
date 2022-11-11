<template>
  <div class="container">
    <div class="post-wrapper">
      <AppBreadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Объекты комплектации</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <p>
            ООО «УЦСК «Сантехкомплект-Урал» комплексно оснащает сантехническим и
            инженерным оборудованием любые объекты — независимо от типа,
            масштаба и сложности. Компания полностью комплектует сети
            водоснабжения, отопления и канализации.
          </p>
          <p>
            Неудивительно, что в Екатеринбурге нет ни одной стройки, в которой
            бы не принимала участие компания «Сантехкомплект-Урал».
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-x-6 gap-y-10 mt-8">
        <div
          v-for="(item, index) in objects"
          :key="index"
          class="col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div class="space-y-2">
            <div class="h-72 w-full">
              <img
                class="w-full h-full rounded-xl object-cover"
                :src="item.image"
                alt=""
              />
            </div>
            <div class="space-y-0">
              <div class="text-gray-500">{{ item.city }}</div>
              <div class="text-lg font-bold">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

useHead({
  title: 'Объекты комплектации',
});

const breadcrumbs = [{ name: 'Объекты комплектации', url: '/about/objects' }];

const objects = [
  {
    name: 'ЖК Форум-сити',
    city: 'Екатеринбург',
    image: '/images/objects/object-forum-city.jpg',
  },
  {
    name: 'Общественный центр Универсиады-2023 ',
    city: 'Екатеринбург',
    image: '/images/objects/object-universiada-2023.jpg',
  },
  {
    name: 'Квартал «На Некрасова» ',
    city: 'Екатеринбург',
    image: '/images/objects/object-kvartal-nekrasova.jpg',
  },
  {
    name: 'Жилая экосистема 4YOU',
    city: 'Екатеринбург',
    image: '/images/objects/object-4YOU.jpg',
  },
  {
    name: 'ЖК "Парк столиц"',
    city: 'Екатеринбург',
    image: '/images/objects/object-park-stolic.jpg',
  },
  {
    name: 'Универсальный гастрольный театр',
    city: 'Верхняя Пышма',
    image: '/images/objects/object-gastrolnii-teatr.jpg',
  },
  {
    name: 'Жилой район Солнечный',
    city: 'Екатеринбург',
    image: '/images/objects/object-solnechnii.jpg',
  },
  {
    name: 'ЖК "Астон.Событие"',
    city: 'Екатеринбург',
    image: '/images/objects/object-sobitie.jpg',
  },
  {
    name: 'ЖК "Астон.Сезоны"',
    city: 'Екатеринбург',
    image: '/images/objects/object-sezoni.jpg',
  },
  {
    name: 'ЖК «Космонавтов 11»',
    city: 'Екатеринбург',
    image: '/images/objects/object-kosmonavtov-11.jpg',
  },
  {
    name: 'ЖК "Первомайская 60"',
    city: 'Екатеринбург',
    image: '/images/objects/object-pervomaiiskaya-60.jpg',
  },
  {
    name: 'ЖК "Татлин"',
    city: 'Екатеринбург',
    image: '/images/objects/object-tatlin.jpg',
  },
  {
    name: 'Клубный дом "Ленина 8"',
    city: 'Екатеринбург',
    image: '/images/objects/object-lenina-8.jpg',
  },
  {
    name: 'Парковый Квартал',
    city: 'Екатеринбург',
    image: '/images/objects/object-parkovii-kvartal.jpg',
  },
  {
    name: 'ЖК Макаровский',
    city: 'Екатеринбург',
    image: '/images/objects/object-makarovskii.jpg',
  },
  {
    name: 'ЖК Чемпион Парк',
    city: 'Екатеринбург',
    image: '/images/objects/object-chempinon-park.jpg',
  },
  {
    name: 'Академический ГК "Кортросс"',
    city: 'Екатеринбург',
    image: '/images/objects/object-academicheskii.jpg',
  },
  {
    name: 'ЖК Мельница',
    city: 'Екатеринбург',
    image: '/images/objects/object-melnica.jpg',
  },
  {
    name: 'ЖК Екатерининский Парк',
    city: 'Екатеринбург',
    image: '/images/objects/object-ekaterininskiii-park.jpg',
  },
  {
    name: 'Штаб-квартира РМК',
    city: 'Екатеринбург',
    image: '/images/objects/object-rmk.jpg',
  },
  {
    name: 'Конгресс-холл МВЦ "Екатеринбург-Экспо"',
    city: 'Екатеринбург',
    image: '/images/objects/object-kongress-holl.jpg',
  },
  {
    name: 'ТРЦ VEER mall',
    city: 'Екатеринбург',
    image: '/images/objects/object-veer-moll.jpg',
  },
  {
    name: 'ТРЦ Золотой',
    city: 'Екатеринбург',
    image: '/images/objects/object-tc-zolotoi.jpg',
  },
  {
    name: 'ТЦ Пекин',
    city: 'Екатеринбург',
    image: '/images/objects/object-tc-pekin.jpg',
  },
  {
    name: 'Хаятт Плейс',
    city: 'Екатеринбург',
    image: '/images/objects/object-hyatt-place.jpg',
  },
  {
    name: 'Многофункциональный медицинский центр',
    city: 'Ташкент',
    image: '/images/objects/object-mmc-tashkent.jpg',
  },
];
</script>
