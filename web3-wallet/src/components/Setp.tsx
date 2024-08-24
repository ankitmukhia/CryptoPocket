import { motion } from "framer-motion";

export function Step({ step, currentStep, children }: { step: number; currentStep: number, children: React.ReactNode }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        initial={false}
      >
        <div>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
