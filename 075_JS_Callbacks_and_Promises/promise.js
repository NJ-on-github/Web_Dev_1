// console.log('This is Promises');
// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Harry")
//         }, 3000);
//     }
// })
// prom1.then((a) => {
//     console.log(a)
// })


// function walkDog (callback) {
//     setTimeout(()=> {
//         console.log("You walk the dog ");
//         callback();
//         console.log("walkDog over!")
//     }, 1500);
// }

// function cleanKitchen (callback) {
//     setTimeout( () => {
//         console.log("You clean the kitchen ");
//         callback();
//     }, 2500);
// }
// function takeOutTrash (callback) {
//     setTimeout(() => {
//         console.log("You take out the trash >>");
//         callback();
//     }, 500);
// }

// walkDog (() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores!"));
//     });
// });

let prom1 = new Promise((resolve, reject) => {
    console.log("Running Promise 1");
    let a = Math.random();
    if (a > 0.1) {
        reject("No random number was not supporting you 1")
    }
    else {
        setTimeout(() => {
            console.log("Yes Random no has been generated. 1")
            resolve("Resolved 1")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log("promise 1 then ->" + a)
}).catch((a) => {
    console.log("promise 1 catch ->" + a)
}).finally(() => { console.log("promise 1 complete !") })



let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log("Running Promise 2");
    if (a < 0.9) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes Random no has been generated. 2")
            resolve("Resolved 2")
        }, 1000);
    }
})

prom2.then((a) => {
    console.log("promise 2 then ->" + a);
}).catch((a) => {
    console.log("promise 2 catch ->" + a);
    console.log(a)
}).finally(() => { console.log("promise 2 complete !") })


//Promise API 6 methods

//promise.all
// {

//     console.log("Running promise all")
//     let first2 = Promise.all([prom1, prom2])
    
//     first2
//     .then((a) => {
//         console.log("Running promise all then")
//         console.log(a)
//     }).catch((err) => {
//         console.log("Running promise all catch")
//         console.log("Promise all error ->" + err)})
        
//         //Runs all the promises and then runs the then function and then returns the result if all the promises were resolved.
// }
        
        // settle means either resolve or either rejected.

 //Promise.allSettled
// {       
//     console.log("Running promise allSettled");
//     let n3 = Promise.allSettled([prom1, prom2]);
//     n3
//     .then((a) => {
//         console.log("Running promise allSettled then")
//         console.log(a)
//     })
//     // .catch((err) => {
//         //     console.log("Running promise allSettled catch")
//     //     console.log(err)
//     // })

//     // returns an array of Object with status and value or status and reason if it was rejected.
//     // only then part is required
// }
    
    
// //Promise.race
// {
// console.log("Running promise race");
// let n4 = Promise.race([prom1, prom2]);
// n4    .then((a) => {
//         console.log("Running promise race then")
//         console.log(a)
//     })
//     .catch((err) => {
//         console.log("Running promise race catch")
//         console.log("Promise race error ->" + err)
//     })

// //     // returns the result/error of the promise which gets resolved first.
// }


// //Promise.any
// {
//     console.log("Running promise any");
//     let n6 = Promise.any([prom1, prom2]);
//     n6
//         .then((a) => {
//                 console.log("Running promise any then")
//                 console.log(a)
//     })
//     .catch((err) => {
//             console.log("Running promise any catch")
//             console.log(err)
//         })
    
//     // returns the first resolved promise. Throws aggregate error if all promises are rejected.
// }


// Promise.resolve
// {
//     console.log("Running promise resolve");
//     let n7 = Promise.resolve("Resolved");
//     n7
//     .then((a) => {
//         console.log("Running promise resolve then")
//         console.log(a)
//     })
//     .catch((err) => {
//         console.log("Running promise resolve catch")
//         console.log(err)
//     })

//     //makes a promise as if it is already resolved and returns the given value.
// }


// Promise.reject
// {
//     console.log("Running promise reject");
//     let n8 = Promise.reject("Rejected");
//     n8
//     .then((a) => {
//         console.log("Running promise reject then")
//         console.log(a)
//     })
//     .catch((err) => {
//         console.log("Running promise reject catch")
//         console.log(err)
//     })

//     //makes a promise as if it is already rejected and returns the given value.
// }