import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { Plus, Check } from 'lucide-react';
import { db } from '../Firebase/firebase';

const FoodCard = ({ title, description, price, image, rating, chef, variants }) => {
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = async () => {
    try {
      setIsAdding(true);
      await addDoc(collection(db, 'cart'), {
        name: title,
        price: typeof price === 'string' ? parseFloat(price.replace('$', '')) : price,
        image,
        quantity: 1,
        addedAt: new Date()
      });
      setTimeout(() => setIsAdding(false), 1500); // Reset after 1.5s
    } catch (error) {
      console.error("Error adding to cart:", error);
      setIsAdding(false);
    }
  };

  return (
    <motion.div
      variants={variants}
      className="bg-black/40 rounded-xl overflow-hidden border border-gray-800/50 hover:border-yellow-500/50 transition-colors group"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <motion.button
          onClick={addToCart}
          className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors ${
            isAdding ? 'bg-green-500' : 'bg-yellow-500 hover:bg-yellow-400'
          }`}
          whileTap={{ scale: 0.9 }}
          disabled={isAdding}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Plus className="w-5 h-5 text-black hover:text-green-600 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-yellow-500 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          )}
        </div>
        {chef && (
          <p className="text-sm text-gray-500 mt-2 italic">Chef's Special</p>
        )}
      </div>
    </motion.div>
  );
};

export default FoodCard;
