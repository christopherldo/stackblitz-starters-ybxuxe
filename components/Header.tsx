export default function Header() {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <img
            alt="Logo"
            height="40"
            src="/logo.png"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
            width="40"
          />
        </span>
        <h1 className="text-xl font-bold">Mateus Mendes</h1>
      </div>
    </header>
  );
}
