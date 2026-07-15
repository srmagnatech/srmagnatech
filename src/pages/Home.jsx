import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'
import Stats from '../components/Stats'
import { heroData, overviewItems, productCategories, companyStats } from '../data/siteData'

export default function Home() {
  const heroSlides = heroData.slides?.length ? heroData.slides : [heroData.image]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 1500)

    return () => window.clearInterval(interval)
  }, [heroSlides.length])

  return (
    <main className="overflow-x-hidden bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="relative overflow-hidden bg-[#FFFFFF] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <p className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-[#2B2B2B]">
              Industrial manufacturing
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#2B2B2B] sm:text-5xl lg:text-6xl">
              Precision electronics production for modern B2B supply chains.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
              A premium manufacturing partner built to support ferrite transformers, chokes, and toroids solutions with quality and consistency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <NavLink to="/products" className="inline-flex items-center justify-center rounded-full bg-[#2B2B2B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B87333]">
                Explore products
                <ArrowRight size={16} className="ml-2" />
              </NavLink>
              <NavLink to="/contact" className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#2B2B2B] transition hover:bg-[#2B2B2B] hover:text-white">
                Request a quote
              </NavLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F7F7F5] shadow-[0_30px_80px_rgba(43,43,43,0.08)]">
            <img src={heroSlides[activeSlide]} alt="Manufacturing preview" className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10]" />
            <div className="absolute right-4 top-4 flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 rounded-b-[32px] bg-gradient-to-t from-[#2B2B2B]/90 to-transparent p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F7F7F5]">Featured process image</p>
              <p className="mt-2 text-lg font-semibold">High-precision manufacturing environment</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_80px_rgba(43,43,43,0.05)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="Engineering-led manufacturing with industrial clarity."
                description="Our service model supports OEMs, telecom suppliers, and industrial buyers with dependable component production and practical manufacturing workflows."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {overviewItems.map((item) => (
                <div key={item.title} className="rounded-[22px] border border-[#E5E7EB] bg-[#F7F7F5] p-5">
                  <p className="text-2xl font-semibold text-[#2B2B2B]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product Categories"
            title="A focused portfolio for modern electronics manufacturing."
            description="Products designed to support industrial performance, component compatibility, and efficient production workflows."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((product) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="group rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_40px_rgba(43,43,43,0.05)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(43,43,43,0.1)]">
                <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#B87333]" />
                  Category
                </div>
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[#E5E7EB] bg-[#F7F7F5] p-8 shadow-sm lg:p-10">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A premium manufacturing partner for ambitious teams."
              description="We bring disciplined production control, traceable quality checks, and trusted B2B service to every order."
            />
            <div className="mt-8 space-y-4">
              {[
                'Engineering Precision',
                'Certified Manufacturing',
                'Scalable Production',
                'Industrial Reliability',
              ].map((title) => (
                <div key={title} className="flex gap-3 rounded-[24px] border border-white bg-white p-4 shadow-sm">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-[#2B2B2B] text-white flex items-center justify-center">?</div>
                  <p className="text-sm leading-7 text-[#6B7280]">{title} across every production stage.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_80px_rgba(43,43,43,0.05)] lg:p-10">
            <SectionHeading
              eyebrow="Manufacturing Overview"
              title="A strategic process designed for repeatable outcomes."
            />
            <div className="mt-8 space-y-5">
              {['Design & engineering', 'Material sourcing', 'Winding & assembly', 'Testing & validation', 'Dispatch & delivery'].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-[20px] border border-[#E5E7EB] bg-[#F7F7F5] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B87333] text-sm font-semibold text-white">{index + 1}</div>
                  <p className="text-sm leading-7 text-[#6B7280]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Statistics"
            title="Manufacturing metrics that reflect our capability."
            description="Numbers that show our experience, product focus, and quality delivery."
            align="center"
          />
          <div className="mt-12">
            <Stats items={companyStats} />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
