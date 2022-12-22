<template>
  <label
    class="file-label rounded-lg p-1 border space-x-2"
    :class="file.isError ? 'border-red-500' : 'border-gray-300'"
    :for="file.id"
  >
    <div
      role="button"
      class="inline-flex text-center justify-center rounded-md disabled:opacity-75 py-2 text-base px-2 leading-5 bg-blue-100 border border-transparent hover:bg-blue-200 focus:outline-none focus:ring-blue-500 focus:ring focus:ring-opacity-20 text-gray-800"
    >
      <AttachFileIcon_20 />
      Обзор…
    </div>
    <input type="file" :id="file.id" @change="changeFileHandler($event)" />
    <!-- empty -->
    <div style="word-break: break-word;" class="py-2 grow">
      <div v-if="!file.value">Файл не выбран.</div>
      <div v-else>
        {{ file.value }}
        <div v-if="file.isError" class="text-red-500 text-sm mt-1">
          Размер файла превышает {{ limit }} мб.
        </div>
      </div>
    </div>
    <AppButtonIcon
      btnType="light"
      v-if="file.value"
      @click.stop="fileClearHandler(file.id)"
    >
      <CloseIcon_20 />
    </AppButtonIcon>
    <!-- clear -->
    <!-- validation -->
  </label>
</template>

<script setup>
import AppButtonIcon from "@/components/UI/Buttons/AppButtonIcon.vue";
import CloseIcon_20 from "@/components/UI/Icons/CloseIcon_20.vue";
import AttachFileIcon_20 from "@/components/UI/Icons/AttachFileIcon_20.vue";

defineProps(["file", "limit"]);

const emits = defineEmits(['onChangeFile', 'onClearFile']);

// change value handler
function changeFileHandler(e) {
  // console.log(e)
  emits("onChangeFile", e);
}

function fileClearHandler(id) {
  // console.log(id)
  emits("onClearFile", id);
}

// remove file handler
</script>
