import { useSetupStore } from '../../../store/useSetupStore';
import { SKILLS } from '../../../constants/skills';

export function SkillsPage() {
  const skills = useSetupStore((s) => s.skills);
  const toggleSkill = useSetupStore((s) => s.toggleSkill);

  const activeSkills = SKILLS.filter((s) => skills.includes(s.id));
  const availableSkills = SKILLS.filter((s) => !skills.includes(s.id));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Skills</h1>
        <p className="text-gray mt-1">Manage your back-office modules. Add or remove skills anytime.</p>
      </div>

      {/* Active Skills */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-dark mb-4">
          Active Skills <span className="text-sm font-normal text-gray">({activeSkills.length})</span>
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {activeSkills.map((skill) => (
            <div key={skill.id} className="bg-white rounded-xl border border-border p-5 relative">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green" />
                  <span className="text-xs text-green font-medium">Active</span>
                </div>
              </div>
              <h3 className="font-semibold text-dark mb-1">{skill.name}</h3>
              <p className="text-sm text-gray mb-4">{skill.description}</p>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-primary-light text-primary rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary hover:text-white transition-colors">
                  Open
                </button>
                <button
                  onClick={() => toggleSkill(skill.id)}
                  className="px-3 py-2 bg-light text-gray rounded-lg text-sm cursor-pointer border border-border hover:bg-red-light hover:text-red hover:border-red transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Skills */}
      {availableSkills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-dark mb-4">
            Available Skills <span className="text-sm font-normal text-gray">({availableSkills.length})</span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {availableSkills.map((skill) => (
              <div key={skill.id} className="bg-white rounded-xl border border-border border-dashed p-5 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="font-semibold text-dark mb-1">{skill.name}</h3>
                <p className="text-sm text-gray mb-4">{skill.description}</p>
                <button
                  onClick={() => toggleSkill(skill.id)}
                  className="w-full px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary-hover transition-colors"
                >
                  + Add Skill
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
