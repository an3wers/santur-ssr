<template>
  <div class="container">
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11">
        <div class="my-8 bg-emerald-100 rounded-xl px-8 py-8 text-center">
          <h1 class="!mt-0">Пользователь заблокирован</h1>
          <p class="mb-4">
            Пользователь {{ $route.query?.username || '' }} успешно
            заблокирован.
          </p>
          <app-button @click="$router.push('/')">Перейти на главную</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/UI/Buttons/AppButton.vue';
</script>
