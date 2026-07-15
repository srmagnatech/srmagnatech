import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { productCategories } from '../data/products'

export default function Products() {
  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="Manufacturing-ready electrical components for modern industrial systems."
            description="Every category below is structured for fast technical review, detailed specification access, and quote-ready product exploration."
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <motion.article
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex h-full flex-col rounded-[28px] border border-[#ECE8DA] bg-[#F9F8F2] p-8 shadow-[0_18px_50px_rgba(43,43,43,0.06)]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
                  Category
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#2B2B2B]">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{category.shortDescription}</p>

                <div className="mt-6 rounded-[24px] border border-[#E8E2D0] bg-white p-5">
                  <p className="text-sm font-semibold text-[#2B2B2B]">Featured products</p>
                  <ul className="mt-4 space-y-3 text-sm text-[#6B7280]">
                    {category.products.slice(0, 3).map((product) => (
                      <li key={product.slug} className="flex items-center justify-between gap-3">
                        <span>{product.name}</span>
                        <span className="text-[#d4af37]">•</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 text-sm font-semibold text-[#2B2B2B]">
                  <span>{category.products.length} products</span>
                  <Link to={`/products/${category.slug}`} className="inline-flex items-center gap-2 transition hover:text-[#d4af37]">
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
