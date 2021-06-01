// verificar se está logado //
var logado = false;

if (localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log('entrou');
};

if (logado != true){
    alert("Você não está autenticado!");
    window.location.href = "login.html";
}
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu(oara deslizar) //
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
