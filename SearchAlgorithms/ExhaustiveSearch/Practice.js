function findPairsWithSum(array, target){
    const pairs = [];

    // Iterate through each pair of numbers
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){

            // Check if sum equals target
            if(array[i] + array[j] === target){
                pairs.push([array[i], array[j]])
            }
        }
    }
    return pairs;
}

// Example usage
const numbers = [2, 4, 3, 1, 5, 6];
const targetSum = 7;
const pairs = findPairsWithSum(numbers, targetSum);
console.log("Pairs with sum", targetSum, ":", pairs);