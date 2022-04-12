const inputs = document.querySelectorAll('input');
const inputButton = document.querySelector('input[type=submit]');
const textarea = document.querySelector('textarea');

inputs.forEach((input) => {

  input.addEventListener('blur', (event) => {
    const inputTipo = input.dataset.tipo;
    const inputMaxLength = input.maxLength;
    const inputMinLength = input.minLength;
    const span = input.parentElement.querySelector('span');

    if(input.validity.valid) {

      span.style.display = 'none';
      inputButton.removeAttribute('disabled');
      
    } else if(input.value == '') {
      
      span.style.display = 'block';
      span.innerHTML = `O campo de ${inputTipo} não pode ficar vazio.`;

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

textarea.addEventListener('blur', () => {
  const textareaTipo = textarea.dataset.tipo;
  const textareaMaxLength = textarea.maxLength;
  const span = textarea.parentElement.querySelector('span');
  const textareaMinLength = textarea.minLength;

  if(textarea.validity.valid) {

    span.style.display = 'none';
    
  } else if(textarea.value == '') {
    
    span.style.display = 'block';
    span.innerHTML = `O campo de ${textareaTipo} não pode ficar vazio.`;

  } else if(textarea.value.length >= textareaMaxLength) {

    span.style.display = 'block';
    span.innerHTML = `O campo de ${textareaTipo} não pode ter mais do que ${textareaMaxLength} caracteres.`;

  } else if(textarea.value.length <= textareaMinLength) {

      span.style.display = 'block';
      span.innerHTML = `Esse campo não pode ter menos do que ${textareaMinLength} caracteres.`;

  } else {

    span.style.display = 'block';
    span.innerHTML = 'Campo Inválido';
  }
})
