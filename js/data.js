document.addEventListener('DOMContentLoaded', () => {

    const valorguardado = localStorage.getItem('textoGuardado');

    const data = document.getElementById('data');

    data.textContent = valorguardado ? valorguardado : 'No hay información guardada';

});