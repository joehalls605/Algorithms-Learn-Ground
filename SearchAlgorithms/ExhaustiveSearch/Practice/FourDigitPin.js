// JavaScript brute-force algorithm for cracking a numeric PIN.

// Scenario: Suppose we have a 4-digit PIN that we want to crack using brute-force. 
// Here's a simple JavaScript function that iterates through all possible combinations until it finds the correct one:

function bruteForcePin(targetPin){
    // Iterate over all possible 4-digit combinations
    for(let i = 0; i <= 9999; i++){

        // Convert the current iteration number to a 4-digit string
        let guess = i.toString().padStart(4, 0); // Pads zeros at the beginning of the string

        // Check if the guess matches the target PIN
        if(guess === targetPin){
            console.log("PIN cracked! It is :", guess);
            return guess; // Return cracked Pin
        }

        console.log("failed to crack the pin");
        return null;
    }
}

// Example usage:
const targetPin = '1234'; // Change this to the PIN you want to crack
bruteForcePin(targetPin);


/*
This function bruteForcePin takes the target PIN as an argument and iterates through all possible 4-digit combinations (from '0000' to '9999'). 
It converts each number to a 4-digit string and checks if it matches the target PIN. If a match is found, it logs the cracked PIN to the console and returns it. 
If no match is found after checking all combinations, it logs a failure message.

This is brute force because the algorithm systematically tries every combination in the case.
However there is no optimisation and doesnt' exploit any patterns.
It is resource intensive. In this example it's okay because it a smaller number, but in larger cases this would be demanding.
The time complexity if O(10^4) as it iterates through all possible four combinations, meaning the time grows linearly with the size of the search space.
*/