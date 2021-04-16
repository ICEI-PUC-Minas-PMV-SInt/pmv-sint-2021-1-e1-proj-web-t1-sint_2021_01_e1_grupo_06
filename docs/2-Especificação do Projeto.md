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
    <img width="110px" height="110px" src="https://img.freepik.com/fotos-gratis/empresario-alegre-sorrindo_74855-1511.jpg?size=626&ext=jpg">
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
    <img width="100px" height="100px" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_06/blob/main/docs/img/github.png">
  </td>
  <td>Nome da pessoa...</td>
  <td>Descrição....</td>
  <td>
    <ul>
     <li>Facebook</li>
     <li>Instagram</li>
   </ul>
  </td>
  <td>.....</td>
  <td>.....</td>
  <td>.....</td>
 </tr>

</table>


Persona          |  Sobre
-----------------|-------------------------------------------------------------------------------------------------------------------------
Alberto Silva    | Empreendedor no ramo de postos combustíveis, 55 anos. Gosta de Gastronomia, Economia e seu sítio. Sua frustração é: Não ter realizado seu                          grande sonho de empreender. 
Rodolfo Astuto   |  Empreendedor de concessionária de veículos de luxo,  37 anos. Gosta de viajar, ler bons livros e cultivar bons amigos, rede social                                 utiliza: Linkedin, Instagram, Facebook. Motivações: empreender, desafios no ramo empresarial, inovação. Frustações: Pandemia (Covid-19).
Sabrina Torres   | Gestora de posto de gasolina em shopping center, 44 anos. Gosta de carros, tecnologia e política. Frustações: A falta de diversidade local de trabalho. 
Exemplo 4        | sobre 4

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

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
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

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


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
