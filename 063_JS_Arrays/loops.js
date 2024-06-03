let arr = [45, 74, 51, 66, 77];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

arr.forEach((value, index, array) => { console.log(value, index, array); })
arr.forEach((value, index, array, a) => { console.log(value, index, array, a); })

//for in loop

let obj = {
    aa: 1,
    bb: 2,
    cc: 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) { // to take properties which are no inherited we can use hasOenProperty.call
        const element = obj[key];
        console.log(key);
        console.log(element);
    }
}


//forof loop

for (const iterator /* or value */ of arr) {
    console.log(iterator);
}

//map
console.log(arr);
let newarr = arr.map(e => { return e ** 2; }) // no need of () when there is only one arguement.
console.log(newarr);

//filter
console.log(arr);
const gts = (e) => {
    if (e > 60) {
        console.log("Value of gts = " + gts);
        console.log("True or not = " + e);
        return true;
    }
    console.log("Value of gts = " + gts);
    console.log("True or not = " + e);
    return false;
}

//both below are same
console.log(arr.filter(gts));
console.log(arr.filter((e) => {
    if (e > 60)
        return true;
    return false;
}));



//above part is a bit messed up


//reduce
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const blu = (a, b) => {
    return a * b;
}
const add = (a, b) => {
    // console.log("running");
    return a + b;
}


console.log(arr2.reduce(blu)); //takes a function and applies it on first two elements, then the result with next element and so on.
console.log(arr2.reduce(add));

// let arr3 =[7];
// console.log(arr3.reduce(blu)); //takes a function and applies it on first two elements, then the result with next element and so on.


//from
Array.from("abcde"); //Array is a function.