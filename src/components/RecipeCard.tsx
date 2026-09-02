const RecipeCard = ({ items }) => {
  return (
    <div className='rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg space-y-2'>
      <div>
        <img src={items.image} alt='' />
      </div>
      <div className='flex justify-between items-center p-2'>
        <h1 className='text-base text-gray-900 font-semibold'>{items.name}</h1>
        <span className='text-yellow-700 font-semibold text-lg'>
          {items.rating}
        </span>
      </div>
      <div className='p-2'>
        <p className='text-base text-gray-900 font-semibold'>{items.cuisine}</p>
      </div>
    </div>
  )
}

export default RecipeCard
