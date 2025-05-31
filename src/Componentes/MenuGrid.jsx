// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import FoodCard from './FoodCard';

const MenuGrid = ({ activeCategory, menuData, containerVariants, itemVariants }) => {
  return (
    <AnimatePresence mode="wait">
      {activeCategory && menuData.categories[activeCategory] && (
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative z-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6 bg-black/30 rounded-3xl backdrop-blur-sm border border-gray-800/50 shadow-xl"
        >
          {menuData.categories[activeCategory].items.map((item) => (
            <FoodCard
              key={item.name}
              variants={itemVariants}
              title={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
              chef={item.chef}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuGrid;
