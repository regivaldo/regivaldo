export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link?: string;
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

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
