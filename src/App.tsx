import { useSetupStore } from './store/useSetupStore';
import { TopBar } from './components/layout/TopBar';
import { Step1BusinessInfo } from './components/steps/Step1BusinessInfo';
import { Step2Branding } from './components/steps/Step2Branding';
import { Step4Review } from './components/steps/Step4Review';
import { Provisioning } from './components/steps/Provisioning';
import { Success } from './components/steps/Success';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const currentStep = useSetupStore((s) => s.currentStep);

  // Dashboard mode — full screen, no setup chrome
  if (currentStep === 6) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-light">
      <TopBar />

      {currentStep === 1 && <Step1BusinessInfo />}
      {currentStep === 2 && <Step2Branding />}
      {currentStep === 3 && <Step4Review />}
      {currentStep === 4 && <Provisioning />}
      {currentStep === 5 && <Success />}
    </div>
  );
}

export default App;
