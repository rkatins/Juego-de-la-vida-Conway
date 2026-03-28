document.addEventListener('DOMContentLoaded', () => {
    fDibujarRejilla();
});

function fDibujarRejilla() {
    var grid = document.getElementById('grid');
    var totalCells = 2 * 2;

    // Creamos un `fragment` de documento, un `fragment` vendria a ser una "copia" del DOM
    // Vendria a se como el envoltorio de un caramelo con su envoltorio, vemos el envoltorio
    //  con forma pero realmente no hay nada en su interior
    var fragment = document.createDocumentFragment();

    for (let i = 0; i < totalCells; i++) {
        var cell = document.createElement('div');
        cell.classList.add('celula');
        fragment.appendChild(cell);
    }

    // Como se pinta todo en el `fragment` se deshabilita la opcion de poder usar
    // `document.get...` para ver el contenido
    grid.appendChild(fragment);
}