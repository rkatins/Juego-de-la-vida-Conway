const range_ajusteGrid = document.getElementById('range_ajusteGrid')
const number_ajusteGrid = document.getElementById('inputText_number')
const btn_plus = document.getElementById('btn-plus')
const btn_minus = document.getElementById('btn-minus')

/**
 * Guarda el valor numérico actual al hacer foco en el campo de entrada.
 * Esto permite restaurar el último valor válido en caso de que el usuario introduzca un dato incorrecto.
 */
let ultimoValorNumericoValido = null

/**
 * Incrementa el tamaño de la cuadrícula en 1 celda al hacer clic en el botón (+).
 * Valida que el nuevo tamaño no supere el límite máximo de celdas calculado dinámicamente.
 */
btn_plus.addEventListener('click', () => {
    let val = parseInt(number_ajusteGrid.value) || 10
    const maxVal = window.maxCeldas || 256
    if (val + 1 <= maxVal) {
        number_ajusteGrid.value = val + 1
        fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
    }
})

/**
 * Decrementa el tamaño de la cuadrícula en 1 celda al hacer clic en el botón (-).
 * Valida que el nuevo tamaño no sea menor que el límite mínimo permitido de 10 celdas.
 */
btn_minus.addEventListener('click', () => {
    let val = parseInt(number_ajusteGrid.value) || 10
    if (val - 1 >= 10) {
        number_ajusteGrid.value = val - 1
        fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
    }
})

/**
 * Guarda el valor numérico actual al hacer foco en el campo de entrada.
 * Esto permite restaurar el último valor válido en caso de que el usuario introduzca un dato incorrecto.
 */
number_ajusteGrid.addEventListener('focus', (e) => {
    ultimoValorNumericoValido = e.target.value
})

/**
 * Valida el valor del tamaño al perder el foco en el campo numérico.
 * Si el valor no es un número, es menor de 10, o supera el máximo de celdas calculado,
 * se restaura el último valor válido registrado.
 * 
 * Explicación de la conversión (Regla de Tres):
 * - El valor de entrada (e.target.value) representa la CANTIDAD DE CELDAS en el tablero.
 * - fGetTamagnoVentana() retorna la medida del lado más corto de la ventana en PÍXELES.
 * - Queremos limitar el tamaño físico de la cuadrícula a un máximo de (píxeles - 40px).
 * - Como cada celda individual tiene un tamaño fijo de 10 píxeles:
 *     1 celda   ------->  10 píxeles
 *     X celdas  ------->  (Tamaño ventana en px - 40px)
 *     
 *     Multiplicamos cruzado: X * 10 = 1 * (ventana - 40)
 *     Despejamos X (celdas): X = (ventana - 40) / 10
 * 
 * - Por tanto, el límite máximo expresado en CELDAS es: (ventana - 40) / 10.
 */
number_ajusteGrid.addEventListener('blur', (e) => {
    const maxVal = window.maxCeldas || Math.floor((logica.fGetTamagnoVentana() - 40) / 10)
    if (isNaN(e.target.value) || e.target.value < 10 || e.target.value > maxVal) {
        number_ajusteGrid.value = ultimoValorNumericoValido
    }
})

/**
 * Escucha la entrada del control de rango (slider) para actualizar y redibujar la cuadrícula.
 */
range_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(range_ajusteGrid, number_ajusteGrid)
})

/**
 * Escucha la entrada de texto directo en el campo numérico para actualizar y redibujar la cuadrícula.
 */
number_ajusteGrid.addEventListener('input', () => {
    fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
})

class AjustesGrid {
    /**
     * Sincroniza el valor entre el control deslizante y el campo numérico, y
     * desencadena el redibujado de la cuadrícula en el DOM, actualizando además la variable CSS.
     * 
     * @param {HTMLElement} dar - El elemento de entrada que origina el cambio de valor.
     * @param {HTMLElement} recibir - El elemento de entrada que recibe el valor sincronizado.
     */
    fAjustarTamagno(dar, recibir) {
        recibir.value = dar.value

        fDibujarRejilla(dar.value)

        // Modificamos directamente la variable CSS --grid-size del DOM
        document.documentElement.style.setProperty('--grid-size', dar.value)
    }
}

// Instanciar la clase para que registre los manejadores de eventos inmediatamente.
const AjustesGridController = new AjustesGrid()
