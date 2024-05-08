// This collectMostCoins is a greedy algorithm, because you're making optimal choice of collecting a coin at each step, without considering the overall future consequences.
/*
In the collectMostCoins function:

At each step, it chooses the nearest coin, which seems like the best option at that moment. 
It collects that coin without considering if there might be a better overall strategy (like saving it for later to collect more coins in total).
It repeats this process until all coins are collected.

This approach prioritizes immediate gains without looking ahead to see if there might be a better outcome by making different choices earlier.
*/


function collectMostCoins(coins) {
    let totalCoins = 0;
    let currentPosition = 0;

    while (currentPosition < coins.length) {
        let maxPossibleDistance = Math.abs(currentPosition - coins.length); // Initialize with max possible distance
        
        let nearestCoinIndex = findNearestCoin(currentPosition, coins, maxPossibleDistance);
        
        totalCoins += coins[nearestCoinIndex];
        
        currentPosition = nearestCoinIndex + 1;
    }

    return totalCoins;
}

function findNearestCoin(position, coins, maxPossibleDistance) {
    let nearestIndex = position;
    let minDistance = maxPossibleDistance;

    for (let i = position; i < coins.length; i++) {
        let distance = Math.abs(position - i);
        if (coins[i] > 0 && distance < minDistance) {
            minDistance = distance;
            nearestIndex = i;
        }
    }

    return nearestIndex;
}

// Example usage
const coinsOnPath = [0, 3, 2, 0, 4, 1, 2];
console.log("Total coins collected:", collectMostCoins(coinsOnPath));
