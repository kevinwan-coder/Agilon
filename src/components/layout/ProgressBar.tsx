import { useSetupStore } from '../../store/useSetupStore';

const STEPS = [
  { num: 1, label: 'Business Info' },
  { num: 2, label: 'Branding' },
];

export function ProgressBar() {
  const currentStep = useSetupStore((s) => s.currentStep);
  const fillPercent = { 1: '0%', 2: '100%' }[currentStep] || '0%';

  return (
    <div className="max-w-[720px] mx-auto mt-8 px-5">
      <div className="flex justify-between relative">
        {/* Track */}
        <div className="absolute top-[18px] left-[40px] right-[40px] h-[3px] bg-border z-0" />
        {/* Fill */}
        <div
          className="absolute top-[18px] left-[40px] h-[3px] bg-primary z-[1] transition-all duration-400"
          style={{ width: fillPercent }}
        />

        {STEPS.map(({ num, label }) => {
          const isActive = num === currentStep;
          const isCompleted = num < currentStep;

          return (
            <div key={num} className="flex flex-col items-center z-[2]">
              <div
                className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-sm transition-all border-3 ${
                  isCompleted
                    ? 'border-green bg-green text-white'
                    : isActive
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-[#252525] text-white/30'
                }`}
              >
                {isCompleted ? '\u2713' : num}
              </div>
              <div
                className={`mt-2 text-xs font-medium transition-colors ${
                  isCompleted
                    ? 'text-green'
                    : isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-light'
                }`}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
