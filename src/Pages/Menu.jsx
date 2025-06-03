import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Coffee, Wine, IceCream, Utensils } from 'lucide-react';
import BatmanWaiter from '../Componentes/BatmanWaiter';
import CategoryButtons from '../Componentes/CategoryButtons';
import MenuGrid from '../Componentes/MenuGrid';
import MenuFooter from '../Componentes/MenuFooter';
import MenuHeader from '../Componentes/MenuHeader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { animationVariants } from '../config/batmanMenu.config';

// Helper to map icon names to actual components
const IconComponents = {
  Utensils: <Utensils className="w-5 h-5" />,
  ChefHat: <ChefHat className="w-5 h-5" />,
  Wine: <Wine className="w-5 h-5" />,
  IceCream: <IceCream className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
};

const BatmanMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const { container: containerVariants, item: itemVariants, glow: glowVariants } = animationVariants;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const menuRef = doc(db, 'menu', 'batmanMenu');
        const menuSnap = await getDoc(menuRef);
        
        if (menuSnap.exists()) {
          const data = menuSnap.data();
          setMenuData(data);
          if (!activeCategory && data.categories) {
            setActiveCategory(Object.keys(data.categories)[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeCategory]);  // Dependencies array empty to run only once on mount

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!menuData?.categories) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-yellow-500">Error loading menu data</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-6 overflow-x-hidden relative">
      {/* Simple black and blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <MenuHeader 
          title={menuData.title}
          subtitle={menuData.subtitle}
          headerImages={menuData.headerImages}
          glowVariants={glowVariants}
        />

        <BatmanWaiter />

        <CategoryButtons 
          categories={menuData.categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          IconComponents={IconComponents}
        />

        <MenuGrid 
          activeCategory={activeCategory}
          menuData={menuData}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        <MenuFooter footer={menuData.footer} />
      </div>
    </div>
  );
};

export default BatmanMenu;