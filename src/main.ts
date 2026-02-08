import { Product } from "./models/product.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { handleOrder } from "./utils/errorHandler.ts";
import { handleRequest } from "./services/apiServices.ts";

// Call it with await since it's async
const productData = await handleRequest()
const product = new Product(
    productData.id,
    productData.title,
    productData.description,
    productData.category,
    productData.price,
    productData.discountPercentage,
    productData.rating,
    productData.stock,
    productData.tags
)

console.log("Product Details:", product.displayDetails())
console.log("Price with Discount:", calculateDiscount(product))
console.log("Price with Tax:", calculateTax(product.price))

handleOrder(product)