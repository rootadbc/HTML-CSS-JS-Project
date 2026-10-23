// system configuration and logic


const display = document.getElementById("display");
//  <div id="display">00:00:00</div>
// geting our value/ action from the html

// variable to track , all starting from zero
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// function for each section to update;
// the stop-watch display
// the buttons: start/pause/reset

// since epic - means when time begins for computers

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(watchDisplay, 10)
        // remeber setInterval, calls the method every milsecond
        isRunning = true ;

    }

    
}

function pause(){

    if(isRunning){
        clearInterval(timer);
        // This stops a repeating timer created with setInterval()
        // This stops a repeating timer created with setTimeout().
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){
// here, we're going to return everything to defualt
clearInterval(timer); // makes sure the timmer isn't running
startTime = 0;
elapsedTime = 0;
isRunning = false;

// change the display when we press the button
display.textContent = "00:00:00:00";

    
}

function watchDisplay(){

    const currentTime = Date.now();
    // Date.now() > the current time now

    elapsedTime = currentTime - startTime;

    // calculate the counter logic for display

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);


    // making sure it's 00: double zero at all times
    hours = String(hours).padStart(2, "0");
    // .padStart - adds 0, infront of the 2 digit , specified.
    // String(hours) - turns the hour value into a string value

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    




    // display format: 00:00:00:00
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}

