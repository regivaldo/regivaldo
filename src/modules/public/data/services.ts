import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "web",
    title: "Desenvolvimento Web",
    description:
      "Sites e sistemas web modernos, responsivos e otimizados para performance e SEO.",
    icon: "🌐",
    details: [
      "Sites institucionais e landing pages",
      "Sistemas web e dashboards",
      "E-commerces e marketplaces",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "mobile",
    title: "Desenvolvimento Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
    icon: "📲",
    details: [
      "Apps nativos iOS e Android",
      "Apps híbridos com React Native",
      "Integração com APIs e serviços",
      "Publicação nas lojas",
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas Sob Medida",
    description:
      "Soluções personalizadas para automatizar processos e resolver desafios específicos do seu negócio.",
    icon: "⚙️",
    details: [
      "ERP e CRM personalizados",
      "Automação de processos",
      "Integrações entre sistemas",
      "APIs e microserviços",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria Técnica",
    description:
      "Orientação estratégica em tecnologia para ajudar sua empresa a tomar as melhores decisões.",
    icon: "💡",
    details: [
      "Arquitetura de software",
      "Code review e refatoração",
      "Escolha de tecnologias",
      "Mentoria para equipes",
    ],
  },
];
