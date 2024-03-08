// Function to clear the display
function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

// Function to delete the last character from the display
function deleteCharacter() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

// Function to append a character to the display
function Character(character) {
    var display = document.getElementsByName('display')[0];
    display.value += character;
}

// Function to evaluate the expression in the display
function evaluateExpression() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
