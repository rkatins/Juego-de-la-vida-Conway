// Create an instance of Notyf
var notyf = new Notyf();

// Display a success notification
notyf.success({
    message: 'Hola caracola',
    duration: 0,
    icon: false,
    background: '#93f'
});

// 1. Creas la instancia UNA SOLA VEZ
const notyf = new Notyf({
  duration: 4000,
  position: { x: 'right', y: 'bottom' }
});

// 2. Usas la misma variable 'notyf' en cualquier lugar

// Notificación de éxito estándar
document.getElementById('btn-exito').addEventListener('click', () => {
  notyf.success('¡Operación realizada con éxito!');
});

// Notificación de error
document.getElementById('btn-error').addEventListener('click', () => {
  notyf.error('Ha ocurrido un error al guardar los datos.');
});

// Notificación con configuración específica sobrescrita
document.getElementById('btn-custom').addEventListener('click', () => {
  notyf.open({
    type: 'info',
    message: 'Esta tiene un color e icono a medida',
    background: '#09f',
    icon: false,
    duration: 6000
  });
});