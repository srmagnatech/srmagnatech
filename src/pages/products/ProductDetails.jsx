import { Link, useParams } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import SpecificationTable from '../../components/SpecificationTable'
import FeatureList from '../../components/FeatureList'
import RelatedProducts from '../../components/RelatedProducts'
import { getProductCategoryBySlug, getProductImagePath } from '../../data/products'

export default function ProductDetails() {
  const { categorySlug, productSlug } = useParams()
  const category = getProductCategoryBySlug(categorySlug)
  const product = category?.products.find((entry) => entry.slug === productSlug)

  if (!category || !product) {
    return (
      <main className="bg-[#FFFFFF] px-6 py-24 text-[#2B2B2B] lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-[#ECE8DA] bg-[#F9F8F2] p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d4af37]">Product unavailable</p>
          <h1 className="mt-4 text-3xl font-semibold">The requested product could not be found.</h1>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2B2B2B] hover:text-[#d4af37]">
            Return to products
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: category.breadcrumbLabel, to: `/products/${category.slug}` }, { label: product.name }]} />

          <div className="mt-10 grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[32px] border border-[#ECE8DA] bg-[#F9F8F2] p-4 shadow-[0_24px_70px_rgba(43,43,43,0.08)]">
              <img
                src={getProductImagePath(category.slug, product.slug)}
                alt={product.name}
                onError={(event) => {
                  event.currentTarget.src = '/images/products/placeholder.jpg'
                }}
                className="aspect-[4/3] w-full rounded-[24px] object-cover md:aspect-auto md:h-[420px]"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d4af37]">{category.title}</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2B2B2B]">{product.name}</h1>
                <p className="mt-5 text-lg leading-8 text-[#6B7280]">{product.overview}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b88e2b]">
                  Request Quote
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#2B2B2B] px-6 py-3 text-sm font-semibold text-[#2B2B2B] transition hover:bg-[#2B2B2B] hover:text-white">
                  <MessageCircle size={16} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold text-[#2B2B2B]">Specifications</h2>
              <div className="mt-6">
                <SpecificationTable specifications={product.specifications} />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B2B2B]">Applications</h2>
                <div className="mt-6 rounded-[24px] border border-[#ECE8DA] bg-[#F9F8F2] p-6">
                  <ul className="space-y-3 text-sm leading-7 text-[#6B7280]">
                    {product.applications.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 text-[#d4af37]">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B2B2B]">Key Features</h2>
                <div className="mt-6 rounded-[24px] border border-[#ECE8DA] bg-[#F9F8F2] p-6">
                  <FeatureList items={product.features} />
                </div>
              </div>
            </div>
          </div>

          <RelatedProducts category={category} currentSlug={product.slug} />
        </div>
      </section>
    </main>
  )
}
