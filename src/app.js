import express from 'express';
import db from './utils/database.js';
import initModels from './models/initModels.js';

initModels();

db.authenticate()
    .then(()=> console.log('DB Connected'))
    .catch((error) => console.log(error))
    
db.sync()
    .then(()=>console.log('DB Sync'))
    .catch((error) => console.log(error))


const PORT = process.env.PORT ?? 8000;

const app = express();

app.get('/', (req,res)=>{
    res.send('OK')
})

app.listen(PORT , ()=>{
    console.log(`Running Server in PORT : ${PORT}`)
})