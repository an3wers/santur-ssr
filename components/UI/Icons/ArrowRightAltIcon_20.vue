<template>
    <svg xmlns="http://www.w3.org/2000/svg" :fill="color" height="20" width="20"><path d="M11.646 15 10.417 13.75 13.292 10.875H3.333V9.125H13.292L10.417 6.25L11.646 5L16.646 10Z"/></svg>
</template>

<script setup>
    defineProps({
        color: {
            type: String,
            default: '#111827'
        },
    })
</script>