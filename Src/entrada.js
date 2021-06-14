//tela entrada//
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
  ls.setItem("entrada", jm);


  window.location.href = "geração.html"
}
//tela geração//
function calcular(){
  var margem = document.getElementById("margem").value;

    //cálculo//
    var jsonEntrada = window.localStorage.getItem("entrada");
    var entrada = JSON.parse(jsonEntrada);
    var calculo = (((Number(entrada.investimento) + Number(entrada.despFixas)) / Number(entrada.estVenda)) + Number(entrada.custo))/
    ( 1 - ((Number(entrada.imposto) + Number(entrada.despVariaveis) + Number(parseFloat(margem)))) / 100)
    //salvando no localStorage//
    var venda = new Object();
    venda.margem = parseFloat(margem);
    venda.calculo = parseFloat(calculo);
    var vd = JSON.stringify(venda);
    var ls = window.localStorage;
    ls.setItem("venda", vd);
    //

    document.getElementById("preço").innerHTML = calculo
    }
  //colocando dados na tabela//
  function cadPessoa() {
    if(localStorage.venda != []){
    var jsonVenda = window.localStorage.getItem("venda");
    var venda = JSON.parse(jsonVenda);
    valores = document.getElementById("tbPreços");    
    var qtdlLinhas = valores.rows.length;
    var linha = valores.insertRow(qtdlLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellMargem = linha.insertCell(1);
    var cellVenda = linha.insertCell(2);
  
    cellCodigo.innerHTML = qtdlLinhas;
    cellMargem.innerHTML = venda.margem;
    cellVenda.innerHTML = venda.calculo
  }
}
  function apagar(){
    window.location.href = "entrada.html"
  }
