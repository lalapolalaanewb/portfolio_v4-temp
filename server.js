/** Dependencies */
// Express
const express = require('express')
const app = express()
// Dotenv
const dotenv = require('dotenv')
dotenv.config()
// Colors
const colors = require('colors')
// Morgan
const morgan = require('morgan')

/** Global Middlewares */
// JSON Body Parser
// - for fetch call
app.use(express.json())
// - for form input
app.use(express.urlencoded({ extended: false }))

/** Conditional Global Middlewares */
// Morgan Console/Server Status
app.use(morgan('dev'))
// Static Folder
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))
  // re-route everything to homepage (any other routes other than declared in Routes Middlewares)
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

/** Server Startup */
app.listen(process.env.PORT || 5400, console.log(`Server is up & running at PORT ${process.env.PORT}`.green.bold))