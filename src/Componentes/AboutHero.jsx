// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { stats, fadeInUp, staggerContainer, scaleIn } from "../config/batmanMenu.config";

export default function AboutHero() {
  return (
    <motion.section
      className="px-6 py-20 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
          animate={{
            textShadow: [
              "0 0 20px rgba(255, 193, 7, 0.5)",
              "0 0 40px rgba(255, 193, 7, 0.8)",
              "0 0 20px rgba(255, 193, 7, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          DARK KNIGHT
        </motion.h1>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-700 to-transparent mx-auto mb-8"
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Where culinary excellence meets the legend of Gotham. Experience
          dining like never before in the shadows of extraordinary flavors.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={scaleIn}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 group-hover:shadow-2xl group-hover:shadow-yellow-400"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(255, 193, 7, 0)",
                  "0 0 20px rgba(255, 193, 7, 0.4)",
                  "0 0 0 rgba(255, 193, 7, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <stat.icon className="w-8 h-8 text-black" />
            </motion.div>
            <motion.h3
              className="text-3xl font-bold text-yellow-400 mb-2"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 193, 7, 0.3)",
                  "0 0 20px rgba(255, 193, 7, 0.6)",
                  "0 0 10px rgba(255, 193, 7, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {stat.number}
            </motion.h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
