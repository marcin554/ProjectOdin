let displayValue = [];
let history = [];
let specialOperators = ["+", '-', '*', '/'];
let picked;
let haveRun = false;
let result2;
let arrayOfCalculator = [];


let numbersButtons = document.querySelectorAll(".buttonNumber");
numbersButtons.forEach(button => {
    
    
    button.addEventListener('click', () => {
        if(displayValue.slice(-1, 1) != '.'){
           
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

    if(displayValue != ''){
        arrayOfCalculator.push(displayValue);
    }
    
    
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
            if(arrayOfCalculator.length >=2){
            
                if(displayValue != ''){
                    arrayOfCalculator.push(displayValue);
                }
                
         
                result2 = doTheMath();
              
               
               
            }
            
            break;
        }
        default:
            break;
    }

    updateDisplayValue();

}

function doTheMath(){
    let tempResult = 0;

    let b = false;
    let times = 0;
   while(b == false){
    console.log(arrayOfCalculator);

    times++;
    if(!times >= 1){
        tempResult = tempResult + Operate(arrayOfCalculator[0], arrayOfCalculator[1], arrayOfCalculator[2]);
    }
    else{
        tempResult = Operate(arrayOfCalculator[0], arrayOfCalculator[1], arrayOfCalculator[2]);
        times--;
    }
    
    arrayOfCalculator.unshift(tempResult);
    console.log(arrayOfCalculator);
    if(arrayOfCalculator.length % 3 == 0 || arrayOfCalculator.length % 5 == 0 || arrayOfCalculator.length % 7 == 0){
        b = false;
    }
    else{

        b =  true;
    }
   }

   let display = document.querySelector(".current");

   display.innerHTML = tempResult;
    
    return tempResult;


        
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
            
            DeleteUsed();
            result = add(parseFloat(num1), parseFloat(num2));
            createHistory(num1, num2, operator, result);
            picked = '';
            displayValue = '';
           
            return result;
            break;
        }
        case '-':{
        
            DeleteUsed();
       
            result = subtract(parseFloat(num1), parseFloat(num2));
      
            createHistory(num1, num2, operator, result);
            picked = '';
            displayValue = '';
           
            return result;
            break;
        }   
        case '*':{
     
            DeleteUsed();
            result = multiply(parseFloat(num1), parseFloat(num2));
            createHistory(num1, num2, operator, result);
            picked = '';
            displayValue = '';
           
            return result;
          
           
        }
        case '/':{
            DeleteUsed();
            result = divide(parseFloat(num1), parseFloat(num2));
            createHistory(num1, num2, operator, result);
            picked = '';
            displayValue = '';
           
            return result;
            break;
        }

        default:
            console.log("Incorrent operator.")
            break;
    }
}

function DeleteUsed(){
    for (let i = 0; i < 3; i++) {
        arrayOfCalculator.splice(0, 1);
        
    }
    
}
