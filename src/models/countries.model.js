import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Country = db.define('countries',{
    //El id se genera solo si lo omitimos
    name : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    code : {
        type : DataTypes.STRING(5),
        allowNull:false,
        unique: true


    }
},{
    //Evita las estampas de tiempo que genera, en un tercer objeto, genera espacio inecesario en la DB
    timestamps:false
});

export default Country;