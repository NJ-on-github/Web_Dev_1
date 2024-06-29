let sampleObj = {
    name: "John",
    age: 30,
    country: "USA"
}

//javascripts objects have special property called prototype. It is either NULL or represents another object

//prototypal inheritance

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; // sets rabbit. [[Prototype]] = animal
console.log(rabbit);
console.log(rabbit.eats);



class human_clone {
    constructor(score) {
        console.log("human made");
        this.score = score;
    }
    speak() {
        console.log("human speaks");
    }
    walk() {
        console.log("human walks");
    }
}

let new_h = new human_clone(45);
new_h.walk();
new_h.speak();
console.log(new_h.score);

//inheriting a class
// we have to call constructor of parent class also using super
class big_human extends human_clone {
    constructor(score, height) {
        console.log("big human is created");
        super(score);
        this.height = height + "cm";
    }

    speaks() {
        console.log("big human speaks");
        super.speak(); //calling speak function of parent
    }
}

let new_Big_Human = new big_human(100, 5);
console.log(new_Big_Human)

new_Big_Human.speaks();
new_Big_Human.walk();

//static functions


//instanceof
// object instanceof class
console.log(new_Big_Human instanceof Object)
console.log(new_Big_Human instanceof big_human)
console.log(new_Big_Human instanceof human_clone)
console.log(new_Big_Human instanceof User) // from other script