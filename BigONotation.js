/*
Big o notation. A notation used to describe the upper bound (worst case scenario) of the growth rate of the algorithm in terms of space 
or time complexity

O(f(n))

O indicates the upper bound
f(n) describes the growth rate of the algo in relation to the input size n


O(1) Constant Time Complexity
Constant time complexity refers to algorithms where the execution time remains the same, regardless of the size of the input data.


O(n) - Linear Time Complexity

Linear time complexity indicates that the running time of an algorithm grows proportionally with the size of the input data.

Example: O(n) for linear time complexity.

*/

// Linear Time Complexity O(n)
function findMaxLinear(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Constant Time Complexity O(1)
function findMaxConstant(arr) {
    let max = arr[0];
    for (let i = 1; i < 5; i++) {  // Assuming a constant number of iterations
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


// Quadratic Time Complexity O(n^2)
function quadraticExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// each element in the array, the algorithm iterates through the array again. 
// The total number of iterations becomes the square of the size of the array, resulting in a quadratic time complexity.


// Logarithmic Time Complexity O(log n)
function logarithmicExample(n) {
    let i = 1;
    while (i < n) {
        console.log(i);
        i *= 2;
    }
}

/*
In this logarithmic example, the algorithm iterates through the loop while i is less than n, and on each iteration, i is multiplied by 2. This results in a logarithmic time complexity because the number of iterations grows logarithmically with the input size n. In each iteration, the problem size is effectively halved, 
making the algorithm more efficient for larger input sizes compared to linear or quadratic approaches.

*/

