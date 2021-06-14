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
    var vd = {margem, calculo };
    if (localStorage.getItem('venda') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('venda', JSON.stringify([vd]));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'venda',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('venda')),
          vd 
        ])
      );
    }
          
    //mostrando o preço de venda//
    document.getElementById("preço").innerHTML = calculo
    //inserindo margem e preço na tabela//
    if(localStorage.venda != []){
    var jsonVenda = window.localStorage.getItem("venda");
    var venda = JSON.parse(jsonVenda);
    valores = document.getElementById("tbPreços");    
    var qtdlLinhas = valores.rows.length;
    var linha = valores.insertRow(qtdlLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellMargem = linha.insertCell(1);
    var cellCalculo = linha.insertCell(2);
  
    cellCodigo.innerHTML = qtdlLinhas;
    cellMargem.innerHTML = margem;
    cellCalculo.innerHTML = calculo;
  }
} 
//função para apagar dados do localStorage e voltar para tela principal//
  function apagar(){
    localStorage.removeItem('entrada')
    localStorage.removeItem('venda')
    window.location.href = "entrada.html"
  }
