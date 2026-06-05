// Product Array
let products = [
    {
        name: "tablet",
        category: "electronics",
        price: 500,
        inventoryCount: 10
    }, 
    {
        name: "jeans",
        category: "apparel",
        price: 50,
        inventoryCount: 25
    },
    {
        name: "blueberries",
        category: "groceries",
        price: 5,
        inventoryCount: 30
    },
    {
        name: "lamp",
        category: "household",
        price: 20,
        inventoryCount: 15
    },
    {
        name: "dog food",
        category: "pet",
        price: 30,
        inventoryCount: 13
    }
];

// Dynamic Discount
for (let product of products) {
let discount = 0; // default discount before switch runs

    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }

product.discountedPrice = product.price - product.price * discount; // product.discountedPrice, not discountedPrice bc we want the new property to apply to each product object
}

// Special Customer Discounts
function applyCustomerDiscount(total, customerType) { // used function for cleaner code (less repetition), instead of just if/else
    if (customerType === "student") {
        return total * .95;
    } else if (customerType === "senior") {
        return total * .93;
    } else {
        return total;
    }
}