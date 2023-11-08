let display = document.getElementById('display');

function handleClick(value) {
    display.value += value;
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function clearDisplay() {
    display.value = '';
}
function handleClickBackspace() {
    display.value = display.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
    
    const key = event.key;
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace', 'Delete'];

    if (allowedKeys.includes(key)) {

        if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Backspace') {
            handleClickBackspace();
        } else if (key === 'Delete') {
            clearDisplay();
        } else {
            handleClick(key);
        }
    }
});
