 
  const container = document.querySelector("#paintGrid")
 
 function AddSquares(int){

       
        
        for (let i = 0; i < int; i++) {
            

            const content = document.createElement('div');
            content.classList.add('paintArea');
            content.textContent = "2";
            for (let y = 0; y < int; y++) {
               
                const content = document.createElement('div');
                content.classList.add('paintArea');
                content.textContent = "2";
                container.appendChild(content);
            }

            container.appendChild(content);
            
        }
        changeColor();
        
    }




    function changeColor(){

        const squares = document.querySelectorAll('.paintArea');

        squares.forEach((square) => {
            
            square.addEventListener('mouseover', () => {
                console.log(square.classList)
                square.classList.add('change-color');
                
                });
    
        });
    
    }