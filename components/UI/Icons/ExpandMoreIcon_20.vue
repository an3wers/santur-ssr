<template>
    <svg xmlns="http://www.w3.org/2000/svg" :fill="color" height="20" width="20"><path d="M10 12.812 5 7.812 6.229 6.583 10 10.354 13.771 6.583 15 7.812Z"/></svg>
</template>

<script setup>
    defineProps({
        color: {
            type: String,
            default: '#111827'
        },
    })
</script>