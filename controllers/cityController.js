const City = require('../models/City')

const cityController = {
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
    }
}


module.exports = cityController
