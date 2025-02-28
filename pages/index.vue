<!-- <template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Mini Store</h1>

    <div v-if="loading">Memuat Produk...</div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4" v-else>
      <div v-for="product in products" :key="product.id" class="p-4 border rounded-lg">
        <img :src="product.image" alt="Product Image" class="w-full h-40 object-contain">
        <h2 class="text-lg font-semibold mt-2">{{ product.title }}</h2>
        <p class="text-sm text-gray-500">${{ product.price }}</p>
        <NuxtLink :to="`/product/${product.id}`" class="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded">
          Detail
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "../composables/use-products";

const { products, loading } = useProducts();
</script> -->

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Daftar Produk</h1>

    <div v-if="!products.length">Memuat Produk...</div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="p-4 border rounded-lg">
        <img :src="product.image" alt="Product Image" class="w-full h-40 object-contain">
        <h2 class="text-lg font-semibold mt-2">{{ product.title }}</h2>
        <p class="text-sm text-gray-500">${{ product.price }}</p>
        <NuxtLink :to="`/product/${product.id}`" class="text-blue-500">Lihat Detail</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProducts } from "~/composables/use-products";

const { products, fetchProducts } = useProducts();
fetchProducts();
</script>

