async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}


// await waits for promise to settle

// without await
// {
//     async function main() {
//         console.log("Do something 1")
//         console.log("Do something 2")
//         console.log("Loading data")
//         let data = getData()
//         console.log(data)
//         console.log("Process data")
//     }
//     main()
// }



//with await
// {
//     async function main() {
//         console.log("Do something 1")
//         console.log("Do something 2")
//         console.log("Loading data")
//         let data = await getData()
//         console.log(data)
//         console.log("Process data")
//     }
//     main()
// }

//function with await in it needs to async because how the the hell can synchronus wait ? If something needs to wait it cannot be in sync.

//await keyword is used to wait for the promise to settle.

async function try1() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // promise to bring data
    //this gives raw data in chunks
    //by defoult it passes get request
    console.log(x);
    console.log("printing json")
    let json = await x.json(); //promise to parse data
    // parses the raw data to json
    // console.log(json);
    return json
}

// try1();


// {
//     async function main() {
//         console.log("Do something 1")
//         console.log("Do something 2")
//         console.log("Loading data")
//         let data = await try1()
//         console.log(data)
//         console.log("Process data")
//     }
//     main()
// }


//get request is default
//post request is used to send data securely, for ex login. We can send files and large data as well
// put request is used to update data
//delete request to delete something on server

async function try2() {
    console.log("starting function")
    let y = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    console.log("Printing Y")
    console.log(y);
    console.log("Printing Y json")
    let r = await y.json();
    console.log(r);
    
}

try2();