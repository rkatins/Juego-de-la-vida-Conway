const contador_celda_viva = document.querySelector('#contador-celda-viva');
const contador_celda_disponible = document.querySelector('#contador-celda-disponible');

const contenedor_grid = document.querySelector('#grid')

let celdas_vivas = 0

class ContadorController {
    fContadorCeldaViva() {
        let celdas_vivas = document.querySelectorAll("#grid > div.marcada").length

        if (contador_celda_viva) {
            contador_celda_viva.textContent = celdas_vivas.toString();
        }

        let controles_multimedia = document.querySelector("#ajustePasos-panel > .controles-multimedia")
        let btn_start_game = document.getElementById('btn-start-game')
        if (btn_start_game) {
            if (celdas_vivas >= 1) {
                controles_multimedia.classList.remove('disable-btn')
                btn_start_game.classList.remove('disable-btn')
            } else {
                controles_multimedia.classList.add('disable-btn')
                btn_start_game.classList.add('disable-btn')
            }
        }

        return celdas_vivas
    }

    fContadorCeldaDisponible() {
        let total_celdas = Number(number_ajusteGrid.value) * Number(number_ajusteGrid.value)

        /*
         * - `disponibles` -> Valor numerico
         * - `contador_celda_disponible` -> Elemento texto del DOM
         */
        let disponibles = total_celdas - this.fContadorCeldaViva();

        if (contador_celda_disponible) {
            contador_celda_disponible.textContent = disponibles.toString();
        }
    }

    fReiniciarContadores() {
        let celdasVivas = 0;

        if (contador_celda_viva) contador_celda_viva.textContent = '0';
        
        this.fContadorCeldaDisponible();
    }
}

const Contador = new ContadorController();

document.addEventListener('DOMContentLoaded', () => {
    Contador.fContadorCeldaDisponible()
})

range_ajusteGrid.addEventListener('input', () => {
    Contador.fContadorCeldaDisponible()
})

btn_plus_ajusteGrid.addEventListener('click', () => {
    Contador.fContadorCeldaDisponible()
})

btn_minus_ajusteGrid.addEventListener('click', () => {
    Contador.fContadorCeldaDisponible()
})

contenedor_grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('celula')) Contador.fContadorCeldaDisponible()
})