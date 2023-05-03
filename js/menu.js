const menu = document.querySelector('.menu'); 
const open = document.querySelector('.open_menu_img');
const close = document.querySelector('.close_menu_img');
const dropdown = document.querySelector('.dropdown__open');
const header = document.querySelector('.header');
const section = document.querySelector('.section');
menu.addEventListener('click', ()=>{
    dropdown.classList.toggle('dropdownOn')
    open.classList.toggle('closed');
    close.classList.toggle('closed');
    header.classList.toggle('dropdownHeader');
});

