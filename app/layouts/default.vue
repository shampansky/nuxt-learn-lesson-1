<template>
  <header>Header</header>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/login">Login</NuxtLink>
    |
    <NuxtLink to="/posts">Posts</NuxtLink> |
    <NuxtLink to="/posts/create">Create Post</NuxtLink>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>
