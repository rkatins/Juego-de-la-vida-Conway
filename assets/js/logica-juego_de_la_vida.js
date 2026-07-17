/**
 * Lógica del Juego de la Vida de Conway
 */
class JuegoDeLaVida {
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
    reiniciar() {
        this.grid = [];
        for (let i = 0; i < this.tamagno; i++) {
            this.grid.push(new Array(this.tamagno).fill(0));
        }
    }
}
