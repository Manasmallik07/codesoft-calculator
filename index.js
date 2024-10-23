let display = document.getElementById("display");
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let isTyping = false;

function appendToDisplay(value) {
   
    if (isTyping) {
        display.value += value;
    } else {
        display.value = value;
        isTyping = true;
    }
}

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    firstOperand = parseFloat(display.value);
    currentOperation = operator;
    isTyping = false; 
}

function calculate() {
    if (currentOperation === null || !isTyping) return;

    secondOperand = parseFloat(display.value);
    let result;

    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = "Error"; 
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return; 
    }

   
    display.value = result;
    currentOperation = null;
    isTyping = false; 
}

function clearDisplay() {
   
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    isTyping = false;
}
