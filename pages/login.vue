<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
  
      <input v-model="username" placeholder="Username" class="border p-2 rounded mb-2 w-full" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 rounded mb-2 w-full" />
      <button @click="handleLogin" class="bg-blue-500 text-white px-3 py-1 rounded w-full">Login</button>
  
      <p v-if="token" class="mt-4 text-green-600">Token: {{ token }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useAuth } from "~/composables/use-auth";
  
  const username = ref("");
  const password = ref("");
  const token = ref("");
  
  const { login } = useAuth();
  
  const handleLogin = async () => {
    token.value = await login(username.value, password.value);
  };
  </script>
  