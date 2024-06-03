let arr = [];

let n = prompt("Enter your number to find factorial of -> ");

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

const mul = (a,b) => {
    return a*b;
}

console.log(arr.reduce(mul));