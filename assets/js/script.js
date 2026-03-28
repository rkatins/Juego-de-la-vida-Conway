const range_ajusteGrid = document.getElementById('range_ajusteGrid')
const number_ajusteGrid = document.getElementById('number_ajusteGrid')

document.addEventListener('DOMContentLoaded', () => {
    fDibujarRejilla(10);
});

range_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(range_ajusteGrid, number_ajusteGrid);
});

number_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(number_ajusteGrid, range_ajusteGrid);
});

function fDibujarRejilla(tamagno) {
    var grid = document.getElementById('grid');
    grid.innerHTML = '';

    // Creamos un `fragment` de documento, un `fragment` vendria a ser una "copia" del DOM
    // Vendria a se como el envoltorio de un caramelo con su envoltorio, vemos el envoltorio
    //  con forma pero realmente no hay nada en su interior
    var fragment = document.createDocumentFragment();

    var totalCeldas = Math.pow(tamagno, 2);

    for (let i = 0; i < totalCeldas; i++) {
        var cell = document.createElement('div');

        cell.classList.add('celula');
        fragment.appendChild(cell);
    }

    // Como se pinta todo en el `fragment` se deshabilita la opcion de poder usar
    // `document.get...` para ver el contenido
    grid.appendChild(fragment);
}

function fAjustarTamagno(dar, recibir) {
    recibir.value = dar.value;

    fDibujarRejilla(dar.value);

    // Modifico directamente la variable `--grid-size` de `:root` del CSS asociado al DOM
    // Aparte de que `fragment` no permite editar sus estilos directamente
    document.documentElement.style.setProperty('--grid-size', dar.value);
}