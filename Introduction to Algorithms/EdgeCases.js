


/*
Edge Cases:
Edge cases refer to scenarios or situations that are at the extreme ends or boundaries of the input domain, 
often where the program's behavior might differ from what is expected in typical or common cases. These cases are important to consider because they can reveal potential issues or bugs in the program's logic or implementation that might not be evident during regular testing.


In this example:

We handle the edge case of empty input or non-array input by returning NaN.
Inside the loop, we check for the edge case of non-numeric elements or NaN elements in the array, and again, we return NaN in such cases.
By considering and handling these edge cases, the function becomes more robust and can gracefully handle unexpected inputs.
*/

function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return NaN; // Edge case: empty input or non-array input
    }
    
    let sum = 0;
    for (let num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            return NaN; // Edge case: non-numeric or NaN element in the array
        }
        sum += num;
    }

    return sum / numbers.length;
}

// Test cases
console.log(calculateAverage([1, 2, 3, 4, 5])); // Expected output: 3
console.log(calculateAverage([])); // Expected output: NaN (empty input)
console.log(calculateAverage([10, '20', 30])); // Expected output: NaN (non-numeric element)
console.log(calculateAverage([NaN, NaN, NaN])); // Expected output: NaN (NaN element)
