<template>
  <div class="p-6 border border-gray-300 rounded-xl space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="input-group space-y-2">
        <label for="userName">Имя и Фамилия</label>
        <app-input
          v-model.trim="name"
          placeholder="Ваше имя"
          inputType="border"
          inputSize="md"
        />
      </div>
      <div class="input-group space-y-2">
        <label for="userPhone">Телефон</label>
        <app-input
          type="tel"
          v-model.trim="phone"
          placeholder="Ваш телефон"
          inputType="border"
          inputSize="md"
          />
        <div class="text-sm text-gray-500">Например: +7 (912) 345-67-89</div>
      </div>
      <div class="input-group space-y-2">
        <label for="userEmail">Email</label>
        <app-input
          v-model.trim="email"
          placeholder="Ваш email"
          inputType="border"
          inputSize="md"
        />
      </div>
      <div class="input-group space-y-2">
        <label for="userPsw">Пароль</label>
        <app-input
          v-model="psw"
          type="password"
          disabled
          placeholder="Ваш пароль"
          inputType="border"
          inputSize="md"
        />
        <div class="text-sm inline-flex -ml-1 space-x-1">
          <app-button @click="onChangePassword" btnType="link" btnSize="xs"
            >Изменить</app-button
          >
          <app-button @click="onRememberPassword" btnType="link" btnSize="xs"
            >Напомнить</app-button
          >
        </div>
      </div>
    </div>
    <div class="space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
      <app-button
        @click="changeProfileHandler"
        :disabled="!getIsBtnChangeProfile"
      >
        <btn-spinner v-if="!userInfoIsUpdated" />
        Сохранить изменения
      </app-button>
      <span
        v-if="!getIsBtnChangeProfile"
        class="text-sm text-gray-500 block sm:inline-block"
        >Изменения сохранены</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppInput from '@/components/UI/Forms/AppInput.vue';
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import { useProfileStore } from '@/stores/profile';
import { useAppMessage } from '@/stores/appMessage';
import BtnSpinner from '@/components/UI/Spinner/BtnSpinner.vue';

const profileStore = useProfileStore();
const appMessage = useAppMessage();

const userInfoIsUpdated = ref(true);

const name = ref(profileStore.profile.name || '');
const email = ref(profileStore.profile.email || '');
const phone = ref(profileStore.profile.phone || '');
const psw = ref('123864343');

const errorMessage = ref(null);

const emits = defineEmits(['changePassword', 'rememberPassword']);

const getIsBtnChangeProfile = computed(() => {
  return (
    profileStore.profile.name !== name.value ||
    profileStore.profile.email !== email.value ||
    phoneCleanerFormat(profileStore.profile.phone) !==
      phoneCleanerFormat(phone.value)
  );
});

function onChangePassword() {
  emits('changePassword');
}
function onRememberPassword() {
  emits('rememberPassword');
}

async function changeProfileHandler() {
  userInfoIsUpdated.value = false;
  const res = await profileStore.changeProfile(
    name.value,
    phoneCleanerFormat(phone.value),
    email.value
  );

  if (res instanceof Error) {
    appMessage.openWithTimer(
      'error',
      'При сохранении профиля произошла ошибка',
      'error'
    );
    // console.log('Error', res);
  } else {
    // console.log("ИЗМЕНЕНИЕ ПРОФИЛЯ", res)
    await profileStore.loadProfile();

    name.value = profileStore.profile.name || '';
    email.value = profileStore.profile.email || '';
    phone.value = profileStore.profile.phone || '';

    if (res.success) {
      appMessage.openWithTimer(
        'success',
        'Профиль успешно сохранен',
        'success'
      );
    } else if (res.data === 'error') {
      /*
      TODO: Узнать какие еще ошибки бывают
      Не возможно удалить номер, нустое значение отдает ошибку
      */
      switch (res.message) {
        case 'phone is already taken':
          errorMessage.value = 'Профиль с таким телефоном уже существует';
          break;
        case 'phone incorrect':
          errorMessage.value = 'Введен некорректный номер телефона';
          break;
        case 'email incorrect':
          errorMessage.value = 'Введен некорректный email';
          break;
        case 'length name must be more than 6 simbols':
          errorMessage.value = 'Введено некорректное имя';
          break;
        default:
          errorMessage.value = 'При сохранении профиля произошла ошибка';
          break;
      }

      appMessage.openWithTimer('error', errorMessage.value, 'error');
    }
  }
  userInfoIsUpdated.value = true;
}
</script>
