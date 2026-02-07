import { Product } from "../models/product.ts";

export function calculateTax(price: number) {
    return price * 0.475 + price;
}