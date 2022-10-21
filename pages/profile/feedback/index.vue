<template>
  <div class="feedback-wrap">
    <ProfilePageWrapper title="Обратная связь">
      <div class="space-y-6">
        <app-informer type="primary" icon="info">
          <div>
            <div class="text-lg font-semibold">Прием рекламаций</div>
            <div>
              У вас претензия или рекламация? Воспользуйтесь сервисом для приема
              рекламаций.
            </div>
          </div>
          <app-button
            @click="$router.push({ path: '/clients/claim' })"
            class="-ml-4"
            btnType="link"
            >Подать рекламацию</app-button
          >
        </app-informer>
        <form-feedback />
      </div>
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import ProfilePageWrapper from '@/components/profile/ProfilePageWrapper.vue';
import PageLoader from '@/components/loaders/PageLoader.vue';
import FormFeedback from '@/components/profile/feedback/FormFeedback.vue';
import AppInformer from '@/components/AppInformer.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { onMounted, ref } from 'vue';

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});
</script>
