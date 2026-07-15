import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Manufacturing from './pages/Manufacturing'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import PowerTransformers from './pages/products/PowerTransformers'
import FerriteTransformers from './pages/products/FerriteTransformers'
import LineFilters from './pages/products/LineFilters'
import IndustrialInductors from './pages/products/IndustrialInductors'
import FerriteRod from './pages/products/FerriteRod'
import ToroidalInductors from './pages/products/ToroidalInductors'
import ProductDetails from './pages/products/ProductDetails'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B] pt-[88px] md:pt-[176px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/power-transformers" element={<PowerTransformers />} />
          <Route path="/products/ferrite-transformers" element={<FerriteTransformers />} />
          <Route path="/products/line-filters" element={<LineFilters />} />
          <Route path="/products/industrial-inductors" element={<IndustrialInductors />} />
          <Route path="/products/ferrite-rod" element={<FerriteRod />} />
          <Route path="/products/toroidal-inductors" element={<ToroidalInductors />} />
          <Route path="/products/:categorySlug/:productSlug" element={<ProductDetails />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
