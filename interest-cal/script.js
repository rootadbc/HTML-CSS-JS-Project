// COMPOUND INTEREST CALCULATOR

// Preparing the engine

// first we create a function for the button action

function calculate(){

// <button onclick="calculate()">Submit</button>
// first we create a function of the action on our onclick attribute "onclink=calculate()"

// secondly, we need to call our inputs actions
// assign them into our engine

const totalAmount = document.getElementById("total-amount");
const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const yearsInput = document.getElementById("years");


// assing the value to the variable created, so the JS can read our data from html

let principal = principalInput.value;
let rate = rateInput.value/ 100;
// introducing / 100 - because we are dealing with %
let years = yearsInput.value;

// we need to make sure , only numbers are taken into our declared variable
// let xx = xx.value;
// let xx = Number(xx.value); -> this makes sure it's only Number


// Sanitize input value - to make sure, only number above 0
// also sanitizes strings

if(principal < 0 || isNaN(principal)){
// isNaN - is not a number
    window.alert("Principal value must be a number and above : 0");
    // spawns window alert with our message
    principal = 0;

    principalInput.value = 0 
    // this turns the value into 0 - if it is not a number

}
if(rate < 0 || isNaN(rate)){
// isNaN - is not a number
    window.alert("Rates value must be a number and above : 0");
     // spawns window alert with our message
    rate = 0;

    rateInput.value = 0;
    // this turns the value into 0 - if it is not a number

}
if(years < 0 || isNaN(years)){
// isNaN - is not a number
    window.alert("Year value must be a number and above : 0");
     // spawns window alert with our message
    years = 0;

    yearsInput.value = 0;
    // this turns the value into 0 - if it is not a number
}



// now calculate the logic of the program: interest rate
//
const result = principal * Math.pow((1 + rate / 1), 1 * years)

// to format the result to currency correct value and formatting
totalAmount.textContent = result.toLocaleString(undefined, 
                                                {style: "currency",
                                                    currency: "USD"
                                                    });

}