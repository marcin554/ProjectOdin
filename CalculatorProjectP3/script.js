let displayValue = [];


let numbersButtons = document.querySelectorAll(".buttonNumber");

let specialOperators = ['+', '-', '*', '/'];

numbersButtons.forEach(button => {

    button.addEventListener('click', () => {
        
        displayValue = displayValue + button.id;
        
        
        newValue();
      
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
               
                GoOverString();
                break;
            }
            default:
                break;
        }
        newValue();
    }
    )

});



function GoOverString(){

    let temporialNumber1 = "";
    let whatToDo = '';
    let temporialNumber2 = "";
    let foundOperator = 0;

    let lengthDisplayValue = displayValue.length;

    
    for (let i = 0; i < lengthDisplayValue; i++) {
        if(displayValue.slice(+i) != (specialOperators))
        if(!displayValue.slice(+i).includes(...specialOperators)){
            temporialNumber1 = temporialNumber1 + displayValue.slice(+i +1);
         
        

        }
        else if(displayValue.slice(i).includes(...specialOperators)){
            whatToDo = displayValue.slice(+i);
            foundOperator++;
            if(foundOperator == 2){
                break;
            }
           
        }
        else if(!displayValue.slice(+i).includes(specialOperators)){
            temporialNumber2 = temporialNumber2 + temporialNumber2;
        }
    }

    console.log(temporialNumber1);
    console.log(whatToDo);




}














































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