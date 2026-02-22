import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProducts from './components/FeaturedProducts'
import Awards from './components/Awards'
import Impact from './components/Impact'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import ApiPalu from './pages/ApiPalu'

import AOS from 'aos'
import 'aos/dist/aos.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-back'
    });
  }, []);

  return (
    <div className="bg-[#050a15] min-h-screen font-sans antialiased selection:bg-green-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedProducts />
            <About />
            <Awards />
            <Impact />
            <Footer />
          </>
        } />
        <Route path="/produits" element={<Catalog />} />
        <Route path="/api-palu" element={<ApiPalu />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </div>
  )
}