const container = document.getElementById('gridContainer');

function makeGrid() {
    container.innerHTML = '';
    let userGridSize = prompt('What size grid would you like? Max size is 100.', '');
    let validPrompt = false;

    while (!validPrompt) {
        if (userGridSize <= 100 && userGridSize > 0 && userGridSize !== null && !isNaN(userGridSize) && userGridSize.trim() !== '') {
            validPrompt = true;
        } else {
            userGridSize = prompt('Invalid entry. Please enter a number between 1 and 100.')
        }
    }

    container.style.gridTemplateColumns = `repeat(${userGridSize}, 11px)`;

    for (i = 0; i < userGridSize * userGridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'gridSquare');
      
        container.appendChild(gridSquare);
    }

    const squareHover = document.querySelectorAll('.gridSquare');
    squareHover.forEach(hover => {hover.addEventListener('mouseenter', squareColorChange);})   
}

function squareColorChange(hover) {
    const squareHover = document.querySelectorAll('.gridSquare');
    hover.target.classList.add('hovered');
    squareHover.forEach(hover => {
        if (hover.classList.contains('hovered')) {
            hover.style.backgroundColor = "blue"
        }
    })  
}

makeGrid();

const gridButton = document.getElementById('createGrid').addEventListener('click', () => {makeGrid()});







