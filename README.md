# Juego de la Vida de Conway

Una implementación web interactiva y responsiva del famoso autómata celular **El Juego de la Vida**, creado por John Horton Conway. Este proyecto está desarrollado utilizando tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla) con un fuerte enfoque en el rendimiento del DOM y la experiencia del usuario.

> [!NOTE]
> Para optimizar la carga del navegador al gestionar una cantidad dinámica y elevada de celdas, la cuadrícula se renderiza y actualiza dinámicamente de forma eficiente utilizando manipulación directa del DOM y variables CSS personalizadas (`--grid-size`).

---

## 🌟 Características Destacadas

*   **Rejilla Responsiva y Dinámica:** El tamaño máximo físico del tablero se ajusta en tiempo real según el tamaño del navegador. Compara la altura y la anchura, selecciona la menor de ellas y reserva un margen de seguridad de $40\text{ px}$ para garantizar que la rejilla nunca sobresalga de la pantalla.
*   **Conservación del Estado:** Al cambiar el tamaño de la rejilla de forma interactiva, las coordenadas de las celdas previamente marcadas (vivas) se guardan y se vuelven a dibujar en su posición original si entran dentro del nuevo rango.
*   **Límite de Selección Inteligente:** Permite marcar manualmente celdas como vivas hasta un límite máximo del **50% del total de las celdas** de la cuadrícula.
*   **Controles Sincronizados:** Ajuste dinámico del tamaño de la cuadrícula mediante múltiples controles vinculados (botones de incremento/decremento `+/-`, deslizador/slider e input numérico directo con validación).
*   **Estructura Modular CSS:** Estilos divididos de manera atómica (fondos, botones, rejilla, controles) para una mayor mantenibilidad.

---

## 📁 Estructura del Código Fuente

*   [index.html](file:///c:/xampp/htdocs/juego%20de%20la%20vida/index.html): Estructura semántica base de la aplicación.
*   [LogicaJuegoDeLaVida.js](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/js/LogicaJuegoDeLaVida.js): Clase que gestiona el estado de la matriz, las reglas del juego, la interacción al hacer clic en las celdas y el cálculo del tamaño de ventana.
*   [AjustesGrid.js](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/js/AjustesGrid.js): Clase y lógica de sincronización bidireccional entre los inputs del usuario para reajustar el tablero.
*   [script.js](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/js/script.js): Inicialización del DOM, gestión de redibujados y control de eventos de redimensionamiento de pantalla (`resize`).

---

## 🛠️ Cómo Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local o alójalo en un servidor local (por ejemplo, en la carpeta `htdocs` de XAMPP).
2. Abre el archivo [index.html](file:///c:/xampp/htdocs/juego%20de%20la%20vida/index.html) en tu navegador web favorito.
3. ¡Comienza a pintar celdas y a configurar el tablero!

---

## 📖 Documentación Relacionada

*   Para consultar las reglas detalladas del juego y la guía de funcionamiento de los controles, visita [RULES.md](file:///c:/xampp/htdocs/juego%20de%20la%20vida/RULES.md).
*   Para seguir de cerca el estado de desarrollo, tareas pendientes y próximas implementaciones, consulta el archivo [ROADMAP.md](file:///c:/xampp/htdocs/juego%20de%20la%20vida/ROADMAP.md).
