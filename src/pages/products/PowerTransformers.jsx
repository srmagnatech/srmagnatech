import CategoryHero from '../../components/CategoryHero'
import ProductGrid from '../../components/ProductGrid'
import { getProductCategoryBySlug } from '../../data/products'

export default function PowerTransformers() {
  const category = getProductCategoryBySlug('power-transformers')

  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <CategoryHero category={category} breadcrumbItems={[{ label: 'Products', to: '/products' }, { label: category.breadcrumbLabel }]} />
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d4af37]">Featured range</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#2B2B2B]">Power transformers for robust industrial deployments</h2>
            </div>
          </div>
          <ProductGrid products={category.products} categorySlug={category.slug} />
        </div>
      </section>
    </main>
  )
}
