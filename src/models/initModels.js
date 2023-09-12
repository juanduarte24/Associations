//Importar todos nuestros Modelos
import Auto from "./autos.model.js";
import Country from './countries.model.js';
import Brand from "./brands.model.js";
import Transmission from "./transmisions.model.js";
const initModels = ()=>{
//Relacion entre autos y marcas
//Marca tiene muchos autos
Auto.belongsTo(Brand, {foreignKey:"brandId"});
//Un auto pertenece a una marca
Brand.hasMany(Auto, {foreignKey:"brandId"});

//Relacion entre brand y country
//Brand pertenece a un pais
Brand.belongsTo(Country,{foreignKey : "countryId"});
//Un pais tiene muchas marcas
Country.hasMany(Brand , {foreignKey: "countryId"});

//Autos y tansmisiones
//Un Auto tiene muchas transmisiones
//Una tranmision la pueden tener muchos autos
Auto.belongsToMany(Transmission,{through : 'AutoTransmissions'});

Transmission.belongsToMany(Auto , {through : 'AutoTransmissions'});
};


export default initModels;