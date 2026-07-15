import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { footerLinks, footerProducts, contactInfo } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-16 lg:grid lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:gap-10 lg:px-8 lg:py-20">
        <div>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2B2B2B] text-lg font-bold shadow-sm">
            SR
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Premium electronics manufacturing for industrial supply chains.</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#D1D5DB]">
            Built for B2B buyers who need quality components, reliable production, and transparent manufacturing discipline.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#D1D5DB]">Quick Links</h3>
            <div className="grid gap-3 text-sm text-[#D1D5DB]">
              {footerLinks.map((link) => (
                link.external ? (
                  <a key={link.to} href={link.to} target="_blank" rel="noreferrer" className="transition hover:text-[#B87333]">
                    {link.name}
                  </a>
                ) : (
                  <NavLink key={link.to} to={link.to} className="transition hover:text-[#B87333]">
                    {link.name}
                  </NavLink>
                )
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#D1D5DB]">Products</h3>
            <div className="grid gap-3 text-sm text-[#D1D5DB]">
              {footerProducts.map((product) => (
                <span key={product} className="transition hover:text-[#B87333]">{product}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#D1D5DB]">Contact</h3>
            <div className="space-y-3 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#B87333]" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#B87333]" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#B87333]" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-[#B87333]"
          >
            Request an inquiry <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-sm text-[#D1D5DB] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 S.R. Magnatech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
