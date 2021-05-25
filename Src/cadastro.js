function salvar(){
    alert("Processando");
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var cpf= document.getElementById("cpf").value;
    var telefone= document.getElementById("telefone").value;
    var endereco= document.getElementById("endereço").value;
    var bairro= document.getElementById("bairro").value;
    var municipio= document.getElementById("Município").value;
    var password= document.getElementById("password").value;
    var usuario = new Object();
    usuario.nome=nome;
    usuario.email=email;
    usuario.cpf=cpf;
    usuario.telefone=telefone;
    usuario.endereco=endereco;
    usuario.bairro=bairro;
    usuario.municipio=municipio;
    usuario.password=password;
    var jm = JSON.stringify(usuario);
    var ls = window.localStorage;
    ls.setItem("usuarios", jm);
    
}

