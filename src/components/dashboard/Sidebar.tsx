import { useSetupStore } from '../../store/useSetupStore';
import { SKILLS } from '../../constants/skills';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '\uD83C\uDFE0' },
  { id: 'skills', label: 'Skills', icon: '\u2699\uFE0F' },
  { id: 'workflows', label: 'Workflows', icon: '\uD83D\uDD04' },
  { id: 'calendar', label: 'Calendar', icon: '\uD83D\uDCC5' },
  { id: 'storage', label: 'Storage', icon: '\uD83D\uDCC1' },
  { id: 'settings', label: 'Settings', icon: '\u2699\uFE0F' },
];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const skills = useSetupStore((s) => s.skills);
  const branding = useSetupStore((s) => s.branding);

  const activeSkills = SKILLS.filter((s) => skills.includes(s.id));

  return (
    <div className="w-[260px] bg-[#1a1a1a] border-r border-border flex flex-col h-full flex-shrink-0">
      {/* Logo + Business */}
      <div className="p-5 border-b border-border">
        <div className="text-xl font-bold" style={{ color: branding.color || '#1a56db' }}>
          Agilon
        </div>
        <div className="text-sm text-gray mt-1 truncate">{businessInfo.name || 'My Business'}</div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2">
          <span className="text-xs font-semibold text-gray-light uppercase tracking-wider">Main</span>
        </div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-5 py-2.5 text-left text-sm transition-colors border-none cursor-pointer ${
              activePage === item.id
                ? 'bg-primary-light text-primary font-semibold'
                : 'bg-transparent text-gray hover:bg-light hover:text-dark'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}

        {/* Active Skills Section */}
        {activeSkills.length > 0 && (
          <>
            <div className="px-4 mt-6 mb-2">
              <span className="text-xs font-semibold text-gray-light uppercase tracking-wider">Your Skills</span>
            </div>
            {activeSkills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => onNavigate(`skill-${skill.id}`)}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-left text-sm transition-colors border-none cursor-pointer ${
                  activePage === `skill-${skill.id}`
                    ? 'bg-primary-light text-primary font-semibold'
                    : 'bg-transparent text-gray hover:bg-light hover:text-dark'
                }`}
              >
                <span className="text-base">{skill.icon}</span>
                {skill.name}
              </button>
            ))}
          </>
        )}
      </nav>

      {/* Bot Status */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2.5 px-1">
          <div className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
          <span className="text-xs text-gray">Agilon Bot — Online</span>
        </div>
      </div>
    </div>
  );
}
