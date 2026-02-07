import { Product } from "../models/product.ts";

export function calculateDiscount(product: Product): number {
    return product.getPriceWithDiscount();
}