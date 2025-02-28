import api from "~/utils/api";

export function useAuth() {
  const login = async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { username, password });
      return response.data.token; // API mengembalikan token
    } catch (error) {
      console.error("Gagal login:", error);
      return null;
    }
  };

  return { login };
}
