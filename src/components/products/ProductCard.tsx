import type { Product } from '../../types/Products'
interface ProductCardProps {
  item: Product
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
      {/* Image */}
      <div className='h-56 overflow-hidden bg-gray-100'>
        <img
          src={item.images}
          alt={item.title}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
      </div>

      {/* Content */}
      <div className='space-y-3 p-5'>
        {/* Category */}

        {/* Title */}
        <h2 className='line-clamp-1 text-lg font-bold text-gray-800'>
          {item.title}
        </h2>

        {/* Description */}
        <p className='line-clamp-2 text-sm leading-6 text-gray-500'>
          {item.description}
        </p>

        {/* Rating */}
        <div className='flex items-center gap-2'>
          <span className='text-yellow-500'>★</span>
          <span className='text-sm font-medium text-gray-700'>
            {item.rating}
          </span>
        </div>

        {/* Price + Button */}
        <div className='flex items-center justify-between pt-2'>
          <h3 className='text-2xl font-bold text-gray-900'>${item.price}</h3>

          <button className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 cursor-pointer'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
