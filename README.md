# Bem vindo(a)s ao repositorio de Back-end do meu desafio técnico para empresa Voll Solutions

O objetivo desse desafio é desenvolver um chat-online para conversas em grupo utilizando WebSocket.

## Requisitos

Ao se conectar no app, será necessário informar um nome de usuário que será usado como identificação nas mensagens enviadas.

Todos usuários conectados podem enviar e ler mensagens de todas as pessoas conectadas.

Ao se conectar, será necessário carregar o histórico das últimas 30 mensagens trocadas através de uma API REST.

As mensagens deverão ser armazenadas em um banco de dados da sua escolha.

- [Link aplicação front-end](https://lucasquearis-voll-solutions-case.netlify.app/login)

- [Link repositório front-end](https://github.com/lucasquearis/voll-case-front-end)

## Sumário

- [Iniciando a aplicação Localmente](#initApp)
- [Arquitetura](#architecture)
- [Banco de dados utilizado](#database)
- [Deploy](#deploy)
- [End-point](#end-point)
- [Tecnologias utilizadas](#technologies)

# <a name="initApp"></a> Iniciando a Aplicação Localmente

Para iniciar a aplicação primeiramente clone este repositório com o seguinte comando:

<code>$ git clone git@github.com:lucasquearis/voll-case-back-end.git </code>

Apos clonado o repositório, entre em sua pasta principal com o comando:

<code>$ cd voll-case-back-end</code>

 e instale todas as dependências com o comando:

<code>$ npm install </code>

Após instalar todas as dependências vamos associar nosso banco de dados MONGODB criando um arquivo na pasta raíz do projeto chamado **.env** com a variável:

<code>MONGO_DB_URI='mongodb://127.0.0.1:27017'</code>

o endereço padrão do mongodb da sua máquina.

Com o banco associado, podemos iniciar a aplicação com o comando:

<code>$ npm start</code>

<hr>

# <a name="architecture"></a> Arquitetura

A arquitetura do projeto foi desenvolvida no modelo MSC - Model, Service e Controller

![Arquitetura](/images/arquitetura.png)

# <a name="database"></a> Banco de dados utilizado

O projeto foi desenvolvido utilizando o banco de dados MongoDB, com isso utilizei como núvem o [Mongo Atlas](https://www.mongodb.com/pt-br/cloud) o que me possibilitou ter um banco totalmente dedicado e pronto para uso a qualquer momento.

# <a name="deploy"></a> Deploy

O deploy da aplicação foi feito no Heroku, no seguinte Link:
[Heroku Deploy](https://lucasquearis-voll-solutions.herokuapp.com/)

# <a name="end-point"></a> End-point

O único end-point criado para essa aplicação rodar, foi o enpoint messages:

<code><http://localhost:3001/messages></code>

Endpoint já no Heroku:

<code><https://lucasquearis-voll-solutions.herokuapp.com/messages></code>

Que traz todas as mensagens registradas no banco no formato:

<code>_id, username, message e time</code>

![Mensagens pelo end-point](/images/end-point.png)

# <a name="technologies"></a> Tecnologias utilizadas

- Nodemon - 2.0.15 Desenvolvimento em tempo real.
- Cors - 2.8.5 Liberar as portas do socket e utilizar API já com deploy
- date-fns - 2.28.0 Formatação do horário do Banco de Dados
- dotenv - 16.0.0 Facilitar a variável de ambiente
- eslint - 8.8.0 Padronização do código
- express - 4.17.2 Framework para API
- mongodb - 4.3.1 Conexão com o MongoDB
- socket.io - 4.4.1 Conexão em tempo real com mais de um cliente.
