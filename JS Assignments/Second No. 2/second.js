
// Creating an array with multiple data types
let mixedArray = [
    "Hello, World!"
    , // String
    42, // Number
    true, // Boolean
    null, // Null
    [1, 2, 3], // Nested array of numbers
    [4, 5, 6] // Another nested array ofnumbers
    ];
    // Function to sum the last two numbers of nested arrays
    function
    sumLastTwoOfNestedArrays(array) {
    // Loop through the mixedArray
    for (let i = 0; i < array.length; i++) {
    // Check if the current element is an array
    if (Array.isArray(array[i])) {
    let nestedArray = array[i];
    // Sum the last two numbers if there are at least two numbers
    if (nestedArray.length >= 2) {
    let lastIndex = nestedArray.length - 1;
    let sum = nestedArray[lastIndex] +
    nestedArray[lastIndex - 1];
    console.log(`Sum of the last two numbers in array ${i + 1}: ${sum}`);
    } else {
    console.log( `Array ${i + 1} does not have enough elements ` ); 
              }
          }
    }
    }     
    // Call the function
    sumLastTwoOfNestedArrays(mixedArray);
    