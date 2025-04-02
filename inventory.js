// Inventory Management System using OOP in JavaScript

// Product Class
class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            console.log(`${quantity} units added to ${this.name}. New stock: ${this.stock}`);
        } else {
            console.log(`Invalid stock quantity for ${this.name}.`);
        }
    }

    sell(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`${quantity} units of ${this.name} sold. Remaining stock: ${this.stock}`);
        } else {
            console.log(`Not enough stock of ${this.name} to sell.`);
        }
    }
}

// Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Product ${product.name} added to inventory.`);
    }

    sellProduct(productId, quantity) {
        let product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log(`Product with ID ${productId} not found in inventory.`);
        }
    }

    checkStock(productId) {
        let product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock of ${product.name}: ${product.stock} units.`);
        } else {
            console.log(`Product with ID ${productId} not found in inventory.`);
        }
    }
}

// Testing the System
console.log("\n--- Inventory Management System Test ---");

let inventory = new Inventory();


let product1 = new Product("Laptop", 101, 50000, 10);
let product2 = new Product("Smartphone", 102, 20000, 5);


inventory.addProduct(product1);
inventory.addProduct(product2);


product1.addStock(5);  
product2.addStock(3);  

inventory.sellProduct(101, 7); // Sells 7 laptops
inventory.sellProduct(102, 2); // Sells 2 smartphones
inventory.sellProduct(102, 10); // Tries to sell 10 smartphones (should fail)


inventory.checkStock(101);
inventory.checkStock(102);
