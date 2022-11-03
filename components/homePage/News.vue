<template>
  <div class="new-home mt-16">
    <section-title>
      <template #title>Новости</template>
      <template #button>
        <app-button
          @click="$router.push({ path: '/about/news' })"
          btnType="link"
        >
          Все новости
          <arrow-right-alt-icon-20 class="ml-1" color="#1976D2" />
        </app-button>
      </template>
    </section-title>
    <news-list />
  </div>
</template>

<script setup>
import SectionTitle from '@/components/homePage/SectionTitle.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import ArrowRightAltIcon20 from '@/components/UI/Icons/ArrowRightAltIcon_20.vue';
import NewsList from '@/components/homePage/NewsList.vue';
// import { computed} from 'vue'
// import {useHomeStore} from '@/stores/home'
</script>
