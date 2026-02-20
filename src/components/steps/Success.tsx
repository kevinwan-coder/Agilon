import { motion } from 'framer-motion';
import { useSetupStore } from '../../store/useSetupStore';
import { Button } from '../ui/Button';
import { StepCard } from '../layout/StepCard';

export function Success() {
  const setStep = useSetupStore((s) => s.setStep);

  return (
    <StepCard>
      <div className="text-center py-8 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-green-light flex items-center justify-center mx-auto mb-5 text-4xl"
        >
          {'\u2713'}
        </motion.div>

        <h2 className="text-2xl font-bold text-dark mb-2">Your Agilon is ready!</h2>
        <p className="text-gray max-w-[400px] mx-auto">
          Your workspace has been set up and ready to go.
        </p>

        <div className="flex gap-3 justify-center mt-7">
          <Button onClick={() => setStep(5)}>Open Web App</Button>
          <Button variant="secondary" onClick={() => alert('Showing QR Code...')}>
            Get Mobile QR Code
          </Button>
        </div>
      </div>
    </StepCard>
  );
}
