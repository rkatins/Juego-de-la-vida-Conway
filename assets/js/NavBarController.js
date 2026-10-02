class NavBarController {
    panelAbierto = null

    /**
     * Cierra un panel específico y restaura la visibilidad del tooltip correspondiente.
     */
    fCerrarPanel(panel) {
        if (!panel) return
        panel.classList.remove('activo')
        const tooltip = panel.parentElement.querySelector('.tooltip')
        if (tooltip) {
            tooltip.style.visibility = ""
            tooltip.style.opacity = ""
        }
        if (this.panelAbierto === panel) {
            this.panelAbierto = null
        }
    }

    /**
     * Abre un panel específico, oculta su tooltip y cierra cualquier otro panel abierto previamente.
     */
    fAbrirPanel(panel) {
        if (!panel) return

        // Si había otro panel abierto previamente, lo cerramos
        if (this.panelAbierto && this.panelAbierto !== panel) {
            this.fCerrarPanel(this.panelAbierto)
        }

        panel.classList.add('activo')
        const tooltip = panel.parentElement.querySelector('.tooltip')
        if (tooltip) {
            tooltip.style.visibility = "hidden"
            tooltip.style.opacity = "0"
        }
        this.panelAbierto = panel
    }

    /**
     * Alterna la apertura/cierre de un panel según el icono pulsado en la barra de navegación.
     */
    fSwitchPaneles(e) {
        const elementoPadreId = e.currentTarget.parentNode.id
        const segmentarPalabras = elementoPadreId.split("-")
        const panelId = segmentarPalabras[0] + "-panel"

        const panelPulsado = document.getElementById(panelId)

        // Si el icono no tiene panel asociado (ej: botón Reiniciar)
        if (!panelPulsado) {
            if (this.panelAbierto) {
                this.fCerrarPanel(this.panelAbierto)
            }
            return
        }

        // Si el panel pulsado ya está abierto, lo cerramos; si no, lo abrimos
        if (panelPulsado.classList.contains('activo')) {
            this.fCerrarPanel(panelPulsado)
        } else {
            this.fAbrirPanel(panelPulsado)
        }
    }
}

const NavBar = new NavBarController()

// Manejar clics en todos los iconos principales de la barra de navegación
const iconos = document.querySelectorAll('.icon > svg')
iconos.forEach(icono => {
    icono.addEventListener('click', (e) => {
        NavBar.fSwitchPaneles(e)
    })
})

// Manejar clics en todos los botones de cierre (.btn-close) dentro de los paneles
const botonesCerrar = document.querySelectorAll('.panel-ajustes > .btn-close')
botonesCerrar.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const panel = btn.closest('.panel-ajustes')
        NavBar.fCerrarPanel(panel)
    })
})