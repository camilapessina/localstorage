document.addEventListener('DOMContentLoaded', () => {

const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', () => {
    const valor = inputText.value;

    localStorage.setItem('textoGuardado', valor);
});

});