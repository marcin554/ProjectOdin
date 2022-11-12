let displayValue = [];

let numOne;
let numTwo;

let numbersButtons = document.querySelectorAll(".buttonNumber");

let specialOperators = ['+', '-', '*', '/'];

numbersButtons.forEach(button => {

    button.addEventListener('click', () => {
        
        displayValue = displayValue + button.id;
        
        
        newValue();
        console.table(displayValue.slice(-1))
    });

    

});

function newValue(){
    let display = document.querySelector(".display");

    display.textContent = displayValue;
}

let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button  => {
    
    button.addEventListener('click', () => {

        
       
        switch (button.id) {
            case 'plus':{

                if( !specialOperators.includes(displayValue.slice(-1)) && displayValue.slice(-1) != ''){
                    displayValue = displayValue + '+';
                }
               
                break;
            }
            case 'minus': {
                if( !specialOperators.includes(displayValue.slice(-1)) && displayValue.slice(-1) != ''){
                    displayValue = displayValue + '-';
                }
                
                break;
            }
            case 'multiply': {
                if( !specialOperators.includes(displayValue.slice(-1)) && displayValue.slice(-1) != ''){
                    displayValue = displayValue + '*';
                }
               
                break;
            }
            case 'divide': {
                if( !specialOperators.includes(displayValue.slice(-1)) && displayValue.slice(-1) != ''){
                    displayValue = displayValue + '/';
                }
                
                break;
            }
            case 'clear':{
                displayValue = '';
                break;
            }
            case 'result': {
               
                
                break;
            }
            default:
                break;
        }
        newValue();
    })

});


















































function add(num1, num2){

    result = num1 + num2;
    return result;
}

function subtract(num1, num2){

    result = num1 - num2;
    return result;
}

function multiply(num1, num2){

    result = num1 * num2;
    return result;
}

function divide(num1, num2){

    result = num1 / num2;
    return result;
}
function Operate(operator, num1, num2 ){

    switch (operator) {
        case '+':{
            add(num1, num2);
            break;
        }
        case '-':{
            subtract(num1, num2);
            break;
        }   
        case '*':{
            multiply(num1, num2);
            break;
        }
        case '/':{
            divide(num1, num2);
            break;
        }

        default:
            return "Incorrent operator.";
            break;
    }
}