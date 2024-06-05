//getElementByClassName
// let boxes_var = document.body.getElementsByClassName("box")[2];
console.log('let boxes_var = document.getElementsByClassName("box");');
let boxes_var = document.getElementsByClassName("box");
console.log(boxes_var);


//getElementById
console.log('let id_var = document.getElementById("getMe").style.backgroundColor = "green";');
let id_var = document.getElementById("getMe").style.backgroundColor = "green";

//queryseletor
console.log('let q_s = document.querySelector(".box").style.backgroundColor = "blue"');
let q_s = document.querySelector(".box").style.backgroundColor = "blue"
//.box because we use CSS selectors here.
//this works on first element that matches the .box selectors
//this returns the element.

//queryselectorAll
console.log('let q_sa= document.querySelectorAll(".box");');
let q_sa= document.querySelectorAll(".box");
console.log(q_sa);
//this returns a collection, a Nodelist

console.log('q_sa.forEach((e) => console.log(e));');
q_sa.forEach((e) => console.log(e));
//we can use any for loop here

console.log('q_sa.forEach((e) => e.style.backgroundColor="maroon");');
q_sa.forEach((e) => e.style.backgroundColor="maroon");


//getElementByTagName
console.log('let Tagname = document.getElementsByTagName("div");');
let Tagname = document.getElementsByTagName("div");
//this returns HTMLCollection
console.log(Tagname);


//getElementsByName
console.log('let getname = document.getElementsByName("name");');
let getname = document.getElementsByName("name");
console.log(getname);

//matches
console.log('Tagname[2].matches("#getMe");');
console.log(Tagname[2].matches("#getMe"));
//we have to use CSS selectors here, because it matches CSS selectors (how we would target it in the CSS)

//closest
console.log('Tagname.matches("#getMe");');
console.log(Tagname[2].closest(".container"));
//Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
//searches the element then searches its parent, then searches its parent

//contains
// document.contains(".container"); //doesn't work because it works on nodes

// console.log('document.getElementsByClassName("container").contains(".container");');
// console.log(document.getElementsByClassName("container").contains(Tagname[2]));
console.log('document.getElementsByClassName("container")');
console.log(document.getElementsByClassName("container"));

// The following does not work because getElementsByClassName returns a collection wherear querSelector returns a DOM element.
// console.log('document.getElementsByClassName("container").contains(Tagname[2])');
// console.log(document.getElementsByClassName("container").contains(Tagname[2]));

console.log('document.querySelector(".container").contains(Tagname[2])');
console.log(document.querySelector(".container").contains(Tagname[2]));

console.log(Tagname[2])

console.log('document.querySelector(".container").contains(Tagname[0])');
console.log(document.querySelector(".container").contains(Tagname[0]));
//returns true if asked an element contains itself.


// console.log(document.querySelector(".container").contains(document.querySelector(.body)));
console.log('document.querySelector(".container").contains(document.querySelector("body"));');
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log('document.querySelector("body").contains(document.querySelector(".container"));');
console.log(document.querySelector("body").contains(document.querySelector(".container")));