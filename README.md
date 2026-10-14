# Juego de la Vida de Conway

> [!WARNING]
> Desarrollo en progreso

Una implementación web interactiva y responsiva del famoso autómata celular **El Juego de la Vida**, creado por John Horton Conway. Este proyecto está desarrollado utilizando tecnologías web estándar (HTML5, CSS3 y _JavaScript Vanilla_) con un fuerte enfoque en el rendimiento del DOM y la experiencia del usuario.

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

## 🛠️ Cómo Ejecutar el Proyecto

*   **Online:** Juega directamente desde [GitHub Pages](https://rkatins.github.io/Juego-de-la-vida-Conway/).
*   **Local:**
1. Clona el repositorio en tu máquina local o alójalo en un servidor local (por ejemplo, en la carpeta `htdocs` de XAMPP).
2. Abre el archivo [index.html](./index.html) en tu navegador web favorito.
3. ¡Comienza a pintar celdas y a configurar el tablero!

## 📖 Documentación Relacionada

*   Para consultar las reglas detalladas del juego y la guía de funcionamiento de los controles, visita [RULES.md](./RULES.md).
*   Para seguir de cerca el estado de desarrollo, tareas pendientes y próximas implementaciones, consulta el archivo [ROADMAP.md](./ROADMAP.md).

---

# Conway's Game of Life

> [!WARNING]
> Development in progress

An interactive and responsive web implementation of the famous cellular automaton **The Game of Life**, created by John Horton Conway. This project is developed using standard web technologies (HTML5, CSS3, and Vanilla JavaScript) with a strong focus on DOM performance and user experience.

> [!NOTE]
> To optimize browser loading when managing a high and dynamic number of cells, the grid is efficiently rendered and dynamically updated using direct DOM manipulation and custom CSS variables (`--grid-size`).

---

## 🌟 Key Features

*   **Modern Architecture and Design:** Developed using the Controller pattern with modular ES6+ classes. The interface features a 3D Glassmorphism design, Space Grotesk typography from Google Fonts, and uses an SVG Sprite for icon optimization.
*   **Responsive and Dynamic Grid:** The main container dynamically adjusts the maximum physical size of the board by calculating the minimum dimension between the window's width and height, applying a safety margin to prevent overflow.
*   **State Preservation:** When interactively changing the grid size, the 2D coordinates of the live cells are saved, and those that fit within the new dimensions are restored.
*   **Selection Limit and Counters:** Allows manually marking cells as alive up to a limit of 50% of the total cells. A floating top panel displays the exact balance of live and available cells in real time.
*   **Modular Toolbar (NavBar):** Bottom navigation menu with independent pop-up panels for:
    *   **Grid Adjustment:** Synchronized controls (`+/-` buttons, slider, and input) to modify the grid size.
    *   **Speed Adjustment:** Regulation of the time interval between automatic generations (from 100 ms to 2000 ms).
    *   **Step Control:** Multimedia button panel for manual step-by-step advancement or continuous play/pause of the simulation.
    *   **Restart:** Clears and resets the entire state of the matrix and interface.
*   **Extra Visual Effects:** Incorporates a lifted corner (ribbon) effect in the top right with a Matrix-style digital rain animation, linking to the author's GitHub profile.

---

## 📁 Source Code Structure

The project has been refactored to strictly separate responsibilities:

*   **HTML:** `index.html` acts as the semantic entry point.
*   **JS Controllers (`./assets/js/`):** 
    *   `NavBarController.js`: Manages menu interaction and exclusive panel opening.
    *   `LogicaJuegoDeLaVida.js`: Implements core logic, mathematical rules, and geometric calculations.
    *   `RejillaController.js`: Responsible for DOM creation and physical pixel limitations.
    *   `AjusteGridController.js`, `VelocidadController.js`, `PasosController.js`, `ReiniciarController.js`: Specific controllers for each tool and configuration.
    *   `ContadorController.js`: Calculates cell balances on screen.
    *   `matrix.js`: Generates the aesthetic visual effect for the top corner.
*   **Modular CSS Styles (`./assets/css/`):** The main stylesheet is atomically divided into multiple files (such as `root.css`, `glass-effect.css`, `navBar.css`, `casilla.css`, etc.) to facilitate maintainability and efficiently apply custom properties.

---

## 🛠️ How to Run the Project

*   **Online:** Play directly from [GitHub Pages](https://rkatins.github.io/Juego-de-la-vida-Conway/).
*   **Local:**
    1. Clone the repository to your local machine or host it on a local server (e.g., in the XAMPP `htdocs` folder).
    2. Open the [index.html](./index.html) file in your favorite web browser.
    3. Start painting cells and configuring the board!

---

## 📖 Related Documentation

*   To check the detailed game rules and control operating guide, visit [RULES.md](./RULES.md).
*   To closely follow the development status, pending tasks, and upcoming implementations, check the [ROADMAP.md](./ROADMAP.md) file.
