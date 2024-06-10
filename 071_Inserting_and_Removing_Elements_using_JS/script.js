//innnerHTML
console.log('document.querySelector(".container").innerHTML;');
console.log(document.querySelector(".container").innerHTML);
// prints the HTML inside

console.log('document.querySelector(".box").innerHTML;');
console.log(document.querySelector(".box").innerHTML);


//innerTEXT
console.log('document.querySelector(".container").innerText;');
console.log(document.querySelector(".container").innerText);
console.log('document.querySelector(".box").innerText;');
console.log(document.querySelector(".box").innerText);  


//outerHTML
console.log('document.querySelector(".container").outerHTML;');
console.log(document.querySelector(".container").outerHTML);
//return the lement itself as well

//tagname
console.log('document.querySelector(".container").tagName;');
console.log(document.querySelector(".container").tagName);
//applicable for element

//nodeName
console.log('document.querySelector(".container").nodeName;');
console.log(document.querySelector(".container").nodeName);
//applicable for element, text node, comment node etc.

//textContent
console.log('document.querySelector(".container").textContent;');
console.log(document.querySelector(".container").textContent);
// console.log(document.querySelector(".container").textContent = "blah");
// console.log(document.querySelector(".container").textContent);

// returns just the text inside the element.

//hidden
console.log('document.querySelector(".container").hidden;');
console.log(document.querySelector(".container").hidden);
console.log('document.querySelector(".container").hidden = true;');
console.log(document.querySelector(".container").hidden = true);
console.log(document.querySelector(".container").hidden = false);

//changing innerHTML
console.log('document.querySelector(".box").innerHTML = "hello";');
console.log(document.querySelector(".box").innerHTML = "hello");

//hasAttribute
console.log('document.querySelector(".box").hasAttribute("class");');
console.log(document.querySelector(".box").hasAttribute("class"));
console.log('document.querySelector(".box").hasAttribute("style")');
console.log(document.querySelector(".box").hasAttribute("style"));
// returns false because it works for inline styles

//getAttribute
console.log('document.querySelector(".box").getAttribute("class");');
console.log(document.querySelector(".box").getAttribute("class"));
console.log('document.querySelector(".box").getAttribute("style")');
console.log(document.querySelector(".box").getAttribute("style"));

//setAttribute
console.log('document.querySelector(".box").setAttribute("class", "card");');
console.log(document.querySelector(".box").setAttribute("class", "card"));

console.log('document.querySelector(".card").getAttribute("class");');
console.log(document.querySelector(".card").getAttribute("class"));

//attributes
console.log('document.querySelector(".card").attributes;');
console.log(document.querySelector(".card").attributes);
// to get all the attributes the element has.

console.log(document.querySelector(".card").parentElement);
//removeAttribute
console.log('document.querySelector(".card").removeAttribute("class");');
console.log(document.querySelector(".card").removeAttribute("class"));
console.log(document.querySelector(".card"));

//designMode
document.designMode = "on";

//data attribute

// current HTML
console.log('Current Html -> document.querySelector(".container").outerHTML;');
console.log(document.querySelector(".container").outerHTML);

//
console.log('document.querySelectorAll(".box").forEach((e) => console.log(e.dataset));'); //e.dataset);
console.log(document.querySelectorAll(".box").forEach((e) => console.log(e.dataset)));
// anything written after data- is available as key value pair.


//Creating Element
let div = document.createElement("div");
console.log(div);
div.innerHTML = "Created by JS";
div.setAttribute("class", "new-div");

//append , using append to insert the element in HTML
console.log('document.querySelector(".container").append(div);');
document.querySelector(".container").append(div);
console.log('document.querySelector(".container").innerHTML;');
console.log(document.querySelector(".container").innerHTML);
//div is appended at the end of the ".container"

//Before
let div2 = document.createElement("div");
// console.log(div);
div2.innerHTML = "Created by JS 2";
div2.setAttribute("class", "new-div");

console.log('document.querySelector(".container").before(div2);');
document.querySelector(".container").before(div2);
// element is inserted before .container

//after
console.log('document.querySelector(".container").after(div);');
// document.querySelector(".container").after(div);
//the div element that was initially created and appended to the .container will be moved and placed after the .container. This is because div is a reference to the same element, and you are not creating a new one.
// so instead we would have to create a new div.
let div3 = document.createElement("div");
// console.log(div);
div3.innerHTML = "Created by JS 3";
div3.setAttribute("class", "new-div");

console.log('document.querySelector(".container").after(div3);');
document.querySelector(".container").after(div3);

// element is inserted after .container

console.log(document.body.innerHTML);


//prepend
let div4 = document.createElement("div");
// console.log(div);
div4.innerHTML = "Created by JS 4";
div4.setAttribute("class", "new-div");

console.log('document.querySelector(".container").after(div4);');
document.querySelector(".container").prepend(div4);
// inserts inside and at the beginning of .container


//replace with
let div5 = document.createElement("div");
// console.log(div);
div5.innerHTML = "Created by JS 5";
div5.setAttribute("class", "new-div");

console.log('document.querySelector(".container").replaceWith(div5);');
// document.querySelector(".container").replaceWith(div5);
//replaces the .container with div5


// This was dynamically inserted.

//insertAdjacentHTML / insertAdjacentText / insertAdjacentElement
const cont = document.querySelector(".container");
console.log(cont);

// cont.insertAdjacentHTML("afterbegin", "String after begin");
// cont.insertAdjacentHTML("beforebegin", "String before begin");
// cont.insertAdjacentHTML("beforeend", "String before end");
// cont.insertAdjacentHTML("afterend", "String after end");

// remove()
console.log('document.querySelector(".container").remove();');
// cont.remove();

//
let new_cont = document.createElement("div");
new_cont.innerHTML = "";
new_cont.setAttribute("class", "new-container good red");
document.body.insertAdjacentElement("afterbegin", new_cont);

//classList
console.log(document.body.innerHTML);
console.log('document.querySelector(".red").classList);');
console.log(document.querySelector(".red").classList);
//gives classes as collection

//className
console.log('document.querySelector(".red").className);');
console.log(document.querySelector(".red").className);
//gives the classes as string

//classList.add
console.log('document.querySelector(".red").classList.add("blue");');
console.log(document.querySelector(".red").classList.add("blue"));
console.log(document.querySelector(".red").classList);
//Class blue is added
//Even if this is executed multiple times, the class is added only once because it is already present.
// Multiple times the same class won't be added.

//classList.remove
console.log('document.querySelector(".red").classList.remove("blue");');
console.log(document.querySelector(".red").classList.remove("blue"));
console.log(document.querySelector(".red").classList);
//Class blue is removed


//classList.toggle
console.log('document.querySelector(".red").classList.toggle("blue");');
console.log(document.querySelector(".red").classList);
console.log(document.querySelector(".red").classList.toggle("blue"));
console.log(document.querySelector(".red").classList);
//Class blue is added

