
var localStorage = Window.localStorage;

var cadastro = { "email": document.getElementById("email"),
"nome": document.getElementById('nome'), 
"cpf": document.getElementById('cpf'), 
"telefone": document.getElementById('telefone'), 
"endereço": document.getElementById('endereço'), 
"bairro": document.getElementById('bairro'), 
"Município": document.getElementById('Município'), 
"password": document.getElementById('password'), 
};
var registro = JSON.stringify(cadastro);
var localStorage = Window.localStorage
localStorage.setItem('registro','cadastro');







var cadastro = {
    nome= document.getElementById("nome"),
    email= document.getElementById("email"),
    cpf= document.getElementById("cpf"),
    telefone= document.getElementById("telfone"),
    endereço= document.getElementById("endereço"),
    bairro= document.getElementById("bairro"),
    Município= document.getElementById("Município"),
    password= document.getElementById("password")
};

var relatorio = JSON.parse(localStorage.getItem('cadastro'));
