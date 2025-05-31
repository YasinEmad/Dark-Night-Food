
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer } from "../config/batmanMenu.config";

export default function AboutStory() {
  return (
    <motion.section
      className="px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideInLeft}>
            <motion.h2
              className="text-5xl font-bold mb-8 text-white"
              animate={{
                textShadow: [
                  "0 0 15px rgba(255, 255, 255, 0.3)",
                  "0 0 25px rgba(255, 255, 255, 0.5)",
                  "0 0 15px rgba(255, 255, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Our Legend Begins
            </motion.h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Born from the shadows of Gotham, Dark Knight Restaurant
                emerged with a mission: to serve justice through
                extraordinary culinary experiences. What started as a vision
                has become a legendary dining destination.
              </p>
              <p className="text-lg">
                Our master chefs, like vigilant guardians of flavor, work
                tirelessly in our kitchen fortress to craft dishes that
                would make even the Dark Knight himself proud. Every plate
                tells a story of passion, precision, and unwavering
                commitment to excellence.
              </p>
              <p className="text-lg">
                We don't just serve food – we create experiences that
                transcend the ordinary, bringing together Gotham's finest
                under one roof to share in the legend.
              </p>
            </div>
          </motion.div>

          <motion.div className="relative" variants={slideInRight}>
            <motion.div
              className="w-full h-96 rounded-lg relative overflow-hidden shadow-2xl shadow-blue-500/30 flex items-center justify-center"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="/images/Joker and batman.jpg"
                alt="Dark Knight Symbol"
                className="max-w-full max-h-[100%] object-contain"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              />

              <motion.div
                className="absolute bottom-6 left-4 right-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <p className="text-yellow-400 font-semibold">
                  Don't be afraid, I'm your friend now
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
