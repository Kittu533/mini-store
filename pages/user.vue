<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Daftar Pengguna</h1>
  
      <div v-if="users.length === 0">Memuat pengguna...</div>
  
      <ul v-else>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.username }} - {{ user.email }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUsers } from "~/composables/use-users";
  import { onMounted } from "vue";
  
  const { users, fetchUsers } = useUsers();
  
  onMounted(fetchUsers);
  </script>
  