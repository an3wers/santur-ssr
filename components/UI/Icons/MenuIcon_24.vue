<template>
  <svg xmlns="http://www.w3.org/2000/svg" :fill="color" height="24" width="24">
    <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#111827',
  },
});
</script>
