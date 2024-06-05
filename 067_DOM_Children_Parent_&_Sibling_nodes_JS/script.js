//Note that many of the following elements return what looks like an array, but it is a collection.

console.log("document.body.childNodes");
console.log(document.body.childNodes);
console.log("document.body.childNodes[1]");
console.log(document.body.childNodes[1]);
console.log("document.body.childNodes[1].childNodes");
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
console.log("cont");
console.log(cont);
console.log("cont.childNodes");
console.log(cont.childNodes);

//First element child
console.log("First element child");
cont.firstElementChild.style.color = "orange";
console.log("Last element child");
cont.lastElementChild.style.color = "blue";

//Parent element
console.log("Parent Element");
console.log("cont.parentElement");
console.log(cont.parentElement);
console.log("cont.lastElementChild.parentElement");
console.log(cont.lastElementChild.parentElement);

//children
console.log("document.body.firstElementChild.children")
console.log(document.body.firstElementChild.children) //children means all element notes

//next element sibling
console.log("document.body.firstElementChild.children[3].nextElementSibling");
console.log(document.body.firstElementChild.children[3].nextElementSibling);

//previous element sibling
console.log("document.body.firstElementChild.children[3].previousElementSibling");
console.log(document.body.firstElementChild.children[3].previousElementSibling);


//table
let t = document.body.children[1];
console.log("t");
console.log(t);
console.log("t.rows");
console.log(t.rows);

//has child nodes
console.log("document.body.firstElementChild.hasChildNodes()");
console.log(document.body.firstElementChild.hasChildNodes());

//typeof window, typeof document
console.log("typeof window, typeof document");
console.log(typeof window, typeof document);