function makeGrid() {
    const container = document.getElementById('gridContainer');
    const gridRows = 16;
    const gridColumns = 16;

    for(i = 0; i < gridRows * gridColumns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'gridSquare');
      
        container.appendChild(gridSquare);
    }

}

makeGrid();
