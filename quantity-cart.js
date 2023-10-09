const shoppingCart = [
    { name: 'Shoe', price: 1200, quantity: 2 },
    { name: 'Shirt', price: 1500, quantity: 4 },
    { name: 'Pant', price: 3200, quantity: 4 },
    { name: 'Belt', price: 200, quantity: 2 },
];


function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense)