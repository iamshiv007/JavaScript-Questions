//  Question5: Write a function called mergeSortedArrays that takes two sorted arrays as input and returns a new array that contains all the elements from both arrays in sorted order.

function mergeSortedArrays(array1, array2) {
    const mergedArray = [...array1, ...array2]

    const sortedArray = mergedArray.sort((a, b) => b - a)
    return sortedArray
}

console.log(mergeSortedArrays([3, 2, 1], [5, 4, 6]))