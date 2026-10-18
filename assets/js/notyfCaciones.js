var notyfCacion = new Notyf()

const btn_start_game = document.querySelector('#btn-start-game')

btn_start_game.addEventListener('click', () => {

})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-blue-green)',
  dismissible: false,
  className: 'notyf-text-color notyf-text-center notyf-info'
})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-soft-aquamarine)',
  dismissible: true,
  className: 'notyf-text-color notyf-succes'
})

notyfCacion.open({
  message: 'prueba de color',
  duration: 0,
  background: 'var(--notyf-soft-colral)',
  dismissible: true,
  className: 'notyf-text-color notyf-error'
})

// --- PRUEBA
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
    /*
    * Si la clase modifica la alineacion del texto no seria visible la propiedad
    * `dismissible: true`
    */
    className: 'notyf-text-center',
  })