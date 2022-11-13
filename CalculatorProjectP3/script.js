let displayValue = [];
let history = [];
let specialOperators = ["+", '-', '*', '/'];

let number1;
let number2;
let resultOf;
let picked;


let numbersButtons = document.querySelectorAll(".buttonNumber");

numbersButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        if(displayValue.slice(-2, 1) != '.'){
           
            displayValue = displayValue + button.id;
        }
        updateDisplayValue();
    })

   
})

let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button  => {    
    button.addEventListener('click', () => {

        switchs(button.id);    
    })
});


function updateDisplayValue(){
    console.log("test")
    let display = document.querySelector(".display");

    let operatorDisplay = document.querySelector(".operatorType");

        display.textContent = displayValue;
        if(picked != null){
            operatorDisplay.innerHTML = picked;
        }

  
}

function createHistory(num1, num2, operator, result){

    let tempHistory = {
        numer1: num1,
        numer2: num2,
        operator: operator,
        result: result
    }

    let display = document.querySelector(".current");

    display.innerHTML = resultOf;
    history.unshift(tempHistory);
    showHistory();
}

function showHistory(){
    let table = document.querySelector(".resultTable");
    
    let alreadyCreated = document.querySelectorAll('.createdByScript');

   
    alreadyCreated.forEach(element => {
        element.remove();
    })

    history.forEach(element => {
        var newTr = document.createElement("TR");
        newTr.setAttribute('class', 'createdByScript');

        let a = document.createElement("TD");
        let b =document.createElement("TD");
        let c = document.createElement("TD");
        let d= document.createElement("TD");

        a.textContent=(element.numer1);
        b.textContent=(element.numer2);
        c.textContent=(element.operator);
        d.textContent=(element.result);

        newTr.appendChild(a);
        newTr.appendChild(b);
        newTr.appendChild(c);
        newTr.appendChild(d);


        table.appendChild(newTr);
    });
}

function AddAndSend(){

    if(resultOf != null){
        numer1 = parseFloat(resultOf);
        
    }
    else{
        
            numer1 = parseFloat(displayValue);
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
            Clear();
            break;
        }
        case 'result': {
            numer2 = parseFloat(displayValue);
            if(numer1 && numer2 != null){
              
                displayValue = '';
                
               Operate(picked, numer1, numer2)
            }
           
            break;
        }
        default:
            break;
    }

    updateDisplayValue();

}

function Clear(){
    numer1 = '';
    numer2 = '';
    resultOf = null;
    displayValue = '';
    picked = '';

    history = [];
    
    let alreadyCreated = document.querySelectorAll('.createdByScript');

   
    alreadyCreated.forEach(element => {
        element.remove();
    });

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
            if(resultOf != null){
                resultOf = null;
            }
            resultOf = add(num1, num2);
            picked = '';
            createHistory(num1, num2, operator, result);
            numer2 = '';
            break;
        }
        case '-':{
            resultOf =  subtract(num1, num2);
            createHistory(num1, num2, operator, result);
          
            picked = '';
            numer2 = '';
            break;
        }   
        case '*':{
            resultOf =  multiply(num1, num2);
            createHistory(num1, num2, operator, result);
      
            picked = '';
            numer2 = '';
            break;
        }
        case '/':{
            resultOf =  divide(num1, num2);
            createHistory(num1, num2, operator, result);
            
            picked = '';
            numer2 = '';
            break;
        }

        default:
            console.log("Incorrent operator.")
            break;
    }
}