class ReiniciarController {
    /**
     * Reinicia el tablero, poniendo todas las células como muertas (0)
     */
    fReiniciarJuego() {
        this.grid = []

        for (let i = 0; i < this.tamagno; i++) {
            this.grid.push(new Array(this.tamagno).fill(0))
        }

        // Limpiar visualmente las celdas en el HTML
        document.querySelectorAll('.celula.marcada').forEach(celda => {
            celda.classList.remove('marcada')
        })

        btn_play_ajustePasos.click()

        // TODO: que se cierre el panel abierto
    }
}

const Reiniciar = new ReiniciarController()