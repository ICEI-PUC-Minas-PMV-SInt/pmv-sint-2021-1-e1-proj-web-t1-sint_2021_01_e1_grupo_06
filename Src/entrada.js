function gravar() {

  var imposto = document.getElementById("imposto").value;
  var despFixas = document.getElementById("despFixas").value;
  var despVariaveis = document.getElementById("despVariaveis").value;
  var estVenda = document.getElementById("estVenda").value;
  var investimento = document.getElementById("investimento").value;
  var custo = document.getElementById("kwh").value;
  var entrada = new Object();
  entrada.imposto = parseFloat(imposto);
  entrada.despFixas = parseFloat(despFixas);
  entrada.despVariaveis = parseFloat(despVariaveis);
  entrada.estVenda = parseFloat(estVenda);
  entrada.investimento = parseFloat(investimento);
  entrada.custo = parseFloat(custo);
  var jm = JSON.stringify(entrada);
  var ls = window.localStorage;
  ls.setItem("usuarios", jm);

  window.location.href = "geração.html"
}
//tela geração//
function calcular(){
  var margem = document.getElementById("margem").value;

    var mar = JSON.stringify(parseFloat(margem))
    var ls = window.localStorage
    ls.setItem("margem", mar)
    if (margem = true){
    var jsonEntrada = window.localStorage.getItem('entrada');
    var entrada = JSON.parse(jsonEntrada);
    var calculo = entrada.imposto

    var pc = JSON.stringify(parseFloat(calculo))
    var ls = window.localStorage
    ls.setItem("Preço", pc)

    document.getElementById("preço").innerHTML = localStorage.Preço
  }
}
