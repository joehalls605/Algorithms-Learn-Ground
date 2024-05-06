/* 
Problem: Write a program that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string

1. Understand the problem:
Input: string word
Output: int numberOfVowels
postcondition: loop through the string, evaluate if each letter is a vowel, increment vowels total, return vowels total.


2. Design the algorithm:

Data structure: array
Why: because it is indexed, easy to loop through.

Algorithm design:
iterate through each character in the string
declare vowels total
if the character in the string is a vowel
increment the vowel total
after incrementing through all characters in the string
return the vowel total

3.
Pseudocode:
for loop i in string
    declare vowels total
    if i in string is equal to "a" or "e" or "i" or "o" or "u"
        increment the vowels total
    return vowels total
*/
// 4. Write the code:

function numberOfVowels(word){
    vowelsTotal = 0;
    for(i = 0; i <= word.length; i++){
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){ // Corrected condition
            vowelsTotal++;
        }
    }
    return vowelsTotal;
}

/* 5. Analysis of Algorithm:

Time Complexity: the time complexity would grow O(n) because if the string input was larger, the amount of time required to review each character would grow
Space Complexity: while the input string may indeed be larger, the space used by your algorithm remains constant because it doesn't allocate additional memory proportional to the size of the input string. O(1)
6.
*/
// Test cases
function runTests() {
    let result = numberOfVowels("felix");
    console.log("Test case 1: ):", result);
}

// Run tests
runTests();
