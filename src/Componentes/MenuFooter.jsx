// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MenuFooter = ({ footer }) => {
  return (
    <motion.div
      className="relative z-10 mt-12 sm:mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="inline-block p-3 sm:p-4 bg-black/70 rounded-full border-2 border-yellow-500/40 shadow-md shadow-yellow-500/10">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-inner shadow-black/30">
          <span className="text-black font-bold text-xs">{footer?.iconLetter || 'B'}</span>
        </div>
      </div>
      <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
        {footer?.quote}
      </p>
    </motion.div>
  );
};

export default MenuFooter;
