var produtos, index;
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// tabela geração de preço//
function cadProduto(descrição, valor) {
        produtos = document.getElementById("tbProdutos");    
        var qtdlLinhas = produtos.rows.length;
        var linha = produtos.insertRow(qtdlLinhas);
        var linhaParam;

    var cellDescricao = linha.insertCell(0);
    var cellValor = linha.insertCell(1);

    cellDescricao.innerHTML = descrição;
    cellValor.innerHTML = valor;
    

    preencheCamposForm();


    var  cellDescricao = descrição;
    var cellValor = valor;
    var produto = new Object();
    produto.descrição = descrição;
    produto.valor =  valor;
    var jm = JSON.stringify(produto);
    var ls = window.localStorage;
    ls.setItem("produto", jm);
    }

    function altPessoa(descrição, valor) {

        produtos.rows[index].cells[1].innerHTML = descrição;
        produtos.rows[index].cells[2].innerHTML = valor;
    
    }
    function preencheCamposForm() {

        for(var i = 0; i < produtos.rows.length; i++) 
        {
            produtos.rows[i].onclick = function() 
            {
                index = this.rowIndex;
                document.getElementById("txtDescricao").value = produtos.rows[index].cells[0].innerText;
                document.getElementById("txtValor").value = produtos.rows[index].cells[1].innerText;
            }
        }
    }
    
    function delRegistro() {
    
        for(var i = 0; i < produtos.rows.length; i++) 
        {
            if (index == i) {
                produtos.deleteRow(index);
                return;
            }
        }
    }
