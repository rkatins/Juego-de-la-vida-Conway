const contador_celda_viva = document.querySelector('#contador-celda-viva');
const contador_celda_disponible = document.querySelector('#contador-celda-disponible');

const contenedor_grid = document.querySelector('#grid')

class ContadorController {
    fContadorCeldaViva() {
        let celdas_vivas_longitud = document.querySelectorAll("#grid > div.marcada").length

        if (contador_celda_viva) {
            contador_celda_viva.textContent = celdas_vivas_longitud.toString();
        }

        let controles_multimedia = document.querySelector("#ajustePasos-panel > .controles-multimedia")
        let btn_start_game = document.getElementById('btn-start-game')

        let tieneCeldas = celdas_vivas_longitud >= 1;
        btn_start_game.classList.toggle('disable-btn', !tieneCeldas);
        controles_multimedia.classList.toggle('disable-btn', !tieneCeldas);

        return celdas_vivas_longitud
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
        // Es parcialmente innecesario, esta más que nada por asegurar
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