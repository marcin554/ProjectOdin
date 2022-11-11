 
  const container = document.querySelector("#paintGrid")
 
 function AddSquares(int){

       
   
        for (let i = 0; i < int; i++) {
            
            
            const content = document.createElement('div');
            content.classList.add('paintArea');
          
            for (let y = 0; y < int - 1; y++) {
               
                const content = document.createElement('div');
                content.classList.add('paintArea');
         
                container.appendChild(content);
               
            }

            container.appendChild(content);

             const paint = document.getElementById('paintGrid');
             paint.style.setProperty('grid-template-columns', 'repeat(' + int + ', 0fr)');
            
        }
        changeColor();
        
    }




    function changeColor(){

        const squares = document.querySelectorAll('.paintArea');

        squares.forEach((square) => {
            
            square.addEventListener('mouseover', () => {
         
                square.classList.add('change-color');
                
                });
    
        });
    
    }

    const button = document.querySelector('#reset-button');

    button.addEventListener('click', () => {
        console.log('wwww');
        
        const resetColor = document.querySelectorAll('.change-color');

        resetColor.forEach(element =>{
            element.classList.remove('change-color')
        })



    });

    const button2 = document.querySelector('#set-amount');

    button2.addEventListener('click', () => {
        console.log('eee');
        let amount = prompt("Enter the amount. Max amount 100");
        if (amount > 100){
            amount = 100;
        }

        const squares = document.querySelectorAll('.paintArea');

        squares.forEach(element =>{
            element.remove();
        })

       AddSquares(amount);

        
    



    });