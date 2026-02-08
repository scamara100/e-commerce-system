import { Product } from "../models/product.ts"

export async function handleRequest() {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        return data.products[0] // Return the first product object
    } catch (e) {
        console.error(e)
    }
}