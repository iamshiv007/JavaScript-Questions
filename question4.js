// Q4. Question: Write a function called capitalizeWords that takes a sentence as input and returns a new sentence where each word's first letter is capitalized.

function capitalizeWords(string) {
    const array = string.split(" ")
    const newArray = array.map((ele) => {
        const firstChar = ele.split("")[0].toUpperCase()
        let eleArray = ele.split("")
        eleArray[0] = firstChar
        return eleArray.join("")
    }).join(" ")

    return newArray
}

console.log(capitalizeWords("Hello Kaise hai App sab log"))