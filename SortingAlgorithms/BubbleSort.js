// Bubble Sort
// O(n^2) complexity.


function bubbleSort(array){
    // Loop through the array starting from the end, -1 decreases the amount of times we go through the array
    for(let i = array.length - 1; i > 0; i--){
        // Another loop through the array from the beginning until the index i
        // This loop compares each element with its adjacent element and performs swapping if necessary
        for(let j = 0; j < i; j++){
            // Compare the current element with the next element
            if(array[j] > array[j + 1]){
                // If the current element is greater than the next element, swap them
                let temp = array[j];  // Store the current element in a temporary variable
                array[j] = array[j + 1];  // Replace the current element with the next element
                array[j + 1] = temp;  // Replace the next element with the stored current element
            }
        }
    }
    // Return the sorted array
    return array;
}

// Call the bubbleSort function with an example array [4,2,6,5,1,3] and log the result
console.log(bubbleSort([4,2,6,5,1,3]));
