const express = require('express')
const app = express()

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Routes = require('./routes/jokes.routes')
Routes(app)

app.listen(8000, () => console.log("Listening to the port 8000"))