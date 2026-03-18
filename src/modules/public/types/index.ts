export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
  features: string[];
  link?: string;
  linkLabel?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  url: string;
  helpText?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
