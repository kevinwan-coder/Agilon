import { useCallback, useState } from 'react';
import { useSetupStore } from '../../store/useSetupStore';
import { SKILLS } from '../../constants/skills';
import { SkillCard } from '../ui/SkillCard';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { StepCard } from '../layout/StepCard';

export function Step3Skills() {
  const { skills, toggleSkill, setStep, setProvisioning } = useSetupStore();
  const [toast, setToast] = useState('');

  const handleNext = useCallback(() => {
    if (skills.length === 0) {
      setToast('Please select at least one skill to continue');
      return;
    }
    setProvisioning(true);
    setStep(5);
  }, [skills, setStep, setProvisioning]);

  return (
    <StepCard>
      <Toast message={toast} visible={!!toast} onClose={() => setToast('')} />

      <h2 className="text-2xl font-bold text-dark mb-1.5">Choose your skills</h2>
      <p className="text-gray text-[0.95rem] mb-7">Select the back-office modules you need. You can always add more later.</p>

      <div className="grid grid-cols-2 gap-3">
        {SKILLS.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={skill.icon}
            name={skill.name}
            description={skill.description}
            selected={skills.includes(skill.id)}
            onClick={() => toggleSkill(skill.id)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Button variant="secondary" onClick={() => setStep(2)}>&larr; Back</Button>
        <Button onClick={handleNext}>Continue &rarr;</Button>
      </div>
    </StepCard>
  );
}
