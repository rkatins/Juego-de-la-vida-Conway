class PasosController {
    // Varisblr booleano para saber el estado del juego
    juegoPausado = false;

    /**
     * Sincroniza el valor de pasos.
     */
    fAjustarPasos(dar, recibir) {
        recibir.value = dar.value
    }

    /**
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

    /**
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

    fChangeInputNumber() {
        range_ajustePasos.value = number_ajustePasos.value
    }

    fChangeInputRange() {
        number_ajustePasos.value = range_ajustePasos.value
    }

    fAbrirCerrarPanel() {
        const panel_ajustePasos = document.querySelector("#ajustePasos-panel")
        panel_ajustePasos.classList.toggle("activo")
    }

    fAlternarToolTip() {
        const tooltip_ajustePasos = document.querySelector("#ajustePasos-tooltip")
        const panel_ajustePasos = document.querySelector("#ajustePasos-panel")

        tooltip_ajustePasos.style.visibility = panel_ajustePasos.classList.contains("activo") ? "hidden" : ""
        tooltip_ajustePasos.style.opacity = panel_ajustePasos.classList.contains("activo") ? "0" : ""
    }
}

const Pasos = new PasosController()

// --- Event Listeners ---
const icon_ajustePasos = document.querySelector("#ajustePasos-icon > img")
const btn_close_panelAjustePasos = document.querySelector("#ajustePasos-panel > .btn-close")
const btn_play_ajustePasos = document.getElementById('ajustePasos-btn-play')
const btn_right_ajustePasos = document.getElementById('ajustePasos-btn-right')
const btn_left_ajustePasos = document.getElementById('ajustePasos-btn-left')

// number_ajustePasos.addEventListener('input', () => {
//     Pasos.fChangeInputNumber()
// })

// btn_plus_ajustePasos.addEventListener('click', () => {
//     Pasos.fIncrementarBtnPlus()
// })

// btn_minus_ajustePasos.addEventListener('click', () => {
//     Pasos.fDecrementarBtnMinus()
// })

btn_play_ajustePasos.addEventListener('click', () => {
    Pasos.juegoPausado ? btn_play_ajustePasos.src = "./assets/icons/play.svg" : btn_play_ajustePasos.src = "./assets/icons/pause.svg"
    Pasos.juegoPausado ? Pasos.juegoPausado = false : Pasos.juegoPausado = true
})

icon_ajustePasos.addEventListener('click', () => {
    Pasos.fAbrirCerrarPanel()
    Pasos.fAlternarToolTip()
})

btn_close_panelAjustePasos.addEventListener('click', (e) => {
    e.stopPropagation()
    Pasos.fAbrirCerrarPanel()
    Pasos.fAlternarToolTip()
})