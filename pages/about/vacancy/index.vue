<template>
  <div class="container">
    <h1>Вакансии</h1>
    <ul>
      <li v-for="item in vacancy">
        <div>{{ useHTMLDecoding(item.post_title) }}</div>
        <div v-html="useHTMLDecoding(item.post_content)"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const vacancy = ref([]);

const res = await $fetch('http://10.10.10.77:5168/api/post/vakansii', {
  method: 'post',
  credentials: 'include',
});

vacancy.value = res.items;
console.log('Vacancy', res);

function htmlDecode(input) {
  try {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  } catch (e) {
    console.error(e);
    return input;
  }
}
</script>
