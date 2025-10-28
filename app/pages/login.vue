<script setup lang="ts">
import type { AuthResponse } from '~/types';
const login = ref('');
const password = ref('');

const handleSubmit = async () => {
  const { token } = await $fetch<AuthResponse>(
    'http://localhost:3001/auth/login',
    {
      method: 'POST',
      body: {
        login: login.value,
        password: password.value,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(token);
  localStorage.setItem('auth_token', token);
};
</script>
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="login" placeholder="Login" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
