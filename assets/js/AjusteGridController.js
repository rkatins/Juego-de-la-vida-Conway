/**
 * Guarda el valor numérico actual al hacer foco en el campo de entrada.
 * Esto permite restaurar el último valor válido en caso de que el usuario introduzca un dato incorrecto.
 */
// let ultimoValorNumericoValido = null

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
// number_ajusteGrid.addEventListener('blur', (e) => {
//     const maxVal = window.maxCeldas || Math.floor((Logica.fGetTamagnoVentana() - 40) / 10)
//     if (isNaN(e.target.value) || e.target.value < 10 || e.target.value > maxVal) {
//         number_ajusteGrid.value = ultimoValorNumericoValido
//     }
// })

class AjustesGridController {
    /**
     * Sincroniza el valor entre el control deslizante y el campo numérico, y
     * desencadena el redibujado de la cuadrícula en el DOM, actualizando además la variable CSS.
     * 
     * @param {HTMLElement} dar - El elemento de entrada que origina el cambio de valor.
     * @param {HTMLElement} recibir - El elemento de entrada que recibe el valor sincronizado.
     */
    fAjustarTamagnoGrid(dar, recibir) {
        recibir.value = dar.value

        fDibujarRejilla(dar.value)

        // Modificamos directamente la variable CSS --grid-size del DOM
        document.documentElement.style.setProperty('--grid-size', dar.value)
    }

    /**
     * Incrementa el tamaño de la cuadrícula en 1 celda al hacer clic en el botón (+).
     * Valida que el nuevo tamaño no supere el límite máximo de celdas calculado dinámicamente.
     */
    fIncrementarBtnPlus() {
        let val = parseInt(number_ajusteGrid.value) || 10
        const maxVal = window.maxCeldas || 256
        if (val + 1 <= maxVal) {
            number_ajusteGrid.value = val + 1
            range_ajusteGrid.value = val + 1
            // AjustesGrid.fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
        }
    }

    /**
     * Decrementa el tamaño de la cuadrícula en 1 celda al hacer clic en el botón (-).
     * Valida que el nuevo tamaño no sea menor que el límite mínimo permitido de 10 celdas.
     */
    fDecrementarBtnMinus() {
        let val = parseInt(number_ajusteGrid.value) || 10
        if (val - 1 >= 10) {
            number_ajusteGrid.value = val - 1
            range_ajusteGrid.value = val - 1
            // AjustesGrid.fAjustarTamagno(number_ajusteGrid, range_ajusteGrid)
        }
    }

    /**
     * Aumenta/Decrementa el valor del control deslizante en función del valor introducido en el campo numérico
     */
    fChangeInputNumber() {
        range_ajusteGrid.value = number_ajusteGrid.value
    }

    /**
     * Aumenta/Decrementa el valor numérico del tamaño de la rejilla en función del valor indicado por el control deslizante
     */
    fChangeInputRange() {
        number_ajusteGrid.value = range_ajusteGrid.value
    }

    /**
     * Abre o cierra el panel de ajustes del Grid
     */
    fAbrirCerrarPanel() {
        const panel_ajusteGrid = document.querySelector("#ajusteGrid-panel")

        panel_ajusteGrid.classList.toggle("activo")
    }

    /**
     * Alterna la visibilidad del ToolTip
     */
    fAlternarToolTip() {
        const tooltip_ajusteGrid = document.querySelector("#AjustesGrid-tooltip")
        const panel_ajusteGrid = document.querySelector("#ajusteGrid-panel")

        tooltip_ajusteGrid.style.visibility = panel_ajusteGrid.classList.contains("activo") ? "hidden" : ""
        tooltip_ajusteGrid.style.opacity = panel_ajusteGrid.classList.contains("activo") ? "0" : ""

        /* Alternativa con if/else (por si resulta más legible):
        if (panel_ajusteGrid.classList.contains("activo")) {
            tooltip_ajusteGrid.style.visibility = "hidden";
            tooltip_ajusteGrid.style.opacity = "0";
        } else {
            tooltip_ajusteGrid.style.visibility = "";
            tooltip_ajusteGrid.style.opacity = "";
        }
        */
    }
}

// Instanciar la clase para que registre los manejadores de eventos inmediatamente.
const AjustesGrid = new AjustesGridController()

// --- addEventListener ---
const icon_ajusteGrid = document.querySelector("#AjustesGrid-icon > img")
const btn_close_panelAjusteGrid = document.querySelector("#ajusteGrid-panel > .btn-close")
const range_ajusteGrid = document.getElementById('ajusteGrid-range')
const number_ajusteGrid = document.getElementById('ajusteGrid-number')
const btn_plus_ajusteGrid = document.getElementById('ajusteGrid-btn-plus')
const btn_minus_ajusteGrid = document.getElementById('ajusteGrid-btn-minus')

range_ajusteGrid.addEventListener('input', () => {
    AjustesGrid.fAjustarTamagnoGrid()
})

number_ajusteGrid.addEventListener('input', () => {
    AjustesGrid.fChangeInputNumber()
})

btn_plus_ajusteGrid.addEventListener('click', () => {
    AjustesGrid.fIncrementarBtnPlus()
})

btn_minus_ajusteGrid.addEventListener('click', () => {
    AjustesGrid.fDecrementarBtnMinus()
})

icon_ajusteGrid.addEventListener('click', () => {
    AjustesGrid.fAbrirCerrarPanel()
    AjustesGrid.fAlternarToolTip()
})

btn_close_panelAjusteGrid.addEventListener('click', (e) => {
    // Función interna de JS para evitar que el clic se propague a los elementos padres
    e.stopPropagation()

    AjustesGrid.fAbrirCerrarPanel()
    AjustesGrid.fAlternarToolTip()
})

