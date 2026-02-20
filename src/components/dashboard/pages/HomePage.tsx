import { useSetupStore } from '../../../store/useSetupStore';
import { HomeLanding } from './HomeLanding';
import { HomeEnterprise } from './HomeEnterprise';

export function HomePage() {
  const size = useSetupStore((s) => s.businessInfo.size);

  switch (size) {
    case 'just-me':
    case '2-10':
      return <HomeLanding />;
    case '11-50':
    case '50-plus':
      return <HomeEnterprise />;
    default:
      return <HomeLanding />;
  }
}
