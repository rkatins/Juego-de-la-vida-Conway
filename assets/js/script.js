/**
 * @type {number} El tamaño máximo inicial por defecto de la rejilla.
 */
let maxTamagno = 50

/**
 * Calcula y actualiza dinámicamente los límites máximos físicos y lógicos de la cuadrícula.
 * 
 * Explicación de la conversión (Regla de Tres):
 * - La ventana del navegador posee una dimensión máxima en píxeles (menorMedida).
 * - Queremos limitar físicamente el tamaño de la rejilla para dejar un margen libre: maxPixeles = maxTamagno - 40 (en px).
 * - Dado que cada celda de la rejilla mide exactamente 10 píxeles de ancho y alto:
 *     1 celda   ------->  10 píxeles
 *     X celdas  ------->  (maxTamagno - 40) píxeles
 * 
 *     Multiplicamos cruzado: X * 10 = 1 * (maxTamagno - 40)
 *     Despejamos X (celdas): X = (maxTamagno - 40) / 10
 * 
 * - El límite lógico (en celdas) se guarda en window.maxCeldas y restringe el valor máximo del range input.
 * - El límite físico (en píxeles) se aplica a las propiedades maxWidth y maxHeight de la rejilla.
 */
function fAjustarLimitesMaximos() {
    maxTamagno = LogicaController.fGetTamagnoVentana()
    const maxPixeles = maxTamagno - 40

    // Suponemos que cada celda mide 10px de ancho y alto (definido en root.css)
    const cellSize = 10
    const maxCeldasCalculadas = Math.floor(maxPixeles / cellSize)

    // Guardamos en el ámbito global para que input.js tenga acceso
    window.maxCeldas = maxCeldasCalculadas

    // Ajusta el valor máximo que puede tener el control deslizante de rango
    range_ajusteGrid.max = maxCeldasCalculadas

    // Aplica el tamaño máximo visual al contenedor de la rejilla (sugerido por el usuario)
    const grid = document.getElementById('grid')
    if (grid) {
        grid.style.maxWidth = maxPixeles + 'px'
        grid.style.maxHeight = maxPixeles + 'px'
    }
}

/**
 * Escucha la carga completa del DOM para ajustar los límites del tablero y dibujar la rejilla por primera vez.
 */
document.addEventListener('DOMContentLoaded', () => {
    fAjustarLimitesMaximos()
    fDibujarRejilla(10)
})

/**
 * Escucha el cambio de dimensiones de la ventana para recalcular y aplicar el tamaño máximo en píxeles y celdas.
 */
window.addEventListener('resize', () => {
    fAjustarLimitesMaximos()
})

/**
 * Limpia y redibuja la rejilla con el tamaño especificado.
 * Intenta reconstruir las celdas pintadas/marcadas previas y restaurarlas
 * dentro de los límites del nuevo tamaño.
 * Si la clase JuegoDeLaVida está definida, inicializa el juego de la vida.
 */
function fDibujarRejilla(tamagno) {
    let grid = document.getElementById('grid')

    // Obtener las "coordenadas" de las celdas marcadas antes de pulsar
    // btn-plus o btn-minus
    const celdasAnteriores = grid.querySelectorAll('.celula')
    const coordenadasMarcadas = []
    if (celdasAnteriores.length > 0) {
        // Dado que la lista de celdas del DOM es plana (1D), para reconstruir sus coordenadas 2D (fila y columna)
        // a partir de su índice 'i', necesitamos conocer el ancho de la cuadrícula anterior.
        // Como el tablero es cuadrado, la raíz cuadrada del total de celdas nos da ese ancho (tamagnoAnterior).
        // De esta forma podemos usar: fila = Math.floor(i / tamagnoAnterior) y columna = i % tamagnoAnterior.
        const tamagnoAnterior = Math.sqrt(celdasAnteriores.length)

        celdasAnteriores.forEach((celda, i) => {
            if (celda.classList.contains('marcada')) {
                coordenadasMarcadas.push({
                    fila: Math.floor(i / tamagnoAnterior),
                    columna: i % tamagnoAnterior
                })
            }
        })
    }

    // Limpiar y dibujar la nueva rejilla
    grid.innerHTML = ''

    let totalCeldas = Math.pow(tamagno, 2)

    for (let i = 0; i < totalCeldas; i++) {
        let cell = document.createElement('div')
        cell.classList.add('celula')

        grid.appendChild(cell)
    }

    // Restaurar las celdas marcadas que quepan en el nuevo tamaño
    const celdasNuevas = grid.querySelectorAll('.celula')
    coordenadasMarcadas.forEach(coord => {
        if (coord.fila < tamagno && coord.columna < tamagno) {
            const nuevoIndice = coord.fila * tamagno + coord.columna

            if (celdasNuevas[nuevoIndice]) {
                celdasNuevas[nuevoIndice].classList.add('marcada')
            }
        }
    })

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
        const miJuego = new JuegoDeLaVida(tamagno)
        miJuego.fGestionarMarcadoCasillas()

        let btnReiniciar = document.getElementById('btn-reiniciar')

        // Asocia el evento click al botón de reinicio para vaciar y resetear el tablero.
        btnReiniciar.addEventListener('click', () => miJuego.fReiniciarJuego())
    }
}