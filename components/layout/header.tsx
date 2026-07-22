export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-lg font-semibold text-slate-700">
        Dashboard
      </h2>

      <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
        Admin
      </div>
    </header>
  );
}
