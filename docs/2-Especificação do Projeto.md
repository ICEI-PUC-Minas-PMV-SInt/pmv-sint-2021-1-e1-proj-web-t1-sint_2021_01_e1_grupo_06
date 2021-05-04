# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<table>
 <tr>
  <th>Foto</th>
  <th>Nome</th>
  <th>Descrição</th>
  <th>Aplicativos</th>
  <th>Motivações</th>
  <th>Frustrações</th>
  <th>Hobbies, História</th>
 </tr>
 <tr>
  <td>
    <img width="110px" height="110px" src="https://tiinside.com.br/wp-content/uploads/2013/06/MDA-3x4-Large-e1372340590598.jpg">
  </td>
  <td>Rodolfo Astuto</td>
  <td>37 anos, empreendedor de concessionária de veículos de luxo.  </td>
  <td>
    <ul>
     <li>Facebook</li>
     <li>Instagram</li>
     <li>Linkedin</li>
   </ul>
  </td>
  <td> ser desafiado, ama empreender, gosta de inovar </td>
  <td> Perdeu uma agência com a pandemia</td>
  <td> Viagens, economia, ler bons livros</td>
 </tr>
 <tr>
  <td>
    <img width="100px" height="100px" src="https://i.pinimg.com/564x/3a/b1/ce/3ab1ce88c1d2bae5758ce1924c01cb20.jpg">
  </td>
  <td>Sabrina Torres</td>
  <td>44 anos, gestora de posto de gasolina em shopping center </td>
  <td>
    <ul>
     <li>Facebook</li>
     <li>Instagram</li>
     <li>Linkedin</li>
   </ul>
  </td>
  <td>Sempre ser uma funcionária dedicada e ajudar na inovação do local de trabalho </td>
  <td>A falta de diversidade no local de trabalho  </td>
  <td>Carros, tecnologia e política </td>
 </tr>
 </tr>
 <tr>
  <td>
    <img width="100px" height="100px" src="https://storage.alboom.ninja/sites/2851/albuns/427514/2019.04.03_-_Fotos_Perfil_Profissional_Carlo__58_de_68_.jpg?t=1556218044">
     </td>
  <td>Alberto Silva</td>
  <td>55 anos, empreendedor no ramo de postos combustíveis </td>
  <td>
    <ul>
     <li>Facebook</li>
     <li>Instagram</li>
     <li>Linkedin</li>
   </ul>
  </td>
  <td> Expandir e inovar sua empresa  </td>
  <td> Não ter realizado seu grande sonho de empreender </td>
  <td> Gastronomia, Economia e seu sítio.</td>

</table>


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rodolfo Astuto      | Implementar eletropostos           | Manter meu empreendimento lucrativo    |
|Alberto Silva       | Instalar eletroposto               |Inovar meu negócio                      |
|Sabrina Torres      | Calcular os custos do mês          |Administar o financeiro                 |
|Sabrina Torres      | Ferramenta para auxiliar na        | Exercer, da melhor forma, minha função |
|                    | administração                      |                                        |
|Rodolfo Astuto      |Ferramenta para análise financeira  |Controlar os gastos                     |


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro da empresa e login no sistema | ALTA | 
|RF-002| Cadastro do usuario e login, verificar autorização na RF-001 | MÉDIA ||
|RF-003| O sistema deve ter entrada de dados dos custos fixos e variaves | ALTA |
|RF-004| Emissão de notificação na mudança nos custos variaveis e fixos a todos os cadastrados na RF-003 | ALTA |
|RF-005| Gerar preços do kw/h a cada 6 horas | ALTA |
|RF-006| Alterar os preços automaticamente se á empresa optar  | MÉDIA |
|RF-007| Enviar notificações quando houver alterções de preço para todos os cadastrados pela da empresa. (Obs: Cliente podem ser cadastrados) | ALTA |
|RF-008| Gera informaçoes semanalmente conforme RF-003 E RF-005 | MÉDIA |
|RF-009| Tela com boas praticá e informações de gestão | MÉDIA |
|RF-010| Tela sobre normas de eletropostos | MÉDIA |
|RF-011| Tela sobre Manuntenção preventiva e corretiva dos equipamentos | MÉDIA |
|RF-012| Notificações sobre  RF-012 E RF013  | MÉDIA |
|RF-013| tela de ajuda, dúvida e sugestão dos usuários | MÉDIA |
|RF-014| Gerar informações sobre lucros diário, semanal e anual. | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-002| O sistema deve rodar 24 horas   | MÉDIA |
|RNF-002| Sempre que for alterado dados, o sistema deve refazer todos os seus calcúlos do sistema | MÉDIA |
|RNF-002| O sistema apresenta as informações ao usuário conforme cadastro RF-001   | MÉDIA |
|RNF-002| O sistema deve ser de facíl compreensão do usuário | Baixa |
|RNF-002| O sistema deve ser implementado na linguagem Javascript, css e html  | MÉDIA |
|RNF-013| As notificaçoes e informações devem ser visualizadas conforme cadastro da RF-001 | MÉDIA |



Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|02| Informações deve ser restringida a alguns usuário conforme cadstro       |
|02| A entrada de dados sera restringida conforme cadastro       |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
