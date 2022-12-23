<template>
  <div class="container">
    <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />

    <h1 class="text-center">Контакты и реквизиты</h1>

    <div class="grid gap-6 grid-cols-12">
      <div class="col-span-12 md:col-span-6">
        <div class="space-y-6">
          <!-- Информер -->
          <app-informer type="warning">
            <div class="text-sm">
              <p class="last:mb-0">
                Сантехкомплект-Урал работает только с
                юридическими лицами.
              </p>
              <p class="last:mb-0">
                Для физических лиц действует сеть розничных магазинов
                «Мастер-Сантехник», ближайший магазин по адресу: ул. Сулимова,
                23
              </p>
            </div>
          </app-informer>
          <!-- Информер -->
          <!-- УЦСК -->
          <div>
            <div class="p-4 bg-slate-150">
              <h3 class="mb-0">Сантехкомплект-Урал</h3>
              <div>Офис оптовых продаж в Екатеринбурге</div>
            </div>
            <!-- Форма -->
          <div class="flex flex-col mt-4">
            <AppButton @click="$router.push('/profile/feedback')" btnType="outline">Форма обратной связи</AppButton>
          </div>
          <!-- # Форма -->
            <div class="divide-y divide-gray-300">
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Адрес</span>
                <span class="text-right"
                  >620137, г. Екатеринбург, ул. Учителей, 34</span
                >
              </div>
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Телефон</span>
                <div class="text-right">
                  <span
                    ><a
                      class="no-underline text-gray-900"
                      href="tel:73432700404"
                      >+7 (343) 270-04-04</a
                    ></span
                  >
                  <span class="block mt-2"
                    ><a
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=79321217497"
                      >Написать в Whatsapp</a
                    ></span
                  >
                </div>
              </div>
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Email</span>
                <span class="text-right"
                  ><a href="mailto:santur@santur.ru">santur@santur.ru</a></span
                >
              </div>
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Режим работы</span>
                <span class="text-right"
                  >пн — чт 08:30 — 18:00, пт 08:30 — 17:00,<br />
                  сб, вс — выходной</span
                >
              </div>
              <div class="px-4 py-4 text-right">
                <button @click="toggleModal">Реквизиты</button>
              </div>
            </div>
          </div>

          

          
          
          <!-- Пункт выдачи -->

          <div>
            <div class="p-4 bg-slate-150">
              <h3 class="mb-0">Пункт выдачи оптовых заказов</h3>
            </div>

            <div class="divide-y divide-gray-300">
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Адрес</span>
                <span class="text-right"
                  >г. Екатеринбург, ул. Учителей, 38А</span
                >
              </div>
            </div>
          </div>

          <!-- Тагил -->

          <div>
            <div class="p-4 bg-slate-150">
              <h3 class="mb-0">Сантехкомплект-Тагил</h3>
              <div>Офис оптовых продаж в Нижнем Тагиле</div>
            </div>

            <div class="divide-y divide-gray-300">
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Адрес</span>
                <span class="text-right"
                  >622000, Свердловская обл., г. Нижний Тагил, ул.
                  Индустриальная, 20</span
                >
              </div>
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Телефон</span>
                <span class="text-right"
                  ><a class="no-underline text-gray-900" href="tel:+73435476486"
                    >+7 (3435) 47-64-86</a
                  ></span
                >
              </div>
              <div class="px-4 py-4 flex justify-between space-x-4">
                <span class="text-gray-500 w-24 md:w-48">Email</span>
                <span class="text-right"
                  ><a href="mailto:tagil@santur.ru">tagil@santur.ru</a></span
                >
              </div>
            </div>
          </div>
          <!-- Мастер-Сантехник -->

          <div>
            <div class="p-4 bg-slate-150">
              <h3 class="mb-0">Сеть магазинов Мастер-Сантехник</h3>
              <div>
                Сеть оптово-розничных магазинов сантехники в Екатеринбурге,
                Верхней Пышме и Нижнем Тагиле
              </div>
            </div>

            <div class="divide-y divide-gray-300">
              <div class="px-4 py-4">
                <span class="text-xl text-gray-500">Екатеринбург</span>
              </div>
              <div
                v-for="(item, index) in masterAddressesEkb"
                class="px-4 py-4"
                :key="index"
              >
                <div>{{ item.address }}</div>
                <div>{{ item.time }}</div>
                <div>{{ phoneFormatter(item.phone) }}</div>
              </div>
              <div class="px-4 py-4">
                <span class="text-xl text-gray-500">Верхняя Пышма</span>
              </div>
              <div
                v-for="(item, index) in masterAddressesPishma"
                class="px-4 py-4"
                :key="index"
              >
                <div>{{ item.address }}</div>
                <div>{{ item.time }}</div>
                <div>{{ phoneFormatter(item.phone) }}</div>
              </div>
              <div class="px-4 py-4">
                <span class="text-xl text-gray-500">Нижний Тагил</span>
              </div>
              <div
                v-for="(item, index) in masterAddressesTagil"
                :key="index"
                class="px-4 py-4"
              >
                <div>{{ item.address }}</div>
                <div>{{ item.time }}</div>
                <div>{{ phoneFormatter(item.phone) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6">
        <div
          class="h-96 md:h-[calc(100vh-48px)] w-full relative md:sticky top-6"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc6e9931d96700e7214d34cd6ff16c98d71bf29f121338016a832a09e32c232e&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
            scroll="false"
          ></iframe>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <app-modal modalSize="xl" @close="toggleModal" v-if="isOpenModal">
        <template #header>Реквизиты Сантехкомплект-Урал</template>
        <template #body>
          <!-- Контент -->
          <p>
            Общество с ограниченной ответственностью «Уральский Центр
            Сантехнической комплектации «Сантехкомплект-Урал» (ООО «УЦСК
            «Сантехкомплект-Урал»)
          </p>
          <p>620137 г. Екатеринбург, ул. Учителей, 34, офис 215</p>
          <p>Тел./факс +7 (343) 270-04-04</p>
          <ul class="py-4 space-y-1">
            <li>ИНН 6686052547</li>
            <li>КПП 668601001</li>
            <li>БИК 046577674</li>
            <li>
              р/с 40702810016540012015 в Уральском банке ПАО «Сбербанк России»
            </li>
            <li>к/с 30101810500000000674</li>
            <li>ОКВЭД 53.51.21 ОКПО 99340356 ОКАТО 65401385000</li>
          </ul>
          <p>Управляющий компанией: Федорцев Виталий Викторович</p>
          <p>Главный бухгалтер: Вохмякова Анна Юрьевна</p>
          <!-- # Контент -->
        </template>
      </app-modal>
    </Teleport>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import AppModal from '@/components/modal/AppModal.vue';
import AppInformer from '@/components/AppInformer.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue'

useHead({
  title: 'Контакты и реквизиты',
});

const breadcrumbs = [{ name: 'Контакты', url: '/contact' }];

const isOpenModal = ref(false);

function toggleModal() {
  isOpenModal.value = !isOpenModal.value;
}
</script>
