let displayValue = [];
let history = [];
let specialOperators = ["+", '-', '*', '/'];
let haveRun = false;
let resultOf = 0;
let picked;
let result;

let arrayOfCalculator= [];


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
        b.textContent=(element.operator);
        c.textContent=(element.numer2);     
        d.textContent=(element.result);

        newTr.appendChild(a);
        newTr.appendChild(b);
        newTr.appendChild(c);
        newTr.appendChild(d);


        table.appendChild(newTr);
    });
}

function AddAndSend(operator){

    arrayOfCalculator.push(displayValue);
    
    arrayOfCalculator.push(operator);
    displayValue = '';


}

function switchs(string){
   
    switch (string) {
        case 'plus':{

            AddAndSend('+');
           resultOf = '';
                
                picked = '+';
                
           
            break;
        }
        case 'minus': {
        
            AddAndSend('-');
            resultOf = '';
                picked = '-';
            
            
            break;
        }
        case 'multiply': {
            AddAndSend('*');
            resultOf = '';
                picked = '*';
          
            break;
        }
        case 'divide': {
            AddAndSend('/');
            resultOf = '';
                picked = '/';
            
            
            break;
        }
        case 'clear':{
            Clear();
            break;
        }
        case 'result': {
         
            if(displayValue != null){
                arrayOfCalculator.push(displayValue);
                displayValue = '';
    
           
                doTheResult();
            }
            


             
            
           
            break;
        }
        default:
            break;
    }

    updateDisplayValue();

}

function doTheResult(){
    while(arrayOfCalculator != null && haveRun != true&&  arrayOfCalculator.length >= 2){
                
        resultOf = resultOf + Operate(arrayOfCalculator[0], arrayOfCalculator[1], arrayOfCalculator[2]);
        haveRun = true;
   
    }

            resultOf = result;
}

function Clear(){
    numer1 = '';
    numer2 = '';
    resultOf = null;
    displayValue = '';
    picked = '';
    haveRun = false;

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
function Operate( num1, operator, num2 ){

    switch (operator) {
        case '+':{
            
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            resultOf = add(parseFloat(num1), parseFloat(num2));
            if( arrayOfCalculator.length >= 2){
                arrayOfCalculator.unshift(resultOf);
            }
            
 
            picked = '';
            createHistory(num1, num2, operator, result);
            doTheResult()
            return result;
            break;
        }
        case '-':{
            
                arrayOfCalculator.splice(0, 1)
                arrayOfCalculator.splice(0, 1)
                arrayOfCalculator.splice(0, 1)
                
                
                resultOf = subtract(parseFloat(num1), parseFloat(num2));
                if( arrayOfCalculator.length >= 2){
                    arrayOfCalculator.unshift(resultOf);
                }
       
            createHistory(num1, num2, operator, result);
            doTheResult()
            picked = '';
            return result;
            break;
        }   
        case '*':{
            
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            console.log(arrayOfCalculator);
            console.log(num1);
            console.log(num2);
            resultOf = multiply(parseFloat(num1), parseFloat(num2));
            if( arrayOfCalculator.length >= 2){
                arrayOfCalculator.unshift(resultOf);
            }
            createHistory(num1, num2, operator, result);
            doTheResult()
      
            picked = '';
            return result;
          
           
        }
        case '/':{
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            arrayOfCalculator.splice(0, 1)
            resultOf = divide(parseFloat(num1), parseFloat(num2));
            if( arrayOfCalculator.length >= 2){
                arrayOfCalculator.unshift(resultOf);
            }
            createHistory(num1, num2, operator, result);
            doTheResult()
            picked = '';
            return result;
            break;
        }

        default:
            console.log("Incorrent operator.")
            break;
    }
}

