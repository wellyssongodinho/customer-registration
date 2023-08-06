<div id="top"></div>

# :truck: Entregáveis

<p align="center">
  <a href="#rocket-tecnologies">Tecnologia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-roadmap">Roadmap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribure">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</p>

## :rocket: Tecnologia

Você irá usar as seguintes ferramentas para construir sua aplicação:

- [![Docker][Docker]][Docker-url]
- [![Nest][NestJS]][Nest-url]
- [![Next][Next.js]][Next-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![TypeORM][TypeORM.io]][TypeORM-url]
- [![Swagger][Swagger]][Swagger-url]
- [![TypeScript][TypeScript.org]][TypeScript-url]

## 💻 Projeto

O projeto visa disponibilizar um cadastro de clientes contendo uma tela/formulário para coletar informações como nome completo, CPF, e-mail, cor
preferida, observações e armazená-las em um banco de dados.

## 🔖 Layout

Livre.

## :construction: Roadmap

- [x] Deve usar o padrão de API REST (HTTP/JSON);
- [x] Pode ser feito em node.js (typescript);
- [x] Documentação da interface da API gerada (swagger);
- [x] Setup de ambiente de desenvolvimento usando docker / docker-compose;

>Detalhes

- [x] Criado API's (com NestJS)
- [x] Criado documentação das API's (com Swagger)
- [x] Criado CRUD front-end (com NextJS)
- [x] Criado containers (com Docker)
- [x] Criado CI/CD backend (com GitHub Actions)
- [x] Implmentado com lint ou qualidade

## :memo: Licença

Uso livre.

## Para rodar o projeto

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Instalação

### Clone o projeto

```bash
git clone https://github.com/wellyssongodinho/customer-registration.git
```

### Backend

Acesso o repositório `customer-registration-backend`

#### Crie uma instância do PostgreSQL

Você irá usar PostgreSQL como o banco de dados para a sua aplicação NestJS. Esse tutorial mostrará como instalar PostgreSQL via Docker container.

> Nota: Se você não quiser utilizar Docker, poderá configurar uma instância local do PostgreSQL ou hospedá-la diretamente no Heroku/AWS/OCI.

Avalie o arquivo docker-compose.yml no diretório principal do projeto.

Esse arquivo `docker-compose.yml` contém as especificações necessárias para rodar uma instância local do PostgreSQL via docker container:

```bash
version: "3.8"
services:
  postgres:
    image: postgres:latest
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres:/var/lib/postgresql/data
volumes:
  postgres:
```

Algumas definições para ajudar na compreensão:

A opção `image` define a imagem que será utilizada no container Docker. Aqui, nós estamos utilizando a última versão do `postgres`.
A opção `environment` determina algumas variáveis que serão passadas durante a inicialização do container. Você poderá definir outras opções de configuração e credenciais – como username e password.
A opção `volumes` é usado para persistir o local do file system de armazenamento do container.
A opção `ports` mapeia as portas de acesso ao ambiente do Postgres no container. O formato segue a convenção `'host_port:container_port'`. Neste caso, estamos definindo apenas a porta 5432 do PostgreSQL container, pois é a porta padrão.

Certifique-se de que nada esteja rodando na porta `5432` em sua máquina. Para iniciar o postgres container, abra o terminal e rode o seguinte comando no diretório principal do seu projeto:

```bash
docker-compose up -d
```

Se todas as coisas estiverem certas, o novo terminal estará pronto para aceitar sua conexão com o banco. Você deve ver uns logs similar ao seguinte:

```bash
...
❯ docker-compose up -d
[+] Running 2/2
 ⠿ Network pebmed-server_default       Created                                                                                                                                                    0.1s
 ⠿ Container pebmed-server-postgres-1  Started  
```

Parabéns 🎉. Você agora tem seu próprio banco de dados PostgreSQL!

#### Instalando pacotes backend

```bash
//
$ npm install
```

#### Rodando as API

```bash
# watch mode
$ npm run start:dev
```

### Frontend

Acesso o repositório `customer-registration-backend`

#### Instalando pacotes frontend

```bash
//
$ npm install
```

#### Rodando a aplicação

```bash
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

<h1 id="autor">Autor</h1>

- [![Linkedin][Linkedin]][Linkedin-url]
- [![Gmail][Gmail]][Gmail-url]

[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=codesandbox&logoColor=#2496ED
[Docker-url]: https://www.docker.com/

[Gmail]: https://img.shields.io/badge/-wellysson.gomes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellysson.gomes@gmail.com
[Gmail-url]: mailto:wellysson.gomes@gmail.com

[Linkedin]: https://img.shields.io/badge/-Wellysson_Godinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellyssongodinho-236170234/
[Linkedin-url]: https://linkedin.com/in/wellyssongodinho/

[NestJS]: https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=#E0234E
[Nest-url]: https://nextjs.org

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=#000000
[Next-url]: https://nextjs.org/

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[Swagger]: https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black
[Swagger-url]: https://www.prisma.io

[TypeORM.io]: https://img.shields.io/badge/TypeORM-E83524?style=for-the-badge&logo=typescript&logoColor=white
[TypeORM-url]: https://typeorm.io

[TypeScript.org]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org

