// Variable booleana para saber el estado del juego
let juegoPausado = true;

class PasosController {
    /*
     * Actualiza el icono según el estado de juegoPausado:
     * true  -> #pause
     * false -> #play
     */
    fActualizarIcono() {
        let useElem = btn_play_ajustePasos.querySelector('use')

        if (!useElem) return

        useElem.setAttribute('href', this.juegoPausado ?
            "./assets/icons/icons.svg#play" :
            "./assets/icons/icons.svg#pause"
        )
    }

    /*
    * Alterna el estado de pausa y actualiza la vista
    * No se pone dentro de `fActualizarIcono()` por que seria un poco
    * como algo que se retroalimenta a si mis continuamente. Uno
    * enciende por que lo ve apagado y el otro apaga por que lo ve encendido.
    */
    fTogglePausa() {
        this.juegoPausado = !this.juegoPausado;

        this.fActualizarIcono();
    }

    /*
     * Sincroniza el valor de pasos.
     */
    fAjustarPasos(dar, recibir) {
        recibir.value = dar.value
    }

    /*
     * Incrementa la cantidad de pasos.
     */
    fIncrementarBtnPlus() {
        let val = parseInt(number_ajustePasos.value) || 1
        const maxVal = 10
        if (val + 1 <= maxVal) {
            number_ajustePasos.value = val + 1
            range_ajustePasos.value = val + 1
        }
    }

    /*
     * Decrementa la cantidad de pasos.
     */
    fDecrementarBtnMinus() {
        let val = parseInt(number_ajustePasos.value) || 1
        const minVal = 1
        if (val - 1 >= minVal) {
            number_ajustePasos.value = val - 1
            range_ajustePasos.value = val - 1
        }
    }

    /*
     * Sincroniza el valor del control deslizante (range) con el valor introducido en el campo numérico.
     */
    fChangeInputNumber() {
        range_ajustePasos.value = number_ajustePasos.value
    }

    /*
     * Sincroniza el valor del campo numérico con el valor indicado por el control deslizante (range).
     */
    fChangeInputRange() {
        number_ajustePasos.value = range_ajustePasos.value
    }

    /*
     * Abre o cierra el panel de ajustes de pasos alternando la clase alternando el valor de la clase 'activo'.
     */
    fAbrirCerrarPanel() {
        const panel_ajustePasos = document.querySelector("#ajustePasos-panel")
        panel_ajustePasos.classList.toggle("activo")
    }

    /*
     * Alterna la visibilidad y opacidad del tooltip según el estado del panel.
     * > El tooltip se oculta si el panel está activo.
     */
    fAlternarToolTip() {
        const tooltip_ajustePasos = document.querySelector("#ajustePasos-tooltip")
        const panel_ajustePasos = document.querySelector("#ajustePasos-panel")

        tooltip_ajustePasos.style.visibility = panel_ajustePasos.classList.contains("activo") ? "hidden" : ""
        tooltip_ajustePasos.style.opacity = panel_ajustePasos.classList.contains("activo") ? "0" : ""
    }
}

const Pasos = new PasosController()

// --- Event Listeners ---
const icon_ajustePasos = document.querySelector("#ajustePasos-icon > svg")
const btn_close_panelAjustePasos = document.querySelector("#ajustePasos-panel > .btn-close")
const btn_play_ajustePasos = document.getElementById('ajustePasos-btn-play')
const btn_right_ajustePasos = document.getElementById('ajustePasos-btn-right')
const btn_left_ajustePasos = document.getElementById('ajustePasos-btn-left')
const btn_start_game = document.getElementById('btn-start-game')

/*
 * Al cargar la web se hara visible un boton.
 * Al pulsarlo habilitará una opcion de la navBar y dicho boton ya no sera visible 
 */
document.addEventListener('DOMContentLoaded', () => {
    let useElem = btn_play_ajustePasos.querySelector('use')

    if (juegoPausado) {
        juegoPausado = true

        // Si tiene la clase `hide-tag` se la quita para que sea visible
        btn_start_game.classList.remove('hide-tag')

        // No permite el hacer `click` sobre un boton del navBar a la vez que le da un aspecto como deshabilitado
        icon_ajustePasos.classList.add('disable-btn')
        // Aunque el `SVG` no se vea cambiar el icono que muestra para evitar confusiones de cualquier tipo
        useElem.setAttribute('href', "./assets/icons/icons.svg#play")
    }
})

/*
 * Alterna el estado de pausa o reproducción del juego al pulsar el botón play/pause del panel.
 */
btn_play_ajustePasos.addEventListener('click', () => {
    Pasos.fTogglePausa()
})

/*
 * Abre o cierra el panel de pasos y restaura la visibilidad del tooltip al hacer clic en el icono del navBar.
 */
icon_ajustePasos.addEventListener('click', () => {
    Pasos.fAbrirCerrarPanel()
    Pasos.fAlternarToolTip()
})

/*
 * Cierra el panel de pasos y restaura la visivilidad delel tooltip al hacer clic en el botón de cerrar (x).
 */
btn_close_panelAjustePasos.addEventListener('click', (e) => {
    e.stopPropagation()
    Pasos.fAbrirCerrarPanel()
    Pasos.fAlternarToolTip()
})

/*
 * Al pulsar el boton se iniciará la partida y dicho boton ya no estará disponible,
 * habilitando en su ejecucion una opción del navBar
 */
btn_start_game.addEventListener('click', () => {
    let useElem = btn_play_ajustePasos.querySelector('use')

    juegoPausado = false

    // Añade la clase para ocultar el boton que permite iniciar la partida
    btn_start_game.classList.add('hide-tag')
    
    // El icon/btn del navBar es clickable y recupera su color para dar una respuesta visual de habilitado
    icon_ajustePasos.classList.remove('disable-btn')
    useElem.setAttribute('href', "./assets/icons/icons.svg#pause")
})