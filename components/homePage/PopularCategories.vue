<template>
  <div class="popular-category mt-10 mb-10">
    <div>
      <section-title>
        <template #title>Популярные категории</template>
        <template #button>
          <app-button @click="$router.push('/catalog')" btnType="link">
            Все категории
            <arrow-right-alt-icon-20 class="ml-1" color="#1976D2" />
          </app-button>
        </template>
      </section-title>
      <!-- Карточки -->
      <popular-category-list />
    </div>
  </div>
</template>

<script setup>
// import {useHomeStore} from '@/stores/home'
// import { computed, ref } from 'vue'
import SectionTitle from '@/components/homePage/SectionTitle.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
// import ArrowForvardIcon20 from '@/components/UI/Icons/ArrowForvardIcon_20.vue'
import ArrowRightAltIcon20 from '@/components/UI/Icons/ArrowRightAltIcon_20.vue';
import PopularCategoryList from '@/components/homePage/PopularCategoryList.vue';
</script>
