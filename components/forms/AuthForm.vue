<template>
  <div class="form-auth">
    <form @submit="loginHandler" class="space-y-5">
      <div class="input-block space-y-2">
        <label>Email</label>
        <app-input
          :inputType="
            errorEmail && metaEmail.touched ? 'border-error' : 'border'
          "
          inputSize="lg"
          v-model.trim="emailU"
          type="email"
          @blur="blurEmail"
        />
        <div
          v-if="errorEmail && metaEmail.touched"
          class="text-sm text-red-500"
        >
          {{ errorEmail }}
        </div>
      </div>
      <div class="input-block space-y-2">
        <label>Пароль</label>
        <app-input
          :inputType="errorPsw && metaPsw.touched ? 'border-error' : 'border'"
          inputSize="lg"
          v-model.trim="pswU"
          type="password"
          autocomplete="on"
          @blur="blurPsw"
        />
        <div v-if="errorPsw && metaPsw.touched" class="text-sm text-red-500">
          {{ errorPsw }}
        </div>
        <div class="text-right">
          <app-button
            class=""
            @click="handleRememberPassword"
            btnType="link"
            btnSize="md"
            >Забыли пароль?</app-button
          >
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <!-- TODO disabled state-->
        <app-button
          :disabled="!isSubmitActive || isTooManyAttempts || isSubmitting"
          type="submit"
          btnSize="lg"
        >
          <BtnSpinner v-if="authIsProcess" />
          Войти
        </app-button>
        <app-button
          btnType="secondary"
          @click="$router.push('/registration')"
          btnSize="lg"
          >Зарегистрироваться</app-button
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AppInput from "@/components/UI/Forms/AppInput.vue";
import AppButton from "@/components/UI/Buttons/AppButton.vue";

import { useAuthStore } from "@/stores/auth";
import { useAppMessage } from "@/stores/appMessage";
import { useCartStore } from "@/stores/cart";
import { useProfileStore } from "@/stores/profile";

import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import BtnSpinner from "@/components/UI/Spinner/BtnSpinner.vue";

const authStore = useAuthStore();
const appMessageStore = useAppMessage();
const cartStore = useCartStore();
const profileStore = useProfileStore();

const authIsProcess = ref(false);

const { handleSubmit, submitCount, isSubmitting } = useForm();

const emits = defineEmits(["onRememberPass"]);

const {
  value: emailU,
  errorMessage: errorEmail,
  handleBlur: blurEmail,
  meta: metaEmail,
} = useField(
  "emailU",
  yup
    .string()
    .email("Введите корректный email")
    .required("Введите ваш email")
    .trim()
);

const {
  value: pswU,
  errorMessage: errorPsw,
  handleBlur: blurPsw,
  meta: metaPsw,
} = useField("pswU", yup.string().required("Введите пароль").trim());

const isTooManyAttempts = computed(() => {
  return submitCount.value >= 10;
});

const isSubmitActive = computed(() => {
  return emailU.value && pswU.value;
});

const loginHandler = handleSubmit(async (values, { setErrors }) => {
  authIsProcess.value = true;
  const res = await authStore.login(values);
  if (res instanceof Error) {
    setErrors({ pswU: res.message });
  }
  authIsProcess.value = false;
});

function handleRememberPassword() {
  // console.log("Remember password");
  emits("onRememberPass");
}
</script>
