//The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order confirmed");
        }, Math.random()*(1000-500)+200);
    });
}

placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
placeOrder().then(resolve => console.log(resolve));
