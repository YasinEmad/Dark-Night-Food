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
  useEffect(() => {
    const interval = setInterval(() => {
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
        <h1 className="text-6xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Feast your eyes
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mb-12 rounded-full"></div>

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
                  className="w-full md:w-1/2 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={foods[currentIndex].image} 
                      alt={foods[currentIndex].name} 
                      className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10"
                  >
                    <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">{foods[currentIndex].category}</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{foods[currentIndex].name}</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{foods[currentIndex].description}</p>
                    <p className="text-3xl font-bold text-yellow-400 mb-8 relative inline-block">
                      {foods[currentIndex].price}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevFood}
            className="absolute left-4 bg-black/30 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-white/10 transform hover:scale-110"
            aria-label="Previous item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextFood}
            className="absolute right-4 bg-black/30 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-white/10 transform hover:scale-110"
            aria-label="Next item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-3">
          {foods.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 w-12 rounded-full transition-all duration-500 transform hover:scale-110 ${
                index === currentIndex 
                  ? "bg-gradient-to-r from-blue-400 to-blue-600" 
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