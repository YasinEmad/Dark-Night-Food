import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const BatAlert = ({ showAlert }) => (
  <AnimatePresence>
    {showAlert && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          rotate: [0, 5, -5, 0],
        }}
        exit={{ opacity: 0, scale: 0.5, y: -100 }}
        transition={{ 
          duration: 0.5,
          rotate: { duration: 0.5, repeat: 1 }
        }}
        className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-4 rounded-xl shadow-2xl border-2 border-yellow-600">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black text-2xl font-bold tracking-wider flex items-center gap-3"
          >
            Done, hero! ⚡
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default BatAlert;
