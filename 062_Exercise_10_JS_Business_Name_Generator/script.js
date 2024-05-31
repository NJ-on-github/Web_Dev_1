// Adjectives:
// Crazy
// Amazing
// Fire

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

let adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
}

let shop = {
    1: "Engine",
    2: "Foods",
    3: "Garments",
}

let aw = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
}

let ch;
// let random = () => {
//     console.log("Creating random");
//     return Math.floor((Math.random() * 3) + 1);
// }
function random() {
    return Math.floor((Math.random() * 3) + 1);
}

// console.log(random());
// console.log(random());
// console.log(random());

console.log("Your Business name -> ");
console.log(adj[random()] + " " + shop[random()] + " " + aw[random()]);