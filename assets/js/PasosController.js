class PasosController {
    juegoPausado = true; // ⏸️ Inicialmente pausado
    temporizador = null;  // ⏱️ Referencia del setInterval
    historialTableros = []; // 📚 Pila para poder retroceder pasos
    limiteHistorial = 50; // 🛡️ Evita consumir demasiada memoria

    /**
     * 🟢 Inicia la simulación continua.
     */
    fIniciarJuego() {
        if (!this.juegoPausado) return;
        this.juegoPausado = false;

        // Leemos la velocidad/intervalo o usamos 200ms por defecto
        const velocidad = window.velocidadSimulacion || 200;

        this.temporizador = setInterval(() => {
            this.fSiguientePaso();
        }, velocidad);
    }

    /**
     * ⏸️ Pausa la simulación.
     */
    fPausarJuego() {
        this.juegoPausado = true;
        if (this.temporizador) {
            clearInterval(this.temporizador);
            this.temporizador = null;
        }
    }

    /**
     * ⏭️ Avanza 1 generación (o N pasos según el input).
     */
    fSiguientePaso() {
        // Leemos la cantidad de pasos configurada en el panel (por defecto 1 en el bucle continuo)
        const pasosAvanzar = this.juegoPausado ? (parseInt(number_ajustePasos.value, 10) || 1) : 1;

        for (let i = 0; i < pasosAvanzar; i++) {
            // 1. Guardamos una copia profunda del estado actual en el historial antes de calcular
            this.fGuardarEstadoEnHistorial();

            // 2. Ejecutamos la siguiente generación en la clase Logica
            if (typeof Logica !== 'undefined') {
                Logica.fSiguienteGeneracion();
            }
        }
    }

    /**
     * ⏮️ Retrocede 1 generación restaurando el último estado guardado.
     */
    fRetrocederPaso() {
        if (!this.juegoPausado) return; // Solo retrocedemos si está pausado
        if (this.historialTableros.length === 0) return; // No hay estados previos

        const pasosRetroceder = parseInt(number_ajustePasos.value, 10) || 1;

        for (let i = 0; i < pasosRetroceder; i++) {
            if (this.historialTableros.length > 0) {
                // Sacamos el último tablero de la pila
                const tableroAnterior = this.historialTableros.pop();

                if (typeof Logica !== 'undefined') {
                    Logica.tablero = tableroAnterior;
                    Logica.fPintarGeneracionEnDOM();
                }
            }
        }
    }

    /**
     * 💾 Realiza una copia profunda de la matriz de celdas para el historial.
     */
    fGuardarEstadoEnHistorial() {
        if (typeof Logica !== 'undefined' && Logica.tablero) {
            // Copia profunda de la matriz 2D
            const copiaTablero = Logica.tablero.map(fila => [...fila]);
            this.historialTableros.push(copiaTablero);

            // Mantenemos la memoria bajo control eliminando los más antiguos
            if (this.historialTableros.length > this.limiteHistorial) {
                this.historialTableros.shift();
            }
        }
    }

    /**
     * 🗑️ Limpia el historial (llámalo al reiniciar o cambiar tamaño de rejilla).
     */
    fLimpiarHistorial() {
        this.historialTableros = [];
    }
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
}

const Pasos = new PasosController()

// --- Event Listeners ---
// --- Elementos del DOM ---
const btn_play_ajustePasos = document.getElementById('ajustePasos-btn-play');
const btn_right_ajustePasos = document.getElementById('ajustePasos-btn-right');
const btn_left_ajustePasos = document.getElementById('ajustePasos-btn-left');

// ▶️ / ⏸️ Alternar reproducción
btn_play_ajustePasos.addEventListener('click', () => {
    // <use> es el elemento hijo del <svg> que indica qué dibujo/icono concreto se debe renderizar
    const useElem = btn_play_ajustePasos.querySelector('use');

    if (Pasos.juegoPausado) {
        // ▶️ Si estaba pausado, iniciamos
        Pasos.fIniciarJuego();
        // ⏹️ Cambiamos el icono a pausa
        if (useElem) useElem.setAttribute('href', "./assets/icons/icons.svg#pause");
    } else {
        // ⏸️ Si estaba corriendo, pausamos
        Pasos.fPausarJuego();
        // ▶️ Cambiamos el icono a play
        if (useElem) useElem.setAttribute('href', "./assets/icons/icons.svg#play");
    }
});

// ⏭️ Botón avanzar paso(s)
btn_right_ajustePasos.addEventListener('click', () => {
    Pasos.fSiguientePaso();
});

// ⏮️ Botón retroceder paso(s)
btn_left_ajustePasos.addEventListener('click', () => {
    Pasos.fRetrocederPaso();
});