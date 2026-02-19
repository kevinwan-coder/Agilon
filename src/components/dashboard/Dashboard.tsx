import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { WorkflowsPage } from './pages/WorkflowsPage';
import { StoragePage } from './pages/StoragePage';
import { SettingsPage } from './pages/SettingsPage';
import { SkillDetailPage } from './pages/SkillDetailPage';
import { CalendarPage } from './pages/CalendarPage';

export function Dashboard() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page.startsWith('skill-')) {
      return <SkillDetailPage skillId={page.replace('skill-', '')} />;
    }
    switch (page) {
      case 'home': return <HomePage />;
      case 'skills': return <SkillsPage />;
      case 'workflows': return <WorkflowsPage />;
      case 'calendar': return <CalendarPage />;
      case 'storage': return <StoragePage />;
      case 'settings': return <SettingsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <DashboardLayout activePage={page} onNavigate={setPage}>
      {renderPage()}
    </DashboardLayout>
  );
}
