// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let ages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -100];
let arr = [1, 2, 3, 4, 5, -100];

function sumPositives(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] < 0) break;
        sum += array[i];
    }
    // array.forEach(element => {
    //     if(element < 0) break;
    //     console.log("inside for each");
    //     console.log(element);
    //     sum += element;
    // });
    return sum;
}

console.log(sumPositives(ages));
console.log(sumPositives(arr));