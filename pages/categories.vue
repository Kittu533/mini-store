<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Kategori Produk</h1>
  
      <div v-if="!categories.length">Memuat Kategori...</div>
  
      <ul>
        <li v-for="category in categories" :key="category" class="text-blue-500">
          {{ category }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useProducts } from "~/composables/use-products";
  import { ref, onMounted } from "vue";
  
  const { fetchCategories } = useProducts();
  const categories = ref([]);
  
  onMounted(async () => {
    categories.value = await fetchCategories();
  });
  </script>
  