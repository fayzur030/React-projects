import { use } from 'react'
import type { ProductResponse } from '../../types/Products'
import ProductCard from './ProductCard'

interface ProductProps {
  useProduct: Promise<ProductResponse>
}

const Product = ({ useProduct }: ProductProps) => {
  const product = use(useProduct)
  console.log(product.products)
  return (
    <section>
      {/* <div className='relative max-w-7xl mx-auto w-full mt-5 z-50  '>
        <input
          type='search'
          placeholder='Search products...'
          className='w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
        />

        <span className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
          🔍
        </span>
      </div> */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-4 px-2 mb-12'>
        {product.products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Product
