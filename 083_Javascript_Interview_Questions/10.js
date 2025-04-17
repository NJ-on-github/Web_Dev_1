//The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffeeType) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${coffeeType} is ready!`)
        }, Math.random() * (5000 - 1000) + 1000)
    })
}

brewCoffee('Cappuccino').then(resolve => console.log(resolve));
brewCoffee('Latte').then(resolve => console.log(resolve));
brewCoffee('Americano').then(resolve => console.log(resolve));
brewCoffee('Flat White').then(resolve => console.log(resolve));
brewCoffee('Macchiato').then(resolve => console.log(resolve));
brewCoffee('Mocha').then(resolve => console.log(resolve));
brewCoffee('Espresso').then(resolve => console.log(resolve));
brewCoffee('Ristretto').then(resolve => console.log(resolve));