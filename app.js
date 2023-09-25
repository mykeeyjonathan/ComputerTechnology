let menuBtn = document.getElementById('menu');
let closeBtn = document.getElementById('nav-close');
let Navbar = document.getElementById('Navbar');

menuBtn.addEventListener('click',()=>{
    navbar.classList.add('oneshanavbar')
})

menuBtn.addEventListener('click',()=>{
    Navbar.classList.remove('oneshanavbar')
})