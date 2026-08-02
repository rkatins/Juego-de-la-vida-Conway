1. [x] Diseñar e implementar la interfaz base de la web (HTML y CSS) para el contenedor y los paneles.

2. [x] Añadir controles para ajustar el tamaño de la rejilla (slider de rango y botones +/-).

1. [x] Diseñar e implementar la interfaz base de la web (HTML y CSS) para el contenedor de la rejilla, el fondo y los paneles de control.

2. [x] Desarrollar la clase LogicaJuegoDeLaVida para inicializar y reiniciar la matriz de datos del juego.

3. [x] Añadir e implementar el botón de reiniciar (🔄️ REINICIAR).

4. [x] Crear y maquetar los controles de ajuste del tamaño de la rejilla (slider de rango y botones +/-).

5. [x] Sincronizar los inputs dentro de la clase AjustesGrid. (input:range / input:number / botones +/-).

6. [x] Implementar la interacción para seleccionar y marcar visualmente casillas en la rejilla.

7. [x] Establecer un limitador de selección de casillas (máximo permitido: la mitad del total de celdas).

8. [x] Guardar el estado de las celdas marcadas al cambiar el tamaño de la rejilla para restaurarlas automáticamente.

9. [x] Obtener el ancho y alto de la página para comparar cuál es el de menor tamaño, aplicar límites físicos al contenedor de la rejilla y calcular dinámicamente los límites de celdas para que no sobresalga de la pantalla.

10. [ ] Añadir controles de simulación en index.html (Play/Pause, Step, Velocidad, Contador)
> Crear un contenedor `#controlesSimulacion` en `index.html` con los siguientes controles:
> - Botón de Iniciar/Pausar (▶️ / ⏸️) (Una vez pulsado el boton de play no se podra modificar el tamaño de la rejilla ni pulsar/seleccionar ninguna casilla hasta que se pulse el boton de reiniciar)
> - Botón de Siguiente Generación/Paso (⏭️)
> - Botón de Anterior Generación/Paso Atrás (⏮️)
> - Slider para controlar la velocidad (ms por generación)
> - Indicador/Contador de celdas seleccionadas/vivas.

11. [ ] Crear un contenedor para los controles o extender el ya existente para el tamaño de la rejilla y adaptarlo al nuevo bloque.

12. [ ] Implementar control de velocidad (slider de rango)

13. [ ] Implementar contador de celdas vacias y marcadas (solo se mostrara este al pulsar sobre el boton de reinicar)

14. [ ] Hacer el css responsive para la web

15. [ ] Incluir cuadro de texto que informe sobre las dimensiones maximas de la rejilla y una breve explicacion de como funciona el juego

16. [ ] Incluir notificacion/mensaje haciendo uso de `iziToast` para informar al usuario sobre cosas como la maxima dimension ha sido alcanzada o que la partida ha finalizado etc

17. [ ] Una vez que se finalice el juego/generaciones se pausara la simulacion, y para volver a iniciarla se debera pulsar el boton de reinicar y el boton de pausa pasara a ser un boton de prohibido hasta que se pulse el boton de reinicar

18. [ ] Añadir una barra de progreso que refleje el avance de las generaciones.
> Crear un elemento `<progress>` o un contenedor personalizado `#progressBar` en `index.html`.
> - La barra se irá rellenando gradualmente con cada generación/paso calculado de la simulación.
> - El valor máximo (100%) se definirá en función del límite máximo de generaciones configurado.
> - Al finalizar todas las generaciones o alcanzar el final del juego, la barra se completará.
> - Al presionar el botón de reiniciar (🔄️ REINICIAR), la barra volverá a su estado inicial de 0%.