import ProductCard from './ProductCard'

export default function ProductGrid({ products, categorySlug }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} categorySlug={categorySlug} />
      ))}
    </div>
  )
}
