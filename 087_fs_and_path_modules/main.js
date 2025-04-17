const fs = require('fs');
// console.log(fs)

console.log("start")
fs.writeFileSync("file.txt", "Hey Hey Hey");
console.log("end");
//this writes a blocking code, main thread will be blocked until the file is written

console.log("start 2")
fs.writeFile("file2.txt", "Hey Hey Hey 2", ()=> {
    console.log("file2 created");
    console.log("running readFile");
    fs.readFile("file2.txt", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    });
    // //above or
    // fs.readFile("file2.txt","UTF-8", (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    // });
});

fs.appendFile("file2.txt", "Appended Text", (e,d) => {
    console.log(e)
    console.log(d)

    console.log("file2 appended");
});
console.log("end 2");