function calculate() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}

// Function to clear the display
function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

// Function to delete the last character
function deleteChar() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}