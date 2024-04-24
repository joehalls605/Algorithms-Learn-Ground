// Algorithm: Finding the Maximum Number in a List

/*

Algorithm:

1. Start with the assumption that the first number in the list is the maximum
2. Iterate through the list, starting from the second number
3. For each number in thre list:
    If the number is greater than the assumed maximum, update the maximum to be the current number
    If the current number is not greater than the assumed maximum, move to the next number
4. After iterating throught he entire list, the assumed maximum will be the actual maximum number in the list
5. Return the maximum number found
*/

// Pseudocode:

function findMax(list){
    // Assume the first number in the list is the maximum
    let maxNumber = list[0];

    for(let i = 1; i < list.length; i++){
        const number = list[i];
        if(number > maxNumber){
            maxNumber = number;
        }
    }

    return maxNumber;


}

//Testing

const numbers = [10, 5, 8, 20, 3];
console.log("Maximum number:", findMax(numbers)); 