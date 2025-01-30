let isClickMode = false;
let mouseDown = false;

document.getElementById("btn").addEventListener("click", formGrid);
document.getElementById("toggleMode").addEventListener("click", toggleMode);

// Detect mouse button status for Click & Drag mode
document.body.addEventListener("mousedown", () => (mouseDown = true));
document.body.addEventListener("mouseup", () => (mouseDown = false));

// Pre-load an initial grid
preGrid();

function preGrid() {
    let container = document.getElementById("sketchContainer");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "700px";
    container.style.height = "700px";

    for (let i = 0; i < 35 * 35; i++) {
        let gridCell = createGridCell(20);
        container.appendChild(gridCell);
    }
}

function formGrid() {
    let container = document.getElementById("sketchContainer");
    
    // ✅ Clear previous grid properly
    container.innerHTML = ""; 
    
    let inputValue = parseInt(document.getElementById("input").value);
    
    if (inputValue < 1 || inputValue > 120) {
        alert("Please enter a number between 1 and 120!");
        preGrid(); // Load default grid
        return;
    }

    let cellSize = 700 / inputValue; // Ensuring perfect fit
    for (let i = 0; i < inputValue * inputValue; i++) {
        let gridCell = createGridCell(cellSize);
        container.appendChild(gridCell);
    }
}

// Function to create a grid cell with event listeners
function createGridCell(size) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grids");
    gridCell.style.boxSizing = "border-box";
    gridCell.style.width = `${size}px`;
    gridCell.style.height = `${size}px`;

    applyMode(gridCell);

    return gridCell;
}

// Apply the current drawing mode to a grid cell
function applyMode(gridCell) {
    gridCell.removeEventListener("mouseover", colorChanger);
    gridCell.removeEventListener("mousedown", colorChanger);

    if (isClickMode) {
        gridCell.addEventListener("mousedown", colorChanger);
        gridCell.addEventListener("mouseover", (event) => {
            if (mouseDown) colorChanger(event);
        });
    } else {
        gridCell.addEventListener("mouseover", colorChanger);
    }
}

// Function for mouseover color change
function colorChanger(event) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset grids
function resetGrids() {
    document.querySelectorAll(".grids").forEach(gridCell => {
        gridCell.style.backgroundColor = "transparent"; // Reset only color
    });
}

// Toggle between Hover mode and Click & Drag mode **without regenerating the grid**
function toggleMode() {
    isClickMode = !isClickMode;
    document.getElementById("toggleMode").textContent = isClickMode ? "Mode: Click & Drag" : "Mode: Hover";

    // Update event listeners for all existing grid cells without regenerating
    document.querySelectorAll(".grids").forEach(gridCell => {
        applyMode(gridCell);
    });
}

