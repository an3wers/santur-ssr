<template>
  <div class="container">
    <div class="post-wrapper">
      <app-breadcrumbs :breadcrumbs="breadcrumbs" position="center" />
      <h1 class="text-center">Прием рекламаций</h1>
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
          <claim-form />
        </div>
      </div>
      <!-- 
                Брэдкрамбс
                Заголовок
                Форма
                Текст
             -->
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import ClaimForm from '@/components/clients/ClaimForm.vue';

useHead({
  title: 'Прием рекламаций',
});

const breadcrumbs = [{ name: 'Прием рекламаций', url: '/clients/claim' }];
</script>
