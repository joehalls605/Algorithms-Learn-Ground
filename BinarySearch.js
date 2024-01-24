/*
Binary search is a search algorithm that finds a value in a sorted array.
It keeps dividing the search  in half and compares the target value with the middle element in the array.
If the  target matches the middle element the search is sucessful. 
If the target is less that middle element, it searches the lower half. 
If the target value is greater, it searches the upper half.
This is repeated until the target value is found.
*/

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid; // Target found, return the index
        } else if (midValue < target) {
            low = mid + 1; // Target is in the right half
        } else {
            high = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}.`);
} else {
    console.log(`Element ${targetValue} not found in the array.`);
}