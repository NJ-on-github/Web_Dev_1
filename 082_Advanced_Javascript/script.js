async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//iife - immediately invoke function expression
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

//runs the function as soon as it is defined

//destructuring

let x, y = [2,3];
console.log("x ->" + x);
console.log("y ->" + y);

let [a, b] = [2, 3, 7];
console.log("a ->" + a);
console.log("b ->" + b);

//rest is name of variable
let [p,q, ...rest] = [4, 5, 6, 7, 8, 9]
console.log("p ->" + p);
console.log("q ->" + q);
console.log("rest ->" + rest);

//to extract some pro 
//we can destructure objects as well

let obj = {
    name_: "John",
    age: 30,
    country: "USA"
}

let {name_, age} = obj;
console.log("name_ -> " + name_);
console.log("age -> " + age);


//spread
function sum (a, b, c) {
    return a + b + c
}
let arr = [1, 4, 6];
console.log(sum(arr[0], arr[1], arr[2]))
console.log(sum(...arr)) //this is spread operator

let obj2 = {...arr};
console.log(obj2)

// When concatenating a string with an object, JavaScript implicitly converts the object to a string. The default conversion of an object to a string results in [object Object]. Therefore, this line will output:
console.log("obj2" + obj2)


//hoisting
// var parts seems to move up
//can happen only with var and not with let or const
// also happens with function

// calling function a 

function a() {}
//it works


//calling function a
let a = () => {

}

//this will not work
