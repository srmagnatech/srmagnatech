import CategoryHero from '../../components/CategoryHero'
import ProductGrid from '../../components/ProductGrid'
import { getProductCategoryBySlug } from '../../data/products'

export default function LineFilters() {
  const category = getProductCategoryBySlug('line-filters')

  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <CategoryHero category={category} breadcrumbItems={[{ label: 'Products', to: '/products' }, { label: category.breadcrumbLabel }]} />
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={category.products} categorySlug={category.slug} />
        </div>
      </section>
    </main>
  )
}
