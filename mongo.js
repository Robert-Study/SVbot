const mongoose = require('mongoose')

const mongoPath = (process.env.mongo)

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useFindAndModify: false,
  })

  return mongoose
}