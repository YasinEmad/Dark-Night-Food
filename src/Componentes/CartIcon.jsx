import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import db from '../Firebase/firebase';

export default function CartIcon() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'cart'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const count = querySnapshot.docs.reduce((total, doc) => total + doc.data().quantity, 0);
      setItemCount(count);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Link to="/cart" className="relative group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-2 rounded-full hover:bg-yellow-500/20"
      >
        <ShoppingCart className="w-6 h-6 text-yellow-500" />
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-yellow-500 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
          >
            {itemCount}
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}
