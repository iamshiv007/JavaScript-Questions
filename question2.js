// Question 2: Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

// Method 1

// function isPalindrome(string) {
//     const reverseString = string.split("").reverse().join("")
//     return string.toLowerCase() === reverseString.toLowerCase()
// }

// console.log(isPalindrome("Lol"))
// console.log(isPalindrome("Goal"))

// Method 2
// function isPalindrome(string) {
//     const array = string.split("")
//     const even = array.length % 2 === 0
//     const half = array.length / 2

//     const firstHalf = array.slice(0, even ? half : half - 0.5)
//     const secondHalf = array.slice(even ? half : half + 0.5, array.length)

//     return firstHalf.join("").toLowerCase() === secondHalf.join("").toLowerCase()
// }

// console.log(isPalindrome("Lol"))
// console.log(isPalindrome("Goal"))
// console.log(isPalindrome("Application"))
// console.log(isPalindrome("Bookebook"))

// Method 3
function isPalindrome(string) {
    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left].toLowerCase() !== string[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }

    return true
}

console.log(isPalindrome("Lol"))
console.log(isPalindrome("Goal"))
console.log(isPalindrome("Application"))
console.log(isPalindrome("Bookebook"))
console.log(isPalindrome("TAAT"))
console.log(isPalindrome("Racecar"));
