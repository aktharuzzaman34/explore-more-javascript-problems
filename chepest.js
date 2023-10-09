const phones = [
    { name: 'samsung', camera: 64, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 32, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '512gb', price: 136000, color: 'silver' },
    { name: 'Xiaomi', camera: 50, storage: '32gb', price: 30000, color: 'silver' },
    { name: 'oppo', camera: 48, storage: '32gb', price: 16000, color: 'silver' },
    { name: 'Oneplus', camera: 84, storage: '32gb', price: 56000, color: 'silver' },
    { name: 'Nokia', camera: 8, storage: '32gb', price: 6000, color: 'silver' },
];

function cheapestPhones(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);


//  camera
function highestCamera(camera) {
    let highest = camera[0];
    for (let i = 0; i < camera.length; i++) {
        const highCamera = camera[i];
        if (highCamera.camera > highest.camera) {
            highest = highCamera;
        }
    }
    return highest
}

const mySector = highestCamera(phones);
console.log(mySector);