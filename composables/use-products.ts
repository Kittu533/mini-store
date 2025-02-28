// import { ref, onMounted } from "vue";
// import api from "../utils/api";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// export function useProducts() {
//   const products = ref<Product[]>([]);
//   const product = ref<Product | null>(null);
//   const loading = ref<boolean>(true);

//   // Ambil semua produk
//   const fetchProducts = async () => {
//     try {
//       const response = await api.get("/products");
//       products.value = response.data;
//     } catch (error) {
//       console.error("Gagal mengambil produk:", error);
//     } finally {
//       loading.value = false;
//     }
//   };

//   // Ambil detail produk berdasarkan ID
//   const fetchProductById = async (id: string) => {
//     try {
//       const response = await api.get(`/products/${id}`);
//       product.value = response.data;
//     } catch (error) {
//       console.error("Gagal mengambil detail produk:", error);
//     } finally {
//       loading.value = false;
//     }
//   };

//   onMounted(fetchProducts);

//   return { products, product, fetchProductById, loading };
// }

import { ref } from "vue";
import api from "~/utils/api";

export function useProducts() {
  const products = ref([]);
  const product = ref(null);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      products.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil produk:", error);
    }
  };

  const fetchProductById = async (id: string) => {
    try {
      const response = await api.get(`/products/${id}`);
      product.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil detail produk:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/products/categories");
      return response.data;
    } catch (error) {
      console.error("Gagal mengambil kategori:", error);
      return [];
    }
  };

  return { products, product, fetchProducts, fetchProductById, fetchCategories };
}
