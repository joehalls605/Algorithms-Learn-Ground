/*
Bags ae a collection of unordered elements that allow duplicates
Similar to a set, but with multiplicity
Bags do not enforce uniqueness


Note:
In JavaScript, you can use an array to represent a bag-like collection where you can add elements without worrying about duplicates. 
*/


class Bag {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    size() {
        return this.items.length;
    }

    // You can also provide other methods as needed
    // For example, to iterate over the items, clear the bag, etc.
}

// Example usage:
const myBag = new Bag();

myBag.add("apple");
myBag.add("banana");
myBag.add("apple"); // Duplicates are allowed in a bag

console.log(myBag.size()); // Output: 3
console.log(myBag.items); // Output: ['apple', 'banana', 'apple']
