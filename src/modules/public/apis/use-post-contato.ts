import { useMutation } from "@tanstack/react-query";
import type { ContactFormData } from "../types";

async function postContato(data: ContactFormData): Promise<void> {
  // TODO: substituir pelo fetch real quando houver API
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Contato enviado:", data);
}

export function usePostContato() {
  return useMutation<void, Error, ContactFormData>({
    mutationFn: postContato,
  });
}
