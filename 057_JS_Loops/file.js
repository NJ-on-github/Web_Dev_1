//Basic for loop

let obj =  {
    name: "John",
    age: 30,
    company: "titanminds"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}

for (const key in obj) {
        console.log(key);
}