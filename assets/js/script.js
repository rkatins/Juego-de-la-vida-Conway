document.addEventListener('DOMContentLoaded', () => {
    fDibujarRejilla(10);
});

function fDibujarRejilla(tamagno) {
    var grid = document.getElementById('grid');
    grid.innerHTML = '';

    var totalCeldas = Math.pow(tamagno, 2);

    for (let i = 0; i < totalCeldas; i++) {
        var cell = document.createElement('div');
        cell.classList.add('celula');
        
        grid.appendChild(cell);
    }
}