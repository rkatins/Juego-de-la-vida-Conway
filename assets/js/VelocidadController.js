class VelocidadController {
    fAplicarNuevaVelocidad() {
        /*
         * `clearInterval()` y `setInterval()` serian como el panel para indicar la velocidad 
         * propio/interno, no visible para el jugador
         */
        
        if (juegoEnEjecucion) {
            clearInterval(velocidadInterna)

            let velocidad = parseInt(number_ajusteVelocidad.value) || 100

            /*
             * Vuelves a lanzar la función que calcula la siguiente generación en caso 
             * de que se modifique la velocidad si se tmodifica esta desde el panel 
             * mientras el juego esta en ejecución
             * 
             * Reproductor = PasosController.js -> Tarea 37
             * En caso de poner `()`, la función se ejecutaría inmediatamente segun se lee.
             * 
             * Muy entre comillas -> setInterval <- seria com un ejecutador/temporizador
             * para ejecutar la funcion `Reproductor.fWIP`, la variable `velocidad` seria
             * el periodo/intervalo de cada cuanto ejecuta dicha funcion indicada antes
             */
            velocidadInterna = setInterval(Reproductor.fWIP, velocidad);
        }
    }

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
        const tooltip_ajusteVelocidad = document.querySelector("#ajusteVelocidad-tooltip")
        const panel_ajusteVelocidad = document.querySelector("#ajusteVelocidad-panel")

        tooltip_ajusteVelocidad.style.visibility = panel_ajusteVelocidad.classList.contains("activo") ? "hidden" : ""
        tooltip_ajusteVelocidad.style.opacity = panel_ajusteVelocidad.classList.contains("activo") ? "0" : ""
    }
}

const Velocidad = new VelocidadController()

// --- Event Listeners ---
const icon_ajusteVelocidad = document.querySelector("#ajusteVelocidad-icon > svg")
const btn_close_panelAjusteVelocidad = document.querySelector("#ajusteVelocidad-panel > .btn-close")
const range_ajusteVelocidad = document.getElementById('ajusteVelocidad-range')
const number_ajusteVelocidad = document.getElementById('ajusteVelocidad-number')
const btn_plus_ajusteVelocidad = document.getElementById('ajusteVelocidad-btn-plus')
const btn_minus_ajusteVelocidad = document.getElementById('ajusteVelocidad-btn-minus')

range_ajusteVelocidad.addEventListener('input', () => {
    Velocidad.fAjustarVelocidad(range_ajusteVelocidad, number_ajusteVelocidad)
})

number_ajusteVelocidad.addEventListener('input', () => {
    Velocidad.fChangeInputNumber()
})

btn_plus_ajusteVelocidad.addEventListener('click', () => {
    Velocidad.fIncrementarBtnPlus()
})

btn_minus_ajusteVelocidad.addEventListener('click', () => {
    Velocidad.fDecrementarBtnMinus()
})

icon_ajusteVelocidad.addEventListener('click', () => {
    Velocidad.fAbrirCerrarPanel()
    Velocidad.fAlternarToolTip()
})

btn_close_panelAjusteVelocidad.addEventListener('click', (e) => {
    e.stopPropagation()
    Velocidad.fAbrirCerrarPanel()
    Velocidad.fAlternarToolTip()
})