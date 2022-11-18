<template>
  <div class="from-remember-pass">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div class="input-group space-y-2">
        <label for="remember-email">Ваш email</label>
        <app-input
          type="email"
          inputType="border"
          v-model="currentEmailValue"
          id="remember-email"
          :inputSize="controlSize"
        />
      </div>
      <div class="flex flex-col">
        <AppButton
          :disabled="!isSubmit || passwordSanding"
          type="submit"
          :btnSize="controlSize"
        >
          <btn-spinner v-if="passwordSanding" />
          Напомнить пароль
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import AppInput from '@/components/UI/Forms/AppInput.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { ref, computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import BtnSpinner from '@/components/UI/Spinner/BtnSpinner.vue';

const profileStore = useProfileStore();

const passwordSanding = ref(false);

defineProps({
  controlSize: {
    type: String,
    default: 'md',
  },
});

const currentEmailValue = ref(profileStore.profile?.email || '');

const isSubmit = computed(() => {
  let tmpArr = [];
  tmpArr = currentEmailValue.value.match(/@|\./g) || [];
  return tmpArr.length > 1 && currentEmailValue.value.length > 4;
});

const emits = defineEmits(['rememberPassword']);

async function onSubmit() {
  passwordSanding.value = true;
  const res = await profileStore.sendForgotPass(currentEmailValue.value);
  passwordSanding.value = false;
  if (res instanceof Error) {
    return undefined;
  } else {
    emits('rememberPassword', currentEmailValue.value);
  }
}
</script>
