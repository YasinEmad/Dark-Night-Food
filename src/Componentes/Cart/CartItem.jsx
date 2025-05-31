// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, Zap } from 'lucide-react';

const CartItem = ({ item, index, updateQuantity, removeItem }) => {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -100, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ 
        opacity: 0, 
        x: 100, 
        rotateY: 15,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
        {/* Lightning Effect on Hover */}
        <motion.div
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Zap className="w-6 h-6 text-yellow-500" />
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl border-2 border-yellow-500/30"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
            <div>
              <motion.h3 
                className="text-2xl font-bold text-yellow-500 mb-2 tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-gray-300">$</span>
                <span className="text-2xl font-bold text-white">{item.price}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Quantity Controls */}
            <div className="flex items-center space-x-3 bg-black/50 rounded-full p-2 border border-yellow-500/30">
              <motion.button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-yellow-500/20 rounded-full transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Minus className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" />
              </motion.button>
              
              <motion.span 
                key={item.quantity}
                initial={{ scale: 1.3, color: '#fbbf24' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="w-12 text-center text-xl font-bold"
              >
                {item.quantity}
              </motion.span>
              
              <motion.button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-yellow-500/20 rounded-full transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" />
              </motion.button>
            </div>

            {/* Remove Button */}
            <motion.button
              onClick={() => removeItem(item.id)}
              className="p-3 hover:bg-red-500/20 rounded-full text-red-500 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Trash2 className="w-6 h-6 group-hover:animate-pulse" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
