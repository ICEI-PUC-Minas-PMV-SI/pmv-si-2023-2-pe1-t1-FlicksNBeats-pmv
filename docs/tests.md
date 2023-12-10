# Testes

Neste projeto serão realizados dois tipos de testes:

- O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
- O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo.

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

- [Testes](#testes)
- [Teste de Software](#teste-de-software)
  - [Plano de Testes de Software](#plano-de-testes-de-software)
  - [Registro dos Testes de Software](#registro-dos-testes-de-software)
  - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)

# Teste de Software

## Plano de Testes de Software

|     **Caso de Teste**     | **CT01 - Validar criação de conta**                                                                                                                                                                                   |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário informa nome, sobrenome, email, senha e confirmação de senha inválida.<br>2) Usuário clica no botão "Criar Conta".<br>3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. |
| **Requisitos associados** | RF-001                                                                                                                                                                                                                |
|  **Resultado esperado**   | Aplicação abrir caixa de diálogo informando que os dados estão incorretos.                                                                                                                                            |
|   **Dados de entrada**    | Inserção de dados inválidos no formulário de cadastro.                                                                                                                                                                |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                              |

|     **Caso de Teste**     | **CT02 - Criar conta**                                                                                                                                                                                                                                    |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário informa nome, sobrenome, email, senha e clica no botão "Criar Conta".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login. |
| **Requisitos associados** | RF-001                                                                                                                                                                                                                                                    |
|  **Resultado esperado**   | Criação de cadastro                                                                                                                                                                                                                                       |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de cadastro.                                                                                                                                                                                                      |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                                  |

|     **Caso de Teste**     | **CT03 - Pesquisar Filmes/Séries por gênero**                                                                                                                                                                                                        |
| :-----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário digita o nome do filme/série que gostaria de pesquisar na barra de busca e aperta o botão de pesquisa (ícone da lupa).<br>2) O usuário aperta o botão de filtro e seleciona quais gêneros deseja filtrar e aperta no botão "Aplicar".<br> |
| **Requisitos associados** | RF-004                                                                                                                                                                                                                                               |
|  **Resultado esperado**   | A lista deve conter apenas resultados que se encaixem no filtro aplicado.                                                                                                                                                                            |
|   **Dados de entrada**    | Nome do filme/série e filtro de busca.                                                                                                                                                                                                               |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                             |

|     **Caso de Teste**     | **CT04 - Página de lançamentos recentes**                                            |
| :-----------------------: | ------------------------------------------------------------------------------------ |
|     **Procedimento**      | 1) Usuário entra na página inicial da aplicação.                                     |
| **Requisitos associados** | RF-005                                                                               |
|  **Resultado esperado**   | Um carrossel com os lançamentos mais recentes deve estar presente na página inicial. |
|   **Dados de entrada**    | Nenhum                                                                               |
|   **Resultado obtido**    | Sucesso.                                                                             |

|     **Caso de Teste**     | **CT05 - Escrever crítica sobre filme/série**                                                                                                                              |
| :-----------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário seleciona o filme/série durante a navegação na aplicação.<br>2) Usuário escreve a crítica sobre o filme/série no campo de inserção de texto e aperta em postar. |
| **Requisitos associados** | RF-007                                                                                                                                                                     |
|  **Resultado esperado**   | A crítica ser publicada na página do filme/série.                                                                                                                          |
|   **Dados de entrada**    | Crítica do filme/série.                                                                                                                                                    |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                   |

|     **Caso de Teste**     | **CT06 - Lista de favoritas pública**                                                                                                  |
| :-----------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usário clicka no botão "Favorito" na página de algum filme/série durante a navegação. <br>2) Usuário entra na página de perfil.<br> |
| **Requisitos associados** | RF-009                                                                                                                                 |
|  **Resultado esperado**   | Uma seção da página deve conter os filmes/séries que o usuário favoritou.                                                              |
|   **Dados de entrada**    | Favoritar filme/série.                                                                                                                 |
|   **Resultado obtido**    | Sucesso.                                                                                                                               |

## Registro dos Testes de Software

| _Caso de Teste_                   | _TC-01 - Validar criação de conta_                                                |
| --------------------------------- | --------------------------------------------------------------------------------- |
| Requisito Associado               | RF-001 - O sistema deve permitir cadastrar usuário para utilização da plataforma. |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t                       |

| _Caso de Teste_                   | _TC-02 - Criar conta_                                                             |
| --------------------------------- | --------------------------------------------------------------------------------- |
| Requisito Associado               | RF-001 - O sistema deve permitir cadastrar usuário para utilização da plataforma. |
| Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                       |

| _Caso de Teste_                   | _TC-03 - Pesquisar Filmes/Séries por gênero_                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-004 - O sistema deve permitir que o usuário possa pesquisar filmes e músicas por gênero. |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t                                 |

| _Caso de Teste_                   | _TC-04 - Página de lançamentos recentes_                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-005 - O sistema deve informar ao usuário os lançamentos recentes de filmes e músicas de acordo com o seu perfil. |
| Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                                                         |

| _Caso de Teste_                   | _TC-05 - Escrever crítica sobre filme/série_                                                       |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-007 - O sistema deve permitir que o usuário dê notas e escreva críticas sobre filmes e músicas. |
| Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t                                        |

| _Caso de Teste_                   | _TC-06 - Lista de favoritas pública_                            |
| --------------------------------- | --------------------------------------------------------------- |
| Requisito Associado               | RF-009 - O sistema deve permitir publicar a lista de favoritos. |
| Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar     |

## Avaliação dos Testes de Software

Com os testes foi possível confirmar que as funcionalidades funcionam de acordo com a especificação. Porém diversos pontos de melhorias foram notados, como distribuir os dados de acordo com cada usuário (separar dados no banco para cada usuário).
