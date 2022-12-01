<template>
  <div class="container">
    <div class="post-wrapper">
        <AppBreadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Сотрудникам компании</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
            <NuxtLink
              to="https://fort.santur.ru:10443"
              target="_blank"
              class="flex items-center justify-center bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 text-gray-800 no-underline h-14 md:h-24"
              >Войти в VPN-портал</NuxtLink
            >

            <NuxtLink
              to="https://mail.santur.ru"
              target="_blank"
              class="flex items-center justify-center bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 text-gray-800 no-underline h-14 md:h-24"
              >Войти в почту</NuxtLink
            >

            <NuxtLink
              to="https://mail.santur.ru"
              target="_blank"
              class="flex items-center justify-center bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 text-gray-800 no-underline h-14 md:h-24"
              >Изменить пароль</NuxtLink
            >
          </div>
          <p>VPN-Portal — <NuxtLink to="https://old.santur.ru/wp-content/uploads/2021/11/Fort_vpn_v4-1.docx">Инструкция</NuxtLink></p>
          <p>VPN-Portal — <NuxtLink to="https://old.santur.ru/UPLOAD/remote-ucsk/VPN-santur.exe">Клиент ВПН</NuxtLink></p>
          <p>Удаленный доступ — <NuxtLink to="https://old.santur.ru/UPLOAD/remote-ucsk/kerio.zip">скачать Kerio</NuxtLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
const breadcrumbs = [{ name: 'Сотрудникам компании', url: '/staff' }];

useHead({
    title: 'Сотрудникам компании'
})

</script>
