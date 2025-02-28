import { ref } from "vue";
import api from "~/utils/api";

export function useUsers() {
  const users = ref([]);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      users.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil users:", error);
    }
  };

  const fetchUserById = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Gagal mengambil user:", error);
      return null;
    }
  };

  return { users, fetchUsers, fetchUserById };
}
