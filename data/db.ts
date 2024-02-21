export const newUserId = "43bdc9a6-882d-4646-a923-5e439680c4dc";

export const messageData: MessageType[] = [
  {
    id: "87c62047-d3a2-48ef-965d-466695b3a4f0",
    user: {
      id: "7552da7f-ae25-46ff-a1eb-baa0fa3270fd",
      username: "christopherldo",
      name: "Christopher de Oliveira",
      avatar_url: "/images/avatars/default.png",
    },
    time: new Date(),
    type: "sent",
    content:
      "Esse aqui é um exemplo de Chatbot, aqui onde você iniciará o seu teste.",
  },
  {
    id: "ce2f2f0e-a43b-4d93-8af6-d2381f90a5ca",
    user: {
      id: "7552da7f-ae25-46ff-a1eb-baa0fa3270fd",
      username: "christopherldo",
      name: "Christopher de Oliveira",
      avatar_url: "/images/avatars/default.png",
    },
    time: new Date(),
    type: "sent",
    content: "Siga as instruções detalhadas no Notion oficial e boa sorte!",
  },
  {
    id: "e42617f6-1da8-484a-9ee4-7fd01c225f2a",
    user: {
      id: newUserId,
      username: "mateus_mendes",
      name: "Mateus Mendes",
      avatar_url: "/images/avatars/mateus_mendes.png",
    },
    time: new Date(),
    type: "received",
    content: "Olá, estou interessado na vaga, comecarei agora mesmo.",
  },
];
