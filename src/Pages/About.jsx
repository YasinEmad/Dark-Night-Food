// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutHero from "../Componentes/AboutHero";
import AboutStory from "../Componentes/AboutStory";
import AboutValuesAndCTA from "../Componentes/AboutValuesAndCTA";

export default function AboutPage() {
  return (
    // Base container: predominantly black background with white text
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Layers: These create a deep, dark atmosphere */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50 z-0"></div>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Floating Elements: Small yellow accents */}
      <motion.div
        className="fixed top-20 left-10 w-2 h-16 bg-yellow-400 opacity-20 z-0"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-32 right-16 w-3 h-3 bg-yellow-400 rounded-full opacity-30 z-0"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content container: Ensures content is above fixed backgrounds */}
      <div className="relative z-10">
        <AboutHero />
        <AboutStory />
        <AboutValuesAndCTA />
      </div>
    </div>
  );
}