// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { values, staggerContainer, fadeInUp, scaleIn } from "../config/batmanMenu.config";

export default function AboutValuesAndCTA() {
  const navigate = useNavigate();

  return (
    <>
      <motion.section
        className="px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-5xl font-bold mb-6 text-white"
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
              Our Core Values
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group shadow-xl hover:shadow-blue-500/40"
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:shadow-2xl group-hover:shadow-yellow-400"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255, 193, 7, 0)",
                      "0 0 15px rgba(255, 193, 7, 0.3)",
                      "0 0 0 rgba(255, 193, 7, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <value.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-6 py-20 bg-gradient-to-r from-black via-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 30px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to Join the Legend?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Step into the shadows and discover what makes Dark Knight
            Restaurant the most extraordinary dining experience in Gotham.
          </p>
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-yellow-400 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 193, 7, 0.8)",
            }}
            onClick={() => navigate("/menu")}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(255, 193, 7, 0)",
                "0 0 20px rgba(255, 193, 7, 0.4)",
                "0 0 0 rgba(255, 193, 7, 0)",
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Enjoy your food, little hero.
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}
