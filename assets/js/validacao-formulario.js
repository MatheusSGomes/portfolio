const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

const form = document.forms;
const formElements = Array.from(form[0].elements);
const lastElement = formElements.length - 1;
const inputSubmit = formElements[lastElement];

let formularioTodoPreenchido = false;

inputSubmit.disabled = true;

formElements.forEach((campo) => {
  const inputTipo = campo.dataset.tipo;
  const inputMaxLength = campo.maxLength;
  const inputMinLength = campo.minLength;
  const span = campo.parentElement.querySelector('span');

  campo.addEventListener('blur', (event) => {

    if(campo.validity.valid) {

      span.style.display = 'none';
      campo.classList.remove("campo--invalido");

    } else if(campo.value == '') {
      
      span.style.display = 'block';
      span.innerHTML = `O campo de ${inputTipo} não pode ficar vazio.`;
      campo.classList.add("campo--invalido");

    } else if(campo.value.length >= inputMaxLength) {

      span.style.display = 'block';
      span.innerHTML = `O campo de ${inputTipo} não pode ter mais do que ${inputMaxLength} caracteres.`;

    } else if(campo.value.length <= inputMinLength) {

      span.style.display = 'block';
      span.innerHTML = `Esse campo não pode ter menos do que ${inputMinLength} caracteres.`;

    } else {
      
      span.style.display = 'block';
      span.innerHTML = 'Campo Inválido';

      if(campo.dataset.tipo == 'email') {
        span.innerHTML = 'Por favor insira um endereço de email válido.';
      }
    }

    // Função que verifica se todos os campos foram preenchidos.
    formElements.forEach((campo) => {
      if (formElements[0].validity.valid &&
        formElements[1].validity.valid &&
        formElements[2].validity.valid &&
        formElements[3].validity.valid) {
          
        console.log("Todos os campos são validados");
        formularioTodoPreenchido = true;
      } else {

        console.log("Há um ou mais campos inválidos");
        formularioTodoPreenchido = false;
      }
    })

    // Função que habilita ou desabilita o botão de envio
    if(formularioTodoPreenchido) {

      inputSubmit.disabled = false;
    } else {

      inputSubmit.disabled = true;
    }

  })

})

