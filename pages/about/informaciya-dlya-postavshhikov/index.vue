<template>
  <div class="container">
    <div class="post-wrapper">
      <AppBreadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">{{ title }}</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
            <AppInformer>
                <p>Ваше коммерческое предложение для сотрудничества отправляйте на электронный адрес <NuxtLink to="mailto:newsupply@santur.ru">newsupply@santur.ru</NuxtLink></p>
                <p class="!mb-0">Комплект документов, необходимых для заключения договора вы можете <NuxtLink to="https://old.santur.ru/wp-content/uploads/2017/12/documentforpostav.pdf">скачать</NuxtLink></p>
            </AppInformer>
            <img src="/images/info_dlya_postavshikov.jpg" class="max-w-full h-auto mt-4" :alt="title">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import AppInformer from "~~/components/AppInformer.vue";

const title = 'Информация для поставщиков'
const breadcrumbs = [
  {
    name: title,
    url: "/about/informaciya-dlya-postavshhikov",
  },
];

useHead({
  title: title,
  
});
</script>
