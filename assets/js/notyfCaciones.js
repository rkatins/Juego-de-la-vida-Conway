var notyfCacion = new Notyf()

const btn_start_game = document.querySelector('#btn-start-game')

btn_start_game.addEventListener('click', () => {
  /*
  * `open()` no necesita que se le indique la propiedad `type`
  */
  notyfCacion.open({
    /*
    * Todo el bloque position se puede indicar como objeto al crear 
    * la instancia con `new Notyf()`, asi no hay que definirlo en cada
    * notificación 
    */
    position: {
      x: 'right',
      y: 'bottom',
    },
    message: 'Hola caracola',
    duration: 10000,
    dismissible: true,
    background: '#93f',
    className: 'notyf-text-center',
  })
})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-blue-green)'
})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-soft-aquamarine)'
})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-soft-colral)'
})