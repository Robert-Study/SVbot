const mongoose = require('mongoose')

const mongoPath = `mongodb+srv://DatabaseUser:9q2HgkPYsIvwL6mL@cluster0.s12v0.mongodb.net/first-db?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose
}