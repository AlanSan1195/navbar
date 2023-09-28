// mi boton tiene la calse toggle
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-menu_visible')

    // hacendo accecible mi pagina con discapacitados
    if (navMenu.classList.contains('nav-menu_visible')) {
        navToggle.setAttribute('arial-label', 'cerrar menu');
    }else{
        navToggle.setAttribute('arial-label', 'abrir menu')
    }
});