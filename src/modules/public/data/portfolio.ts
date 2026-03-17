import type { PortfolioItem } from "../types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "taskflow",
    title: "TaskFlow Pro",
    client: "StartupX",
    description:
      "Sistema de gestão de projetos com kanban, chat em tempo real e relatórios automatizados para equipes ágeis.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "#",
  },
  {
    id: "shopease",
    title: "ShopEase",
    client: "Loja Virtual Brasil",
    description:
      "E-commerce completo com mais de 5.000 produtos, integração com múltiplos gateways de pagamento e logística automatizada.",
    technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
    link: "#",
  },
  {
    id: "fittrack",
    title: "FitTrack App",
    client: "Academia Vida Saudável",
    description:
      "Aplicativo mobile para acompanhamento de treinos, nutrição e evolução física com gamificação.",
    technologies: ["React Native", "Firebase", "Node.js", "Charts"],
    link: "#",
  },
  {
    id: "educaplus",
    title: "EducaPlus",
    client: "Instituto Aprender",
    description:
      "Plataforma EAD com videoaulas, exercícios interativos, certificados automáticos e área do aluno.",
    technologies: ["Vue.js", "Python", "Docker", "Redis"],
    link: "#",
  },
];
