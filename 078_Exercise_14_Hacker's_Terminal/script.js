let str1 = "Initializing Hacking";
let str2 = "Reading your Files";
let str3 = "Password files Detected";
let str4 = "Sending all passwords and personal files to server";
let str5 = "Cleaning up";

let str_arr = [str1, str2, str3, str4, str5];

let cont = document.body.appendChild(document.createElement("div"));
cont.setAttribute("class", "container");

let state = cont.innerHTML;

// random seconds till 7 for displaying string one after another
function rand_n() {
    let rand = Math.floor(Math.random() * (7 + 1));
    return rand
};

//function to print str and update state
async function print_str(i) {
    // let r= i;
    return new Promise((resolve, reject) => {
        cont.innerHTML += "<br>";
        cont.innerHTML += (str_arr[i]);
        state = cont.innerHTML;
        resolve("Resolved");
    })
}

async function main() {
    for (let i = 0; i < 5; i++) {
        await print_str(i);
        state = cont.innerHTML;
        await blink_in_code();
        cont.innerHTML = nextState; 
    }
}

main();

//generates seconds till which the blinking will continue
function rand_blink() {
    let n = Math.floor(Math.random() * (4 + 1));
    console.log("random blink n -> " + n)
    return (1000 * n);
}

//generates random time between dots
let time_bet_blink = () => {
    let n = Math.floor(Math.random() * (4 + 1));
    return n * 100;
}

//puts three dots after the string
async function blink() {
    return new Promise((resolve, reject) => {
        // let dot = "."
        console.log(cont.innerHTML);
        setTimeout(() => { cont.innerHTML += "." }, 100 / 2);
        setTimeout(() => { cont.innerHTML += "." }, 500 / 2);
        setTimeout(() => {
            cont.innerHTML += "."
        }, 1000 / 2);
        setTimeout(() => { resolve("Resolved"); }, 2000 / 2);
    })
}

// adds a dot after a random time
async function addDot() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { cont.innerHTML += "."; resolve("Resolved"); }, time_bet_blink())
    })
}

// adds dots after the string
async function blink2() {
    // let dot = "."
    console.log(cont.innerHTML);
    await addDot();
    await addDot();
    await addDot();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 500)
    })
}


//to decide the time till when the blinking will continue
async function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, rand_blink());
    })
}

let nextState = state;

//waits for blinking to complete then resets to previous state until a certain time
async function blink_in_code() {
    let toBreak = false;
    // let nextState = state;
    timer().then(() => { toBreak = true; })
    while (!toBreak) {
        await blink2();
        nextState = cont.innerHTML;
        cont.innerHTML = state;
        if (toBreak) break;
    }
    state = nextState;
}