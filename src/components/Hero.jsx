import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import heroImage from '../assets/images/image1.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#2B2B2B]">
            Premium electronics manufacturing
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#2B2B2B] sm:text-5xl lg:text-6xl">
            Precision manufacturing for industrial electronics and trusted OEM supply.
          </h1>
          <p className="max-w-xl text-base leading-8 text-[#6B7280] sm:text-lg">
            Built to support demanding production runs with carefully controlled materials, repeatable process flows, and disciplined quality oversight.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <NavLink to="/products" className="inline-flex items-center justify-center rounded-full bg-[#2B2B2B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B87333]">
              Explore Products
              <ArrowRight size={16} className="ml-2" />
            </NavLink>
            <NavLink to="/contact" className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#2B2B2B] transition hover:bg-[#2B2B2B] hover:text-white">
              Request a quote
            </NavLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F7F7F5] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Quality focus</p>
              <p className="mt-3 text-sm leading-7 text-[#2B2B2B]">ISO-aligned workflows with routine inspection and test checkpoints.</p>
            </div>
            <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F7F7F5] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Supply readiness</p>
              <p className="mt-3 text-sm leading-7 text-[#2B2B2B]">Local production capacity tuned for prototypes through long-run industrial orders.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F7F7F5] shadow-[0_30px_80px_rgba(43,43,43,0.08)]"
        >
          <img src={heroImage} alt="Manufacturing preview" className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10]" />
          <div className="absolute inset-x-0 bottom-0 rounded-b-[32px] bg-gradient-to-t from-[#2B2B2B]/90 to-transparent p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F7F7F5]">Featured process image</p>
            <p className="mt-2 text-lg font-semibold">High-precision manufacturing environment</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
