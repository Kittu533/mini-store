import { ref } from "vue";
import api from "~/utils/api";

export function useCart() {
  const cart = ref([]);

  const fetchAllCarts = async () => {
    try {
      const response = await api.get("/carts");
      cart.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil data cart:", error);
    }
  };

  const fetchUserCart = async (userId: number) => {
    try {
      const response = await api.get(`/carts/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Gagal mengambil cart pengguna:", error);
      return null;
    }
  };

  const addToCart = async (cartData: object) => {
    try {
      const response = await api.post("/carts", cartData);
      return response.data;
    } catch (error) {
      console.error("Gagal menambahkan ke cart:", error);
      return null;
    }
  };

  return { cart, fetchAllCarts, fetchUserCart, addToCart };
}
