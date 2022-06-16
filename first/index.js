// Make the function that takes 3 arguments: array of objects, key as string and value.
// The function should find all objects in the array (1st argument) that have property (2nd argument) equal to the value (3rd argument) and return array of objects that pass this test.
// You can consider that each object will have the property passed as 2nd value.

// Example:

const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, key, value) {
    return array.filter(obj => obj[key] == value)
}

console.log(getObjects(array1, "name", "Semir")); 
// result: [ { id: '222312543', name: 'Semir', age: '32' } ] 

console.log(getObjects(array1, "name", "Suad")); 
// result: [ ] 
 
