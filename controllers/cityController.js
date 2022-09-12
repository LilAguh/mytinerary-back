const City = require('../models/City')

const cityController = {
    //funcion creadora de nueva ciudad
    create: async (req, res) => {
        const { city, country, photo, population, fundation, information } = req.body

        try {
            await new City({ city, country, photo, population, fundation, information }).save()
            res.status(201).json({
                message: 'city create',
                succes: true
            })
        }
        catch (error) {
            res.status(400).json({
                message: "could't create city",
                success: false
            })
        }
    },
    allRead: async (req, res) => {
        try {
            let city = await City.find()
            res.status(200).json({
                message: 'you get all cities',
                response: city,
                succes: true
            })
        }
        catch (error) {
            res.status(400).json({
                message: "error displaying cities",
                success: false
            })
        }
    },
    //funcion busca ciudad por id
    read: async (req, res) => {
        const { id } = req.params

        try {
            let city = await City.findOne({ _id: id })
            if (city) {
                res.status(200).json({
                    message: "you get one city",
                    response: city,
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error in search city",
                success: false
            })
        }
    },
    //funcion que elimina ciudades por la id
    remove: async (req, res) => {
        const { id } = req.params

        try {
            let city = await City.deleteOne({ _id: id })
            if (city) {
                res.status(200).json({
                    message: "the city was successfully deleted",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error in delete this city",
                success: false
            })
        }
    },
    //function que modifica las ciudades exitentes
    update: async (req, res) => {
        const { id } = req.params
        const makeChanges = req.body

        try {
            let city = await City.updateOne({ _id: id }, makeChanges, { new: true })
            if (city) {
                res.status(201).json({
                    message: "the city was successfully modified",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error modifying this city",
                success: false
            })
        }
    }
}


module.exports = cityController
