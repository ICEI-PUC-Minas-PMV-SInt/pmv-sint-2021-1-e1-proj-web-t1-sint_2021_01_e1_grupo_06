const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
var linhaParam;
var impostos, index;

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// tabela geração//
function cadGeracao(descrição, valor) {
    geracao = document.getElementById("tbGeracao");    
    var qtdlLinhasG = geracao.rows.length;
    var linhaG = geracao.insertRow(qtdlLinhasG);


var cellCodigoG = linhaG.insertCell(0);
var cellDescricaoG = linhaG.insertCell(1);
var cellValorG = linhaG.insertCell(2);

cellCodigoG.innerHTML = qtdlLinhasG;
cellDescricaoG.innerHTML = descrição;
cellValorG.innerHTML = valor;


var cellCodigoG = qtdlLinhasG;
var cellDescricaoG = descrição;
var cellValorG = valor;
var geracao = new Object();
geracao.codigo = qtdlLinhasG;
geracao.descrição = descrição;
geracao.valor =  valor;
var jm = JSON.stringify(geracao);
var ls = window.localStorage;
ls.setItem("geração", jm);

   update();

}

function update(){
    var localStorage = JSON.parse(geração);
    localStorage.getItem(geração);
}   





// tabela impostos//
function cadImposto(descrição, valor) {
        imposto = document.getElementById("tbImpostos");    
        var qtdlLinhas = imposto.rows.length;
        var linha = imposto.insertRow(qtdlLinhas);
        
    
    var cellCodigo = linha.insertCell(0);
    var cellDescricao = linha.insertCell(1);
    var cellValor = linha.insertCell(2);

    cellCodigo.innerHTML = qtdlLinhas;
    cellDescricao.innerHTML = descrição;
    cellValor.innerHTML = valor;
    
    preencheCamposForm();

    var cellCodigo = qtdlLinhas;
    var cellDescricao = descrição;
    var cellValor = valor;
    var imposto = new Object();
    imposto.codigo = qtdlLinhas;
    imposto.descrição = descrição;
    imposto.valor =  valor;
    var jm = JSON.stringify(imposto);
    var ls = window.localStorage;
    ls.setItem("imposto", jm);
}



    // tabela premissas//
function cadPremissas(descrição, valor) {
    premissa = document.getElementById("tbPremissas");    
    var qtdlLinhasP = premissa.rows.length;
    var linhaP = premissa.insertRow(qtdlLinhasP);

var cellCodigoP = linhaP.insertCell(0);
var cellDescricaoP = linhaP.insertCell(1);
var cellValorP = linhaP.insertCell(2);

cellCodigoP.innerHTML = qtdlLinhasP;
cellDescricaoP.innerHTML = descrição;
cellValorP.innerHTML = valor;

var cellCodigoP = qtdlLinhasP;
var cellDescricaoP = descrição;
var cellValorP = valor;
var premissa = new Object();
premissa.codigo = qtdlLinhasP;
premissa.descrição = descrição;
premissa.valor =  valor;
var jm = JSON.stringify(premissa);
var ls = window.localStorage;
ls.setItem("premissa", jm);
}



// tabela despesas fixas//
function cadFixas(descrição, valor) {
    fixa = document.getElementById("tbFixas");    
    var qtdlLinhasF = fixa.rows.length;
    var linhaF = fixa.insertRow(qtdlLinhasF);

var cellCodigoF = linhaF.insertCell(0);
var cellDescricaoF = linhaF.insertCell(1);
var cellValorF = linhaF.insertCell(2);
cellValorK = linhaF.insertCell(3);

cellCodigoF.innerHTML = qtdlLinhasF;
cellDescricaoF.innerHTML = descrição;
cellValorF.innerHTML = valor;
cellValorK.innerHTML = cellValorF.innerHTML / txtValorP.value

var cellCodigoF = qtdlLinhasF;
var cellDescricaoF = descrição;
var cellValorF = valor;
var fixa = new Object();
fixa.codigo = qtdlLinhasF;
fixa.descrição = descrição;
fixa.valor =  valor;
var jm = JSON.stringify(fixa);
var ls = window.localStorage;
ls.setItem("desesas fixas", jm);
}


// tabela despesas variáveis//
function cadVariaveis(descrição, valor) {
    variavel = document.getElementById("tbVariaveis");    
    var qtdlLinhasV = variavel.rows.length;
    var linhaV = variavel.insertRow(qtdlLinhasV);

var cellCodigoV = linhaV.insertCell(0);
var cellDescricaoV = linhaV.insertCell(1);
var cellValorV = linhaV.insertCell(2);

cellCodigoV.innerHTML = qtdlLinhasV;
cellDescricaoV.innerHTML = descrição;
cellValorV.innerHTML = valor;

var cellCodigoV = qtdlLinhasV;
var cellDescricaoV = descrição;
var cellValorV = valor;
var variavel = new Object();
variavel.codigo = qtdlLinhasV;
variavel.descrição = descrição;
variavel.valor =  valor;
var jm = JSON.stringify(variavel);
var ls = window.localStorage;
ls.setItem("despesas variáveis", jm);
}
    

// tabela investimentos//
function cadInvestimentos(descrição, valor, depreciação,) {
    investimento = document.getElementById("tbInvestimentos");    
    var qtdlLinhasI = investimento.rows.length;
    var linhaI = investimento.insertRow(qtdlLinhasI);
    

var cellCodigoI = linhaI.insertCell(0);
var cellDescricaoI = linhaI.insertCell(1);
var cellValorI = linhaI.insertCell(2);
var cellDepreciação = linhaI.insertCell(3);
var cellValorM = linhaI.insertCell(4);
var cellValorKwh = linhaI.insertCell(5);

cellCodigoI.innerHTML = qtdlLinhasI;
cellDescricaoI.innerHTML = descrição;
cellValorI.innerHTML = valor;
cellDepreciação.innerHTML  = depreciação;
cellValorM.innerHTML = cellValorI.innerHTML / cellDepreciação.innerHTML;
cellValorKwh.innerHTML = cellValorM.innerHTML / txtValorP.value;


var cellCodigoI = qtdlLinhasI;
var cellDescricaoI = descrição;
var cellValorI = valor;
var cellDepreciação = depreciação;
var investimento = new Object();
investimento.codigo = qtdlLinhasI;
investimento.descrição = descrição;
investimento.valor =  valor;
investimento.depreciação = depreciação;
var jm = JSON.stringify(investimento);
var ls = window.localStorage;
ls.setItem("investimentos", jm);
}
