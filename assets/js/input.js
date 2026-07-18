const range_ajusteGrid = document.getElementById('range_ajusteGrid')
const number_ajusteGrid = document.getElementById('inputText_number')

const btn_plus = document.getElementById('btn-plus')
const btn_minus = document.getElementById('btn-minus')

btn_plus.addEventListener('click', () => {
    let val = parseInt(number_ajusteGrid.value) || 10;
    if (val + 1 <= 256) {
        number_ajusteGrid.value = val + 1;
        fAjustarTamagno(number_ajusteGrid, range_ajusteGrid);
    }
})

btn_minus.addEventListener('click', () => {
    let val = parseInt(number_ajusteGrid.value) || 10;
    if (val - 1 >= 10) {
        number_ajusteGrid.value = val - 1;
        fAjustarTamagno(number_ajusteGrid, range_ajusteGrid);
    }
})

var ultimoValorNumericoValido = null
number_ajusteGrid.addEventListener('focus', (e) => {
    ultimoValorNumericoValido = e.target.value
})

number_ajusteGrid.addEventListener('blur', (e) => {
    console.log({ultimoValorNumericoValido});

    if (isNaN(e.target.value) || e.target.value < 10 || e.target.value > 256) number_ajusteGrid.value = ultimoValorNumericoValido
})

range_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(range_ajusteGrid, number_ajusteGrid)
})

number_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
})

function fAjustarTamagno(dar, recibir) {
    recibir.value = dar.value;

    fDibujarRejilla(dar.value);

    // Modifico directamente la variable `--grid-size` de `:root` del CSS asociado al DOM
    // Aparte de que `fragment` no permite editar sus estilos directamente
    document.documentElement.style.setProperty('--grid-size', dar.value);
}