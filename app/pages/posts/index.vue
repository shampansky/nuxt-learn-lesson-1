<script setup lang="ts">
import type { Post } from '~/types';
const { data } = await useAppFetch<Post[]>('/posts');
</script>

<template>
  <div>
    <h1>Posts</h1>

    <ul>
      <li v-for="post in data" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
