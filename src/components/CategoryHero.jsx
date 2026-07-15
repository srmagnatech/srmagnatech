import { motion } from 'framer-motion'
import Breadcrumb from './Breadcrumb'

export default function CategoryHero({ category, breadcrumbItems }) {
  return (
    <section className="border-b border-[#EFEFEF] bg-[linear-gradient(135deg,#FFFFFF_0%,#faf9f4_100%)] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#d4af37]">Industrial Components</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#2B2B2B] sm:text-5xl">{category.heroTitle}</h1>
          <p className="mt-5 text-lg leading-8 text-[#6B7280]">{category.heroDescription}</p>
          <div className="mt-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[28px] border border-[#ECE8DA] bg-white/90 p-8 shadow-[0_20px_60px_rgba(43,43,43,0.08)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Category</p>
          <h2 className="mt-4 text-2xl font-semibold text-[#2B2B2B]">{category.title}</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#6B7280]">{category.shortDescription}</p>
        </motion.div>
      </div>
    </section>
  )
}
