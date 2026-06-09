import { AnimatePresence, motion } from "framer-motion";

interface Props {
  show: boolean;
}

const SplashScreen = ({ show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080a12] px-6 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200"
          >
            DevOps | Cloud | Full Stack
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mt-5 text-5xl font-black tracking-normal text-white md:text-7xl"
          >
            Sanjay Kumar
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "220px" }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="mt-8 h-[3px] rounded-full bg-teal-300"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
            className="mt-6 text-sm text-slate-500"
          >
            Loading production-ready experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
