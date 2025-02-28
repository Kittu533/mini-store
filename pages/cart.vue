<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Keranjang Belanja</h1>
  
      <div v-if="cart.length === 0">Keranjang kosong</div>
  
      <ul v-else>
        <li v-for="(item, index) in cart" :key="index" class="flex justify-between border-b p-2">
          <span>{{ item }} - ${{ item }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCart } from "~/composables/use-cart";
  import { onMounted } from "vue";
  
  const { cart, fetchAllCarts } = useCart();
  
  onMounted(() => {
    fetchAllCarts();
  });
  </script>
  