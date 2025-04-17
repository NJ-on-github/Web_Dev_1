// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied bv 2 after a delay of 500 milliseconds.
async function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 500)
    })
}


async function arrim(array){
    for (let i = 0; i < array.length; i++) {
        await timer();
        array[i] = array[i] * 2;
    }
    return array;
    // array.forEach(element => {
    //     await timer();
    //     element = element * 2;
    // });
}

async function asyncArrayMap(arr) {
    // await wait();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr.map(x => x * 2))
        }, 500)
    })
}

// let r = await asyncArrayMap([1, 2, 3, 4, 5]);

asyncArrayMap([1, 2, 3, 4, 5]).then(r => console.log(r))
arrim([1, 2, 3, 4, 5]).then(r => console.log(r))