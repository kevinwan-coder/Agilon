import { useSetupStore } from '../../store/useSetupStore';
import { SKILLS } from '../../constants/skills';
import { Button } from '../ui/Button';
import { StepCard } from '../layout/StepCard';

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-light border border-border rounded-xl p-5 mb-4">
      <h4 className="text-xs uppercase tracking-wider text-gray mb-2.5">{title}</h4>
      {children}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between py-1.5 text-[0.93rem]">
      <span className="text-gray">{label}</span>
      <span className="font-semibold text-dark">{value}</span>
    </div>
  );
}

export function Step4Review() {
  const { businessInfo, branding, skills, setStep, setProvisioning } = useSetupStore();

  const skillNames = skills
    .map((id) => SKILLS.find((s) => s.id === id)?.name)
    .filter(Boolean);

  const handleLaunch = () => {
    setStep(5);
    setProvisioning(true);
  };

  return (
    <StepCard>
      <h2 className="text-2xl font-bold text-dark mb-1.5">Review & Launch</h2>
      <p className="text-gray text-[0.95rem] mb-7">Everything look good? We'll set up your Agilon workspace.</p>

      <ReviewSection title="Business Information">
        <ReviewRow label="Business Name" value={businessInfo.name} />
        <ReviewRow label="Industry" value={businessInfo.industry} />
        <ReviewRow label="State" value={businessInfo.state} />
        <ReviewRow label="Company Size" value={businessInfo.size} />
      </ReviewSection>

      <ReviewSection title="Branding">
        <ReviewRow label="Template" value={branding.template} />
        <ReviewRow label="Logo" value={branding.logoName || 'Not uploaded'} />
        <ReviewRow
          label="Brand Color"
          value={
            branding.color ? (
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: branding.color }}
                />
                {branding.color}
              </span>
            ) : (
              '\u2014'
            )
          }
        />
      </ReviewSection>

      <ReviewSection title="Selected Skills">
        <div className="flex flex-wrap gap-2 mt-1">
          {skillNames.length > 0 ? (
            skillNames.map((name) => (
              <span
                key={name}
                className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-semibold"
              >
                {name}
              </span>
            ))
          ) : (
            <span className="text-gray-light text-sm">No skills selected</span>
          )}
        </div>
      </ReviewSection>

      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Button variant="secondary" onClick={() => setStep(3)}>&larr; Back</Button>
        <Button variant="success" onClick={handleLaunch}>
          {'\u26A1'} Launch My Agilon &rarr;
        </Button>
      </div>
    </StepCard>
  );
}
