<script setup lang="ts">
import type { Post } from '~/types';
const { id } = useRoute().params;
const { data } = await useAppFetch<Post>(`/posts/${id}`);
</script>

<template>
  <div>
    <h1>Post id {{ $route.params.id }}</h1>
    <div v-if="data">
      <h2>{{ data.title }}</h2>
      <p>{{ data.content }}</p>
    </div>
  </div>
</template>
