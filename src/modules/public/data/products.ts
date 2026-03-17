import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "escoteiros-app",
    slug: "escoteiros-app",
    title: "Escoteiros.app",
    description:
      "Sistema completo de gestão escoteira. Controle de membros, progressão pessoal, atividades e comunicação entre grupos escoteiros.",
    icon: "🏕️",
    tag: "Sistema",
    features: [
      "Gestão de membros e patrulhas",
      "Acompanhamento de progressão pessoal",
      "Agenda de atividades e eventos",
      "Comunicação entre líderes e pais",
      "Relatórios e histórico de participação",
    ],
    link: "https://escoteiros.app",
    linkLabel: "Acesse o site",
  },
  {
    id: "quiz-escoteiro",
    slug: "quiz-escoteiro",
    title: "Quiz Escoteiro",
    description:
      "Site de quiz interativo para escoteiros testarem seus conhecimentos. Perguntas sobre técnicas, história e valores do escotismo.",
    icon: "🧠",
    tag: "Quiz",
    features: [
      "Quizzes temáticos por categoria",
      "Ranking de pontuação entre participantes",
      "Perguntas sobre técnicas escoteiras",
      "Modo treino e modo desafio",
      "Compartilhamento de resultados",
    ],
    link: "https://quizescoteiro.com.br",
    linkLabel: "Acesse o site",
  },
  {
    id: "o-stop-e",
    slug: "o-stop-e",
    title: "O Stop é",
    description:
      "Aplicativo mobile do clássico jogo Stop (Adedonha) reinventado. Jogue com amigos em tempo real com categorias personalizáveis.",
    icon: "🎮",
    tag: "Aplicativo",
    features: [
      "Partidas multiplayer em tempo real",
      "Categorias personalizáveis",
      "Sistema de pontuação automático",
      "Chat durante as partidas",
      "Histórico de jogos e estatísticas",
    ],
    link: "https://ostope.com.br",
    linkLabel: "Acesse a loja",
  },
];
