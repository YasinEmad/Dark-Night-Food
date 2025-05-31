import React from 'react';
import { motion } from 'framer-motion';

const BatmanWaiter = () => {
  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center gap-6 mb-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.div
          className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <img
          src="/images/batman servise.jpg"
          alt="Batman Waiter"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-full border-4 border-yellow-500/30 shadow-lg shadow-yellow-500/20 relative z-10"
        />
      </motion.div>

      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.p 
          className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Your friendly neighborhood waiter is here to serve you!
        </motion.p>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          Experience fine dining with a touch of justice
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BatmanWaiter;
