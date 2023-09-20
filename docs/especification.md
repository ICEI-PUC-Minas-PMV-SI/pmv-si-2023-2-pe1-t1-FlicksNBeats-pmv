# Especificações do Projeto
## Personas

Persona 1

Ana Roberta é uma mulher aposentada de 62 anos. Sua vida inteira sempre foi uma grande fã da indústria cinematográfica, adora assistir filmes, porém ela sempre usava métodos tradicionais para adquirir seus filmes, como locadoras e lojas físicas de compras. No entanto, nos últimos anos ela viu a drástica redução da disponibilidade destes serviços, então resolveu aderir o uso das plataformas de streaming, mas Ana se encontrou muito confusa dentre tantas opções disponíveis, no momento ela busca um site com uma ferramenta que possa auxiliá-la a encontrar os gêneros de filmes que no passado ela tanto gostava.

Persona 2

Sofia é uma jovem adulta de 19 anos com uma paixão ardente pelo entretenimento audiovisual. Ela é uma estudante universitária antenada e criativa, sempre em busca das últimas tendências em filmes, séries e músicas. Seu smartphone e laptop são suas ferramentas essenciais para explorar o mundo do entretenimento. Ela é ativa nas redes sociais, especialmente no Instagram e no TikTok, e busca um site onde seus seguidores possam acessar a qualquer momento suas opiniões sobre filmes, séries e músicas favoritas e tendências de uma forma bem organizada.

## Histórias de Usuários

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

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir cadastrar usuário para utilização da plataforma                                   | ALTA |  |
|RF-002| O sistema deve permitir realizar recomendações personalizadas de acordo com os gostos do usuário          | ALTA |  |
|RF-003| O sistema deve permitir que o usuário crie um perfil personalizado de filmes e músicas                    | ALTA |  |
|RF-004| O sistema deve permitir que o usuário possa pesquisar filmes e músicas por gênero                         | ALTA |  |
|RF-005| O sistema deve informar ao usuário os lançamentos recentes de filmes e músicas de acordo com o seu perfil | ALTA |  |
|RF-006| O sistema deve ter uma opção de chat para discussão entre usuários                                        | MÉDIA | |
|RF-007| O sistema deve permitir que o usuário dê notas e escreva críticas sobre filmes e músicas                  | MÉDIA | |
|RF-008| O sistema deve ter uma opção de suporte ao cliente para tirar dúvidas de uso da plataforma                | MÉDIA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
