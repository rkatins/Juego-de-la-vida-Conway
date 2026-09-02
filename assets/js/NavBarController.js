class NavBarController {
    panelAbierto = []

    fSwitchPaneles(e) {
        let elementoPadreId = e.currentTarget.parentNode.id
        let segmentarPalabras = elementoPadreId.split("-")
        let panelId = segmentarPalabras[0] + "-panel"

        let panelPulsado = document.getElementById(panelId)

        // Guardar el panel pulsado en el array de paneles abiertos
        this.panelAbierto.push(panelPulsado)

        // Si hay más de un panel abierto, cierra el primero (el más antiguo) y lo elimina del array
        if (this.panelAbierto.length > 1) {
            this.panelAbierto[0].classList.remove('activo')
            this.panelAbierto.shift()
        }
    }
}

const NavBar = new NavBarController()

const iconos = document.querySelectorAll('.icon > img')

iconos.forEach(icono => {
    icono.addEventListener('click', (e) => {
        NavBar.fSwitchPaneles(e)
    })
})

/**
 * TODO: Segmentar el id del elemento padre (se llama: %-icon), haciendo uso del caracter separador `-` y luego concatenar el id del panel correspondiente (se llama: %-panel)
// 1. Tienes el ID del elemento padre
const iconId = "menu-icon"; 

// 2. Segmentas por el guion
const partes = iconId.split("-"); // Devuelve el array: ["menu", "icon"]

// 3. Tomas la primera parte y concatenas el nuevo final
const panelId = partes[0] + "-panel"; // Resultado: "menu-panel"

console.log(panelId);
 */