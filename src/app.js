import express from 'express';
import db from './utils/database.js';
import initModels from './models/initModels.js';
import autosRoutes from './components/autos/autos.routes.js'

initModels();

db.authenticate()
    .then(()=> console.log('DB Connected'))
    .catch((error) => console.log(error))
    
db.sync() // {force : true } Borra la DB y la Vuelve a crear
    .then(()=>console.log('DB Sync'))
    .catch((error) => console.log(error))


const PORT = process.env.PORT ?? 1000;

const app = express();

app.use(autosRoutes);

app.get('/', (req,res)=>{
    res.send('OK')
})
app.listen(PORT , ()=>{
    console.log(`Running Server in PORT : ${PORT}`)
})