let a = 1;
let b = "abc";


if(isNaN(a)){
    throw SyntaxError("a is not a number");
}


//we can throw our own error or we can throw particular error by using the built in constructor for standard errors.

//if try throws one error then rest of the try catch block will not be executed.
if(isNaN(b)){
    try{
        // throw SyntaxError("b is not a number");
        throw new Error("b is not a number error 2");
        // or
        throw ReferenceError("b is not a number");
        // or
        throw SyntaxError("b is not a number error 3");
    }
    catch{

    }

}

//parseInt(a)

//try catch

// if we use setTimeout in try block the script will die. because the code setTimeout runs after engine has left the try catch block

try{
    console.log(x)
}
catch(error){
    console.log("printing error")
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}


//finally runs the code even after return, that is why it is needed in functions.
function main(){
    let x = 1;
    try {
        console.log("The sum is ", sum)
        return true
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    finally{
        console.log("files are being closed and db connection is being closed")
    }
}
// let c = main()
console.log("return ->" + main());

//first the finally code executes then the return executes