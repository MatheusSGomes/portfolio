const nav = document.querySelector('nav');
const menu_mobile = document.querySelector('.menu__mobile');

nav.addEventListener('click', () => {
  menu_mobile.classList.toggle('ativo');
  console.log(nav);
})
