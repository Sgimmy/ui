import { motion } from 'framer-motion';
import React from 'react';

const ViewAnimation: React.FC = ({ children }) => {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  return (
    <motion.div
      variants={variants}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      initial="enter"
      exit="exit"
      animate="center"
    >
      {children}
    </motion.div>
  );
};

export default ViewAnimation;
