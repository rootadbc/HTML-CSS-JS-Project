// CALCULATOR PROGRAM

const display = document.getElementById('display');


function appendToDisplay(input) {
// this function will append the value of the button clicked to the display
    display.value += input;
}



function clearDisplay() {
// this function will clear the display
    display.value = "";

}



function calculate() {
// this function will evaluate the expression in the display and show the result
    try{
    // try{} - this is a block of code that will be executed, and if an error occurs, it will be caught by the catch{} block

        display.value = eval(display.value);    
        // eval() is a built-in JavaScript function that evaluates a string as code. In this case, it does the equation for us.
        
    }
    catch(error){
    // catch{} - this is a block of code that will be executed if an error occurs in the try{} block
        display.value = "Error";
    }
}