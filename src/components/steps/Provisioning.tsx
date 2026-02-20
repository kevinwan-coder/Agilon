import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSetupStore } from '../../store/useSetupStore';

const PROV_STEPS = [
  { label: 'Creating your Agilon Bot on Aedify...', icon: '\uD83E\uDD16' },
  { label: 'Provisioning cloud storage...', icon: '\u2601\uFE0F' },
  { label: 'Applying your branding...', icon: '\uD83C\uDFA8' },
  { label: 'Finalizing workspace...', icon: '\u26A1' },
];

const CODE_LINES = [
  { text: 'ssh aedify-cluster-03.cloud.internal', type: 'cmd' },
  { text: 'Authenticating with Aedify API...', type: 'info' },
  { text: 'POST /v1/bots/create { "type": "nanobot", "model": "openclaw-7b" }', type: 'cmd' },
  { text: '201 Created — bot_id: agl_bot_8f3k2', type: 'success' },
  { text: 'Allocating GPU slice: NVIDIA A100 (40GB) — region: us-central', type: 'cmd' },
  { text: 'Loading model weights: openclaw-7b-instruct-v2.safetensors', type: 'info' },
  { text: 'Model loaded — 7.2B params, quantized INT8', type: 'success' },
  { text: 'Initializing LightSQL instance — schema: agl_8f3k2_state', type: 'cmd' },
  { text: 'CREATE TABLE conversations (id UUID PRIMARY KEY, ts TIMESTAMP)', type: 'sql' },
  { text: 'CREATE TABLE memory (key TEXT, value JSONB, ttl INT)', type: 'sql' },
  { text: 'POST /v1/storage/provision { "tier": "standard", "gb": 50 }', type: 'cmd' },
  { text: '200 OK — bucket: agl-store-8f3k2-us', type: 'success' },
  { text: 'Mounting encrypted volume /mnt/client/8f3k2...', type: 'info' },
  { text: 'AES-256-GCM encryption enabled', type: 'success' },
  { text: 'Running database migrations: 12 tables created', type: 'success' },
  { text: 'Applying branding: template=modern, color=#1a56db', type: 'cmd' },
  { text: 'Generating assets: favicon, email templates, PDF headers...', type: 'info' },
  { text: 'POST /v1/dns/register { "subdomain": "client-8f3k2" }', type: 'cmd' },
  { text: 'SSL certificate issued — auto-renew enabled', type: 'success' },
  { text: 'Health: bot [PASS]  storage [PASS]  dns [PASS]', type: 'health' },
  { text: 'Workspace ready. All systems operational.', type: 'final' },
];

const LINE_COLORS: Record<string, string> = {
  cmd: 'text-cyan-400',
  info: 'text-slate-400',
  success: 'text-emerald-400',
  sql: 'text-violet-400',
  dep: 'text-blue-300',
  health: 'text-green-400',
  final: 'text-amber-300 font-semibold',
};

const LINE_PREFIX: Record<string, { text: string; color: string }> = {
  cmd: { text: '\u25B6', color: 'text-cyan-600' },
  info: { text: '\u2022', color: 'text-slate-600' },
  success: { text: '\u2713', color: 'text-emerald-500' },
  sql: { text: '\u25CB', color: 'text-violet-500' },
  dep: { text: '  \u2514', color: 'text-blue-500' },
  health: { text: '\u2605', color: 'text-green-500' },
  final: { text: '\u2605', color: 'text-amber-400' },
};

function CodeTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<typeof CODE_LINES>([]);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < CODE_LINES.length) {
        const line = CODE_LINES[idx];
        idx++;
        setLines((prev) => [...prev, line]);
      } else {
        idx = 0;
        setLines([]);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="relative mx-auto mt-6 max-w-[378px] rounded-xl overflow-hidden"
      style={{ boxShadow: '0 0 40px rgba(26, 86, 219, 0.15), 0 0 80px rgba(26, 86, 219, 0.05)' }}
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1117] border-b border-[#1a2332]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] text-slate-500 ml-2 font-mono">agilon-provisioner@aedify-cloud ~ </span>
      </div>

      {/* Terminal content */}
      <div
        ref={containerRef}
        className="h-[144px] overflow-hidden bg-[#0d1117] p-3 font-mono text-[11px] leading-[1.7]"
      >
        <AnimatePresence>
          {lines.filter(Boolean).map((line, i) => {
            const prefix = LINE_PREFIX[line.type] || LINE_PREFIX.info;
            return (
              <motion.div
                key={`${i}-${line.type}`}
                initial={{ opacity: 0, y: 6, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`${LINE_COLORS[line.type] || 'text-slate-400'}`}
              >
                <span className={`${prefix.color} mr-2`}>{prefix.text}</span>
                {line.text}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
          className="inline-block w-2 h-[14px] bg-cyan-400 ml-0.5 align-middle rounded-[1px]"
        />
      </div>
    </div>
  );
}

function ProgressRing({ progress }: { progress: number }) {
  const radius = 44;
  const stroke = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-[100px] h-[100px] mx-auto mb-6">
      <svg width="100" height="100" className="rotate-[-90deg]">
        <circle cx="50" cy="50" r={radius} stroke="#333333" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx="50" cy="50" r={radius}
          stroke="url(#grad)" strokeWidth={stroke} fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a56db" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          key={progress}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-lg font-bold text-dark"
        >
          {progress}%
        </motion.span>
      </div>
    </div>
  );
}

// Pre-generated particle data (module-level to avoid impure calls during render)
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
  size: 2 + Math.random() * 3,
}));

// Floating particles background
function Particles() {
  const particles = PARTICLE_DATA;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{ left: p.left, width: p.size, height: p.size }}
          initial={{ bottom: -10, opacity: 0 }}
          animate={{ bottom: '110%', opacity: [0, 0.3, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
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
        setTimeout(advance, 1400);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          useSetupStore.getState().setProvisioning(false);
          useSetupStore.getState().setComplete(true);
          useSetupStore.getState().setStep(4);
        }, 800);
      }
    }

    const firstTimer = setTimeout(advance, 1400);
    return () => { cancelled = true; clearTimeout(firstTimer); };
  }, []);

  return (
    <div className="max-w-[476px] mx-auto mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#1a1a1a] rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.3)] border border-border overflow-hidden"
      >
        <Particles />

        <div className="relative text-center pt-8 pb-3 px-6">
          <ProgressRing progress={progress} />

          <motion.h2
            className="text-2xl font-bold text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Setting up your workspace...
          </motion.h2>
          <p className="text-gray mt-2 mb-8">Hang tight while we configure everything for you.</p>

          {/* Steps with icons */}
          <div className="max-w-[266px] mx-auto text-left">
            {PROV_STEPS.map((step, i) => {
              const isDone = i < activeStep;
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: isDone || isActive ? 1 : 0.35, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className={`flex items-center gap-3 py-2.5 text-[0.93rem] ${
                    isDone ? 'text-green' : isActive ? 'text-dark font-semibold' : 'text-gray-light'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                    isDone
                      ? 'bg-green-light'
                      : isActive
                        ? 'bg-primary-light'
                        : 'bg-light'
                  }`}>
                    {isDone ? '\u2713' : step.icon}
                  </div>
                  {step.label}
                  {isActive && (
                    <motion.div
                      className="w-1 h-1 rounded-full bg-primary ml-1"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Code terminal */}
          <CodeTerminal />

          <div className="h-8" />
        </div>
      </motion.div>
    </div>
  );
}
