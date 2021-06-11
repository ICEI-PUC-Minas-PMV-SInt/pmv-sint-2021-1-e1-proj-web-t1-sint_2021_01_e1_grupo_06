 // tela entrada de dados//
function gravar() {
  var imposto = document.getElementById("imposto").value;
    var despFixas = document.getElementById("despFixas").value;
    var despVariaveis = document.getElementById("despVariaveis").value;
    var estVenda = document.getElementById("estVenda").value;
    var investimento = document.getElementById("investimento").value;
    var custo = document.getElementById("kwh").value;
    var margem = document.getElementById("Margem").value;

    var im = JSON.stringify(parseFloat(imposto));
    var ls = window.localStorage;
    ls.setItem("imposto", im);

    var df = JSON.stringify(parseFloat(despFixas));
    var ls = window.localStorage;
    ls.setItem("despFixas", df);

    var dv = JSON.stringify(parseFloat(despVariaveis));
    var ls = window.localStorage;
    ls.setItem("despVariaveis", dv);

    var ev = JSON.stringify(parseFloat(estVenda));
    var ls = window.localStorage;
    ls.setItem("estVenda", ev);

    var inv = JSON.stringify(parseFloat(investimento));
    var ls = window.localStorage;
    ls.setItem("investimento", inv);

    var cust = JSON.stringify(parseFloat(custo));
    var ls = window.localStorage;
    ls.setItem("custo", cust);

    var mar = JSON.stringify(parseFloat(margem));
    var ls = window.localStorage;
    ls.setItem("margem", mar);
   
  }
  function calcular(){
    var preco = (((Number(localStorage.investimento) + Number(localStorage.despFixas)) / Number(localStorage.estVenda)) + Number(localStorage.custo))/
    ( 1 - ((Number(localStorage.imposto) + Number(localStorage.despVariaveis) + Number(localStorage.margem))) / 100)

    var preco = JSON.stringify(parseFloat(preco));
    if (localStorage.getItem('Preço') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('Preço', JSON.stringify(parseFloat(preco)));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'Preço',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('Preço')),
          preco
        ])
      );
    }

    window.location.href = "geração.html"
  }


function apagar() {
    alert("apagando")

}
// tela geração //
function voltar(){
  window.location.href = "entrada.html"
}
