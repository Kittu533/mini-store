<template>
    <div class="container mx-auto p-4">
      <NuxtLink to="/" class="text-blue-500">⬅ Kembali</NuxtLink>
      
      <div v-if="loading">Memuat Produk...</div>
      
      <div v-else class="flex gap-4">
        <img :src="product.image" alt="Product Image" class="w-1/3 h-60 object-contain">
        <div>
          <h1 class="text-2xl font-bold">{{ product.title }}</h1>
          <p class="text-gray-600">${{ product.price }}</p>
          <p class="mt-2">{{ product.description }}</p>
          <button @click="addToCart(product)" class="mt-4 bg-green-500 text-white px-3 py-1 rounded">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import api from "../../utils/api";
  
  const route = useRoute();
  const product = ref({});
  const loading = ref(true);
  const cartStore = useCartStore();
  
  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${route.params.id}`);
      product.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil detail produk:", error);
    } finally {
      loading.value = false;
    }
  };
  
  const addToCart = (item) => {
    cartStore.addToCart(item);
  };
  
  onMounted(() => {
    fetchProduct();
  });
  </script>
  