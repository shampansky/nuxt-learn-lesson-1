<script setup lang="ts">
const title = ref('');
const content = ref('');
const url = ref('');

const handleSubmit = () => {
  $fetch('http://localhost:3001/posts', {
    method: 'POST',
    body: {
      title: title.value,
      content: content.value,
      url: url.value,
    },
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('auth_token'),
    },
  });
};
</script>
<template>
  <h1>create post</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="url" placeholder="Url" />
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="content" placeholder="Content" />
    <button type="submit">Create</button>
  </form>
</template>
