import { useQuery } from "@tanstack/react-query";
import type { SocialLink } from "../types";
import { socialLinks as mockSocialLinks } from "../data/social-links";

async function getSocialLinks(): Promise<SocialLink[]> {
  // TODO: substituir pelo fetch real quando houver API
  return mockSocialLinks;
}

export function useGetSocialLinks() {
  return useQuery<SocialLink[]>({
    queryKey: ["social-links"],
    queryFn: getSocialLinks,
  });
}
