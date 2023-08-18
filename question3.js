// Question3: Write a function called findLongestSubstring that takes a string as input and returns the length of the longest substring within the string that contains distinct characters (no repeating characters).

function findLongestSubstring(string) {
    const array = string.split("")
    let subString = []
    let max = 0

    for (let i = 0; i < array.length; i++) {
        const exist = subString.includes(array[i])

        if (!exist) {
            subString = [...subString, array[i]]
            max = Math.max(max, subString.length)
        } else {
            const index = subString.indexOf(array[i]);
            subString = subString.slice(index + 1);
            subString.push(array[i]);
        }
    }
    return max
}

console.log(findLongestSubstring("abcabcbb"))
console.log(findLongestSubstring("bbbbbb"))
console.log(findLongestSubstring("hvdsudifbfhhvuir"))
console.log(findLongestSubstring("dvdf"));
