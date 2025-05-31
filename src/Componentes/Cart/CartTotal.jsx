// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CartTotal = ({ total, onCheckout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-3xl border-2 border-yellow-500/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #fbbf24 10px, #fbbf24 20px)`
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-bold text-gray-300 tracking-wide">TOTAL DAMAGE:</span>
          <motion.div
            key={total}
            initial={{ scale: 1.2, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            className="text-right"
          >
            <div className="text-sm text-yellow-400 tracking-widest">GOTHAM CURRENCY</div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              ${total.toFixed(2)}
            </div>
          </motion.div>
        </div>
        <motion.button
          className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400 text-white py-4 rounded-2xl font-black text-xl tracking-wider hover:from-blue-500 hover:via-blue-400 hover:to-yellow-300 transition-all duration-300 relative overflow-hidden group"
          onClick={onCheckout}
          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <span>PROCEED TO CHECKOUT</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡
            </motion.div>
          </span>
          
          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartTotal;
