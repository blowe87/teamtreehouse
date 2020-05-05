// Array Iteration Methods
const fruits = ['apple','pear', 'cherry'];

// `for` vs forEach()

// `for` loop
// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i]
//     console.log(fruit);
//   }

//   // forEach() method
//   fruits.forEach(fruit => console.log(fruit));

  // Differences between the forEach method and a for loop:

  // ✅ forEach is easier to read and understand with a simpler syntax.
  // ✅ The forEach method manages accessing each element in an array for you.
  // ✅ forEach eliminates several kinds of bugs you may get with for loops. 
  //     e.g. no infinite loops
  // ✅ forEach iterates only on defined elements.
  // ❌ forEach doesn't let you break out of the loop early the way you can 
  //     with for loops.

// ==========================================================================

//   let capitalisedFruits = [];

//   fruits.forEach(fruit => {
//     let capitalisedFruit = fruit.toUpperCase();
//     capitalisedFruits.push(capitalisedFruit);
//   });

//   console.log(capitalisedFruits);

// ==========================================================================

// const prices = [6.75, 3.10, 4.00, 8.12]; 

// // Task: Log the total sum of all prices to the console.

// let total = 0;

// prices.forEach(price => {
//         total += price;
//     });
    
//     console.log(total);

//     // Expected result: 21.97
    
// ==========================================================================
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// Task: Only log names that begin with 'S'.

let sNames = [];
names.forEach(name => {
    if (name.charAt(0) == "S") {
        sNames.push(name);
    }
});

console.log(sNames);

// Expected result: ['Selma', 'Sam', 'Sharon'];