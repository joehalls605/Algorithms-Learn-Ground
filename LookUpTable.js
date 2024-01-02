/*
A lookup table is a data structure used to store and retrieve data using keys
Often implemented as arrays or hash tables

Use cases:
A student database where students can store IDs as keys
Product pricing system in retail. A lookup table can be used to store product codes as keys and their prices as values
Employee directory with employee IDs 
*/

// Creating a lookup table using an object
const myLookupTable = {
    "apple": "A fruit that is red or green",
    "banana": "A yellow fruit with a peel",
    "orange": "A citrus fruit with a tough outer layer"
};

// Performing a lookup
const keyToLookup = "banana";
const value = myLookupTable[keyToLookup];

if (value !== undefined) {
    console.log(`${keyToLookup}: ${value}`);
} else {
    console.log(`${keyToLookup} not found in the lookup table`);
}
