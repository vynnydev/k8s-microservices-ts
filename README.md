## Executando o projeto

IN DEVELOPMENT

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/vynnydev/k8s-microservices-ts
cd k8s-microservices-ts **escolha o microsserviço**
npm install
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS, baseado em Clean Architecture.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados PostgreSQL e **recomendamos** o uso do Docker para executar o banco em sua máquina.

> Você pode instalar o Docker seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Docker-6290d9994b0b4555a153576a1d97bee2).

Após instalar o Node.js e o Docker, vamos acessar a pasta do projeto back-end, subir o serviço do banco de dados, configurar nossas variáveis ambiente e, então, subir o servidor HTTP.


**🏧 Server:**
**Todos os microsserviços são desenvolvidos em Clean Architecture**
**Para saber mais sobre:** [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

<div align="center">
  <img title="clean-architecture" src="./docs/images/clean-architecture.jpg"/>
</div>
<br/>

- [accounts](./packages/microservices/accounts/) -- **em desenvolvimento**
- [purchases](./packages/microservices/purchases/) -- **feito**
- [invoices](./packages/microservices/invoices/) -- **em desenvolvimento**
- [store](./packages/microservices/store/) -- **em desenvolvimento**

```sh
cd packages/microservices

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

# Criar um banco SQL no Railway e um cluster Kafka no Upstash
# OU
# Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
docker-compose up -d

# Rodar as migrations do prisma
npx prisma migrate dev

# Subir o servidor HTTP
npm run start:dev
```

## Tech Stack 💜

A _stack_ foi escolhida por vynnydev.

**🏧 Server:**

- [NestJS](https://github.com/nestjs/nest) 
- [ExpressJS] (https://expressjs.com/) `(REST)` & `(Streaming Kafka)`
- [Prisma](https://github.com/prisma/prisma)
- [PostgreSQL](https://github.com/postgres) [`Railway`](https://railway.app/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [KafkaJS](https://www.sympla.com.br/api-doc/index.html) [`Upstash`](https://upstash.com/)
- [Swagger] (https://swagger.io/)

## Funcionalidades 🚀

Até o momento, levando em consideração o prazo de 2 semanas _(Due: 01/07/2023)_, listamos algumas funcionalidades básicas que devemos entregar. Caso sobre tempo, podemos trabalhar em funcionalidades secundárias, _backlog_.

### Funcionalidades 1.0 (MVP):
- [ ] **Comprar produto** - **Purchase API**
      Cadastro por requisição REST e envio de dados via streaming Apache Kafka.

- [ ] **Comprar produto** - **Purchase API**
      Cadastro por requisição REST e envio de dados via streaming Apache Kafka.

- [ ] **Visualizar meu produto** - **Store API**
      Receber os produtos via Kafka e visualizar produtos através da entidade "order".
      Receber os clientes, junto com os usuários e visualiza-los através da entidade "profile".

### Funcionalidades 2.0:

- [ ] **Faturas**
- [ ] **Cadastrar cartões de credito de debito**
- [ ] **Administrar vendas e compras e adicionar dinheiro**
- [ ] **Plataforma de vendas**
- [ ] **FAQ** - (_Frequently Asked Questions / Perguntas Frequentes_)

## Contribuições 🆘

Ficarei muito feliz em receber dicas de como eu posso melhorar este projeto.

Para facilitar a interação, gostaríamos de lembrar alguns pontos importantes sobre como contribuir com este projeto:

### Discussões

Utilizem a [aba de discussões](https://github.com/vynnydev/k8s-microservices-ts/discussions) para compartilhar ideias e sugestões para o projeto. Essa é uma ótima maneira de começar uma discussão sobre algo que possa ser melhorado ou adicionado ao aplicativo.

### Issues

Caso encontrem algum problema durante o uso do aplicativo ou queiram sugerir uma nova tarefa, utilizem a [aba de issues](https://github.com/vynnydev/k8s-microservices-ts/issues). Lá, vocês podem postar as suas sugestões e reportar problemas encontrados. É importante lembrar que novas tarefas só devem ser criadas se a comunidade aprovar na aba de discussões.

### Pull Requests

Se vocês quiserem contribuir com código, podem fazer um [fork do repositório](https://github.com/vynnydev/k8s-microservices-ts/fork) e trabalhar em suas próprias cópias. Quando finalizarem, enviem um [pull request](https://github.com/vynnydev/k8s-microservices-ts/pulls) para que possamos revisar o código e integrar ao projeto principal.

`#Dica 💡`: Não tenha medo de fazer um _Pull Request_, utilize dessa oportunidade para receber críticas construtivas de outras pessoas acerca do seu código e melhore suas habilidades!

## Roadmap

- **MVP** `v1.0.0` 📅 Meta: 01/07/2023 - Lançar o app com as funcionalidades listadas até o momento.

- Só o tempo dirá... 👀

## Licença 📃

[MIT](https://github.com/vynnydev/k8s-microservices-ts/LICENSE)
