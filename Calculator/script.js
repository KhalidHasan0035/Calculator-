let display = document.getElementById('display');
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*');
    
        let result = eval(expression);
    
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    
    if (key === '.') {
        appendToDisplay('.');
    }
    
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'Escape') {
        clearDisplay();
    }
    if (key === 'Backspace') {
        deleteLast();
        event.preventDefault();
    }
});