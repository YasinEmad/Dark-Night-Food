import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './Componentes/MainHeader';
import Home from './Pages/Home';
import AboutPage from './Pages/About';
import BatmanMenu from './Pages/Menu';
import Footer from './Componentes/Footer';
import CartPage from './Pages/Cart'; // Importing CartPage component
// Import other page components like MenuPage, LoginPage as you create them

// A simple layout component to include the header on all pages
const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />

      <main className="pt-16 md:pt-[60px]"> {/* Adjust padding top based on header height */}
        {children}
      </main>

      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/menu" element={<Layout><BatmanMenu /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} /> {/* Cart route added */}
        {/* <Route path="/login" element={<Layout><LoginPage /></Layout>} /> */}
       
        {/* Add a 404 Not Found route if desired */}
        <Route path="*" element={<Layout><div><h1>404 - Page Not Found</h1></div></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;