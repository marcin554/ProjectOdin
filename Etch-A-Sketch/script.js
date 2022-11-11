 
  const container = document.querySelector("#paintGrid")
 
 function AddSquares(int){

       
   
        for (let i = 0; i < int; i++) {
            
            
            const content = document.createElement('div');
            content.classList.add('paintArea');
            content.textContent = ".";
            for (let y = 0; y < int; y++) {
               
                const content = document.createElement('div');
                content.classList.add('paintArea');
                content.textContent = ".";
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