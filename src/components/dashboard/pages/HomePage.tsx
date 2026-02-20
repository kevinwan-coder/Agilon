import { useSetupStore } from '../../../store/useSetupStore';
import { HomeJustMe } from './HomeJustMe';
import { HomeSmallTeam } from './HomeSmallTeam';
import { HomeEnterprise } from './HomeEnterprise';

export function HomePage() {
  const size = useSetupStore((s) => s.businessInfo.size);

  switch (size) {
    case 'just-me':
      return <HomeJustMe />;
    case '2-10':
      return <HomeSmallTeam />;
    case '11-50':
    case '50-plus':
      return <HomeEnterprise />;
    default:
      return <HomeSmallTeam />;
  }
}
