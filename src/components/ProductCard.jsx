import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProductImagePath } from '../data/products'

export default function ProductCard({ product, categorySlug }) {
  const imageSrc = getProductImagePath(categorySlug, product.slug)

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#ECE8DA] bg-[#F9F8F2] shadow-[0_18px_50px_rgba(43,43,43,0.06)]"
    >
      <div className="overflow-hidden bg-[#EFEDE3]">
        <img
          src={imageSrc}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.src = '/images/products/placeholder.jpg'
          }}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
          {product.name}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-[#2B2B2B]">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#6B7280]">{product.shortDescription}</p>

        <div className="mt-6 rounded-[22px] border border-[#E8E2D0] bg-white p-5">
          <p className="text-sm font-semibold text-[#2B2B2B]">Key specifications</p>
          <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
            {Object.entries(product.specifications).slice(0, 4).map(([label, value]) => (
              <li key={label} className="flex justify-between gap-3">
                <span className="font-medium text-[#2B2B2B]">{label}</span>
                <span className="text-right">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/products/${categorySlug}/${product.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2B2B2B] transition hover:text-[#d4af37]"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  )
}
