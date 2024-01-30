//Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'two', {name: 'Alice'}, [7,8,9]];

//Accessing array elements
let firstName = numbers[0]; // 1
let secondFruit = fruits[1]; // 'banana'
let thirdElement = mixedArray[2]; //{name: 'Alice'}

numbers.push(6); // [1,2,3,4,5,6]
fruits.pop(); // ['apple', 'banana']
fruits.unshift('pear'); //['pear','apple','banana']
numbers.shift(); // [2,3,4,5,6]

///Array Iteration

//let numbers = [1,2,3,4,5];
numbers.forEach(function(number) {
    console.log(number);
});

//Array Iteration Map
//let number = [1,2,3,4,5];

let doubledNumbers = numbers.map(function(number) {
    return number * 2;  
});

//filter
//const numbers = [1,2,3,4,5,6];
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); //[2,4,6]

