# El Juego de la Vida de Conway

El **Juego de la Vida** es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de "cero jugadores", lo que significa que su evolución está determinada completamente por su configuración inicial, sin requerir interacción posterior de los usuarios.

El juego se desarrolla sobre una cuadrícula bidimensional finita (con los limites definidos). Cada celda puede estar en uno de dos estados posibles: **viva** (marcada/pintada) o **muerta** (vacía/blanca). Cada celda interactúa directamente con sus ocho vecinas adyacentes (horizontal, vertical y diagonalmente).

## Las Reglas del Juego

En cada paso de tiempo, ocurren las siguientes transiciones según las reglas de Conway:

1. **Soledad:** Cualquier celda viva con menos de dos vecinos vivos muere (por subpoblación).
2. **Supervivencia:** Cualquier celda viva con dos o tres vecinos vivos sigue viva en la siguiente generación.
3. **Superpoblación:** Cualquier celda viva con más de tres vecinos vivos muere (por sobrepoblación).
4. **Reproducción (Nacimiento):** Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.

---

# Funcionalidad de los Controles e Interacciones del Tablero

A continuación se detalla el comportamiento de todos los controles de la aplicación y la forma de interactuar con la rejilla.

## 🖱️ Interacción con las Celdas de la Rejilla

El usuario puede configurar el estado inicial del tablero (o modificarlo) haciendo clic directamente sobre las celdas de la rejilla bajo las siguientes condiciones:

*   **Si la celda seleccionada está VACÍA (muerta):**
    Al hacer clic sobre ella, pasa a estar **marcada** (viva). Para evitar una saturación inicial excesiva, el sistema restringe el número máximo de celdas que se pueden pintar manualmente a la **mitad del total de celdas de la cuadrícula** ($\text{total} / 2$). Si se alcanza este límite, no se podrán activar más celdas hasta que se desmarquen algunas o se limpie el tablero.
    
*   **Si la celda seleccionada está MARCADA (viva):**
    Al hacer clic sobre ella, se desmarca inmediatamente, regresando a su estado **vacío** (muerta) y liberando espacio para poder activar otras celdas.

## 🎛️ Controles del Tablero y la Simulación

*   **Botón de Más (➕) | `#btn-plus`:**
    Incrementa el tamaño de la rejilla en una unidad (filas y columnas). El límite máximo permitido se calcula dinámicamente según la resolución y dimensiones de la pantalla para evitar desbordamientos.
    
*   **Botón de Menos (➖) | `#btn-minus`:**
    Disminuye el tamaño de la rejilla en una unidad, respetando un límite mínimo fijo de $10 \times 10$ celdas para garantizar un área jugable básica.
    
*   **Campo Numérico de Entrada (`input[type="text"]`) | `#inputText_number`:**
    Permite teclear directamente la dimensión de la cuadrícula. Incorpora validación automática para rechazar valores inválidos, letras o números que superen el rango permitido, restaurando en su lugar el último valor correcto introducido.
    
*   **Deslizador de Tamaño de Rejilla (`input[type="range"]`) | `#range_ajusteGrid`:**
    Control deslizante para ajustar el tamaño del tablero de manera rápida, fluida y continua. Está sincronizado en tiempo real con el campo numérico y los botones de más y menos.
    
*   **Botón de Reiniciar (🔄️ REINICIAR) | `#btn-reiniciar`:**
    Limpia por completo la rejilla, marcando todas las celdas como muertas y vaciando el tablero.
    
*   **Botón Iniciar / Pausar (▶️ / ⏸️):**
    Inicia la simulación automática aplicando de forma periódica las reglas de Conway, o la detiene. Durante la ejecución activa de la simulación, no es posible alterar el tamaño de la rejilla ni interactuar con las celdas (pintar o desmarcar) hasta que se pulse el botón de reiniciar, garantizando así la estabilidad de la partida.
    
*   **Botón Siguiente Generación / Paso (⏭️):**
    Avanza y calcula manualmente una única generación del juego. Es útil para analizar con precisión la evolución del patrón actual paso a paso.
    
*   **Botón Anterior Generación / Paso Atrás (⏮️):**
    Permite retroceder al estado de la generación inmediatamente anterior, deshaciendo el último paso de la simulación.
    
*   **Deslizador de Velocidad (Slider de rango):**
    Controla el intervalo de milisegundos (ms) entre cada generación automática, permitiendo ralentizar o acelerar el ritmo de la simulación.

*   **Contador de celdas vacías y marcadas (post-reinicio):**
    Panel informativo mostrando el numero de celdas vacias y el numero de celdas marcadas en el último reinicio.
    
*   **Interruptor de Tema (Switch) | `label.switch`:**
    Alterna de forma global el tema de la interfaz entre el modo claro y el modo oscuro.
