import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, ChevronUp, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const menuVariants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      scale: 0.8,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      y: 20,
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const actions = [
    {
      icon: MessageCircle,
      label: "Chat with us",
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => console.log("Chat clicked"),
    },
    {
      icon: Phone,
      label: "Call us",
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => console.log("Phone clicked"),
    },
    {
      icon: Mail,
      label: "Email us",
      color: "bg-purple-500 hover:bg-purple-600",
      onClick: () => console.log("Email clicked"),
    },
    {
      icon: Volume2,
      label: "Audio Demo",
      color: "bg-orange-500 hover:bg-orange-600",
      onClick: () => console.log("Demo clicked"),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <motion.span
                  className="bg-background text-foreground px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  {action.label}
                </motion.span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    size="icon"
                    className={`${action.color} text-white shadow-lg rounded-full w-12 h-12`}
                    onClick={action.onClick}
                  >
                    <action.icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={mainButtonVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="icon"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full w-14 h-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <ChevronUp className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default FloatingActionButton;