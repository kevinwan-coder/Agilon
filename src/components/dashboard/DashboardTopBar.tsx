import { useSetupStore } from '../../store/useSetupStore';

export function DashboardTopBar() {
  const businessInfo = useSetupStore((s) => s.businessInfo);

  return (
    <div className="h-[60px] bg-[#1a1a1a] border-b border-border flex items-center justify-end px-6 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button className="relative p-2 bg-transparent border-none cursor-pointer text-gray hover:text-dark transition-colors text-lg">
          {'\uD83D\uDD14'}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold cursor-pointer">
          {(businessInfo.name?.[0] || 'A').toUpperCase()}
        </div>
      </div>
    </div>
  );
}
