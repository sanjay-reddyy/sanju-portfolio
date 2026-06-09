import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Props {
  show: boolean;
}

const IntroScreen = ({ show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="
            fixed
            inset-0
            z-[10000]
            bg-[#050816]
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
          "
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-cyan-400
              tracking-[0.4em]
              text-sm
              md:text-lg
              mb-6
            "
          >
            SANJAY'S
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <span className="text-5xl md:text-8xl font-black text-white">
              P
            </span>

            <GraduationCap
              size={70}
              className="mx-2 text-cyan-400"
            />

            <span className="text-5xl md:text-8xl font-black text-white">
              RTFOLIO
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;