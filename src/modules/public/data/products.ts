import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "saas",
    title: "Plataforma SaaS",
    description:
      "Sistemas web completos com painel administrativo, gestão de usuários e relatórios em tempo real.",
    icon: "☁️",
    features: [
      "Painel administrativo",
      "Gestão de usuários",
      "Relatórios em tempo real",
      "API RESTful",
    ],
    link: "#",
  },
  {
    id: "mobile",
    title: "App Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com design intuitivo e performance otimizada.",
    icon: "📱",
    features: [
      "iOS e Android",
      "Notificações push",
      "Modo offline",
      "Integração com APIs",
    ],
    link: "#",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Lojas virtuais completas com carrinho, pagamentos integrados e gestão de estoque.",
    icon: "🛒",
    features: [
      "Carrinho de compras",
      "Gateway de pagamento",
      "Gestão de estoque",
      "Painel do vendedor",
    ],
    link: "#",
  },
  {
    id: "landing",
    title: "Landing Page",
    description:
      "Páginas de alta conversão com design moderno, otimizadas para SEO e velocidade.",
    icon: "🚀",
    features: [
      "Design responsivo",
      "Otimização SEO",
      "Alta performance",
      "Formulários inteligentes",
    ],
    link: "#",
  },
];
