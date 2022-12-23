<template>
  <div class="p-6 border border-gray-300 rounded-xl">
    <div class="text-xl lg:text-2xl font-bold mb-5">
      Отправить заказ списком, задать вопрос или написать в техническую
      поддержку
    </div>
    <p>* — обязательные поля для заполнения</p>
    <form @submit="fromFeedbackHandler" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="input-group space-y-2">
          <label>Имя и Фамилия*</label>
          <app-input
            v-model.trim="name"
            type="text"
            :inputType="
              errorName && metaName.touched ? 'border-error' : 'border'
            "
            inputSize="md"
            @blur="blurName"
          />
          <div
            v-if="errorName && metaName.touched"
            class="text-sm text-red-500"
          >
            {{ errorName }}
          </div>
        </div>
        <div class="input-group space-y-2">
          <label>Email*</label>
          <app-input
            v-model.trim="email"
            type="email"
            :inputType="
              errorEmail && metaEmail.touched ? 'border-error' : 'border'
            "
            inputSize="md"
            @blur="blurEmail"
          />
          <div
            v-if="errorEmail && metaEmail.touched"
            class="text-sm text-red-500"
          >
            {{ errorEmail }}
          </div>
        </div>
        <div class="input-group space-y-2">
          <label>Название компании</label>
          <app-input
            v-model.trim="companyName"
            type="text"
            inputType="border"
            inputSize="md"
          />
        </div>
        <div class="input-group space-y-2">
          <label>ИНН компании</label>
          <app-input
            v-model.trim="companyInn"
            type="number"
            :inputType="
              errorCompanyInn && metaCompanyInn.touched
                ? 'border-error'
                : 'border'
            "
            inputSize="md"
            @blur="blurCompanyInn"
          />
          <div
            v-if="errorCompanyInn && metaCompanyInn.touched"
            class="text-sm text-red-500"
          >
            {{ errorCompanyInn }}
          </div>
        </div>
      </div>
      <div class="input-group space-y-2">
        <label>Комментарий*</label>
        <app-textarea
          v-model.trim="comment"
          :inputType="
            errorComment && metaComment.touched ? 'border-error' : 'border'
          "
          @blur="blurComment"
        />
        <div
          class="text-sm text-red-500"
          v-if="errorComment && metaComment.touched"
        >
          {{ errorComment }}
        </div>
      </div>
      <!-- files components-->
      <!-- <div class="input-group">
        <div class="mb-2">
          <button
            class="bg-transparent border border-transparent hover:text-primary-hover focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 hover:no-underline text-primary underline inline-flex items-center text-center justify-center rounded-md disabled:opacity-70"
            type="button"
            @click="isAddFiles = !isAddFiles"
          >
            Добавить файлы
            <span :class="isAddFiles && 'rotate-180'"><ExpandMoreIcon_20 color="#1976D2" /></span>
          </button>
        </div>
        <div v-if="isAddFiles" class="space-y-2">
          <p class="text-sm">
            Максимальный размер каждого файла не должен превышать {{ MAX_FILE_SIZE_MB }} мб.
          </p>
          <AppInputFile
            :file="formFiles.fileOne"
            :limit="MAX_FILE_SIZE_MB"
            @onChangeFile="updateFileHandler"
            @onClearFile="removeFileHandler"
          />
          <AppInputFile
            :file="formFiles.fileTwo"
            :limit="MAX_FILE_SIZE_MB"
            @onChangeFile="updateFileHandler"
            @onClearFile="removeFileHandler"
          />
          <AppInputFile
            :file="formFiles.fileThree"
            :limit="MAX_FILE_SIZE_MB"
            @onChangeFile="updateFileHandler"
            @onClearFile="removeFileHandler"
          />
        </div>
      </div> -->
      <!-- # files components-->

      <!-- isFilesError добавить к кнопке когда будет готово api-->
      <app-button
        :disabled="!isBtnSubmit || isSubmitting"
        type="submit"
        btnSize="lg"
      >
        <btn-spinner v-if="isSubmitting" />
        Отправить</app-button
      >
    </form>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import AppInput from "@/components/UI/Forms/AppInput.vue";
import AppTextarea from "@/components/UI/Forms/AppTextarea.vue";
import AppButton from "@/components/UI/Buttons/AppButton.vue";
import { useAppMessage } from "@/stores/appMessage";
import { useProfileStore } from "@/stores/profile";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import BtnSpinner from "@/components/UI/Spinner/BtnSpinner.vue";
import AppInputFile from "@/components/UI/Forms/AppInputFile.vue";
import ExpandMoreIcon_20 from "@/components/UI/Icons/ExpandMoreIcon_20.vue";

const { handleSubmit, submitCount, isSubmitting } = useForm();
const { API_BASE_URL } = useConfig();
const profileStore = useProfileStore();
const appMessage = useAppMessage();

const MIN_LENGTH_VALUE = 4;
const MIN_LENGTH_COMMENT = 6;
const MIN_LENGTH_INN = 10;
const MAX_LENGTH_INN = 12;
const MAX_FILE_SIZE = 20000000;
const MAX_FILE_SIZE_MB = 20;

const isAddFiles = ref(false);

const {
  value: name,
  errorMessage: errorName,
  handleBlur: blurName,
  meta: metaName,
} = useField(
  "name",
  yup
    .string()
    .required("Введите ваше имя")
    .min(
      MIN_LENGTH_VALUE,
      `Минимальная длина поля ${MIN_LENGTH_VALUE} символа`
    ),
  {
    initialValue:
      profileStore.profile.name && profileStore.profile.name === "Гость"
        ? ""
        : profileStore.profile.name,
  }
);
const {
  value: email,
  errorMessage: errorEmail,
  handleBlur: blurEmail,
  meta: metaEmail,
} = useField(
  "email",
  yup
    .string()
    .required("Введите ваш email")
    .email("Введите корректный email")
    .trim(),
  { initialValue: profileStore?.profile?.email || "" }
);
const {
  value: companyName,
  errorMessage: errorCompanyName,
  handleBlur: blurCompanyName,
  meta: metaCompanyName,
} = useField("companyName", yup.string(), {
  initialValue: profileStore?.profile?.subjInfo?.name || "",
});

// .min(MIN_LENGTH_INN, `Минимальная длина поля ${MIN_LENGTH_INN} символов`)
const {
  value: companyInn,
  errorMessage: errorCompanyInn,
  handleBlur: blurCompanyInn,
  meta: metaCompanyInn,
} = useField(
  "companyInn",
  yup
    .string()
    .max(MAX_LENGTH_INN, `Максимальная длина поля ${MAX_LENGTH_INN} символов`)
    .trim(),
  {
    initialValue: profileStore?.profile?.subjInfo?.inn || undefined,
  }
);

const {
  value: comment,
  errorMessage: errorComment,
  handleBlur: blurComment,
  meta: metaComment,
} = useField(
  "comment",
  yup
    .string()
    .required("Введите ваш комментарий")
    .min(
      MIN_LENGTH_COMMENT,
      `Минимальная длина поля ${MIN_LENGTH_COMMENT} символов`
    )
);

const formFiles = reactive({
  fileOne: {
    value: "",
    isError: false,
    id: "fileOne",
    file: null,
  },
  fileTwo: {
    value: "",
    isError: false,
    id: "fileTwo",
    file: null,
  },
  fileThree: {
    value: "",
    isError: false,
    id: "fileThree",
    file: null,
  },
});

const isBtnSubmit = computed(() => {
  if (comment.value) {
    return (
      comment.value.length >= MIN_LENGTH_COMMENT && email.value && name.value
    );
  }
});

// const isTooManyAttempts = computed(() => {
//   return submitCount.value >= 10;
// });

// Files handlers

// @onChangeFile="updateFileHandler"
// @onClearFile="removeFileHandler"

// files validation
const isFilesError = computed(() => {
  const isError = formFiles.fileOne.isError || formFiles.fileTwo.isError || formFiles.fileThree.isError
  return isError // true or false
})

function updateFileHandler(e) {
  if (e.target.files.length) {
    const id = e.target.id;

    if (id in formFiles) {
      formFiles[id] = {
        ...formFiles[id],
        value: e.target.files[0].name,
        file: e.target.files[0],
        isError: e.target.files[0].size >= MAX_FILE_SIZE,
      };
    }
  }
}

function removeFileHandler(id) {
  const domEl = document.querySelector(`#${id}`);
  if (id in formFiles) {
    formFiles[id] = {
      ...formFiles[id],
      value: "",
      file: null,
      isError: false,
    };
  }
  if (domEl.value) {
    domEl.value = "";
  }
}

const fromFeedbackHandler = handleSubmit(async (values, { resetForm }) => {
  const { name, companyName, comment, companyInn, email } = values;

  const data = new FormData();

  data.append("authorname", name);
  data.append("subjectname", companyName);
  data.append("subjectinn", companyInn);
  data.append("email", email);
  data.append("descr", comment);

  // TODO: Доделать отправку файлов через форму

  try {
    const res = await $fetch(`${API_BASE_URL}apissz/SendFeedback`, {
      method: "post",
      body: data,
      credentials: "include",
    });

    if (res.success) {
      // console.log(res);
      resetForm();
      appMessage.openWithTimer(
        "success",
        "Сообщение успешно отправлено",
        "success"
      );
    } else {
      throw new Error(res.message || "При отправки формы произошла ошибка");
    }
  } catch (error) {
    appMessage.openWithTimer("error", error.message, "error");
  }
});
</script>
