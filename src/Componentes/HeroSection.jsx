import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const BatmanHeroSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent z-10"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400 rotate-45"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border border-yellow-400 rotate-12"></div>
        <div className="absolute top-60 right-60 w-20 h-20 border border-yellow-400 -rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Main heading with staggered animation */}
            <div className="overflow-hidden">
              <motion.h1 
                className="text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-none"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                BAT
                <motion.span 
                  className="block text-yellow-400"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                  MAN
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold lg:text-3xl text-gray-300">
               Chef
              </h2>
              <div className="w-24 h-1 bg-blue-400"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              In the shadows of Gotham City, a vigilante rises to protect the innocent And give them food 
            </motion.p>


          </div>

          {/* Right side - Batman image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="relative"
            >
              {/* Glowing effect behind Batman */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent blur-3xl scale-110"></div>
              
              {/* Batman image */}
              <div className="relative">
                <motion.img
                  src="/images/light batman.png"
                  alt="Batman"
                  className="w-full h-96 object-cover object-center rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-20"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default BatmanHeroSection;