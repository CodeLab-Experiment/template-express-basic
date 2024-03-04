const express = require('express')
const cors = require('cors')
const { PORT, DATABASE_URL } = require('./config/variables.config')
const onYourNetwork = require('./config/onYourNetwork.config')
const dbConfig = require('./config/db.config')

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

dbConfig(DATABASE_URL)

app.get('/', (req, res) => {
  res.json({ message: 'Server Work' })
})

const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')

authRoutes(app)
userRoutes(app)

app.listen(PORT, () => {
  console.clear()

  console.info(`Server running at
      Local:            http://localhost:${PORT}/
      On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}/`)
})
