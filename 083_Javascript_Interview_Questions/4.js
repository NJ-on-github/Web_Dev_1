//The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let password = "<PASSWORD123>";
function passwordValidator(password) {
    if (password.length < 8) {
        return false;
    }
    let containsSmall = false;
    let containsBig = false;
    let containsDigit = false;
    for (const char of password) {
        if (!containsBig && char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            containsBig = true;
        }
        if (!containsSmall && char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            containsSmall = true;
        }
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            containsDigit = true;
            break;
        }
    }
    // console.log(containsBig);
    // console.log(containsSmall);
    // console.log(containsDigit);
    if (containsSmall && containsBig && containsDigit) {
        return true;
    }
    return false;
}

console.log(passwordValidator(password));