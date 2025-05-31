import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hello() {
  const navigate = useNavigate();
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");

  const useTypingEffect = (text, setter, speed) => {
    useEffect(() => {
      let index = 0;
      const type = () => {
        if (index <= text.length) {
          setter(text.slice(0, index));
          index++;
          setTimeout(type, speed);
        }
      };
      if (text.length > 0) {
        type();
      }
      return () => {};
    }, [text, setter, speed]); // Add dependencies
  };

  useTypingEffect("I'm not who I used to be. Now, I'm chef.", setTextOne, 80);
  useTypingEffect("What do you want to eat?", setTextTwo, 70);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full h-[80vh] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden border border-gray-800"
      >
        {/* Left Image Container */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="relative h-full w-full overflow-hidden"
        >
          {/* Image for medium screens and up */}
          <img
            src="/images/light.jfif"
            alt="Batman Chef"
            className="hidden md:block h-full w-full object-cover object-center transition-transform hover:scale-105 duration-700"
          />
          {/* Image for small screens */}
          <img
            src="/images/light.jfif" // <<--- NEW IMAGE FOR SMALL SCREENS
            alt="Batman Chef (mobile view)" // Consider a different alt if the image is different contextually
            className="block md:hidden h-72 w-full object-contain object-center transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-transparent md:to-black/90">
            {/* Adjusted gradient to be consistent or different for small screens if needed */}
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="flex items-center justify-center p-6 md:p-10 text-white relative" // Adjusted padding for smaller screens
        >
          <div className="space-y-6 max-w-lg text-center md:text-left">
            {" "}
            {/* Centered text on small screens */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-tight"
            >
              The Dark Knight
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 font-light" // Slightly smaller text on mobile
            >
              Former vigilante. Current culinary artist.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-3xl font-medium text-white mt-4 leading-relaxed relative"
            >
              {textOne}
              <span className="inline-block w-1 bg-yellow-500 h-6 md:h-8 ml-1 animate-pulse"></span>{" "}
              {/* Adjusted cursor height */}
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/menu")}
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-md transition-colors duration-300"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="bg-black rounded-lg overflow-hidden w-full max-w-4xl mt-10 flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="p-6 md:p-8 text-white space-y-4 w-full text-center" // Adjusted padding
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Welcome To Gotham city
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold text-gray-100" // Adjusted text size
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {textTwo}
            <span className="inline-block w-1 bg-yellow-500 h-6 md:h-8 ml-1 animate-pulse"></span>{" "}
            {/* Adjusted cursor height */}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-64 md:h-64 bg-yellow-500 blur-3xl rounded-full" // Adjusted glow size/position
      />
    </div>
  );
}
