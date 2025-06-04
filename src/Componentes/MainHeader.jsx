import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartIcon from './CartIcon';
import { useAuth } from '../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, when: "beforeChildren" },
    },
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Cart", path: "/cart" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  // Style for active NavLink
  const activeStyle = {
    color: '#FACC15', // Tailwind's yellow-400
    textShadow: "0px 0px 8px rgb(250,204,21)" // yellow-400 shadow
  };

  // Style for active mobile NavLink background
  const activeMobileBgStyle = 'rgba(30, 64, 175, 0.5)'; // blue-800 at 50% opacity

  return (
    <header className=" text-gray-100 sticky top-0 z-50 shadow-lg shadow-yellow-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Left: Logo */}
          <Link to="/">
            <motion.div
  className="flex items-center space-x-2 cursor-pointer -ml-10"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>

              <img
                src="/images/logo3-removebg-preview (1).png"
                alt="Dark Knight Restaurant Logo"
                className="w-20 h-10 object-contain"
              />
            
            </motion.div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                style={({ isActive }) => isActive ? activeStyle : undefined}
                className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                <motion.div
                  whileHover={{ y: -3, textShadow: "0px 0px 8px rgb(250,204,21)" }} // yellow-400 shadow
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  {item.name}
                </motion.div>
              </NavLink>
            ))}
          </nav>          {/* Right: Cart and Login Buttons */}          <div className="hidden md:flex items-center space-x-4 ml-6">
            <CartIcon />
            {user ? (
              <motion.button
                onClick={handleLogout}
                className="text-blue-900 px-4 py-2 rounded-md flex items-center space-x-2 font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgb(59,130,246)" }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </motion.button>
            ) : (
              <Link to="/login">
                <motion.button
                  className="text-blue-900 px-4 py-2 rounded-md flex items-center space-x-2 font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgb(59,130,246)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + menuItems.length * 0.1 }}
                >
                  <User size={18} />
                  <span>Login</span>
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-yellow-400 focus:outline-none"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t " // Added bg-blue-900 for consistency
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    style={({ isActive }) => 
                      isActive 
                        ? { ...activeStyle, display: 'block', paddingLeft: '0.5rem', backgroundColor: activeMobileBgStyle } 
                        : { display: 'block', paddingLeft: '0.5rem' }
                    }
                    className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 py-2 px-2 rounded-md hover:bg-blue-800 block"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.span>
                  </NavLink>
                ))}
                <Link
                  to="/login"
                  className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 py-2 px-2 rounded-md hover:bg-blue-800 flex items-center space-x-2 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ delay: menuItems.length * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <User size={18} />
                    <span>Login</span>
                  </motion.span>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}