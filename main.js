const botaoMenu = document.querySelector('.button_menu');
const menu = document.querySelector('.color_theme');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral-ativo')
})

