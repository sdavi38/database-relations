### API para criação de clientes, produtos e pedidos de compra

## Indice
<p align="center">
  <a href="#bookmark-sobre">Sobre</a> |
  <a href="#computer-tecnologias-utilizadas">Tecnologias</a> |
  <a href="#dart-objetivo">Objetivo</a> |
  <a href="#gear-requisitos">Requisitos</a> |
  <a href="#package-como-baixar-o-projeto">Baixar</a> |
  <a href="#bust_in_silhouette-autor">Autor</a> |
  <a href="#pencil-licença">Licença</a>
</p>

## :bookmark: Sobre
API criada para simular um pequeno ecommerce</BR>
Possibilidade de cadastrar clientes e produtos</BR>
É possivel criar um novo pedido de compra relacionando o pedido com o cliente e com os produtos

## :computer: Tecnologias Utilizadas

Back-End
- NodeJS
- Express
- TypeScript
- Typeorm
- Tsyringe

Banco de dados
- PostgreSQL

## :dart: Objetivo
- Cadastrar clientes
- Cadastrar produtos
- Criar pedido de compra
- Relação da tabela de pedidos com as tabelas de clientes e pedidos_produtos
- Relação da tablela pedidos_produtos com as tabelas de produtos e pedidos

## :gear: Requisitos:
- Editor de código (recomendo o Visual Studio Code: https://code.visualstudio.com/)
- Node JS (https://nodejs.org/en/)
- Yarn (https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- PostrgreSQL (https://www.postgresql.org/)

## :package: Como Baixar o projeto
Pelo seu terminal, escolha um local para o projeto e rode os comandos:
```bash
  # Clonar o repositório
  $ git clone https://github.com/luizcampos331/database-relations.git

  # Entrar no diretório
  $ cd database-relations

  # Instalar dependências
  $ yarn

```
Obs: tendo o postgreSQL instalado e iniciado, crie um banco com o nome "gostack_desafio09"<BR>
rode o comando "yarn typeorm migration:run" para a criação das tabelas

Obs 2: Caso aconteça algum erro na obs acima verifique as variáveis do arquivo "ormconfig.json" </BR>
e compare se as configurações do banco de dados bate com as suas

## :bust_in_silhouette: Autor:
Luiz Eduardo Campos da Silva</br>
LinkedIn: <a href="https://www.linkedin.com/in/luiz-campos">@luiz-campos</a></br>
Github: <a href="https://www.github.com/luizcampos331">@luizcampos331</a>


## :pencil: Licença
Copyright © 2020 <a href="https://www.github.com/luizcampos331">Luiz Campos</a></br>
Este projeto é licenciado pelo <a href="LICENSE">MIT</a>
