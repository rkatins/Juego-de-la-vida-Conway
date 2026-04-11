const range_ajusteGrid = document.getElementById('range_ajusteGrid')
const number_ajusteGrid = document.getElementById('inputText_number')

const btn_plus = document.getElementById('btn-plus')
const btn_minus = document.getElementById('btn-minus')

btn_plus.addEventListener('click', () => {
    if ((parseInt(number_ajusteGrid.value) + 1) <= 256) number_ajusteGrid.value = parseInt(number_ajusteGrid.value) + 1

    range_ajusteGrid.value = parseInt(number_ajusteGrid.value)

    // console.log({number_ajusteGrid: parseInt(number_ajusteGrid.value)});
})

btn_minus.addEventListener('click', () => {
    if ((parseInt(number_ajusteGrid.value) - 1) >= 10) number_ajusteGrid.value = parseInt(number_ajusteGrid.value) - 1

    range_ajusteGrid.value = parseInt(number_ajusteGrid.value)

    // console.log({number_ajusteGrid: parseInt(number_ajusteGrid.value)});
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
    fAjustarTamagno(range_ajusteGrid, number_ajusteGrid);
});

number_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(number_ajusteGrid, range_ajusteGrid);
});

function fAjustarTamagno(dar, recibir) {
    recibir.value = dar.value;

    fDibujarRejilla(dar.value);

    // Modifico directamente la variable `--grid-size` de `:root` del CSS asociado al DOM
    // Aparte de que `fragment` no permite editar sus estilos directamente
    document.documentElement.style.setProperty('--grid-size', dar.value);
}