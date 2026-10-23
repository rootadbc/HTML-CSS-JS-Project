/*

<h1>COUNT PROGRAM</h1>

    <label id="count">0</label>

    <div id="btnContainer">
        <button id="increment"class="buttons">increment</button>
        <button id="reset" class="buttons">reset</button>
        <button id="decrement" class="buttons">decrement</button>
    </div>

*/


const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");
const decrementButton = document.getElementById("decrement");
const countLabel = document.getElementById("count");


let count = 0;

incrementButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetButton.onclick = function() {  
    count = 0;
    countLabel.textContent = count;
}

decrementButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}