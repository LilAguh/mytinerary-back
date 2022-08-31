const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    photo: { type: String, required: true },
    population: { type: Number, required: true },
    fundation: { type: Date, required: true },
    information: { type: String, required: true }
})

const City = mongoose.model(
    'cities',
    schema
    //nombre de la coleccion
    //esquema de datos
)

module.exports = City