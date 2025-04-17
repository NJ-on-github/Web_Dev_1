import fs from "fs/promises";

let a = await fs.readFile("file.txt");
console.log(a);
console.log("test");

await fs.appendFile("file.txt", "Appended Text");