
import Auto from "../../models/autos.model.js";
import Brand from "../../models/brands.model.js";
import Country from "../../models/countries.model.js";
import Transmission from "../../models/transmisions.model.js";

const getAllAutos = async (req, res) => {
    try {
        const autos = await Auto.findAll({
            attributes: ['id', 'name', 'year'],
            include: [
                {
                    model: Brand, attributes: ['id', 'name'],
                    include: { model: Country, attributes: ['name'] }
                },
                {
                    model : Transmission,
                    attributes : ['type']
                }
            ]
        });
        res.json(autos);
    } catch (error) {
        res.status(400).json(error)
    }
}

export {

    getAllAutos

} 


//1. Construir la relacion entre autos y gamas
//2. Agregar la gamma del auto a la consulta que realizamos

//ostrar la informacion de marca, transmision y gamma.