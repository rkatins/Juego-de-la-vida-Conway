# Juego de la Vida de Conway

Una implementación web interactiva y responsiva del famoso autómata celular **El Juego de la Vida**, creado por John Horton Conway. Este proyecto está desarrollado utilizando tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla) con un fuerte enfoque en el rendimiento del DOM y la experiencia del usuario.

> [!NOTE]
> Para optimizar la carga del navegador al gestionar una cantidad dinámica y elevada de celdas, la cuadrícula se renderiza y actualiza dinámicamente de forma eficiente utilizando manipulación directa del DOM y variables CSS personalizadas (`--grid-size`).

---

## 🌟 Características Destacadas

*   **Arquitectura y Diseño Moderno:** Desarrollado utilizando el patrón Controller con clases modulares en ES6+. La interfaz presenta un diseño Glassmorphism 3D, tipografía Space Grotesk de Google Fonts y utiliza un Sprite SVG para la optimización de iconos.
*   **Rejilla Responsiva y Dinámica:** El contenedor principal ajusta dinámicamente el tamaño máximo físico del tablero calculando la dimensión mínima entre el ancho y alto de la ventana, aplicando un margen de seguridad para evitar desbordamientos.
*   **Conservación del Estado:** Al cambiar el tamaño de la rejilla de forma interactiva, las coordenadas 2D de las celdas vivas se guardan y se restauran aquellas que quepan en las nuevas dimensiones.
*   **Límite de Selección y Contadores:** Permite marcar manualmente celdas como vivas hasta un límite del 50% del total de las celdas. Un panel flotante superior muestra en tiempo real el balance exacto de celdas vivas y celdas disponibles.
*   **Barra de Herramientas Modular (NavBar):** Menú de navegación inferior con paneles emergentes independientes para:
    *   **Ajuste de Rejilla:** Controles sincronizados (botones `+/-`, deslizador e input) para modificar el tamaño de la cuadrícula.
    *   **Ajuste de Velocidad:** Regulación del intervalo de tiempo entre generaciones automáticas (desde 100 ms hasta 2000 ms).
    *   **Control de Pasos:** Botonera multimedia para avance manual paso a paso o reproducción/pausa continua de la simulación.
    *   **Reiniciar:** Limpia y resetea el estado completo de la matriz y la interfaz.
*   **Efectos Visuales Extra:** Incorpora un efecto de esquina levantada (ribbon) en la parte superior derecha con una animación de lluvia digital estilo Matrix, que enlaza al perfil de GitHub del autor.

---

## 📁 Estructura del Código Fuente

El proyecto ha sido refactorizado para separar responsabilidades de manera estricta:

*   **HTML:** `index.html` actúa como punto de entrada semántico.
*   **Controladores JS (`./assets/js/`):** 
    *   `NavBarController.js`: Gestiona la interacción del menú y la apertura exclusiva de paneles.
    *   `LogicaJuegoDeLaVida.js`: Implementa la lógica central, reglas matemáticas y cálculo geométrico.
    *   `RejillaController.js`: Encargado de la creación y limitación física en píxeles del DOM.
    *   `AjusteGridController.js`, `VelocidadController.js`, `PasosController.js`, `ReiniciarController.js`: Controladores específicos para cada herramienta y configuración.
    *   `ContadorController.js`: Calcula los balances de celdas en pantalla.
    *   `matrix.js`: Genera el efecto visual estético de la esquina superior.
*   **Estilos Modulares CSS (`./assets/css/`):** La hoja de estilos principal se divide atómicamente en múltiples archivos (como `root.css`, `glass-effect.css`, `navBar.css`, `casilla.css`, etc.) para facilitar la mantenibilidad y aplicar propiedades personalizadas de manera eficiente.

---

## 🛠️ Cómo Ejecutar el Proyecto

*   **Online:** Juega directamente desde [GitHub Pages](https://rkatins.github.io/Juego-de-la-vida-Conway/).
*   **Local:**
1. Clona el repositorio en tu máquina local o alójalo en un servidor local (por ejemplo, en la carpeta `htdocs` de XAMPP).
2. Abre el archivo [index.html](./index.html) en tu navegador web favorito.
3. ¡Comienza a pintar celdas y a configurar el tablero!

---

## 📖 Documentación Relacionada

*   Para consultar las reglas detalladas del juego y la guía de funcionamiento de los controles, visita [RULES.md](./RULES.md).
*   Para seguir de cerca el estado de desarrollo, tareas pendientes y próximas implementaciones, consulta el archivo [ROADMAP.md](./ROADMAP.md).
