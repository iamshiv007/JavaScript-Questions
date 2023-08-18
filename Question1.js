// Q2: Given a string, reverse each word in the sentence

// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG


// Answer 1
// const string = "Welcome to this Javascript Guide!"

// const reverseFun = (string) => {
//     const array = string.split(" ")

//     const newarray = array.map((element) => (
//         element.split("").reverse().join("")
//     )).join(" ")

//     return newarray
// }

// console.log(reverseFun(string))


// Answer 2
// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }

// console.log(reverseEachWord)


// Answer 3
function reverseWords(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    return reversedWords.join(' ');
}

const inputSentence = "Welcome to this Javascript Guide!";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
