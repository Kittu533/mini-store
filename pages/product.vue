<template>
    <div class="container mx-auto p-4">
      <NuxtLink to="/" class="text-blue-500">⬅ Kembali</NuxtLink>
      <div v-if="!product">Memuat detail produk...</div>
  
      <div v-else>
        <img :src="product.image" class="w-1/3 h-auto object-contain">
        <h1 class="text-2xl font-bold mt-2">{{ product.title }}</h1>
        <p class="text-gray-600">${{ product.price }}</p>
        <p class="mt-2">{{ product.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from "vue-router";
  import { useProducts } from "~/composables/use-products";
  import { onMounted } from "vue";
  
  const route = useRoute();
  const { product, fetchProductById } = useProducts();
  
  onMounted(() => {
    fetchProductById(route.params.id as string);
  });
  </script>
  