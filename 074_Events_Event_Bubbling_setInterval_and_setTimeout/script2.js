// document.querySelector(".child").addEventListener("click", () => {
//     console.log("child was clicked!");
// })

// document.querySelector(".childContainer").addEventListener("click", () => {
//     console.log("childContainer was clicked!");
// })

// document.querySelector(".container").addEventListener("click", () => {
//     console.log("container was clicked!");
// })

// //stopPropagation
// document.querySelector(".child").addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("child was clicked!");
// })

// document.querySelector(".childContainer").addEventListener("click", () => {
//     console.log("childContainer was clicked!");
// })

// document.querySelector(".container").addEventListener("click", () => {
//     console.log("container was clicked!");
// })

//removeEventListener
//its not working

const btn = document.querySelector(".child");
btn.addEventListener("click", () => {
    console.log("child was clicked!");
})
btn.removeEventListener("click", () => {
    console.log("child was clicked!");
})

//setInterval()

let colorBox = document.createElement("div");
colorBox.setAttribute("class", "color-box");
document.body.appendChild(colorBox);
colorBox.style.width="56px";
colorBox.style.height="56px";
colorBox.style.backgroundColor="green";

let rand_value = ()=> Math.floor(Math.random() * 255);
let rand_rgb = () => `rgb(${rand_value()}, ${rand_value()}, ${rand_value()})`;

setInterval(() => {colorBox.style.backgroundColor = rand_rgb(); console.log("setInterval")}, 1000);


//clear interval
// clearInterval(1);
// stops the setInterval
// setInterval(() => {clearInterval(1);},3000)

//setTimeOut()
setTimeout(() => {colorBox.style.backgroundColor = "black"; console.log("setTimeOut")}, 4000);
//executes once after the given time is over

//clearTimeout()
clearTimeout(1);
clearTimeout(1);
//clear the setTimeOut
// I think it works only once either on setInterval or setTimeOut.