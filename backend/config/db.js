const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log(`Mongo connected ${connect.connection.host}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB