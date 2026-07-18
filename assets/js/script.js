document.addEventListener('DOMContentLoaded', () => {
    fDibujarRejilla(10);
});

function fDibujarRejilla(tamagno) {
    let grid = document.getElementById('grid');

    // Obtener las "coordenadas" de las celdas marcadas antes de pulsar
    // btn-plus o btn-minus
    const celdasAnteriores = grid.querySelectorAll('.celula');
    const coordenadasMarcadas = [];
    if (celdasAnteriores.length > 0) {
        // Dado que la lista de celdas del DOM es plana (1D), para reconstruir sus coordenadas 2D (fila y columna)
        // a partir de su índice 'i', necesitamos conocer el ancho de la cuadrícula anterior.
        // Como el tablero es cuadrado, la raíz cuadrada del total de celdas nos da ese ancho (tamagnoAnterior).
        // De esta forma podemos usar: fila = Math.floor(i / tamagnoAnterior) y columna = i % tamagnoAnterior.
        const tamagnoAnterior = Math.sqrt(celdasAnteriores.length);

        celdasAnteriores.forEach((celda, i) => {
            if (celda.classList.contains('marcada')) {
                coordenadasMarcadas.push({
                    fila: Math.floor(i / tamagnoAnterior),
                    columna: i % tamagnoAnterior
                });
            }
        });
    }

    // Limpiar y dibujar la nueva rejilla
    grid.innerHTML = '';

    let totalCeldas = Math.pow(tamagno, 2);

    for (let i = 0; i < totalCeldas; i++) {
        let cell = document.createElement('div');
        cell.classList.add('celula');

        grid.appendChild(cell);
    }

    // Restaurar las celdas marcadas que quepan en el nuevo tamaño
    const celdasNuevas = grid.querySelectorAll('.celula');
    coordenadasMarcadas.forEach(coord => {
        if (coord.fila < tamagno && coord.columna < tamagno) {
            const nuevoIndice = coord.fila * tamagno + coord.columna;

            if (celdasNuevas[nuevoIndice]) {
                celdasNuevas[nuevoIndice].classList.add('marcada');
            }
        }
    });

    /**
     * En JavaScript las clases son funciones constructoras bajo el capó,
     * por lo que 'typeof JuegoDeLaVida === "function"' verifica si la clase está definida.
     * 
     * Comprueba si existen tanto la clase JuegoDeLaVida como su método de instancia
     * fGestionarMarcadoCasillas en su prototipo. En caso de existir, crea una instancia
     * y ejecuta la función.
     * 
     * prototype -> Funciona como una plantilla o caché compartida cargada en memoria que
     * evita tener que crear y compilar las funciones desde cero para cada objeto. Al consultar
     * el prototipo/prototype, estamos preguntando si la función está definida en dicha plantilla de la clase.
     */
    if (typeof JuegoDeLaVida === 'function' && typeof JuegoDeLaVida.prototype.fGestionarMarcadoCasillas === 'function') {
        const miJuego = new JuegoDeLaVida(tamagno);
        miJuego.fGestionarMarcadoCasillas();

        let btnReiniciar = document.getElementById('btn-reiniciar');

        btnReiniciar.addEventListener('click', () => miJuego.fReiniciarJuego());
    }
}