// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
    >
      <div className="relative inline-block mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-32 h-32 rounded-full border-4 border-yellow-500/20 flex items-center justify-center mx-auto mb-6"
        >
          <ShoppingCart className="w-16 h-16 text-gray-600" />
        </motion.div>
      </div>
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">THE BATCAVE IS EMPTY</h2>
      <p className="text-xl text-gray-400">Even Batman needs to eat. Add some items to your cart!</p>
    </motion.div>
  );
};

export default EmptyCart;
