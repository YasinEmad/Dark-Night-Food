import { useState } from 'react';
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <motion.div      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, rgb(17 24 39), black, rgb(17 24 39))',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Batman Chef Image */}
      <div
        className="absolute right-0 h-full w-1/2 opacity-30"
        style={{
          backgroundImage: 'url("/images/batman chef.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      />

      {/* Background Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-[120px] opacity-20"
        style={{ top: '10%', left: '20%' }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-96 h-96 bg-gray-700 rounded-full blur-[120px] opacity-20"
        style={{ bottom: '10%', right: '20%' }}
      />

      {/* Login Form */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md w-full space-y-8 p-8 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 ml-[10%]"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mt-6 text-center text-4xl font-bold text-yellow-500 tracking-tight">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {isSignUp ? 'Join the Batman Food experience' : 'Order your favorite Batman-themed food'}
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <input
                type="email"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent backdrop-blur-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <input
                type="password"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent backdrop-blur-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-yellow-500/25"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors duration-200"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors duration-200"
            >
              Continue as Guest
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
