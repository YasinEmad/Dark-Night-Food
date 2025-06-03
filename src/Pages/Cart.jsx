import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ShoppingCart } from "lucide-react";
import { db } from "../Firebase/firebase";

// Import Components
import BatAlert from "../Componentes/Cart/BatAlert";
import LoadingScreen from "../Componentes/Cart/LoadingScreen";
import EmptyCart from "../Componentes/Cart/EmptyCart";
import CartItem from "../Componentes/Cart/CartItem";
import CartTotal from "../Componentes/Cart/CartTotal";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "cart"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setCartItems(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      await deleteDoc(doc(db, "cart", itemId));
    } else {
      await updateDoc(doc(db, "cart", itemId), {
        quantity: newQuantity,
      });
    }
  };

  const removeItem = async (itemId) => {
    await deleteDoc(doc(db, "cart", itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BatAlert showAlert={showAlert} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-blue-950/30"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%), 
                            radial-gradient(circle at 75% 75%, #1e3a8a 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Bat Symbols */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/5 text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🦇
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 p-4 sm:p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-4 tracking-wider">
              BATCART
            </h1>
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingCart className="w-12 h-12 text-yellow-500" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 tracking-wide"
          >
            GOTHAM'S FINEST DINING EXPERIENCE
          </motion.p>
        </motion.div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    index={index}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Total and Checkout */}
            <CartTotal total={calculateTotal()} onCheckout={handleCheckout} />
          </>
        )}
      </div>
    </div>
  );
}
