import { motion } from 'framer-motion';
import React from 'react';

const ViewAnimation: React.FC = ({ children }) => (
  <motion.div exit={{ x: -600, opacity: 0 }} animate={{ opacity: 1, x: 0 }}>
    {children}
  </motion.div>
);

export default ViewAnimation;
