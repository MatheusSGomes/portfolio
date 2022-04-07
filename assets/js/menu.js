const menuHamburguer = document.querySelector('#menu-hamburguer');
const menu_mobile = document.querySelector('.menu__mobile');

menuHamburguer.addEventListener('click', () => {
  menu_mobile.classList.add('ativo');
})


const closeButton = document.querySelector('#close-button');

closeButton.addEventListener('click', (event) => {
  event.target.parentElement.classList.remove('ativo');
})
