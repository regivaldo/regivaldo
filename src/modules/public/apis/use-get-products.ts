import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types";
import { products as mockProducts } from "../data/products";

async function getProducts(): Promise<Product[]> {
  // TODO: substituir pelo fetch real quando houver API
  return mockProducts;
}

export function useGetProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
