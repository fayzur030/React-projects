export interface RecipeProps {
  id: number
  name: string
  image: string
  cuisine: string
  rating: number
  difficulty: string
}

export interface ResponseRecipeProps {
  recipes: ResponseRecipeProps[]
  total: number
  skip: number
  limit: number
}
