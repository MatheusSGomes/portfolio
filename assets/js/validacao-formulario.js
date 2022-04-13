const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

const form = document.forms;
const formElements = Array.from(form[0].elements);

formElements.forEach((input) => {

  input.addEventListener('blur', (event) => {
    const inputTipo = input.dataset.tipo;
    const inputMaxLength = input.maxLength;
    const inputMinLength = input.minLength;
    const span = input.parentElement.querySelector('span');

    if(input.validity.valid) {

      span.style.display = 'none';
      input.classList.remove("campo--invalido");
      
    } else if(input.value == '') {
      
      span.style.display = 'block';
      span.innerHTML = `O campo de ${inputTipo} não pode ficar vazio.`;
      input.classList.add("campo--invalido");

    } else if(input.value.length >= inputMaxLength) {

      span.style.display = 'block';
      span.innerHTML = `O campo de ${inputTipo} não pode ter mais do que ${inputMaxLength} caracteres.`;

    } else if(input.value.length <= inputMinLength) {

      span.style.display = 'block';
      span.innerHTML = `Esse campo não pode ter menos do que ${inputMinLength} caracteres.`;

    } else {
      
      span.style.display = 'block';
      span.innerHTML = 'Campo Inválido';

      if(input.dataset.tipo == 'email') {
        span.innerHTML = 'Por favor insira um endereço de email válido.';
      }
    }
  })
})
