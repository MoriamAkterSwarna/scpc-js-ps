// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(string) {

    
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}

const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString);
