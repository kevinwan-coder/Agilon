import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSetupStore } from '../../store/useSetupStore';

const CODE_LINES = [
  'import { createModule } from "@agilon/core";',
  'const dashboard = await buildDashboard(config);',
  'export default defineWorkspace({ modules, plugins });',
  'await db.migrate({ schema: "workspace_v2" });',
  'const api = new AgilonAPI({ key: process.env.KEY });',
  'function initializeModules(workspace: Workspace) {',
  '  return modules.map(m => m.initialize());',
  'const router = createRouter({ routes, middleware });',
  'await storage.provision({ region: "us-east-1" });',
  'export const config = { theme, branding, modules };',
  'class WorkspaceBuilder extends BaseBuilder {',
  '  async compile() { return this.bundle(); }',
  'const plugins = await loadPlugins(manifest);',
  'await setupAuthentication({ provider: "oauth2" });',
  'const metrics = new MetricsCollector(workspace);',
  'function registerHandlers(app: Application) {',
  '  app.use(cors()); app.use(logger());',
  'await cache.warm({ keys: preloadKeys });',
  'const scheduler = new TaskScheduler(config);',
  'export { Dashboard, Sidebar, TopBar } from "./ui";',
];

function CodeFlash() {
  const [lines, setLines] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  const shuffled = useMemo(() => [...CODE_LINES].sort(() => Math.random() - 0.5), []);

  useEffect(() => {
    let id = 0;
    let cancelled = false;

    function addLine() {
      if (cancelled) return;
      const text = shuffled[id % shuffled.length];
      const x = Math.random() * 60 + 5;  // 5-65% from left
      const y = Math.random() * 80 + 5;  // 5-85% from top
      setLines(prev => [...prev.slice(-6), { id: id++, text, x, y }]);
      setTimeout(addLine, 400 + Math.random() * 300);
    }

    const timer = setTimeout(addLine, 300);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [shuffled]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.4 }}
            className="absolute font-mono text-[11px] text-[#2dca72] whitespace-nowrap"
            style={{ left: `${line.x}%`, top: `${line.y}%` }}
          >
            {line.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

const PROV_STEPS = [
  { label: 'Building Up Modules', icon: 'modules' },
  { label: 'Building Dashboard', icon: 'dashboard' },
  { label: 'Finalizing Setup', icon: 'finalize' },
];

function StepIcon({ type, isActive, isDone }: { type: string; isActive: boolean; isDone: boolean }) {
  const color = isDone ? '#2dca72' : isActive ? '#e8e8e8' : '#555555';

  if (type === 'modules') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (type === 'dashboard') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }
  // finalize - checkmark circle
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function OrbitingIcon() {
  return (
    <div className="relative w-[120px] h-[120px] mx-auto mb-8">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-[#2a2a2a]" />

      {/* Inner green circle with sparkle icon */}
      <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-[#2dca72] to-[#1a8a4a] flex items-center justify-center shadow-[0_0_30px_rgba(45,202,114,0.3)]">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" fill="white" />
          {/* Small plus */}
          <path d="M18 3v4M16 5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Orbiting dot 1 */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-[#2dca72]"
        style={{ top: '50%', left: '50%' }}
        animate={{
          x: [60, 42, 0, -42, -60, -42, 0, 42, 60],
          y: [0, -42, -60, -42, 0, 42, 60, 42, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting dot 2 */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-[#2dca72] opacity-60"
        style={{ top: '50%', left: '50%' }}
        animate={{
          x: [-60, -42, 0, 42, 60, 42, 0, -42, -60],
          y: [0, 42, 60, 42, 0, -42, -60, -42, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export function Provisioning() {
  const [activeStep, setActiveStep] = useState(0);

  const progress = Math.min(Math.round(((activeStep) / PROV_STEPS.length) * 100), 100);

  useEffect(() => {
    let step = 0;
    let cancelled = false;

    function advance() {
      if (cancelled) return;
      step++;
      if (step <= PROV_STEPS.length) {
        setActiveStep(step);
        setTimeout(advance, 2000);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          useSetupStore.getState().setProvisioning(false);
          useSetupStore.getState().setComplete(true);
          useSetupStore.getState().setStep(5);
        }, 800);
      }
    }

    const firstTimer = setTimeout(advance, 2000);
    return () => { cancelled = true; clearTimeout(firstTimer); };
  }, []);

  return (
    <div className="max-w-[1190px] mx-auto mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#1a1a1a] rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.3)] border border-border overflow-hidden"
      >
        {/* Flashing code lines background */}
        <CodeFlash />

        <div className="relative text-center pt-12 pb-10 px-6">
          {/* Orbiting icon */}
          <OrbitingIcon />

          {/* Title */}
          <motion.h2
            className="text-3xl font-bold text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Building Your System
          </motion.h2>
          <p className="text-gray mt-3 mb-8 text-base">Setting up your backoffice system for you...</p>

          {/* Horizontal progress bar */}
          <div className="max-w-[360px] mx-auto mb-10">
            <div className="h-1.5 bg-[#252525] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#2dca72] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Three step icons */}
          <div className="flex items-start justify-center gap-16 mb-10">
            {PROV_STEPS.map((step, i) => {
              const isDone = i < activeStep;
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isDone || isActive ? 1 : 0.4, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isDone ? 'bg-[#0a2a15]' : isActive ? 'bg-[#252525]' : 'bg-[#1e1e1e]'
                  }`}>
                    <StepIcon type={step.icon} isActive={isActive} isDone={isDone} />
                  </div>
                  <span className={`text-sm ${
                    isDone ? 'text-[#2dca72]' : isActive ? 'text-dark' : 'text-[#555555]'
                  }`}>
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Tip card */}
          <div className="max-w-[460px] mx-auto bg-[#252525] rounded-xl px-6 py-4 flex items-center gap-3 border border-[#333333]">
            <span className="text-xl flex-shrink-0">💡</span>
            <span className="text-sm text-gray">Your system will be ready in just a moment...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
