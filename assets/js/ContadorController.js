const contador_celda_viva = document.querySelector('#contador-celda-viva');
const contador_celda_disponible = document.querySelector('#contador-celda-disponible');

class ContadorController {
    fPlusContadorCeldaViva() {
        contador_celda_viva.textContent = parseInt(contador_celda_viva.textContent) + 1; 
    }

    fMinusContadorCeldaViva() {
        contador_celda_viva.textContent = parseInt(contador_celda_viva.textContent) - 1; 
    }

    fPlusContadorCeldaDisponible() {
        contador_celda_Disponible.textContent = parseInt(contador_celda_disponible.textContent) + 1; 
    }

    fMinusContadorCeldaDisponible() {
        contador_celda_disponible.textContent = parseInt(contador_celda_Ddsponible.textContent) - 1; 
    }
}