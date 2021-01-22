import { motion } from 'framer-motion';
import React from 'react';

const ViewAnimation: React.FC = ({ children }) => (
  <motion.div exit={{ x: -600, opacity: 0 }} initial={{ x: 0, opacity: 1 }}>
    {children}
  </motion.div>
);

export default ViewAnimation;
