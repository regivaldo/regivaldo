import { useQuery } from "@tanstack/react-query";
import type { Service } from "../types";
import { services as mockServices } from "../data/services";

async function getServices(): Promise<Service[]> {
  // TODO: substituir pelo fetch real quando houver API
  return mockServices;
}

export function useGetServices() {
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: getServices,
  });
}
