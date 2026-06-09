import { motion, AnimatePresence } from "framer-motion";

interface Props {
  show: boolean;
}

const SplashScreen = ({ show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
       <motion.div
  className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col items-center justify-center text-center px-6"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      text-4xl
      md:text-7xl
      font-black
      tracking-[0.25em]
      text-cyan-400
      drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]
    "
  >
    SANJAY
  </motion.h1>

  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="
      mt-4
      text-lg
      md:text-2xl
      text-gray-300
      tracking-widest
    "
  >
    DEVOPS • CLOUD • FULL STACK
  </motion.h2>

  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "180px" }}
    transition={{ delay: 1, duration: 1 }}
    className="h-[3px] bg-cyan-400 rounded-full mt-8"
  />

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="mt-6 text-sm md:text-base text-gray-500"
  >
    Initializing Portfolio...
  </motion.p>
</motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;