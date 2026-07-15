import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getProductImagePath } from '../data/products'

export default function RelatedProducts({ category, currentSlug }) {
  const related = category.products.filter((product) => product.slug !== currentSlug).slice(0, 3)

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d4af37]">Related products</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2B2B2B]">Complementary solutions in the same category</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {related.map((product) => (
          <div key={product.slug} className="overflow-hidden rounded-[24px] border border-[#ECE8DA] bg-[#F9F8F2] shadow-[0_16px_45px_rgba(43,43,43,0.05)]">
            <img src={getProductImagePath(category.slug, product.slug)} alt={product.name} onError={(event) => { event.currentTarget.src = '/images/products/placeholder.jpg' }} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2B2B2B]">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">{product.shortDescription}</p>
              <Link to={`/products/${category.slug}/${product.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2B2B2B] transition hover:text-[#d4af37]">
                View product
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
