import { use } from 'react'
import RecipeCard from './RecipeCard'

const Recipes = ({ useGetRecipe }) => {
  const data = use(useGetRecipe)
  console.log(data)
  return (
    <div>
      <h1 className='text-center text-4xl text-red-500 font-semibold mt-4'>
        Recipe:{data.recipes.length}
      </h1>
      <div className='max-w-7xl mx-auto bg-white/10  gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 px-2 mb-12'>
        {data.recipes.map((item) => (
          <RecipeCard key={item.id} items={item} />
        ))}
      </div>
    </div>
  )
}

export default Recipes
