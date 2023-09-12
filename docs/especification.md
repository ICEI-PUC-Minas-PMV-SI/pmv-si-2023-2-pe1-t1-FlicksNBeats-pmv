# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Persona 1

Ana Roberta é uma mulher aposentada de 62 anos. Sua vida inteira sempre foi uma grande fã da indústria cinematográfica, adora assistir filmes, porém ela sempre usava métodos tradicionais para adquirir seus filmes, como locadoras e lojas físicas de compras. No entanto, nos últimos anos ela viu a drástica redução da disponibilidade destes serviços, então resolveu aderir o uso das plataformas de streaming, mas Ana se encontrou muito confusa dentre tantas opções disponíveis, no momento ela busca um site com uma ferramenta que possa auxiliá-la a encontrar os gêneros de filmes que no passado ela tanto gostava.

Persona 2

Sofia é uma jovem adulta de 19 anos com uma paixão ardente pelo entretenimento audiovisual. Ela é uma estudante universitária antenada e criativa, sempre em busca das últimas tendências em filmes, séries e músicas. Seu smartphone e laptop são suas ferramentas essenciais para explorar o mundo do entretenimento. Ela é ativa nas redes sociais, especialmente no Instagram e no TikTok, e busca um site onde seus seguidores possam acessar a qualquer momento suas opiniões sobre filmes, séries e músicas favoritas e tendências de uma forma bem organizada.

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

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`  | QUERO/PRECISO ... `FUNCIONALIDADE`                                             | PARA ... `MOTIVO/VALOR`                                                          |
|-----------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Sofia (usuário)       | preciso uma função de "Recomendações Personalizadas" | para descobrir novos filmes e músicas que se alinhem com meus gostos variados, economizando tempo na busca por conteúdo interessante e diversificado.           |
| Sofia (usuário)       | quero uma opção de "Perfil Personalizado"          | onde eu possa listar meus filmes e músicas favoritos, para que meus amigos e seguidores nas redes sociais possam conhecer meu gosto e receber sugestões de mim.|
| Sofia (usuário)       | quero uma opção de "Chat de Discussão"                                       | para que eu possa discutir os episódios mais recentes das minhas séries favoritas com outros fãs. |
| Sofia (usuário)       | quero uma função de "Classificação e Avaliação"    | para dar notas e escrever críticas sobre filmes e músicas, contribuindo para a comunidade e ajudando outros usuários a fazer escolhas informadas.         |
| Sofia (usuário) | quero uma função de "Pesquisa por Gênero"                       | para encontrar facilmente os filmes que se encaixam nos gêneros que adoro, como clássicos, romance e comédia, tornando a busca por filmes mais direta e familiar.    |
| Ana Roberta (usuário) | preciso de um "Perfil Simplificado"                                            | para personalizar minha experiência com opções fáceis de entender, como uma lista de favoritos e uma maneira de marcar filmes que já assisti.         |
| Ana Roberta (usuário) | quero uma opção de "Suporte ao Cliente Amigável"                             | para obter ajuda quando tiver dúvidas sobre como usar a plataforma de streaming, tornando minha experiência mais tranquila.                                 |
| Ana Roberta (usuário) | preciso de uma página de "Lançamentos Recentes"                                | para acompanhar os novos filmes que se encaixam nos meus gêneros preferidos, garantindo que eu não perca os últimos lançamentos.  |
| Ana Roberta (usuário) | quero um recurso de "Conteúdo Clássico em Destaque"                            | que destaque filmes clássicos em minha página inicial, lembrando-me dos filmes que adoro e apresentando-me a novos clássicos que podem me interessar.  |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID     | Descrição do Requisito  | Prioridade | Responsável |
|-------|-----------------------------------------|----| ----|
|RF-001 | O sistema deve permitir cadastrar usuário para utilização da plataforma                                   | ALTA |  |
|RF-002 | O sistema deve permitir realizar recomendações personalizadas de acordo com os gostos do usuário          | ALTA |  |
|RF-003 | O sistema deve permitir que o usuário crie um perfil personalizado de filmes e músicas                    | ALTA |  |
|RF-004 | O sistema deve permitir que o usuário possa pesquisar filmes e músicas por gênero                         | ALTA |  |
|RF-005 | O sistema deve informar ao usuário os lançamentos recentes de filmes e músicas de acordo com o seu perfil | ALTA |  |
|RF-006 | O sistema deve ter uma opção de chat para discussão entre usuários                                        | MÉDIA | |
|RF-007 | O sistema deve permitir que o usuário dê notas e escreva críticas sobre filmes e músicas                  | MÉDIA | |
|RF-008 | O sistema deve ter uma opção de suporte ao cliente para tirar dúvidas de uso da plataforma                | MÉDIA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|-------------------------|----| 

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
