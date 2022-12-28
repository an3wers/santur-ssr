<template>
  <div class="container">
    <div class="post-wrapper">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">{{ title }}</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <div class="grid grid-cols-2 gap-6">
            <div
              class="col-span-2 md:col-span-1 px-8 py-6 space-y-4 bg-slate-150 rounded-xl flex flex-col"
            >
              <h3 class="!my-0">Оформить заказ самостоятельно на сайте</h3>
              <div class="grow">
                <p>
                  Добавьте необходимые товары в корзину и пройдите процесс
                  оформления заказа.
                </p>
                <p>
                  Для того, чтобы мы сразу смогли сформировать счёт на оплату
                  для вашего юр. лица, вам потребуется предварительно
                  <NuxtLink to="/registration">зарегистрироваться</NuxtLink> на
                  сайте.
                </p>
              </div>
              <div class="flex justify-end">
                <AppButton
                  @click="$router.push('/catalog')"
                  btnType="primary"
                  btnSize="md"
                >
                  Перейти в каталог
                  <span class="ml-2">
                    <ArrowRightAltIcon_20 color="#ffffff" />
                  </span>
                </AppButton>
              </div>
            </div>
            <div
              class="col-span-2 md:col-span-1 px-8 py-6 space-y-4 bg-slate-150 rounded-xl flex flex-col"
            >
              <h3 class="!my-0">
                Подбор товара через заявку в свободной форме
              </h3>
              <div class="grow">
                <p>
                  Оставьте заявку на подбор товара через форму обратной связи.
                  Есть возможность прикрепить спецификацию и карточку
                  предприятия. После отправки формы менеджер компании обработает
                  заказ и свяжется с вами.
                </p>
              </div>
              <div class="flex justify-end">
                <AppButton
                  @click="$router.push('/profile/feedback')"
                  btnType="primary"
                  btnSize="md"
                >
                  Отправить заявку
                  <span class="ml-2">
                    <ArrowRightAltIcon_20 color="#ffffff" />
                  </span>
                </AppButton>
              </div>
            </div>
          </div>
          <section>
            <h2>Оптовые продажи</h2>
            <div class="divide-y divide-gray-300">
              <div class="grid grid-cols-2 gap-6 py-6 first:pt-0 last:pb-0">
                <div class="col-span-2 md:col-span-1">
                  <h3 class="!my-0">Сантехкомплект-Урал</h3>
                  <div>Офис оптовых продаж в Екатеринбурге</div>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <p>
                    <a class="no-underline text-gray-900" :href="PHONE_SITE">{{
                      phoneFormatter(PHONE_SITE)
                    }}</a
                    >,
                    <a :href="`mailto:${EMAIL_SITE}`">{{ EMAIL_SITE }}</a>
                  </p>
                  <p>г. Екатеринбург, ул. Учителей, 34</p>
                  <p>
                    Время работы: пн — чт 08:30 — 18:00, пт 08:30 — 17:00, сб,
                    вс — выходной
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-6 py-6 first:pt-0 last:pb-0">
                <div class="col-span-2 md:col-span-1">
                  <h3 class="!my-0">Сантехкомплект-Тагил</h3>
                  <div>Оптовые продажи в Нижнем Тагиле</div>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <p>
                    <a class="no-underline text-gray-900" href="tel:73435476486"
                      >+7 (3435) 47-64-86</a
                    >,
                    <a href="mailto:tagil.santur.ru">tagil.santur.ru</a>
                  </p>
                  <p>г. Нижний Тагил, ул. Индустриальная, 20</p>
                  <p>
                    Режим работы пн — чт 09:00 — 18:00 пт 09:00 — 17:00 сб — вс
                    выходной
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>Розничные продажи</h2>
            <div class="divide-y divide-gray-300">
              <div class="grid grid-cols-2 gap-6 py-6 first:pt-0 last:pb-0">
                <div class="col-span-2 md:col-span-1">
                  <h3 class="!my-0">Мастер-Сантехник</h3>
                  <div>Розничные продажи в Екатеринбурге и Нижнем&nbsp;Тагиле</div>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <p>
                    <a
                      class="no-underline text-gray-900"
                      href="tel:73432700445"
                      >{{ phoneFormatter("73432700445") }}</a
                    >
                  </p>
                  <p>
                    Время работы конкретного магазина уточняйте по телефону или
                    на
                    <NuxtLink target="_blank" to="//msantehnik.ru"
                      >сайте</NuxtLink
                    >
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import AppButton from "@/components/UI/Buttons/AppButton.vue";
import ArrowRightAltIcon_20 from "~~/components/UI/Icons/ArrowRightAltIcon_20.vue";

const title = "Как купить товар?";

useHead({
  title,
});

const { PHONE_SITE, EMAIL_SITE } = useConfig();

const breadcrumbs = [{ name: title, url: "/clients/claim" }];
</script>
