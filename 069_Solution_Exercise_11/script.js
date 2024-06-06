let n = 8;

console.log('Array(n)');
console.log(Array(n));
console.log('Array(n).keys()');
console.log(Array(n).keys());
// console.log('typeof Array(n).keys()');
// console.log(typeof Array(n).keys());
console.log('arr1');
let arr1 = (Array(n+1).keys());
console.log(arr1)
function factorial (num){
    let arr = Array.from(Array(num+1).keys());
    
    // console.log(arr.slice(1,));
    console.log(arr.slice(1,).reduce((a,b) =>{ return a*b;}));
    
    // console.log(arr.slice(1,).reduce((a,b) => a*b)); 
    //shortcut for arrow method
}

factorial(8);