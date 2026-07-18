document.addEventListener('DOMContentLoaded', () => {
    fDibujarRejilla(10);
});

function fDibujarRejilla(tamagno) {
    var grid = document.getElementById('grid');
    grid.innerHTML = '';

    var totalCeldas = Math.pow(tamagno, 2);

    for (let i = 0; i < totalCeldas; i++) {
        var cell = document.createElement('div');
        cell.classList.add('celula');

        grid.appendChild(cell);
    }

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
    }
}