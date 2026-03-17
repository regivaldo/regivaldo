import { useState, useEffect } from "react";
import type { PortfolioItem } from "../types";
import { portfolioItems as mockItems } from "../data/portfolio";

export function usePortfolio() {
  const [data, setData] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setData(mockItems);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao carregar portfólio");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
