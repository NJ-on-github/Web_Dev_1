//Javascript is Asynchronous

console.log("line 1");
console.log("line 2");

setTimeout(() => {
    console.log("setTimeOut1");
}, 1000);
setTimeout(() => {
    console.log("setTimeOut2");
}, 0);


//setTimeOut is asynchronous function, it will execute after rest of script.
console.log("line 3");


//callback

const callback = (arg) => {
    console.log(arg);
}

const custom = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    document.body.appendChild(sc);
    sc.onload = () => {
        callback("arguementt");
    }
}

// custom("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", callback);

custom("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// to pass a function we don't write () after the function name, else it would be called immediately

//arrow function needs to be initialized before calling.


// execute this (given as callback) function after execution of this function (the function in which the callback is passed) is over