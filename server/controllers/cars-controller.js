const knex = require('./../db')

exports.carsAll = async (req, res) => {
    knex
      .select('*')
      .from('garage')
      .then(carData => {
          res.json(carData)
      })
      .catch(err => {
          res.json({ message: `There was an error retrieving cars; ${err}` })
      })
}

exports.carCreate = async (req, res) => {
    knex('garage')
      .insert({
          'make': req.body.make,
          'model': req.body.model,
          'colour': req.body.colour,
          'year': req.body.year
      })
      .then(() => {
          res.json({ message: `Car: \'${req.body.colour} ${req.body.make} ${req.body.model}\' created.`})
      })
      .catch(err => {
          res.json({ message: `There was an error adding ${req.body.make} ${req.body.model}: ${err}`})
      })
}

exports.carDelete = async (req, res) => {
    knex('garage')
      .where('id', req.body.id)
      .del()
      .then(() => {
          res.json({ message: `Car ${req.body.id} deleted` })
      })
      .catch(err => {
          res.json({ message: `There was an error deleting car ${req.body.id}: ${err}` })
      })
}

exports.carsReset = async (req, res) => {
    knex
      .select('*')
      .from('garage')
      .truncate()
      .then(() => {
          res.json({ message: 'Car list cleared' })
      })
      .catch(err => {
        res.json({ message: `There was an error deleting car list: ${err}` })
      })
}
