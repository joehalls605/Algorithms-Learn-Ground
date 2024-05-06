// Function to calculate the sum of numbers in an array

function calculateSum(arr){
    let sum = 0
    
    for(let num of arr){
        sum += num;
    }

    return sum;
}

// Testing function with different test cases:
//

console.log(calculateSum([1,3,5,6]))
console.log(calculateSum([]))
console.log(calculateSum([-1,5,7]))

// Task 12: Refined and optimised version

function calculateSum(arr){
    if(arr.length === 0){
        return 0;
    }
    
    return arr.reduce((sum, num) => sum + num, 0);

    // reduce() reduces the array into a single value, it applies a callback function to accumulate the result.
    // the reduce() method is called for each element in the array except for initial iteration
    // sum + numm adds the current element to the accumulator sum.
}

// Test the function with different test cases
console.log(calculateSum([1, 3, 5, 6])); // Output: 15
console.log(calculateSum([])); // Output: 0
console.log(calculateSum([-1, 5, 7])); // Output: 11