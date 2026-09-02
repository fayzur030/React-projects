// import { Suspense } from 'react'
import { Suspense } from 'react'
import './App.css'
import NavBar from './common/NavBar'

import Loading from './components/Loading'
import Product from './components/products/Product'
import { getProduct } from './services/getProduct'

// import Recipes from './components/Recipes'
// import Loading from './components/Loading'

// const getRecipes = async () => {
//   const res = await fetch('https://dummyjson.com/recipes')
//   const data = await res.json()
//   return data
// }

const productFetch = getProduct()

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<Loading />}>
          <Product useProduct={productFetch} />
        </Suspense>

        {/* <Suspense fallback={<Loading />}>
          <Recipes useGetRecipe={getRecipes()} />
        </Suspense> */}
      </main>
    </>
  )
}

export default App
