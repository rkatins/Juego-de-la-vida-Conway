1. [x] Diseñar e implementar la interfaz base de la web (HTML y CSS) para el contenedor y los paneles.

2. [x] Añadir controles para ajustar el tamaño de la rejilla (slider de rango y botones +/-).

3. [x] Diseñar e implementar la interfaz base de la web (HTML y CSS) para el contenedor de la rejilla, el fondo y los paneles de control.

4. [x] Desarrollar la clase LogicaJuegoDeLaVida para inicializar y reiniciar la matriz de datos del juego.

5. [x] Añadir e implementar el botón de reiniciar (🔄️ REINICIAR).

6. [x] Crear y maquetar los controles de ajuste del tamaño de la rejilla (slider de rango y botones +/-).

7. [x] Sincronizar los inputs dentro de la clase AjustesGrid. (input:range / input:number / botones +/-).

8. [x] Implementar la interacción para seleccionar y marcar visualmente casillas en la rejilla.

9. [x] Establecer un limitador de selección de casillas (máximo permitido: la mitad del total de celdas).

10. [x] Guardar el estado de las celdas marcadas al cambiar el tamaño de la rejilla para restaurarlas automáticamente.

11. [x] Obtener el ancho y alto de la página para comparar cuál es el de menor tamaño, aplicar límites físicos al contenedor de la rejilla y calcular dinámicamente los límites de celdas para que no sobresalga de la pantalla.

12. [x] Nuevo diseño en FIGMA para adaptar a los botones y dar un estilo más moderno

13. [x] Añadir tooltips a todos los botones del navBar

14. [x] Añadir un boton de cerrar al panel de ajustes
> El icono [X](assets/icons/x.svg) ya esta descargado 
> Poner este en el panel, el panel puede definirse en un grid en el que la parte superior sea para la X
> o hacer que la X sea absoluta y este en la esquina superior derecha del panel (de esta forma la clase puede ser reutilizable seguramente)

15. [x] Hacer que el tooltip desaparezca cuando se abra el panel de ajustes

16. [x] Añadir paneles de ajustes a los iconos del navBar

17. [x] Quitar el tooltip del icono correspondiente se el panel este abierto

18. [x] Solo permitir un panel visible a la vez

19. [x] Al pulsar sobre reiniciar cerrar cualquier posible panel abierto

20. [WIP] Añadir una pequeña animación visual en los iconos del navBar al pasar por encima (ej. scale 1.2)

21. [x] Implementar nuevo diseño en `index.css`

22. [WIP] Añadir controles de simulación en index.html (Play/Pause, Step, Velocidad, Contador)
> Crear un contenedor `#controlesSimulacion` en `index.html` con los siguientes controles:
> - Botón de Iniciar/Pausar (▶️ / ⏸️) (Una vez pulsado el boton de play no se podra modificar el tamaño de la rejilla ni pulsar/seleccionar ninguna casilla hasta que se pulse el boton de reiniciar)
> - Botón de Siguiente Generación/Paso (⏭️), solo estara disponible cuando la simulacion este en pausa
> - Botón de Anterior Generación/Paso Atrás (⏮️), solo estara disponible cuando la simulacion este en pausa
> - Slider para controlar la velocidad (ms por generación)
> - Indicador/Contador de celdas seleccionadas/vivas.

23. [ ] Crear un contenedor para los controles o extender el ya existente para el tamaño de la rejilla y adaptarlo al nuevo bloque.

24. [ ] Implementar control de velocidad (slider de rango)

25. [ ] Implementar contador de celdas vacias y marcadas (solo se mostrara este al pulsar sobre el boton de reinicar)

26. [ ] Hacer el css responsive para la web

27. [ ] Incluir cuadro de texto que informe sobre las dimensiones maximas de la rejilla y una breve explicacion de como funciona el juego

28. [ ] Incluir notificacion/mensaje haciendo uso de `iziToast` para informar al usuario sobre cosas como la maxima dimension ha sido alcanzada o que la partida ha finalizado etc

29. [ ] Una vez que se finalice el juego/generaciones se pausara la simulacion, y para volver a iniciarla se debera pulsar el boton de reinicar y el boton de pausa pasara a ser un boton de prohibido hasta que se pulse el boton de reinicar

30. [ ] Añadir una barra de progreso que refleje el avance de las generaciones.
> Crear un elemento `<progress>` o un contenedor personalizado `#progressBar` en `index.html`.
> - La barra se irá rellenando gradualmente con cada generación/paso calculado de la simulación.
> - El valor máximo (100%) se definirá en función del límite máximo de generaciones configurado.
> - Al finalizar todas las generaciones o alcanzar el final del juego, la barra se completará.
> - Al presionar el botón de reiniciar (🔄️ REINICIAR), la barra volverá a su estado inicial de 0%.