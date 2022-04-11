const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {

  input.addEventListener('blur', (event) => {
    const span = input.parentElement.querySelector('span');

    if(input.validity.valid) {
      span.style.display = 'none';
    } else {
      span.style.display = 'block';
      span.innerHTML = 'Campo Inválido';
    }

    if(input.value == '') {
      span.innerHTML = 'O campo não pode ficar vazio.'
    }
  })
})