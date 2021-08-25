# HostMyImg API

## MongoDB

- criar um bando de dados no usando a MongoDB CLI no terminal

```bash
$ source .bash_profile
$ mongo

> show dbs
> use hostmyimg-api
```

## Preparando o ambiente

- dando início ao projeto e configurando o package.json

`npm init`

- baixar os pacotes principais que vamos utilizar 

`npm install express morgan mongoose multer`

- baixar o nodemon como dependência de desenvolvimento 

`npm install --save-dev nodemon`

- criar scripts para startar o projeto no package.json

```json
"scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  }
```

- criar e organizar pastas e arquivos

```bash
/hostmyimg-api
├── node_modules
├── src
│   ├── index.js
│   ├── routes.js
│   ├── config
│   │   ├── multer.js
├── package.json
├── package-lock.json
```

## Amazon S3

https://s3.console.aws.amazon.com/s3/buckets/hostmyimg?region=us-east-1&tab=objects

