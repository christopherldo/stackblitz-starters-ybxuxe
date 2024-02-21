import ChatButton from "@/components/ChatButton";
import { usersData } from "@/data/db";

export default function Home() {
  const data: UserType[] = [
    { ...usersData.mateus_mendes, username: "mateus_mendes" },
    { ...usersData.christopherldo, username: "christopherldo" },
    { ...usersData.gabriel_silva, username: "gabriel_silva" },
  ];

  return (
    <div className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200">
      <div className="h-4 bg-[#272e3f]"></div>
      <div className="flex flex-1 flex-col">
        {data.map((user) => (
          <ChatButton key={user.id} user={user} />
        ))}
      </div>
      <div className="bg-[#272e3f] p-2 text-center text-white">
        Feito por{" "}
        <a
          href="https://github.com/christopherldo"
          className="font-bold hover:underline"
        >
          Christopher de Oliveira
        </a>
      </div>
    </div>
  );
}
