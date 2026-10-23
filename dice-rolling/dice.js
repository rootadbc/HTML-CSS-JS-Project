console.log("DICE ROLLING PROGRAM");

// dice images: commons.wikimedia.org/wiki/File:Dice-1.jpg
/*
<div id="container">
       <h1>DICE ROLLING PROGRAM</h1>
       <label># of dice:</label>
        <input id="numOfDice" type="number" value="1" min="1" max="6">
        <button onclick="rollDice()">Roll Dice</button>
        <div id="diceResult"></div>
        <div id="diceImages"></div>
    </div>
    
*/

// declare the onclick function - what happens after it's been clicked

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value; // gets the input valud 
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = []; // stores dice roles , numbers
    const images = []; // images of the dice


    if (numOfDice >= 7 || numOfDice < 1 ){
        window.alert('Number must be between 1 - 6 ');
    } else {
    // loop to generate random number - 
    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 ) + 1;

       
        // Math.floor - whole number
        // Math.random - random number (0 and 1)
        // x 6 - between 1 and 5 (minus 6- index version) 
        // + 1 - includes 6(index)
        
        // console.log(value);


        values.push(value);
        // pushes the value of the generated const(value) into emppty array (values), we declared earlier

        // adding images 
        images.push(`<img src="img/${value}.png" alt="Dice ${value}.png" >`);
        // called on our empty images [] - then added the img, while also..making sure the random numbers, tally with my images..
        // images.push - pushes the content of the images 
        // `<img src=img/${value}.png>` - exact file location
        // alt="Dice ${value}.png" - display text


    }


    // console.log(values); // prints out the random generated values... - testing to see if it works

    // to display our values and images to the html
    diceResult.textContent = `dice: ${values.join(', ')}`;
    // diceResult - the const with our random generated numbers
    // textConent - this writes what we want into HTML
    // `dice: ${values.join(', ')}` - prints dice: then the random number generated - 
    // .join(', ') - joins the number, with a comma , and a space

    // for the dice image
    diceImages.innerHTML = images.join('');
    // innerHTML - prints directly into the HTML
}}


