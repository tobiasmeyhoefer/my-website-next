import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = () => {
  return (
    <motion.img
      src="/svg/star.svg"
      alt="test"
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default AnimatedImage;