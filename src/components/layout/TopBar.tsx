export function TopBar() {
  return (
    <div className="bg-[#1a1a1a] border-b border-border px-8 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-primary">Agilon</div>
      <button className="text-sm text-gray hover:text-primary transition-colors cursor-pointer bg-transparent border-none">
        Need help?
      </button>
    </div>
  );
}
