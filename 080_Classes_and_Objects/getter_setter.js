class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}


// get code executes when the property is read
// get code executes when the property is set

let user = new User("Joh");
console.log(user.name); // John
user = new User(""); // Name is too short.
console.log("user.name -> " + user.name);



//another example
let person = {
    firstName: "John",
    lastName: "Doe",
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};

person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith

