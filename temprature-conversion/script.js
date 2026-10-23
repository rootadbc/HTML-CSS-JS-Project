console.log("TEMPERATURE CONVERSION PROGRAM");

/*
<form>
        <h1>TEMPERATURE CONVERSION</h1>
        <input type="number" id="textBox" value="0"><br>

        <input type="radio" id="toF" name="unit">
        <label for="toF">Celsius ~ Fahrenheit</label> <br>

        <input type="radio" id="toC" name="unit">
        <label for="toC"> Fahrenheit ~ Celsius</label> <br>

        <button type="button" onclick="conver()">Submit</button>
        <p id="result"> Select a unit</p>


    </form>

*/

// Declare all the const and variable that we got from our HTM

const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;


// logic engine
function conver(){

    if(toF.checked){
        temp = Number(textBox.value);
        temp = temp * 9/ 5 + 32;
        result.textContent = temp.toFixed(1) +"°F"

    }
    else if(toC.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) +"°C"
        // toFixed(1) adds a decimal to 
    }
    else {
        result.textContent = "Select a unit"
    }
}

