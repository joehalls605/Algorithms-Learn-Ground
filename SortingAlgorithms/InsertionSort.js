//Insertion Sort

/*
Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It starts with the second element and compares it with each element to its left, moving elements to the right until finding the correct position for insertion. 
This process continues for each element in the array, gradually building up the sorted sequence. 

O(n^2) complexity.
*/

function insertionSort(array){
    let temp;
    for(let i = 1; i < array.length; i++){ // starting with the second item.
        temp = array[i]
        for(var j = i - 1; array[j] > temp &&  j > -1 ; j--){ // j points to the item before
            array[j + 1] = array[j]
        }
        array[j + 1] = temp;
    }
    return array;
}





