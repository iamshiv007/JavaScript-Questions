// Question6: Write a function called flattenNestedArray that takes a nested array as input and returns a new flat array that contains all the elements from the nested array, flattened into a single level.

function flattenNestedArray(array) {

    let flattenedArray  = []

    const flatten = (array) => {
        array.forEach((ele) => {
            if (Array.isArray(ele)) {
                flatten(ele)
            } else {
                flattenedArray.push(ele)
            }
        })
    }

    flatten(array)

    return flattenedArray

}

console.log(flattenNestedArray([1, [2, 3], [4, [5, 6]]]))