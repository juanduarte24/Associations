# Associations
## Levantar el proyecto

1. Iniciar el proyecto con node 
```shell
npm init -y
```
2. Instalar las dependencias del Proyecto
```shell
npm i express sequelize pg pg-hstore cors dotenv
```
3. Instalar las dependencias
```shell
npm i nodemon -D
```
## Modificar el package.json

1. Agregar el type para ES6 => type:module
```json
"type": "module"```

2. Agregar los scripst de arranque y desarrollo
```json
"scripts": {
    "start":"node ./src/app.js",
    "dev":"nodemon ./src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Y al final el package.json nos queda asi
```json
{
  "name": "associations",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start":"node ./src/app.js",
    "dev":"nodemon ./src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.33.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

```

```json
{
  "name": "associations",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.33.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## Crear nuestras carpetas y archivos
- / 
    - /src
        - /models
        - /components
        -app.js
- .gitignore
- .env

En .gitignore agregamos lo siguiente
```
node_modules
.env
```

## Crear un servidor basico
Nos dirigimos al archivo app.js

1. Importamos express
```js
import express from 'express';
```
2. Crear una instancia de express
```js
import express from 'express';

const app = express();
```
3. Creamos una ruta oara HealthCheck
```js
import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})
```

4. Creamos una variable para nuestro puerto 
```js
import express from 'express';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})
```
5. Dejar escuchando al Servidor
```js
import express from 'express';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(PORT , ()=>{
    console.log(`Running Server in PORT : ${PORT}`)
})
```

## Conectarnos  a la base de datos
1. Crear una base de datos en Postgres. (autos)

2. En utils crear un archivo llamada database.js

3. Importar Sequelize y dotenv
```js
import {Sequelize} from 'Sequelize';
import 'dotenv/config';
```
4. Crear una instancia con la informacion de la conexion
```js
import {Sequelize} from 'Sequelize';
import 'dotenv/config';

const db = new Sequelize({
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT,
    username :  process.env.DB_USER,
    password : process.env.PASSWORD,
    dialect : 'postgres'

})
```

5. Exportar la configuracoin de la conexion
```js
export default db;
```
> No olvides crear las variables de entorno en .env

### Probar la conexion a la base de datos
En app.js importamos db para usar el metodo authenticate
```js
import express from 'express';
import db from './utils/database.js';

const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(PORT , ()=>{
    console.log(`Running Server in PORT : ${PORT}`)
})
```
Usamos el metodo authenticate para probar la conexion

```js
import express from 'express';
import db from './utils/database.js';

db.authenticate()
    .then(()=> console.log('DB Connected'))
    .catch(error => console.log(error))
const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(PORT , ()=>{
    console.log(`Running Server in PORT : ${PORT}`)
})
```
### Crear Modelos
