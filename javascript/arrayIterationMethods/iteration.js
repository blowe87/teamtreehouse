// Array Iteration Methods
const fruits = ['apple','pear', 'cherry'];

// `for` vs forEach()

// `for` loop
for (let i = 0; i < fruits.length; i += 1) {
    const fruit = fruits[i]
    console.log(fruit);
  }

  // forEach() method
  fruits.forEach(fruit => console.log(fruit));

  // Differences between the forEach method and a for loop:

  // ✅ forEach is easier to read and understand with a simpler syntax.
  // ✅ The forEach method manages accessing each element in an array for you.
  // ✅ forEach eliminates several kinds of bugs you may get with for loops. 
  //     e.g. no infinite loops
  // ✅ forEach iterates only on defined elements.
  // ❌ forEach doesn't let you break out of the loop early the way you can 
  //     with for loops.