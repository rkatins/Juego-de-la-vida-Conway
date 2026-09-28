document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.matrix-container');
    if (!container) return;

    // Repite la columna con el patron de matrix 6 veces para 
    // cubrir el ancho de la ventana de la esquina
    const pattern = document.createElement('div');
    pattern.className = 'matrix-pattern';

    for (let c = 0; c < 6; c++) {
        const col = document.createElement('div');
        col.className = 'matrix-column';
        pattern.appendChild(col);
    }

    container.appendChild(pattern);
});