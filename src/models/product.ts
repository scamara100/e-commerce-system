export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: []

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, tags: []) {
        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.discountPercentage = discountPercentage
        this.rating = rating
        this.stock = stock
        this.tags = tags
    }

    displayDetails() {
        return `Title : ${this.id} 
        Description: ${this.description} 
        Category: ${this.category}
        Price: ${this.price}
        Discount Percentage: ${this.discountPercentage}
        Rating: ${this.rating}
        Stock: ${this.stock}
        Taga: ${this.tags}`
    }

    getPriceWithDiscount() {
        return this.price * (1 - this.discountPercentage)
    }
}