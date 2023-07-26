import { useQuery } from "@tanstack/react-query";
import api from "@/api";

export default function useProductsByIds({ ids }) {
  const uniqIds = new Set(ids);

  const searchParams = new URLSearchParams();
  uniqIds.forEach((id) => searchParams.append("id", id));

  return useQuery({
    queryKey: ["products", { ids: uniqIds }],
    queryFn: async () =>
      ids.length > 0 ? await api.get("products", { searchParams }).json() : [],
  });
}
