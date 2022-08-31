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
                message: "could't create event",
                success: false
            })
        }
    }
}


module.exports = cityController
