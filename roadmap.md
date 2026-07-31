# Plan de Implementación de la Lógica del Juego de la Vida de Conway

Este plan detalla los pasos para transformar el tablero estático actual en una simulación interactiva del Juego de la Vida de Conway. Los objetivos principales son sincronizar el estado del DOM con la matriz de datos en Javascript (`this.grid`), implementar las 4 reglas del juego, crear controles de simulación interactivos (Iniciar, Pausar, Paso a Paso, Velocidad, Contador de Generaciones) y corregir fugas de memoria al cambiar el tamaño de la rejilla.

## Lista de Tareas (TODO List)

A continuación se detalla la lista de tareas para el seguimiento del proyecto. Puedes marcar los elementos según se vayan completando:

### Fase 1: Interfaz y Controles de Simulación
- [ ] Añadir controles en index.html (Play/Pause, Step, Velocidad, Contador)
> Crear un contenedor `#controlesSimulacion` en `index.html` con los siguientes controles:
> - Botón de Iniciar/Pausar (▶️ / ⏸️)
> - Botón de Siguiente Generación/Paso (⏭️)
> - Slider para controlar la velocidad (ms por generación)
> - Indicador/Contador de generaciones transcurridas (Generación: 0)
- [ ] Crear el archivo CSS `assets/css/controles.css` y enlazarlo en `index.html`

### Fase 2: Gestión de Estado y Sincronización
- [ ] Añadir coordenadas data-fila y data-columna a las celdas en script.js.
- [ ] Sincronizar los clics en la cuadrícula con el array validation.
- [ ] Adaptar la redimensión del tablero en script.js para mantener y sincronizar la matriz.

### Fase 3: Reglas del Juego de la Vida
- [ ] Implementar fContarVecinosVivos(fila, columna) en JuegoDeLaVida.
- [ ] Implementar fCalcularSiguienteEstado() en JuegoDeLaVida.
- [ ] Implementar fActualizarInterfaz() en JuegoDeLaVida.

### Fase 4: Bucle de Simulación e Integración
- [ ] Mapear eventos de botones de control y velocidad.
- [ ] Implementar ciclo de vida/animación (Play/Pause/Velocidad) con temporizador.

---

## Detalles Técnicos y Decisiones de Diseño

### 1. Sistema de Coordenadas de la Rejilla
Para facilitar el cálculo de vecinos, modificaremos la generación del DOM para asignar atributos `data-` a las celdas:

```javascript
// En script.js durante la creación de celdas:
let fila = Math.floor(i / tamagno);
let columna = i % tamagno;
cell.dataset.fila = fila;
cell.dataset.columna = columna;
```

### 2. Comportamiento en los Bordes

> [!IMPORTANT]
> **Decisión de Diseño Requerida:**
> En el Juego de la Vida, los bordes pueden tratarse de dos formas:
> *   **Bordes Muertos:** Las casillas fuera de la rejilla se asumen como muertas para siempre.
> *   **Toroide/Bordes Infinitos:** La rejilla se conecta consigo misma (ej. el vecino de arriba de la primera fila es la última fila).
>
> Por simplicidad e interactividad visual, inicialmente implementaremos **Bordes Muertos**, con opción de hacerlo toroidal más adelante.

### 3. Evitar el acoplamiento excesivo
En lugar de instanciar de cero `JuegoDeLaVida` y perder el bucle en cada cambio de tamaño, mantendremos una única instancia global de la simulación. Al redimensionar, se llamará a un método de la instancia que reajuste la matriz interna y mantenga el estado de animación actual.

---

## Propuesta de Cambios por Archivo

### [Interfaz / Controles]

#### [MODIFY] [index.html](file:///c:/xampp/htdocs/juego%20de%20la%20vida/index.html)
* Añadir contenedor `#controlesSimulacion` con los botones de Play/Pause, Step, el slider de velocidad y el contador de generaciones.
* Enlazar el nuevo archivo CSS.

#### [NEW] [controles.css](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/css/controles.css)
* Estilos premium con efecto de cristal (`backdrop-filter` y `box-shadow`) para el panel de simulación.

### [Lógica del Juego]

#### [MODIFY] [logica-juego_de_la_vida.js](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/js/logica-juego_de_la_vida.js)
* Implementar inicialización, actualización de clics en la matriz bidimensional, `fContarVecinosVivos()`, `fCalcularSiguienteEstado()`, `fActualizarInterfaz()` y la lógica del temporizador de la simulación.

#### [MODIFY] [script.js](file:///c:/xampp/htdocs/juego%20de%20la%20vida/assets/js/script.js)
* Modificar `fDibujarRejilla` para asignar coordenadas `data-fila` y `data-columna` a los elementos del DOM y asegurar que la matriz interna se actualice con las celdas marcadas ya existentes tras un rediseño.
* Evitar la recreación redundante de listeners del botón de reiniciar.

---

## Plan de Verificación

### Verificación Manual
*   **Marcar células y verificar estado:** Hacer clic en células del tablero, verificar que se marquen correctamente.
*   **Botón Paso a Paso:** Marcar una estructura conocida (ej. un "Glider" o un "Blinker" de 3 celdas horizontales) y pulsar el botón de Paso a Paso. Comprobar que cambie de estado a vertical, y luego de vuelta a horizontal en el siguiente paso.
*   **Bucle de Simulación:** Pulsar Play y comprobar que avanza automáticamente. Modificar el slider de velocidad para verificar que la animación acelera/desacelera.
*   **Redimensionar en caliente:** Cambiar el tamaño del tablero mientras la simulación está activa o pausada para garantizar que las células supervivientes se mantengan en sus posiciones relativas correctas sin romper el bucle.
