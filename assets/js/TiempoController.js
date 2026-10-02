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
}

const Tiempo = new TiempoController()

// --- Event Listeners ---
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