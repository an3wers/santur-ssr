<template>
  <div class="border border-gray-300 rounded-xl p-6">
    <div class="text-2xl font-bold mb-5">Документы</div>
    <div class="divide-y divide-gray-300">
      <div class="py-4 first:pt-0 last:pb-0">
        <div class="text-lg font-bold mb-3">Закрывающие документы</div>
        <form @submit.prevent="documentRequestHandler" class="space-y-4">
          <!-- switch -->
          <button-group-wrapper @onClickBtnGroup="btnGroupHandler">
            <button-group :title="`${documentRequestMethods[0]['title']}`">
              <div class="input-group w-auto sm:w-96 space-y-2">
                <label for="documentRange">Выбрать период</label>
                <div
                  class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 space-x-0 sm:space-x-2 items-center"
                >
                  <app-input
                    type="date"
                    v-model="documents.rangeStart"
                    name="documentRangeStart"
                  />
                  <span>—</span>
                  <app-input
                    type="date"
                    v-model="documents.rangeEnd"
                    name="documentRangeEnd"
                  />
                </div>
              </div>
            </button-group>
            <button-group :title="`${documentRequestMethods[1]['title']}`">
              <div class="input-group w-auto sm:w-96 space-y-2">
                <label>Номер заказа или счета</label>
                <app-input
                  type="text"
                  v-model="documents.number"
                  name="documentNumber"
                />
                <div class="text-sm text-gray-500">
                  Можно ввести несколько через запятую
                </div>
              </div>
            </button-group>
          </button-group-wrapper>
          <app-button
            :disabled="!isDocumentHandler || getDocumentsProcess"
            type="submit"
          >
            <BtnSpinner v-if="getDocumentsProcess" />
            Получить документы
          </app-button>
        </form>
      </div>
      <div class="py-4 first:pt-0 last:pb-0">
        <div class="text-lg font-bold mb-3">Акт сверки</div>
        <form @submit.prevent="actsRequestHandler" class="space-y-4">
          <div class="input-group w-auto sm:w-96 space-y-2">
            <label for="ActRange">Выбрать период</label>
            <div
              class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 space-x-0 sm:space-x-2 items-center"
            >
              <app-input
                type="date"
                v-model="acts.rangeStart"
                name="ActRangeStart"
              />
              <span>—</span>
              <app-input
                type="date"
                v-model="acts.rangeEnd"
                name="ActRangeEnd"
              />
            </div>
          </div>
          <app-button
            :disabled="!isActsHandler || getActsProcess"
            type="submit"
          >
            <BtnSpinner v-if="getActsProcess" />
            Получить акт сверки
          </app-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/UI/Buttons/AppButton.vue';
import AppInput from '@/components/UI/Forms/AppInput.vue';
import buttonGroupWrapper from '@/components/UI/buttonGroup/buttonGroupWrapper.vue';
import buttonGroup from '@/components/UI/buttonGroup/buttonGroup.vue';
import { ref, reactive, computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import BtnSpinner from '@/components/UI/Spinner/BtnSpinner.vue';

const { getComapnytDocuments, getCompanyActs } = useProfileStore();

const getDocumentsProcess = ref(false);
const getActsProcess = ref(false);

const documentRequestMethods = ref([
  { title: 'За период', isSelectet: true },
  { title: 'По номеру заказа или счета', isSelectet: false },
]);

function btnGroupHandler(value) {
  documentRequestMethods.value.forEach((el) => {
    el.isSelectet = false;
  });

  documentRequestMethods.value.find(
    (el) => el.title === value
  ).isSelectet = true;
}

const documents = reactive({
  rangeStart: '',
  rangeEnd: '',
  number: '',
});

const acts = reactive({
  rangeStart: '',
  rangeEnd: '',
});

const isDocumentHandler = computed(() => {
  if (documentRequestMethods.value[0].isSelectet) {
    return (
      documents.rangeStart &&
      documents.rangeEnd &&
      new Date(documents.rangeStart) <= new Date(documents.rangeEnd)
    );
  } else {
    return documents.number;
  }
});

const isActsHandler = computed(() => {
  return (
    acts.rangeStart &&
    acts.rangeEnd &&
    new Date(acts.rangeStart) <= new Date(acts.rangeEnd)
  );
});

async function documentRequestHandler() {
  getDocumentsProcess.value = true;
  if (documentRequestMethods.value[0].isSelectet) {
    const leftDate = useDate(new Date(documents.rangeStart));
    const rightDate = useDate(new Date(documents.rangeEnd));
    await getComapnytDocuments(leftDate, rightDate);

    // console.log('За период', leftDate, rightDate);
    documents.rangeStart = '';
    documents.rangeEnd = '';
  } else {
    // console.log('По номеру заказа или счета', documents.number);
    const tmpStr = documents.number.replace(/\s/g, '');
    await getComapnytDocuments('', '', tmpStr);
    documents.number = '';
  }
  getDocumentsProcess.value = false;
}

async function actsRequestHandler() {
  // console.log('Акт сверки', acts.rangeStart, acts.rangeEnd)
  getActsProcess.value = true;
  const leftDate = useDate(new Date(acts.rangeStart));
  const rightDate = useDate(new Date(acts.rangeEnd));

  await getCompanyActs(leftDate, rightDate);

  getActsProcess.value = false;

  acts.rangeStart = '';
  acts.rangeEnd = '';
}
</script>
