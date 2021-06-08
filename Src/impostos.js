function gravar() {
    alert("gravando")


    var imposto = document.getElementById("imposto").value;
    var despFixas = document.getElementById("despFixas").value;
    var despVariaveis = document.getElementById("despVariaveis").value;
    var estVenda = document.getElementById("estVenda").value;
    var estimativa = document.getElementById("estimativa").value;
    var entrada = new Object();
    entrada.imposto = imposto;
    entrada.despFixas = despFixas;
    entrada.despVariaveis = despVariaveis;
    entrada.estVenda = estVenda;
    entrada.estimativa = estimativa;
    var jm = JSON.stringify(entrada);
    var ls = window.localStorage;
    ls.setItem("entrada", jm);
}

function apagar() {
    alert("apagando")


}




