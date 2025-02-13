
/* const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
 */

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value.length < 20) { // Prevent overflow
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = new Function(`return ${display.value}`)();
    } catch (error) {
        display.value = "Error";
    }
}

