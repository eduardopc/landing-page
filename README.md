# Simple NextJS Quick Start

A simple project starter to work with React, NextJS and Styled Components

You can see the example in [https://nextjs-quickstart.now.sh/](https://nextjs-quickstart.now.sh/)

### 📦 Install

```
$ git clone https://github.com/guilouro/simple-nextjs-quick-start.git

$ yarn install
```

### 🔨 How to use

Runs next which starts Next.js in development mode

```bash
$ yarn dev
```

Runs next build which builds the application for production usage

```bash
$ yarn build
```

Runs next start which starts a Next.js production server

```bash
$ yarn start
```

Runs next build and export which exports a files in a `out` folder to deploy

```bash
$ yarn deploy
```

### Tips

Para pegar um código HTML do backend e apresentar corretamente no front, utilizar da seguinte sintaxe:

> <S.Text dangerouslySetInnerHTML={{ __html: description }}/>

Essa abordagem é válida quando temos confiança no dado passado pelo backend.
Em caso onde não há certeza, é necessário fazer a sanitização do dado antes de apresentá-lo.
