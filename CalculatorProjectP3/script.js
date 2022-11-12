let displayValue = [];


let numbersButtons = document.querySelectorAll(".buttonNumber");
let picked = '';
let specialOperators = ["+", '-', '*', '/'];
let numer1;
let numer2;

numbersButtons.forEach(button => {

    button.addEventListener('click', () => {
        
        displayValue = displayValue + button.id;
        
        
        newValue();
      
    });

    

});

function newValue(){
    let display = document.querySelector(".display");

    
        display.textContent = displayValue;
        display.innerHTML += picked;


    
   
  
}


let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button  => {
    
    button.addEventListener('click', () => {

        switchs(button.id);
      
    })

        
       
    

});

function AddAndSend(){
    if(numer1 == null){
        numer1 = parseInt(displayValue);
        displayValue = '';
    }

   
    

}
function switchs(string){
    switch (string) {
        case 'plus':{

            AddAndSend();
                picked = '+';
                
           
            break;
        }
        case 'minus': {
        
            AddAndSend();
                picked = '-';
            
            
            break;
        }
        case 'multiply': {
            AddAndSend();
                picked = '*';
          
            break;
        }
        case 'divide': {
            AddAndSend();
                picked = '/';
            
            
            break;
        }
        case 'clear':{
            displayValue = '';
            break;
        }
        case 'result': {
            numer2 = parseInt(displayValue);
            console.log(numer1);
            console.log(numer2);
           Operate(picked, numer1, numer2)
            break;
        }
        default:
            break;
    }
    newValue();
    
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
            displayValue = add(num1, num2);
            break;
        }
        case '-':{
            displayValue =  subtract(num1, num2);
            break;
        }   
        case '*':{
            displayValue =  multiply(num1, num2);
            break;
        }
        case '/':{
            displayValue =  divide(num1, num2);
            break;
        }

        default:
            console.log("Incorrent operator.")
            break;
    }
}