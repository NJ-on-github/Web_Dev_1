let btn = document.getElementById("btn");

//click
btn.addEventListener("click", () => {console.log("Clicked!")});
// btn.addEventListener("click", () => {document.querySelector(".box").style.backgroundColor = "red"});

//dblclick
// btn.addEventListener("dblclick", () => {document.querySelector(".box").style.backgroundColor = "green"});

//mousedown
// btn.addEventListener("mousedown", () => {document.querySelector(".box").style.backgroundColor = "blue"});
//immediately after pressing the button

//mouseleave
btn.addEventListener("mouseleave", () => {document.querySelector(".box").style.backgroundColor = "black"});
//when we move the mouse over and then move the mouse out (clicked or not doesn't matter)


//does'nt work

//mousecenter
// btn.addEventListener("mousecenter", () => {document.querySelector(".box").style.backgroundColor = "red"});

//mouseout
// btn.addEventListener("mouseout", () => {document.querySelector(".box").style.backgroundColor = "red"});

//contextmenu
btn.addEventListener("contextmenu", () => {document.querySelector(".box").style.backgroundColor = "red"});


// key down
document.addEventListener("keydown", (e) => {    console.log(e);})
document.addEventListener("keydown", (e) => {    console.log(e.key);})