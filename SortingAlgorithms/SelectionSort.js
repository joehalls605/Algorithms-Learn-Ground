// Selection Sort

// Selection sort works by repeatedly finding the minimum element from the unsorted portion of the array and moving it to the beginning. 
// This process is repeated for each element until the entire array is sorted.


function selectionSort(array){
    let min; // Declare a variable to hold the index of the minimum element.
    for(let i = 0; i < array.length - 1; i++){ // Iterate through the array, excluding the last element.
        min = i; // Assume the current index holds the minimum value.
        for(let j = i + 1; j < array.length; j++){ // Iterate through the unsorted portion of the array.
            if(array[j] < array[min]){ // If a smaller element is found,
                min = j; // Update the index of the minimum element.
            }
        }
        // Swap the minimum element with the current element if necessary.
        // This is done after the inner loop completes, ensuring that the minimum element
        // in the unsorted portion of the array is moved to the correct position.
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}
