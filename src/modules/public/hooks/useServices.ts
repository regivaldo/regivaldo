import { useState, useEffect } from "react";
import type { Service } from "../types";
import { services as mockServices } from "../data/services";

export function useServices() {
  const [data, setData] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setData(mockServices);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao carregar serviços");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
