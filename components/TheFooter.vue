<template>
  <footer class="bg-slate-150 pt-16 pb-10">
    <div class="container divide-y divide-gray-300 space-y-10">
      <!-- Section one -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <div class="space-y-6">
            <div class="mt-[7px]">
              <img src="~/assets/images/logo-santur.svg" alt="logo" />
            </div>
            <div class="text-sm">
              <span class="block">1995-{{ currenYear }}</span>
              <span class="block">ООО «УЦСК «Сантехкомплект-Урал»</span>
            </div>
            <div class="flex space-x-2">
              <NuxtLink
                :to="`https://api.whatsapp.com/send/?phone=${WHATSAPP_SITE}`"
                target="_blank"
                class="no-underline py-2 text-base px-2 leading-5 bg-slate-300 border border-transparent hover:bg-slate-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 inline-flex items-center text-center justify-center rounded-md disabled:opacity-75"
              >
                <WhatsappIcon_24 color="#00477B" />
              </NuxtLink>
              <NuxtLink
                :to="SOCIAL_URLS.tg"
                target="_blank"
                class="no-underline py-2 text-base px-2 leading-5 bg-slate-300 border border-transparent hover:bg-slate-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 inline-flex items-center text-center justify-center rounded-md disabled:opacity-75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#00477B"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="SOCIAL_URLS.youtube"
                target="_blank"
                class="no-underline py-2 text-base px-2 leading-5 bg-slate-300 border border-transparent hover:bg-slate-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 inline-flex items-center text-center justify-center rounded-md disabled:opacity-75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#00477B"
                  class="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="SOCIAL_URLS.vk"
                target="_blank"
                class="no-underline py-2 text-base px-2 leading-5 bg-slate-300 border border-transparent hover:bg-slate-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 inline-flex items-center text-center justify-center rounded-md disabled:opacity-75"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2420_85)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.68707 1.68707C0 3.37413 0 6.0894 0 11.52V12.48C0 17.9106 0 20.6259 1.68707 22.313C3.37413 24 6.0894 24 11.52 24H12.48C17.9106 24 20.6259 24 22.313 22.313C24 20.6259 24 17.9106 24 12.48V11.52C24 6.0894 24 3.37413 22.313 1.68707C20.6259 0 17.9106 0 12.48 0H11.52C6.0894 0 3.37413 0 1.68707 1.68707ZM4.05006 7.30005C4.18006 13.54 7.30005 17.2901 12.7701 17.2901H13.0801V13.72C15.0901 13.92 16.61 15.3901 17.22 17.2901H20.06C19.28 14.4501 17.23 12.8801 15.95 12.2801C17.23 11.5401 19.0299 9.74005 19.4599 7.30005H16.8799C16.3199 9.28005 14.6601 11.08 13.0801 11.25V7.30005H10.5V14.22C8.9 13.82 6.88005 11.88 6.79005 7.30005H4.05006Z"
                      fill="#00477B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2420_85">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-3">
          <div>
            <span class="font-semibold mb-4 block">Наши ресурсы</span>
            <ul class="text-sm space-y-2">
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://msantehnik.ru"
                  >Мастер-Сантехник</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://forum.santur.ru"
                  >Инженерный форум</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://fire.santur.ru"
                  >Пожарное оборудование</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://pro.santur.ru"
                  >Собственное производство</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://seti.santur.ru"
                  >Наружные сети</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://santechportal.ru"
                >
                  Сервис самостоятельных заявок
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-3">
          <div>
            <span class="font-semibold mb-4 block">О компании</span>
            <ul class="text-sm space-y-2">
              <li>
                <NuxtLink class="no-underline text-gray-700" to="/about/company"
                  >Сантехкомплект-Урал</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  to="/about/company-managers"
                  >Менеджмент</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="no-underline text-gray-700" to="/about/objects"
                  >Объекты комплектации</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  to="/about/informaciya-dlya-postavshhikov"
                  >Информация для поставщиков</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="no-underline text-gray-700" to="/about/vacancy"
                  >Вакансии</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/news" class="no-underline text-gray-700"
                  >Новости компании</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contact" class="no-underline text-gray-700"
                  >Контакты</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-3">
          <div class="mb-4">
            <span class="font-semibold mb-4 block">Сервис и услуги</span>
            <ul class="text-sm space-y-2">
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  to="/services/delivery"
                  >Доставка</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  target="_blank"
                  to="https://pro.santur.ru"
                  >Собственное производство</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="no-underline text-gray-700" to="/clients/claim"
                  >Прием рекламаций</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/profile/feedback"
                  class="no-underline text-gray-700"
                  >Обратная связь</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <span class="font-semibold mb-4 block">Каталог</span>
            <ul class="text-sm space-y-2">
              <li>
                <NuxtLink class="no-underline text-gray-700" to="/catalog"
                  >Каталог товаров</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  to="/clients/brands"
                  >Наши бренды</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="no-underline text-gray-700"
                  to="/clients/how-buy"
                  >Как купить товар</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- # Section one -->
      <!-- Section two -->
      <div>
        <div class="flex items-center justify-between mt-10">
          <div
            class="flex flex-col md:flex-row items-center space-x-0 space-y-2 md:space-y-0 md:space-x-4 order-2"
          >
            <NuxtLink
              target="_blank"
              to="https://apps.apple.com/ru/app/%D1%81%D0%B0%D0%BD%D1%82%D0%B5%D1%85%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82-%D1%83%D1%80%D0%B0%D0%BB/id1577478673"
              ><img
                src="~/assets/images/mobile/app-store-badge-santur.svg"
                alt=""
                width="144"
            /></NuxtLink>
            <NuxtLink
              target="_blank"
              to="https://play.google.com/store/apps/details?id=ru.santur.ucskapp"
              ><img
                src="~/assets/images/mobile/android-badge-santur.svg"
                alt=""
                width="162"
            /></NuxtLink>
          </div>
          <div class="order-1">
            <NuxtLink to="/politika" class="text-sm no-underline text-gray-700">
              Политика обработки персональных данных
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- # Section two -->
    </div>
  </footer>
</template>

<script setup>
import WhatsappIcon_24 from "@/components/UI/Icons/WhatsappIcon_24.vue";

const { WHATSAPP_SITE, SOCIAL_URLS } = useConfig();
const currenYear = new Date().getFullYear();
</script>
