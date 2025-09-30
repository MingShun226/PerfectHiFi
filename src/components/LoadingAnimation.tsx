import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const LoadingAnimation = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Volume2 className="h-16 w-16 text-primary mx-auto" />
        </motion.div>

        <motion.div
          className="flex space-x-2 justify-center mb-4"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-primary rounded-full"
              variants={circleVariants}
              transition={circleTransition}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-lg font-medium text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Perfect Audio Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;