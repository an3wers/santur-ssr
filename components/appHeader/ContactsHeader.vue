<template>
  <div
    class="hidden lg:flex header__contacts items-center space-x-4 header-contacts"
  >
    <span class="font-semibold"
      ><a class="no-underline text-gray-900" :href="`tel:${PHONE_SITE}`">{{
        phoneFormatter(PHONE_SITE)
      }}</a></span
    >
    <div class="hidden xl:flex items-center">
      <Popper hover arrow content="Написать на эл. адрес">
        <a
          class="inline-flex mr-4 items-center text-center justify-center rounded-md disabled:opacity-75 bg-blue-100 border border-transparent hover:bg-blue-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 py-2 text-base px-2 leading-5"
          target="_blank"
          :href="`mailto:${EMAIL_SITE}`"
        >
          <email-icon-24 />
        </a>
      </Popper>
      <Popper hover arrow content="Написать в WhatsApp ">
        <a
          class="inline-flex items-center text-center justify-center rounded-md disabled:opacity-75 bg-blue-100 border border-transparent hover:bg-blue-200 focus:outline-none focus:ring-slate-500 focus:ring focus:ring-opacity-20 text-gray-800 py-2 text-base px-2 leading-5"
          target="_blank"
          :href="`https://api.whatsapp.com/send/?phone=${WHATSAPP_SITE}`"
        >
          <whatsapp-icon-24 />
        </a>
      </Popper>
    </div>
  </div>
</template>

<script setup>
import EmailIcon24 from '@/components/UI/Icons/EmailIcon_24.vue';
import WhatsappIcon24 from '@/components/UI/Icons/WhatsappIcon_24.vue';
import AppButtonRegularIcon from '@/components/UI/Buttons/AppButtonRegularIcon.vue';
// import { useConfig } from "@/utils/config";
// import { phoneFormatter } from "@/utils/helpers";
import Popper from 'vue3-popper';

const { PHONE_SITE, EMAIL_SITE, WHATSAPP_SITE } = useConfig();
</script>
