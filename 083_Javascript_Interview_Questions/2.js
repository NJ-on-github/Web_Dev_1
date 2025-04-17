// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 7]

function double(arr) {
    if (arr.length == 1) {
        return [arr[0] * 2];
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr[i + 1]) {
                arr[i] = arr[i] * 2
                i++;
            }
            else{
                arr[i] = arr[i] * 2;
            }
        }
    }
    return arr;
}
console.log(double(arr));