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

10. En caso de que se quiera introducir o aplicar el tamaño de la rejilla con valores personalizados con el input:number se mostrara un mensaje/notificacion de alerta advirtiendo del tamaño introducido no es valido.

11. [ ] Añadir controles de simulación en index.html (Play/Pause, Step, Velocidad, Contador)
> Crear un contenedor `#controlesSimulacion` en `index.html` con los siguientes controles:
> - Botón de Iniciar/Pausar (▶️ / ⏸️) (Una vez pulsado el boton de play no se podra modificar el tamaño de la rejilla ni pulsar/seleccionar ninguna casilla hasta que se pulse el boton de reiniciar)
> - Botón de Siguiente Generación/Paso (⏭️)
> - Slider para controlar la velocidad (ms por generación)
> - Indicador/Contador de celdas seleccionadas/vivas.

12. [ ] Crear un contenedor para los controles o extender el ya existente para el tamaño de la rejilla y adaptarlo al nuevo bloque.

13. [ ] Implementar control de velocidad (slider de rango)

14. [ ] Implementar contador de celdas vacias y marcadas (solo se mostrara este al pulsar sobre el boton de reinicar)
