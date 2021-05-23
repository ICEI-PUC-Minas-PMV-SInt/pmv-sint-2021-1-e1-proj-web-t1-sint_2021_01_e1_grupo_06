var atual;
var localStorage = Window.localStorage;

function menuCadastro(){
    atual.classList.add("d-none"); //Para esconder o container em apresentação é feita a adição da classe d-none
    atual = document.getElementById("registro"); //Busca o container que apresenta a tela de cadastro
    atual.classList.remove("d-none"); //Remove a classe d-none do container de cadastro para que ele fique visível
}            

function gravar(){ 
    var novo = new Object(); 
    novo.cpf=document.getElementById("cpf").value; 
    novo.nome=document.getElementById("nome").value; 
    novo.email=document.getElementById("email").value; 
    novo.nasc=document.getElementById("nasc").value; 
    var jt = JSON.stringify(novo); 
    localStorage.setItem(novo.cpf, jt); 
    document.getElementById("btnRemover").classList.remove("d-none"); 
}
