/*
Linear search is an algorithm that sequentially checks each element in the list until a match is found.

Use case:
Taking a list of numbers and a target number to search for. 
It iterates through the elements to get the index and value of each element
*/

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found in the array
}

// Example usage
const array = [3, 7, 1, 9, 4, 2, 6];
const targetValue = 4;

const result = linearSearch(array, targetValue);

if (result !== -1) {
    console.log(`${targetValue} found at index ${result}`);
} else {
    console.log(`${targetValue} not found in the array`);
}
