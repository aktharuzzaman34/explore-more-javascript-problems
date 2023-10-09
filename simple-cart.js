const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'Pant', price: 3200 },
    { name: 'Belt', price: 200 },
];


function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense)