

/**
 * Lógica del Juego de la Vida de Conway
 */
class LogicaJuegoDeLaVida {
    constructor(tamagno) {
        this.tamagno = tamagno;
        this.grid = [];

        for (let i = 0; i < this.tamagno; i++) {
            this.grid.push(new Array(this.tamagno).fill(0));
        }
    }

    /**
     * Reinicia el tablero, poniendo todas las células como muertas (0)
     */
    fReiniciarJuego() {
        this.grid = [];

        for (let i = 0; i < this.tamagno; i++) {
            this.grid.push(new Array(this.tamagno).fill(0));
        }

        // Limpiar visualmente las celdas en el HTML
        document.querySelectorAll('.celula.marcada').forEach(celda => {
            celda.classList.remove('marcada');
        });

        console.log("¡El juego ha sido reiniciado con éxito!");
    }

    /**
     * Gestiona la selección y marcado de las casillas de la rejilla
     * con un límite máximo de casillas seleccionadas (total / 2)
     */
    fGestionarMarcadoCasillas() {
        const celdas = document.querySelectorAll('.celula');
        const maxMarcadas = Math.floor(celdas.length / 2);

        celdas.forEach(celda => {
            celda.addEventListener('click', () => {
                const marcadasActualmente = document.querySelectorAll('.celula.marcada').length;

                if (celda.classList.contains('marcada')) {
                    // Si ya está pintada, pasa a ser blanca/vacía al hacer clic
                    celda.classList.remove('marcada');
                } else {
                    // Se podrá marcar hasta un máximo de la mitad del total de casillas
                    if (marcadasActualmente < maxMarcadas) {
                        celda.classList.add('marcada');
                    }
                }
            });
        });
    }

    fGetTamagnoVentana() {
        const anchoVentana = window.innerWidth
        const altoVentana = window.innerHeight

        const menorMedida = Math.min(anchoVentana, altoVentana)

        console.log(menorMedida + 'px')
    }
}
