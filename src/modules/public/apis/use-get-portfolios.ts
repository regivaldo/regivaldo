import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "../types";
import { portfolioItems as mockItems } from "../data/portfolio";

async function getPortfolios(): Promise<PortfolioItem[]> {
  // TODO: substituir pelo fetch real quando houver API
  return mockItems;
}

export function useGetPortfolios() {
  return useQuery<PortfolioItem[]>({
    queryKey: ["portfolios"],
    queryFn: getPortfolios,
  });
}
