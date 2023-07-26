import { useQuery } from "@tanstack/react-query";
import api from "@/api";

export default function useProducts({ searchTerm = "" }) {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await api.get(`products?q=${searchTerm}`).json(),
    refetchOnWindowFocus: false,
  });
}
