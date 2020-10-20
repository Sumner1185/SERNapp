const knex = require('./../db')

exports.carsAll = async (req, res) => {
    knex
      .select('*')
      .from('cars')
      .then(carData => {
          res.json(carData)
      })
      .catch(err => {
          res.json({ message: `There was an error retrieving cars; ${err}` })
      })
}