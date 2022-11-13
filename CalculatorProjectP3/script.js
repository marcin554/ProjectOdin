let displayValue = [];


let history = [
   
];






let numbersButtons = document.querySelectorAll(".buttonNumber");
let picked;
let specialOperators = ["+", '-', '*', '/'];

let numer1;
let numer2;
let resultOf;


numbersButtons.forEach(button => {

    button.addEventListener('click', () => {
        
        displayValue = displayValue + button.id;
        
        
        newValue();
      
    });

    

});

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

function newValue(){
    
    let display = document.querySelector(".display");

    let operatorDisplay = document.querySelector(".operatorType");

    
        display.textContent = displayValue;
        if(picked != null){
            operatorDisplay.innerHTML = picked;
        }
        


    
   
  
}

function showHistory(){
    let table = document.querySelector(".resultTable");
    
    let alreadyCreated = document.querySelectorAll('.createdByScript');

   
    alreadyCreated.forEach(element => {
        element.remove();
    });


    

    history.forEach(element => {
        var y = document.createElement("TR");

        let a = document.createElement("TD");
        let b =document.createElement("TD");
        let c = document.createElement("TD");
        let d= document.createElement("TD");

        y.setAttribute('class', 'createdByScript');
       
        a.textContent=(element.numer1);
        b.textContent=(element.numer2);
        c.textContent=(element.operator);
        d.textContent=(element.result);
     

        y.appendChild(a);
        y.appendChild(b);
        y.appendChild(c);
        y.appendChild(d);

        // console.log(y);
        // console.log(element.numer2);
        table.appendChild(y);


    });

       

    
}
let operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button  => {
    
    button.addEventListener('click', () => {

        switchs(button.id);
      
    })

        
       
    

});

function AddAndSend(){
    
        
  
   
    if(resultOf != null){
        numer1 = parseInt(resultOf);
    }
    else{
        
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
            displayValue = '';
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
            resultOf = add(num1, num2);
            picked = '';
            createHistory(num1, num2, operator, result);
          
            break;
        }
        case '-':{
            resultOf =  subtract(num1, num2);
            createHistory(num1, num2, operator, result);
          
            picked = '';
            break;
        }   
        case '*':{
            resultOf =  multiply(num1, num2);
            createHistory(num1, num2, operator, result);
      
            picked = '';
            break;
        }
        case '/':{
            resultOf =  divide(num1, num2);
            createHistory(num1, num2, operator, result);
            
            picked = '';
            break;
        }

        default:
            console.log("Incorrent operator.")
            break;
    }
}