// Scenario: 
// you have an array of integers representing stock prices over a number of days. 
// You want to find the maximum possible profit that could have been made by buying and selling the stock once
// You can use the divide and conquer technique to efficiently find this maximum profit.

function findMaxProfit(prices){
    // Base case: If the array has fewer than two elements return 0
    if(prices.length < 2){
        return 0
    }
}

// Divide the array into two halves
const mid = Math.floor(prices.length / 2);
const leftHalf = prices.slice(0, mid)
const rightHalf = prices.slice(mid)

// Recursively find the maximum profit in each half
const maxProfitLeft = findMaxProfit(leftHalf);
const maxProfitRight = findMaxProfit(rightHalf);

// Find the minimum price in the left half and the maximum price in the right half
const minPriceLeft = Math.min(...leftHalf);
const maxPriceRight = Math.max(...rightHalf);

  // Calculate the maximum profit that can be made by buying in the left half and selling in the right half
  const maxProfitCrossing = maxPriceRight - minPriceLeft;

  // Return the maximum of the three possible profits
  return Math.max(maxProfitLeft, maxProfitRight, maxProfitCrossing);

// Example usage:
const stockPrices = [100, 180, 260, 310, 40, 535, 695];
console.log("Maximum profit:", findMaxProfit(stockPrices)); // Output: 655