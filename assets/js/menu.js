const menuHamburguer = document.querySelector('#menu-hamburguer');
const menu_mobile = document.querySelector('.menu__mobile');

menuHamburguer.addEventListener('click', () => {
  menu_mobile.classList.add('ativo');
})


const closeButton = document.querySelector('#close-button');

closeButton.addEventListener('click', (event) => {
  event.target.parentElement.classList.remove('ativo');
})

const itensLi = document.querySelectorAll('.menu__lista--mobile li');

itensLi.forEach(li => {
  li.addEventListener('click', (event) => {
    menu_mobile.classList.remove('ativo');
    console.log(event.target);
  })
})

