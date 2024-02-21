// Selection Sort

// Selection sort works by repeatedly finding the minimum element from the unsorted portion of the array and moving it to the beginning. 
// This process is repeated for each element until the entire array is sorted. O(n^2) complexity.



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

/*
Use cases
Educational Purposes: Selection sort is often used in introductory computer science courses to teach students about sorting algorithms. Its simplicity makes it a great tool for demonstrating the basic principles of sorting.

Small Data Sets: When dealing with very small arrays or lists where efficiency is not a primary concern, selection sort can be a reasonable choice. Its straightforward implementation may outweigh its slower runtime for small inputs.

Embedded Systems: In resource-constrained environments such as embedded systems or microcontrollers with limited memory and processing power, selection sort's simplicity can be advantageous. It requires minimal memory overhead and can be implemented efficiently in such systems.

Pre-Sorting Before a More Efficient Algorithm: Selection sort can be used as a pre-sorting step before applying a more efficient sorting algorithm. For example, it might be used to sort small subarrays before performing a merge sort or quicksort.

*/