/**
 * Lógica del Juego de la Vida de Conway
 */
class LogicaJuegoDeLaVida {
    /**
     * Gestiona la selección y marcado de las casillas de la rejilla
     * con un límite máximo de casillas seleccionadas (total / 2)
     */
    fGestionarMarcadoCasillas() {
        const celdas = document.querySelectorAll('.celula');
        const maxMarcadas = Math.floor(celdas.length / 2);

        // Asocia un evento click a cada celda para marcarla o desmarcarla
        celdas.forEach(celda => {
            celda.addEventListener('click', () => {
                const marcadasActualmente = document.querySelectorAll('.celula.marcada').length

                if (celda.classList.contains('marcada')) {
                    // Si ya está pintada, pasa a ser blanca/vacía al hacer clic
                    celda.classList.remove('marcada')
                } else {
                    // Se podrá marcar hasta un máximo de la mitad del total de casillas
                    if (marcadasActualmente < maxMarcadas) {
                        celda.classList.add('marcada')
                    }
                }
            })
        })
    }

    /**
     * Calcula y retorna la menor dimensión de la ventana del navegador en píxeles.
     */
    fGetTamagnoVentana() {
        const anchoVentana = window.innerWidth
        const altoVentana = window.innerHeight

        const menorMedida = Math.min(anchoVentana, altoVentana)

        console.log(menorMedida + 'px')
        return menorMedida
    }
}

// Instancia global compartida por todos los scripts
const Logica = new LogicaJuegoDeLaVida(10)
