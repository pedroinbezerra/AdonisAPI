<h1> AdonisAPI - API Simples usando AdonisJS </h1>

<p align="center">
  <img src="https://i.ibb.co/4pZnZZW/adonisjs.png" alt="adonisjs"/>
  <img src="https://i.ibb.co/0q81Mjg/nodejs.png" alt="nodejs" width="30%"/>
  <img src="https://i.ibb.co/nm1WHRs/mysql.png" alt="mysql" width="20%"/>
</p>

<br><br><br>
# Requisitos iniciais

Como pré-requisitos para funcionamento do projeto, é necessário ter instalado em sua máquina:

* [NodeJS](https://nodejs.org/en/)
* [Mysql Server](https://dev.mysql.com/downloads/mysql/)


Para executar o projeto siga as instruções abaixo:

 1. Na pasta do projeto, abra um terminal de sua preferência e execute o comando `npm install` para baixar as dependências.

 2. Instale o mysql e crie uma base de dados chamada `adonisapi`.

 3. Utilize o usuário padrão `root` com `senha em branco` ou crie um usuário e senha e altere as linhas 11 e 12 do arquivo `.env`, respectivamente.

### Migrations

Execute o comando abaixo para criação das tabelas no banco de dados usando migrations

```javascript
adonis migration:run
```

## Instalando as dependências

Execute o comando abaixo instalar as dependências do projeto.

```javascript
adonis migration:run
```

## Servindo a aplicação

Execute o comando abaixo servir a aplicação.

```javascript
adonis serve --dev
```

## Consumindo a API

Para consumir a API recomento que utilize o [Insomnia](https://insomnia.rest/download).

Após baixar e instalar na sua máquina, vá em `Preferences` -> `Data` -> `Import Data` -> `From File`, selecione o arquivo `AdonisAPI.json` que está contido no projeto e clique em `Import`.
