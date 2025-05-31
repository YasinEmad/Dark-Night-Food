// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MenuHeader = ({ title, subtitle, headerImages, glowVariants }) => {
  return (
    <motion.div 
      className="text-center mb-12 relative py-16 overflow-hidden min-h-[400px]"
      variants={glowVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background images with enhanced visibility */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40 before:z-10">
        <motion.div 
          className="absolute inset-0 w-1/2 overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/download (8).jfif" 
            alt="Batman"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-60 object-contain transform -scale-x-100 hover:opacity-75 transition-opacity duration-300 filter contrast-125 brightness-125"
          />
        </motion.div>
        
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/Joker_-_Sam_Mayle__1_-removebg-preview.png" 
            alt="Joker"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-60 object-contain hover:opacity-75 transition-opacity duration-300 filter contrast-125 brightness-125"
          />
        </motion.div>

        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-20"></div>
      </div>

      {/* Content with enhanced glow effect */}
      <motion.div
        className="relative z-30 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative inline-block">
              {title}
              <span className="absolute inset-0 blur-md bg-yellow-500/20"></span>
            </span>
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 italic relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative inline-block">
                {subtitle}
                <span className="absolute inset-0 blur-sm bg-white/5"></span>
              </span>
            </motion.p>
          )}
        </div>
        
        {headerImages && headerImages.length > 0 && (
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {headerImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={image}
                  alt={`Header image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-full border-2 border-yellow-500 shadow-lg shadow-yellow-500/50 transition-all duration-300 group-hover:border-4 relative z-10"
                />
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-md group-hover:bg-yellow-500/30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MenuHeader;
