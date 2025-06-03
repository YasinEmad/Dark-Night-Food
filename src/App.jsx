import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './Componentes/MainHeader';
import Home from './Pages/Home';
import AboutPage from './Pages/About';
import BatmanMenu from './Pages/Menu';
import Footer from './Componentes/Footer';
import CartPage from './Pages/Cart';
import Login from './Pages/Login';
import { AuthProvider } from './context/AuthContext.jsx';
// Import other page components as needed

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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/menu" element={<Layout><BatmanMenu /></Layout>} />
          <Route path="/cart" element={<Layout><CartPage /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="*" element={<Layout><div><h1>404 - Page Not Found</h1></div></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;