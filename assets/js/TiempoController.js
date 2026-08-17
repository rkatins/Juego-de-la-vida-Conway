class TiempoController {
    /**
     * Sincroniza el valor de velocidad.
     */
    fAjustarVelocidad(dar, recibir) {
        recibir.value = dar.value
    }

    /**
     * Incrementa la velocidad.
     */
    fIncrementarBtnPlus() {
        let val = parseInt(number_ajusteVelocidad.value) || 500
        const maxVal = 2000
        if (val + 100 <= maxVal) {
            number_ajusteVelocidad.value = val + 100
            range_ajusteVelocidad.value = val + 100
        }
    }

    /**
     * Decrementa la velocidad.
     */
    fDecrementarBtnMinus() {
        let val = parseInt(number_ajusteVelocidad.value) || 500
        const minVal = 100
        if (val - 100 >= minVal) {
            number_ajusteVelocidad.value = val - 100
            range_ajusteVelocidad.value = val - 100
        }
    }

    fChangeInputNumber() {
        range_ajusteVelocidad.value = number_ajusteVelocidad.value
    }

    fChangeInputRange() {
        number_ajusteVelocidad.value = range_ajusteVelocidad.value
    }

    fAbrirCerrarPanel() {
        const panel_ajusteVelocidad = document.querySelector("#ajusteVelocidad-panel")
        panel_ajusteVelocidad.classList.toggle("activo")
    }

    fAlternarToolTip() {
        const tooltip_ajusteVelocidad = document.querySelector("#AjustesVelocidad-tooltip")
        const panel_ajusteVelocidad = document.querySelector("#ajusteVelocidad-panel")

        tooltip_ajusteVelocidad.style.visibility = panel_ajusteVelocidad.classList.contains("activo") ? "hidden" : ""
        tooltip_ajusteVelocidad.style.opacity = panel_ajusteVelocidad.classList.contains("activo") ? "0" : ""
    }
}

const Tiempo = new TiempoController()

// --- Event Listeners ---
const icon_ajusteVelocidad = document.querySelector("#AjustesVelocidad-icon > img")
const btn_close_panelAjusteVelocidad = document.querySelector("#ajusteVelocidad-panel > .btn-close")
const range_ajusteVelocidad = document.getElementById('ajusteVelocidad-range')
const number_ajusteVelocidad = document.getElementById('ajusteVelocidad-number')
const btn_plus_ajusteVelocidad = document.getElementById('ajusteVelocidad-btn-plus')
const btn_minus_ajusteVelocidad = document.getElementById('ajusteVelocidad-btn-minus')

range_ajusteVelocidad.addEventListener('input', () => {
    Tiempo.fAjustarVelocidad(range_ajusteVelocidad, number_ajusteVelocidad)
})

number_ajusteVelocidad.addEventListener('input', () => {
    Tiempo.fChangeInputNumber()
})

btn_plus_ajusteVelocidad.addEventListener('click', () => {
    Tiempo.fIncrementarBtnPlus()
})

btn_minus_ajusteVelocidad.addEventListener('click', () => {
    Tiempo.fDecrementarBtnMinus()
})

icon_ajusteVelocidad.addEventListener('click', () => {
    console.log("Icono Velocidad clickeado")
    Tiempo.fAbrirCerrarPanel()
    Tiempo.fAlternarToolTip()
})

btn_close_panelAjusteVelocidad.addEventListener('click', (e) => {
    console.log("Cerrar panel Velocidad clickeado")
    e.stopPropagation()
    Tiempo.fAbrirCerrarPanel()
    Tiempo.fAlternarToolTip()
})