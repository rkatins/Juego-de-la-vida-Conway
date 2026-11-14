var notyf = new Notyf()

class notyfCaciones {
  fNotyfReiniciar() {
    notyf.open({
      message: 'Juego reiniciado',
      duration: 2000,
      dismissible: false,
      className: 'notyf-text-color notyf-text-center notyf-info'
    })
  }

  fNotyfMaxCeldas() {
    notyf.open({
      message: 'Ya llegaste al tamaño máximo',
      duration: 2000,
      dismissible: false,
      className: 'notyf-text-color notyf-text-center notyf-error'
    })
  }
}

const notyfCacion = new notyfCaciones()

const btn_reiniciar = document.querySelector('#ajusteReiniciar-icon')

btn_reiniciar.addEventListener('click', () => {
  notyfCacion.fNotyfReiniciar()
})

