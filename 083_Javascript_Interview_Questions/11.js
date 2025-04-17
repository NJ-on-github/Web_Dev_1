//The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts (array, key, value) {
    // let arr = [];

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i][key] == value) {
    //         arr.push(array[i]);
    //     }
    // }
    // return arr;

    return array.filter(producdddt => producdddt[key] == value);
}

let products = [
    { name: 'apple', category: 'food' },
    { name: 'banana', category: 'food' },
    { name: 'carrot', category: 'food' },
    { name: 'milk', category: 'not food' },
    { name: 'eggs', category: 'not food' },
    { name: 'bread', category: 'not food' },
]
console.log(filterProducts(products, 'category', 'food'));
