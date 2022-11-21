<template>
  <div class="registration-page bg-slate-150 -mb-20 border-b border-gray-300">
    <div class="container">
      <div class="grid grid-cols-12">
        <div
          class="col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-4 lg:col-span-6 xl:col-start-5 xl:col-span-4 pt-8 pb-16"
        >
          <!-- Кнопка назад -->
          <app-go-back />
          <div class="w-full bg-white rounded-2xl py-8 px-6 shadow-md">
            <h1 class="text-2xl font-bold !mb-0">Зарегистрироваться</h1>
            <div class="pt-8">
              <registration-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegistrationForm from '@/components/forms/RegistrationForm.vue';
import AppGoBack from '@/components/AppGoBack.vue';

useHead({
  title: 'Регистрация',
});
</script>
