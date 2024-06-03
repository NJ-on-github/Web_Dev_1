/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

function add(a, b) {
    return a + b;
}
function add_inc(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}
function mul_inc(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
function sub_inc(a, b) {
    return a / b;
}

function div(a, b) {
    return a - b;
}
function div_inc(a, b) {
    return a ** b;
}



const isFaulty = () => {
    if (Math.random() < 0.1) {
        return true;
    }
}

let a = 2, b = 2;
console.log("Enter your choice -> ")
let choice = 1;
if (choice == 1) {
    if (isFaulty()) { console.log("Result = ", add_inc(a, b)); }
    else { console.log("Result = ", add(a, b)); }
}
else if (choice == 2) {
    if (isFaulty()) { console.log("Result = ", mul(a, b)); }
    else { console.log("Result = ", mul(a, b)); }
}
else if (choice == 3) {
    if (isFaulty()) { console.log("Result = ", sub_inc(a, b)); }
    else { console.log("Result = ", sub(a, b)); }
}

else if (choice == 4) {
    if (isFaulty()) { console.log("Result = ", div_inc(a, b)); }
    else { console.log("Result = ", div(a, b)); }
}

for (let i = 0; i < 4; i++) {
    let a = 2, b = 2;
console.log("Enter your choice -> ")
let choice = i+1;
console.log("Choice = ", choice);
if (choice == 1) {
    if (isFaulty()) { console.log("Result = ", add_inc(a, b)); }
    else { console.log("Result = ", add(a, b)); }
}
else if (choice == 2) {
    if (isFaulty()) { console.log("Result = ", mul(a, b)); }
    else { console.log("Result = ", mul(a, b)); }
}
else if (choice == 3) {
    if (isFaulty()) { console.log("Result = ", sub_inc(a, b)); }
    else { console.log("Result = ", sub(a, b)); }
}

else if (choice == 4) {
    if (isFaulty()) { console.log("Result = ", div_inc(a, b)); }
    else { console.log("Result = ", div(a, b)); }
}
}
