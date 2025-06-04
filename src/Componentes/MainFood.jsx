import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

// Sample food data
const foods = [
  {
    id: 1,
    name: "The Dark Knight Steak",
    description: "Juicy steak with a side of roasted vegetables",
    price: "$25",
    category: "Main dishes",
    image: "/images/steak.png"
  },
  {
    id: 2,
    name: "Sushi bros wain",
    description: "Fresh sushi rolls with a variety of fillings",
    price: "$30",
    category: "Main dishes",
    image: "/images/soshy.jpg"
  },
  {
    id: 3,
    name: "Mexican dish",
    description: "Spicy tacos with grilled chicken, avocado, and salsa",
    price: "$35",
    category: "Main dishes",
    image: "/images/hero food.jpg"
  },
  {
    id: 4,
    name: "Batcave Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: "$10",
    category: "Main dishes",
    image: "/images/burger.jfif"
  },
  {
    id: 5,
    name: "Shrimp Knight",
    description: "Pan-seared shrimp with garlic, herbs, and lemon",
    price: "$23",
    category: "Main dishes",
    image: "/images/fish1.jpg"
  }
];


export default function FoodShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-rotate foods every 4 seconds
  useEffect(() => {    const interval = setInterval(() => {
      nextFood();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
    const nextFood = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
  };
  
  const prevFood = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foods.length) % foods.length);
  };

  // Variants for animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="md:w-1/2">
            <h1 className="text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-text">
              Feast your eyes
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full transform transition-all duration-500 hover:scale-x-110 hover:w-48"></div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 relative group perspective">
            <div className="relative w-full h-full transform transition-transform duration-700 preserve-3d group-hover:rotate-y-12">
              <img 
                src="/images/batman-eat-mainfood-removebg-preview.png" 
                alt="Batman eating" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl brightness-110 transform transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-blue-600/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl backdrop-blur-sm"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-lg font-semibold text-shadow">The Dark Knight's Dining</p>
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-full flex"
            >
              <div className="flex flex-col md:flex-row w-full gap-8">
                <motion.div 
                  className="w-full md:w-1/2 group perspective"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <img 
                      src={foods[currentIndex].image} 
                      alt={foods[currentIndex].name} 
                      className="w-full h-72 md:h-96 object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-500"
                  >
                    <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm px-3 py-1 bg-yellow-400/10 rounded-full inline-block mb-2">{foods[currentIndex].category}</span>
                    <h2 className="text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">{foods[currentIndex].name}</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{foods[currentIndex].description}</p>
                    <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text mb-8 relative inline-block group">
                      {foods[currentIndex].price}
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevFood}
            className="absolute left-4 bg-black/40 hover:bg-blue-600/80 text-white p-5 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:rotate-12 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            aria-label="Previous item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextFood}
            className="absolute right-4 bg-black/40 hover:bg-blue-600/80 text-white p-5 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:-rotate-12 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            aria-label="Next item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-12 gap-4">
          {foods.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-3 w-16 rounded-full transition-all duration-500 transform hover:scale-110 ${
                index === currentIndex 
                  ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  : "bg-gray-700 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}