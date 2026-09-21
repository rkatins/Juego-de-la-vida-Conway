class NavBarController {
    panelAbierto = []

    fSwitchPaneles(e) {
        let elementoPadreId = e.currentTarget.parentNode.id
        let segmentarPalabras = elementoPadreId.split("-")
        let panelId = segmentarPalabras[0] + "-panel"

        let panelPulsado = document.getElementById(panelId)

        /**
         * Si el icono pulsado no tiene un panel asociado (como el botón Reiniciar),
         * cerramos cualquier panel que estuviera abierto previamente para no dejarlo visible.
         */
        if (!panelPulsado) {
            this.panelAbierto.forEach(panel => panel.classList.remove('activo'))
            this.panelAbierto = []
            return
        }

        /**
         * Si el panel pulsado ya está abierto, el usuario lo está cerrando con su propio
         * método toggle ('fAbrirCerrarPanel'). Vaciamos el registro sin quitar la clase 'activo'
         * aquí para evitar que el toggle lo vuelva a abrir inmediatamente por colisión.
         */
        if (panelPulsado.classList.contains('activo')) {
            this.panelAbierto = []
            return
        }

        /**
         * Si se abre un panel nuevo, cerramos cualquier otro panel que estuviera abierto
         * previamente y registramos el actual.
         */
        this.panelAbierto.forEach(panel => panel.classList.remove('activo'))
        this.panelAbierto = [panelPulsado]
    }
}

const NavBar = new NavBarController()

const iconos = document.querySelectorAll('.icon > svg')

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