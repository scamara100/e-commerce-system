import { title } from "node:process"
import { Product } from "../models/product.ts"

class ValidationError extends Error{
    constructor(message: string){
        super(message)
        this.name = "ValidationError"
    }
}

class PaymentError extends Error{
    constructor(message: string){
        super(message)
        this.name = "PaymentError"
    }
}

// interface Order {
//     productId: string | number,
//     quantity: number,
//     price: number,
// }

function processOrder(product: Product): void{
    if (product.category === ""){
        throw new ValidationError("Product must have a category")
    }
    if (product.price <= 0){
        throw new PaymentError("Price must be a positive number")
    } else
        console.log("Order processed successfully:", product)
}

function handleOrder(product: Product): void {
    try {
        processOrder(product)
    } catch (error: any) {
        if (error instanceof ValidationError) {
            console.log("Validation Error", error.message)
        } else if (error instanceof PaymentError) {
            console.log("Payment Error", error.message);
        } else {
            console.log("Unknown Error", error.message);
        }
    }
}

handleOrder(Product(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, tags: []): Product