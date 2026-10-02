/**
 * Lógica del Juego de la Vida de Conway
 */
class LogicaJuegoDeLaVida {
    /**
     * Inicializa la lógica del juego con un tamaño de tablero dado.
     */
    constructor(tamagnoInicial) {
        this.tamagno = tamagnoInicial
        this.tablero = this.fCrearTableroVacio()
    }

    /**
     * 🏗️ Genera una matriz NxN rellena de ceros (células muertas).
     */
    fCrearTableroVacio() {
        return Array.from({ length: this.tamagno }, () => new Array(this.tamagno).fill(0))
    }

    /**
     * 🔄 Redimensiona la matriz en memoria cuando cambia el slider/input.
     */
    fActualizarTamagno(nuevoTamagno) {
        this.tamagno = parseInt(nuevoTamagno, 10)
        this.tablero = this.fCrearTableroVacio()
    }

    /**
     * 👆 Tu función adaptada: gestiona la vista (DOM) Y la memoria (Array)
     */
    fGestionarMarcadoCasillas() {
        const celdas = document.querySelectorAll('.celula')
        const maxMarcadas = Math.floor(celdas.length / 2)

        celdas.forEach((celda, index) => {
            // Calculamos fila y columna a partir del índice secuencial del grid
            const fila = Math.floor(index / this.tamagno)
            const col = index % this.tamagno

            celda.addEventListener('click', () => {
                const marcadasActualmente = document.querySelectorAll('.celula.marcada').length

                if (celda.classList.contains('marcada')) {
                    celda.classList.remove('marcada')
                    this.tablero[fila][col] = 0 // 👈 Guardamos célula muerta en memoria
                } else {
                    if (marcadasActualmente < maxMarcadas) {
                        celda.classList.add('marcada')
                        this.tablero[fila][col] = 1 // 👈 Guardamos célula viva en memoria
                    }
                }
            })
        })
    }

    /**
     * 🎨 Refleja el estado de la matriz en el HTML tras cada generación.
     */
    fPintarGeneracionEnDOM() {
        const celdas = document.querySelectorAll('.celula')
        for (let f = 0; f < this.tamagno; f++) {
            for (let c = 0; c < this.tamagno; c++) {
                const index = f * this.tamagno + c
                if (this.tablero[f][c] === 1) {
                    celdas[index].classList.add('marcada')
                } else {
                    celdas[index].classList.remove('marcada')
                }
            }
        }
    }

    /**
     * 📐 Calcula y retorna la menor dimensión de la ventana del navegador en píxeles.
     */
    fGetTamagnoVentana() {
        const anchoVentana = window.innerWidth
        const altoVentana = window.innerHeight
        return Math.min(anchoVentana, altoVentana)
    }

    /**
     * 🔍 Comprueba si las coordenadas (fila, col) están dentro de los límites del tablero.
     */
    fEsPosicionValida(fila, col) {
        return fila >= 0 && fila < this.tamagno && col >= 0 && col < this.tamagno
    }

    /**
     * 🔢 Cuenta la cantidad de células vecinas vivas alrededor de una posición dada.
     */
    fContarVecinas(fila, col) {
        let vivas = 0
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue
                const fVecina = fila + i
                const cVecina = col + j
                if (this.fEsPosicionValida(fVecina, cVecina)) {
                    vivas += this.tablero[fVecina][cVecina]
                }
            }
        }
        return vivas
    }

    /**
     * 🧬 Calcula la siguiente generación del tablero aplicando las reglas del Juego de la Vida.
     */
    fSiguienteGeneracion() {
        const nuevoTablero = this.fCrearTableroVacio()

        for (let f = 0; f < this.tamagno; f++) {
            for (let c = 0; c < this.tamagno; c++) {
                const vecinas = this.fContarVecinas(f, c)
                const celdaActual = this.tablero[f][c]

                if (celdaActual === 1) {
                    nuevoTablero[f][c] = (vecinas === 2 || vecinas === 3) ? 1 : 0
                } else {
                    nuevoTablero[f][c] = (vecinas === 3) ? 1 : 0
                }
            }
        }

        this.tablero = nuevoTablero
        this.fPintarGeneracionEnDOM() // 👈 Actualiza la pantalla automáticamente
        return this.tablero
    }
}

// Instancia global compartida por todos los scripts
const Logica = new LogicaJuegoDeLaVida(10)