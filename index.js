
let count =0;
let container = document.getElementById("sketchContainer");
document.getElementById("btn").addEventListener("click", formGrid);


for(i=0;i<35*35;i++){
        
    let gridCell = document.createElement("div");
    gridCell.classList.add("grids"); 
    gridCell.style.boxSizing="border-box";
    gridCell.style.width= "20px";
    gridCell.style.height= "20px";
gridCell.addEventListener("mouseover", colorChanger);
container.appendChild(gridCell);

}

function formGrid() {
        resetGrids();
    
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);
    let gridsWidth = parseFloat(700/inputValue)+"px";
    let gridsHeight=parseFloat(700/ inputValue)+"px";
   let gridSize = parseInt(inputValue); 
    for(i=0;i<gridSize*gridSize;i++){
        

        let gridCell = document.createElement("div");
        gridCell.classList.add("grids"); 
        gridCell.style.boxSizing="border-box";
        gridCell.style.width= gridsWidth;
        gridCell.style.height= gridsHeight;
    gridCell.addEventListener("mouseover", colorChanger);
    container.appendChild(gridCell);

    }
   
  }

  // function for mouse over color change

  

  function colorChanger(event) {
     let r = Math.floor(Math.random()*255);
     let g = Math.floor(Math.random()*255);
     let b = Math.floor(Math.random()*255);
     let color =`rgb(${r}, ${g}, ${b})`;
    event.target.style.backgroundColor= color;
    }

    //function to Reset Grids
    function resetGrids(){
        document.getElementById("sketchContainer").innerHTML= "";

    }