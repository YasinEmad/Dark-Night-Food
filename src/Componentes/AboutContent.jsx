// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Shield, Star, Users, Clock, Award, ChefHat } from 'lucide-react';

const stats = [
  { icon: Users, number: "50K+", label: "Happy Customers" },
  { icon: Award, number: "15+", label: "Awards Won" },
  { icon: ChefHat, number: "25+", label: "Master Chefs" },
  { icon: Clock, number: "10+", label: "Years Experience" }
];

const values = [
  {
    icon: Shield,
    title: "Justice in Every Bite",
    description: "We believe in serving justice through exceptional culinary experiences that protect your taste buds from ordinary dining."
  },
  {
    icon: Star,
    title: "Legendary Quality",
    description: "Like the Dark Knight himself, we never compromise on quality. Every dish is crafted with heroic attention to detail."
  },
  {
    icon: Users,
    title: "Gotham's Community",
    description: "We're more than a restaurant - we're a gathering place for Gotham's finest, where legends are born over exceptional meals."
  }
];

export default function AboutContent({
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight
}) {
  return (
    <>
      {/* Hero Section */}
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
                "0 0 20px rgba(255, 193, 7, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DARK KNIGHT
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Where culinary excellence meets the legend of Gotham. Experience dining like never before
            in the shadows of extraordinary flavors.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial="hidden" // This initial/animate applies to the container for staggering
          animate="visible"
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={scaleIn} // Children use their specific variants
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 group-hover:shadow-2xl group-hover:shadow-yellow-400"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(255, 193, 7, 0)",
                    "0 0 20px rgba(255, 193, 7, 0.4)",
                    "0 0 0 rgba(255, 193, 7, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
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
                    "0 0 10px rgba(255, 193, 7, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Story Section */}
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
                    "0 0 15px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Our Legend Begins
              </motion.h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Born from the shadows of Gotham, Dark Knight Restaurant emerged with a mission:
                  to serve justice through extraordinary culinary experiences. What started as a vision
                  has become a legendary dining destination.
                </p>
                <p className="text-lg">
                  Our master chefs, like vigilant guardians of flavor, work tirelessly in our kitchen
                  fortress to craft dishes that would make even the Dark Knight himself proud.
                  Every plate tells a story of passion, precision, and unwavering commitment to excellence.
                </p>
                <p className="text-lg">
                  We don't just serve food – we create experiences that transcend the ordinary,
                  bringing together Gotham's finest under one roof to share in the legend.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={slideInRight}
            >
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/30"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-transparent opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-6xl text-yellow-400"
                    animate={{
                      rotateY: [0, 360],
                      textShadow: [
                        "0 0 20px rgba(255, 193, 7, 0.5)",
                        "0 0 40px rgba(255, 193, 7, 0.8)",
                        "0 0 20px rgba(255, 193, 7, 0.5)"
                      ]
                    }}
                    transition={{
                      rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                      textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    🦇
                  </motion.div>
                </div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4 text-center"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <p className="text-yellow-400 font-semibold">The Symbol of Excellence</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
                  "0 0 15px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our Core Values
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            // Stagger container variants are already on the parent <motion.section>
            // If these children need to stagger independently, this would be:
            // initial="hidden" animate="visible" variants={staggerContainer}
            // But here, they'll use scaleIn directly from the parent's stagger.
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 group shadow-xl hover:shadow-yellow-500/40"
                variants={scaleIn} // This will be animated by the parent staggerContainer
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:shadow-2xl group-hover:shadow-yellow-400"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255, 193, 7, 0)",
                      "0 0 15px rgba(255, 193, 7, 0.3)",
                      "0 0 0 rgba(255, 193, 7, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
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

      {/* Call to Action Section */}
      <motion.section
        className="px-6 py-20 bg-gradient-to-r from-black via-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp} // This section as a whole fades in
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 30px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to Join the Legend?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Step into the shadows and discover what makes Dark Knight Restaurant
            the most extraordinary dining experience in Gotham.
          </p>
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-yellow-400 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 193, 7, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(255, 193, 7, 0)",
                "0 0 20px rgba(255, 193, 7, 0.4)",
                "0 0 0 rgba(255, 193, 7, 0)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Reserve Your Table
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}