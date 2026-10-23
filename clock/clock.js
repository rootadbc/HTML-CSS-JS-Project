// DIGITAL CLOCK PROGAM

// create the program script

// we create a function

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  // now.getHours() - defualt Date , Hour constructor

  // to show AM or PM
  // we introduce meridiem - can be any name
  
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);

  const minutes = now.getMinutes().toString().padStart(2, 0);
  // .toString().padStart(2,0); - makes sure our clock is  two digits
  const seconds = now.getSeconds().toString().padStart(2, 0);
  // since the data is a constructor naturally
  // we enter new info, into our const variable

  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  // here, it's tells us , how we want to display our clock

  document.getElementById("clock").textContent = timeString;
  // here, it writes out clock value with textContent = timeString
}

updateClock(); // uses the 24h time format

// Now to make sure, our clock run - live (update every second)
// we introduce a setInterval method - this is like a setTimeout method, but instead, this calls the function every second..

// setTimeout - Delays
// setInterval - calls concurrently
// setInterval(func, 1123s)

// So,

setInterval(updateClock, 1000);
// this now calls our updateclock function , every second
