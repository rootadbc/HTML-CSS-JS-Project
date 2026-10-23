
// RANDOM NUMBER GENERATOR

let randomNum = Math.random();

console.log(randomNum); // generate a random number between 0 and 1
// this will include decimal values as well, so it can be any number like 0.123456789 or 0.987654321

// to generate a number without decimal values, we can use Math.floor() or Math.ceil() methods

let randomNumFloor = Math.floor(Math.random());

console.log(randomNumFloor); // this will always return 0, because Math.random() generates a number between 0 and 1, and Math.floor() rounds it down to the nearest integer

// to generate a random number between a specific range, we can use the following formula:

// to generate a random number between 0 and 6 ( none decimal values )

let randomNumRange = Math.floor(Math.random() * 7); // 0 to 6
console.log(randomNumRange); // this will return a random number between 0 and 6, including both 0 and 6

// to include 7 in the generated number, we can add + 1 to the formula - like this: 
let randomNumRangePlus1 = Math.floor(Math.random() * 7) + 1; // 1 to 7 ( so it will include 7 as well..)

console.log(randomNumRangePlus1); // this will return a random number between 1 and 7, including both 1 and 7


// to generate a random number between 50 and 100 ( including both 50 and 100 ) - using min and max values


const min = 50;
const max = 100;

let randomNumMinMax = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumMinMax); // this will return a random number between 50 and 100, including both 50 and 100

// Program to generate a random number between any two numbers ( min and max ) - including both min and max values -- for this example , between 1 and 6 ( just like a dice roll )

/*
<h1 id="h1">Random Number Generator</h1>
    <button id="generateBtn">Generate Random Number</button><br><br>
    <label id="randomNumber"></label>
*/


const generateBtn = document.getElementById("generateBtn");
const randomNumber = document.getElementById("randomNumber");

const minimum = 1;
const maximum = 6;

generateBtn.onclick = function() {
    randomNumber.textContent = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}








