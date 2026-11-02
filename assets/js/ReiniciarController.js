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

        let useElem = btn_play_ajustePasos.querySelector('use')

        Pasos.juegoPausado = true
        btn_start_game.classList.remove('hide-tag')

        icon_ajustePasos.parentNode.classList.add('disable-btn')
        useElem.setAttribute('href', "./assets/icons/icons.svg#play")

        /**
         * Se seleccionan todos los paneles directamente desde el DOM (.panel-ajustes)
         * para garantizar su cierre sin depender del estado del array `NavBar.panelAbierto`,
         * el cual puede desincronizarse al abrir/cerrar paneles de forma individual.
         */
        document.querySelectorAll('.panel-ajustes').forEach(panel => {
            panel.classList.remove('activo')
        })

        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.style.visibility = ""
            tooltip.style.opacity = ""
        })

        NavBar.panelAbierto = []
    }
}

const Reiniciar = new ReiniciarController()