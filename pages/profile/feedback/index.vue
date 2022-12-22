<template>
  <div class="feedback-wrap">
    <ProfilePageWrapper title="Обратная связь">
      <div class="space-y-6">
        <app-informer type="info" icon="info">
          <div>
            У вас претензия или рекламация?
            <NuxtLink to="/clients/claim">Воспользуйтесь сервисом</NuxtLink> для
            приема рекламаций.
          </div>
        </app-informer>
        <form-feedback />
      </div>
    </ProfilePageWrapper>
    <PageLoader v-if="!pageIsLoaded" />
  </div>
</template>

<script setup>
import ProfilePageWrapper from "@/components/profile/ProfilePageWrapper.vue";
import PageLoader from "@/components/loaders/PageLoader.vue";
import FormFeedback from "@/components/profile/feedback/FormFeedback.vue";
import AppInformer from "@/components/AppInformer.vue";
import AppButton from "@/components/UI/Buttons/AppButton.vue";
import { onMounted, ref } from "vue";

useHead({
  title: "Обратная связь",
});

const pageIsLoaded = ref(false);

onMounted(() => {
  pageIsLoaded.value = true;
});
</script>
