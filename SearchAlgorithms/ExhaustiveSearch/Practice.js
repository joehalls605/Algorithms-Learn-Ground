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


// Dogs in a kennel

function placeDogsInKennel(dogs, kennelCapacity) {
    const arrangements = [];

    // Helper function to generate arrangements recursively
    function backtrack(index, currentArrangement) {
        // Base case: when we have placed all dogs
        if (index === dogs.length) {
            arrangements.push(currentArrangement.slice()); // Make a copy of the current arrangement
            return;
        }

        // Try placing the current dog in each kennel
        for (let i = 0; i < kennelCapacity; i++) {
            currentArrangement[i].push(dogs[index]);
            backtrack(index + 1, currentArrangement);
            currentArrangement[i].pop(); // Backtrack: remove the current dog from the kennel
        }
    }

    // Initialize kennels as empty arrays
    const initialArrangement = new Array(kennelCapacity).fill().map(() => []);

    // Start placing dogs in kennels
    backtrack(0, initialArrangement);

    return arrangements;
}

// Example usage
const dogs = ["Buddy", "Max", "Bailey"];
const kennelCapacity = 2;
const allArrangements = placeDogsInKennel(dogs, kennelCapacity);
console.log("All arrangements:", allArrangements);
