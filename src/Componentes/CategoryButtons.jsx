// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const CategoryButtons = ({ categories, activeCategory, setActiveCategory, IconComponents }) => {
  return (
    <motion.div
      className="relative z-10 flex flex-wrap justify-center gap-2 mb-8 p-3 bg-black/60 rounded-2xl backdrop-blur-md border border-yellow-500/10 shadow-2xl shadow-yellow-500/5 max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      {Object.entries(categories).map(([key, category]) => (
        <motion.button
          key={key}
          onClick={() => setActiveCategory(key)}
          className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
            activeCategory === key
              ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-lg shadow-yellow-500/30 border border-yellow-400/50'
              : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/60 hover:text-yellow-400 border border-gray-700/30 hover:border-yellow-500/30'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          {IconComponents[category.iconName] || <Utensils className="w-5 h-5" />}
          <span className="hidden sm:inline">{category.name}</span>
          <span className="sm:hidden inline">{category.name.split(' ')[0]}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryButtons;
