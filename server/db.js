const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex') ({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
    .hasTable('cars')
        .then((exists) => {
            if (!exists) {
                return knex.schema.createTable('cars', (table) => {
                    table.increments('id').primary()
                    table.string('make')
                    table.string('model')
                    table.string('colour')
                    table.string('year')
                })
                .then(() => {
                    console.log('Table \'cars\' created')
                })
                .catch((err) => {
                    console.error(`There was an error creating table: ${err}`)
                })
            }
        })
        .then(() => {
            console.log('done')
        })
        .catch((err) => {
            console.error(`There was an error creating database: ${err}`)
        })

knex.select('*').from('cars')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

module.exports = knex
