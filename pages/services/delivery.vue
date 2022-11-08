<template>
  <div class="container">
    <div class="post-wrapper">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Доставка</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <p>
            По заказу клиента инженеры транспортного отдела в течение часа
            разработают оптимальный маршрут до места назначения, а также
            подберут наиболее подходящий транспорт. Товар может быть доставлен
            багажом, контейнерами, вагонами, авиа и автотранспортом.
            Осуществляются постоянные рейсы из Екатеринбурга в областные центры
            Уральского Федерального округа. В филиалах компании имеется
            собственный автотранспорт.
          </p>
          <p>
            <strong
              >Узнайте подробнее условия доставки у вашего менеджера или по
              телефону +7 (343) 270-04-04</strong
            >
          </p>
          <h2>Способы доставки</h2>
          <!-- Accordion -->
          <AccordionWrapper default="ac1">
            <AccordionItem id="ac1">
              <template #title
                ><div class="text-xl font-medium">
                  Маршруты по области
                </div></template
              >
              <template #content>
                <p>
                  Еженедельная доставка осуществляется прямым сообщением в
                  основные города в радиусе 250 км от Екатеринбурга
                </p>
              </template>
            </AccordionItem>
            <AccordionItem id="ac2">
              <template #title
                ><div class="text-xl font-medium">
                  Северный маршрут
                </div></template
              >
              <template #content>
                <p>Действуют два регулярных маршрута в северные города.</p>
                <p>
                  Екатеринбург — Ноябрьск — Муравленко-Губкинский — Тарко-Сале —
                  Новый Уренгой — Надым
                </p>
                <p>
                  Екатеринбург — Югорск — Советский — Нягань — Ханты-Мансийск —
                  Тобольск — Тюмень
                </p>
              </template>
            </AccordionItem>
            <AccordionItem id="ac3">
              <template #title>
                <div class="text-xl font-medium">Самовывоз</div>
              </template>
              <template #content>
                <p>
                  Самовывоз со складского комплекса в Екатеринбурге и удаленных
                  оптово-розничных подразделений Мастер-Сантехник
                </p>
              </template>
            </AccordionItem>
            <AccordionItem id="ac4">
              <template #title>
                <div class="text-xl font-medium">Доставка на объект</div>
              </template>
              <template #content>
                <p>
                  Груз доставляется на непосредственно строительный объект, что
                  позволяет оптимизировать складские запасы клиента
                </p>
              </template>
            </AccordionItem>
            <AccordionItem id="ac5">
              <template #title>
                <div class="text-xl font-medium">Доставка по городу</div>
              </template>
              <template #content>
                <p>Доставка собственным автотранспортом по Екатеринбургу</p>
              </template>
            </AccordionItem>
            <AccordionItem id="ac6">
              <template #title>
                <div class="text-xl font-medium">
                  Транзитные поставки от поставщика
                </div>
              </template>
              <template #content>
                <p>
                  Доставка от производителя/ поставщика непосредственно на склад
                  заказчика
                </p>
              </template>
            </AccordionItem>
          </AccordionWrapper>
          <!-- # Accordion -->
          <h2>
            График курсирования наших машин в радиусе 250 км от Екатеринбурга
          </h2>
          <div><strong>Среда</strong></div>
          <ul>
            <li>Первоуральск — Ревда-Дегтярск</li>
            <li>Бисерть — Ачит — Красноуфимск — Арти — Михайловск</li>
            <li>Сысерть — Полевской</li>
          </ul>
          <div><strong>Четверг</strong></div>
          <ul>
            <li>Катайск — Далматово — Шадринск — Каргаполье</li>
            <li>Каменск-Уральский</li>
            <li>Реж — Артемовский — Алапаевск — Верхняя Синячиха</li>
          </ul>
          <div><strong>Пятница</strong></div>
          <ul>
            <li>Ирбит — Туринск — Туринская Слобода — Байкалово</li>
            <li>Заречный — Рефтинский — Асбест</li>
            <li>Богданович — Сухой Лог — Камышлов — р.п. Пышма — Талица</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import AccordionWrapper from '@/components/UI/Accordion/AccordionWrapper.vue';
import AccordionItem from '@/components/UI/Accordion/AccordionItem.vue';

useHead({
  title: 'Доставка',
});

const breadcrumbs = [{ name: 'Доставка', url: '/services/delivery' }];
</script>
