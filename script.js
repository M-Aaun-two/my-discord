const background = document.querySelector('.background');

function createGrid() {
    // Clear existing squares
    background.innerHTML = '';

    // Calculate the number of squares needed to fill the screen
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const squareSize = 40; // Fixed size for each square
    const cols = Math.ceil(screenWidth / squareSize);
    const rows = Math.ceil(screenHeight / squareSize);

    // Create squares
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        background.appendChild(square);
    }
}

// Initial creation of the grid
createGrid();

// Recreate the grid when the window is resized
window.addEventListener('resize', createGrid);

let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
});

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

