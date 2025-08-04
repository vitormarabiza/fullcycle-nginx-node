# fullcycle-nginx-node

Projeto de exemplo para desafio Full Cycle utilizando **NGINX como proxy reverso**, uma aplicação **Node.js** e banco de dados **MySQL**.

---

## Descrição

Este projeto demonstra a integração entre:

- **NGINX** atuando como proxy reverso, expondo a aplicação na porta 8080.
- **Node.js** que responde às requisições do NGINX, cadastrando nomes na tabela `people` do banco MySQL.
- **MySQL** para armazenamento dos nomes cadastrados.

Ao acessar `http://localhost:8080`, o NGINX encaminha a requisição para a aplicação Node.js, que adiciona um registro no banco e retorna uma página HTML com:

- O texto `<h1>Full Cycle Rocks!</h1>`
- A lista de nomes cadastrados no banco.

---

## Tecnologias utilizadas

- NGINX
- Node.js
- Express
- MySQL 5.7
- Docker e Docker Compose

---

## Como rodar o projeto

### Pré-requisitos

- Docker instalado
- Docker Compose instalado

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/vitormarabiza/fullcycle-nginx-node.git
   cd fullcycle-nginx-node
