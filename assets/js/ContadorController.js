const contador_celda_viva = document.querySelector('#contador-celda-viva');
const contador_celda_disponible = document.querySelector('#contador-celda-disponible');

const contenedor_grid = document.querySelector('#grid')

let celdas_vivas = 0

class ContadorController {
    fContadorCeldaViva() {
        celdas_vivas = document.querySelectorAll("#grid > div.marcada").length

        celdas_vivas < 1 ? celdas_vivas = 0 : celdas_vivas

        contador_celda_viva.textContent = celdas_vivas.toString()

        if (parseInt(contador_celda_viva.textContent, 10) >= 1) {
            let btn_start_game = document.getElementById('btn-start-game')

            btn_start_game.classList.remove('disable-btn')
        } else {
            let btn_start_game = document.getElementById('btn-start-game')

            btn_start_game.classList.add('disable-btn')
        }

        return celdas_vivas
    }

    fContadorCeldaDisponible() {
        contador_celda_disponible.textContent = ((number_ajusteGrid.value * number_ajusteGrid.value) - Contador.fContadorCeldaViva()).toString()
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