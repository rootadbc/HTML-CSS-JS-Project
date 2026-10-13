// DOM Note

// Document Object Model

// Object() that represents the page we see in the browser and provides us with an API to interact with it.

// The browser construct the DOM when it loads an HTML document and structure all the elements in a tre-like representation.

// JS can access the DOM to dynamically change the content , structure and style of a web page.


//
//
// calculator as the example of DOM manipulation

console.log(document); // document object

console.dir(document); // document object as a JS object

document.title = "FOOD TRUCK"; // change the title of the page




document.body.style.backgroundColor = "lightblue"; // change the background color of the page

document.location.baseURI = "www.example.com"; // change the host of the page

// change the content on the page with calculator


document.body.calculator.keys.button[2] = "5";