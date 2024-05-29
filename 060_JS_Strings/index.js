let str="string";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);

// console.log(str[6]);
// this is undefined

console.log(str.length);
//.length is not a function, it is a property


let first_name = "good";
let last_name = "person";


//template literal

// use backtick ``

// we can use double quotes inside backtick;

// this is called string interpolation
// inserting variables inside a backtick waali string
let temp = `this is "" this is first name ${first_name} and this is last name ${last_name}`;
console.log(temp);



//escape characters

// printing a "

// console.log("abc"asdflj"); doesn't work
console.log(`abc"asdflj`);  //what we will use most of the time
console.log("abc\"asdflj"); //escape sequence character

let h = "youR";
console.log(h.toLowerCase())
console.log(h.toUpperCase())
console.log(h.slice(1,2)); //from 1 to 1 (2 is not included)
console.log(h.slice(1,3));
console.log(h.slice(1,4));
console.log(h.toUpperCase().slice(1,4));
console.log(h.slice(1)); //prints from 1 to end

// replace

let a = "abcabc"
console.log(a.replace("abc", "yo")); //first occurence of abc will be replaced
//this replaces the first occurrence only


// concatenate
let c1 = "aaa";
let c2 = "bbb";
let c3 = "ccc";
// console.log(c1.concat(b)); //this gives error as b is not defined
console.log(c1.concat(c3));
console.log(c1.concat(c3, "another string"));
console.log(c1.concat(c3, "another", "hello", "yolo"));
//we can also use +

let t = "    spacee    ";
console.log(t);
console.log(t.trim());

// string are immutable
// once we make a string and it is allocated in the memory we can't change it.
console.log(h.toLowerCase()) // functions like this just mean to make a new string from origninal string.

// Additional functions
console.log(c1.charAt(0));
console.log(c1.charAt(5));
console.log(h.indexOf("uR"));
console.log(last_name.indexOf("er"));
console.log(last_name.indexOf("f")); //returns -1 because "f" does'nt exist in last_name;
console.log("testing");
console.log(first_name.startsWith("G"));
console.log(first_name.startsWith("g"));
console.log(first_name.endsWith("d"));
console.log(first_name.endsWith("D"));
