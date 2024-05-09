/*
Scenario: you are given a set of items, each with a weight and a value, and you want to maximize the total value while keeping the total weight under a certain limit.
Here's a simple JavaScript example implementing a brute-force solution to the knapsack problem:
*/

const items = [
    {name: "Item 1", value: 6, weight: 2},
    { name: 'Item 2', value: 10, weight: 3 },
    { name: 'Item 3', value: 12, weight: 4 },
    { name: 'Item 4', value: 9, weight: 2 },
    { name: 'Item 5', value: 7, weight: 1 }
];

// Knapsack function

function knapsack(items, capacity){
    const n = items.length;

    function knapsackRecursive(index, remainingCapacity){
    // Base case: if we've considered all items or we've run out of capacity
    if(index === n || remainingCapacity === 0){
        return 0;
    }

    // If the current item's weight exceeds the remaining capacity, skip it
    if(items[index].weight > remainingCapacity){
        return knapsackRecursive(index + 1, remainingCapacity)
    }

    // Otherwise, consider two possibilities: including the current item or excluding it
    const includeItem = items[index].value + knapsackRecursive(index + 1, remainingCapacity - items[index].weight);
    const excludeItem = knapsackRecursive(index + 1, remainingCapacity);

    // Return the maximum of including and excluding the current item
    return Math.max(includeItem, excludeItem);
  }

  // Start with the first item and full capacity
  return knapsackRecursive(0, capacity);
}

const capacity = 5; // Maximum weight the knapsack can hold
console.log("Maximum value that can be achieved:", knapsack(items, capacity));