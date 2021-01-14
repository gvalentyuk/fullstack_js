const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

dotenv.config()

connectDB()
const app = express()
app.use(express.json())
app.use(cors())

//Routes mount
app.use('/api/products', require('./routes/products'))
app.use('/api/user', require('./routes/user'))
app.use('/api/orders', require('./routes/order'))
app.use('/api/upload', require('./routes/uploads'))

app.use('/images', express.static(path.join(__dirname, '/frontend/public/images')))

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server run on ${process.env.PORT}`))
