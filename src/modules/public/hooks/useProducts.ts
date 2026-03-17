import { useState, useEffect } from "react";
import type { Product } from "../types";
import { products as mockProducts } from "../data/products";

export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setData(mockProducts);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
