import type { ProductResponse } from '../types/Products'

export const getProduct = async (): Promise<ProductResponse> => {
  try {
    const res = await fetch(`https://dummyjson.com/products`)
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await res.json()
    return data
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Something went wrong')
  }
}
