import path from "path"
let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video87\\harry.txt";
console.log(path.extname (myPath))
console.log(path.dirname(myPath))
console.log(path.basename(myPath))

//joins two paths automatically adding the correct slashes
console.log(path.join("C:/", "programs\\harry.txt"))