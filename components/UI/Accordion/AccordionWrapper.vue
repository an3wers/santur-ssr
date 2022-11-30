<template>
  <div class="accrodion-wrapper divide-y divide-gray-300 my-4">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const props = defineProps({
  default: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['itemHandler'])

const stateAccordion = ref('');
stateAccordion.value = props.default;

function updateState(id) {
  //   console.log(id);
  if (stateAccordion.value !== id) {
    stateAccordion.value = id;
  } else {
    stateAccordion.value = '';
  }
  emits('itemHandler', stateAccordion.value)
}

provide('activeItem', { stateAccordion, updateState });
</script>
