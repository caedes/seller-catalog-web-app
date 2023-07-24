import { useQuery } from "@tanstack/react-query";
import api from "@/api";

export default function useProducts() {
  return useQuery(["products"], async () => await api.get("products").json());
}
