
export const animationVariants = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: { duration: 0.3 }
    }
  },
  glow: {
    initial: { boxShadow: '0 0 0px rgba(255, 215, 0, 0)' },
    animate: {
      boxShadow: [
        '0 0 5px rgba(255, 215, 0, 0.3)',
        '0 0 20px rgba(255, 215, 0, 0.6)',
        '0 0 5px rgba(255, 215, 0, 0.3)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};
// config.js
import { Shield, Star, Users, Clock, Award, ChefHat } from "lucide-react";

// Animation Variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Data Arrays
export const stats = [
  { icon: Users, number: "50K+", label: "Happy Customers" },
  { icon: Award, number: "15+", label: "Awards Won" },
  { icon: ChefHat, number: "25+", label: "Master Chefs" },
  { icon: Clock, number: "10+", label: "Years Experience" },
];

export const values = [
  {
    icon: Shield,
    title: "Justice in Every Bite",
    description:
      "We believe in serving justice through exceptional culinary experiences that protect your taste buds from ordinary dining.",
  },
  {
    icon: Star,
    title: "Legendary Quality",
    description:
      "Like the Dark Knight himself, we never compromise on quality. Every dish is crafted with heroic attention to detail.",
  },
  {
    icon: Users, // Note: lucide-react Users icon is used here again, which is fine.
    title: "Gotham's Community",
    description:
      "We're more than a restaurant - we're a gathering place for Gotham's finest, where legends are born over exceptional meals.",
  },
];
