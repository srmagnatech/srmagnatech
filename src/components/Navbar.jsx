import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navLinks } from '../data/siteData'

const productCategories = [
  { name: 'Power Transformers', to: '/products/power-transformers' },
  { name: 'Ferrite Transformers', to: '/products/ferrite-transformers' },
  { name: 'Line Filters', to: '/products/line-filters' },
  { name: 'Industrial Inductors', to: '/products/industrial-inductors' },
  { name: 'Ferrite Rod', to: '/products/ferrite-rod' },
  { name: 'Toroidal Inductors', to: '/products/toroidal-inductors' },
]

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const productsMenuRef = useRef(null)
  const closeTimerRef = useRef(null)

  const openProductsMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    setIsProductsOpen(true)
  }

  const closeProductsMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIsProductsOpen(false)
    }, 140)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileProductsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (window.scrollY > 40) {
        header.classList.add('bg-white/95', 'shadow-sm', 'backdrop-blur-xl')
        header.classList.remove('bg-white/70')
      } else {
        header.classList.add('bg-white/70')
        header.classList.remove('bg-white/95', 'shadow-sm', 'backdrop-blur-xl')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full overflow-visible transition-all duration-300 bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-2 transition hover:opacity-90 md:gap-3" onClick={closeMobileMenu}>
          <img src={logo} alt="S.R. Magnatech logo" className="h-14 w-14 shrink-0 object-contain md:h-[142px] md:w-[142px]" />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold uppercase tracking-[0.08em] text-[#2B2B2B] md:text-[17px]">S.R. Magnatech</p>
            <p className="mt-1 hidden text-[11px] font-medium tracking-normal text-gray-500 sm:block md:text-[12px]">Precision Electronics Manufacturing</p>
          </div>
        </NavLink>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ECE8DA] bg-white text-[#2B2B2B] md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-6 overflow-visible text-sm font-semibold text-[#2B2B2B] md:flex">
          {navLinks.map((link) => {
            if (link.name !== 'Products') {
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition hover:text-[#d4af37] ${isActive ? 'text-[#d4af37]' : 'text-[#2B2B2B]'}`
                  }
                >
                  {link.name}
                </NavLink>
              )
            }

            return (
              <div
                key={link.to}
                ref={productsMenuRef}
                className="relative overflow-visible"
                onMouseEnter={openProductsMenu}
                onMouseLeave={closeProductsMenu}
              >
                <button
                  type="button"
                  onClick={() => setIsProductsOpen((open) => !open)}
                  onFocus={openProductsMenu}
                  className="flex items-center gap-2 transition hover:text-[#d4af37]"
                >
                  <span>Products</span>
                  <ChevronDown size={16} className={`transition ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProductsOpen && (
                  <div
                    className="absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-[#ECE8DA] bg-white p-3 shadow-[0_20px_60px_rgba(43,43,43,0.12)] transition-all duration-200 pointer-events-auto"
                    onMouseEnter={openProductsMenu}
                    onMouseLeave={closeProductsMenu}
                  >
                    {productCategories.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          if (closeTimerRef.current) {
                            clearTimeout(closeTimerRef.current)
                          }
                          setIsProductsOpen(false)
                        }}
                        className="block rounded-xl px-4 py-3 text-sm text-[#2B2B2B] transition hover:bg-[#F9F8F2] hover:text-[#d4af37]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#2B2B2B] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#2B2B2B] transition hover:bg-[#2B2B2B] hover:text-white"
          >
            Request Quote
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#ECE8DA] bg-white/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => {
              if (link.name !== 'Products') {
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? 'bg-[#F9F8F2] text-[#d4af37]' : 'text-[#2B2B2B] hover:bg-[#F9F8F2]'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              }

              return (
                <div key={link.to} className="rounded-xl border border-[#ECE8DA] bg-[#F9F8F2]">
                  <button
                    type="button"
                    onClick={() => setIsMobileProductsOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold text-[#2B2B2B]"
                  >
                    <span>Products</span>
                    <ChevronDown size={16} className={`transition ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileProductsOpen && (
                    <div className="space-y-1 border-t border-[#ECE8DA] px-3 py-2">
                      {productCategories.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-2 py-2 text-sm text-[#6B7280] transition hover:bg-white hover:text-[#d4af37]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2B2B2B] bg-transparent px-5 py-3 text-sm font-semibold text-[#2B2B2B]"
            >
              Request Quote
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
