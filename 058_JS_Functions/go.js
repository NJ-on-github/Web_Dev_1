function wow(letter) {
    let i = 1;
    while(i<=10){
        console.log("the epic letter " + letter);
        i++;
    }
}

wow("s");

function wow2(letter) {
    let i = 1;
    while(i<=10){
        console.log("the epic letter " + letter);
        i++;
    }
}

wow2("s");

function sum(a, b) {
    return a+b;
}

res = sum(4,5);
console.log("sum =", res);
console.log("sum =", res, "sdafasdfsdf");

function sum_with_5 (a, b, c=5){
    // c has default value of 5 and it is optional, it will be overwritten if we pass value for c
    return a+b+c;
}
console.log("sum with 5 =", sum_with_5(5,5));
console.log("sum with 5 =", sum_with_5(5,5,2));

function sum_3(a, b, c) {
    console.log("sum_3 =", a+b+c);
    console.log(a, b, c);
}

sum_3(1);

// output =>
    // sum_3 = NaN
// 1 undefined undefined

//NaN stand for not a number

function sum_4(a, b, c = 1) {
    console.log("sum_3 =", a+b+c);
    console.log(a, b, c);
}

sum_4(1);


const fun_const = (x) => {
    console.log("Value of x = ", x);
}

// fun_const is a variable as well as function

fun_const(10);
fun_const(25);

// function invocation is function call
